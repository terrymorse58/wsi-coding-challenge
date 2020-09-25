// Import the `mount()` method from Vue Test Utils
import Vue from 'vue/dist/vue.js';
import WSIProductsVM from './products.vue';

const mockHead =
`<meta charset="utf-8">
<meta name="viewport"
  content="width=device-width, initial-scale=1, shrink-to-fit=no">
<title>Williams-Sonoma Coding Challenge - Terry Morse</title>`;

const mockBody =
`<header>
  <h1 class="wsi-h1 text-center">Williams-Sonoma Coding Challenge - Terry
    Morse</h1>
</header>
<main id="productsvm">
  <div id="products-container" class="container-lg wsi-container">
    <div v-for="product in products"
         class="card wsi-card"
         v-bind:key="product.id">
      <product-img v-bind:product="product"></product-img>
      <div class="card-body">
        <product-name v-bind:name="product.name"></product-name>
        <product-pricing v-bind:displayPrice="displayPrice(product)">
        </product-pricing>
      </div>
    </div>
  </div>
  <div class="modal fade" id="carouselModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered wsi-overlay">
      <div class="modal-content">
        <overlay-heading v-bind:overlay="overlay"></overlay-heading>
        <div class="modal-body">
          <div id="wsiCarousel"
             class="carousel slide"
             data-ride="carousel"
             data-interval="5000"
             data-wrap="true">
            <carousel-inner v-bind:images="overlay.images"></carousel-inner>
            <carousel-control-prev
              href="#wsiCarousel"
              v-show="overlayHasMultipleImages"
            ></carousel-control-prev>
            <carousel-control-next
              href="#wsiCarousel"
              v-show="overlayHasMultipleImages"
            ></carousel-control-next>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>`;

document.head.innerHTML = mockHead;
document.body.innerHTML = mockBody;
// console.log('document.head.innerHTML:', document.head.innerHTML);
// console.log('document.body.innerHTML:', document.body.innerHTML);

// did Vue import?
test(`import Vue from 'vue/dist/vue.js'`, () => {
  expect(Vue).toBeDefined();
});
global.Vue = Vue;

// did WSIProductsVM mount?
test(`import WSIProductsVM from './products.vue'`, () => {
  expect(WSIProductsVM).toBeDefined();
});

// create instance of WSIProductsVM
const prodVM = WSIProductsVM('productsvm', 'carouselModal');
test('create instance of WSIProductsVM', () => {
  expect(prodVM).toBeDefined();
});

// mock product
const mockProduct = {
  id: 'mock-product-0001',
  name: 'Mock Product',
  heroHref: 'https://picsum.photos/200',
  price: {
    regular: 45,
    selling: 19.95
  }
};

// add a product
test('add one product', () => {
  const productCount = prodVM.addProduct(mockProduct);
  expect(productCount).toBeGreaterThan(0);
});

// test displayPrice()
// expected result:
const trimWhitespace = (str) => str.replace(/\s\s+/g, ' ');
const expected = trimWhitespace(
  `<span class="wsi-price">Regular Price $45</span><br/>
  <span class="wsi-price wsi-sale">Sale Price $19.95</span>`
);
test('display price', () => {
  const result = prodVM.displayPrice(mockProduct);
  const resultTrimmed = trimWhitespace(result);
  expect(typeof result).toBe('string');
  expect(result.length).toBeGreaterThan(0);
  expect(resultTrimmed.localeCompare(expected)).toEqual(0);
});

// test overlayHasMultipleImages
test('overlayHasMultipleImages is false', () => {
  const hasMultiple = prodVM.overlayHasMultipleImages;
  expect(hasMultiple).toBe(false);
});
