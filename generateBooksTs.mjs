import fs from 'fs';

const parsed = JSON.parse(fs.readFileSync('parsed_andy.json', 'utf8'));

// Base placeholders from original books.ts
const baseTemplate = [
  { id: "maly-princ", title: "Malý princ", author: "Antoine de Saint-Exupéry" },
  { id: "romeo-a-julie", title: "Romeo a Julie", author: "William Shakespeare" },
  { id: "zkroceni-zle-zeny", title: "Zkrocení zlé ženy", author: "William Shakespeare" },
  { id: "farma-zvirat", title: "Farma zvířat", author: "George Orwell" },
  { id: "bila-nemoc", title: "Bílá nemoc", author: "Karel Čapek" },
  { id: "rur", title: "R.U.R.", author: "Karel Čapek" },
  { id: "o-mysich-a-lidech", title: "O myších a lidech", author: "John Steinbeck" },
  { id: "starec-a-more", title: "Stařec a moře", author: "Ernest Hemingway" },
  { id: "velky-gatsby", title: "Velký Gatsby", author: "Francis Scott Fitzgerald" },
  { id: "kytice", title: "Kytice", author: "Karel Jaromír Erben" },
  { id: "kral-lavra", title: "Král Lávra", author: "Karel Havlíček Borovský" },
  { id: "bylo-nas-pet", title: "Bylo nás pět", author: "Karel Poláček" },
  { id: "klapzubova-jedenactka", title: "Klapzubova jedenáctka", author: "Eduard Bass" },
  { id: "smrt-krasnych-srncu", title: "Smrt krásných srnců", author: "Ota Pavel" },
  { id: "krysar", title: "Krysař", author: "Viktor Dyk" },
  { id: "promena-soubor-povidek", title: "Proměna", author: "Franz Kafka", oldId: "promena" },
  { id: "obraz-doriana-graye", title: "Obraz Doriana Graye", author: "Oscar Wilde" },
  { id: "spalovac-mrtvol", title: "Spalovač mrtvol", author: "Ladislav Fuks" },
  { id: "klub-rvacu", title: "Klub rváčů", author: "Chuck Palahniuk" },
  { id: "fetak", title: "Feťák", author: "William S. Burroughs" },
  { id: "alchymista", title: "Alchymista", author: "Paulo Coelho" }
];

const emptyBook = {
  authorInfo: "", authorBio: "", period: "", typeAndGenre: "",
  theme: "", timeAndSpace: "", composition: "",
  characters: [], plotSummary: [], languageAndStyle: [], context: []
};

const finalBooks = baseTemplate.map(base => {
  const matchId = base.oldId || base.id;
  const parsedItem = parsed.find(p => p.id === matchId || p.id === base.id);
  
  delete base.oldId;

  if (parsedItem) {
    return { ...base, ...emptyBook, ...parsedItem, id: base.id };
  } else {
    return { ...base, ...emptyBook, id: base.id };
  }
});

const tsContent = "export interface Character { name: string; description: string; }\n" +
"export interface Book {\n" +
"  id: string; title: string; author: string; authorInfo: string;\n" +
"  authorBio: string;\n" +
"  period: string; typeAndGenre: string; theme: string; timeAndSpace: string;\n" +
"  composition: string; characters: Character[]; plotSummary: string[];\n" +
"  languageAndStyle: string[]; context: string[];\n" +
"}\n\n" +
"export const books: Book[] = " + JSON.stringify(finalBooks, null, 2) + ";\n";

fs.writeFileSync('src/data/books.ts', tsContent, 'utf8');
console.log('Books generated successfully.');

