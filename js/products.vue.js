/**
 * Vue app for displaying products with carousel image overlay
 * @param {string} vmID - id of wrapper DOM element for vue model
 * @param {string} overlayModalID - id of Bootstrap modal DOM element
 * @return {*}
 */
function WSIProductsVM (vmID, overlayModalID) {

  const priceLabel = {
    regularPrice: 'Regular Price ',
    salePrice: 'Sale Price ',
    notOnSale: 'Price ',
    currencySymbol: '$'
  };

  Vue.component('overlay-close-button', {
    template: `
      <button
        type="button"
        class="close"
        data-dismiss="modal"
        aria-label="Close"
      ><span aria-hidden="true">&times;</span></button>`
  });

  Vue.component('overlay-heading', {
    props: ['overlay'],
    template: `
      <div class="modal-header">
        <p v-html="overlay.name"></p>
        <overlay-close-button></overlay-close-button>
      </div>`
  });

  Vue.component('product-img', {
    props: ['product'],
    template: `
      <img
        v-bind:src="product.heroHref"
        v-bind:data-id="product.id"
        v-bind:alt="product.name"
        class="card-img-top"
        role="button"
        tabindex="0"
      >`
  });

  Vue.component('product-name', {
    props: ['name'],
    template: `
      <p class="card-text" v-html="name"></p>`
  });

  Vue.component('product-pricing', {
    props: ['displayprice'],
    template: `
      <p class="card-text" v-html="displayprice"></p>`
  })

  Vue.component('carousel-img', {
    props: ['image'],
    template: `
      <img
        v-bind:src="image.src"
        v-bind:alt="image.alt"
        class="img-fluid"
      >`
  });

  Vue.component('carousel-inner', {
    props: ['images'],
    template: `
      <div class="carousel-inner">
        <div v-for="image in images" class="carousel-item">
          <carousel-img v-bind:image="image"></carousel-img>
        </div>
      </div>`
  })

  Vue.component('carousel-control-prev', {
    props: ['href'],
    template: `
      <a
        class="carousel-control-prev"
        v-bind:href="href"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon"></span>
        <span class="sr-only">Previous</span>
      </a>`
  });

  Vue.component('carousel-control-next', {
    props: ['href'],
    template: `
      <a
        class="carousel-control-next"
        v-bind:href="href"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon"></span>
        <span class="sr-only">Next</span>
      </a>`
  });

  return new Vue({
    el: `#${vmID}`,
    data: {
      products: [],
      overlay: {
        name: '',
        images: [],
        activeElement: undefined
      }
    },

    computed: {
      overlayHasMultipleImages: function () {
        return this.overlay.images.length > 1;
      }
    },

    methods: {

      addProduct: function (product) {
        this.products.push(product);
        return this.products.length;
      },

      displayPrice: function (product) {

        const [regular, selling] = product.priceRange ?
          [product.priceRange.regular, product.priceRange.selling] :
          [product.price.regular, product.price.selling];

        const isOnSale = (reg, sale) => {
          return (typeof reg === 'number')
            ? reg !== sale
            : (reg.low !== sale.low || reg.high !== sale.high);
        };

        const priceString = (price) => {
          return (typeof price === 'number')
            ? `${priceLabel.currencySymbol}${price}`
            : `${priceLabel.currencySymbol}${price.low} - $${price.high}`;
        };

        if (isOnSale(regular, selling)) {
          return (
            `<span class="wsi-price">${priceLabel.regularPrice}
            ${priceString(regular)}</span><br/>
            <span class="wsi-price wsi-sale">${priceLabel.salePrice}
            ${priceString(selling)}</span>`
          );
        } else {
          return (
            `<span class="wsi-price">${priceLabel.notOnSale}
            ${priceString(regular)}</span>`
          );
        }
      },

      showOverlay: function (name, images) {
        this.overlay.activeElement = document.activeElement;
        this.overlay.name = name;
        this.overlay.images.splice(0, this.overlay.images.length);
        images.forEach((imageProduct, index) => {
          const imgVM = {
            src: imageProduct.href,
            alt: name
          };
          this.overlay.images.push(imgVM);
        });
        this.$nextTick(() => {
          // Bootstrap carousel requires one item to have 'active' class
          // so set first carousel item to 'active'
          const firstItem = document.querySelector('.carousel-item');
          firstItem.classList.add('active');

          // display the modal
          $(`#${overlayModalID}`).modal('show');
        });
      },

      hideOverlay: function () {
        // clear the overlay data
        this.overlay.name = '';
        this.overlay.images.splice(0, this.overlay.images.length);

        // restore focus to the formerly active element
        if (this.overlay.activeElement) {
          this.overlay.activeElement.focus();
        }
        this.overlay.activeElement = undefined;
      }
    }
  });
}

// export module for testing purposes only
if (typeof module !== 'undefined') {
  module.exports = WSIProductsVM;
}
