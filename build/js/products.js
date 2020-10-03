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
/* harmony import */ var _node_modules_bootstrap_carousel_modal_carousel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/bootstrap-carousel-modal/carousel.js */ "./node_modules/bootstrap-carousel-modal/carousel.js");
// products page for Williams-Sonoma Coding Challenge



var carousel;
var JSON_FILE_NAME = 'wsi-products.json';
var PRODUCTS_URL = productsJsonUrl(JSON_FILE_NAME);
var prodStore = new _products_store_js__WEBPACK_IMPORTED_MODULE_0__["default"](PRODUCTS_URL);
var prodVM = Object(_products_vue_js__WEBPACK_IMPORTED_MODULE_1__["default"])('productsvm'); // forn the URL to the products json file
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
  var imgHrefs = thisProduct.images.map(function (image) {
    return image.href;
  });
  carousel.populate(thisProduct.name, imgHrefs);
  carousel.show();
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
} // respond to hiding of overlay modal


function addOverlayHideListener() {
  $('#carouselModal').on('hidden.bs.modal', function () {// no cleanup needed
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
    // install the overlay carousel
    carousel = new _node_modules_bootstrap_carousel_modal_carousel_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
      thumbnailHoverOutline: '2px solid dodgerblue'
    });
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
 * Vue app for displaying products in cards on page
 * @param {string} vmID - id of wrapper DOM element for vue model
 * @return {*}
 */
function WSIProductsVM(vmID) {
  var priceLabel = {
    regularPrice: 'Regular Price ',
    salePrice: 'Sale Price ',
    notOnSale: 'Price ',
    currencySymbol: '$'
  };
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
  return new Vue({
    el: "#".concat(vmID),
    data: {
      products: []
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
      }
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (WSIProductsVM);

/***/ }),

/***/ "./node_modules/bootstrap-carousel-modal/CSSEditableProps.js":
/*!*******************************************************************!*\
  !*** ./node_modules/bootstrap-carousel-modal/CSSEditableProps.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// editable css props for carousel modal
var CSSEditableProps = {
  modalMaxWidth: '400px',
  headerPadding: '0.25rem 1rem',
  headerParagraphMargin: '0',
  footerPadding: '0 1rem',
  thumbnailBtnPadding: '4px',
  thumbnailBtnMargin: '0 6px',
  thumbnailImgHeight: '60px',
  thumbnailImgHoverFilter: 'brightness(90%)',
  thumbnailBorder: 'none',
  thumbnailImgSelectedBorder: '1px solid #888',
  thumbnailSelectedOpacity: '60%',
  thumbnailSelectedFilter: 'grayscale(100%) blur(1px)'
};
/* harmony default export */ __webpack_exports__["default"] = (CSSEditableProps);

/***/ }),

/***/ "./node_modules/bootstrap-carousel-modal/CSSTemplate.js":
/*!**************************************************************!*\
  !*** ./node_modules/bootstrap-carousel-modal/CSSTemplate.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// css template for carousel modal
var CSSTemplate = "\n    .wsi-overlay {\n      max-width: {{modalMaxWidth}};\n    }\n\n    .wsi-overlay .modal-header {\n      padding: {{headerPadding}};\n    }\n\n    .wsi-overlay .modal-header p {\n      margin: {{headerParagraphMargin}};\n    }\n\n    .wsi-overlay .modal-footer {\n      padding: {{footerPadding}};\n    }\n\n    .wsi-overlay .div-thumbnails {\n      overflow-x: auto;\n      white-space: nowrap;\n      padding: 0.5rem 0 1rem 0;\n      background-color: transparent;\n    }\n    \n    .wsi-overlay .div-thumbnails button {\n      padding: {{thumbnailBtnPadding}};\n      margin: {{thumbnailBtnMargin}};\n      background-color: transparent;\n      border: none;\n    }\n    \n    .wsi-overlay .div-thumbnails button:focus {\n      outline: 2px solid dodgerblue;\n      filter: brightness(80%);\n    }\n    \n    .wsi-overlay .div-thumbnails img {\n      height: {{thumbnailImgHeight}};\n      width: auto;\n      margin: 0;\n      border: {{thumbnailBorder}};\n    }\n    \n    .wsi-overlay .div-thumbnails img:hover {\n      filter: {{thumbnailImgHoverFilter}};\n    }\n\n    .wsi-overlay .div-thumbnails img.selected {\n      cursor: default;\n      border: {{thumbnailImgSelectedBorder}};\n      opacity: {{thumbnailSelectedOpacity}};\n      filter: {{thumbnailSelectedFilter}};\n    }\n    \n    .carousel-container {\n      margin: 0;\n      position: relative;\n     }\n     .carousel-hero {}\n     .carousel-overlay {\n       position: absolute;\n       top: 0;\n       left: 0;\n       opacity: 0;\n       max-width: 100%;\n       height: auto;\n     }\n     .carousel-fade-in {\n       opacity: 1;\n       transition: opacity 1s;\n     }\n";
/* harmony default export */ __webpack_exports__["default"] = (CSSTemplate);

/***/ }),

/***/ "./node_modules/bootstrap-carousel-modal/HTMLTemplate.js":
/*!***************************************************************!*\
  !*** ./node_modules/bootstrap-carousel-modal/HTMLTemplate.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// HTML template for carousel modal - a Bootstrap modal with an image carousel
var HTMLTemplate = "\n  <div\n    id=\"carouselModal\"\n    tabindex=\"-1\"\n    class=\"modal fade\"\n    aria-modal=\"true\"\n    role=\"dialog\"\n    data-wrap=\"false\"\n  >\n    <div class=\"modal-dialog modal-dialog-centered wsi-overlay\">\n      <div class=\"modal-content\">\n      \n        <div class=\"modal-header\"><p><!-- name of product --></p>\n          <button type=\"button\"\n            data-dismiss=\"modal\"\n            aria-label=\"Close\"\n            class=\"close\"\n          >\n            <span aria-hidden=\"true\">\xD7</span>\n          </button>\n        </div> <!-- /.modal-header -->\n        \n        <div class=\"modal-body\">\n          <div\n            id=\"carousel-container\"\n            class=\"carousel-container\"\n          >\n            <img\n              id=\"carousel-hero\"\n              class=\"img-fluid\"\n              src=\"\"\n              alt=\"carousel hero\">\n            <img\n              id=\"carousel-overlay\"\n              class=\"carousel-overlay\"\n              alt=\"carousel overlay\"\n              data-in-transition=\"false\"\n              style=\"z-index: -1000\"\n              src=\"\"\n            >\n          </div> <!-- /.carousel-container -->\n        </div> <!-- /.modal-body -->\n\n        <div class=\"modal-footer\">\n          <div id=\"thumbnails-viewport\" class=\"div-thumbnails\"></div>\n        </div> <!-- /.modal-footer -->\n        \n      </div> <!-- /.modal-content -->\n    </div> <!-- /.modal-dialog -->\n  </div> <!-- /.modal -->\n";
/* harmony default export */ __webpack_exports__["default"] = (HTMLTemplate);

/***/ }),

/***/ "./node_modules/bootstrap-carousel-modal/carousel.js":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap-carousel-modal/carousel.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CSSTemplate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CSSTemplate.js */ "./node_modules/bootstrap-carousel-modal/CSSTemplate.js");
/* harmony import */ var _CSSEditableProps_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CSSEditableProps.js */ "./node_modules/bootstrap-carousel-modal/CSSEditableProps.js");
/* harmony import */ var _HTMLTemplate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HTMLTemplate.js */ "./node_modules/bootstrap-carousel-modal/HTMLTemplate.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// carousel overlay modal with thumbnails




function OverlayCarousel(userEditsToCSSProps) {
  var editableCSSProps = JSON.parse(JSON.stringify(_CSSEditableProps_js__WEBPACK_IMPORTED_MODULE_1__["default"]));
  var styleSheet = _CSSTemplate_js__WEBPACK_IMPORTED_MODULE_0__["default"].slice(0);
  var carouselModal,
      pHeader,
      imgHero,
      imgOverlay,
      carouselFooter,
      thumbnailsViewport,
      thumbnailImages = []; // apply user edits to editable css props

  function applyUserEditsToCSSProps() {
    if (typeof userEditsToCSSProps === 'undefined') {
      return;
    }

    for (var _i = 0, _Object$entries = Object.entries(userEditsToCSSProps); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          propName = _Object$entries$_i[0],
          value = _Object$entries$_i[1];

      if (typeof editableCSSProps[propName] === 'undefined') {
        continue;
      }

      editableCSSProps[propName] = value;
    }
  } // apply all css props to styleSheet


  function applyCSSPropsToStyleSheet() {
    for (var _i2 = 0, _Object$entries2 = Object.entries(editableCSSProps); _i2 < _Object$entries2.length; _i2++) {
      var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
          propName = _Object$entries2$_i[0],
          value = _Object$entries2$_i[1];

      var searchStr = "{{".concat(propName, "}}");
      var subStr = "".concat(value);
      styleSheet = styleSheet.replace(searchStr, subStr);
    }
  } // append HTML template to <body>


  function appendHTMLTemplateToBody() {
    var div = document.createElement('div');
    div.id = "carousel-modal-container";
    div.innerHTML = _HTMLTemplate_js__WEBPACK_IMPORTED_MODULE_2__["default"];
    document.body.appendChild(div);
    carouselModal = document.getElementById('carouselModal');
    pHeader = carouselModal.querySelector('.modal-header p');
    imgHero = document.getElementById('carousel-hero');
    imgOverlay = document.getElementById('carousel-overlay');
    thumbnailsViewport = document.getElementById('thumbnails-viewport');
    carouselFooter = carouselModal.querySelector('.modal-footer'); // set up the image fade

    imgOverlay.addEventListener('transitionend', completeImageFade); // react to hero image changes

    imgHero.addEventListener('change', function () {
      var heroIndex = Number(imgHero.dataset.index); // get all the thumbnail images
      // const thumbImgs = getAllThumbnails();
      // set (unset) the selected class for each thumbnail image

      var thumbSelected = updateThumbnailsSelectedClass(thumbnailImages, heroIndex); // scroll the thumbnails container

      scrollThumbnailsViewport(thumbSelected);
    });
  } // append style sheet to <head>


  function appendStyleSheetToHead() {
    var style = document.createElement('style');
    style.innerHTML = styleSheet;
    document.head.appendChild(style);
  } // populate overlay with name, carousel and thumbnail images


  function populate(name, hrefs) {
    pHeader.innerHTML = name; // populate the carousel and the thumbnails

    thumbnailsViewport.innerHTML = '';
    thumbnailImages = hrefs.map(function (href, index) {
      var btnThumb = document.createElement('button');
      thumbnailsViewport.appendChild(btnThumb);
      var imgThumb = document.createElement('img');
      imgThumb.dataset.index = index;
      imgThumb.src = href;
      btnThumb.appendChild(imgThumb);
      return imgThumb;
    }); // show thumbnails when there are multiple images

    var hasMultipleImages = hrefs.length > 1;
    carouselFooter.style.display = hasMultipleImages ? '' : 'none';
  } // show the carousel modal


  function show() {
    imgOverlay.dataset.inTransition = "false"; // make the display changes *before* showing the modal

    var firstThumb = thumbnailsViewport.querySelector('img');

    if (firstThumb === null) {
      console.error('no thumbnail images found');
      return;
    }

    displaySelectedImage(firstThumb, false);
    $('#carouselModal').modal('show');
  }
  /**
   * display in hero image the selected thumbnail image
   * @param {Element} thumbnailImg
   * @param {boolean} animate - animate the hero image transition
   */


  function displaySelectedImage(thumbnailImg) {
    var animate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    // don't change hero image if it is still in transition from an
    // earlier change
    if (imgOverlay.dataset.inTransition === "true") {
      console.error('hero image in transition, cannot change now');
      return;
    } // dispatch 'change' event to hero image, which will update thumbnails


    imgHero.dataset.index = thumbnailImg.dataset.index;
    var changeEvt = new Event('change');
    imgHero.dispatchEvent(changeEvt);
    imgOverlay.src = thumbnailImg.src;
    imgOverlay.dataset.index = thumbnailImg.dataset.index;

    if (animate) {
      // bring overlay to front and fade it in
      imgOverlay.dataset.inTransition = "true";
      imgOverlay.style.zIndex = "100";
      imgOverlay.classList.add('carousel-fade-in');
    } else {
      // just clean up without animation
      completeImageFade();
    }
  } // clean up display elements when image fade transition completes


  function completeImageFade() {
    // copy overlay image to hero image
    imgHero.src = imgOverlay.src; // send overlay to back and clean up

    imgOverlay.style.zIndex = "-1000";
    imgOverlay.src = "";
    imgOverlay.dataset.index = null;
    imgOverlay.dataset.inTransition = "false";

    if (imgOverlay.classList.contains('carousel-fade-in')) {
      imgOverlay.classList.remove('carousel-fade-in');
    }
  } // enter key press over thumbnail button emit thumbnail image click


  function listenForEnterKeyOverButton() {
    thumbnailsViewport.addEventListener('keydown', function (e) {
      if (e.key !== 'Enter') {
        return;
      }

      var elem = e.target;

      if (elem.tagName !== 'BUTTON') {
        return;
      }

      var btnImg = elem.firstChild;

      if (!btnImg || btnImg.tagName !== 'IMG') {
        return;
      }

      btnImg.click();
    });
  } // respond to clicks on thumbnail images inside 'div-thumbnails'


  function listenForThumbnailImageClicks() {
    thumbnailsViewport.addEventListener('click', function (evt) {
      var elClicked = evt.target;

      var isThumbnailImg = function isThumbnailImg(el) {
        return el.tagName === 'IMG' && typeof el.dataset.index !== 'undefined';
      };

      if (isThumbnailImg(elClicked) === false) {
        return;
      }

      displaySelectedImage(elClicked);
    });
  } // update the "selected" class of each thumbnail image


  function updateThumbnailsSelectedClass(thumbnails, carouselIndex) {
    var cIndex = Number(carouselIndex);
    var thumbSelected = null;
    thumbnails.forEach(function (img) {
      var thumbIndex = +img.dataset.index;

      if (thumbIndex === cIndex) {
        thumbSelected = img;
        thumbSelected.classList.add('selected');
        return;
      }

      img.classList.remove('selected');
    });
    return thumbSelected;
  }
  /**
   * scroll thumbnails viewport to show `thumbnail` in center of window
   * @param {Element} thumbnail
   */


  function scrollThumbnailsViewport(thumbnail) {
    if (!thumbnail) {
      return;
    }

    var windowHalfWidth = Math.round(thumbnailsViewport.clientWidth / 2);
    var tStyle = window.getComputedStyle(thumbnail);
    var thumbnailWidth = thumbnail.offsetWidth + parseFloat(tStyle.marginLeft) + parseFloat(tStyle.marginRight);
    var thumbnailCenterPosInViewport = thumbnail.offsetLeft + thumbnail.offsetWidth / 2; // scroll to place thumbnail in center of viewport window

    var scrollAmount = thumbnailCenterPosInViewport - windowHalfWidth - thumbnailWidth / 2;
    var divThumbnails = $('#thumbnails-viewport');

    if (divThumbnails.animate) {
      // console.log('scrollThumbnailsViewport using jQuery.animate()');
      divThumbnails.animate({
        scrollLeft: scrollAmount
      }, 500);
    } else if (divThumbnails.scrollLeft) {
      console.log('scrollThumbnailsViewport using fallback scrollLeft()');
      divThumbnails.scrollLeft(scrollAmount);
    } else {
      console.log('scrollThumbnailsViewport using fallback scroll()');
      divThumbnails.scroll(scrollAmount, 0);
    }
  }

  function init() {
    applyUserEditsToCSSProps();
    applyCSSPropsToStyleSheet();
    appendHTMLTemplateToBody();
    appendStyleSheetToHead();
    listenForThumbnailImageClicks();
    listenForEnterKeyOverButton();
  } // initialize


  init();
  return {
    populate: populate,
    show: show
  };
}

/* harmony default export */ __webpack_exports__["default"] = (OverlayCarousel);

/***/ })

/******/ });
//# sourceMappingURL=products.js.map