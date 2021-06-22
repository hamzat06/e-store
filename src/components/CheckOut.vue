<template lang="html">
  <v-btn
    class="mt-3"
    color="success"
  >
    Proceed to Checkout
    <v-icon>mdi-chevron-right</v-icon>
  </v-btn>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CheckOut',
  data: () => ({
    api: 'http://localhost:3000/checkout/'
  }),
  methods: {
    async checkout () {
      let inCart = this.$store.getters.inCart
      const {data} = await axios.post(this.api, inCart)
      console.log(data)
    }
  }
}
</script>

<style>

</style>