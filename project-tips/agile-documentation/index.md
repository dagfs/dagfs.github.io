# Smidig dokumentasjon

Fungerende kode over dokumentasjon er at av punktene i det smidige manifestet. Men hvor lite dokumentasjon er for lite til at det er lett for et prosjekt å ha og produsere mer fungerende kode?

Med årene har jeg innsett at jeg ikke husker så godt som jeg skulle ønske. Navn, avtaler og fakta blir glemt over tid. Men viktigst er at jeg glemmer grunnlaget for avgjørelser i prosjekter jeg jobber med. Etter 2 uker kunne avgjørelsen like gjerne vært gjort av noen andre. I øyeblikket er en helt sikker på at en kommer til å huske hvorfor en gjorde valget, men omstendighetene endrer seg. Hvis en ikke husker grunnlaget for valget lengre blir det derfor ofte vanskelig å se om valget en tok fremdeles gir mening eller om det er på tide å gjøre seg opp en ny mening om en avgjørelse.

I en episode i podcastet Drypp, ble det nylig snakket om at mye av kunnskapen i et prosjekt ligger i de som jobber på prosjektet. Det gjør at vi ofte er sårbare når folk er på ferie eller vinner i lotto. Selv om hele teamet er på jobb er det ikke uvanelig at det er få eller ingen som husker bakgrunnen for besluttninger som er tatt uker, måneder eller år før i tiden.

Så, hvilken dokumentasjon trengs?

Når en ser på dokumentasjon skal en altså se på hva trenger jeg selv, og hva trenger teamet, hva trenger koden og hva trenger prosjektet. Jeg prøver å dokumentere som at jeg om 2 uker like godt kunne vært et annet / ferskt medlem på teamet. På denne måten står vi igjen med hvilken dokumentasjon trenger koden og prosjektet.

I koden jeg skriver har jeg lenge prøvd å skrive kode som forklarer seg. Føler jeg behov for å skrive en kommentar for å forklare meg ser jeg først om jeg kan restrukturere programmet til å være lettere å forstå eller endrer navn på variabler å funksjoner for at det lett skal forståes. Det går ofte, men av å til er det behov for å komentar som forklarer hvorfor et valg ble gjort, hvorfor noe som ser overflødig ut er der, eller som forklarer teknisk gjeld, eller kode som er midlertidig i avvente av endringer utenfor programmet. De siste punktene bør uten tvil ha en tilhørende sak i et saksystsem.

Det som er vanskelig å dokumentere på kodenivå er besluttninger. Kommentarer en skriver i koden er tett knyttet til koden som er skrevet og en har liten grunn til å lese kommentarene om en ikke skal endre koden. Det blir derfor viktig å ha et annet sted i prosjektet hvor valg som påvirker prosjektet dokumenteres. Hvordan en dokumenterer valgene som blir gjort er mindre viktige enn hvordan det gjøres. Et format som kan vurderes om teamet ikke alt dokumenterer valg dere gjør i prosjektet er Architecture Decision Records (ADR).

ADR er en enkel logg som beskriver hvilke valg som er gjort, bakgrunnen for valget og hvilke konsekvenser valget medfører. ADR skal gjøre det enkelt for nye på teamet med å komme seg inn i prosjektet, hjelpe prosjektet med å huske hvilke valg og grunnlaget for valgene og til å gjøre om på valg på senere tidspunkt hvis det skulle vise seg at forutsettningene for det originale valget har endret seg.

Selv om smidig utvikling prioriterer fungerende kode over dokumentasjon er det altså flere ting vi bør dokumentere for kodens beste.

Hvilke erfaringer har du gjort det? Har du noen tanker om noe mer som absolutt bør dokumenteres? Eller har du noen andre måter å dokumentere på som du foretrekker? Del gjerne!
