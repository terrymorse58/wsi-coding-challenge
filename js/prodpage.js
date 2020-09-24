// products page for Williams-Sonoma Coding Challenge

(function () {

  // assumption: json data is stored in same path as web page
  const pathMinusFile = location.pathname.substring(0,
    location.pathname.lastIndexOf('/'));
  const PRODUCTS_URL =
    `${location.protocol}//${location.hostname}:${location.port}` +
    `${pathMinusFile}/wsi-products.json`;

  const prodStore = new WSIProdStore(PRODUCTS_URL);
  const prodVM = WSIProductsVM('productsvm','carouselModal');

  // handle click on product image, which displays the overlay carousel
  function handleProductClick (evt) {
    const isProductImage = (el) =>
      el.tagName === 'IMG' && typeof el.dataset.id !== 'undefined';
    const target = evt.target;
    if (isProductImage(target) === false) {
      return;
    }
    const thisProduct = prodStore.getProduct(target.dataset.id);
    prodVM.showOverlay(thisProduct.name, thisProduct.images);
  }

  function addEventListeners () {

    // in order to detect a click on any one of the card images
    // add one event listener to the parent of the product cards
    const cardsParent = document.getElementById('products-container');
    cardsParent.addEventListener('click', handleProductClick);

    // accessibility: listen for 'enter' key events on images and convert
    // to click
    cardsParent.addEventListener('keydown', (e) => {
      const elem = e.target;
      if (e.key === 'Enter' && elem.tagName === 'IMG') {
        elem.click();
      }
    });

    // listen for hiding of overlay modal
    $('#carouselModal').on('hidden.bs.modal', () => {
      prodVM.hideOverlay();
    });
  }

  function addProdStoreToVM () {
    prodStore.productIds().forEach((id) => {
      prodVM.addProduct(prodStore.getVueProduct(id));
    });
  }

  window.addEventListener('load', () => {

    addEventListeners();

    prodStore.readProducts()
      .then(result => {
        if (result !== true) {
          throw 'unable to read products';
        }
        addProdStoreToVM();
      })
      .catch(err => alert(err)); // TODO change alert to modal dialog
  });

})();
