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
git clone https://github.com/terrymorse58/wsi-coding-chalenge.git
cd wsi-coding-chalenge
npm install
```
#### Opening Page ###
```bash
npm run dev
```
Or launch on server
[terrymorse.com](https://terrymorse.com/private/wsicodechallenge/index.html)

#### Running Test ####
```bash
npm run test
```

### Responsive Design ###

![iPhone responsive layout](https://terrymorse.com/public/wsicc-iphone.png "3
-column
 layout")


The layout and dimensions of the products cards are responsive to the viewport
 width.
 
The product cards have a default width of 354 pixels, which will display 3
 columns of cards on a viewport at least 1200 pixels wide.
 
 When the viewport is 776-999 pixels wide, two columns will be
  displayed. 
 
On viewports narrower than 776 pixels, the layout switches to single-column, horizontally centered product cards.
 
 On viewports narrower than 396 pixels, the product cards shrink in size
  accordingly.

### Accessibility Design ###

It is possible to navigation through the page without a pointing device.

Pressing `tab` key will set the focus on the next product card's image.

Once a product card's image has focus, pressing the `enter` key will open the
 overlay with a carousel of that product's images.
 
 Pressing `esc` closes the overlay and returns focus to the product card image.
 
 Pressing `esc` a second time removes focus from the product card image.
