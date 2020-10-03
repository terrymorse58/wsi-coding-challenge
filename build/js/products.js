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

/***/ "./js/carousel/CSSEditableProps.js":
/*!*****************************************!*\
  !*** ./js/carousel/CSSEditableProps.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// editable css props for carousel modal
var CSSEditableProps = {
  maxWidth: {
    property: 'max-width',
    value: '400px'
  },
  headerPadding: {
    property: 'padding',
    value: '0.25rem 1rem'
  },
  headerParagraphMargin: {
    property: 'margin',
    value: '0'
  },
  footerPadding: {
    property: 'padding',
    value: '0 1rem'
  },
  thumbnailHeight: {
    property: 'height',
    value: '60px'
  },
  thumbnailMargin: {
    property: 'margin',
    value: '0 8px'
  },
  thumbnailBorder: {
    property: 'border',
    value: '1px solid rgba(0,0,0,.125)'
  },
  thumbnailHoverOutline: {
    property: 'outline',
    value: '2px solid #aaa'
  },
  thumbnailSelectedOpacity: {
    property: 'opacity',
    value: '50%'
  },
  thumbnailSelectedFilter: {
    property: 'filter',
    value: 'grayscale(100%) blur(1px)'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (CSSEditableProps);

/***/ }),

/***/ "./js/carousel/CSSTemplate.js":
/*!************************************!*\
  !*** ./js/carousel/CSSTemplate.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// css template for carousel modal
var CSSTemplate = "\n    .wsi-overlay {\n      {{maxWidth}}\n    }\n\n    .wsi-overlay .modal-header {\n      {{headerPadding}}\n    }\n\n    .wsi-overlay .modal-header p {\n      {{headerParagraphMargin}}\n    }\n\n    .wsi-overlay .modal-footer {\n      {{footerPadding}}\n    }\n\n    .wsi-overlay .div-thumbnails {\n      overflow-x: auto;\n      white-space: nowrap;\n      padding: 0.5rem 0 1rem 0;\n      background-color: transparent;\n    }\n    \n    .wsi-overlay .div-thumbnails img {\n      {{thumbnailHeight}}\n      width: auto;\n      {{thumbnailMargin}}\n      {{thumbnailBorder}}\n    }\n\n    .wsi-overlay .div-thumbnails img:hover {\n      {{thumbnailHoverOutline}}\n    }\n\n    .wsi-overlay .div-thumbnails img.selected {\n      cursor: default;\n      outline: none;\n      {{thumbnailSelectedOpacity}}\n      {{thumbnailSelectedFilter}}\n    }\n";
/* harmony default export */ __webpack_exports__["default"] = (CSSTemplate);

/***/ }),

/***/ "./js/carousel/carousel.js":
/*!*********************************!*\
  !*** ./js/carousel/carousel.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CSSTemplate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CSSTemplate.js */ "./js/carousel/CSSTemplate.js");
/* harmony import */ var _CSSEditableProps_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CSSEditableProps.js */ "./js/carousel/CSSEditableProps.js");
/* harmony import */ var _htmltemplate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./htmltemplate.js */ "./js/carousel/htmltemplate.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// carousel overlay modal




function OverlayCarousel(userEditsToCSSProps) {
  // console.log('OverlayCarousel userEditsToCSSProps:', userEditsToCSSProps);
  var css = _CSSTemplate_js__WEBPACK_IMPORTED_MODULE_0__["default"].slice(0);
  var cssEdProps = JSON.parse(JSON.stringify(_CSSEditableProps_js__WEBPACK_IMPORTED_MODULE_1__["default"])); // apply passed in user edits to css props

  function applyUserEditsToCSSProps() {
    // console.log('applyUserEditsToCSSProps()');
    if (typeof userEditsToCSSProps === 'undefined') {
      return;
    }

    for (var _i = 0, _Object$entries = Object.entries(userEditsToCSSProps); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          propName = _Object$entries$_i[0],
          value = _Object$entries$_i[1];

      if (typeof cssEdProps[propName] === 'undefined') {
        continue;
      }

      cssEdProps[propName].value = value;
    }
  } // apply all css props to css


  function applyCSSPropsToCSS() {
    for (var _i2 = 0, _Object$entries2 = Object.entries(cssEdProps); _i2 < _Object$entries2.length; _i2++) {
      var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
          propName = _Object$entries2$_i[0],
          prop = _Object$entries2$_i[1];

      var searchStr = "{{".concat(propName, "}}");
      var subStr = "".concat(prop.property, ": ").concat(prop.value, ";");
      css = css.replace(searchStr, subStr);
    }
  } // append HTML template to end of <body>


  function appendTemplateToBody() {
    var div = document.createElement('div');
    div.id = "carousel-modal-container";
    div.innerHTML = _htmltemplate_js__WEBPACK_IMPORTED_MODULE_2__["default"];
    document.body.appendChild(div); // listen for carousel changes then update the DOM

    $('.carousel').on('slide.bs.carousel', function (evt) {
      var carouselIndex = Number(evt.relatedTarget.getAttribute('data-index')); // get all the thumbnail images

      var thumbImgs = getAllThumbnails(); // set (unset) the selected class for each thumbnail image

      var thumbSelected = updateThumbnailsSelectedClass(thumbImgs, carouselIndex); // scroll the thumbnails container

      scrollThumbnailsContainer(thumbSelected);
    });
  } // append style sheet to <head>


  function appendCSSToHead() {
    var style = document.createElement('style');
    style.innerHTML = css;
    document.head.appendChild(style);
  } // populate overlay with name, carousel and thumbnail images


  function populate(name, hrefs) {
    var pHeader = document.querySelector('.wsi-overlay .modal-header p');
    var carouselInner = document.querySelector('.wsi-overlay .carousel-inner');
    var thumbnails = document.querySelector('.wsi-overlay .div-thumbnails');
    pHeader.innerHTML = name; // populate the carousel and the thumbnails

    carouselInner.innerHTML = '';
    thumbnails.innerHTML = '';
    hrefs.forEach(function (href, index) {
      var carouselItem = document.createElement('div');
      carouselItem.className = 'carousel-item';

      if (index === 0) {
        carouselItem.classList.add('active');
      }

      carouselItem.dataset.index = index;
      carouselInner.appendChild(carouselItem);
      var img = document.createElement('img');
      img.src = href;
      img.alt = name;
      img.className = 'img-fluid';
      carouselItem.appendChild(img);
      var imgThumb = document.createElement('img');
      imgThumb.role = 'button';
      imgThumb.dataset.index = index;
      imgThumb.src = href;
      thumbnails.appendChild(imgThumb);
    }); // show thumbnails if there are multiple images

    var footer = document.querySelector('.wsi-overlay .modal-footer');
    var hasMultipleImages = hrefs.length > 1;
    footer.style.display = hasMultipleImages ? '' : 'none';
  } // show the carousel modal


  function show() {
    $('#carouselModal').modal('show'); // mark the first thumbnail image as selected

    var firstThumb = document.querySelector('.div-thumbnails img');

    if (firstThumb === null) {
      console.error('no thumbnail images found');
      return;
    }

    firstThumb.classList.add('selected'); //display the first image

    displaySelectedImage(firstThumb); // listen for thumbnail clicks

    listenForThumbnailClicks();
  } // display in carousel the selected thumbnail image


  function displaySelectedImage(thumbnailImg) {
    var imgIndex = Number(thumbnailImg.getAttribute('data-index'));
    $('.carousel').carousel(imgIndex);
  } // respond to clicks on thumbnail images inside 'div-thumbnails'


  function listenForThumbnailClicks() {
    var divThumbnails = document.querySelector('.div-thumbnails');
    divThumbnails.addEventListener('click', function (evt) {
      var elClicked = evt.target;

      var isThumbnailImg = function isThumbnailImg(el) {
        return el.tagName === 'IMG' && typeof el.dataset.index !== 'undefined';
      };

      if (isThumbnailImg(elClicked) === false) {
        return;
      }

      displaySelectedImage(elClicked);
    });
  } // get all thumbnail images


  function getAllThumbnails() {
    return Array.from(document.querySelectorAll('.div-thumbnails img'));
  } // update the "selected" class of all thumbnails


  function updateThumbnailsSelectedClass(thumbnails, carouselIndex) {
    var thumbSelected = null;
    thumbnails.forEach(function (img) {
      var thumbIndex = Number(img.getAttribute('data-index'));
      img.classList.remove('selected');

      if (thumbIndex === carouselIndex) {
        thumbSelected = img;
      }
    });

    if (thumbSelected) {
      thumbSelected.classList.add('selected');
    }

    return thumbSelected;
  }
  /**
   * scroll the thumbnails container left or right, based on the selected
   * thumbnail's position
   * @param {Element} thumb
   */


  function scrollThumbnailsContainer(thumb) {
    if (!thumb) {
      return;
    }

    var divThumb = document.querySelector('.div-thumbnails');
    var divMidpoint = Math.round(divThumb.clientWidth / 2);
    var divScroll = divThumb.scrollLeft;
    var tStyle = window.getComputedStyle(thumb);
    var tTotalWidth = thumb.offsetWidth + parseFloat(tStyle.marginLeft) + parseFloat(tStyle.marginRight);
    var thumbCenter = thumb.offsetLeft + thumb.offsetWidth / 2;
    var centerOffset = thumbCenter - divScroll; // if thumbnail is centered, do not scroll

    var thumbnailIsCentered = function thumbnailIsCentered() {
      return centerOffset >= divMidpoint - tTotalWidth / 2 && centerOffset <= divMidpoint + tTotalWidth / 2;
    };

    if (thumbnailIsCentered()) {
      return;
    }

    var scrollAmount = Math.sign(centerOffset - divMidpoint) * tTotalWidth; // console.log(`  divScroll: ${divScroll}, thumbCenter: ${thumbCenter}, ` +
    // ` centerOffset: ${centerOffset}, scrollAmount: ${scrollAmount}`);

    var divThumbnails = $('.div-thumbnails');

    if (divThumbnails.animate) {
      // console.log('scrollThumbnailsContainer using animate()');
      divThumbnails.animate({
        scrollLeft: divThumb.scrollLeft + scrollAmount
      }, 500);
    } else if (divThumbnails.scrollLeft) {
      // console.log('scrollThumbnailsContainer using scrollLeft()');
      divThumbnails.scrollLeft(divThumb.scrollLeft + scrollAmount);
    } else {
      console.log('scrollThumbnailsContainer using fallback scroll()');
      divThumbnails.scroll(divThumb.scrollLeft + scrollAmount, 0);
    }
  }

  function init() {
    // console.log('carousel.js init()');
    applyUserEditsToCSSProps();
    applyCSSPropsToCSS();
    appendTemplateToBody();
    appendCSSToHead();
  } // initialize


  init();
  return {
    populate: populate,
    show: show
  };
}

/* harmony default export */ __webpack_exports__["default"] = (OverlayCarousel);

/***/ }),

/***/ "./js/carousel/htmltemplate.js":
/*!*************************************!*\
  !*** ./js/carousel/htmltemplate.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// HTML template for carousel modal
var HTMLTemplate = "\n  <div\n    id=\"carouselModal\"\n    tabindex=\"-1\"\n    class=\"modal fade\"\n    aria-modal=\"true\"\n    role=\"dialog\"\n    data-wrap=\"false\"\n  >\n    <div class=\"modal-dialog modal-dialog-centered wsi-overlay\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\"><p><!-- name of product --></p>\n          <button type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\"\n                  class=\"close\"><span aria-hidden=\"true\">\xD7</span></button>\n        </div>\n        <div class=\"modal-body\">\n          <div\n            id=\"wsiCarousel\"\n            data-ride=\"carousel\"\n            class=\"carousel slide carousel-fade\"\n            data-interval=\"false\"\n          >\n            <div class=\"carousel-inner\">\n            <!--\n              <div class=\"carousel-item active\" data-index=\"0\">\n                <img src=\"...\" alt=\"...\" class=\"img-fluid\">\n              </div>\n            -->\n            </div>\n          </div> <!-- /.carousel -->\n        </div> <!-- /.modal-body -->\n\n        <div class=\"modal-footer\">\n          <div class=\"div-thumbnails\">\n          <!--\n            <img role=\"button\"\n              data-index=\"0\"\n              onclick=\"displaySelectedImage(this)\"\n              src=\"...\">\n          -->\n          </div>\n        </div> <!-- /.modal-footer -->\n      </div> <!-- /.modal-content -->\n    </div> <!-- /.modal-dialog -->\n  </div> <!-- /.modal -->\n";
/* harmony default export */ __webpack_exports__["default"] = (HTMLTemplate);

/***/ }),

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
/* harmony import */ var _carousel_carousel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carousel/carousel.js */ "./js/carousel/carousel.js");
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
    carousel = new _carousel_carousel_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
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
      products: [],
      overlay: {}
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

/***/ })

/******/ });
//# sourceMappingURL=products.js.map