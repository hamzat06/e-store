<template lang="html">
  <v-card>
    <h2 class="ml-2 text-h6 primary--text font-weight-bold">
      Order Summary
    </h2>
    <v-divider></v-divider>
    <v-list-item-group>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="text-h6 mb-5">
            <span v-if="inCart.length == 1">{{ inCart.length }} Item</span>
            <span v-else>{{ quantity }} Items</span>
          </v-list-item-title>
          <v-list-item-title class="text-h6">
            Sub-total: <span>{{ productsPrice | currency(selected) }}</span>
          </v-list-item-title>
          <v-list-item-title class="text-h6">
            Tax: <span>{{ tax | currency(selected) }}</span>
          </v-list-item-title>
          
          <v-divider class="mt-5 mb-3"></v-divider>
          <v-list-item-title class="text-h6">
            Total: {{ calcSum | currency(selected) }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'OrderSummary',
  computed: {
    ...mapGetters({ inCart : 'inCart', selected: 'selected'}),
    calcSum() {
      let total = 0
      let quantity = 0
      this.$store.getters.inCart.forEach(product => {
        total += product.price 
        quantity += product.quantity
      })
      return total + (quantity * 1.5)
    },

    tax() {
      let quantity = 0
      this.$store.getters.inCart.forEach(product => {
        quantity += product.quantity
      })
      return quantity * 1.5 
    },
    quantity() {
      let quantity = 0
      this.$store.getters.inCart.forEach(product => {
        quantity += product.quantity
      })
      return quantity
    },
    productsPrice() {
      let subtotal = 0
      this.$store.getters.inCart.forEach(product => {
        subtotal += product.price
      })
      return subtotal
    }
   
  }
}
</script>

<style lang="css" scoped>
</style>
