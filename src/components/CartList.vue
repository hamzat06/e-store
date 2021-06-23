<template lang="html">
  <v-card
    class="mx-auto"
    outlined
  >
    <v-container fluid>
      <h2 class="text-h5 primary--text ml-2 mb-3 font-weight-bold">Shopping Cart</h2>
      <v-row>
        <v-col cols="7" v-if="inCart.length > 0">
          <v-divider></v-divider>
          <v-list-item three-line v-for="(product) in inCart" :key="product.id" class="width-400">
            <v-list-item-avatar
              tile
              size="100"
              color="grey"

            >
              <v-img src="https://via.placeholder.com/300.png"></v-img>
            </v-list-item-avatar>
              <v-list-item-content>
                <div class="text-overline font-weight-light">
                  {{ product.name }}
                </div>
                <v-list-item-title class="text-h5">
                  {{ product.price | currency }}
                </v-list-item-title>
                <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
              </v-list-item-content>
              <v-card-actions>
                <v-btn rounded color="warning" align="right" @click="decrease(product)">
                  <v-icon class="mr-1">mdi-minus</v-icon>
                </v-btn>
                <span class="mx-2 text-h5">{{ product.quantity }}</span>
                <v-btn rounded color="primary" align="right" @click="increase(product)">
                  <v-icon class="mr-1">mdi-plus</v-icon>
                </v-btn>
              </v-card-actions>
              <v-card-actions column>
                <v-btn rounded outlined color="red" align="right" @click="removeFromCart(product)">
                  <v-icon class="mr-1">mdi-cart-minus</v-icon>
                  Remove
                </v-btn>
              </v-card-actions>
            </v-list-item>
          </v-col>
          <v-col cols="7" v-else class="ml-2">
            <v-divider class="mb-3"></v-divider>
            <v-text>Cart is empty</v-text>
          </v-col>
        </v-row>
      </v-container>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CartList',
  computed: mapGetters ({
    inCart: 'inCart'
  }),
  methods: {
    removeFromCart(product){
      this.$store.dispatch('removeFromCart', product)
    },
    increase(product) {
      this.$store.dispatch('increaseCount', product)
    },
    decrease(product) {
      this.$store.dispatch('decreaseCount', product)
    }
  }
}
</script>

<style lang="css" scoped>
.width-400 {
  width: 150%;
}
</style>
