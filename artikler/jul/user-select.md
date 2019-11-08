


# user-select:all;


example table with data you can copy

## User select:all;
table with content that can be selected atomicly


## Cursor

Add a cursor to make it easier to understand you can copy

## before

add a before that show you can select

https://developer.mozilla.org/en-US/docs/Web/CSS/user-select

<div class="test">yo</div>

<script>
// from https://stackoverflow.com/questions/3922139/add-css-to-head-with-javascript
 function addcss(css){
    var head = document.getElementsByTagName('head')[0];
    var s = document.createElement('style');
    s.setAttribute('type', 'text/css');
    if (s.styleSheet) {   // IE
        s.styleSheet.cssText = css;
    } else {                // the world
        s.appendChild(document.createTextNode(css));
    }
    head.appendChild(s);
 }
 
 addcss(`
 .test{
 background:red;
 }
 `)
</script>
