# Williams-Sonoma Coding Challenge #

![3-column layout](https://terrymorse.com/public/wscc-3-column.png "3-column
 layout")

## Task ##

Given a JSON object of products, build a responsive page that displays for each
 product:

* product image
* product name
* product price


### Technologies Used ###

* Vue.js 2.6.12
* Bootstrap 4.5.2
* Jest 26.4.2
* vue-jest 3.0.7

#### Installation ####

```bash
git clone https://github.com/terrymorse58/wsi-coding-challenge.git
cd wsi-coding-challenge
npm install
```
#### Launching the Page ###

This project is installed on the Terry Morse Software, Inc. server and my be run
 here:
 
[WSI Coding Challenge @ terrymorse.com](https://terrymorse.com/private/wsicodechallenge/index.html)

Or it can be run locally:
```bash
npm run dev
```

#### Running Test ####
```bash
npm run test
```

#### Directory Structure ####
```bash
 wsi-coding-challenge
 |-- index.html
 |-- css
 |   |-- wsiprods.css
 |-- js
 |   |-- products.js
 |   |-- products.store.js
 |   |-- products.store.test.js
 |   |-- products.vue.js
 |   |== products.vue.test.js
```


#### Responsive Design ####

![iPhone responsive layout](https://terrymorse.com/public/wsicc-iphone.png "3
-column
 layout")


The layout and dimensions of the product cards are responsive to the viewport
 width.
 
The product cards have a default width of 354 pixels, which will display 3
 columns of cards on a viewport at least 1200 pixels wide.
 
 When the viewport is 776-999 pixels wide, two columns will be
  displayed. 
 
On viewports narrower than 776 pixels, the layout switches to single-column, horizontally centered product cards.
 
 On viewports narrower than 396 pixels, the product cards shrink in size
  to fit the viewport width.

### Accessibility Design ###

![accessibility](https://terrymorse.com/public/wsicc-accessibility.gif
 "accessibility design")

It is possible to navigation through the page without a pointing device.

Pressing `tab` key will set the focus on the next product card's image.

Once a product card's image has focus, pressing the `enter` key will open the
 overlay with a carousel of that product's images.
 
Pressing `esc` closes the overlay and returns focus to the product card image.
 
Pressing `esc` a second time removes focus from the product card image.

#### Styling ####

The page styling is set in `wsiprods.css`. To enable
 easy changes to the appearance of the product cards, this file uses CSS custom
  properties (variables) for all the significant styles:
  
```css
/* modify wsi styling here */
body {
  --wsi-body-background-color: #f0f0f0;
  --wsi-container-background-color: #fff;
  --wsi-container-outline: 1px solid #bbb;
  --wsi-card-margin: 1rem 0.5rem;
  --wsi-card-width: 354px;
  --wsi-card-text-size: 0.85rem;
  --wsi-card-line-height: 1.2;
  --wsi-card-background-color: #fff;
  --wsi-card-border: 1px solid rgba(0,0,0,0.125);
  --wsi-card-hover-filter: drop-shadow(0 0 4px rgba(0,0,0,0.4));
  --wsi-card-img-focus-outline: 3px solid rgba(0,0,100,0.3);
  --wsi-card-flex-direction: row;
  --wsi-price-font-weight: 600;
  --wsi-sale-text-color: red;
  --wsi-overlay-max-width: 400px;
}
```
