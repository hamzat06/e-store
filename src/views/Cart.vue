<template>
  <v-container fluid>
    <router-view></router-view>
    <v-row>
      <v-col cols="8">
        <CartList/>
      </v-col>
      <v-col cols="4">
        <OrderSummary/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CartList from '@/components/CartList'
import OrderSummary from '@/components/OrderSummary'

export default {
  name: 'Cart',
  components: { CartList, OrderSummary }
}
</script>

<style lang="css" scoped>
</style>
