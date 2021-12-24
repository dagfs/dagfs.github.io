# Specifity is !important

There is a concept in CSS called specificity. It determines what style is applied to a HTML element.

There are two levels to think about specificity.

## Style origin
The first is where the styling comes from. 
It can come from 
- browser
- user specified
- external style sheets
- internal 
- inline styling

## Style selector
Once this is take into account, then there is different types of selectors.
Starting with the selector with the lowes specifity first.
1. Type selectors and pseudo-elements ::before
2. class and attribute selectors
3. Id selectors

## !important
causes problems
can often be done with just adding a bit of specifity instead.

>Using !important in your CSS usually means you're narcissistic & selfish or lazy. Respect the devs to come... https://css-tricks.com/when-using-important-is-the-right-choice/

For more on CSS specifity
https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity
https://css-tricks.com/when-using-important-is-the-right-choice/
