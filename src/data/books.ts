export interface Character { name: string; description: string; }
export interface Book {
  id: string; title: string; author: string; authorInfo: string;
  authorBio: string;
  form: string; period: string; typeAndGenre: string; theme: string; timeAndSpace: string;
  composition: string; characters: Character[]; plotSummary: string[];
  languageAndStyle: string[]; context: string[];
}

export const books: Book[] = [
  {
    "id": "maly-princ",
    "title": "Malý princ",
    "author": "Antoine de Saint-Exupéry",
    "authorInfo": "Antoine de Saint-Exupéry, žil v 20. století",
    "authorBio": "Malý princ vznikl „na zákázku“ v exilu, byl to vynálezce (30 patentů ohledně letectví), záhadné zmizení 1944",
    "form": "Próza",
    "period": "Světová meziválečná literatura",
    "typeAndGenre": "Epika, Pohádka",
    "theme": "Co je důležité, očima neuvidíme. Správně vidíme jen srdcem. (Motivy: Tajemství, zkrocení, priority v životě, kresby (ne vše jde popsat a říci, autor využíval kresby))",
    "timeAndSpace": "Vesmír, nejspíš 2. světová válka, odehrává se to během 8 dnů",
    "composition": "Začátek a konec chronologicky, část je psána retrospektivně (vzpomíná, kde všude navštívil planetky)",
    "characters": [
      {
        "name": "Pilot (vypravěč)",
        "description": "Porouchalo se mu letadlo na poušti, kreslil princi beránky."
      },
      {
        "name": "Malý princ",
        "description": "Putoval z rodné planetky B 612 po vesmíru, vyprávěl pilotovi o svém cestování."
      },
      {
        "name": "Růže",
        "description": "Žila s princem na planetce B 612, byla nesmírně pyšná a chtěla, aby o ni bylo přehnaně pečováno."
      },
      {
        "name": "Pyšný král",
        "description": "Panoval všem, ale vlastně nikomu, protože byl na planetce sám."
      },
      {
        "name": "Domýšlivec",
        "description": "Slyšel jen chválu a chtěl být stále jen obdivován, protože byl nejlepší na planetě."
      },
      {
        "name": "Pijan",
        "description": "Pil aby zapomněl, že se stydí za to že pije."
      },
      {
        "name": "Byznysmen",
        "description": "Stále přepočítával hvězdy, které mu patřily, tudíž byl podle něj nesmírně bohatý."
      },
      {
        "name": "Lampář",
        "description": "Každé ráno rozsvítil a večer zhasl lampu, nemohl si odpočinout."
      },
      {
        "name": "Zeměpisec",
        "description": "Zapisoval vše zeměpisné, ale neměl co zapisovat, protože neměl žádné badatele."
      },
      {
        "name": "Had",
        "description": "Pověděl princi, že může každého dotykem vrátit do země, ze které přišel, a uštkl ho."
      },
      {
        "name": "Květina",
        "description": "Květina na poušti, kterou princ potkal po hadovi."
      },
      {
        "name": "Liška",
        "description": "Pověděla princi o obrovské ceně a významu přátelství a jedinečnosti."
      },
      {
        "name": "Výhybkář",
        "description": "Vypravoval vlaky."
      },
      {
        "name": "Obchodník",
        "description": "Prodával pilulky uhašující žízeň."
      }
    ],
    "plotSummary": [
      "Kniha začíná porovnáváním představivosti dětí a dospělých vypravěčem, který následně vypráví svůj příběh:",
      "Pilotovi (vypravěčovi) se porouchalo letadlo na poušti, kde měl vodu sotva na týden. Najednou ho kdosi probudil, byl to Malý princ a chtěl nakreslit beránka. Pilot mu jich nakreslil spousty, dokud to nebyl ten správný. Postupem času pilot poznával Malého prince, který mu vyprávěl o svém cestování. Nejprve povídal o rodné planetce B 612, kde žil se svou růží, která byla nesmírně pyšná, protože si myslela, že je jediná svého druhu a stále chtěla, aby o ni bylo přehnaně pečováno. Planetka byla opravdu malinkatá, proto bylo třeba pravidelně vytrhávat malé baobaby, aby nevyrostli a neroztrhli ji a také se nesmělo zapomínat vymetat sopky.",
      "Následovalo vyprávění o putování. Nejprve o pyšném králi, který panoval všem, ale vlastně nikomu, protože byl na planetce sám. Potom přišel na řadu domýšlivec, který slyšel jen chválu a chtěl být stále jen obdivován, protože byl nejlepší (a jediný) na planetě. Další byl velice zajímavý pijan, ten pil aby zapomněl, že se stydí za to že pije. Na čtvrté planetce byl byznysmen, který stále přepočítával hvězdy, které mu patřily, protože si na ně myslel první, tudíž byl podle něj nesmírně bohatý. Na další planetce byl lampář, ten každé ráno rozsvítil a večer zhasl lampu. Bohužel den trval minutu a lampář si nemohl odpočinout, protože to byl příkaz. Následoval zeměpisec, který zapisoval vše zeměpisné, ale neměl co zapisovat, protože neměl žádné badatele a zeměpisci nebádají, ale přece jen zapisují.",
      "Sedmá planeta byla Země. Zde se malý princ nejprve seznámil na poušti v Africe s hadem, který mu pověděl, že může každého snadno dotykem vrátit do země, ze které přišel. Poté potkal květinu, poznal ozvěnu a pak narazil na zahradu plnou růží stejných jako jeho květina a byl smutný, protože si myslel, že jeho květina byla jediná svého druhu v celém vesmíru. V další kapitole potkal lišku. Pověděla mu o obrovské ceně a významu přátelství a jedinečnosti. Malý princ díky ní pochopil, že přesto že jeho květina není jediná svého druhu, pro něj vždy jediná bude. Při jeho další cestě potkal princ výhybkáře, co vypravoval vlaky, obchodníka co prodával pilulky uhašující žízeň. Osmý den pilot s malým princem hledali vodu, až našli studnu a pilot začal opravovat letadlo. Princ šel mezitím rozmlouvat s hadem o jeho jedu. Když to pilot zjistil, byl velice smutný, protože se princ chtěl nechat uštknout, aby se vrátil za svojí květinkou, ale nemohl nic dělat. Následující noc se Malý princ vypravil za hadem. Nechal se uštknout. Pomalu klesal a odešel……… ráno pilot už jeho tělo nenašel."
    ],
    "languageAndStyle": [
      "Dialogy, Aforismy (hluboké myšlenky)"
    ],
    "context": [
      "Autorovo zasazení: Světová literatura 1. polovina 20. století"
    ]
  },
  {
    "id": "romeo-a-julie",
    "title": "Romeo a Julie",
    "author": "William Shakespeare",
    "authorInfo": "William Shakespeare, žil na přelomu 16. až 17. století",
    "authorBio": "Spolumajitel divadla Globe v Anglii, psal i sonety, pocházel z rodiny prostých sedláků",
    "form": "Drama",
    "period": "Renesance",
    "typeAndGenre": "Drama (divadelní hra), tragédie",
    "theme": "Nešťastný osud dvou milenců, pocházejících ze znepřátelených rodů (spor mezi Monteky a Capulety). Hlavní myšlenkou je vítězství čisté lásky nad nesmyslnou nenávistí, která rozděluje společnost a kterou dokáže ukončit až tragická oběť mladých milenců. (Motivy: láska, svatby, válka dvou rodů, spor, smrti)",
    "timeAndSpace": "14. – 16. století, Itálie – Verona (i Mantova po vyhoštění Romea)",
    "composition": "Chronologická, prolog v podobě sonetu a 5 dějství",
    "characters": [
      {
        "name": "Romeo Montek",
        "description": "Mladý, pilný romantik, z rodu Monteků, zamilovaný do Julie (byl schopen pro ni udělat vše), smělý, unáhlený, citlivý, odvážný, impulsivní"
      },
      {
        "name": "Julie Kapuletová",
        "description": "Krásná, mladá — asi 13-14 let, oddaná Romeovi, laskavá, unáhlená, citlivá, má velmi ráda svou chůvu, nemá dobrý vztah k rodičům, oklamala rodinu (jed), tajně se vdala, neposlouchala rodiče, obětavá"
      },
      {
        "name": "Otec Vavřinec",
        "description": "Starý františkánský mnich, tajně oddá oba milence, obětavý, moudrý a zbožný, přeje jejich lásce, vidí v ní možnost smíru obou rodů"
      },
      {
        "name": "Chůva",
        "description": "Prostá žena, která vychovávala Julii, veselá, upovídaná, vnáší do tragédie komické prvky, stará, měla moc ráda Julii, spojnice mezi Julií a Romeem"
      },
      {
        "name": "Tybalt",
        "description": "Bratranec Julie, chtěl pořád bojovat s Monteky, zabit Romeem"
      },
      {
        "name": "Benvolio",
        "description": "Příbuzný Monteků — humorný, vtipný, zábavný"
      },
      {
        "name": "Merkucio",
        "description": "Příbuzný vévodův a přítel Romeův, zabit Tybaltem"
      },
      {
        "name": "Paris",
        "description": "Hrabě, kterého si měla vzít Julie, vznešený, pohledný"
      },
      {
        "name": "Veršová výstavba",
        "description": "Dílo je napsáno převážně blankversem, což je pětistopý nerýmovaný verš"
      }
    ],
    "plotSummary": [],
    "languageAndStyle": [
      "Monolog (Jedna postava, pocity, myšlenky), dialog (dvě nebo více postav, konflikty, interakce), replika (Jedna promluva postavy, než ji někdo vystřídá)"
    ],
    "context": [
      "Autorovo zasazení: Anglická renesance (láska, užívají si pozemský život)"
    ]
  },
  {
    "id": "zkroceni-zle-zeny",
    "title": "Zkrocení zlé ženy",
    "author": "William Shakespeare",
    "authorInfo": "William Shakespeare, žil na přelomu 16. až 17. století",
    "authorBio": "Spolumajitel divadla Globe v Anglii, psal i sonety, pocházel z rodiny prostých sedláků",
    "form": "Drama",
    "period": "Renesance",
    "typeAndGenre": "Drama, Komedie",
    "theme": "Vyvrácení starého názoru o nadřazenosti muže nad ženou. (Motivy: Láska, manželství, podvod, peníze, krocení, změna)",
    "timeAndSpace": "Itálie (město Padova, Petrucciův dům na venkově), čas neurčený - pravděpodobně autorova současnost (konec 16.st.)",
    "composition": "Chronologická",
    "characters": [
      {
        "name": "Baptista",
        "description": "Bohatý padovský šlechtic, který má dvě dcery, na jejichž vzdělání nešetří. Je milující, laskavý, trpělivý a spravedlivý otec."
      },
      {
        "name": "Kateřina",
        "description": "Baptisova dcera a zároveň sestra Biancy. Je vnímána jako hašteřivá, zlá výbušná žena s posledním slovem. Ve skutečnosti, ale není zlá, je pouze impulzivní a silná."
      },
      {
        "name": "Bianca",
        "description": "Dcera Baptisty, mladší sestra Kateřiny. Vroucně miluje svého otce, ráda a pilně studuje. Hodná, milá, poslušná a dobrotivá dívka se spousty nápadníků."
      },
      {
        "name": "Vincenzio",
        "description": "Starý pisanský šlechtic."
      },
      {
        "name": "Lucenzio",
        "description": "Vincenziův syn. Lstí chce získat přízeň Biancy."
      },
      {
        "name": "Petruccio",
        "description": "Veronský šlechtic. Jeho odvaha, tvrdohlavost a cílevědomost mu pomohla zkrotit Kateřinu a vzít si ji za ženu."
      },
      {
        "name": "Veršová výstavba",
        "description": "Dílo je napsáno převážně blankversem, což je pětistopý nerýmovaný verš"
      }
    ],
    "plotSummary": [
      "V Padově žije bohatý šlechtic Baptista Minola, který má dvě krásné dcery, Biancu a Kateřinu. Protože je Kateřina starší, Baptista se rozhodne nejdříve provdat ji a pak teprve Biancu. Jinak by mu Kateřina zůstala na ocet. O ni však nikdo nestojí, do doby, než se ve městě objeví veronský šlechtic Petruccio, který si ji rozhodne za velkorysé věno vzít za ženu a učinit z ní pokornou manželku, tento záměr se ostatním jeví jako nemožný, ale Biancini nápadníci jsou mu za jeho přítomnost vděční. Jelikož o Kateřinu už je postaráno, může si Bianca vybrat ženicha, stane se jím Lucenzio, který ji oslnil při přestrojení v učitele filosofie, gramatiky a poesie, za pomocí svého sluhy Trania, jenž se Biance, pod identitou Lucenzia, taky dvořil a zároveň postupně vyšachoval zbylé nápadníky ze hry. Petruccio udělá Kateřině ze života peklo, aby si uvědomila, že u ní dochází k překračování mezí, nakonec pochopila a byla nucena změnit se. Vrchol příběhu přichází v podobě sázky, kdy se Petruccio vsadí s Lucenziem a Hortensiem, kdo z nich má poslušnější choť. Každý z nich po sluhovi vzkáže své ženě, že má přijít k němu. Dorazí pouze Kateřina, Baptista a ostatní vidí, jak ji Petruccio  zkrotil, dostává 20 000 zlatých od Baptisty za to, že z Katky udělal hodnou ženu a samozřejmě vyhrává sázku s Lucenziem a Hortensiem."
    ],
    "languageAndStyle": [
      "Typy promluv: Monolog (Jedna postava, pocity, myšlenky), dialog (dvě nebo více postav, konflikty, interakce), replika (Jedna promluva postavy, než ji někdo vystřídá)"
    ],
    "context": [
      "Autorovo zasazení: Anglická renesance (láska, užívají si pozemský život)"
    ]
  },
  {
    "id": "farma-zvirat",
    "title": "Farma zvířat",
    "author": "George Orwell",
    "authorInfo": "George Orwell, žil v 20. století",
    "authorBio": "George Orwell byl jen pseudonym (pravé jméno bylo Eric Arthur Blair, skrýval ho kvůli chudobě), dobrovolník ve válce, Vizionář (popularizoval slova nebo je vymyslel: Velký bratr, Studená Válka. Doublethink)",
    "form": "Próza",
    "period": "Světová literatura 20. století",
    "typeAndGenre": "Epika, Novela",
    "theme": "Vůdci každé společnosti, kdykoliv se naskytne možnost, chtějí zneužívat svého postavení. (Motivy: Komunismus, prasata, zvířata, nadřazenost)",
    "timeAndSpace": "2. polovina 20. století, statek v Anglii",
    "composition": "Chronologická",
    "characters": [
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
    ],
    "plotSummary": [
      "Když kanec Major umíral na Panské farmě v Anglii, svolal si ostatní zvířata a povídal jim o tom, jak je lidé na statku trápí, jak mají nedostatek žrádla, jak jsou otroky lidí, a že musí být revoluce. Revoluce nastala. Zvířata vyhnala z farmy opileckého pana Jonese a s ním všechny ostatní lidi, a prasata coby nejinteligentnější zvířata se zmocnila vedení farmy. Nastalo období Zvířecí farmy a animalismu. Hymnou se stala píseň Zvířata Anglie, která byla zpívána na kterékoliv schůzi a jejich heslem věta „čtyři nohy dobré, dvě špatné“. Všichni se spojili proti lidem. Zvířata stanovila Sedm přikázání, která musí být dodržována. Mezi nimi byla pravidla o tom, že žádné zvíře nesmí zabít jiné zvíře, nikdo nesmí pít alkohol, všechna zvířata jsou si rovna, žádné zvíře nesmí spát v posteli, každý, kdo chodí po dvou nohách je nepřítel, žádné zvíře nebude chodit oblečené, … Nejdříve šlo všechno pěkně – zvířata byla svobodná, pracovala skvěle a s chutí a byla soběstačná. Jenom Molině se nová politika příliš nelíbila. Stýskalo se jí po tom, jak ji lidé hladili, krmili cukrem a zdobili jí hřívu pentlemi. Proto utíká z farmy k lidem. Dvě nejchytřejší prasata byli Kuliš a Napoleon. Tato dvě prasata se stala vůdci celé farmy. Některá zvířata se naučila číst a trochu psát, ale většina z nich byla velmi hloupá a ochotná poslouchat prasata na slovo. Lidé se snažili získat farmu zpět, ale zvířata je společnými silami porazila. Nejstatečněji ale bojoval Kuliš, který se vrhl přímo na pana Jonese. Tato slavná bitva dostala název „bitva U Kravína“ a Kuliš dostal vyznamenání. Zvířecí farma se má stát vzorem pro celé okolí. Prasata plánují například zavést elektřinu. Napoleon s Kulišem se mezi sebou začali hádat a spory byly čím dál větší. Kuliš chtěl postavit větrný mlýn, ale Napoleon ne. Napoleon vyhnal chudáka Kuliše a poslal na něj divoké psy, které si sám vychoval. Všem ostatním zvířatům napovídal lži a překroutil spoustu věcí. Hloupoučká zvířata mu uvěřila, že se Kuliš spolčil s lidmi a v bitvě U Kravína se zachoval velmi zbaběle. Od té doby se na farmě začaly dít podivné věci a za všechno podle prasat mohl Kuliš, který byl od začátku revoluce zrádce. Napoleon rozkázal stavět větrný mlýn a namluvil zvířatům, že to byl původně jeho nápad a Kuliš mu ho ukradl. Zvířata tvrdě pracují a nebrání se. Pořád si myslí, že to dělají pro sebe a že se budou mít lépe, až ho dostaví. Mlýn je stavěn celkem třikrát. Jednou totiž spadne díky silnému větru a podruhé je zničen lidmi, kteří ho při další bitvě odpálí střelným prachem. Zvířata mají čím dál horší podmínky k životu, pracují příliš tvrdě a mají nedostatek jídla. Pištík jim předhazuje čísla a statistiky o tom, jak se jejich situace rok od roku lepší, a zvířata mu slepě věří. Prasata zatím obydlují dům pana Jonese, oblékají se, pijí whisky a přes prostředníka Whympera obchodují s lidmi – hlavně se dvěma sousedy (Frederick a Pilkington). Jsou lenošní jako lidé. Spí v postelích, pijí alkohol a poopravují Sedm přikázání. Změní například to, že všechna zvířata jsou si rovna, některá jsou si ale rovnější, žádné zvíře nesmí pít alkohol přes míru a žádné zvíře nesmí spát v posteli s prostěradly. Vraždí ostatní zvířata za to, že byla údajně spolčena s Kulišem a za jakékoliv myšlenky proti Napoleonovi (již zvaný Vůdce). Ta si nechají namluvit, že skutečná znění Sedmi přikázání již zapomněla. Nejoddanější pracovník je kůň Boxer, jehož heslem je, že musí pracovat lépe a s chutí a že Napoleon má vždycky pravdu. Pracuje ale tolik, že se předře. Nedočká se důchodu, jak mu bylo slíbeno, ale je odvezen na jatka. Zvířata, která umí číst, tohle zjistí, když přijede řeznické auto. Nejvíc nešťastný je osel Benjamin a kobyla Lupina, kteří byli jeho nejlepší přátelé. Pištík jim ale napovídá, že Boxer byl odvezen do nemocnice autem, které dříve patřilo řezníkovi, ale teď si ho koupil doktor. Prasata se naučí chodit po dvou, mezi ostatními zvířaty prochází s bičem a hlídají je obrovští psi. Začínají spolupracovat s lidmi a přejmenují farmu zpět na Panskou. S lidmi popíjí a hrají karty. Ostatní zvířata sledují, jak se v domě hádají prasata s lidmi a uvědomují si, že je od sebe nedokážou rozeznat. Prasata totiž vypadají jako lidé."
    ],
    "languageAndStyle": [
      "Dialogy, Monology, Pásmo vypravěče"
    ],
    "context": [
      "Autorovo zasazení: Světová literatura 20. století (neskutečné světy, fiktivní vize budoucnosti, utopie [ideální svět], antiutopie [svět kde je vše špatně])",
      "Další díla: 1984, Karel Čapek"
    ]
  },
  {
    "id": "bila-nemoc",
    "title": "Bílá nemoc",
    "author": "Karel Čapek",
    "authorInfo": "Karel Čapek, žil v 1. polovině 20. století",
    "authorBio": "7 nominací na nobelovku, zahradník a pejskař, průkopník „Sci-fi“ před existencí žánru",
    "form": "Drama",
    "period": "Demokratický proud",
    "typeAndGenre": "Drama, Tragédie",
    "theme": "Doktor Galén objeví lék na smrtelnou bílou nemoc, ale odmítá léčit mocné a bohaté, dokud neuzavřou světový mír. Ve chvíli, kdy se mu podaří přesvědčit diktátora Maršála, je Galén ušlapán zfanatizovaným davem a lék je nenávratně zničen. (Motivy: Nemoc, pandemie. medicína, diktatura, válka, fašismus)",
    "timeAndSpace": "Před 2. světovou válkou, vymyšlená země",
    "composition": "Chronologická",
    "characters": [
      { "name": "Doktor Galén", "description": "Vynalezne lék na bílou nemoc, odmítá léčit mocné, dokud nebude mír. Ušlapán davem." },
      { "name": "Profesor Sigelius", "description": "Majitel kliniky, snaží se nemoc léčit neúspěšně, nedozví se Galénovo tajemství." },
      { "name": "Baron Krug", "description": "Hlavní zbrojař, nakazí se nemocí a po zákazu od generála se zastřelí." },
      { "name": "Maršál", "description": "Diktátor zaslepený válkou, nakonec se sám nakazí a pod tlakem přistoupí na mír." },
      { "name": "Dcera maršála a přítel", "description": "Přesvědčí maršála, že válka bez něj bude ztracena, a ať přistoupí na mír." }
    ],
    "plotSummary": [
      "Ve světě se rozmáhá smrtelná nemoc, která dostane název „Bílá nemoc“. Projevuje se bílými skvrnami na kůži, které potom spolu s masem odpadávají a tím způsobují pacientovi bolesti. V otevřených ranách následně může vzniknout infekce. Tato nemoc je nejvíce podobna již známému onemocnění, malomocenství. Šíří se především dotykem a postihuje lidi starší 45 let. Léky zprvu pouze zpomalují nemoc a zmírňují její bolesti, neexistuje takový lék, který by člověka zachránil a vyléčil.",
      "Vše se mění s nástupem doktora Galéna na scénu. Tento inteligent a úspěšný lékař vynalezne lék na již zmíněnou smrtelnou nemoc, která se velmi rychle šíří na našem území a ohrožuje více a více lidí. Doktor Galén se nechá zaměstnat na klinice prof. Sigelia, kde se léčbou nemoci zabývají, ale doposud neúspěšně. Má velké úspěchy a o kliniku se začne zajímat tisk.",
      "Doktor Galén, ale odmítá vydat lék veřejnosti, dokud na světě nezavládne mír. Neprozradí dokonce ani jeho složení samotnému profesoru Sigeliovi. Galén je silně ovlivněn osobními zkušenostmi z války, kde působil jako válečný lékař a viděl, jak válka neúprosně devastuje lidské životy. Proto se snaží tímto způsobem dalším válkám zabránit. Galén proto odmítá léčit vlivné lidi podporující válku a proto je následně z kliniky vyhozen. Vrací se ke svým chudým pacientům a těm pomáhá s léčbou odporné nemoci.",
      "Jednoho dne se však nemocí nakazí i hlavní zbrojař baron Krug a přijde v přestrojení žebráka žádat o lék. Galén ho však pozná a vysvětlí mu svůj pohled na celou situaci. Galén Krugovi nabídne záchranu, výměnou za uzavření továrny na zbraně, kterou Krug vlastní. Generál však Krugovi zakáže uzavření továrny. Zoufalý Krüg se následně zastřelí, aby ukončil své trápení.",
      "Následně však maršál časem zjistí, že se sám stal obětí a nemocí nakazil. Přesto hodlá ve válce, která ale neprobíhá úplně podle plánu, pokračovat. Zde se projevuje jeho zaslepená posedlost válkou a mocí. Nakonec ho jeho dcera s přítelem přesvědčí, že válka bude bez něho ztracena. Maršál tedy na Galénovi podmínky přistupuje a rozhodne se vést boj za věčný mír. Avšak před jeho domem je velký dav rozjařených nadšenců a příznivců války, kteří skandují na maršálovu počest. Když se Galén snaží tímto davem probojovat, aby se dostal k maršálovi do domu a mohl začít léčbu, je davem na následek svého protiválečného postoje i s lékem udupán. Burácející příznivci války si v tuto chvíli ani neuvědomují, co způsobily. Svět je tedy zbaven jednoho inteligentního lékaře, který vynalezl lék na smrtící nemoc a stejně tak přichází i o jedinečnou možnost světového míru."
    ],
    "languageAndStyle": [
      "Dialogy nejvíce"
    ],
    "context": [
      "Autorovo zasazení: Demokratický proud (Autoři tohoto směru věřili v hodnoty svobody, demokracie a tolerance.)",
      "Další díla: Válka s Mloky, R. U. R., ze života hmyzu, George Orwell"
    ]
  },
  {
    "id": "rur",
    "title": "R.U.R.",
    "author": "Karel Čapek",
    "authorInfo": "Karel Čapek, žil v 1. polovině 20. století",
    "authorBio": "7 nominací na nobelovku, zahradník a pejskař, průkopník „Sci-fi“ před existencí žánru",
    "form": "Drama",
    "period": "Demokratický proud",
    "typeAndGenre": "Drama, Tragédie",
    "theme": "Varování lidí, aby se nestali otroky vlastních vynálezů (Motivy: následky „povyšování se nad Boha\", poměr člověka ke světu, mezilidské vztahy. Lidské hodnoty. nenasytnost člověka, rozpor příroda x věda)",
    "timeAndSpace": "Rossomův ostrov v blízké budoucnosti, nachází se zde továrna na roboty",
    "composition": "Chronologická",
    "characters": [
      { "name": "Domin", "description": "Ředitel fabriky na roboty, vezme si Helenu za ženu." },
      { "name": "Helena", "description": "Dcera prezidenta, soucítí s roboty a spálí plány na jejich výrobu." },
      { "name": "Sulla", "description": "Asistentka robotka, je nerozeznatelná od lidí." },
      { "name": "Doktor Gall", "description": "Přemluven Helenou, pokusí se vyrobit roboty s city." },
      { "name": "Alquist", "description": "Jediný člověk, který je roboty ušetřen, protože pracuje rukama. Snaží se znovu najít plány." },
      { "name": "Primus a Helena (roboti)", "description": "Roboti, kteří v sobě objevili city a lásku, jsou počátkem nové civilizace." }
    ],
    "plotSummary": [
      "Za Dominem přijede Helena, dcera prezidenta, a chce vidět závod na výrobu robotů. Přijela sem, aby promluvila k robotům, proč si nechají líbit zacházení, jako by byli stroje. Roboti jsou nerozeznatelní od lidí, ale nemají city a lidské funkce. Proto dojde k záměně, kdy si nejprve Helena myslí o asistentce robotce Sulle, že je žena a následně o skutečných lidech je přesvědčena, že jsou roboti a tedy k nim i promlouvá jako k robotům.",
      "Helena v továrně zůstane a vezme si Domina a děj se přesune o deset let později.",
      "Po deseti letech se roboti začínají používat i jako vojáci do válek. Helenu trápí, že nemají vlastní rozum a city , a proto přemluví doktora Galla, aby se pokusil takové roboty vyrobit. Svět začíná být plný robotů, lidem se přestávají rodit děti a roboti se začínají proti lidem bouřit.",
      "Helena už nechce, aby se roboti vyráběli, a tak spálí plány na jejich výrobu. Mezitím vedoucí fabriky už ví o vzbouření a v den, kdy je to přesně deset let, co Helena přijela na Rossumový ostrov, jí věnují dělovou loď. Bohužel už nikdo nestihne odjet, roboti přicházejí na ostrov, nabírají vše a zabijí všechny lidi kromě Alquista, který jediný pracuje jako robot.",
      "Po vyvraždění lidstva si roboti uvědomí, že jejich životnost je omezená a bez plánů na výrobu za dvacet let vyhynou. Prosí teda Alquista, aby znova našel plány na jejich výrobu. Alquistovi se to však nepodaří. Najde dva roboty Prima a Helenu, kteří v sobě mají city, lásku a jsou jiní než ostatní. Možná že právě tito dva jsou počátkem nové civilizace."
    ],
    "languageAndStyle": [
      "Monology, Dialogy"
    ],
    "context": [
      "Autorovo zasazení: Demokratický proud (Autoři tohoto směru věřili v hodnoty svobody, demokracie a tolerance.)",
      "Další díla: Válka s Mloky, Bílá Nemoc, ze života hmyzu, George Orwell"
    ]
  },
  {
    "id": "o-mysich-a-lidech",
    "title": "O myších a lidech",
    "author": "John Steinbeck",
    "authorInfo": "",
    "authorBio": "",
    "form": "Próza",
    "period": "Světová meziválečná literatura",
    "typeAndGenre": "",
    "theme": "",
    "timeAndSpace": "",
    "composition": "",
    "characters": [],
    "plotSummary": [],
    "languageAndStyle": [],
    "context": []
  },
  {
    "id": "starec-a-more",
    "title": "Stařec a moře",
    "author": "Ernest Hemingway",
    "authorInfo": "Ernest Hemingway, žil v 20. století",
    "authorBio": "Byl novinář během 1. světové války, nobelova cena za literaturu, psal teorií ledovce (vše je pod povrchem, čtenář si to domýšlí)",
    "form": "Próza",
    "period": "Ztracená generace",
    "typeAndGenre": "Epika, Novela",
    "theme": "Prohraje boj s přírodou. Poukázání na lidskou statečnost a velkou duševní sílu. (Motivy: Osamělost jedince, hrdinství)",
    "timeAndSpace": "Nejspíš 20. století, několik dní, vesnice poblíž Havany (Kuba)",
    "composition": "Chronologická",
    "characters": [
      {
        "name": "Santiago",
        "description": "kubánský rybář, který je velmi skromný, ale má pevnou vůli. Musí velmi"
      },
      {
        "name": "Manolin",
        "description": "velmi obětavý a laskavo. Dělá pomocníka při rybolovu. Má velmi rád"
      }
    ],
    "plotSummary": [
      "Santiago nemůže již 84 dní chytit pořádnou rybu, všichni přátelé ho opustili, jediný, kdo s ním stále zůstává je chlapec Manolin, kterého však jeho otec nakonec převelel na jinou úspěšnější loď, a tak Santiago se vydává na moře sám, vydává se do veliké vzdálenosti od pevniny, mnohem dále než ostatní rybáři, aby chytil co největší rybu. Santiagovi se z počátku nedaří nic chytit, chytne akorát lososa, poté se mu ale na hák chytí tak veliký mečoun, že loď málem překotí. Santiago pomalu tahá za lano, které nesmí přivázat k lodi, protože by se lano prudkými pohyby ryby utrhlo, lano tedy drží v ruce. Ryba táhne celou loďku do otevřeného moře. Začíná boj, kdo s koho. Santiago je na pokraji vyčerpání, ale je to drsný muž a jen tak se nevzdává, přes obrovskou bolest, pořezání od provazu, křeč v levé ruce vytrvá, dokud mečoun nezačne kroužit kolem lodi. Během cesty s mečounem konverzuje, mluví sám na sebe, ale i tak se snaží udržet si tu špetku rozumu, kterou má a nezbláznit se. Trvalo mu tak 3 dny, než se někam posunul.",
      "Mečouna nakonec zabije harpunou a plaví se zpět, po cestě se těší, jaký úlovek chytil, ale nejde mu ani tak o peníze než o to, že splnil svůj cíl. Ryba je tak obrovská, že ji nemůže dát na loď, a proto ji veze přidělanou na boku lodi. Při cestě zpět je ale ryba napadena žraloky, Santiago oba zabije harpunou, ta se ale rozbije. Santiago improvizuje a přiváže nůž na pádlo. Při dalším útoku žraloků je i tato primitivní zbraň žraloky zničena. Při těchto útocích žraloci odtrhli z ryby dost masa, už zbývá zhruba 50 %. Když už vidí světla svého města v dáli, přijde další vlna žraloků, kteří cítili krvácející zbytek ryby. Žraloci kladivouni tedy dokončí práci svých předchůdců. Když Santiago dorazí totálně vyčerpaný na břeh, z ryby zbyla jenom kostra. I tak získává obdiv ostatních."
    ],
    "languageAndStyle": [
      "Monology"
    ],
    "context": [
      "Autorovo zasazení: Ztracená Generace (americká literatura, ztráta ideálů, kvůli válce, pocit prázdnoty)"
    ]
  },
  {
    "id": "velky-gatsby",
    "title": "Velký Gatsby",
    "author": "Francis Scott Fitzgerald",
    "authorInfo": "Francis Scott Fitzgerald, žil v 20. století",
    "authorBio": "Pojmenoval „Jazzový věk“ (alkohol, párty, cesta do záhuby, ne jako ta hudba), Rivalita s Hemingwayem, destruktivní manželství se Zeldou",
    "form": "Próza",
    "period": "Ztracená generace",
    "typeAndGenre": "Epika, Román",
    "theme": "Nehynoucí touha po dosažení snu a deziluze, (Gastby měl vše co by chtěli ostatní, ale nejvíce chtěl lásku Daisy, která nakonec nepřišla.) Možná, že v tehdejší společnosti, kde všichni pili a bavili se nemohl svého snu nikdy dosáhnout. (Motivy: Plnění amerického snu, příležitosti zbohatnou, večírky, dopad války na lidi)",
    "timeAndSpace": "Long Island (New York City), 1922",
    "composition": "Retrospektivní",
    "characters": [
      { "name": "Nick Carraway", "description": "Vypravěč, Gatsbyho soused a přítel, seznámí ho s Daisy." },
      { "name": "Jay Gatsby (Gatz)", "description": "Zbohatlík s temnou minulostí, pořádá velkolepé večírky a touží po lásce Daisy." },
      { "name": "Daisy Buchananová", "description": "Nickova sestřenice a Gatsbyho životní láska, povrchní žena." },
      { "name": "Tom Buchanan", "description": "Manžel Daisy, bohatý a arogantní, má milenku." },
      { "name": "Myrtle Wilsonová", "description": "Tomova milenka, manželka majitele autoopravny, je tragicky přejetá autem." },
      { "name": "George Wilson", "description": "Zničený manžel Myrtle, majitel autoopravny, ze msty zastřelí Gatsbyho." },
      { "name": "Jordan Bakerová", "description": "Mladá golfistka, Nickova přítelkyně z vyšší společnosti." },
      { "name": "Meyer Wolfsheim", "description": "Podvodník, zapletený do Gatsbyho nelegálních obchodů." },
      { "name": "Dan Cody", "description": "Milionář z Gatsbyho minulosti, který mu dopomohl k penězům." }
    ],
    "plotSummary": [
      "Nick se setkává se svojí poněkud povrchní sestřenicí Daisy vdanou za Nickova známého Toma Buchanana, se kterým má malou dcerku. Manželství však není zcela šťastné, Nick dokonce osobně poznává Tomovu milenku Myrtle Wilsonovou, manželku majitele blízké autoopravny. Nick naváže styk s Gatsbym, je zván na jeho pravidelné monstrózní večírky, zapadne do zdejší pestré společnosti a seznámí se s půvabnou mladou golfistkou Jordan Bakerovou. Stane se přítelem Gatsbyho a získává tak jedinečnou příležitost se dozvědět něco více o tomto člověku, o jehož minulosti na veřejnosti kolují pouze nepodložené legendy či pomluvy.",
      "Postupně se dozvídá detaily nejen o přinejmenším podezřelých Gatsbyho obchodech s alkoholem, do kterých je zapojen i známý podvodník Meyer Wolfsheim, ale i celou historii jeho tajemného života. Gatsby se původně jmenoval Gatz a pocházel z chudé rodiny, velmi se však toužil vypracovat, a tak utekl z domova. Potkal milionáře Dana Codyho, který mu později dopomohl k penězům. Ještě více však jeho život poznamenala láska k mladé bohaté dívce Daisy, milence však od sebe oddělilo jednak rozdílné společenské postavení a také válka, ve které byl Gatsby povýšen na majora, což mu také umožnilo strávit několik měsíců v Oxfordu. Během té doby se však Daisy vdala. Vychází tak najevo, že životní láskou Gatsbyho je žena Toma Buchanana Daisy, a Gatsby se s ní znovu setkává, čímž způsobí naprostý rozvrat jejího manželství s Tomem.",
      "Po jednom soukromém večírku, kde dojde k přímé konfrontaci Gatsbyho a Toma, se stane tragická osudová událost. Manželku George Wilsona Myrtle přejede automobil patřící Gatsbymu, za volantem však sedí Daisy. Wilson je naprosto zničený, dozvěděl se totiž o manželčině nevěře a chtěl s ní jinde začít nový život. Tom Buchanan, který se s Wilsonem dobře zná, mu naznačí, kdo je majitelem inkriminovaného vozu, který ujel z místa nehody. Gatsby hodlá chránit Daisy, ale ještě dříve je ve svém domě zastřelen mstícím se Wilsonem, který vzápětí páchá sebevraždu. Ironií je, že nad Gatsbym nikdo kromě jeho otce a Nicka netruchlí, bohatá městská smetánka jako by zapomněla na pohostinnost, které užívala v Gatsbyho domě. Daisy a Tom odjíždějí spolu neznámo kam. Nick Carraway je tím znechucený, končí svůj vztah s Jordan a odjíždí domů."
    ],
    "languageAndStyle": [
      "Dialogy"
    ],
    "context": [
      "Autorovo zasazení: Ztracená Generace (americká literatura, ztráta ideálů, kvůli válce, pocit prázdnoty)"
    ]
  },
  {
    "id": "kytice",
    "title": "Kytice",
    "author": "Karel Jaromír Erben",
    "authorInfo": "Karel Jaromír Erben, žil v 19. století",
    "authorBio": "Sbíral lidové příběhy, prostřední jméno, neměl ho",
    "form": "Poezie",
    "period": "Romantismus",
    "typeAndGenre": "Lyricko-epické, Sbírka baladických básní",
    "theme": "Kniha poukazuje na lidové tradice a špatné vlastnosti lidí. Po jejich prohřešku přichází přísný a neúprosný trest, který postavy pokorně snášejí. Jednou šancí ke zmírnění či odčinění je pokání. (Motivy: Vina a trest, osud, nadpřirozeno, lidové tradice)",
    "timeAndSpace": "České země, venkov, temná neurčitá místa vycházející z lidových pověstí (kostely, hřbitovy), 19. století, čas není určen",
    "composition": "Zrcadlová (básně), chronologická",
    "characters": [
      { "name": "Vdova a dítě (Poklad)", "description": "Matka oslepená zlatem, která nechá dítě v jeskyni." },
      { "name": "Macecha a vlastní dcera (Zlatý kolovrat)", "description": "Zabijí Dorinku, aby se vlastní dcera mohla provdat za krále." },
      { "name": "Král a Dorinka (Zlatý kolovrat)", "description": "Král se zamiluje do Dorinky, která je oživena díky zlatému kolovratu." },
      { "name": "Hana a Marie (Štědrý den)", "description": "Dívky předvídající budoucnost v jezírku - svatba a smrt." },
      { "name": "Žena a nebožtík (Holoubek)", "description": "Žena otráví manžela, ale holoubek na hrobě ji donutí k sebevraždě." },
      { "name": "Muž a zakletá žena (Vrba)", "description": "Muž pokácí vrbu, čímž nevědomky zabije svou ženu." },
      { "name": "Pán a Lilie (Lilie)", "description": "Pán si vezme oživlou lilii, kterou jeho matka nakonec zahubí." },
      { "name": "Veršová výstavba", "description": "Gnomický verš, pro který je typická krátkost a hutnost." }
    ],
    "plotSummary": [
      "Poklad",
      "Na Velký pátek spěchala vdova s dítětem do kostela, po cestě spatřila jeskyni, kterou nikdy před tím neviděla. Jakmile vešla, zaslepil jí lesk obrovského bohatství. Toto bohatství ji úplně oslepilo, a proto odložila své dítě a začala nabírat plné hrsti zlata. S plnýma rukama se rozhodla, že poklad vynese a pro odložené dítě se vrátí později. Když se však vrátí, cesta je zavřená a dítě je uvnitř. Vdova se celý rok modlí a prosí Boha za odpuštění. Přesně za rok na Velký pátek jde vdova opět do kostela a opět si povšimne vchodu do země a na tom samém místě, kde ho před rokem nechala, objeví své dítě. Neustále pak děkuje Bohu.",
      "Zlatý kolovrat",
      "Jednoho dne se zastaví mladý král u lesní chalupy a spatří mladou krásku. Ihned se s ní chce oženit, ale dívka namítne, že se nejprve musí dovolit své matky. Druhý den se král vrací a nabízí maceše zlato a stříbro za její nevlastní dceru. Macecha nejprve králi nutí svou vlastní, nakonec ale svolí. Další den po cestě na zámek zabijí macecha se svou vlastní dcerou nevlastní Dorinku v lese, kde ji usmrtí a odeberou údy a oči. Obě se pak vydají na cestu do zámku. Tam se nic netušící král ožení s vlastní dcerou a po týdnu odjíždí a uloží ženě, aby předla na kolovratu.",
      "Štědrý den",
      "Před Štědrým dnem sedí dvě panny a předou. Z hovoru se doví, že o půlnoci v jezírku, kde se sklání vrba, uvidí svou budoucnost. Tak se tedy vydají k jezírku a vysekají v ledu díru. První se dívá Hana a vidí svatbu s mladým mužem. Po ní jde Marie a uvidí svůj pohřeb.",
      "Holoubek",
      "Žena zabije svého muže (otráví ho). Když jde po cestě u hřbitova, potká mladého muže – ten jí nabídne, aby se stala jeho ženou. Čtvrtý den si ho vezme (svatba je veselá a hlučná). Na nebožtíkově hrobě vyroste tráva, u hlavy doubek a po třech letech na doubku začne žalostně zpívat holoubek. Ten tím ženě připomíná její vinu. Žena to psychicky neunese a utopí se v potoce. Jelikož křesťanská víra zakazuje sebevraždu, je pohřbena mimo hřbitov.",
      "Vrba",
      "Muž má ženu, která je přes den vitální, ale přes noc je jako mrtvá. Muž jde tedy k věštkyni a ta mu prozradí, že je jeho žena zakletá do vrby. Muže to dopálí tak, že vrbu nechá pokácet. Jakmile však vrbu pokácí, žena padne na místě mrtva k zemi. Muž pláče a naříká, co to provedl, ale hlas mu prozradí, ať ze dřeva té vrby udělá kolíbku a větvičky ať zasadí do země. Kolébka když bude dítě kolébati, jako by ho kolébala jeho matka, až klouček vyroste, z větviček si nařeže píšťaličky a při hře bude s matkou rozmlouvat.",
      "Lilie",
      "Mladou dívku pochovají do lesa. Na jejím hrobě rozkvete bílá lilie, kterou si dá bohatý pán přesadit do své zahrady. Když zjistí, že dívka v noci žije, vezme si ji za ženu. Jednou musí odjet ke králi, a tak svěří svou ženu své matce do péče. Ta však na lilii pustí světlo a tím zahubí jak lilii, tak mladou ženu.",
      "Věštkyně",
      "Závěrečná báseň, kde věštkyně Libuše odkrývá proroctví o Přemyslu oráčovi, Libuši, a jiných historických událostech českého národa.  Jedná se projev vlastenectví a víru v budoucnost. Báseň je považována za myšlenkový vrchol celé sbírky."
    ],
    "languageAndStyle": [
      "Pásmo vypravěče v Er formě, dialogy, přímá řeč"
    ],
    "context": [
      "Autorovo zasazení: Romantismus (Vnitřní svět, cit, výjimečný hrdina, tragika)"
    ]
  },
  {
    "id": "kral-lavra",
    "title": "Král Lávra",
    "author": "Karel Havlíček Borovský",
    "authorInfo": "Karel Havlíček Borovský, žil v 19. století",
    "authorBio": "Jeho slavné jméno Borovský si vymyslel (rodná vesnice), investigativní novinář, nebál se vtipkovat o politice, když za to tehdy hrozilo vězení",
    "form": "Poezie",
    "period": "Realismus",
    "typeAndGenre": "Lyricko-epické, Satira",
    "theme": "Oslí uši (panovníkovi chyby a nedostatky), tajemství - král má tajemství ten ho řekne Kukulínovi, ten ho neudrží a poví ho vrbě a ta celému světu (Motivy: Tajemství, poprava, vlasy, vrba)",
    "timeAndSpace": "Čechy za rakouské nadvlády (původně Irsko, kvůli cenzuře), doba neurčena",
    "composition": "Chronologicky",
    "characters": [
      {
        "name": "Král Lávra",
        "description": "Hodný, dobromyslný, nechce ukázat světu své oslí uši, aby se nesnížil; přihlouplý. Na druhou stranu přes svou „dobrotu\" navenek, nechává popravovat nevinné lidi. Dobře panuje; má tajemství, kvůli němuž každý rok popraví svého holiče."
      },
      {
        "name": "Kukulín",
        "description": "Holič. který je čestný, spravedlivý, diskrétní. Bylo mu svěřeno panovníkovo tajemství (zašeptá ho do vrby)"
      },
      {
        "name": "Vdova",
        "description": "Kukulínova matka, která ho zachrání před šibenicí"
      },
      {
        "name": "Červíček",
        "description": "Jeho basa prozradí všem královo tajemství"
      },
      {
        "name": "Veršová výstavba",
        "description": "Nepravidelné verše"
      }
    ],
    "plotSummary": [
      "V Irsku dobře panoval král Lávra. Měl jen jednu slabost – jedenkrát do roka se dával holit a holiče vždy místo odměny pověsili. Král totiž tají světu dlouhé oslí uši. Holiči se báli, vždy jednou do roka losovali o královo holení. Jednou padl los na Kukulína. Když měl jít na šibenici, jeho matka, chudá vdova, u krále orodovala a tím vysloužila svému synovi milost. Králi však musel slíbit, že nikde neřekne, co viděl při holení. Tím se stal dvorním holičem. Tajemství Kukulína velmi tíží, a tak ho na radu poustevníka všeptá do staré vrby. Kukulínovi se rázem ulevilo.  Po nějakém čase král chystal velikou hostinu a bál. Byli pozváni muzikanti z Čech. Pan Červíček ovšem ztratil kolíček od basy. Uřízl tedy kousek větvičky z již zmiňované vrby. Když pak začne na basu hrát na královském plese, tajemství je vyzrazeno . K žádné katastrofě však nedochází. Lidé krále ujistili, že ho mají rádi, ba že mu dokonce dlouhé oslí uši sluší."
    ],
    "languageAndStyle": [
      "Monolog krále, pásmo vypravěče"
    ],
    "context": [
      "Autorovo zasazení: Realismus (Kritický a pravdivý obraz společnosti, peněz a každodenních problémů)"
    ]
  },
  {
    "id": "bylo-nas-pet",
    "title": "Bylo nás pět",
    "author": "Karel Poláček",
    "authorInfo": "",
    "authorBio": "",
    "form": "Próza",
    "period": "Demokratický proud",
    "typeAndGenre": "",
    "theme": "",
    "timeAndSpace": "",
    "composition": "",
    "characters": [],
    "plotSummary": [],
    "languageAndStyle": [],
    "context": []
  },
  {
    "id": "klapzubova-jedenactka",
    "title": "Klapzubova jedenáctka",
    "author": "Eduard Bass",
    "authorInfo": "",
    "authorBio": "",
    "form": "Próza",
    "period": "Demokratický proud",
    "typeAndGenre": "",
    "theme": "",
    "timeAndSpace": "",
    "composition": "",
    "characters": [],
    "plotSummary": [],
    "languageAndStyle": [],
    "context": []
  },
  {
    "id": "smrt-krasnych-srncu",
    "title": "Smrt krásných srnců",
    "author": "Ota Pavel",
    "authorInfo": "",
    "authorBio": "",
    "form": "Próza",
    "period": "Česká literatura 2. pol. 20. století",
    "typeAndGenre": "",
    "theme": "",
    "timeAndSpace": "",
    "composition": "",
    "characters": [],
    "plotSummary": [],
    "languageAndStyle": [],
    "context": []
  },
  {
    "id": "krysar",
    "title": "Krysař",
    "author": "Viktor Dyk",
    "authorInfo": "",
    "authorBio": "",
    "form": "Próza",
    "period": "Generace buřičů",
    "typeAndGenre": "",
    "theme": "",
    "timeAndSpace": "",
    "composition": "",
    "characters": [],
    "plotSummary": [],
    "languageAndStyle": [],
    "context": []
  },
  {
    "id": "promena-soubor-povidek",
    "title": "Proměna (soubor povídek)",
    "author": "Franz Kafka",
    "authorInfo": "Franz Kafka, žil v 19./20. století",
    "authorBio": "Nechtěl být slavný, pracoval jako úředník, složitý vztah k otci",
    "form": "Próza",
    "period": "Existencialismus",
    "typeAndGenre": "Epika, Novela",
    "theme": "Hlavním námětem povídky je přeměna člověka ve hmyz a následující vývoj vztahu rodiny k tomuto stvoření. (Motivy: Vůle, beznaděj. odcizení, samota, psychické vyčerpání, smrt)",
    "timeAndSpace": "Dům rodiny Samsových",
    "composition": "Chronologická",
    "characters": [
      {
        "name": "Řehoř Samsa",
        "description": "Cestující obchodník, který ochotně nosí svoji výplatu domů, kde je přijímána se samozřejmostí. Řehoř si uvědomuje, že existence jeho rodiny závisí na něm a nevadí mu to, chce, aby si jeho rodina žila dobře a nechce jim působit žádné starosti. Je poctivý, hodný, pracovitý, pečlivý, zodpovědný, bere svoji proměnu jako fakt a necítí se ukřivděn nebo ublížen."
      },
      {
        "name": "Markéta",
        "description": "Řehořova sestra, je obětavá a hraje na housle. Snaží se Řehořovi pomáhat."
      },
      {
        "name": "Řehořův otec",
        "description": "Je mužem činu, ztělesněním nerozvážné síly a prchlivosti. Je praktický, tvrdý, přísný, líný, po proměně musel začít pracovat."
      },
      {
        "name": "Řehořova matka",
        "description": "Je starostlivá, opatrná a důvěřivá, přemáhá v sobě odpor k broukovi(synovi Řehořovi)."
      },
      {
        "name": "Gréta",
        "description": "Posluhovačka, Řehořem opovrhovala. Nenazývala ho jménem , nazývala ho jen to."
      }
    ],
    "plotSummary": [
      "Povídka Proměna začíná probuzením hlavní postavy, obchodního cestujícího Řehoře Samsy (v originále Gregor Samsa) a jeho zjištěním, že se proměnil v obří hmyz (tato základní informace celého textu je čtenáři představena v jediné větě v úvodu. Přestože se snaží svou indispozici skrýt před rodinou, je nakonec odhalen. Vyděšení rodiče a sestra Markétka se rozhodnou Řehoře zavřít v jeho pokoji v jakési domácí internaci. Samsa po celou dobu svého změněného stavu uvažuje racionálně, nepropadá depresím a zachovává chladnou hlavu (jeho první starostí je, jak jako hmyz půjde do práce). Řehoř jako hmyz rozumí nadále lidské řeči, jemu samotnému však ostatní příliš nerozumí, nemůže tedy se svým okolím komunikovat.",
      "Situace v rodině se od Řehořovy proměny značně zhorší; jednak přijdou o Řehořovu finanční podporu (dosud je ze svého platu živil převážně on), jednak strádají rodiče i sestra psychicky. Otec se navrací do zaměstnání, pracuje jako sluha, Markétka prodává v obchodě a také se učí francouzštinu. Matka ani otec do Řehořova pokoje nevstupují, stará se o něj mladší sestra Markéta, vždy když za ním sestra přichází, tak se Řehoř schová pod postel, aby ji neděsil. Jediný z lidí, kdo se s danou situací smíří, je otrlá posluhovačka, která se s Řehořem-hmyzem jedná rázně a bez okolků. Jednou se Markéta s matkou rozhodnout vystěhovat z Řehořova pokoje nábytek, v dobrém úmyslu, Markétka se domnívá, že by se mu lépe lezlo po stěnách a stropu, čímž se Řehoř skutečně rád baví, ale matka se obává, že by si to Řehoř mohl vysvětlit tak, že už ho zavrhují. Řehoř si nakonec uvědomí, že by byl rád, kdyby mu pokoj ponechali, tak jak je, brání tedy svůj oblíbený obraz, spatří ho matka a upadne do mdlob, vyhrocenou situaci se rozhodne vyřešit otec tím, že po něm hází jablka, čímž Řehoře těžce zraní.",
      "Řehořův zdravotní stav se zhoršuje. Ztěžuje se i atmosféra v rodině; hmotný nedostatek a vypětí ze skrývání Řehoře v bytě doléhají na jeho rodiče i Markétku, která navrhuje Řehoře odstranit. Rodina si do bytu nastěhuje podnájemníky, kteří o Řehořovi nevědí, později ho ale spatří, protože Řehoř si chtěl poslechnout, jak jim Markétka hraje na housle, a tak opustil svůj pokoj a otec se ho snažil zahnat zpět do jeho pokoje, ze kterého se postupem času stalo skladiště nepotřebných věcí. Nájemníci byt opouštějí. Téhož večera Řehoř umírá. Druhého dne jej nalezne posluhovačka a jeho mrtvolu vyhodí. Téhož dne uspořádají Samsovi, jimž se viditelně ulevilo, výlet z města a probírají nadějné plány do budoucna. (chtějí si vzít menší a levnější a také praktičtější byt; rodiče si myslí, že už je také na čase, aby pro Markétku vyhledali hodného muže)"
    ],
    "languageAndStyle": [
      "Vnitřní monology"
    ],
    "context": [
      "Autorovo zasazení: Existencionalismus"
    ]
  },
  {
    "id": "obraz-doriana-graye",
    "title": "Obraz Doriana Graye",
    "author": "Oscar Wilde",
    "authorInfo": "Oscar Wilde, žil v 19. století",
    "authorBio": "Šel do vězení kvůli svému životu (byl gay), jediný román je světový hit, po vězení používal jiné jméno Sebastian Melmoth",
    "form": "Próza",
    "period": "Dekadence",
    "typeAndGenre": "Epika, Román",
    "theme": "Krása a mládí není vždy to nejdůležitější (Motivy: Vražda, morálka, sebevědomí, zkaženost charakteru)",
    "timeAndSpace": "Londýn, 19. století",
    "composition": "Chronologická",
    "characters": [
      {
        "name": "Dorian Gray",
        "description": "Na počátku nezkušený mladík, neobyčejně krásný, postupem času uznává pouze Henryho, zamiluje se do své krásy, z mravného chlapce na zvrhlíka"
      },
      {
        "name": "Lord Henry Wotton",
        "description": "Dekadentní aristokrat, jeho mluva sestává ze sarkasmů, paradoxů, podle něj není nic důležitější než krása a mládí"
      },
      {
        "name": "Basil Halward",
        "description": "Malíř a romantik, naprosto učarován krásou Doriana (pravděpodobně zamilovaný), zabit Dorianem"
      },
      {
        "name": "Sibyla Vane",
        "description": "Mladá a nadaná herečka, velmi naivní, romantická a zamilovaná do Doriana, spáchá kvůli němu sebevraždu"
      },
      {
        "name": "James Vane",
        "description": "Bratr Sibyli, námořník, byl střelen než se dostal k Dorianovi"
      }
    ],
    "plotSummary": [
      "Dorian Gray je pozoruhodně krásný mladík, který upoutává každého svým nevšedním zjevem. Setkáváme se s ním ve chvíli, kdy jeho dobrý přítel – malíř Basil Hallward, právě dokončuje jeho velký a zdařilý portrét. Do ateliéru zároveň přichází světácký aristokrat lord Henry Wottton. Dorian ho ihned zaujme natolik, že se rozhodne vynutit si jeho přátelství, zvlášť když ihned poté vypátrá informace o jeho osudu. Dorian patří k aristokracii, i když ve společnosti zatím není příliš známý. Byl vychován svým dědečkem, lordem Kelso, když Dorianova neobyčejně krásná matka Margaret po porodu zemřela. Právě po matce zdědil Dorian svou krásnou tvář. Dorián příliš podléhá zásadám od Henryho, protože ten mu imponuje, zvlášť když hlásané zásady poněkud odbočují od obecně zavedených. („Dochvilnost je zlodějem času, „nádherné“ hříchy neplacení dluhů“). Brzy oba patří ke hvězdám společenských večírků, pořádaných nudící se aristokracií. Henry zbožňuje pošetilost, výstřelky a také požitkářství. Dorian ve společnosti poznává i ženy. Zamiluje se do herečky Sybily Vaneové. Navštěvuje všechna její představení a je půvabem Sybily uchvácen. Brzy jí nabídne zasnoubení a jeho okouzlení je opětováno horoucí láskou, kdy Sybila ho jako svého vyvoleného nazývá Princem Zlatohlávkem a vkládá do něho veškeré naděje. Zlom ovšem nastává ve chvíli, kdy Dorian přivede na Sybilino představení Romeo a Julie své přátele. Sybila svou roli pokazí, hlavně proto, že z výšin její lásky jí připadají všechny dialogy plytké. Dorian je tak po představení velmi zklamán a zdrcující je i osouzení přátel – obzvláště Henryho. V afektu zruší Dorian své zasnoubení a zoufalá Sybila hned onen večer spáchá sebevraždu. Dorian, který o sebevraždě neví, má ráno výčitky a uvažuje o omluvě. Zlou zprávu mu přináší Henry, který to dokládá svými argumenty, a ty na Doriana velmi zabírají – Dorian začne na tuto záležitost pohlížet jako na „podivuhodný zážitek“, tedy pod vlivem Henryho velice chladně. Pomalu ale začíná chápat vztah mezi sebou samým a obrazem. Vybavuje svůj pošetilý slib z chvíle, kdy svou tvář na podobizně poprvé spatřil. Ovlivněn Henryho promluvami o krátkém mládí a ošklivosti staroby v duchu nabízí cokoliv za to, aby zůstal stále mladým a krásným, tedy takovým, jakým je zobrazen. Jeho tvář je teď ale na obrazu změněna – nabývá rysu krutosti. Dorian se tím však nenechá vyvést z míry. „Nechť se mění. On sám bude uchráněn.“Ale svůj obraz už nechce nikomu ukazovat, proto ho schovává v podkroví. Ochladne i jeho přátelství s Basilem, který vinu přikládá vlivu Henryho. Dorian se plně vrhá do všech požitkářských dobrodružství, kdy motivaci shledává v knize, kterou dostal jako dárek od Henryho. Hrdinu této knihy –  hrdinu „veškerých vášní století“, ztotožňuje sám se sebou. Jeho pověst v okolí se tímto však kazí, ale on všechny nakonec odzbrojí svým mladistvým úsměvem, který není poznamenán žádnými stopami jeho hýření. Z nudy se oddává také studiu – jednou je jeho zájmem hudba, podruhé vůně, drahokamy, výšivky nebo luxusní oděvy a to vše je provázeno sběratelskou vášní. Čas plyne, a když je Dorianovi 38 let, po dlouhé době se setkává s Basilem. Rozhodne se ukázat mu obraz, který před lety namaloval a Basil je zděšen – své dílo málem nepoznává a nechce uvěřit takové proměně. Dorian se s Basilem pohádá a nakonec dojde k vraždě, kdy Dorian Basila zabije. Pečlivě si začně zajišťovat alibi – vydírá vědce a chemika Alana Campbella a ten nakonec mrtvolu z podkrovního pokoje beze zbytku odstraní. Malíř Basil měl v této době odjet do Paříže, ale nikdo se po něm neshání. Dorian opět vyvázně bez podezření. Ale na obraze se vše odráží – k odporným rysům obličeje se navíc na rukou objevuje i krev. Dorian svůj obraz ale utajeně skrývá a je stále hvězdou společnosti. Chvílemi ale Dorian začíná pociťovat strach. Setkává se také s prostitutkou, která zná jeho příběh a nazve ho „princem Zlatohlávkem“, což zaslechne námořník – bratr Sybily, který celý život pátrá po původci její smrti. Chce Doriana zabít, ale Dorianova vizáž ho zmate – 18 let uplynulo od Sybiliny smrti a Dorian má stále tvář mladíka. Tak Dorian opět vyvázne, ale námořník se nakonec dozvídá pravdu. Doriana ochromuje strach a bojí se vycházet z domu, protože ho pronásleduje představa číhajícího vraha. Podivuhodná režie náhod opět zasáhne v Dorianův prospěch, protože námořník je v jedné potyčce zastřelen. Dorian se tak začíná domnívat, že v jeho životě nástává pozitivní obrat a jakési polepšení. Dorian začíná konat i ušlechtilé skutky a zadívá se do venkovské dívky Hetty. Dorianovi začíná být jeho stále krásná a mladá tvář odporná a chce začít žít nový život. Myslí si, že i na jeho obraze se už něco změnilo k lepšímu – opak je však pravdou. Dorian dostane nápad zničit svou podobiznu a nadobro se tak zbavit důkazu svých předešlých činů. Vezme proto nůž – ten samý, kterým zabil Basila, a chce obraz zničit. To se mu ale stává osudným. Kolemjdoucí uslyší jen strašný výkřik. Když služebnictvo s policií proniknou do zamčeného pokoje v podkroví, spatří obraz Doriana Graye v plné mladistvé kráse, ale na zemi vidí mrtvolu ohyzdného starce. Nemohou poznat, o koho se jedná, ale podle prstenu identifikují, že se jedná o Doriana. Tím příběh končí a v Dorianově trestu je očištění od všeho zlého."
    ],
    "languageAndStyle": [
      "Dlouhé dialogy, vnitřní monology Doriana k sobě"
    ],
    "context": [
      "Autorovo zasazení: Dekadence (často zobrazuje úpadek společnosti, nudu, pesimismus, deprese, narcismus)"
    ]
  },
  {
    "id": "spalovac-mrtvol",
    "title": "Spalovač mrtvol",
    "author": "Ladislav Fuks",
    "authorInfo": "",
    "authorBio": "",
    "form": "Próza",
    "period": "Česká literatura 2. pol. 20. století",
    "typeAndGenre": "",
    "theme": "",
    "timeAndSpace": "",
    "composition": "",
    "characters": [],
    "plotSummary": [],
    "languageAndStyle": [],
    "context": []
  },
  {
    "id": "klub-rvacu",
    "title": "Klub rváčů",
    "author": "Chuck Palahniuk",
    "authorInfo": "Chuck Palahniuk, stále žije",
    "authorBio": "Minimalistický a syrový styl psaní, Pracoval jako mechanik a dobrovolník v hospici, Často používá šokující motivy",
    "form": "Próza",
    "period": "Generace X",
    "typeAndGenre": "Epika, Román (Krátký novela)",
    "theme": "Zobrazit životy nižší vrstvy společnosti (násilníků, drogově závislých), a především člověka trpícího schizofrenií. Kritika konzumní společnosti tehdejších USA. (Motivy: Schizofrenie, psychika, představy, mezilidské vztahy, smrt, odpor.)",
    "timeAndSpace": "USA 90 léta 20. století",
    "composition": "Retrospektivní",
    "characters": [
      { "name": "Vypravěč", "description": "Běžný úředník trpící nespavostí, nenávidí svůj konzumní život." },
      { "name": "Tyler Durden", "description": "Extrémní anarchista a zakladatel Klubu rváčů, Vypravěčův mentor (a nakonec jeho alter ego)." },
      { "name": "Marla Singerová", "description": "Záhadná žena, kterou Vypravěč poznává na podpůrných skupinách." }
    ],
    "plotSummary": [
      "Začátek knihy otevřen introdukcí do života Vypravěče, který pracuje jako běžný úředník pojišťovací firmy, který je zjevně neustále unavený, trpí nespavostí. Jako lék si najde návštěvy různých podpůrných skupin, kde zároveň velmi zvláštně poznává Marlu.",
      "Příběh pořádněji začíná, kdy se hlavní protagonisté – „anonymní“/ Stejnojmenný Vypravěč a Tyler Durden – setkají na letadle. Po návratu domů z pracovní cesty letadlem zjistí, že jeho byt byl zničen výbuchem a všechno, co měl, je pryč. V zoufalství se obrátí na Tylera, který mu nabídne, aby spolu bydleli. Postupně se jejich přátelství prohlubuje a Tyler se stává pro vypravěče mentorem a vzorem mužství.",
      "Začínají se pravidelně scházet, aby společně řešili své problémy a nekonformní postoje vůči společnosti. Tyler zavádí „Klub rváčů“, tajnou organizaci, kde muži fyzicky soupeří, aby se osvobodili od svých vnitřních démonů a stereotypního života. Postupem času se klub rozrůstá a získává stále větší popularitu.",
      "S narůstající slávou klubu se ale začínají objevovat i problémy. Tyler začíná prosazovat stále radikálnější akce a jeho filozofie anarchie se stává stále nebezpečnější. Vypravěč si začíná uvědomovat, že Tyler nemusí být tím, za koho se vydává, a že vlastně nemá kontrolu nad svým vlastním životem. Když se pokusí Tylera zastavit, odhalí se překvapivá pravda o jejich vztahu a o identitě Tylera.",
      "Po provedení projektu Zmatek a v průběhu projektu Likvidace (v anj. Project Mayhem) dochází Vypravěč k uvědomění, že vše co společné co s Tylerem provádí je hrozně špatně, uvědomuje si kdo vlastně Tyler skutečně je. Po smíření se s Tylerovou skutečnou identitou, v samotném konci příběhu, Vypravěč Tylera zabije pomocí střelby do sebe samotného. Tylera to „zabije“. Vypravěčovi prostřelí tvář, ale nezabije. Projekt Likvidace ale nezastavil, a teroristický útok na několik korporátních budov byl dokončen."
    ],
    "languageAndStyle": [
      ""
    ],
    "context": [
      "Autorovo zasazení: Generace X (pociťují odcizení, nejistotu a odpor ke konzumní společnosti)"
    ]
  },
  {
    "id": "fetak",
    "title": "Feťák",
    "author": "William S. Burroughs",
    "authorInfo": "",
    "authorBio": "",
    "form": "Próza",
    "period": "Beat generation",
    "typeAndGenre": "",
    "theme": "",
    "timeAndSpace": "",
    "composition": "",
    "characters": [],
    "plotSummary": [],
    "languageAndStyle": [],
    "context": []
  },
  {
    "id": "alchymista",
    "title": "Alchymista",
    "author": "Paulo Coelho",
    "authorInfo": "Paulo Coelho, stále žije, 20. a 21. století",
    "authorBio": "Jeho knížka byla přeložena do desítek jazyků, jedna z nejprodávanějších na světě, byl textař, novinář a byl i krátce uvězněn (za odpor proti režimu v brazílii), inspirace v knihách podle jeho životních zkušeností",
    "form": "Próza",
    "period": "Magický realismus",
    "typeAndGenre": "Epika, Román",
    "theme": "Hledání štěstí a smyslu života (Motivy: Štěstí, riziko, překonání lenosti)",
    "timeAndSpace": "Španělsko, Afrika (cesta, kterou urazil Santiago), doba není jasná, muselo to být po roce 1887 (esperanto [mezinárodní jazyk], uměla to jedna z postav)",
    "composition": "Chronologická",
    "characters": [
      {
        "name": "Santiago",
        "description": "Pastýř, umí číst a kvůli tomu je chytrý, je velmi citlivý, ale také odvážný, příběh popisuje jeho duševní přeměnu v jiného"
      },
      {
        "name": "Angličan",
        "description": "Nadšený a zapálený do své práce, chce se stát pravým alchymistou"
      },
      {
        "name": "Sklenář",
        "description": "Snílek a idealista, má sen, ale nechce si ho splnit"
      },
      {
        "name": "Alchymista",
        "description": "Moudrý průvodce, není přehnaně milý, ale je ochotným pomocníkem"
      },
      {
        "name": "Fátima",
        "description": "Slušná, zdvořilá, věrná arabská dívka"
      }
    ],
    "plotSummary": [
      "Alchymista je příběh chudého španělského chlapce Santiaga – pastýře, který se svým stádem ovcí putuje španělskou Andalousií a dvakrát po sobě se mu zdá tentýž sen o pohádkovém pokladu, skrytém kdesi u egyptských pyramid. Na základě zvláštního setkání se sálemským králem se rozhodne své stádo prodat a vydat se do Afriky k pyramidám přesně podle svého snu. …- Trčím tu mezi ovcemi a pokladem,- napadlo ho. Musí se rozhodnout mezi tím, na co si zvykl, a tím, co by rád měl…Pastýř začal větru závidět jeho svobodu a uvědomil si, že i on ji může mít. Nic mu nebrání, jen on sám. Ovce, kupcova dcera i andaluské pláně jsou jen stupně v jeho Osobním příběhu.",
      "Jenže těsně po svém příjezdu do cizí a neznámé země je okraden o všechny peníze. Nezbývá mu tedy nic jiného než sehnat si nějakou práci. Zkouší to u prodavače skla. Den co den u něj leští sklenice, až ho napadne, že by v nich mohli kolemjdoucím podávat osvěžující čaj. Nejen že by tím lidi přilákali, ale navíc by si lidé jistě všimli, jak krásně čaj ve skle vypadá a sklenáři by to pomohlo zvýšit obrat. Prodavač uposlechne Santiagovy rady a zanedlouho se jeho krámek stane vyhlášeným. Santiago navíc rychleji získává peníze potřebné k návratu do Španělska a ke koupi stáda ovcí. Nakonec však mění své rozhodnutí a jde dál za svým snem. Kupuje si velblouda a přidává se ke karavaně mířící k pyramidám. Cestou se seznamuje s životem pouště a se znameními, které duny písku člověku poskytují, pokud se on dobře dívá. Také poznává Angličana, který putuje do pouštní oázy neboť se dozvěděl o velmi starém Alchymistovi, který tam žije a který by mu mohl prozradit tajemství o přeměně železa ve zlato – cílové metě všech alchymistů. Při cestě však vypukne válka mezi pouštními kmeny a karavana se musí po dobu jejího trvání uchýlit do bezpečí oázy, která má statut neutrálního území. Santiago zde potkává arabskou dívku Fátimu, do které se zamiluje a ona jeho lásku opětuje.",
      "Čas plyne, boje neustávají a Santiago, kromě čtvrthodiny denně, kterou tráví s Fátimou, nemá co na práci. Začne se více věnovat dění v poušti, studuje její chod a život. Přitom si jednou všimne zvláštního letu dvou krahujců. Náhle se mu v jediné chvilince objeví před očima obraz napadené oázy. Uvědomuje si, že toto znamení nemusí být pravdou, ale přesto sdělí svou vidinu kmenovým vůdcům oázy. Oni jako muži pouště jsou zvyklí sledovat její znamení, jen jim není jasné, proč by je měl vidět také neznámý cizinec. Navíc v oázách se kmeny navzájem nenapadají. Nakonec se rozhodnou údajnému nebezpečí čelit, avšak v případě, že jejich zbraně nepromluví, přijde o život sám Santiago….Kráčel tiše. Ničeho nelitoval. Zemře-li zítra, bude to proto, že Bůh nechce budoucnost změnit. Zemře však až poté, co se přeplavil přes průliv, co pracoval ve sklenářství, poznal mlčení pouště a oči Fátimy. Od té doby, co odešel z domova, prožívá naplno každičký den. Zemře-li zítra, nic už se nezmění na tom, že jeho oči viděly mnohem víc než oči jiných pastýřů, a Santiago na to byl pyšný…",
      "Oáza je ale opravdu napadena a díky připravenosti bojovníků zachráněna. Těsně po bitvě se chlapci zjevuje impozantní Arab…Na koni seděl černě oděný jezdec se sokolem na rameni. Na hlavě měl turban a celý obličej mu halil šátek. Vypadal jako posel z pouště, ale síla jeho osobnosti předčila vše, co kdy Santiago zažil…a on se tak seznamuje se samotným Alchymistou. Ten mu nabízí svůj doprovod až k pyramidám navzdory zuřícím bojům. Cestou ho učí, jak naslouchat svému srdci či jak správně číst znamení, která člověku vesmír ukazuje, aby došel až k naplnění svých snů…když něco chceš, celý Vesmír se spojí, abys své přání uskutečnil… Jejich pouť je však přerušena bojujícím kmenem, který je zajímá jako vyzvědače. Alchymista se jim snaží situaci vysvětlit, a přitom jim sdělí, že Santiago se umí proměnit ve vítr. Bojovníci jsou překvapeni a zároveň ochotni je propustit, pokud jim přeměnu předvedou. Santiago je zděšen – on se přeci ve vítr proměnit neumí. Celý den medituje v pouštní samotě. Večer před shromážděným kmenem prosí o pomoc poušť, vítr i slunce. Zvedá se obrovská bouře, která celé okolí zahalí. V momentu, kdy se vítr utiší, Santiago stojí na druhém konci tábora. Oba tedy mohou pokračovat dále. Těsně před pyramidami Alchymista hocha opouští a ten jde sám až na místo skrytého pokladu. Marně však celou noc kope. Právě když se chtěl dát znovu do kopání přepadnou ho tři Arabové a chtějí po něm zlato. Na pokraji svých sil jim Santiago poví o svém snu a oni ho nechají, protože jednomu z nich se právě na tomto místě zdál dvakrát stejný sen o pokladu, zakopaném ve Španělsku…Santiago namáhavě vstal a ještě jednou pohlédl k pyramidám. Pyramidy se na něho usmály a on se srdcem plným štěstí jim ten úsměv oplatil. Našel poklad, protože Santiago pochopí, že poklad nalezne tedy doma, vyzvedne si u mnicha kus zlata na cestu, doma nalezne v kostelíku poklad, desátek odevzdá cikánce a vrátí se do oázy pro svou Fátimu."
    ],
    "languageAndStyle": [
      "Dialogy, monology, nepřímá řeč, přímá řeč"
    ],
    "context": [
      "Autorovo zasazení: Magický Realismus (2 světy, nadpřirozený a reálný, nereálně věci, jsou vnímány do reality)",
      "Další díla: Poutník, J. K. Rowling"
    ]
  }
];
