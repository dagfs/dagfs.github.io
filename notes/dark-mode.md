# Lets look dark on it

Dark mode has become quite popular again. It is nothing new of course. The earliest computers only had "dark mode" as they had limitided display technologies. For quite an interesting read about have a look at (A Brief History of “Dark Mode”—From the Matrix-like Displays of the Early ’80s to Today)[https://eyeondesign.aiga.org/a-brief-history-of-dark-mode-from-the-matrix-like-displays-of-the-early-80s-to-today/]

While dark mode can have benefits for users with low-vision, light mode leads to better performance most of the time according to a deep dive according to Raluca Budiu in her pice [Dark Mode vs. Light Mode: Which Is Better?](https://www.nngroup.com/articles/dark-mode/) 

Once again Apple were in the forefront of popularizing technology. In August 2019 the told developers to (Get Ready for Dark Mode)[https://developer.apple.com/news/?id=0829019a].

Dark mode is now [part of media queries in CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme), allowing for quite easy implementation of Dark and light mode. But before we dive into how to do Dark mode the proper way. Lets look at some of the challenges of dark mode.

## Challenges of dark mode
Supporting dark mode comes at a cost. You need to support multiple color schemes at once and that requires some toughs. It is common to end up with lots of small problems where one ends up with problems implementing new designs as supporting multiple themes were not thought of when designing the new designs. Some tought 


Finding a naming scheme that supports multiple themes is also challenging.


Finding a way of changing between the themes that is intuitive for the users.


That being said. Let us have a look at how to do it properly.

## How to implement dark mode on the web properly.

There are three components to look at:
1. The color schemes you intend to use and how the colors works compared to one and another
2. The naming scheme of the variables you intend to use
3. The mode toggler

I find using [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) and the [prefers-color-scheme media query](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) the most responsible and native web way.

### 1. Color scheme
Make sure the color combinations matches
image of the colors with names

### 2. Naming scheme
design tokens


### 3. Theme toggling

- Change the icon based on the color scheme selected not JS.
- Store state in localstorage - does one need to report this as cookie?



