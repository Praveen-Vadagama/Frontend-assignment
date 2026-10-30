# UI Technologies Assignments

This repository contains clean, self-contained solutions for front-end training assignments covering **HTML5**, **CSS3**, and **JavaScript**.

---

## Repository Structure

```text
.
├── html5/
│   ├── 01-basics.html                      # HTML semantic tags, in-page navigation, pseudo classes/elements
│   └── 02-input-attributes.html            # Input types, attributes, constraints, iframe, marquee
├── css/
│   ├── 01-css-basics.html                  # Comments, fixed background image, 4 border styles, px vs % sizing
│   ├── 02-page-adjustments.html            # Table hover background change, visibility vs display, padding vs margin
│   └── 03-css-effects.html                 # Shadow & cursor, CSS animation, pagination, positioning, opacity
└── javascript/
    ├── 01-js-basics.html                   # HTML runner for JS Basics
    ├── 01-js-basics.js                     # Comments, descending sort, for/in, objects, hoisting, strict mode
    ├── 02-access-and-properties.html       # HTML runner for JS Access & Properties
    └── 02-access-and-properties.js         # 'this' keyword, call vs apply, counter, getters/setters, prototypes
```

---

## Assignments Covered

### 1. HTML5
* **HTML5 Basics**: Core tags (`h1-h6`, `p`, `b`, `i`, `span`, `div`, `blockquote`, `hr`, `ul/li`, `img`), internal navigation anchors (`#section`), pseudo-classes (`:hover`, `:focus`), and pseudo-elements (`::first-letter`, `::selection`).
* **Input Attributes & Restrictions**: Form elements (`text`, `password`, `radio`, `checkbox`, `number`, `range`, `color`, `date`, `time`, `email`, `file`), validation constraints (`required`, `readonly`, `disabled`, `min`, `max`, `maxlength`), `target="_blank"` vs `_self`, plus `<iframe>` and `<marquee>`.

### 2. CSS
* **CSS Basics**: Multi-line CSS comments, fixed non-scrolling background image (`background-attachment: fixed; background-size: cover;`), multi-pattern borders (dotted, dashed, solid, double), height/width in `px` vs `%`, and typography styling.
* **Page Adjustments**: Table hover effect changing page background color (`:has(#hoverTable:hover)`), `visibility: hidden` vs `display: none`, smooth scroll navigation (`scroll-behavior: smooth`), padding vs margin, and multi-image backgrounds.
* **CSS Effects**: Box-shadow hover transitions, keyframe animation (`@keyframes`, duration, iteration count, delay), pagination with and without margins, positioning (`static`, `relative`, `absolute`, `sticky`), `overflow: scroll`, and image opacity transitions.

### 3. JavaScript
* **JavaScript Basics**: Single and multi-line comments, descending string/array sort (`sort()` and `reverse()` / `localeCompare()`), `for...in` object loop, 2 property access notations (dot vs brackets), variable hoisting with `var`, and `"use strict"` reference error demonstration.
* **Access & Properties**: Disappearing button via `this.style.display = 'none'`, `Function.prototype.call()` vs `Function.prototype.apply()`, click counter, counter object with ES5 `get` and `set` accessors, and prototype property/method extension (`Constructor.prototype`).

---

## How to Run
Simply open any of the `.html` files in any modern web browser (Google Chrome, Firefox, Edge). No external dependencies or npm installations required.
