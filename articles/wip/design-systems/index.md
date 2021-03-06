# Design system talk

    <link rel="stylesheet"
      href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css">
      
<div>
<i class="las la-exclamation-triangle"></i>
</div>

https://github.com/sturobson/Awesome-Design-Tokens

https://www.youtube.com/watch?v=Hx02SaL_IH0

http://bradfrost.com/blog/post/frontend-design-react-and-a-bridge-over-the-great-divide/

https://www.youtube.com/watch?v=qaFG5lhibeU&amp;feature=youtu.be

## Frontend utvikling

Frontend utvikling bestør av flere deler, en skal lage god semanntikk i HTML, få innholdet til å se pent ut med CSS og implementere funksjonalitet i siden med JavaScript. Den siste delen har eksplodert i den siste tiden og drukner gjerne de to første.

En kan argumentere for at frontendutvikling har blitt til to områder. De som får innholdet til å bli strukturert riktig og til å se bra ut på alle enheter, og de som implementerer funksjonaliteten.

Brad Frost skriver om dette tema fra perspektivet som en frontend designer med lite erfaring i de massive frontendrammeverkene som har blitt populære de siste årene. http://bradfrost.com/blog/post/frontend-design-react-and-a-bridge-over-the-great-divide/

## Utfordringer

Frontendutvikling er komplisert og krever flere forskjellig mindset mens en implementerer kode. En skal ta hensyn til UU, forskjellige enheter, funksjonalitet og prøve å få ting til å ligne på en skisse, eller til å se bra ut, uten at det brekker bare en prøver å lege til en ny linje tekst.

En prøver å løse verdensproblemer med å lage et design som inneholder alt verdensproblemet består av for å gjøre det mulig for en bruker å utføre en oppgave.

En trenger å tenke på om en skal støtte skjermlesere, IE, mobil, UU. Dette påvirker hvordan en strukturerer innholdet. Det kan også påvirke designet, da det er kjente måter å løse problemer på i verdensveven som kanskje ikke ble brukt i skisser. Noen ganger gir det også mening å prøve å finne en unik måte å løse et problem, fordi det er så sært at det ikke finnes andre gode løsninger. Men det er som regel langt mellom disse ;)

En skal også implementere funksjonalitet slik at produktet gir verdi til sluttbruker.

## Komponentbiblioteker

En løsning som er blitt tatt i bruk er å isolere komponenter i et prosjekt slik at de lett kan gjenbrukes.

Selbekk og Odden har skrevet de 10 bud for gode komponenter https://dev.to/selbekk/the-10-component-commandments-2a7f . Artikkelen er verdt å lese, men har vil jeg kun fokusere på deres første poeng. Komponenter er tilbyr APIer og skal derfor tenkes på og dokumenteres slik.

Vi har alt gode verktøy for å dokumentere APIer, det gir derfor mening å se på disse og se hvordan vi kan annvende disse prinsippene i dokumentasjon av komponenter. Et vanlig verktøy er Swagger https://swagger.io/ , et eksempel på bruk kan ses på https://petstore.swagger.io/ . Tilsvarende finnes Storybook for komponenter https://storybook.js.org/ med Bekk sitt eksempel på http://storybook.bekk.no/?path=/story/velkommen--her-finner-du-react-komponenter-for-bekk .

## Hva er et design system?

- [https://www.invisionapp.com/inside-design/guide-to-design-systems/](https://www.invisionapp.com/inside-design/guide-to-design-systems/)
- [https://medium.muz.li/what-is-a-design-system-1e43d19e7696](https://medium.muz.li/what-is-a-design-system-1e43d19e7696)

https://www.youtube.com/watch?v=Hx02SaL_IH0

## Hva kan vi gjøre ekstra?

Delight in ux

- Endringsblindhet
- https://www.nngroup.com/articles/ten-usability-heuristics/
- ikke bevege mus
- ikke huske ting
- ikke lese ting
- https://www.youtube.com/watch?v=Hx02SaL_IH0

Unintentional design artikkel

Link til hvordan designe componenter ------------- https://dev.to/selbekk/the-10-component-commandments-2a7f

Video om design systemer --------------------- https://www.youtube.com/watch?time_continue=232&amp;v=mq984Mc9UVA
Video om design systemer --------------------- http://bradfrost.com/blog/post/the-technical-side-of-design-systems-at-css-day-in-amsterdam/

Hva tenker vi design systemer er? Komponent bibliotek ++

Bekk har, andre store har laget systemermed storybook.

Hvordan påvirker det å ha etkomponentbibliotek sammarbeide? Trenger en å ha komponentene i sketch eller figma eller tilsvarende? Eller holder det atdet lever i kode?

Hva tenker vi om det? hva skal til for at det går fra etkomponentbibliotek til noe mer?

når gir det mening? Hvor store prosjekter?

hva er fordelene? hva er ulempene?

input fra andreas

http://bradfrost.com/blog/post/the-technical-side-of-design-systems-at-css-day-in-amsterdam/

http://atomicdesign.bradfrost.com/table-of-contents/

https://www.invisionapp.com/design-system-manager/expert-advice/heartache-design-scale/

## Ting å dra inn?

ux-gjeld

unintentional design
om API design: http://sigdoc.acm.org/wp-content/uploads/2019/01/CDQ18002_Meng_Steinhardt_Schubert.pdf

http://bradfrost.com/blog/post/frontend-design-react-and-a-bridge-over-the-great-divide/

http://bradfrost.com/blog/post/the-technical-side-of-design-systems-at-css-day-in-amsterdam/

https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0

Skal ses:
https://www.invisionapp.com/design-system-manager/expert-advice/heartache-design-scale/
https://www.youtube.com/watch?time_continue=2113&v=TgWyyoofKIA

Sjekk ut https://www.forumone.com/ideas/what-is-design-system/

### Systemer

- [https://design.nav.no/](https://design.nav.no/)
- [https://design.sparebank1.no/](https://design.sparebank1.no/)
- [https://storybook.bekk.no](https://storybook.bekk.no)
- [https://rizzo.lonelyplanet.com/styleguide/](https://rizzo.lonelyplanet.com/styleguide/)
