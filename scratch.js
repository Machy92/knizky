import fs from 'fs';

let content = fs.readFileSync('src/data/books.ts', 'utf-8');

// 1. Update interface
content = content.replace('period: string; typeAndGenre: string;', 'form: string; period: string; typeAndGenre: string;');

// 2. Update each book entry
const proza = ["maly-princ", "farma-zvirat", "o-mysich-a-lidech", "starec-a-more", "velky-gatsby", "bylo-nas-pet", "klapzubova-jedenactka", "smrt-krasnych-srncu", "krysar", "promena-soubor-povidek", "obraz-doriana-graye", "spalovac-mrtvol", "klub-rvacu", "fetak", "alchymista"];
const drama = ["romeo-a-julie", "zkroceni-zle-zeny", "bila-nemoc", "rur"];
const poezie = ["kytice", "kral-lavra"];

const books = [];
let currentId = null;

// regex to find id: "..."
const newContent = content.replace(/"id": "(.*?)"(.*?)"period": "(.*?)"/gs, (match, id, middle, period) => {
    let form = "";
    if (proza.includes(id)) form = "Próza";
    else if (drama.includes(id)) form = "Drama";
    else if (poezie.includes(id)) form = "Poezie";
    
    return `"id": "${id}"${middle}"form": "${form}",\n    "period": "${period}"`;
});

fs.writeFileSync('src/data/books.ts', newContent);
console.log("Done");
