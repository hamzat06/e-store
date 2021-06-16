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
        isFavourite: false
      },
      {
        id: 2,
        name: 'iPhone X',
        price: 399,
        category: 'Phones',
        isFavourite: false
      },
      {
        id: 3,
        name: 'Vue Shirt',
        price: 70,
        category: 'Clothing'
      },
      {
        id: 4,
        name: 'MacBook Air 2017',
        price: 599,
        category: 'Laptops'
      },
      {
        id: 5,
        name: 'Samsung Galaxy A20',
        price: 499,
        category: 'Phones'
      },
      {
        id: 6,
        name: 'Play Station 3 Slim',
        price: 100,
        category: 'Console'
      },
      {
        id: 7,
        name: 'Vue Shorts',
        price: 30,
        category: 'Clothing'
      },
      {
        id: 8,
        name: 'X Box One',
        price: 200,
        category: 'Console'
      }
    ],
    count: 0
  },
  getters:{
    allProducts: state => {
      return state.products
    }
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  actions: {
  },
  modules: {
  }
})
