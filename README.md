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


#### Technologies Used ####

 Name                      | Version | Usage
-------------------------- | ------- | -----
 Vue.js                    | 2.6.12  | production
 Bootstrap                 | 4.5.2   | production
 jQuery                    | 3.5.1   | production
 popper.js                 | 1.16.1  | production 
 image-gallery-overlay*    | 1.3.2   | production
 jest                      | 26.5.3  | dev test
 babel                     | 7.12.3  | dev test/build
 webpack                   | 4.44.2  | dev build
 postCSS                   | 8.1.1   | dev build
 
* [image-gallery-overlay](https://github.com/terrymorse58/image-gallery-overlay) - an internally developed custom web component

#### Installation ####

```bash
git clone https://github.com/terrymorse58/wsi-coding-challenge.git
cd wsi-coding-challenge
npm install
```
#### Launching the Page ###

This project build is installed on the Terry Morse Software, Inc. server and may
be run here:
 
[WSI Coding Challenge @ terrymorse.com](https://terrymorse.com/private/wsicodechallenge/index.html)

Or the development version can be run locally
:
```text
npm run dev
```

#### Tests ####
```text
npm run test
```

#### Directory Structure ####
```text
 Project
 |-- build
 |   |-- index.html
 |   |-- wsi-products.json
 |   |-- css
 |   |   |-- wsiprods.css
 |   |-- js
 |   |   |-- products.js
```

#### Responsive Design ####

![iPhone responsive layout](https://terrymorse.com/public/wsicc-iphone.png "1
-column layout")


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
 
The image gallery overlay is responsive to viewport width and height.

#### Accessibility Design ####

![accessibility](https://terrymorse.com/public/wsicc-accessibility.gif
 "accessibility design")

To permit page navigtion without a pointing device, navigation is
 supported using `tab`, `enter`, and `esc` keys.

Pressing the `tab` key sets the focus on the next product card's image, and an
 outline indicates which card image has focus. Pressing `esc` removes
 focus from the product image.

When a product card's image has focus, the `enter` key opens an
 overlay which displays a carousel of product images.
 
When the overlay image gallery is displayed, `esc` closes it and returns
 focus to the product card image.

#### Styling ####

Styling is managed in `wsiprods.css`. To permit easy changes to the apperance,
this file uses CSS custom properties (variables) for all the significant
 styles:
  
```css
/* modify wsi styling here */
:root {
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
    --wsi-card-hover-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
    --wsi-card-hover-transform: scale(1.015);
    --wsi-card-img-focus-outline: 3px solid rgba(30,144,255,0.5);
    --wsi-card-flex-direction: row;
    --wsi-price-font-weight: 600;
    --wsi-sale-text-color: red;
}
```

For browser compantibility, the build version replaces CSS custom properties
 with static values. 

#### Testimonial ####

This project was written entirely by me, Terry Morse, with no outside
 assistance.
 
Your comments or questions are welcome at
[tmorse@terrymorse.com](mailto:tmorse@terrymorse.com "Terry Morse email
 address").
 
 Terry Morse<br>
 President<br>
 Terry Morse Software, Inc.<br>
 Palo Alto, California, USA<br>
 [tmorse@terrymorse.com](mailto:tmorse@terrymorse.com)
