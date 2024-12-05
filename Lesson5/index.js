var app = new Vue({
    el: '#app',
    data: {
      product: 'Socks',
      image: './images/socks_green.jpg',
      inStock: true,
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
      },
      // Challenge 5: New method to decrement the value of `cart`
      removeFromCart() {    
        this.cart -= 1
      }
    }
  })
  
  