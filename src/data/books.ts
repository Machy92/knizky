export interface Character { name: string; description: string; }
export interface Book {
  id: string; title: string; author: string; authorInfo: string;
  authorBio: string;
  period: string; typeAndGenre: string; theme: string; timeAndSpace: string;
  composition: string; characters: Character[]; plotSummary: string[];
  languageAndStyle: string[]; context: string[];
}

export const books: Book[] = [
  {
    "id": "maly-princ",
    "title": "Malý princ",
    "author": "Antoine de Saint-Exupéry",
    "authorInfo": "Antoine de Saint-Exupéry, žil v první polovině 20. století",
    "authorBio": "Malý princ vznikl „na zákázku“ v exilu, byl to vynálezce (30 patentů ohledně letectví), záhadné zmizení 1944",
    "period": "",
    "typeAndGenre": "Epika, Pohádka",
    "theme": "Co je důležité, očima neuvidíme. Správně vidíme jen srdcem. (Motivy: Tajemství, zkrocení, priority v životě, kresby (ne vše jde popsat a říci, autor využíval kresby))",
    "timeAndSpace": "Vesmír, nejspíš 2. světová válka, odehrává se to během 8 dnů",
    "composition": "Začátek a konec chronologicky, část je psána retrospektivně (vzpomíná, kde všude navštívil planetky)",
    "characters": [],
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
      "Autorovo zasazení:"
    ]
  },
  {
    "id": "romeo-a-julie",
    "title": "Romeo a Julie",
    "author": "William Shakespeare",
    "authorInfo": "William Shakespeare, žil na přelomu 16. až 17. století",
    "authorBio": "Spolumajitel divadla Globe v Anglii, psal i sonety, pocházel z rodiny prostých sedláků",
    "period": "",
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
        "description": "Dílo je napsáno převážně blankversem, což je pětistopý nerýmovaný verš  Děj Příběh vypráví o sporu dvou rodů – Kapuletů a Montéků. Mladý Monték Romeo na začátku příběhu trpí nešťastnou láskou – je zamilovaný do Veronské krasavice Rosaliny, která však jeho city neopětuje. Jednoho dne se dostane Romeovi, od sluhy Kapuletů, který neumí číst, seznam hostů na banket, kde by měla být i Rosalina. Jelikož ji chce Romeo vidět, tak se společně s Benvoliem (Montekův synovec) a Merkuciem (příbuzný knížete) rozhodnou, že na banket dorazí v maskách. Na banketu je i čtrnáctiletá Kapuletova dcera – Julie. Hned jak ji Romeo spatří, tak zapomene na Rosalinu a zamiluje se do Julie. Láska je oboustranná. Problém je ale v tom, že jejich rody jsou znepřátelené a že Kapulet zamýšlí provdat Julii za bohatého Parise. Tybalt (synovec Kapuleta) však Romeo odhalí a chce ho potrestat, Kapulet mu to však zarazí. Po skončení banketu Julie vystoupí na balkon a začne do tmy vyznávat Romeovi lásku. Romeo, který ji opodál uslyší ji ujistí o svých citech. Domluví se, že se druhý den tajně vezmou. Romeo běží za otcem Vavřincem, který slíbí, že je oddá. Druhý den probíhá tajná svatba. Mezitím mají na ulici spor Benvolio a Merkucio s Tybaltem. Do toho přijde Romeo a spor se vyhrotí. Tybalt a Merkucio se do sebe pustí a Tybalt Merkucia zabije. Romeo se rozzuří a začne s Tybaltem šermovat a zabije ho. Za vraždu Tybalta je Romeo vyhoštěn z Verony, což je obrovská rána pro Julii. Tajně spolu stráví noc (chůva jim pomáhá) a Romeo druhý den odjíždí do Mantovy a slíbí si, že se brzy uvidí. Julie truchlí pro Romeo, ale zastírá to žalem pro Tybalta. Kapulet, aby zbavil Julii zármutku rozhodne, že si co nejrychleji vezme Parise. Julie v zoufalosti běží za otcem Vavřince a prosí ho, aby té svatbě zabránil nebo že se zabije. Otec Vavřinec jí proto dá uspávací lektvar, který si má Julie vzít v předvečer svatby a po němž bude vypadat jako mrtvá. Lektvar bude fungovat jen 42 hodin. Mezitím Vavřinec pošle vzkaz Romeovi do Mantovy a společně vyzvednou po pohřbu probouzející se Julii v rodinné hrobce. Julie si tedy lektvar vezme a v noci před svatbou ho vypije. Ráno najde chůva Julii „mrtvou“. Koná se pohřeb. Celý pohřeb vidí Balthazar, Romeúv sluha, kterého Romeo poslal do Verony, aby mu přinášel novinky. Baltazar rychle letí za Romeem a řekne mu, že je Jůlie mrtvá. Romeo je zdrcený, dopis od otce Vavřince totiž nedostal. Romeo chce okamžitě skončit svůj život. Podplatí tedy lékárníka, aby mu prodal prudký jed a jede spolu s Baltazarem do Verony. U Hrobky Kapuletů potká však Parise, který šel k Juliinu hrobu přinést květiny. Začnou spolu bojovat a Romeo Parise zabije. Páže Parise to uvidí a jde pro stráže. Romeo jde k tělu Julie a vypíjí jed, načež umírá. Mezitím přichází otec Vavřinec, aby došel pro probouzející se Julii. Julie se probouzí a zjistí, že je Romeo mrtev. Chce se hned zabít. Vavřinec ji přemlouvá, aby to nedělala a odešla s ním. Julie to odmítá a vezme od Romeova těla dýku a probodne se. Zatím na místo přicházejí jak Kapuleti, tak Montékové. Když zjistí, co se stalo, tak pochopí hloupost jejich sporu a usmíří se. Rozhodnou se, že vystaví zlaté sochy Romeo a Julie ve Veroně. Až tragická smrt jejich dětí jim ukáže, jak malicherný jejich spor byl."
      }
    ],
    "plotSummary": [],
    "languageAndStyle": [
      "Monolog (Jedna postava, pocity, myšlenky), dialog (dvě nebo více postav, konflikty, interakce), replika (Jedna promluva postavy, než ji někdo vystřídá)"
    ],
    "context": [
      "Autorovo zasazení:"
    ]
  },
  {
    "id": "zkroceni-zle-zeny",
    "title": "Zkrocení zlé ženy",
    "author": "William Shakespeare",
    "authorInfo": "William Shakespeare, žil na přelomu 16. až 17. století",
    "authorBio": "Spolumajitel divadla Globe v Anglii, psal i sonety, pocházel z rodiny prostých sedláků",
    "period": "",
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
      "Autorovo zasazení:"
    ]
  },
  {
    "id": "farma-zvirat",
    "title": "Farma zvířat",
    "author": "George Orwell",
    "authorInfo": "George Orwell, žil v první polovině 20. století",
    "authorBio": "George Orwell byl jen pseudonym (pravé jméno bylo Eric Arthur Blair, skrýval ho kvůli chudobě), dobrovolník ve válce, Vizionář (popularizoval slova nebo je vymyslel: Velký bratr, Studená Válka. Doublethink)",
    "period": "",
    "typeAndGenre": "Epika, Novela",
    "theme": "Vůdci každé společnosti, kdykoliv se naskytne možnost, chtějí zneužívat svého postavení. (Motivy: Komunismus, prasata, zvířata, nadřazenost)",
    "timeAndSpace": "2. polovina 20. století, statek v Anglii",
    "composition": "Chronologická",
    "characters": [],
    "plotSummary": [
      "Když kanec Major umíral na Panské farmě v Anglii, svolal si ostatní zvířata a povídal jim o tom, jak je lidé na statku trápí, jak mají nedostatek žrádla, jak jsou otroky lidí, a že musí být revoluce. Revoluce nastala. Zvířata vyhnala z farmy opileckého pana Jonese a s ním všechny ostatní lidi, a prasata coby nejinteligentnější zvířata se zmocnila vedení farmy. Nastalo období Zvířecí farmy a animalismu. Hymnou se stala píseň Zvířata Anglie, která byla zpívána na kterékoliv schůzi a jejich heslem věta „čtyři nohy dobré, dvě špatné“. Všichni se spojili proti lidem. Zvířata stanovila Sedm přikázání, která musí být dodržována. Mezi nimi byla pravidla o tom, že žádné zvíře nesmí zabít jiné zvíře, nikdo nesmí pít alkohol, všechna zvířata jsou si rovna, žádné zvíře nesmí spát v posteli, každý, kdo chodí po dvou nohách je nepřítel, žádné zvíře nebude chodit oblečené, … Nejdříve šlo všechno pěkně – zvířata byla svobodná, pracovala skvěle a s chutí a byla soběstačná. Jenom Molině se nová politika příliš nelíbila. Stýskalo se jí po tom, jak ji lidé hladili, krmili cukrem a zdobili jí hřívu pentlemi. Proto utíká z farmy k lidem. Dvě nejchytřejší prasata byli Kuliš a Napoleon. Tato dvě prasata se stala vůdci celé farmy. Některá zvířata se naučila číst a trochu psát, ale většina z nich byla velmi hloupá a ochotná poslouchat prasata na slovo. Lidé se snažili získat farmu zpět, ale zvířata je společnými silami porazila. Nejstatečněji ale bojoval Kuliš, který se vrhl přímo na pana Jonese. Tato slavná bitva dostala název „bitva U Kravína“ a Kuliš dostal vyznamenání. Zvířecí farma se má stát vzorem pro celé okolí. Prasata plánují například zavést elektřinu. Napoleon s Kulišem se mezi sebou začali hádat a spory byly čím dál větší. Kuliš chtěl postavit větrný mlýn, ale Napoleon ne. Napoleon vyhnal chudáka Kuliše a poslal na něj divoké psy, které si sám vychoval. Všem ostatním zvířatům napovídal lži a překroutil spoustu věcí. Hloupoučká zvířata mu uvěřila, že se Kuliš spolčil s lidmi a v bitvě U Kravína se zachoval velmi zbaběle. Od té doby se na farmě začaly dít podivné věci a za všechno podle prasat mohl Kuliš, který byl od začátku revoluce zrádce. Napoleon rozkázal stavět větrný mlýn a namluvil zvířatům, že to byl původně jeho nápad a Kuliš mu ho ukradl. Zvířata tvrdě pracují a nebrání se. Pořád si myslí, že to dělají pro sebe a že se budou mít lépe, až ho dostaví. Mlýn je stavěn celkem třikrát. Jednou totiž spadne díky silnému větru a podruhé je zničen lidmi, kteří ho při další bitvě odpálí střelným prachem. Zvířata mají čím dál horší podmínky k životu, pracují příliš tvrdě a mají nedostatek jídla. Pištík jim předhazuje čísla a statistiky o tom, jak se jejich situace rok od roku lepší, a zvířata mu slepě věří. Prasata zatím obydlují dům pana Jonese, oblékají se, pijí whisky a přes prostředníka Whympera obchodují s lidmi – hlavně se dvěma sousedy (Frederick a Pilkington). Jsou lenošní jako lidé. Spí v postelích, pijí alkohol a poopravují Sedm přikázání. Změní například to, že všechna zvířata jsou si rovna, některá jsou si ale rovnější, žádné zvíře nesmí pít alkohol přes míru a žádné zvíře nesmí spát v posteli s prostěradly. Vraždí ostatní zvířata za to, že byla údajně spolčena s Kulišem a za jakékoliv myšlenky proti Napoleonovi (již zvaný Vůdce). Ta si nechají namluvit, že skutečná znění Sedmi přikázání již zapomněla. Nejoddanější pracovník je kůň Boxer, jehož heslem je, že musí pracovat lépe a s chutí a že Napoleon má vždycky pravdu. Pracuje ale tolik, že se předře. Nedočká se důchodu, jak mu bylo slíbeno, ale je odvezen na jatka. Zvířata, která umí číst, tohle zjistí, když přijede řeznické auto. Nejvíc nešťastný je osel Benjamin a kobyla Lupina, kteří byli jeho nejlepší přátelé. Pištík jim ale napovídá, že Boxer byl odvezen do nemocnice autem, které dříve patřilo řezníkovi, ale teď si ho koupil doktor. Prasata se naučí chodit po dvou, mezi ostatními zvířaty prochází s bičem a hlídají je obrovští psi. Začínají spolupracovat s lidmi a přejmenují farmu zpět na Panskou. S lidmi popíjí a hrají karty. Ostatní zvířata sledují, jak se v domě hádají prasata s lidmi a uvědomují si, že je od sebe nedokážou rozeznat. Prasata totiž vypadají jako lidé."
    ],
    "languageAndStyle": [
      "Dialogy, Monology, Pásmo vypravěče"
    ],
    "context": [
      "Autorovo zasazení:",
      "Další díla: 1984, Karel Čapek"
    ]
  },
  {
    "id": "bila-nemoc",
    "title": "Bílá nemoc",
    "author": "Karel Čapek",
    "authorInfo": "Karel Čapek, žil na přelomu 19. a 20. století",
    "authorBio": "7 nominací na nobelovku, zahradník a pejskař, průkopník „Sci-fi“ před existencí žánru",
    "period": "",
    "typeAndGenre": "Drama, Tragédie",
    "theme": "Doktor Galén objeví lék na smrtelnou bílou nemoc, ale odmítá léčit mocné a bohaté, dokud neuzavřou světový mír. Ve chvíli, kdy se mu podaří přesvědčit diktátora Maršála, je Galén ušlapán zfanatizovaným davem a lék je nenávratně zničen. (Motivy: Nemoc, pandemie. medicína, diktatura, válka, fašismus)",
    "timeAndSpace": "Před 2. světovou válkou, vymyšlená země",
    "composition": "Chronologická",
    "characters": [],
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
      "Autorovo zasazení:",
      "Další díla: Válka s Mloky, R. U. R., ze života hmyzu, George Orwell"
    ]
  },
  {
    "id": "rur",
    "title": "R.U.R.",
    "author": "Karel Čapek",
    "authorInfo": "Karel Čapek, žil na přelomu 19. a 20. století",
    "authorBio": "7 nominací na nobelovku, zahradník a pejskař, průkopník „Sci-fi“ před existencí žánru",
    "period": "",
    "typeAndGenre": "Drama, Tragédie",
    "theme": "Varování lidí, aby se nestali otroky vlastních vynálezů (Motivy: následky „povyšování se nad Boha\", poměr člověka ke světu, mezilidské vztahy. Lidské hodnoty. nenasytnost člověka, rozpor příroda x věda)",
    "timeAndSpace": "Rossomův ostrov v blízké budoucnosti, nachází se zde továrna na roboty",
    "composition": "Chronologická",
    "characters": [],
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
      "Autorovo zasazení:"
    ]
  },
  {
    "id": "o-mysich-a-lidech",
    "title": "O myších a lidech",
    "author": "John Steinbeck",
    "authorInfo": "John Steinbeck, žil v 20. století",
    "authorBio": "Pes mu sežral první rukopis (O myších a lidech), Byl pod drobnohledem FBI (kvůli kritizování kapitalismu), Nobelova cena kterou nikdo neočekával (Sám řekl, že si ji nezasloužil)",
    "period": "",
    "typeAndGenre": "Epika, Novela",
    "theme": "Hlavním tématem jsou společenské poměry v prostředí venkova tehdejší Ameriky. Autor zachycuje, jak se lidský sen může v okamžiku rozpadnout. Píše o důležitosti přátelství, o samotě a také lásce. Zachycen je také rasismus a odměřené vztahy bílých k černochům. (Motivy: Přátelství, touha po majetku, násilí, strach ze samoty, cesta za sny, obrovská touha po štěstí, chudoba, rasismus, oběti, veliké zklamáni, hospodářská krize.)",
    "timeAndSpace": "Farma v Kalifornii, 1. polovina 20. století (hospodářská krize)",
    "composition": "Chronologická",
    "characters": [
      {
        "name": "George Milton (Georgie)",
        "description": "Hodný, pracovitý, touží po spokojeném životě, o vlastní farmě, stará se o Lennieho, přesto, že ho často štve a vyčítá mu situace, má ho i přes to rád"
      },
      {
        "name": "Lennie Small",
        "description": "Mentálně postižený, chování malého dítěte, hloupý, neohrabaný, hodně mohutný, ale neumí svou sílu ovládat, hodný, má rád hebké věci (zvířata,..)"
      },
      {
        "name": "Curley",
        "description": "Majitel ranče, agresivní, malé postavy, zakomplexovaný, vyvolává konflikty, ustrašený"
      },
      {
        "name": "Curleyova žena",
        "description": "Krásná, přihlouplá, koketní, vadí ji málo pozornosti od manžela"
      },
      {
        "name": "Crooks",
        "description": "Černoch, od všech se distancuje, protože je černoch, říká, že nemá právo se bavit s bělochy, v té době na okraji společnosti, inteligentní"
      },
      {
        "name": "Slim",
        "description": "Kočí, všemi velmi vážený, vzhlíží k němu, mají k němu respekt, šarmantní, hodný"
      },
      {
        "name": "Candy",
        "description": "Nejstarší pracovník, přišel o jednu celou dlaň, na ranči vlastně přebytečný, hodný, nakonec se připojí k L. a G. a plánují společný sen o vlastní farmě, má velmi starého psa, kterého se nechtěl vzdát"
      }
    ],
    "plotSummary": [
      "O myších a lidech se odehrává v období hospodářské krize. Je příběhem dvou mužů, námezdních dělníků, kteří putují za prací z jednoho místa na druhé. Jeden z nich, mentálně zaostalý Lennie Small, vyrůstal u své tety Kláry a po její smrti převzal péči o Lennieho jejich přítel George Milton. Přes své postižení je Lennie velmi pracovitý a hlavně silný, což ho přivádí do nemalých problémů. Má obrovské potěšení z toho, když může hladit něco příjemného na omak, a proto zbožňuje myši a podobná zvířátka. Neuvědomuje si však svou sílu a každé myši vždy nakonec zlomí vaz.Lennie a George měli společný sen o malém hospodářství, kde budou svými pány, a kde se bude moct Lennie starat o své vytoužené králíky. George dokonce vyhlédnul malou farmu, kterou vlastnili staří manželé a byli ochotni ji prodat. Proto, když přicházejí na ranč v Soledadu, chtějí tam vydržet co nejdéle, aby si vydělali na svůj sen, ale jejich cesta za vysněným hospodářstvím se brzy zkomplikuje. Jednoho dne Lennieho napadne správcův syn Curley, který se neustále snaží ostatním dokazovat svou převahu – snad kvůli své malé postavě a snad také kvůli žárlivosti na svou novopečenou manželku, která se sama potuluje po ranči a snaží se navázat kontakt s ostatnímu muži z ranče. Lennie se Curleyho útoku brání a kvůli své obrovské síle mu rozdrtí ruku. Tento spor mezi sebou ještě urovnají, ale Curley čeká na vhodnou příležitost, aby Lenniemu oplatil tuto potupu.Lennie si jednoho večera hraje se štěňátkem, ale opět neodhadne svou sílu a zlomí mu vaz. Najednou se u něj objeví Curleyho žena a chce si s ním povídat. Začne mu vyprávět o svém zpackaném životě, zatímco on mluví o svých králíčcích, jak je rád hladí a mazlí se s nimi. Ona mu nabídne, aby si pohladil její vlasy, na které je náležitě hrdá. Lenniemu se to zalíbí a hladí ji stále silněji a silněji až Curleyho žena začne křičet. Lennie je celý vyděšený, ucpe jí ústa a drží hlavu. Při svém vyděšení si neuvědomí, jak silně ji tiskne a zlomí ji vaz. Ví, že provedl něco špatného a uteče. Když muži najdou Curleyho mrtvou ženu, vydají se Lennieho hledat a Curley vyžaduje jeho zlynčování. George ví, kam se Lennie běžel schovat, jde za ním, a aby ho ušetřil krutému zacházení, zastřelí jej."
    ],
    "languageAndStyle": [
      "Přímá řeč, dialog"
    ],
    "context": [
      "Autorovo zasazení: Ztracená generace (Je to pocit vykořenění a duchovní prázdnoty generace, která byla poznamenána první světovou válkou a nyní hledá smysl v extrémních situacích, boji nebo v návratu k základním hodnotám. [Přímočarý a drsný jazyk: Dialogy jsou psány lidovou mluvou, často s gramatickými chybami (jazyk nádeníků). Kontrast mezi snem a realitou: Postavy neustále mluví o tom, že si jednou pořídí vlastní hospodářství a budou „žít z tučných let země“.Přírodní lyrika: Steinbeck často začíná kapitoly detailním a krásným popisem krajiny (údolí Salinas), který kontrastuje s tragickým příběhem lidí.])"
    ]
  },
  {
    "id": "starec-a-more",
    "title": "Stařec a moře",
    "author": "Ernest Hemingway",
    "authorInfo": "Ernest Hemingway, žil v 20. století",
    "authorBio": "Byl novinář během 1. světové války, nobelova cena za literaturu, psal teorií ledovce (vše je pod povrchem, čtenář si to domýšlí)",
    "period": "",
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
      "Autorovo zasazení:"
    ]
  },
  {
    "id": "velky-gatsby",
    "title": "Velký Gatsby",
    "author": "Francis Scott Fitzgerald",
    "authorInfo": "Francis Scott Fitzgerald, žil ve  20. století",
    "authorBio": "Pojmenoval „Jazzový věk“ (alkohol, párty, cesta do záhuby, ne jako ta hudba), Rivalita s Hemingwayem, destruktivní manželství se Zeldou",
    "period": "",
    "typeAndGenre": "Epika, Román",
    "theme": "Nehynoucí touha po dosažení snu a deziluze, (Gastby měl vše co by chtěli ostatní, ale nejvíce chtěl lásku Daisy, která nakonec nepřišla.) Možná, že v tehdejší společnosti, kde všichni pili a bavili se nemohl svého snu nikdy dosáhnout. (Motivy: Plnění amerického snu, příležitosti zbohatnou, večírky, dopad války na lidi)",
    "timeAndSpace": "Long Island (New York City), 1922",
    "composition": "Retrospektivní",
    "characters": [],
    "plotSummary": [
      "Nick se setkává se svojí poněkud povrchní sestřenicí Daisy vdanou za Nickova známého Toma Buchanana, se kterým má malou dcerku. Manželství však není zcela šťastné, Nick dokonce osobně poznává Tomovu milenku Myrtle Wilsonovou, manželku majitele blízké autoopravny. Nick naváže styk s Gatsbym, je zván na jeho pravidelné monstrózní večírky, zapadne do zdejší pestré společnosti a seznámí se s půvabnou mladou golfistkou Jordan Bakerovou. Stane se přítelem Gatsbyho a získává tak jedinečnou příležitost se dozvědět něco více o tomto člověku, o jehož minulosti na veřejnosti kolují pouze nepodložené legendy či pomluvy.",
      "Postupně se dozvídá detaily nejen o přinejmenším podezřelých Gatsbyho obchodech s alkoholem, do kterých je zapojen i známý podvodník Meyer Wolfsheim, ale i celou historii jeho tajemného života. Gatsby se původně jmenoval Gatz a pocházel z chudé rodiny, velmi se však toužil vypracovat, a tak utekl z domova. Potkal milionáře Dana Codyho, který mu později dopomohl k penězům. Ještě více však jeho život poznamenala láska k mladé bohaté dívce Daisy, milence však od sebe oddělilo jednak rozdílné společenské postavení a také válka, ve které byl Gatsby povýšen na majora, což mu také umožnilo strávit několik měsíců v Oxfordu. Během té doby se však Daisy vdala. Vychází tak najevo, že životní láskou Gatsbyho je žena Toma Buchanana Daisy, a Gatsby se s ní znovu setkává, čímž způsobí naprostý rozvrat jejího manželství s Tomem.",
      "Po jednom soukromém večírku, kde dojde k přímé konfrontaci Gatsbyho a Toma, se stane tragická osudová událost. Manželku George Wilsona Myrtle přejede automobil patřící Gatsbymu, za volantem však sedí Daisy. Wilson je naprosto zničený, dozvěděl se totiž o manželčině nevěře a chtěl s ní jinde začít nový život. Tom Buchanan, který se s Wilsonem dobře zná, mu naznačí, kdo je majitelem inkriminovaného vozu, který ujel z místa nehody. Gatsby hodlá chránit Daisy, ale ještě dříve je ve svém domě zastřelen mstícím se Wilsonem, který vzápětí páchá sebevraždu. Ironií je, že nad Gatsbym nikdo kromě jeho otce a Nicka netruchlí, bohatá městská smetánka jako by zapomněla na pohostinnost, které užívala v Gatsbyho domě. Daisy a Tom odjíždějí spolu neznámo kam. Nick Carraway je tím znechucený, končí svůj vztah s Jordan a odjíždí domů."
    ],
    "languageAndStyle": [
      "Dialogy"
    ],
    "context": [
      "Autorovo zasazení:"
    ]
  },
  {
    "id": "kytice",
    "title": "Kytice",
    "author": "Karel Jaromír Erben",
    "authorInfo": "Karel Jaromír Erben, žil v 19. století",
    "authorBio": "Sbíral lidové příběhy, prostřední jméno, neměl ho, Celý život bojoval s podlomeným zdravím (slabé plíce, koktání)",
    "period": "",
    "typeAndGenre": "Lyricko-epické, Sbírka baladických básní",
    "theme": "Kniha poukazuje na lidové tradice a špatné vlastnosti lidí. Po jejich prohřešku přichází přísný a neúprosný trest, který postavy pokorně snášejí. Jednou šancí ke zmírnění či odčinění je pokání. (Motivy: Vina a trest, osud, nadpřirozeno, lidové tradice)",
    "timeAndSpace": "České země, venkov, temná neurčitá místa vycházející z lidových pověstí (kostely, hřbitovy), 19. století, čas není určen",
    "composition": "Zrcadlová (básně), chronologická",
    "characters": [
      {
        "name": "Veršová výstavba",
        "description": "Gnomický verš, pro který je typická krátkost a hutnost"
      }
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
      "Autorovo zasazení:"
    ]
  },
  {
    "id": "kral-lavra",
    "title": "Král Lávra",
    "author": "Karel Havlíček Borovský",
    "authorInfo": "Karel Havlíček Borovský, žil v 19. století",
    "authorBio": "Jeho slavné jméno Borovský si vymyslel (rodná vesnice), investigativní novinář, nebál se vtipkovat o politice, když za to tehdy hrozilo vězení",
    "period": "",
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
      "Autorovo zasazení: Realismus (Je to literatura, která kriticky a s humorem zobrazuje nedostatky společnosti, politickou nesvobodu a lidskou hloupost. [Kritika panovníka,  Lidový jazyk, Ponaučení])"
    ]
  },
  {
    "id": "bylo-nas-pet",
    "title": "Bylo nás pět",
    "author": "Karel Poláček",
    "authorInfo": "Karel Poláček, žil v první polovině 20. století",
    "authorBio": "Byl to \"profesionální mrzout\", ačkoliv v to v knihách vůbec nevypadá, Nejsmutnější příběh nejveselejší knihy (byl to žid, měl být odvozen do koncentráku, zrovna v tu dobu psal Bylo nás pět), obrovský fanoušek fotbalu",
    "period": "",
    "typeAndGenre": "Epika, Román",
    "theme": "Přiblížit život na malém městě a život dětí. Snažil se vyzdvihnout slabost lidí z města a směšně je popisoval dětskýma očima. (Motivy: problematika na malém městě)",
    "timeAndSpace": "Česko, přelom 19. 20. století",
    "composition": "Chronologická",
    "characters": [
      {
        "name": "Péťa Bajza",
        "description": "Vypravěč a hlavní postava, malý kluk s mnoha darebáckými nápady a rozmary. Snaží se mluvit spisovně, ale je to humorně nepřirozené."
      },
      {
        "name": "Tonda Bejval",
        "description": "Petrův nejlepší kamarád, pro kluky „vynalezl“ spoustu skvělých her, chodí s Petrem do školy."
      },
      {
        "name": "Čenda Jirsák",
        "description": "Petrův nepříliš dobrý kamarád, ministrant, pochází z věřící rodiny – snaží se udělat takový hřích, jaký ještě nikdo v životě neudělal, jeho otec má přezdívku Krakonoš."
      },
      {
        "name": "Éda Kemlink",
        "description": "Patří do této party taky, nejméně výrazná osobnost, má psa Pajdu, který s kluky tráví taky hodně času a krade v řeznictví salám. Z úřednické rodiny, chytrý."
      },
      {
        "name": "Zilvar z chudobince",
        "description": "Se svým otcem žije v chudobinci, je nad věcí a pana Fajsta neřeší tak jako ostatní kluci."
      }
    ],
    "plotSummary": [
      "Hlavní postavou je P. Bajza, který se kamarádí se čtyřmi kluky a společně zažívají různá dobrodružství. Chodí tajně do oblíbeného biografu, a aby nemuseli platit, tak tam lezou tajně oknem, ale jednoho dne jsou stejně dopadeni. Chtějí si ochočit vosy, plánují dobrodružné cesty do cizokrajných míst, válčí s nepřátelskými Ješiňáky a Habrováky a chodí se také koupat k rybníku. Dělají si legraci z nevrlého pana Fajsta, který si neustále stěžuje na mládež. Péťa párkrát navštíví i Otakárka, ale jeho vychovatelka má strach, aby na něj Péťa neměl špatný vliv. Péťovi rodiče vlastní koloniál, mají ještě dvě děti – malou Mančinku a staršího Láďu. Žije u nich služka, které přezdívá Rampepurda. Dost často se spolu škádlí a vyvádějí si navzájem různé naschvály. Další příhodou je příbuzných Vařekových, kteří Bajzovým závidí a kritizují je, když jí maso. Proto před nimi schovají husu a tvrdí, že mají pouze brambory. Teta ovšem husu najde, urazí se, což pobaví celou rodinu. Když do města přijede cirkus, všichni jej chtějí navštívit. Petr se promění z malého nezbedy na malého gentlemana. Do školy s ním začne chodit i pohybově nadaný Alfons Kasalický a všichni jsou hrdí, když se s ním mohou kamarádit. Petrovi se podaří přesvědčit rodiče, aby se vydali do cirkusu. V cirkuse byl i Zilvar, který si lístek chtěl odpracovat s ostatními hochy a Otakárkem. Otakarova vychovatelka udělala, ale hysterickou scénu, kvůli které byli všichni hoši vyhozeni. Jednoho dne Péťa onemocní spálou a zdají se mu dobrodružné sny, kterým věří.  Má mluvícího slona Jumba, kterému koupil červenou čepici protkanou zlatem s bambulkou a se kterým se vydává do Indie s ostatními hochy a Evou. Tam navštíví českého krejčího, seznámí se s maharádžou a princeznou, se kterou se Zilvar ožení. Na jeho svatbě se kluci poperou a po uzdravení Petrovi dochází, že se mu asi vše jen zdálo."
    ],
    "languageAndStyle": [
      ""
    ],
    "context": [
      "Autorovo zasazení:"
    ]
  },
  {
    "id": "klapzubova-jedenactka",
    "title": "Klapzubova jedenáctka",
    "author": "Eduard Bass",
    "authorInfo": "Eduard Bass, žil na přelomu 19. a 20. století",
    "authorBio": "Klapzubova jedenáctka jako „výchova“ (měla být propagována jako smysl pro fair play, týmovou spolupráci), Cirkusový badatel kvůli dílu (Cirkus Humberto), Mistr „rozmarného“ vypravěčství a češtiny (měl bohatý jazyk při psaní knih)",
    "period": "",
    "typeAndGenre": "Epika, Novela",
    "theme": "Autor chtěl dát najevo, že s poctivostí nejdál dojdeš. (Motivy: Poctivost, píle, bratrství)",
    "timeAndSpace": "20. století, Česko a celý svět",
    "composition": "Chronologická",
    "characters": [
      {
        "name": "Chalupník/otec Klapzuba",
        "description": "Starý chudý chalupník; poctivý, vynalézavý, chytrý; pořád kouří fajfku"
      },
      {
        "name": "Synové",
        "description": "Honza (=kapitán), Slávek, Frantík, Jura, Josífek, Karlík, Tonda – čestní, hodní, slušní, poctiví, pracovití"
      },
      {
        "name": "Birimarataoa",
        "description": "Náčelník lidožroutů"
      }
    ],
    "plotSummary": [
      "Starý chalupník Klapzuba měl 11 synů a nevěděl, jak je uživí, vytvořil z nich tedy fotbalové mužstvo. 3 roky je tvrdě trénoval a díky tomu se takřka ihned dostali do první třídy. V ČR porážejí všechny týmy bez ztráty jediné branky a po vítězství nad Spartou a Slávií se stávají mistry ČR. Poté začnou dobývat Evropu, ale ani zde nepustí jediný gól. FC Barecelona z nich dostala strach, a tak vymyslela že je zmrzačí, starý Klapzuba to však zjistil a své kluky navlékl do pryžového nafukovacího obleku, to Barceloně zhatilo plány a Klapzubové opět vyhrávají. Po porážce Huddersfieldu se stávají mistry Evropy, přičemž po rozhovoru s anglickým králem přiberou do týmu na nějaký čas Waleského prince jako náhradníka. Jednoho dne pihovatý kluk Klapzubům řekne že hrají pro peníze, kluci celkově ztrácejí chuť hrát, a tak se rozhodnou raději skončit. Přijde jim však nabídka na zápas v Austrálii o mistrovství světa, a tak se kluci dohodli ještě tento jeden zápas odehrát. Klapzubáci vyhrají i tento zápas a stávají se mistry světa, avšak poprvé zde dostávají gól. Při cestě zpět jejich loď ztroskotá, zachrání se pomocí nafukovacích obleků a doplují na ostrov lidožroutů. Jejich náčelník jim nabídne, že když si s nimi zahrají kopanou a vyhrají, nechají je žít. Při této kopané se však nekope do míče nýbrž do protivníků. Klapzubové i tento zápas vyhrají díky svým nafukovacím oblekům a z ostrova utečou na kánoích, které jim ukradli. Zachrání je loď, která zrovna projíždí kolem a v pořádku se vrací domů."
    ],
    "languageAndStyle": [
      "Monology"
    ],
    "context": [
      "Autorovo zasazení:"
    ]
  },
  {
    "id": "smrt-krasnych-srncu",
    "title": "Smrt krásných srnců",
    "author": "Ota Pavel",
    "authorInfo": "Ota Pavel, žil ve 20. století",
    "authorBio": "Psaní jako lék (Svá nejslavnější díla, jako je Smrt krásných srnců, napsal právě v době, kdy bojoval s nemocí.), Tatínek, mistr v prodeji i životě, Sportovní novinář s citem",
    "period": "",
    "typeAndGenre": "Epika, Soubor povídek",
    "theme": " (Motivy: )",
    "timeAndSpace": "První polovina 20. století, Křivoklátsko",
    "composition": "Chronologická",
    "characters": [],
    "plotSummary": [],
    "languageAndStyle": [
      ""
    ],
    "context": [
      "Autorovo zasazení:",
      "Další díla: Jak jsem potkal ryby, Ladislav Fuks"
    ]
  },
  {
    "id": "krysar",
    "title": "Krysař",
    "author": "Viktor Dyk",
    "authorInfo": "Viktor Dyk, žil na přelomu 19. a 20. století",
    "authorBio": "Předpověděl si smrt (poslední sbírka Devátá vlna psal o moři a smrti vlnách, sám pak zemřel při koupání v moři), ve vězení za 1. světové války kvůli velezradě, vášnivý šachista",
    "period": "",
    "typeAndGenre": "Epika, Novela",
    "theme": "Autor velmi dobře poukazuje na měšťanstvo– končili Trumma a Frosche, kteří slíbili (Motivy: Chamtivost, zkáza, výsměch, láska, pomsta)",
    "timeAndSpace": "Německé město Hameln, čas není přesný, zřejmě středověk",
    "composition": "Chronologická",
    "characters": [
      {
        "name": "Krysař",
        "description": "jé v hlavní hrdina příběhu, krysař je mladý, tajemný, romantický, chápavý muž,"
      },
      {
        "name": "Agnes",
        "description": "krásná dívka z města Hammeln, která se nedokáže rozhodnout mezi krysařem a"
      },
      {
        "name": "Kristián",
        "description": "přezdívá se mu též dlouhý Kristián, je milenec Agnes velmi vypočítavý, jelikož"
      },
      {
        "name": "Sepp Jorgen",
        "description": "je dobře rostlý a má kudrnaté vlasy; rozumu moc nepobral, „je pomalý“,"
      }
    ],
    "plotSummary": [
      "je snad jedinou zbraní, která na tyto parazity působí. Tiché, temné hraní je odloudí a utopí.",
      "Během svého působení se zamiluje do Agnes, ke které cítí hlubokou lásku. Když ve městě",
      "už nezbyla ani jedna jediná krysa, a tím pádem byl úkol splněn, žádal krysař radní, aby mu",
      "zaplatili tak, jak bylo předem domluveno. Nicméně radní slib nedodrželi a krysař nedostal ani",
      "pouhé poděkování. Toho ovšem značně rozhořčilo, přesto se z důvodu vztahu k Agnes",
      "nepokusil ani o pomstu. Jedné noci se však dozví, že Agnes čeká dítě se svým Kristiánem,",
      "kterého nemiluje, protože miluje krysaře. Z urputného žalu spáchá Agnes sebevraždu",
      "skokem z hory Koppel a v Hammeln už nezbylo nic, co by tam krysaře drželo. Proto se",
      "rozhodne o krutou pomstu městu. Zhluboka a silně zapíská na píšťalu ukolébavku o",
      "sedmihradském království, všichni lidé ho slepě následují a spadnou do propasti. Jen místní",
      "blázen Jordan píseň neslyší. Poté krysař do propasti hází svoji píšťalu a skáče dolů také.",
      "Sepp Jorgen teprve druhý den pochopil, co se stalo a že je vlastně jediná živá duše víš",
      "nadobro opuštěném městě. Až druhý den na něj začíná doléhat včerejší vábení píšťaly a on",
      "se vydává směrem k propasti. Slyš ti ale křik malého osamělého dítěte, které přehluší i zvuk",
      "píšťaly. Sepse tedy vydal hledat náhradní matku pro dítě."
    ],
    "languageAndStyle": [
      "Přímá řeč, monology, dialogy"
    ],
    "context": [
      "Autorovo zasazení:",
      "Další díla: Devátá vlna, Karel Čapek"
    ]
  },
  {
    "id": "promena-soubor-povidek",
    "title": "Proměna (soubor povídek)",
    "author": "Franz Kafka",
    "authorInfo": "Franz Kafka, žil na přelomu 19./20. století",
    "authorBio": "Nechtěl být slavný, pracoval jako úředník, složitý vztah k otci",
    "period": "",
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
      "Autorovo zasazení:"
    ]
  },
  {
    "id": "obraz-doriana-graye",
    "title": "Obraz Doriana Graye",
    "author": "Oscar Wilde",
    "authorInfo": "Oscar Wilde, žil v 19. století",
    "authorBio": "Šel do vězení kvůli svému životu (byl gay), jediný román je světový hit, po vězení používal jiné jméno Sebastian Melmoth",
    "period": "",
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
      "Autorovo zasazení: Dekadence (Umělecký směr konce 19. století, který oslavuje krásu, umělost, smyslovost a často se vyžívá v náladách zmaru, smutku a opovržení společností. [Uctívání krásy: Postavy (zejména lord Henry) tvrdí, že krása a mládí jsou jediné věci, na kterých v životě záleží.Aforismy a paradoxy: Wilde miloval věty, které převracejí běžnou logiku naruby (např. „Jediný způsob, jak se zbavit pokušení, je podlehnout mu.“). Smyslovost: Detailní popisy luxusu, vůní, drahokamů a uměleckých předmětů.])"
    ]
  },
  {
    "id": "spalovac-mrtvol",
    "title": "Spalovač mrtvol",
    "author": "Ladislav Fuks",
    "authorInfo": "Ladislav Fuks, žil v 20. století",
    "authorBio": "Žil v „muzeu hrůzy“ (v jeho bytě mumie, posmrtné masky), skrytá identita (byl homosexuál), byl fascinován detaily",
    "period": "",
    "typeAndGenre": "Epika, Novela",
    "theme": "Změna člověka, pod vlivem historických událostí a nátlaku, od mírumilovného člověka, který má rád svoji rodinu až po vraha, který ji celou zabije, ideologie moci (Motivy: Informování o vlivu hrůznosti války na lidskou psychiku)",
    "timeAndSpace": "Praha, 1937-1938 (Okupace Čech)",
    "composition": "Chronologická",
    "characters": [
      {
        "name": "Karel Kopfrkingl",
        "description": "Hodný člověk, zaměstnanec pražského krematoria, nekuřák, abstinent, citlivý člověk, pečlivý a starostlivý otec rodiny, který má pro každého pochopení. Je vzdělaný v hudbě i literatuře, používá nadnesené výrazy. Ženě říká Lakmé, něžná, nebeská, nadoblačná."
      },
      {
        "name": "Marie",
        "description": "Manželka, poloviční Židovka, tichá, nevýrazná, bojácná"
      },
      {
        "name": "Manželé Reinkovi",
        "description": "Přátelé"
      },
      {
        "name": "Willy",
        "description": "Přesvědčí pana Kopfrkingla, že Hitler je dobrý a Židé jsou nepřátelé, manipulátor, intrikář"
      }
    ],
    "plotSummary": [
      "„Příběh se odehrává v Praze na konci 30. let, tj.v době mnichovské kapitulace a okupace. Pan Kopfrkingl pracuje v krematoriu už dvacet let a jeho zaměstnání ho ovlivňuje i v jeho světovém názoru. Svou prací je ovlivněn natolik, že i při narozeninách své dcery vypráví, jak se spalují těla. Tiché krematorium pro něj znamená přesný řád života a smrti. Blízkými přáteli rodiny Koprfkinglů jsou manželé Reinkovi. S Willym bojoval pan Kopfrkingl v první světové válce, oba neměli rádi násilí. Po Willyho vstupu do Sudetoněmecké strany se jejich názory rozcházely, ale přáteli i nadále zůstali. Willy ho brzy přesvědčí, že Hitler je dobrý, protože pomohl Rakousku a pomůže i nám, že Židé jsou nepřátelé Říše, a že by si měl uvědomit svou německou krev a nebýt zbabělý, protože pouze stoprocentní lidé bojují. Milimu dává za vzor Hitlerjugend a box jako sport, který se líbí Vůdci. Pan Kopfrkingl si pod vlivem Willyho uvědomuje nejen svou německou krev, ale i to, že jeho žena je židovka, svého syna najednou vidí jako naprostého slabocha. Karel se velmi rychle přemění z člověka tolerantního, který nikdy neodsuzoval lidský původ a chování, na zarytého fašistu, člena SdP a později i NSDAP, který špehuje Židy a udává bývalé přátele. Z přesvědčení, že Židé jsou nebezpeční a špinaví, zabije svou ženu – oběsí ji v koupelně a nahlásí to jako sebevraždu. Brzy zjišťuje, že ani jeho děti mu nejsou dost dobré – jsou čtvrteční Židé a nevzali by je do německého gymnázia, proto svého syna umlátí kovovou tyčí a zatluče ho do rakve společně s mrtvým mužem a nechá ho proměnit v popel. Teprve po těchto činech se cítí dokonale šťastný. Díky svým „výkonům“ pro Říši je Kopfrkingl povýšen na ředitele krematoria, později je mu nabídnuta funkce experimentátora nových plynových žárovišť – plynových komor. Když se chystá zabít neboli „vysvobodit z utrpení“ svou dceru Zinu, zdá se mu, že ho navštíví tibetský velvyslanec, že je Budha, a že spasí svět. Poté je odveden „třemi anděly“ do sanitky, která ho odváží do blázince. Závěrečná scéna se odehrává v květnu 1945, kdy pan Kopfrkingl pozoruje zástupy lidí, vracejících se z koncentračních táborů v domnění, že také tyto ubohé spasil: „Šťastné lidstvo. Spasil jsem je. Jistě už nikdy nebude na světě pronásledování, nespravedlnost a utrpení, jistě už ne, ani koně… Pánové teď nastává ten nový řád.“ “"
    ],
    "languageAndStyle": [
      "Monology"
    ],
    "context": [
      "Autorovo zasazení:",
      "Další díla: Pan Theodor Mundstock, Ota Pavel"
    ]
  },
  {
    "id": "klub-rvacu",
    "title": "Klub rváčů",
    "author": "Chuck Palahniuk",
    "authorInfo": "Chuck Palahniuk, stále žije 20./21. století",
    "authorBio": "Minimalistický a syrový styl psaní, Pracoval jako mechanik a dobrovolník v hospici, Často používá šokující motivy",
    "period": "",
    "typeAndGenre": "Epika, Román (Krátký novela)",
    "theme": "Zobrazit životy nižší vrstvy společnosti (násilníků, drogově závislých), a především člověka trpícího schizofrenií. Kritika konzumní společnosti tehdejších USA. (Motivy: Schizofrenie, psychika, představy, mezilidské vztahy, smrt, odpor.)",
    "timeAndSpace": "USA 90 léta 20. století",
    "composition": "Retrospektivní",
    "characters": [],
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
      "Autorovo zasazení:"
    ]
  },
  {
    "id": "fetak",
    "title": "Feťák",
    "author": "William S. Burroughs",
    "authorInfo": "",
    "authorBio": "",
    "period": "",
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
    "period": "",
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
      "Alchymista je příběh chudého španělského chlapce Santiaga – pastýře, který se svým stádem ovcí putuje španělskou Andalousií a dvakrát po sobě se mu zdá tentýž sen o pohádkovém pokladu, skrytém kdesi u egyptských pyramid. Na základě zvláštního setkání se sálemským králem se rozhodne své stádo prodat a vydat se do Afriky k pyramidám přesně podle svého snu. Musí se rozhodnout mezi tím, na co si zvykl, a tím, co by rád měl…Pastýř začal větru závidět jeho svobodu a uvědomil si, že i on ji může mít. Nic mu nebrání, jen on sám. Ovce, kupcova dcera i andaluské pláně jsou jen stupně v jeho Osobním příběhu.",
      "Jenže těsně po svém příjezdu do cizí a neznámé země je okraden o všechny peníze. Nezbývá mu tedy nic jiného než sehnat si nějakou práci. Zkouší to u prodavače skla. Den co den u něj leští sklenice, až ho napadne, že by v nich mohli kolemjdoucím podávat osvěžující čaj. Nejen že by tím lidi přilákali, ale navíc by si lidé jistě všimli, jak krásně čaj ve skle vypadá a sklenáři by to pomohlo zvýšit obrat. Prodavač uposlechne Santiagovy rady a zanedlouho se jeho krámek stane vyhlášeným. Santiago navíc rychleji získává peníze potřebné k návratu do Španělska a ke koupi stáda ovcí. Nakonec však mění své rozhodnutí a jde dál za svým snem. Kupuje si velblouda a přidává se ke karavaně mířící k pyramidám. Cestou se seznamuje s životem pouště a se znameními, které duny písku člověku poskytují, pokud se on dobře dívá. Také poznává Angličana, který putuje do pouštní oázy neboť se dozvěděl o velmi starém Alchymistovi, který tam žije a který by mu mohl prozradit tajemství o přeměně železa ve zlato – cílové metě všech alchymistů. Při cestě však vypukne válka mezi pouštními kmeny a karavana se musí po dobu jejího trvání uchýlit do bezpečí oázy, která má statut neutrálního území. Santiago zde potkává arabskou dívku Fátimu, do které se zamiluje a ona jeho lásku opětuje.",
      "Čas plyne, boje neustávají a Santiago, kromě čtvrthodiny denně, kterou tráví s Fátimou, nemá co na práci. Začne se více věnovat dění v poušti, studuje její chod a život. Přitom si jednou všimne zvláštního letu dvou krahujců. Náhle se mu v jediné chvilince objeví před očima obraz napadené oázy. Uvědomuje si, že toto znamení nemusí být pravdou, ale přesto sdělí svou vidinu kmenovým vůdcům oázy. Oni jako muži pouště jsou zvyklí sledovat její znamení, jen jim není jasné, proč by je měl vidět také neznámý cizinec. Navíc v oázách se kmeny navzájem nenapadají. Nakonec se rozhodnou údajnému nebezpečí čelit, avšak v případě, že jejich zbraně nepromluví, přijde o život sám Santiago….Kráčel tiše. Ničeho nelitoval. Zemře-li zítra, bude to proto, že Bůh nechce budoucnost změnit. Zemře však až poté, co se přeplavil přes průliv, co pracoval ve sklenářství, poznal mlčení pouště a oči Fátimy. Od té doby, co odešel z domova, prožívá naplno každičký den. Zemře-li zítra, nic už se nezmění na tom, že jeho oči viděly mnohem víc než oči jiných pastýřů, a Santiago na to byl pyšný…",
      "Oáza je ale opravdu napadena a díky připravenosti bojovníků zachráněna. Těsně po bitvě se chlapci zjevuje impozantní Arab…Na koni seděl černě oděný jezdec se sokolem na rameni. Na hlavě měl turban a celý obličej mu halil šátek. Vypadal jako posel z pouště, ale síla jeho osobnosti předčila vše, co kdy Santiago zažil…a on se tak seznamuje se samotným Alchymistou. Ten mu nabízí svůj doprovod až k pyramidám navzdory zuřícím bojům. Cestou ho učí, jak naslouchat svému srdci či jak správně číst znamení, která člověku vesmír ukazuje, aby došel až k naplnění svých snů…když něco chceš, celý Vesmír se spojí, abys své přání uskutečnil… Jejich pouť je však přerušena bojujícím kmenem, který je zajímá jako vyzvědače. Alchymista se jim snaží situaci vysvětlit, a přitom jim sdělí, že Santiago se umí proměnit ve vítr. Bojovníci jsou překvapeni a zároveň ochotni je propustit, pokud jim přeměnu předvedou. Santiago je zděšen – on se přeci ve vítr proměnit neumí. Celý den medituje v pouštní samotě. Večer před shromážděným kmenem prosí o pomoc poušť, vítr i slunce. Zvedá se obrovská bouře, která celé okolí zahalí. V momentu, kdy se vítr utiší, Santiago stojí na druhém konci tábora. Oba tedy mohou pokračovat dále. Těsně před pyramidami Alchymista hocha opouští a ten jde sám až na místo skrytého pokladu. Marně však celou noc kope. Právě když se chtěl dát znovu do kopání přepadnou ho tři Arabové a chtějí po něm zlato. Na pokraji svých sil jim Santiago poví o svém snu a oni ho nechají, protože jednomu z nich se právě na tomto místě zdál dvakrát stejný sen o pokladu, zakopaném ve Španělsku…Santiago namáhavě vstal a ještě jednou pohlédl k pyramidám. Pyramidy se na něho usmály a on se srdcem plným štěstí jim ten úsměv oplatil. Našel poklad, protože Santiago pochopí, že poklad nalezne tedy doma, vyzvedne si u mnicha kus zlata na cestu, doma nalezne v kostelíku poklad, desátek odevzdá cikánce a vrátí se do oázy pro svou Fátimu."
    ],
    "languageAndStyle": [
      "Dialogy, monology, nepřímá řeč, přímá řeč"
    ],
    "context": [
      "Autorovo zasazení:",
      "Další díla: Poutník, J. K. Rowling"
    ]
  }
];
