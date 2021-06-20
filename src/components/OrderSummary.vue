<template lang="html">
  <v-card>
    <h2 class="ml-2 text-h6 primary--text font-weight-bold">
      Order Summary
    </h2>
    <v-divider></v-divider>
    <v-list-item-group>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            <span v-if="inCart.length == 1">{{ inCart.length }} Item</span>
            <span v-else>{{ inCart.length }} Items</span>
          </v-list-item-title>
          <v-list-item-title class="text-h6">
            Tax:
            <span v-if="tax = inCart.length < 1">{{ 0 | currency }}</span>
            <span v-else>{{ inCart.length * 3 | currency }}</span>
          </v-list-item-title>
          <v-divider class="mt-5"></v-divider>
          <v-list-item-title class="text-h6">
            Total
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
  data: () => ({
    tax: ''
  }),
  computed: {
    ...mapGetters({ inCart : 'inCart'})
  }
}
</script>

<style lang="css" scoped>
</style>
