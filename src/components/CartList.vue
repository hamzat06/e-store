<template lang="html">
  <v-card
    class="mx-auto"
    outlined
  >
    <v-container fluid>
      <h2 class="text-h5 primary--text ml-2 font-weight-bold">Shopping Cart</h2>
      <v-row>
        <v-col cols="7">
          <v-divider></v-divider>
          <v-list-item three-line v-for="(product, index) in inCart" :key="product.id">
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
                <v-btn rounded outlined color="red" align="right" @click="removeFromCart(index)">
                  <v-icon class="mr-1">mdi-cart-minus</v-icon>
                  Remove
                </v-btn>
              </v-card-actions>
            </v-list-item>
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
    removeFromCart(index){
      this.$store.dispatch('removeFromCart', index)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
