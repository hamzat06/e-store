<template lang="html">
  <v-app-bar
    app
    color="primary"
    dark
  >
    <router-link
        to="/"
        tag="v-toolbar"
        class="cursor-pointer"
    >
      <v-toolbar-title class="font-weight-bold" to="/">E-Shop</v-toolbar-title>
    </router-link>

    <v-spacer></v-spacer>
      
    <CurrencyChange class="mt-3"/>

    <v-btn
      text
      to="/cart"
    >
      <v-badge
        color="red"
        :content="inCart.length"
        overlap
        v-if="inCart.length > 0"
      >
        <v-icon>mdi-cart</v-icon>
      </v-badge>
      <v-icon v-else>mdi-cart</v-icon>
      <span class="ml-2">Cart</span>
    </v-btn>
  </v-app-bar>
</template>

<script>
// import { mapState } from 'vuex'
import CurrencyChange from '@/components/CurrencyChange'

export default {
  name: 'Navbar',
  computed: {
    inCart() {
      return this.$store.getters.inCart
    },
  },
  components: { CurrencyChange }
}
</script>

<style lang="css" scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>
