<template lang="html">
  <v-app-bar
    app
    color="primary"
    dark
  >
    <v-toolbar-title class="font-weight-bold">E-Shop</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn
      text
    >
      <v-icon>mdi-cart</v-icon>
      <span class="ml-2">Cart</span>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style lang="css" scoped>
</style>
