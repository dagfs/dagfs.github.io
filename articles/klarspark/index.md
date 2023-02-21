# Klarspråk (Plain language)

**NB! jeg kobler klarspråk og konseptuell modell tett sammen da klart språk er med på å formiddle en god konseptuell modell**

Språk har stor betydning for oss som utviklere. Vi skal prøve å forstå hva folk trenger. Lage modeller av det. Skrive kode, lage grensesnitt og formulere settninger som andre skal forstå. I dette arbeidet er det viktig at vi bruker enkelt, presist og konsistent språk. For å jobbe med dette har termen "klarspråk" blitt laget. [Det jobbes med å utvikle en internasjonsl standard for klarspåk](https://www.standard.no/nyheter/nyhetsarkiv/ikt/2020-nyheter/na-utvikles-en-internasjonal-standard-for-klarsprak/)

For oss som utviklere av produkter er klart språk viktig gjennom hele prosessen. Kommunikkasjon er generelt viktig for å sikre at vi lager den riktige tingen på en god måte uten å skape problemer for brukerne og teknisk gjeld for oss selv. De fleste av problemene vi har kommer av dårlig kommunikkasjon. Ofte missforstår vi hva brukerne trenger. Vi missforstår hvordan modelere det som trengs. Vi bruker dårlige navn eller strukturer i det vi koder, vi kommuniserer dårlig til folk hvordan det vi lager fungerer.

Klarspråk er så viktig at det er et av de første punktene i [Felles arkitektur og struktur for samhandling](https://www.digdir.no/digital-samhandling/felles-arkitektur-og-struktur-samhandling/2150).

## Hvilken verdi gir klarspråk?

Klarsppråk gir verdi ved at vi forstår hverandre bedre som sparer oss fra unødvendig arbeid.  

### Klart språk sparer kommune for oppfølgingsarbeid

> ### Kommunen forenkla språket i søknaden – det sparar dei 12.000 kroner i året på
>
>Ved å bruka klarare språk kan det offentlege spara tid og pengar, viser ny rapport. KS meiner tilbodet til innbyggarane også blir betre.
> [NRK](https://www.nrk.no/vestland/ny-rapport_-det-offentlege-kan-spare-store-summar-pa-enklare-sprak-1.16291428)

### Hvorfor klarspråk?

- Fremmer demokratiet og rettsikkerheten
- Skaper tillit
- Sparer tid og penger
- Fremmer kommunikasjon
- Det offentlige skal være et forbilde

[Kvifor klarspråk?](https://www.sprakradet.no/klarsprak/om-klarsprak/kvifor-klarsprak/)


### DigDir's rettningslinjer
 [Rettleiar om klarspråk i utvikling av digitale tenester](https://www.digdir.no/klart-sprak/rettleiar-om-klarsprak-i-utvikling-av-digitale-tenester/3564)

>Klart språk hjelper til å løfte blikket og sjå det store biletet. Saman med metodar frå tenestedesign, slik som brukarreiser, kan klart språk klargjere ulike roller, forventingar og perspektiv.

>Alle kan ha nytte og glede av å arbeide med klart språk som del av designprosessen, og det kan vere til stor hjelp å skrive både tidleg og ofte, både saman og åleine.

>Det er viktig å brukarteste skissene tidleg, ofte og med varierte metodar. Klart språk som del av prosessen gir ekstra støtte til å inkludere og involvere brukarane.

>Klart språk i menyar, på knappar og i hjelpetekstar gjer at digitale tenester vert enklare å bruke for alle.

## Teori

Hva er egentlig klarspråk? Og hvordan kommer en frem til det?

Jeg tenker at klarspråk handler om å finne gode ord for å forklare de konseptene en bruker. At det er ord en kan ha felles enighet om hva betyr og hvrodan skal brukes. Dette er viktig for oss siden vi tar masse informasjon om et faktisk domene, designer et abstrakt domene og skriver kode for å beskrive abstraksjonen. Hvis vi kommer opp med nye konsepter som ikke finnes utenfor abstraksjonen må disse formiddles godt slik at brukerne forstår hva de er. Hvis vi låner begreper fra virkeligheten må vi passe på at de fungerer. 

En av utfordringene vi har i dag er at tjenesten vi jobber på består av mange domener. Vi ha legacy begreper. Vi har begreper fra forskjellige domener. Vi har begreper fra forskjellige avhengigheter. Dette skal vi sammen prøve å formiddle.

Vi ender altså opp med:

Begreper inn -> vår modell av domene -> måten vi formiddler vår modell.

Klarspråk er viktig i disse 3 områdene så vell som i selve utviklingen av programvare slik at det er lett å utvikle.

Ordene vi velger påvirker hva folk sitter igjen med. [Giraffe Pimp](https://www.reddit.com/r/wholesomememes/comments/aafawp/giraffe_pimp/)

### Konseptuell modell

Konseptuell model snakker enkelt og greit om den modellen vi lager oss av et system i hodet. Det hjelper oss med å vite, forstå og simulere hvordan noe fungerer. Vi gjør dette hele tiden og bruker den mentale modellen vi har til å tenke igjennom handlingene våre, prøve de ut for så å justere handlingene våre. 
[Affordance of public touchscreens](https://demodern.com/blog/public-touchscreens)

[Animasjoner som hjelper brukeren](https://blogg.bekk.no/animasjoner-som-hjelper-brukeren-9bf930ba9617)

[The three ways that good design makes you happy | Don Norman](https://www.youtube.com/watch?v=RlQEoJaLQRA)


## Case study

Noen vanlige problemer jeg har sett gjenta seg i prosjekter:

- Deler av språket eller grensesnittet er så utydelig at folk ikke vet hvordan det fungerer.

- Prosjektet er gammelt og har bygget seg opp et stammespråk som videreføres. Enkelte av begrepene er ting utviklere har funnet på for å beskrive abstraksjoner som beskriver overlappende domenemodeller.

- Det er mye juridisk språk hos kunden og kunden har flere avdelinger med flere domener som delvis overlapper, og til tider bruker forskjellige navn på de samme tingene

- Det er et ekspertsystem så egentlig bør de som kommer inn vite hva begrepene betyr, men det er en del som ikke bruker systemet ofte og det fører til feil. De er ikke godt nok inne i domenet og det oppstår feil fordi de ikke forstår språket / konteksten.

- Systemet har mange datakilder og domene og begrepene hos de kildene kan variere. Så det blir fort en mapping mellom konsepter



Eksempler:
- rr kort
- sr gov



## Lenker:
- [10 eksempler fra kommune (DigDir)](https://www.digdir.no/media/1126/download)
- [Brukardialog og klart språk (DigDir)](https://www.digdir.no/klart-sprak/brukardialog-og-klart-sprak/2051)
- [Kommunen forenkla språket i søknaden – det sparar dei 12.000 kroner i året på (NRK)](https://www.nrk.no/vestland/ny-rapport_-det-offentlege-kan-spare-store-summar-pa-enklare-sprak-1.16291428)
- [Kort om klarspråk (Språkrådet)](https://www.sprakradet.no/klarsprak/om-klarsprak/kort-om-klarsprak/)
- [Bruk klarspråk](https://www.sprakradet.no/klarsprak/)
