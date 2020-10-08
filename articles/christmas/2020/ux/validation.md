<style>
    label {
        display: block;
    }

    .label {
        display: inline-block;
        min-width: 100px;
    }

    input:invalid {
        outline: 1px solid red;
    }

    .error,
    .error-next-line {
        display: none;
    }

    input:invalid+.error {
        margin-left: 10px;
        color: red;
        display: inline;
    }

    input:invalid+.error-next-line {
        color: red;
        display: block;
        margin-top: 4px;
        margin-left: 100px;
    }

    .timed-error {
        display: none;
    }

    input[show-error="false"]:invalid {
        outline: none;
    }

    input[show-error="true"]:invalid {
        outline: 1px solid red;
    }

    input[show-error="true"]:invalid+.timed-error {
        color: red;
        display: inline;
    }
</style>

## Brukeropplevelse

Vi har nå vært gjennom det vi trenger å vite om innebygged validering av input til å skape en god brukeropplevelse!

For å skape en god brukeropplevelse ved input validering er det viktig å tenke på:

1. Hvor en viser feilene
2. Vise feilmeldingene på riktig tidspunkt
3. Bruke fornuftige farger
4. Bruk tydelig språk

### 1. Hvor en viser feilene

Det er mange måter å vise feilmeldinger på. Jeg vil anbefale og vise feilmeldingen tett tilknyttet inputfeltet det gjelder, da enten til høyre eller under input feltet som er ugyldig. Hvis formet er langt bør en scrolle til der feilen er når brukeren prøver å sende inn data.

#### Til høyre

<form>
    <label>
        <span class="label">Navn: </span>
        <input value="Dag Frode">
    </label>
    <br>
    <label>
        <span class="label">Epost: </span>
        <input type="email" value="ikke en gyldig epost">
        <span class="error">Venligst skriv inn en gyldig epost</span>
    </label>
    <br>
    <label>
        <span class="label">Adresse: </span>
        <input value="Hakkebakkestien">
    </label>
</form>

#### Under

<form>
    <label>
        <span class="label">Navn: </span>
        <input value="Dag Frode">
    </label>
    <br>
    <label>
        <span class="label">Epost: </span>
        <input type="email" value="ikke en gyldig epost">
        <span class="error-next-line">Venligst skriv inn en gyldig epost</span>
    </label>
    <br>
    <label>
        <span class="label">Adresse: </span>
        <input value="Hakkebakkestien">
    </label>
    <br>
    <button>Send inn</button>
</form>

### 2. Vise feilmeldingene på riktig tidspunkt

Det er slitsomt for brukeren å få feilmeldingen kastet i fleisen som i eksemplene over. Det er derfor lurt å vente til en bruker trykker ut av et felt med å vise feilmeldingene. Dette kan gjøres med litt enkel JavaScript og CSS. 

Hvis det er snakk om et komplisert felt som skal valideres kan en kjøre validering noen ms etter at brukeren har sluttet å skrive.

```html
<input
  type="email"
  class="timed-error"
  oninput="this.setAttribute('show-error', false)"
  onblur="this.setAttribute('show-error', true)"
/>
```

```css
.timed-error {
  display: none;
  color: red;
}

input[show-error="true"]:invalid {
  outline: 1px solid red;
}

input[show-error="true"]:invalid + .timed-error {
  display: inline;
}
```

<form>
    <label>
        <span class="label">Navn: </span>
        <input value="Dag Frode">
    </label>
    <br>
    <label>
        <span class="label">Epost: </span>
        <input type="email" oninput="this.setAttribute('show-error', false)"
            onblur="this.setAttribute('show-error', true)" />
        <span class="timed-error">Venligst skriv inn en gyldig epost</span>
    </label>
    <br>
    <label>
        <span class="label">Adresse: </span>
        <input value="Hakkebakkestien">
    </label>
    <br>
    <button>Send inn</button>
</form>

### 3. Bruke fornuftige farger

Her vil jeg presisere at det er fornuftig å benytte en farge en forbinder med feil, feks rød med feilmeldingen og en annen farge for når ting går bra, feks grønn. Det er lurt å få feilmeldingene til å skille seg ut ved feks å gjøre teksten rød slik at brukeren får med seg at det er en feil. Det kan gjerne brukes en `*` eller en `x` også for å markere at dette er ekstra informasjon til inputfeltet slik at de 5-7% av oss som sliter med farger også får det med seg. Og tilsvarende for når ting går bra.

<form>
    <label>
        <span class="label">Navn: </span>
        <input value="Dag Frode">
    </label>
    <br>
    <label>
        <span class="label">Epost: </span>
        <input type="email" show-error="true" oninput="this.setAttribute('show-error', false)"
            onblur="this.setAttribute('show-error', true)" value="ikke en epostaddresse" />
        <span class="timed-error">*Venligst skriv inn en gyldig epost</span>
    </label>
    <br>
    <label>
        <span class="label">Adresse: </span>
        <input value="Hakkebakkestien">
    </label>
    <br>
    <button>Send inn</button>
</form>

### 4. Bruk tydelig språk

Det siste det er viktig å tenke på for å skapeen god brukeropplevelse er å gi en god tilbakemelding når noe er feil. Bruk positivt språk som oppmuntrer brukeren. Prøv å gjøre feilmeldingene beskrivende slik at det er lett å forstå hva som gikk feil


## Løsningsforslag

Vi bruker samme stylingen som tidligere

```css
.timed-error {
  display: none;
  color: red;
}

input[show-error="true"]:invalid {
  outline: 1px solid red;
}

input[show-error="true"]:invalid + .timed-error {
  display: inline;
}
```

Vi lager en funksjon for å validere et av inputfeltene våre. Vi targeter labelen da den får beskjed når inputfeltet den er knyttet til oppdaterer seg, altså når `input` har et event av type `blur`. Ved å targete labelen får vi også tak i feilmeldingsfeltet slik at vi får oppdatert både inputfeltet og error feltetsamtidig.

```js
function validateUsername(label) {
    var input = label.querySelector("input");
    var errorSpan = label.querySelector("span.timed-error");
    error = "";
    if (!/\d/.test(input.value) ) {
        error = `*${input.value} er alt brukt. Hva med ${input.value}1?`
    }

    input.setCustomValidity(error);
    errorSpan.innerText = error;
}
```

Vi har pakket feltene i et `fieldset` for å gruppere de.

```html
<form>
    <fieldset>
        <legend>Personalia:</legend>
        <label onchange="validateUsername(this)">
            <span class="label">Brukernavn: </span>
            <input show-error="false" oninput="this.setAttribute('show-error', false)"
                onblur="this.setAttribute('show-error', true)">
            <span class="timed-error">derp</span>
        </label>
        <label>
            <span class="label">Email: </span>
            <input type="email" show-error="false" oninput="this.setAttribute('show-error', false)"
                onblur="this.setAttribute('show-error', true)">
            <span class="timed-error">*Vennligst skriv inn en gyldig epost</span>
        </label>
        <button>Submit</button>
    </fieldset>
</form>
```



<form>
    <fieldset>
        <legend>Personalia:</legend>
        <label onchange="validateUsername(this)">
            <span class="label">Brukernavn: </span>
            <input show-error="false" oninput="this.setAttribute('show-error', false)"
                onblur="this.setAttribute('show-error', true)">
            <span class="timed-error">derp</span>
        </label>
        <label>
            <span class="label">Email: </span>
            <input type="email" show-error="false" oninput="this.setAttribute('show-error', false)"
                onblur="this.setAttribute('show-error', true)">
            <span class="timed-error">*Vennligst skriv inn en gyldig epost</span>
        </label>
        <button>Submit</button>
    </fieldset>
</form>

<script>
    function validateUsername(label) {
        var input = label.querySelector("input");
        var errorSpan = label.querySelector("span.timed-error");
        error = "";
        if (!/\d/.test(input.value) ) {
            error = `*${input.value} er alt brukt. Hva med ${input.value}1?`
        }

        input.setCustomValidity(error);
        errorSpan.innerText = error;
    }
</script>

## TODO: kilde:
- https://medium.com/@andrew.burton/form-validation-best-practices-8e3bec7d0549 -->
- stavekontroll -->

- TODO: https://design.nav.no/patterns/form-validation
