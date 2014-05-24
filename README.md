<<<<<<< HEAD
# [HTML5 Boilerplate](http://html5boilerplate.com)

HTML5 Boilerplate is a professional front-end template for building fast,
robust, and adaptable web apps or sites.

This project is the product of many years of iterative development and combined
community knowledge. It does not impose a specific development philosophy or
framework, so you're free to architect your code in the way that you want.

* Source: [https://github.com/h5bp/html5-boilerplate](https://github.com/h5bp/html5-boilerplate)
* Homepage: [http://html5boilerplate.com](http://html5boilerplate.com)
* Twitter: [@h5bp](http://twitter.com/h5bp)


## Quick start

Choose one of the following options:

1. Download the latest stable release from
   [html5boilerplate.com](http://html5boilerplate.com/) or a custom build from
   [Initializr](http://www.initializr.com).
2. Clone the git repo — `git clone
   https://github.com/h5bp/html5-boilerplate.git` - and checkout the tagged
   release you'd like to use.


## Features

* HTML5 ready. Use the new elements with confidence.
* Cross-browser compatible (Chrome, Opera, Safari, Firefox 3.6+, IE6+).
* Designed with progressive enhancement in mind.
* Includes [Normalize.css](http://necolas.github.com/normalize.css/) for CSS
  normalizations and common bug fixes.
* The latest [jQuery](http://jquery.com/) via CDN, with a local fallback.
* The latest [Modernizr](http://modernizr.com/) build for feature detection.
* IE-specific classes for easier cross-browser control.
* Placeholder CSS Media Queries.
* Useful CSS helpers.
* Default print CSS, performance optimized.
* Protection against any stray `console.log` causing JavaScript errors in
  IE6/7.
* An optimized Google Analytics snippet.
* Apache server caching, compression, and other configuration defaults for
  Grade-A performance.
* Cross-domain Ajax and Flash.
* "Delete-key friendly." Easy to strip out parts you don't need.
* Extensive inline and accompanying documentation.


## Documentation

Take a look at the [documentation table of contents](doc/TOC.md). This
documentation is bundled with the project, which makes it readily available for
offline reading and provides a useful starting point for any documentation you
want to write about your project.


## Contributing

Anyone and everyone is welcome to [contribute](CONTRIBUTING.md). Hundreds of
developers have helped make the HTML5 Boilerplate what it is today.
=======
# Sublime Text CSS3 syntax highlight [![Build Status](https://travis-ci.org/i-akhmadullin/Sublime-CSS3.png?branch=master)](https://travis-ci.org/i-akhmadullin/Sublime-CSS3)

<img src="http://i.imgur.com/q3ETMkT.png">

## How to install

1. Ctrl+Shift+P → Package Control: Add Repository → https://github.com/i-akhmadullin/Sublime-CSS3

2. Ctrl+Shift+P → Package Control: Install Package → Sublime-CSS3

3. (in .css file) View → Syntax → Open all with current extension as... → CSS3


## What has been added

#### Property names
```
all
appearance
align-items, align-content, align-self
animation
animation-delay, animation-duration, animation-iteration-count, animation-fill-mode
animation-name, animation-play-state, animation-timing-function
at

backface-visibility
background-clip, background-origin, background-size
border-image, border-image-outset, border-image-repeat, border-image-slice, border-image-source, border-image-width
border-radius
box-align, box-direction, box-flex, box-ordinal-group, box-orient, box-pack
box-shadow
box-sizing

clip-path
column-count, column-fill, column-gap
column-rule, column-rule-color, column-rule-style, column-rule-width
column-span, column-width
columns

filter
flex, flex-align, flex-basis, flex-direction
flex-flow, flex-grow, flex-item-align, flex-line-pack
flex-order, flex-pack, flex-shrink, flex-wrap
font-effect
font-emphasize, font-emphasize-position, font-emphasize-style

group
hyphens
inline-flex
justify-content

mask, mask-image, mask-size, mask-position

order
outline-offset
overflow-scrolling
overflow-wrap

perspective, perspective-origin

transform, transform-origin, transform-style
transition, transition-delay, transition-duration, transition-property, transition-timing-function

shape-image-threshold, shape-margin, shape-outside

tab-size
text-align-last
text-emphasis
text-overflow
text-size-adjust

user-select
word-break

behavior
webkit-font-smoothing, -moz-osx-font-smoothing
interpolation-mode
line-clamp
-ms-writing-mode
```


#### Property values
All animatable properties plus
```
bicubic
border-box, padding-box, border-box, content-box
contain, cover, local
infinite
linear
table-cell, table-caption, table-column-group, table-column, table-row-group, table-row

linear-gradient, radial-gradient, webkit-gradient
repeating-linear-gradient, repeating-radial-gradient

box, flexbox, flex, column, column-reverse, row, row-reverse,
flex-start, flex-end, space-between, space-around, stretch
wrap, wrap-reverse, start, inline-flex, inline-flexbox

closest-side, closest-corner, farthest-side,
ease, ease-in-out, ease-in, ease-out, from, to
farthest-corner, color-stop, preserve-3d, ellipse
transform, translate, rotate, scale, matrix, skew,

antialiased
blink
content
currentColor
grayscale
image-set
textfield
touch

initial, unset

progid:DXImageTransform.Microsoft.Alpha, alpha
progid:DXImageTransform.Microsoft.Blur
progid:DXImageTransform.Microsoft.dropshadow
progid:DXImageTransform.Microsoft.gradient, startColorStr, EndColorStr
progid:DXImageTransform.Microsoft.Shadow
```

#### Pseudo elements
```
::-moz-focus-inner
::-ms-browse
::-ms-check
::-ms-clear
::-ms-expand
::-ms-fill
::-ms-fill-lower
::-ms-fill-upper
::-ms-reveal
::-ms-thumb
::-ms-ticks-after
::-ms-ticks-before
::-ms-tooltip
::-ms-track
::-ms-value
::-webkit-input-placeholder, ::-moz-placeholder, ::placeholder
::-webkit-search-cancel-button
::-webkit-search-decoration
::selection, ::-moz-selection
```

#### Pseudo classes
```
:not, :matches

:dir, :lang

:any-link, :local-link, :scope

:current, :past, :future

:indeterminate
:default
:in-range, :out-of-range
:required, :optional
:read-only, :read-write

:empty
:only-child
:first-of-type
:nth-of-type
:last-of-type
:nth-last-of-type
:only-of-type

:nth-match, :nth-last-match

:column, :nth-column, :nth-last-column

:valid-drop-target
:active-drop-target

:placeholder-shown
:user-error
```

#### At-rules
```
@keyframes (without keyframe selectors atm)
```

#### Tags
```
keygen, main, math, menuitem, picture, source, svg, template, track
```

#### Units
```
vw,vh,vmin,vmax,turn,ms,dppx
```

#### Custom Properties for Cascading Variables
```
--my-variable: 20px;
```

#### Functional Notation
```
var(--my-variable)
calc()
circle()
ellipse()
inset()
polygon()
```
>>>>>>> 2b0f36b7ccc99b3c52adcf7429e950226155119e
