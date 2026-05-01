import fs from 'fs';

const filePath = './src/data/books.ts';
let content = fs.readFileSync(filePath, 'utf-8');

const newCharacters = {
  "farma-zvirat": `[
      { "name": "Kanec Major", "description": "Svolal zvířata a povídal jim o revoluci, brzy umírá." },
      { "name": "Pan Jones", "description": "Opilecký majitel farmy, kterého zvířata vyhnala." },
      { "name": "Molina", "description": "Stýskalo se jí po lidech, utekla z farmy." },
      { "name": "Kuliš", "description": "Chytré prase, statečně bojoval, chtěl postavit mlýn, vyhnán Napoleonem." },
      { "name": "Napoleon", "description": "Chytré prase, stane se Vůdcem, vládne tvrdou rukou, pije alkohol a chová se jako člověk." },
      { "name": "Psi", "description": "Vychováni Napoleonem, hlídají farmu a slouží k zastrašování." },
      { "name": "Pištík", "description": "Propagandista prasat, překrucuje pravdu a předhazuje zvířatům statistiky." },
      { "name": "Frederick a Pilkington", "description": "Sousední farmáři, s nimiž prasata obchodují a hrají karty." },
      { "name": "Whymper", "description": "Lidský prostředník, přes kterého prasata obchodují." },
      { "name": "Boxer", "description": "Kůň, nejoddanější a nejpracovitější zvíře, předře se a je odvezen na jatka." },
      { "name": "Benjamin a Lupina", "description": "Osel a kobyla, přátelé Boxera, kteří pochopí smutnou pravdu." }
    ]`,
  "bila-nemoc": `[
      { "name": "Doktor Galén", "description": "Vynalezne lék na bílou nemoc, odmítá léčit mocné, dokud nebude mír. Ušlapán davem." },
      { "name": "Profesor Sigelius", "description": "Majitel kliniky, snaží se nemoc léčit neúspěšně, nedozví se Galénovo tajemství." },
      { "name": "Baron Krug", "description": "Hlavní zbrojař, nakazí se nemocí a po zákazu od generála se zastřelí." },
      { "name": "Maršál", "description": "Diktátor zaslepený válkou, nakonec se sám nakazí a pod tlakem přistoupí na mír." },
      { "name": "Dcera maršála a přítel", "description": "Přesvědčí maršála, že válka bez něj bude ztracena, a ať přistoupí na mír." }
    ]`,
  "rur": `[
      { "name": "Domin", "description": "Ředitel fabriky na roboty, vezme si Helenu za ženu." },
      { "name": "Helena", "description": "Dcera prezidenta, soucítí s roboty a spálí plány na jejich výrobu." },
      { "name": "Sulla", "description": "Asistentka robotka, je nerozeznatelná od lidí." },
      { "name": "Doktor Gall", "description": "Přemluven Helenou, pokusí se vyrobit roboty s city." },
      { "name": "Alquist", "description": "Jediný člověk, který je roboty ušetřen, protože pracuje rukama. Snaží se znovu najít plány." },
      { "name": "Primus a Helena (roboti)", "description": "Roboti, kteří v sobě objevili city a lásku, jsou počátkem nové civilizace." }
    ]`,
  "velky-gatsby": `[
      { "name": "Nick Carraway", "description": "Vypravěč, Gatsbyho soused a přítel, seznámí ho s Daisy." },
      { "name": "Jay Gatsby (Gatz)", "description": "Zbohatlík s temnou minulostí, pořádá velkolepé večírky a touží po lásce Daisy." },
      { "name": "Daisy Buchananová", "description": "Nickova sestřenice a Gatsbyho životní láska, povrchní žena." },
      { "name": "Tom Buchanan", "description": "Manžel Daisy, bohatý a arogantní, má milenku." },
      { "name": "Myrtle Wilsonová", "description": "Tomova milenka, manželka majitele autoopravny, je tragicky přejetá autem." },
      { "name": "George Wilson", "description": "Zničený manžel Myrtle, majitel autoopravny, ze msty zastřelí Gatsbyho." },
      { "name": "Jordan Bakerová", "description": "Mladá golfistka, Nickova přítelkyně z vyšší společnosti." },
      { "name": "Meyer Wolfsheim", "description": "Podvodník, zapletený do Gatsbyho nelegálních obchodů." },
      { "name": "Dan Cody", "description": "Milionář z Gatsbyho minulosti, který mu dopomohl k penězům." }
    ]`,
  "kytice": `[
      { "name": "Vdova a dítě (Poklad)", "description": "Matka oslepená zlatem, která nechá dítě v jeskyni." },
      { "name": "Macecha a vlastní dcera (Zlatý kolovrat)", "description": "Zabijí Dorinku, aby se vlastní dcera mohla provdat za krále." },
      { "name": "Král a Dorinka (Zlatý kolovrat)", "description": "Král se zamiluje do Dorinky, která je oživena díky zlatému kolovratu." },
      { "name": "Hana a Marie (Štědrý den)", "description": "Dívky předvídající budoucnost v jezírku - svatba a smrt." },
      { "name": "Žena a nebožtík (Holoubek)", "description": "Žena otráví manžela, ale holoubek na hrobě ji donutí k sebevraždě." },
      { "name": "Muž a zakletá žena (Vrba)", "description": "Muž pokácí vrbu, čímž nevědomky zabije svou ženu." },
      { "name": "Pán a Lilie (Lilie)", "description": "Pán si vezme oživlou lilii, kterou jeho matka nakonec zahubí." },
      { "name": "Veršová výstavba", "description": "Gnomický verš, pro který je typická krátkost a hutnost." }
    ]`,
  "klub-rvacu": `[
      { "name": "Vypravěč", "description": "Běžný úředník trpící nespavostí, nenávidí svůj konzumní život." },
      { "name": "Tyler Durden", "description": "Extrémní anarchista a zakladatel Klubu rváčů, Vypravěčův mentor (a nakonec jeho alter ego)." },
      { "name": "Marla Singerová", "description": "Záhadná žena, kterou Vypravěč poznává na podpůrných skupinách." }
    ]`
};

for (const [id, charsString] of Object.entries(newCharacters)) {
  // Regex to match "characters": [] or "characters": [ ... { "name": "Veršová výstavba"... ] for kytice
  // Since kytice already has one item, let's just replace the whole characters array for these books
  const regex = new RegExp(`("id": "${id}",[\\s\\S]*?)"characters":\\s*\\[[\\s\\S]*?\\],\\s*"plotSummary":`);
  content = content.replace(regex, `$1"characters": ${charsString},\n    "plotSummary":`);
}

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Characters updated successfully!');
