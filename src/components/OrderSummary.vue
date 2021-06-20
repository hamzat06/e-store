<template lang="html">
  <v-card>
    <h2 class="ml-2 text-h6 primary--text font-weight-bold">Order Summary <span>{{ inCart.count }}</span></h2>
    <v-divider></v-divider>
    <v-list-item-group>
    </v-list-item-group>
  </v-card>
</template>

<script>
export default {
  name: 'OrderSummary'
}
</script>

<style lang="css" scoped>
</style>
