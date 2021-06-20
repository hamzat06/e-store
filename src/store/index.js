import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        name: 'Vue Socks',
        price: 27,
        category: 'Clothing',
        addedToCart: false
      },
      {
        id: 2,
        name: 'iPhone X',
        price: 399,
        category: 'Phones',
        addedToCart: false
      },
      {
        id: 3,
        name: 'Vue Shirt',
        price: 70,
        category: 'Clothing',
        addedToCart: false
      },
      {
        id: 4,
        name: 'MacBook Air 2017',
        price: 599,
        category: 'Laptops',
        addedToCart: false
      },
      {
        id: 5,
        name: 'Samsung Galaxy A20',
        price: 499,
        category: 'Phones',
        addedToCart: false
      },
      {
        id: 6,
        name: 'Play Station 3 Slim',
        price: 100,
        category: 'Console',
        addedToCart: false
      },
      {
        id: 7,
        name: 'Vue Shorts',
        price: 30,
        category: 'Clothing',
        addedToCart: false
      },
      {
        id: 8,
        name: 'X Box One',
        price: 200,
        category: 'Console',
        addedToCart: false
      }
    ],
    inCart: []
  },
  getters:{
    allProducts: state => state.products,
    inCart: state => state.inCart
  },
  mutations: {
    increment: state => state.count++,
    // ADD_TO_CART: (state, product) => state.inCart.push(product),
    REMOVE_FROM_CART: (state, product) => {
      let found = state.inCart.find(prod => prod.id == product.id)
      let productIndex = state.inCart.indexOf(product)
      if(found) {
        state.inCart.splice(productIndex, 1)
        product.addedToCart = false
      }
      //
    },
    ADD_TO_CART: (state, product) => {
      let found = state.inCart.find(prod => prod.id == product.id)
      if (found) {
        product.addedToCart = true
      } else {
        state.inCart.push(product)
        product.addedToCart = true
      }
    }
  },
  actions: {
    addToCart(context, product) {
      context.commit('ADD_TO_CART', product)
    },
    removeFromCart(context, product) {
      context.commit('REMOVE_FROM_CART', product)
    }
  },
  modules: {
  }
})
