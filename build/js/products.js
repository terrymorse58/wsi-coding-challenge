/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/products.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/products.js":
/*!************************!*\
  !*** ./js/products.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _products_store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products.store.js */ "./js/products.store.js");
/* harmony import */ var _products_vue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products.vue.js */ "./js/products.vue.js");
// products page for Williams-Sonoma Coding Challenge


var JSON_FILE_NAME = 'wsi-products.json';
var PRODUCTS_URL = productsJsonUrl(JSON_FILE_NAME);
var prodStore = new _products_store_js__WEBPACK_IMPORTED_MODULE_0__["default"](PRODUCTS_URL);
var prodVM = Object(_products_vue_js__WEBPACK_IMPORTED_MODULE_1__["default"])('productsvm', 'carouselModal'); // forn the URL to the products json file
// assumption: json file is stored in same path as web page

function productsJsonUrl(fileName) {
  var pathMinusFile = location.pathname.substring(0, location.pathname.lastIndexOf('/'));
  return "".concat(location.protocol, "//").concat(location.hostname, ":").concat(location.port) + "".concat(pathMinusFile, "/").concat(fileName);
} // display overlay carousel when product image is clicked


function handleProductClick(evt) {
  var isProductImage = function isProductImage(el) {
    return el.tagName === 'IMG' && typeof el.dataset.id !== 'undefined';
  };

  var target = evt.target;

  if (isProductImage(target) === false) {
    return;
  }

  var thisProduct = prodStore.getProduct(target.dataset.id);
  prodVM.showOverlay(thisProduct.name, thisProduct.images);
} // add all products in prodstore to Vue model


function addProdStoreToVM() {
  prodStore.productIds().forEach(function (id) {
    prodVM.addProduct(prodStore.getVueProduct(id));
  });
} // accessibility: listen for 'enter' key events on images and convert
// to click


function mapEnterKeysToClickEvent(cardsParent) {
  cardsParent.addEventListener('keydown', function (e) {
    var elem = e.target;

    if (e.key === 'Enter' && elem.tagName === 'IMG') {
      elem.click();
    }
  });
} // in order to detect a click on any one of the card images
// add one event listener to the parent of the product cards


function addImageClickListener(cardsParent) {
  cardsParent.addEventListener('click', handleProductClick);
} // listen for hiding of overlay modal


function addOverlayHideListener() {
  $('#carouselModal').on('hidden.bs.modal', function () {
    prodVM.hideOverlay();
  });
} // listen for escape key, then de-focus an active image


function addEscapeKeyListener() {
  document.addEventListener('keydown', function (evt) {
    if (evt.key !== 'Escape') {
      return;
    }

    if ($('#carouselModal').is(':visible')) {
      return;
    }

    if (document.activeElement) {
      document.activeElement.blur();
    }
  });
} // add all of our event listeners


function addEventListeners() {
  var cardsParent = document.getElementById('products-container');
  addImageClickListener(cardsParent);
  mapEnterKeysToClickEvent(cardsParent);
  addOverlayHideListener();
  addEscapeKeyListener();
} // initialize the page


function pageInit() {
  addEventListeners(); // read in products and add to Vue model

  prodStore.readProducts().then(function (result) {
    if (result !== true) {
      throw 'unable to read products';
    }

    addProdStoreToVM();
  }).catch(function (err) {
    return alert(err);
  }); // TODO replace alert with modal dialog
}

function initPageOnWindowLoad() {
  window.addEventListener('load', function () {
    pageInit();
  });
}

initPageOnWindowLoad();
/* harmony default export */ __webpack_exports__["default"] = (pageInit);

/***/ }),

/***/ "./js/products.store.js":
/*!******************************!*\
  !*** ./js/products.store.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * products store for Williams-Sonoma Coding Challenge
 * @param url
 * @return {{readProducts: (function(): Promise<boolean>), getVueProduct: (function(*): {heroHref: *, name: *, id: *}), getProduct: (function(*): *), productIds: (function(): string[])}}
 * @constructor
 */
function WSIProdStore(url) {
  var products;
  var jsonURL = url; // to enable effient access to a product by id,
  // reduce `productsRaw.groups` array
  // to object with property names of `id`

  var groupsToObject = function groupsToObject(obj, group) {
    obj[group.id] = group;
    return obj;
  }; // fetch a JSON file and convert to object


  function fetchJSON(fileURL) {
    // console.log(`fetchJSON("${fileURL}")`);
    var fetchOptions = {
      method: 'GET'
    };
    return fetch(fileURL, fetchOptions).then(function (response) {
      return response.json();
    }).catch(function (err) {
      console.error('fetchJSON fetch err:', err);
      throw err;
    });
  }
  /**
   * read products from JSON file
   * @return {Promise<boolean>}
   */


  function readProducts() {
    return fetchJSON(jsonURL).then(function (rawData) {
      products = rawData.groups.reduce(groupsToObject, {}); // console.log('readProducts products:', products);

      return true;
    }).catch(function (err) {
      console.error('readProducts err:', err);
      return false;
    });
  }
  /**
   * return array of product ids
   * @return {string[]}
   */


  function productIds() {
    return Object.keys(products);
  }
  /**
   * return a single product from store
   * @param productId
   * @return {Object}
   */


  function getProduct(productId) {
    return products[productId];
  }
  /**
   * return product object to be consumed by Vue
   * @param productId
   * @return {{heroHref: *, name: *, id: *}}
   */


  function getVueProduct(productId) {
    var product = products[productId];

    if (typeof product === 'undefined') {
      return undefined;
    }

    var vueProduct = {
      id: product.id,
      name: product.name,
      heroHref: product.hero.href
    };

    if (product.priceRange) {
      vueProduct.priceRange = product.priceRange;
    } else if (product.price) {
      vueProduct.price = product.price;
    }

    return vueProduct;
  }

  return {
    readProducts: readProducts,
    productIds: productIds,
    getProduct: getProduct,
    getVueProduct: getVueProduct
  };
}

/* harmony default export */ __webpack_exports__["default"] = (WSIProdStore);

/***/ }),

/***/ "./js/products.vue.js":
/*!****************************!*\
  !*** ./js/products.vue.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Vue app for displaying products with carousel image overlay
 * @param {string} vmID - id of wrapper DOM element for vue model
 * @param {string} overlayModalID - id of Bootstrap modal DOM element
 * @return {*}
 */
function WSIProductsVM(vmID, overlayModalID) {
  var priceLabel = {
    regularPrice: 'Regular Price ',
    salePrice: 'Sale Price ',
    notOnSale: 'Price ',
    currencySymbol: '$'
  };
  Vue.component('overlay-close-button', {
    template: "\n      <button\n        type=\"button\"\n        class=\"close\"\n        data-dismiss=\"modal\"\n        aria-label=\"Close\"\n      ><span aria-hidden=\"true\">&times;</span></button>"
  });
  Vue.component('overlay-heading', {
    props: ['overlay'],
    template: "\n      <div class=\"modal-header\">\n        <p v-html=\"overlay.name\"></p>\n        <overlay-close-button></overlay-close-button>\n      </div>"
  });
  Vue.component('product-img', {
    props: ['product'],
    template: "\n      <img\n        v-bind:src=\"product.heroHref\"\n        v-bind:data-id=\"product.id\"\n        v-bind:alt=\"product.name\"\n        class=\"card-img-top\"\n        role=\"button\"\n        tabindex=\"0\"\n      >"
  });
  Vue.component('product-name', {
    props: ['name'],
    template: "\n      <p class=\"card-text\" v-html=\"name\"></p>"
  });
  Vue.component('product-pricing', {
    props: ['displayprice'],
    template: "\n      <p class=\"card-text\" v-html=\"displayprice\"></p>"
  });
  Vue.component('carousel-img', {
    props: ['image'],
    template: "\n      <img\n        v-bind:src=\"image.src\"\n        v-bind:alt=\"image.alt\"\n        class=\"img-fluid\"\n      >"
  });
  Vue.component('carousel-inner', {
    props: ['images'],
    template: "\n      <div class=\"carousel-inner\">\n        <div v-for=\"image in images\" class=\"carousel-item\">\n          <carousel-img v-bind:image=\"image\"></carousel-img>\n        </div>\n      </div>"
  });
  Vue.component('carousel-control-prev', {
    props: ['href'],
    template: "\n      <a\n        class=\"carousel-control-prev\"\n        v-bind:href=\"href\"\n        role=\"button\"\n        data-slide=\"prev\"\n      >\n        <span class=\"carousel-control-prev-icon\"></span>\n        <span class=\"sr-only\">Previous</span>\n      </a>"
  });
  Vue.component('carousel-control-next', {
    props: ['href'],
    template: "\n      <a\n        class=\"carousel-control-next\"\n        v-bind:href=\"href\"\n        role=\"button\"\n        data-slide=\"next\"\n      >\n        <span class=\"carousel-control-next-icon\"></span>\n        <span class=\"sr-only\">Next</span>\n      </a>"
  });
  return new Vue({
    el: "#".concat(vmID),
    data: {
      products: [],
      overlay: {
        name: '',
        images: [],
        activeElement: undefined
      }
    },
    computed: {
      overlayHasMultipleImages: function overlayHasMultipleImages() {
        return this.overlay.images.length > 1;
      }
    },
    methods: {
      addProduct: function addProduct(product) {
        this.products.push(product);
        return this.products.length;
      },
      displayPrice: function displayPrice(product) {
        var _ref = product.priceRange ? [product.priceRange.regular, product.priceRange.selling] : [product.price.regular, product.price.selling],
            _ref2 = _slicedToArray(_ref, 2),
            regular = _ref2[0],
            selling = _ref2[1];

        var isOnSale = function isOnSale(reg, sale) {
          return typeof reg === 'number' ? reg !== sale : reg.low !== sale.low || reg.high !== sale.high;
        };

        var priceString = function priceString(price) {
          return typeof price === 'number' ? "".concat(priceLabel.currencySymbol).concat(price) : "".concat(priceLabel.currencySymbol).concat(price.low, " - $").concat(price.high);
        };

        if (isOnSale(regular, selling)) {
          return "<span class=\"wsi-price\">".concat(priceLabel.regularPrice, "\n            ").concat(priceString(regular), "</span><br/>\n            <span class=\"wsi-price wsi-sale\">").concat(priceLabel.salePrice, "\n            ").concat(priceString(selling), "</span>");
        } else {
          return "<span class=\"wsi-price\">".concat(priceLabel.notOnSale, "\n            ").concat(priceString(regular), "</span>");
        }
      },
      showOverlay: function showOverlay(name, images) {
        var _this = this;

        this.overlay.activeElement = document.activeElement;
        this.overlay.name = name;
        this.overlay.images.splice(0, this.overlay.images.length);
        images.forEach(function (imageProduct, index) {
          var imgVM = {
            src: imageProduct.href,
            alt: name
          };

          _this.overlay.images.push(imgVM);
        });
        this.$nextTick(function () {
          // Bootstrap carousel requires one item to have 'active' class
          // so set first carousel item to 'active'
          var firstItem = document.querySelector('.carousel-item');
          firstItem.classList.add('active'); // display the modal

          $("#".concat(overlayModalID)).modal('show');
        });
      },
      hideOverlay: function hideOverlay() {
        // clear the overlay data
        this.overlay.name = '';
        this.overlay.images.splice(0, this.overlay.images.length); // restore focus to the formerly active element

        if (this.overlay.activeElement) {
          this.overlay.activeElement.focus();
        }

        this.overlay.activeElement = undefined;
      }
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (WSIProductsVM);

/***/ })

/******/ });
//# sourceMappingURL=products.js.map