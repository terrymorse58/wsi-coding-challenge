# Williams-Sonoma Coding Challenge #

Given a JSON file of products, build a page that displays for each
 product:

* product image
* product name
* product price

Display all products on a multi-column, responsive, accessible, and attractive
 page. Upon selection of a product image, display an overlay containing a
  carousel of product images.
  
![3-column layout](https://terrymorse.com/public/wscc-3-column.png "3-column
   layout")


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

This project is installed on the Terry Morse Software, Inc. server and may
be run here:
 
[WSI Coding Challenge @ terrymorse.com](https://terrymorse.com/private/wsicodechallenge/index.html)

Or it can be run locally using lite-server, which was installed above:
```bash
npm run dev
```

#### Tests ####
```bash
npm run test
```

#### Directory Structure ####
```text
 Project
 |-- index.html
 |-- css
 |   |-- wsiprods.css
 |-- js
 |   |-- products.js
 |   |-- products.store.js
 |   |-- products.store.test.js
 |   |-- products.vue.js
 |   |-- products.vue.test.js
```

#### Responsive Design ####

![iPhone responsive layout](https://terrymorse.com/public/wsicc-iphone.png "3
-column
 layout")


The page layout and dimensions of the product cards are responsive to viewport
width changes.
 
The product card default width is 354 pixels, which will display 3
 columns of cards on a viewport at least 1200 pixels wide.
 
When the viewport is 776-999 pixels wide, two columns will be
  displayed. 
 
On viewports narrower than 776 pixels, the layout changes to single-column,
horizontally centered product cards.
 
On viewports narrower than 396 pixels, the product cards shrink in size
 to fit the viewport width.

### Accessibility Design ###

![accessibility](https://terrymorse.com/public/wsicc-accessibility.gif
 "accessibility design")

To permit page navigtion without a pointing device, navigation is
 supported using `tab`, `enter`, and `esc` keys.

Pressing `tab` key sets the focus on the next product card's image, and an
 outline indicates which card image has focus. Pressing `esc` removes
 focus from the product image.

When a product card's image has focus, the `enter` key opens an
 overlay which displays a carousel of product images.
 
When the overlay is displayed, `esc` closes it and returns
 focus to the product card image.

#### Styling ####

Styling is set in `wsiprods.css`. To permit easy changes to the apperance,
this file uses CSS custom properties (variables) for all the significant
 styles:
  
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

#### Testimonial ####

This project was written entirely by me, Terry Morse, without outside
 assistance.
 
Your comments or questions are welcome at
[tmorse@terrymorse.com](mailto:tmorse@terrymorse.com "Terry Morse email
 address").
 
 Terry Morse<br>
 President<br>
 Terry Morse Software, Inc.<br>
 Palo Alto, California, USA<br>
 [tmorse@terrymorse.com](mailto:tmorse@terrymorse.com)
