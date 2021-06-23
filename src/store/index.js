import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currencyChange: 2,
    products: [
      {
        id: 1,
        name: 'Vue Socks',
        currencyChange: 2,
        price: 27,
        category: 'Clothing',
        quantity: 1,
        addedToCart: false
      },
      {
        id: 2,
        name: 'iPhone X',
        price: 399,
        category: 'Phones',
        quantity: 1,
        addedToCart: false
      },
      {
        id: 3,
        name: 'Vue Shirt',
        price: 70,
        category: 'Clothing',
        quantity: 1,
        addedToCart: false
      },
      {
        id: 4,
        name: 'MacBook Air 2017',
        price: 299,
        category: 'Laptops',
        quantity: 1,
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
        quantity: 1,
        addedToCart: false
      },
      {
        id: 7,
        name: 'Vue Shorts',
        price: 30,
        category: 'Clothing',
        quantity: 1,
        addedToCart: false
      },
      {
        id: 8,
        name: 'X Box One',
        price: 287,
        category: 'Console',
        quantity: 1,
        addedToCart: false
      }
    ],
    inCart: [],
    snackbar: '',
    action: ''
  },
  getters:{
    allProducts: state => state.products,
    inCart: state => state.inCart,
    currencyChange: state => state.currencyChange,
    snackbar: state => state.snackbar,
    action: state => state.action
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
    },
    ADD_TO_CART: (state, product) => {
      let found = state.inCart.find(prod => prod.id == product.id)
      if (found) {
        product.addedToCart = true
      } else {
        state.inCart.push(product)
        product.addedToCart = true
      }
    },
    INCREASE_COUNT: (state, product) => {
      let found = state.inCart.find(prod => prod.id == product.id)
      if (found) {
        product.quantity++
        product.price = product.price * product.quantity
      }
    },
    DECREASE_COUNT: (state, product) => {
      let found = state.inCart.find(prod => prod.id == product.id)
      if (found) {
        if(product.quantity >= 1) {
          product.price = product.price / product.quantity
          if(product.quantity > 1) {
            product.quantity--
          }
        }
      }
    }
  },
  actions: {
    addToCart(context, product) {
      context.commit('ADD_TO_CART', product)
    },
    removeFromCart(context, product) {
      context.commit('REMOVE_FROM_CART', product)
    },
    increaseCount(context, product) {
      context.commit('INCREASE_COUNT', product)
    },
    decreaseCount(context, product) {
      context.commit('DECREASE_COUNT', product)
    }
  },
  modules: {
  }
})
