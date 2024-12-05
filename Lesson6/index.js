

var app = new Vue({
    el: '#app',
    data: {
      product: 'Socks',
      image: './images/socks_green.jpg',
      inStock: false,  // Challenge 6: When inStock is false, bind a class to the “Out of Stock” p tag that adds  text-decoration: line-through to that element.
      details: ['80% cotton', '20% polyester', 'Gender-neutral'],
      variants: [
        {
          variantId: 2234,
          variantColor: 'green',
          variantImage: './images/socks_green.jpg'
        },
        {
          variantId: 2235,
          variantColor: 'blue',
          variantImage: './images/socks_blue.jpg'
        }
      ],
      cart: 0
    },
    methods: {
      addToCart() {
        this.cart += 1
      },
      updateProduct(variantImage) {
        this.image = variantImage
      }
    }
  })
  
  