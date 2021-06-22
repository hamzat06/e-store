<template>
  <v-container fluid>
    <router-view></router-view>
    <v-row>
      <v-col cols="8">
        <CartList/>
      </v-col>
      <v-col cols="4">
        <OrderSummary/>
        <CheckOut/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CartList from '@/components/CartList'
import OrderSummary from '@/components/OrderSummary'
import CheckOut from '../components/CheckOut.vue'

export default {
  name: 'Cart',
  components: { CartList, OrderSummary, CheckOut }
}
</script>

<style lang="css" scoped>
</style>
