# Ferdigpakket kode i kommersielle prosjekter

I 2018 tok "left shark" internett med storm. Fenomenet varte en ukes tid før den havnet i glemmeboka. To år før, i mars 2016, [knakk "left-pad" internett](https://blog.npmjs.org/post/141577284765/kik-left-pad-and-npm.html). Nå 5 år senere, hvor mange av husker denne hendeles? Lærte vi noe av den?

"left-pad" var et mye brukt mikrobibliotek for å sørge for at en streng var et gitt antall tegn lagt ved å legge til tegn i starten av strengen. Måten "left-pad" brak internett på, var ved at biblioteket som mange milioner brukte, deriblandt Facebook og react, ble slettet pga en konflikt mellom skaperen av biblioteket og npm. Dette førte til at bygg over hele verden brakk ettersom de ikke kunne få ta i denne pakken, og det tok tid for avhengigheter å løse dette problemet. Per i dag er "left-pad" i ferd med å bli avskrevet, men har fremdeles 3,5 millioner ukentlige nedlastninger. Funksjonen for å legge til polstring på starten av en streng er nå blitt en del av JavaScript.

"left-pad" ble en vekker for mange og det kom mange gode og nyttige diskusjoner ut av hendelsen. 5 år senere prøver jeg fremdeles å tenke på hendelsen når jeg skal ta inn avhengigheter i prosjektene jeg jobber på. Vi skal derfor se på når det gir mening å introdusere nye avhengigheter. Hvilke avhengigheter vi ønsker i prosjektene våre. Og hvordan ta avhengigheter på prosjektet.


takk for det du lager for oss. men tenk på at det ofte er snkeltpersoner
docz burnout

Artikkelen tar for seg JavaScript og NPM, men tankene i artikkelen gjelder uavhangig av språk og miljø.

## Når skal vi bruke biblioteker og rammeverk?

Alle prosjekter kan ha nytte av å ta ibruk biblioteker og rammeverk. Spørsmålet er om gir det prosjektet mer å ta ibruk en ny avhengighet enn det koster?

Brukt derfor gjerne tid på starten av et prosjekt. Eller når dere først blir oppmerksomme på det til å tenke igjennom og diskuter når dere skal ta inn nye avhengigheter. Opprett gjerne en seksjon i README eller en egen fil for å beskrive bruken av avhengigheter på prosjektet. Hukommelsen vår er dårligere en vi ønsker. Ting vi besluttet for 2 uker siden kunne ofte vært besluttet av andre. Det kan godt være at det er andre som kommer inn på prosjektet etter at besluttninger er gjort som også trenger å vite hva prosjektet har besluttet.

_Har vi alt løst dette problemet i prosjektet?_, er det neste spørsmålet en bør stille seg selv. Hvem har ikke vært på et prosjekt med 2 PDF biblioteker eller 2 nesten identiske implementasjoner av den samme koden, som egentlig skulle vært den samme koden? Her får en svaret raskest om en spør teamet en jobber med. 

_Hvor stort er problemet?_, eller _Hvor lang tid tar det å løse problemet selv?_ Ofte er problemer vi skal løse større enn vi tenker. Stack Overflow og internett generelt inneholder også utallige forslag til løsninger en kan basere seg på. Hvis det du skal løse er et problem du synes er spennende og du virkelig har lyst til å løse det selv, kan det gi mening å lage løsningen selv. [Paul Graham skriver i en artikkel om hva som motiverer oss på jobb og argumenterer at det gir mening å løse ting selv fra tid til annen hvis det gir økt eierskap og motivasjon i prosjektet](http://www.paulgraham.com/own.html). En time er tross alt ikke en time i programvareutvikling.

_Vil det koste oss mer å løse dette selv, eller koster det mer å prøve å ta ibruk andres kode?_ Det er lett å tenke at jo mer kode en skriver selv desto mer kode er det å vedlikeholde, og at det derfor er bedre å skrive mindre selv og bruke kode andre har skrevet. I noen tilfeller er dette definitivt sant. Biblioteker som har med kart, tid og datoer er etter min mening uunværlige. Det er så mange spesialtilfeller at det vil koste mye å løse alle selv. Men for andre problemer vil arbeidet med å oppgradere pakker, passer på at det ikke er store sårbarheter i avhengighetene en bruker og annet arbeide knyttet til det å vedlikeholde bruk avhengigheter for spise opp mye tid.  


_Vil det være nyttig for oss å ha kontroll på denne koden?_ Enkelte deler av koden i et prosjekt er så viktige for et prosjekt at det gir mening å utvikle den selv. 

_Passer denne koden inn i prosjektet?_ Kodestilen på prosjektet er viktig å tenke på. Hvis alt i prosjeket er skrevet på en synkron måte, vil det å ta inn et usynkront bibliotek rote til flyte i prosjektet. Tenk derfor igjennom om måten en kommunuserer med biblioteket passer med kodestilen i prosjektet eller om det er lett å pakke det inn så det gjør det.



## Hvilke biblioteker og rammeverk vil vi bruke?
Vi har altså kommet frem til at hva enn det er vi skal løse, løses best ved hjelp av en avhengighet. Da er det viktig at vi setter oss kriterier for hvilke avhengigheter vi ønsker å bruke. La oss ser på noen av faktorene det vil være lurt å tenke igjennom.

_Hvor mange bruker den?_ Den enkleste metrikken å se på er hvor mange som bruker et bibliotek. Mange avhengigheter og nedlastninger føles sikkert. Andre bruker det så da er det har det en hvis kvalitet. Denne faktoren er i seg selv ikke nok. "left-pad" har 3,5 millioner ukentlige nedlastninger. Dette er en pakke som skal fases ut. Mange nedlastninger tyder derfor på mange prosjekter som ikke har oversikt over avhengighetene sine og er reaktive fremfor proaktive. Lavt antall ukentlige nedlastninger betyr ikke at pakken er dårlig. Men hvis en har mulighet til å bruke en mye brukt pakke gjør en gjerne det. Utforsk heller i private prosjekter som ikke er like viktige som de prosjektene du sitter på på jobb.

_Når ble det oppdatert sist?_ mange nedlastninger betyr lite om pakken ikke blir vedlikeholdt. Noen pakker endrer seg lite over tid, men det er få pakker som ikke kan forbedres ved gjevne mellomrom. Hvis pakken du skal ta inn er veldig retta mot rammeverk eller noe annet som oppdateres hyppig og det er lenge siden pakken ble oppdatert er det et tegn på at pakken ikke vedlikeholdes så godt som det vi ønsker av pakker vi bruker i prosjektene våre. 


_Er pakken i beta?_ Se på versjonnummeret. Er pakken i alpha, beta eller er den publisert? Hvis pakken ikke er publisert er det større sansynlighet for store endringer. Det er heller ingen garanti for at pakken kommer til å komme til et sted hvor den er produksjonsklar.

_Er det mange issues?_ Det lønner seg å se på antall og typen issues pakken har. Er det merkelige feil brukeren har klart å få i spesialtilfeller eller i deler av pakken du ikke kommer til å bruke? Eller er det issues som er gamle og som treffer ditt bruksområde? Da kan det være det ser ut som pakken skal løse problemet ditt, men at det ikke er en del av det som blir prioritert og det vil koste mye å få det til å fungere. 

_Har pakken mange avhangigheter?_ På samme måte som vi prøver å være kritiske til hvilke pakker vi tar ibruk, er det lurt å se på om pakken er kritisk til hvilke avhengigheter de tar inn. Pakkene vi tar ibruk er utsatt for de samme problemene vi prøver å unngå ved å være kritiske til hvilke avhengigheter vi tar inn. 

_Hvilken lisens er den under?_ Lisensen pakken har påvirker hva du har lov og ikke lov til å gjøre med den. Den kan også påvirke hva du må gjøre med ditt prosjekt. Enkelte lisenser sier at en kun kan bruke en pakke om deler kildekoden til hele prosjektet som bruker pakken. De fleste pakker har lisenser det er greit å forholde seg til, men det er viktig å være klar over å tenke igjennom.

_Er det flere vedlikeholdere?_ Bussfaktoren er en stor faktor på alle prosjekter. Den kan sies å være større i prosjekter med åpen kildekode. Hvis noen på prosjektet du sitter på slutter så har du fremdeles tilgang på koden. Hvis en som har en pakke slutter å jobbe på den blir koden låst og det er mer jobb å få kontroll over koden på en god måte. [Stress og utbrenthet er også vanlig i åpen kildekode miljøene](https://www.semanticscholar.org/paper/Stress-and-Burnout-in-Open-Source%3A-Toward-Finding%2C-Raman-Cao/0060fff9aa22cb35c81d8c071580712769e73f9b). Hvis det kun er en som vet hvordan koden fungerer og vedlikeholder den, så er prosjektet en gjør seg avhengig av sårbart. 

### Eksempel
Jeg skulle nylig legge til funksjonaliteten for å lese inn verdier ved hjelp av en QR kode i en app jeg jobbet på. I jakten på et bibliotek jeg kunne bruke var det flere røde flagg som dukket opp og det tok mye lenger tid å undersøke de forskjellige rammeverkene enn jeg hadde sett for meg. La oss se på at par av alternativene og fordelene og ulempene med de ut fra refleksjonene over.

TODO: skriv eksemplene som historie hvor jeg går igjennom hva jeg gjør og tenker og oppdater beskrivelse slik at den stemmer verens med rekkefølge og kontekst

#### react-qr-bardcode-scanner
![alt text](./react-qr-bardcode-scanner.png)
Dette biblioteket har få avhengigheter. Få som bruker det og er bare noen måneder gammelt. Det ble oppdatert for 2 måneder siden og det er en som bidrar til det. Det bygger på et av de mest brukte bibliotekene for QR koder som er godt vedlikehold. Dette virker som et lovende alternativ. Det er lite og virker enkelt. Men det er et par known issues og prosjektet er tett knyttet til en enkelt person. Det er også lite brukt, så det kan være vi finner mange problemer om vi prøver å ta det i bruk.

#### react-qr-reader
![alt text](./react-qr-reader.png)
Dette biblioteket er mye brukt. Men det er lenge siden det ble oppdatert og det er mange issues. Det ser ikke ut som det er vedlikeholdt. Så hvis issuene som er beskrevet er dealbreakers så er ikke dette et godt alternativ.

#### modern-react-qr-reader
![alt text](./modern-react-qr-reader.png)
Jeg passer på å gå inn på resposotory til prosjektet. Jeg vil se hvor gammelt det er. Det er fra 2018, har 2 stykk som har bidrat til prosjektet, og siste versjon kom for 3 måneder siden. Lisensen er MIT så det er bra. De har en liste med kjente utfordringer. Den viser til react-qr-reader og peker til at det biblioteket ikke er vedlikeholdt. Det er få som bruker det, men siden det startet som en fork fra et bibliotek som er mye brukt ser jeg på det som et lovende alternativ.

#### react-qr-scanner
![alt text](./react-qr-scanner.png)
Dette er også en fork av react-qr-reader for å prøve å løse noen av problemene. Den er mer brukt enn de andre forkene. Men er i alpha. Ut fra releaseloggen ser det ut til å bli oppdatert i rykk og napp. Det virker ikke som et lovene alternativ.

## Hvordan tar vi ibruk biblioteker og rammeverk?

- vær flink til å legge til ting som dep / devdep
- skal vi ha en kopi av de pakkene vi bruker slik at vi ikke er sårbare om globale tjenester går ned?
- tenk igjennom hvilke lisenser på åpenkildekode prosjekter dere kan bruke.
- For videre lesning se hvordan bruke lisensiert arbeide riktig 
- pakke inn rammeverk slik at de lett kan byttes ut
- PR på issues