
# Hva er god kodekvalitet i frontend?

[Kodekvalitet måles som alle vet i Wpm(WTF per Minute)](https://commadot.com/wtf-per-minute/). Så på samme måte som det å lage en skulptur handler om å fjerne det som er ikke er en del av den kan en argumentere for at god kodekvalitet handler om å fjerne det som er dårlig kode. Det er altså enklere å snakke om hva som er dårlig kode, og hva en bør unngå enn hva som er god kode. Hvis en skal oppsumere god kode i et ord er ordet "elegant". Motsettningen er "hack". Med elegant mener jeg at koden løser problemet på en klar og tydelig måte som er lett å ta innover seg uten overraskelser. Hack på den andre siden er ting som [Fast Inverse Square Root](https://medium.com/hard-mode/the-legendary-fast-inverse-square-root-e51fee3b49d9) som krever at en bryter konteksten en er i for å sette seg inn i i en tankegang som er like fremmed som et ukjent språk.

Formålet med god kode er at det skal være lett å gjøre endringer. Vi jobber iterativt og for at vi skal kunne oppretholde flyt trenger vi å kunne gjøre endringer enkelt.

Boken Clean Code har ekstreme, men og noen gode meninger om hva god kode er. Boken Pragmatic programmer anbefalses også. 

Ren kode har løse kobliner og samhold mellom konseptene i modulene.


## God kodekvalitet

For god kodekvalitet hander mye om å bli enige. Her kommer ting som linting, formatering, kodestil inn. Bli enige i teamet og formaliser det i regler som automatisk overholdes av editoren.

### Ren kode er lett å lese

Det betyr at en bruker gode menginsfulle navn og klart språk. Prosjektet bør utarbeide en ordbok over domene og bruke disse ordene konsekvent. Det bør være de samme ordene og det samme språket som sluttbrukerne av systemet forholder seg til.

For at kode skal være lett å lese bør innhold i funksjoner være på samme abstraksjonsnivå. Har en kode som ser slikt ut:

```ts
const e = erAktiv(enhet) && enhet.person.some(p => p.age > 30);
```

Så har en bommet på en del ting.

Hva betyr `e`? 

Vider er den første delen av uttrykket fornuft, mens del 2 bommer med å bli veldig spesefik i en kontekst hvor en ser mer overordnet på problemet. Språket blir plutselig engelsk. Renere kode vil altså være:

```ts

const harMyndigEier = (enhet: Enhet) => enhet.eiere.some(p => p.alder > 18);

const erAktivEnhetMedMyndigEier = erAktiv(enhet) && harMyndigEier(enhet);
```

Se? Mye lettere å lese. Og mye lettere å tenke neste gang en kommer hit.


### Funksjoner 

Det fine med å bruke slike klare tydlige navn og hjelpefunksjoner er at en kan skrive koden på et høyere nivå først for så å grave seg ned i detaljene på hvordan en skal løse funksjonene som `harMyndigEier` senere. En bryter rett og slett ned oppgave mens en skriver sudokode som blir til kode.

Funksjoner skal ta inn bestemt data, returnere forutsigbar data, ikke ha sideeffekter og kun gjøre en ting. Funksjoner skal være korte, helst mindre enn 20 linjer med kode. med færrest mulige input.


### Kommentarer

Koden skal være så lett å lese at en ikke har behov for kommentarer. Kommentarer brukes for å beskrive WTFs en ikke klarer å unngå. Trenger du å skrive en kommentar forklar hvorfor koden måtte skrives slik den måtte, og hva koden gjør. Kommentarer er en reddningsbøye til den neste som kommer over koden.

Kommentarer du skriver kommer til å overleve koden den kommenterer. Folk endrer kode og glemmer å endre kommentaren så det bør være mulig å se om kommentarer er utdatert basert på koden.


### Unngå duplisert kode

Prøv å unngå duplisert kode. Det gir ulik oppførsel hvor en forventer lik oppførsel. Martin Fowler argumenterer at 3 gangen en trenger kode bør en rafaktorere og gjenbruke fremfor å duplisere koden.

Er en god kan fort se om kode en skriver vil være nyttig andre steder i systemet og en kan starte å generalisere koden slik at den kan gjenbrukes.


### Pass på at funksjonen av kode faktisk er lik

Ulempen med å generalisere kode er når en slå sammen like konsepter som burde ha vært holdt adskilt. Ofte kan ting se like ut, men utvikle seg forskjellig og en ender da fort opp med stygg kode siden koden prøver å løse flere forskjellige ting på en gang.

Boka Domain Driven Design snakker masse om dette.

### Maks 120 tegn per linje

Det gjør livet lettere. En kan ha flere filer åpne ved sidenavhverandre. Github er også mer behagelig å bruke.


### Feilhåndtering

Tenk over hvordan det du lager feiler og hvordan det kommuniseres til brukere.

### Ren kode er testbar

En måte å tolke TDD er at koden er skrevet for å være testbar. Jeg mener dette er en god middleground. Det å skulle teste all kode kan bli mye, men det bør være enkelt å skrive tester for kode en trenger å teste. Jeg har ofte gitt opp å teste kode som feiler da det å legge til rette for å teste koden ville være mange timers arbeid da koden er såppas intrikat.


### Vær oppmerksom på avhengigheter

Vær oppmerksom på hvilke avhengigheter du drar inn. Når du tar inn en avhengighet legges dets tekniske gjeld til det du har. En må oppdatere og følge opp avhengighetene en tar inn. Bruker en lite av en avhengighet kan det være like greit å bruke tid på å implementere funksjonen selv i kode som ikke refaktureres og derfor har breaking changes årlig.


## God kodekvalitet i HTML

I webutvikling starter alt med HTML. Alltid. Ren HTML må til for å lage rene nettsider. Sett deg inn i og forstå de ulike elementene en har.

Ved å bruke HTML på en god måte lager en en god struktur. Strengt tatt burde en gjenvlig ha fjernet all CSS fra siden en jobber på å sett om det fortsatt er mulig å forstå og bruke den. For det er i stor grad det som skjer i Universiell Utforming og skjermlesere.

Fordelen med å fokusere på god struktur i HTML er at det er MYE lettere å style godt strukturerte sider. Det betyr at en bør bruke [de struktuelle elementene i HTML ](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure).

Elementene en bruker på nettsiden bør også være av de typene det ser ut som. Ser det ut som en knapp skal det være en knapp. Har ikke lande på hva jeg tenker om lenker som ser ut som knapper, men skal ikke slakte de helt enda. Toggle buttons bør være radiobuttons osv.

En bør bruke form elements og slike ting. Det gjør jobb med validering og kommunikkasjon til brukeren enklere.

For å gjenta det:
> Nettsiden bør kunne fungere uten CSS

## God kodekvalitet i CSS

Bruk CSS modules når du har anledning til det. Styled components gir runtime overhead. Tailwind virker verbost og unødvendig.

CSS modules gir unike klassenavn for alt du skriver. 

Ren CSS legger gradvis til stylingen den trenger. Må du fjerne noe styling har du gjort noe galt. 

### Bruk et CSS reset sheet

For at vi ikke skal rulle over å overgi oss til chrome bør vi gjøre det vi kan for å støtte de fleste nettlesere. Det meste av det vi gjør er lett å få til i dagens nettlesere. Mye av det folk klager på er ikke lenger tilfelle. Sliter du med å få ting til å fungere så gjør du enten noe feil eller du bruker noe som er eksperimentelt / bleeding edge. Det er en grunn til at det heter bleeding edge. Deal with it.

`</rant>`

Vi sa før at en ikke skal fjerne styling. Og det stemmer. Men de forskjellige nettleserne har et par forskjellige initielle styling. Så dette bør likestilles før en begynner å legge til styling. Dette ender opp med å være viktig for demokratitet på WEB. Hvis alle sider ser bra ut i chrome og ikke i de andre nettleserne fordi ingen tester de andre nettleserne er vi med å bidra til problemet.


### !important

Ikke bruk !important. Må du gjøre det skriv en kommentar hvor du ber om nåde til den neste som ser på hva du har gjort. Du bør heller refaktorere. Unntaker vi kan leve med er å overskrive noe i et bibliotek en bruker som en ellers ikke får stylet.

### margin: -15px;

Hva er det du driver med? Hvorfor fjerner du styling fra elementet dette elementet ligger i? Har du kommet hit har du rotet til ting.

### Bruk variabler

Bruk variabler for farger og faste størrelser. Enten CSS custom properties eller en annen form for variabler. Finn gode navn på farger med designer slik at en ikke ender opp med de 12 forskjellige gråtonene de fleste prosjekter har.


### Set viewport

Det første du gjør i det du kommer inn på et prosjekt er å sjekke at viewport
er satt. Og setter det hvis ikke.

`<meta name="viewport" content="width=device-width, initial-scale=1" />`

Men dette er HTML? Jupp, men påvirker all styling i stor grad for små enheter.
Denne linja gjør livet enklere og nettsiden mer responsiv.


## God kodekvalitet i JS / TS

Bare fordi du kan gjøre noe i JS betyr ikke at du burde.

Det er mye i JS som er stygt. Pakk det inn. Gjem det bort. Måneder er 0 indeksert. WTF.


### Bruk react query

Livet blir enklere og det er letter å skrive ren kode.

### Komponenter

Lag gode komponenter -> [The 10 Component Commandments](https://dev.to/selbekk/the-10-component-commandments-2a7f)

React Query kommer inn her. Det lar en enkelt hente ut data en trenger i komponentene der en trenger det uten å bekymre seg for unødvendig nettverkstrafikk. 

Kode er som å leke lege hvor en lager sine egne klosser. Pass på å lag klosser som er gode både med tanke på kode, men og med tanke på design og hvordan de visuelt passer sammen.

### Bruk ideer fra [atomic design](https://bradfrost.com/blog/post/atomic-web-design/)

Vi skal ikke svelge alle ideene til Brad Frost. Men han argumenterer for en idee vi har vært innom: gruper ting basert på abstraksjonsnivå. Det å lage komponenter og gruppere de på abstraksjonsnivå vil gjøre livet enklere.

Det å bruke verktøy som storybook for å dokumentere komponentene er også med å bidra til bedre kode da en tvinges til å tenke igjennom komponenten en lager ut fra en gjenbrukskontekst samt får et fokus på hvordan ting ser ut.

Det hjelper en også til å tenke igjennom hvordan komponenten skal brukes og om en støtter feilhåndtering.