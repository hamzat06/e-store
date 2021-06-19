<template>
  <v-container fluid>
    <router-view></router-view>
    <v-row>
      <v-col cols="8">
        <CartList/>
      </v-col>
      <v-col cols="4">
        <v-card>
          <h2 class="ml-2 text-h6 primary--text font-weight-bold">Order Summary</h2>
          <v-divider></v-divider>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CartList from '@/components/CartList'

export default {
  name: 'Cart',
  components: { CartList }
}
</script>

<style lang="css" scoped>
</style>
