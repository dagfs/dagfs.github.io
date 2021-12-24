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

# Form validation with JS

Almost all websites require users to enter some information to interact. These interactions needs feeback and a way to communicate when the user has entered something invalid. Often this is done trough having the user submit information and checking it server side. You have to check serverside anyways, so why not just do it there, right?  Well, it makes for a worse user experience. The user have to wait a bit to know if what they entered was wrong, and it's not uncommon to see that the information you entered was lost do to some error in the form.

How can we make for a better user expereience? Well we can use form validation in HTML which came to all major browsers during 2012. Form validation use the attributes to let the browsersknow the rules for each input field and let it improve its interaction with the user.

The form validation attributes are:

* `required`
* `type`
* `minlength` and `maxlength`
* `min` and `max`
* `pattern`

The most common values for `type` are:

- `checkbox`
- `date` - `yyyy-mm-dd`
- `email`  
- `file` 
- `hidden`
- `number`
- `password`
- `radio`
- `submit`
- `text`

Selecting an approprioate input type yields a better user experience. It lets the browser know how to handle the input and also affects how the virtual keyboard your users sees when they sit there on the train trying to get small tasks that have a tendency to pile up. A big motivation for me to get these things right are to think about the expereiences I've had where these details were done correctly an how it made a task I needed to do so much more enjoyable instead of a frustration.

Some examples of input fields:

#### Input field of 3-5 characters
```html
<input minlength="3" maxlength="5" />
```

<label>
    Inputfield of 3-5 characters: <input minLength="3" maxLength="5">
</label>

#### Email
```html
<input type="email">
```
<label>
    <span class="label">Email: </span>
    <input type="email">
</label>
I've added css to add a red border if the input is invalid. This is one of the benefits by using the built in validation as you do not have to think about adding more css clases or anything like this. This is what it looks like:

```css
input:invalid {
    outline: 1px solid red;
}
```

Using the buildt in validation in forms can help us in a lot of situations, but it does not prepare us to make sure our users select a unique username or make sure the user entered a prime number when propted to do so and it was really important that they entered a real prime number because you used it to store their passwords securly. Not that I'v ever done such a thing, nor that it is a good idea. But you know some might feel a litte safer knowing their favorite prime number is watching safely over their password. Anyways we will now look at how to extend the built in form validation!

## Custom validity
Since 2015 the Constraint Validation API has been available to make every web developers task of validating user inputs in the frontend easier.

Ved å bruke JavaScript kan vi få tak i et inputfelts `ValidityState` og på den måten finne ut hvilken feil et felt har
hvis det har flere. Vi kan også bruke JavaScript metoden `input.setCustomValidity('Feilmelding')` for å sette en egen
feilmelding.


### Validating in the contex of the system
>Okay, so we can write custom js in the frontend to validate our code, but we still need to validate in backend. I'd rather have a beetroot late than have validation rules in both the frontend and bacckend and have the rules drift or being a pain to maintain.

How nice of you to present that problem! As I see it there are two main aproaches for sharing validation rules:
1. use javascript in the backend and share the validation logick between the different parts of the project// in backend høres rart ut
2. Use the backend to validate the frontend. Just make a endpoint for validating your users input data. I'd recommend adding a debounce {er det riktig metode?} to reduce the number of requests and the user experience. 




### Metoden `setCustomValidity`

Vi kan også bruke metoden `setCustomValidity` får å gjøre et input felt ugyldig på samme måte som blir gjort hvis input
feltene feiler av en av de innebygde attributtene. Men feilmeldingen her dukker ikke opp før en prøver å sende inn  skjema. Vi pakker derfor inputfeltet i et form og legger til en knapp for å sende inn dataene. 

`setCustomValidity` vil også la nettleseren scrolle til feltet som er ugyldig.

#### Eksempel setCustomValidity

```html
<form>
  <label>
    Input:
    <input onchange="validateRiktig(this)" />
  </label>
  <button>Submit</button>
</form>

<script>
  function validateRiktig(input) {
    error = "";
    if (input.value != "Riktig") {
      error = 'Input teksten er ikke "Riktig"';
    }
    input.setCustomValidity(error);
  }
</script>
```

<br>
<form>
    <label>
        Input:
        <input onchange="validateRiktig(this)">
    </label>
    <br>
    <button>Submit</button>
</form>

<script>
    function validateRiktig(input) {
        error = "";
        if (input.value != "Riktig") {
            error = 'Input teksten er ikke "Riktig"'
        }
        input.setCustomValidity(error);
    }
</script>

[Les mer om `setCustomValidity` i MDN we
docs](https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/setCustomValidity)





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

## TODO
- Stavekontroll

## Work
- 4.10 1 time - intro
- 26.10 1 time - fjerne det som ikke skal brukes.