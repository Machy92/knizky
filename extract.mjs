import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const basePath = '/Users/matejmachovsky/Desktop/knizk/rozbory_andy';

function getDocxFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const stat = fs.statSync(path.join(dir, file));
    if (stat.isDirectory()) {
      getDocxFiles(path.join(dir, file), fileList);
    } else if (file.endsWith('.docx') && !file.startsWith('~$')) {
      fileList.push(path.join(dir, file));
    }
  }
  return fileList;
}

const docxFiles = getDocxFiles(basePath);

function parseText(text, filename) {
  // text is the raw text from the DOCX.
  const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  
  const book = {
    id: path.basename(filename, '.docx').toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-null-]/g, ''),
    title: lines[0],
    author: '',
    authorInfo: '',
    authorBio: '',
    period: '',
    typeAndGenre: '',
    theme: '',
    timeAndSpace: '',
    composition: '',
    characters: [],
    plotSummary: [],
    languageAndStyle: [],
    context: []
  };

  let currentSection = '';
  
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    const lower = line.toLowerCase();
    
    if (lower.startsWith('spisovatel:')) {
      book.authorInfo = line.substring(11).trim();
      book.author = book.authorInfo.split(',')[0].trim();
      continue;
    }
    if (lower.startsWith('informace o autorovi:')) {
      book.authorBio = line.substring(21).trim();
      continue;
    }
    if (lower.startsWith('literární druh:')) {
      const type = line.substring(15).trim();
      book.typeAndGenre = book.typeAndGenre ? type + ', ' + book.typeAndGenre : type;
      continue;
    }
    if (lower.startsWith('literární žánr:')) {
      const genre = line.substring(15).trim();
      book.typeAndGenre = book.typeAndGenre ? book.typeAndGenre + ', ' + genre : genre;
      continue;
    }
    if (lower.startsWith('časoprostor:')) {
      book.timeAndSpace = line.substring(12).trim();
      continue;
    }
    if (lower.startsWith('téma:')) {
      book.theme = line.substring(5).trim();
      continue;
    }
    if (lower.startsWith('kompozice:')) {
      book.composition = line.substring(10).trim();
      continue;
    }
    if (lower.startsWith('postavy')) {
      currentSection = 'characters';
      continue;
    }
    if (lower.startsWith('děj')) {
      currentSection = 'plot';
      continue;
    }
    if (lower.startsWith('typy promluv:')) {
      book.languageAndStyle.push(line.substring(13).trim());
      continue;
    }
    if (lower.startsWith('autorovo zasazení:') || lower.startsWith('další díla:')) {
      book.context.push(line);
      continue;
    }
    if (lower.startsWith('motivy:')) {
      book.theme += ' (Motivy: ' + line.substring(7).trim() + ')';
      continue;
    }

    if (currentSection === 'characters') {
      if (line.includes(':')) {
        const parts = line.replace(/^[-•]\s*/, '').split(':');
        book.characters.push({ name: parts[0].trim(), description: parts.slice(1).join(':').trim() });
      }
    } else if (currentSection === 'plot') {
      book.plotSummary.push(line);
    }
  }
  
  return book;
}

const parsedBooks = [];

for (const file of docxFiles) {
  const result = execSync(`textutil -convert txt "${file}" -stdout`, { encoding: 'utf-8' });
  const book = parseText(result, file);
  parsedBooks.push(book);
}

// Fix some author names or IDs manually if needed
parsedBooks.forEach(b => {
  if (!b.title) b.title = path.basename(b.id);
});

console.log(JSON.stringify(parsedBooks, null, 2));
