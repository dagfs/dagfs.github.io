# Ferdigpakket kode i kommersielle prosjekter

<img src="
https://source.unsplash.com/KV1Co7gZ_VU/700x350" />
Bilde av [Inesa Cebanu](https://unsplash.com/photos/KV1Co7gZ_VU) på [Unsplash](https://unsplash.com/)

I 2018 tok "left shark" internett med storm. Fenomenet varte en ukes tid før den havnet i glemmeboka. To år før, i mars 2016, [knakk "left-pad" internett](https://blog.npmjs.org/post/141577284765/kik-left-pad-and-npm.html). Nå 5 år senere, hvor mange av husker denne hendelsen? Lærte vi noe av den? Eller har den som med "left shark", gått i glemmeboka?

"left-pad" var et mye brukt mikrobibliotek som sørget for at en streng var et gitt antall tegn lagt ved å legge til tegn i starten av strengen. Måten "left-pad" brak internett på, var ved at biblioteket som mange millioner brukte, deriblant Facebook og react, ble slettet pga en konflikt mellom skaperen av biblioteket og npm. Dette førte til at bygg over hele verden brakk ettersom de ikke kunne få ta i denne pakken, og det tok tid for avhengigheter å løse dette problemet. Per i dag er "left-pad" i ferd med å bli avskrevet, men har fremdeles 3,5 millioner ukentlige nedlastinger. Funksjonen for å legge til polstring på starten av en streng er nå blitt en del av JavaScript.

<img src="
https://source.unsplash.com/Vqg809B-SrE/700x350?fit=crop&crop=edges" />
Bilde av [Jackson Simmer](https://unsplash.com/photos/Vqg809B-SrE) på [Unsplash](https://unsplash.com/)

"left-pad" ble en vekker for mange og det kom mange gode og nyttige diskusjoner ut av hendelsen. 5 år senere påvirker hendelsen fremdeles hvilke avhengigheter jeg bruker i prosjektene jeg jobber på ved at jeg har spørsmål jeg reflekterer over.

Spørsmålene er:

- Gir det mening å introdusere en ny avhengighet?
- Hvilke avhengigheter ønsker vi i prosjektene våre?
- Hvordan skal vi ta avhengigheten i bruk på prosjektet.

Artikkelen tar for seg JavaScript og NPM, men tankene i artikkelen gjelder uavhengig av språk og miljø.

## Når skal vi bruke biblioteker og rammeverk?

<img src="
https://images.unsplash.com/photo-1591588582259-e675bd2e6088?fit=crop&fm=jpg&h=350&w=700&crop=faces" />
Bilde av [Mark Potterton](https://unsplash.com/photos/sNVkn3507Oo) på [Unsplash](https://unsplash.com/)

Det finnes løsninger for de fleste problemer en skal løse. Spørsmålet er om gir det prosjektet mer å ta i bruk en ny avhengighet enn det koster. Det lønner seg derfor å bruke tid på starten av et prosjekt til å diskutere hva som er riktig for prosjektet.

Hukommelsen vår er dårligere en vi ønsker. Ting vi besluttet for 2 uker siden kunne ofte vært besluttet av andre. Det kan godt være at det er andre som kommer inn på prosjektet etter at besluttninger er gjort som også trenger å vite hva prosjektet har besluttet og ikke minst hvorfor. Dokumenter derfor de valgene dere gjør tett knyttet til den dokumentasjonen dere alt har i prosjektet. Hvis en ikke har en praksis for å dokumentere slike beslutninger på prosjektet er det verdt å ta en titt på Architecture Decision Records(ADR).

**Har vi alt løst dette problemet i prosjektet?** Er det neste spørsmålet en bør stille seg selv. Hvem har ikke vært på et prosjekt med 2 PDF biblioteker? Her får en svaret raskest om en spør noen på prosjektet. Hvis en bruker ADR kan det også hjelpe til med å svare på spørsmålet ved fravær av teammedlemmer.

**Hvor lang tid tar det å løse problemet selv?** Når en vet lite om et problem er det vanskelig å vite hvor lang tid det vil ta å løse det selv. Hvis det du skal løse er et problem du synes er spennende og du virkelig har lyst til å løse det selv, kan det gi mening å lage løsningen selv. [Paul Graham skriver i en artikkel om hva som motiverer oss på jobb og argumenterer at det gir mening å løse ting selv fra tid til annen hvis det gir økt eierskap og motivasjon i prosjektet](http://www.paulgraham.com/own.html). En time er tross alt ikke en time i programvareutvikling.

**Vil det koste oss mer å løse dette selv, eller koster det mer å prøve å ta ibruk andres kode?** Det er lett å tenke at jo mer kode en skriver selv desto mer kode er det å vedlikeholde, og at det derfor er bedre å skrive mindre selv og bruke kode andre har skrevet. I noen tilfeller er dette definitivt sant. Biblioteker som har med kart, tid og datoer er etter min mening uunværlige. Det er så mange spesialtilfeller at det vil koste mye å løse alle selv. Men for andre problemer vil arbeidet med å oppgradere pakker, passe på at det ikke er store sårbarheter i og vedlikeholde av bruk avhengigheter koste mer på sikt enn å løse problemet selv.

**Vil det være nyttig for oss å ha kontroll på denne koden?** Enkelte deler av koden i et prosjekt er så viktige for et prosjekt at det gir mening å utvikle den selv.

<img src="
https://images.unsplash.com/photo-1516659257916-7be846591235?fit=crop&fm=jpg&h=350&w=700&crop=faces" />
Bilde av [Rupert Britton](https://unsplash.com/photos/l37N7a1lL6w) på [Unsplash](https://unsplash.com/)

**Passer denne koden inn i prosjektet?** Kodestilen på prosjektet er viktig å tenke på. Hvis alt i prosjektet er skrevet på en synkron måte, vil det å ta inn et parrallelt bibliotek rote til flyte i prosjektet. Tenk derfor gjennom om måten en kommuniserer med biblioteket passer med kodestilen i prosjektet eller om det er lett å pakke det inn så det gjør det.

## Hvilke avhengigheter vil vi bruke?

La oss se på faktorene vi bør se på når vi skal velge hvilke avhengigheter vi ønsker å bruke.

<img src="
https://source.unsplash.com/HZrYYi6Orgg/700x350?fit=crop&crop=edges" />
Bilde av [Alexander Schimmeck](https://unsplash.com/photos/HZrYYi6Orgg) på [Unsplash](https://unsplash.com/)

**Hvor mange bruker den?** Den enkleste metrikken å se på er hvor mange som bruker et bibliotek. Mange avhengigheter og nedlastinger føles sikkert. Andre bruker det så da er det har det en hvis kvalitet. Denne faktoren er i seg selv ikke nok. "left-pad" har fremdeles 3,5 millioner ukentlige nedlastinger. Dette er en pakke som skal fases ut. Mange nedlastinger tyder derfor på mange prosjekter som ikke har oversikt over avhengighetene sine og er reaktive fremfor proaktive. Tilsvarende betyr ikke lavt antall ukentlige nedlastinger at en pakke er dårlig.

**Når ble det oppdatert sist?** Mange nedlastinger sier lite om en pakke blir vedlikeholdt. Noen pakker endrer seg lite over tid, men det er få pakker som ikke kan forbedres ved jevne mellomrom. Hvis pakken du skal ta inn er veldig retta mot et rammeverk eller noe annet som oppdateres hyppig og det er lenge siden pakken ble oppdatert er det et tegn på at pakken ikke vedlikeholdes tilstrekkelig.

**Er pakken i beta?** Se på versjonnummeret. Er pakken i alpha, beta eller er den publisert? Hvis pakken ikke er publisert er det større sannsynlighet for store endringer. Det er heller ingen garanti for at pakken kommer til å komme til et sted hvor den er produksjonsklar.

**Er det mange issues?** Det lønner seg å se på antall og typen issues pakken har. Er det issues som er gamle og som treffer ditt bruksområde? Virker de delene av pakken prosjektet trenger ustabil? Da kan det være lurt å gå for en annen løsning.

**Har pakken mange avhengighet?** På samme måte som vi prøver å være kritiske til hvilke pakker vi tar i bruk, er det lurt å se på om pakken er kritisk til hvilke avhengigheter de tar inn. Pakkene vi tar i bruk er utsatt for de samme problemene vi prøver å unngå ved å være kritiske til hvilke avhengigheter vi tar inn. Tenk derfor gjennom om du har lyst til å ta inn den nye pakken som har 16 store avhengigheter som igjen har 109 avhengigheter, eller som du skal skrive de 100-200 linjene med kode som problemet krever.

**Hvilken lisens er den under?** Lisensen pakken har påvirker hva du har lov og ikke lov til å gjøre med den. Den kan også påvirke hva du må gjøre med ditt prosjekt. Enkelte lisenser sier at en kun kan bruke en pakke om en deler kildekoden til hele prosjektet som bruker pakken. De fleste pakker har lisenser det er greit å forholde seg til, men det er viktig å være klar over å tenke igjennom.

<img src="
https://images.unsplash.com/photo-1503643766889-957dc3096721?fit=crop&fm=jpg&h=350&w=700&fp-y=.9" />
Bilde av [Casey Horner](https://unsplash.com/photos/Hv6-X3RGq6Q) på [Unsplash](https://unsplash.com/)

**Er det flere vedlikeholdere?** Lotterifaktoren er en stor faktor på alle prosjekter. Den kan sies å være større i prosjekter med åpen kildekode. Hvis noen på prosjektet du sitter på slutter så har du fremdeles tilgang på koden. Hvis en som har en pakke slutter å jobbe på den blir koden låst og det er mer jobb å få kontroll over koden på en god måte. [Stress og utbrenthet er også vanlig i åpen kildekode miljøene](https://www.semanticscholar.org/paper/Stress-and-Burnout-in-Open-Source%3A-Toward-Finding%2C-Raman-Cao/0060fff9aa22cb35c81d8c071580712769e73f9b). Hvis det kun er en som vet hvordan koden fungerer og vedlikeholder den, så er prosjektet en gjør seg avhengig av sårbart.

### Eksempel

Jeg skulle nylig legge til funksjonaliteten for å lese inn verdier ved hjelp av en QR kode i en app jeg jobbet på. I jakten på et bibliotek jeg kunne bruke var det flere røde flagg som dukket opp og det tok lenger tid å undersøke de forskjellige rammeverkene enn jeg hadde sett for meg. La oss se på at par av alternativene og fordelene og ulempene med de ut fra refleksjonene over.

#### react-qr-bardcode-scanner

![alt text](./react-qr-bardcode-scanner.png)
Dette er et veldig ungt bibliotek som hadde mange oppdateringer i starten, men så ikke blitt gjort noe med på et par måneder. Det er få som bruker det så en har ikke noen sikkerhet der. Biblioteket har få avhengigheter til andre prosjekter og ser ut til å bygge på mye brukte biblioteker slik at det har et solid fundament. Jeg anser liten filstørrelse og filer som et godt tegn. Så det virker lovende, men er ungt og knyttet til en enkelt person.

#### react-qr-reader

![alt text](./react-qr-reader.png)
Dette biblioteket har vært en stund. Det er mye brukt. Men det ser ikke ut til å ha være vedlikeholdt de siste årene. Og det er en rekke issues som burde vært rettet på. Det er uheldig at det ikke er vedlikehold da det ellers ville vært et godt alternativ. En bør se over issuene til prosjektet for å se om det er noe der som på kort og lang sikt kan gjøre at biblioteket ikke vil passe for prosjektet.

#### modern-react-qr-reader

![alt text](./modern-react-qr-reader.png)
Dette prosjektet er noen år gammelt. Baserer seg på `react-qr-reader`, siden det biblioteket ikke lenger vedlikeholds. Prosjektet blir vedlikeholdt og det er to stykker som bidrar til det. Så selv om det har få brukere ville jeg foretrekke å bruke dette biblioteket over `react-qr-reader`. De har en liste med issues en kan se på for å se om det er noe der som gjør at biblioteket ikke passer for prosjektet.

#### react-qr-scanner

![alt text](./react-qr-scanner.png)
Dette er også en fork av `react-qr-reader` for å prøve å løse noen av problemene. Den er mer brukt enn de andre forkene. Men er i alpha. Ut fra releaseloggen ser det ut til å bli oppdatert i rykk og napp. Det virker ikke som et lovene alternativ. Men har flere brukere enn eksempelet over til tross for å være basert på det samme. Når en først har valgt et bibliotek skal det gjerne litt til før en bytter så det løser nok noen av problemene i originalen.

## Hvordan tar vi i bruk biblioteker og rammeverk?

Vi har nå kommer frem til et bibliotek vi ønsker å bruke i prosjektet. Vi er nesten i mål. Men det er litt mer vi bør tenke igjennom før vi avslutter arbeidet.

Vær flink til å legge til pakkene riktig. Skal dette være en dependency? Skal det være en dev-dependency?

Hvor stort og kritisk er det prosjektet du jobber på? Har det en egen pakkebrønn dere bruker hvor du må legge pakken til? Bør dere eventuelt skaffe en bakkebrønn slik at dere har bedre kontroll over avhengighetene og ikke blir påvirket hvis eksterne systemet går ned?

Tenk igjennom hvilke lisenser bibliotekene er lisensiert under. Noen lisenser krever at de som bruker arbeidet også legger ut prosjektets kildekode under en åpen kilde lisens. Det er fort noe en ikke kan akseptere i kommersielle prosjekter. Mange lisenser sier også at en skal gi anerkjennelse til biblioteket fordi det brukes i prosjektet.

<img src="
https://images.unsplash.com/photo-1511885912508-36118d773e55?fit=crop&fm=jpg&h=350&w=700&fp-y=.93" />
Bilde av [Element5 Digital](https://unsplash.com/photos/HnyPuEgW0O8) på [Unsplash](https://unsplash.com/)

Prøv å pakk biblioteket inn i egne komponenter slik at hvis dere må bytte ut rammeverket eller skrive deres egne løsninger på problemet vil det være lett å gjøre uten at det blir en stor kostnad i å endre applikasjonen de stedene biblioteket brukes.

Bidra tilbake til prosjektet. Rapporter problemer og opprett issues. Hvis det er et bibliotek dere bruker mye som er nyttig, vurder hvordan dere kan bidra til det. Kan prosjektet gi de en sum penger? Kan dere bidra ved å bruke noen timer på å løse issues som påvirker dere? Open Source skal være gi og ta. Vi har også et ansvar for å gi og for å gjøre hverdagen til de som gir oss disse tingene gratis bedre. Det er for vårt felles beste.

<img src="
https://images.unsplash.com/photo-1556742031-c6961e8560b0?fit=crop&fm=jpg&h=350&w=700&fp-y=.45" />
Bilde av [Clay Banks](https://unsplash.com/photos/tgquMvhNLc4) på [Unsplash](https://unsplash.com/)

Og ikke minst, hvis biblioteket / verktøyet dere bruker på prosjektet har en betalt versjon. Så er det sannsynligvis versjonen dere bør bruke på prosjektet. De fleste verktøyene vi bruker er vel verdt de pengene ved at de sparer oss tid og hjelper oss med å lage bedre tjenester. Pengene brukt går tilbake til prosjektet ved at verktøyene holdes i live, videreutvikles og blir bedre. 150 kroner i måneden per person er en liten sum for noe som sparer prosjektet for flere timer per person i måneden.

Jeg håper denne artikkelen gir deg noen tanker rundt bruk av avhengigheter i et prosjekt. For det er som med avhengigheter som med [feriekiloene, de er lette å legge til, men kan følge deg livet ut hvis du ikke handler raskt.](https://www.nettavisen.no/livsstil/fedmeekspert-advarer-mot-bagatellisering-av-feriekiloene-i-lopet-av-noen-fa-uker-bor-du-tilbake-til-gammel-vekt/s/12-95-3424008424)

Dette er mine tanker rundt det å bruke biblioteker i kommersielle prosjekter. Jeg gleder meg til å se hva du er enig med meg i, hva du er uenig i og hva som burde vært nevnt, men som jeg ikke vet om!

TODO

architecture-decision-records

> Opprett gjerne en seksjon i README eller en egen fil for å beskrive bruken av avhengigheter på prosjektet.
> Kjenner du til architecture decision records (ADR)? Lurer på om det kunne vært en fin plass å dokumentere noe sånt! Vi har ikke gjort det selv, men vi bruker ADRer til en del andre ting

simple made easy
https://www.youtube.com/watch?v=oytL881p-nQ
det er lett å ta inn en avhengighet. Og veldig vanskelig å få den bort
Lett å legge til og vanskelig å fjerne

https://www.bleepingcomputer.com/news/security/dev-corrupts-npm-libs-colors-and-faker-breaking-thousands-of-apps/