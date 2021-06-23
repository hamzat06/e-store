<template lang="html">
  <v-btn
    class="mt-3"
    color="success"
    :disabled="inCart.length < 1"
    @click="checkout"
  >
    Proceed to Checkout
    <v-icon>mdi-chevron-right</v-icon>
  </v-btn>
</template>

<script>
import { mapGetters } from 'vuex'
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
      .then(this.$router.push('/cart/orderview'))
      .then(this.$store.dispatch('clearCart'))

      console.log(data)
    }
  },
  computed: {
    ...mapGetters({ inCart: 'inCart' })
  }
}
</script>

<style>

</style>