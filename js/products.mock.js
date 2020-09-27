// mock things for testing purposes

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

function addMockDomToDocument () {
  document.head.innerHTML = mockHead;
  document.body.innerHTML = mockBody;
}

function mockVueProduct () {
  return {
    id: 'mock-product-0001',
    name: 'Mock Product',
    heroHref: 'https://picsum.photos/200',
    price: {
      regular: 45,
      selling: 19.95
    }
  };
}

function mockVueProductExpectedPrice () {
  const trimWhitespace = (str) => str.replace(/\s\s+/g, ' ');
  return trimWhitespace(
    `<span class="wsi-price">Regular Price $45</span><br/>
      <span class="wsi-price wsi-sale">Sale Price $19.95</span>`
  );
}

// mock fetch to instead respond with mockJSON
const mockJSON = {"id":"shop/new/all-new","name":"All New","categoryType":"subcat","groups":[{"id":"organic-tassel-stripe-bath-mat-dark-horseradish-b3234","name":"Organic Tassel Stripe Bath Mat - Dark Horseradish","links":{"www":"https://www.westelm.com/products/organic-tassel-stripe-bath-mat-dark-horseradish-b3234/"},"priceRange":{"regular":{"high":60,"low":40},"selling":{"high":48,"low":32},"type":"special"},"thumbnail":{"size":"m","meta":"","alt":"","rel":"thumbnail","width":363,"href":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202039/0013/organic-tassel-stripe-bath-mat-dark-horseradish-m.jpg","height":363},"hero":{"size":"m","meta":"","alt":"","rel":"hero","width":363,"href":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202039/0013/organic-tassel-stripe-bath-mat-dark-horseradish-m.jpg","height":363},"images":[{"size":"m","meta":"","alt":"","rel":"althero","width":363,"href":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202035/0077/organic-tassel-stripe-bath-mat-m.jpg","height":363},{"size":"m","meta":"","alt":"","rel":"althero","width":363,"href":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202036/0052/organic-tassel-stripe-bath-mat-m.jpg","height":363},{"size":"m","meta":"","alt":"","rel":"althero","width":363,"href":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202038/0151/organic-tassel-stripe-bath-mat-stone-white-m.jpg","height":363},{"size":"m","meta":"","alt":"","rel":"althero","width":363,"href":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202019/0034/west-elm-chelsea-bathroom-refresh-bundle-1-m.jpg","height":363},{"size":"m","meta":"","alt":"","rel":"althero","width":363,"href":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202039/0013/organic-tassel-stripe-bath-mat-dark-horseradish-1-m.jpg","height":363},{"size":"m","meta":"","alt":"","rel":"althero","width":363,"href":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202036/0053/organic-tassel-stripe-bath-mat-1-m.jpg","height":363},{"size":"m","meta":"","alt":"","rel":"althero","width":363,"href":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202035/0076/organic-tassel-stripe-bath-mat-m.jpg","height":363},{"size":"m","meta":"","alt":"","rel":"althero","width":363,"href":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202026/0006/organic-tassel-stripe-bath-mat-m.jpg","height":363},{"size":"m","meta":"","alt":"","rel":"althero","width":363,"href":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202026/0006/belgian-flax-linen-shower-curtain-m.jpg","height":363},{"size":"m","meta":"","alt":"","rel":"althero","width":363,"href":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202014/0951/organic-tassel-stripe-bath-mat-stone-white-m.jpg","height":363},{"size":"m","meta":"","alt":"","rel":"althero","width":363,"href":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202029/0066/organic-striped-arrow-edge-jacquard-shower-curtain-m.jpg","height":363}],"swatches":[],"messages":[],"flags":[{"bopisSuppress":false,"rank":11,"id":"new_colors"}],"reviews":{"recommendationCount":0,"likelihood":0,"reviewCount":0,"averageRating":0,"id":"organic-tassel-stripe-bath-mat-dark-horseradish-b3234","type":"GROUP_REVIEWS"}},{"id":"organic-tassel-stripe-bath-mat-sea-salt-blue-b3235","name":"Organic Tassel Stripe Bath Mat - Sea Salt Blue","links":{"www":"https://www.westelm.com/products/organic-tassel-stripe-bath-mat-sea-salt-blue-b3235/"},"priceRange":{"regular":{"high":60,"low":40},"selling":{"high":48,"low":32},"type":"special"},"thumbnail":{"size":"m","meta":"","alt":"","rel":"thumbnail","width":363,"href":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202039/0013/organic-tassel-stripe-bath-mat-sea-salt-blue-m.jpg","height":363},"hero":{"size":"m","meta":"","alt":"","rel":"hero","width":363,"href":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202039/0013/organic-tassel-stripe-bath-mat-sea-salt-blue-m.jpg","height":363},"images":[{"size":"m","meta":"","alt":"","rel":"althero","width":363,"href":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202035/0076/organic-tassel-stripe-bath-mat-m.jpg","height":363},{"size":"m","meta":"","alt":"","rel":"althero","width":363,"href":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202036/0053/organic-tassel-stripe-bath-mat-2-m.jpg","height":363},{"size":"m","meta":"","alt":"","rel":"althero","width":363,"href":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202035/0077/organic-tassel-stripe-bath-mat-m.jpg","height":363},{"size":"m","meta":"","alt":"","rel":"althero","width":363,"href":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202036/0052/organic-tassel-stripe-bath-mat-m.jpg","height":363},{"size":"m","meta":"","alt":"","rel":"althero","width":363,"href":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202038/0151/organic-tassel-stripe-bath-mat-stone-white-m.jpg","height":363},{"size":"m","meta":"","alt":"","rel":"althero","width":363,"href":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202019/0034/west-elm-chelsea-bathroom-refresh-bundle-1-m.jpg","height":363},{"size":"m","meta":"","alt":"","rel":"althero","width":363,"href":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202017/0047/organic-tassel-stripe-bath-mat-m.jpg","height":363},{"size":"m","meta":"","alt":"","rel":"althero","width":363,"href":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202026/0006/organic-tassel-stripe-bath-mat-m.jpg","height":363},{"size":"m","meta":"","alt":"","rel":"althero","width":363,"href":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202026/0006/belgian-flax-linen-shower-curtain-m.jpg","height":363},{"size":"m","meta":"","alt":"","rel":"althero","width":363,"href":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202014/0951/organic-tassel-stripe-bath-mat-stone-white-m.jpg","height":363},{"size":"m","meta":"","alt":"","rel":"althero","width":363,"href":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202029/0066/organic-striped-arrow-edge-jacquard-shower-curtain-m.jpg","height":363}],"swatches":[],"messages":[],"flags":[{"bopisSuppress":false,"rank":11,"id":"new_colors"}],"reviews":{"recommendationCount":0,"likelihood":0,"reviewCount":0,"averageRating":0,"id":"organic-tassel-stripe-bath-mat-sea-salt-blue-b3235","type":"GROUP_REVIEWS"}},{"id":"nomad-2-1-3-seat-sofa-86-5-h6651","name":"Nomad Sofa (86.5&quot;)","links":{"www":"https://www.westelm.com/products/nomad-2-1-3-seat-sofa-86-5-h6651/"},"price":{"regular":1395,"selling":1395},"thumbnail":{"size":"m","meta":"","alt":"","rel":"thumbnail","width":363,"href":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202039/0019/nomad-sofa-865-m.jpg","height":363},"hero":{"size":"m","meta":"","alt":"","rel":"hero","width":363,"href":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202038/0186/nomad-sofa-865-m.jpg","height":363},"images":[{"size":"m","meta":"","alt":"","rel":"althero","width":363,"href":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202038/0185/nomad-sofa-865-m.jpg","height":363}],"swatches":[],"messages":[],"flags":[{"bopisSuppress":false,"rank":3,"id":"newcore"}],"reviews":{"recommendationCount":0,"likelihood":0,"reviewCount":0,"averageRating":0,"id":"nomad-2-1-3-seat-sofa-86-5-h6651","type":"GROUP_REVIEWS"}},{"id":"nomad-2-1-4-seat-u-sectional-112-h6670","name":"Nomad Grand U Sectional (112&quot;)","links":{"www":"https://www.westelm.com/products/nomad-2-1-4-seat-u-sectional-112-h6670/"},"price":{"regular":2295,"selling":2295},"thumbnail":{"size":"m","meta":"","alt":"","rel":"thumbnail","width":363,"href":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202039/0019/nomad-grand-u-sectional-112-m.jpg","height":363},"hero":{"size":"m","meta":"","alt":"","rel":"hero","width":363,"href":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202038/0185/nomad-grand-u-sectional-112-m.jpg","height":363},"images":[{"size":"m","meta":"","alt":"","rel":"althero","width":363,"href":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202038/0186/nomad-grand-u-sectional-112-m.jpg","height":363}],"swatches":[],"messages":[],"flags":[{"bopisSuppress":false,"rank":3,"id":"newcore"}],"reviews":{"recommendationCount":0,"likelihood":0,"reviewCount":0,"averageRating":0,"id":"nomad-2-1-4-seat-u-sectional-112-h6670","type":"GROUP_REVIEWS"}},{"id":"nomad-2-1-3-seat-sofa-with-ottoman-86-5-h6652","name":"Nomad Sofa with Ottoman (86.5&quot;)","links":{"www":"https://www.westelm.com/products/nomad-2-1-3-seat-sofa-with-ottoman-86-5-h6652/"},"price":{"regular":1690,"selling":1690},"thumbnail":{"size":"m","meta":"","alt":"","rel":"thumbnail","width":363,"href":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202039/0019/nomad-sofa-with-ottoman-865-m.jpg","height":363},"hero":{"size":"m","meta":"","alt":"","rel":"hero","width":363,"href":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202038/0185/nomad-sofa-with-ottoman-865-m.jpg","height":363},"images":[{"size":"m","meta":"","alt":"","rel":"althero","width":363,"href":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202038/0185/nomad-sofa-with-ottoman-865-1-m.jpg","height":363}],"swatches":[],"messages":[],"flags":[{"bopisSuppress":false,"rank":3,"id":"newcore"}],"reviews":{"recommendationCount":0,"likelihood":0,"reviewCount":0,"averageRating":0,"id":"nomad-2-1-3-seat-sofa-with-ottoman-86-5-h6652","type":"GROUP_REVIEWS"}},{"id":"nomad-2-1-leather-4-seat-u-sectional-112-h6669","name":"Nomad Leather Grand U Sectional (112&quot;)","links":{"www":"https://www.westelm.com/products/nomad-2-1-leather-4-seat-u-sectional-112-h6669/"},"price":{"regular":3995,"selling":3995},"thumbnail":{"size":"m","meta":"","alt":"","rel":"thumbnail","width":363,"href":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202039/0020/nomad-leather-grand-u-sectional-112-m.jpg","height":363},"hero":{"size":"m","meta":"","alt":"","rel":"hero","width":363,"href":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202038/0185/nomad-leather-grand-u-sectional-112-1-m.jpg","height":363},"images":[{"size":"m","meta":"","alt":"","rel":"althero","width":363,"href":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202038/0185/nomad-leather-grand-u-sectional-112-m.jpg","height":363}],"swatches":[],"messages":[],"flags":[{"bopisSuppress":false,"rank":3,"id":"newcore"}],"reviews":{"recommendationCount":0,"likelihood":0,"reviewCount":0,"averageRating":0,"id":"nomad-2-1-leather-4-seat-u-sectional-112-h6669","type":"GROUP_REVIEWS"}},{"id":"nomad-2-1-leather-2-seat-sofa-with-ottoman-61-h6668","name":"Nomad Leather Loveseat with Ottoman (61&quot;)","links":{"www":"https://www.westelm.com/products/nomad-2-1-leather-2-seat-sofa-with-ottoman-61-h6668/"},"price":{"regular":1990,"selling":1990},"thumbnail":{"size":"m","meta":"","alt":"","rel":"thumbnail","width":363,"href":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202039/0019/nomad-leather-loveseat-with-ottoman-61-m.jpg","height":363},"hero":{"size":"m","meta":"","alt":"","rel":"hero","width":363,"href":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202038/0186/nomad-leather-loveseat-with-ottoman-61-m.jpg","height":363},"images":[{"size":"m","meta":"","alt":"","rel":"althero","width":363,"href":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202038/0185/nomad-leather-loveseat-with-ottoman-61-m.jpg","height":363}],"swatches":[],"messages":[],"flags":[{"bopisSuppress":false,"rank":3,"id":"newcore"}],"reviews":{"recommendationCount":0,"likelihood":0,"reviewCount":0,"averageRating":0,"id":"nomad-2-1-leather-2-seat-sofa-with-ottoman-61-h6668","type":"GROUP_REVIEWS"}},{"id":"nomad-2-1-leather-2-seat-chaise-sectional-61-h6667","name":"Nomad Leather Loveseat Reversible Chaise Sectional (61&quot;)","links":{"www":"https://www.westelm.com/products/nomad-2-1-leather-2-seat-chaise-sectional-61-h6667/"},"price":{"regular":2295,"selling":2295},"thumbnail":{"size":"m","meta":"","alt":"","rel":"thumbnail","width":363,"href":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202039/0019/nomad-leather-loveseat-reversible-chaise-sectional-61-m.jpg","height":363},"hero":{"size":"m","meta":"","alt":"","rel":"hero","width":363,"href":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202038/0186/nomad-leather-loveseat-reversible-chaise-sectional-61-m.jpg","height":363},"images":[{"size":"m","meta":"","alt":"","rel":"althero","width":363,"href":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202038/0186/nomad-leather-loveseat-reversible-chaise-sectional-61-1-m.jpg","height":363}],"swatches":[],"messages":[],"flags":[{"bopisSuppress":false,"rank":3,"id":"newcore"}],"reviews":{"recommendationCount":0,"likelihood":0,"reviewCount":0,"averageRating":0,"id":"nomad-2-1-leather-2-seat-chaise-sectional-61-h6667","type":"GROUP_REVIEWS"}},{"id":"nomad-2-1-leather-2-seat-sofa-61-h6666","name":"Nomad Leather Loveseat (61&quot;)","links":{"www":"https://www.westelm.com/products/nomad-2-1-leather-2-seat-sofa-61-h6666/"},"price":{"regular":1495,"selling":1495},"thumbnail":{"size":"m","meta":"","alt":"","rel":"thumbnail","width":363,"href":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202039/0019/nomad-leather-loveseat-61-m.jpg","height":363},"hero":{"size":"m","meta":"","alt":"","rel":"hero","width":363,"href":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202038/0185/nomad-leather-loveseat-61-1-m.jpg","height":363},"images":[{"size":"m","meta":"","alt":"","rel":"althero","width":363,"href":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202038/0185/nomad-leather-loveseat-61-m.jpg","height":363}],"swatches":[],"messages":[],"flags":[{"bopisSuppress":false,"rank":3,"id":"newcore"}],"reviews":{"recommendationCount":0,"likelihood":0,"reviewCount":0,"averageRating":0,"id":"nomad-2-1-leather-2-seat-sofa-61-h6666","type":"GROUP_REVIEWS"}},{"id":"nomad-2-1-leather-4-seat-sofa-with-ottoman-112-h6665","name":"Nomad Leather Grand Sofa with Ottoman (112&quot;)","links":{"www":"https://www.westelm.com/products/nomad-2-1-leather-4-seat-sofa-with-ottoman-112-h6665/"},"price":{"regular":2990,"selling":2990},"thumbnail":{"size":"m","meta":"","alt":"","rel":"thumbnail","width":363,"href":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202039/0019/nomad-leather-grand-sofa-with-ottoman-112-m.jpg","height":363},"hero":{"size":"m","meta":"","alt":"","rel":"hero","width":363,"href":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202038/0185/nomad-leather-grand-sofa-with-ottoman-112-m.jpg","height":363},"images":[{"size":"m","meta":"","alt":"","rel":"althero","width":363,"href":"https://assets.weimgs.com/weimgs/rk/images/wcm/products/202038/0185/nomad-leather-grand-sofa-with-ottoman-112-1-m.jpg","height":363}],"swatches":[],"messages":[],"flags":[{"bopisSuppress":false,"rank":3,"id":"newcore"}],"reviews":{"recommendationCount":0,"likelihood":0,"reviewCount":0,"averageRating":0,"id":"nomad-2-1-leather-4-seat-sofa-with-ottoman-112-h6665","type":"GROUP_REVIEWS"}}],"totalPages":47,"categories":[]};
let unmockedFetch;
function mockFetchToProducts () {
  unmockedFetch = global.fetch;
  global.fetch = () => Promise.resolve({ json: () => mockJSON });
}
function unMockFetch () {
  global.fetch = unmockedFetch;
}

export {
  addMockDomToDocument,
  mockVueProduct,
  mockVueProductExpectedPrice,
  mockFetchToProducts,
  unMockFetch
};
