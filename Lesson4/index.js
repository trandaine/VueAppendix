//Add an array of sizes to the data and use v-for to display them in a list. 

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
          variantColor: 'green'    
        },
        {
          variantId: 2235,
          variantColor: 'blue'
        }
      ],
      sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL']     // Challenge 4: Add an array of sizes to the data and use v-for to display them in a list. 
    } 
  })
  
  