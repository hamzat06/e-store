<template lang="html">
  <v-container class="my-10">
    <v-row v-if="timeOut">
      <DummyLoader />
    </v-row>
    <v-row v-else>
      <v-col cols="3" v-for="product in products" :key="product.id">
        <v-card
          class="mx-auto"
          max-width="344"
        >
          <v-img src="https://via.placeholder.com/300.png" height="200"></v-img>

          <v-card-text>
            <h2 class="text-h6 primary--text" v-text="product.name"></h2>
            Travel to the best outdoor experience on planet Earth. A vacation you will never forget!
          </v-card-text>

          <v-card-text color="" class="font-weight-bold" v-text="product.category"></v-card-text>

          <v-card-title>
            <v-btn color="primary" rounded>
              <v-icon class="mr-2">mdi-cart</v-icon>
              Add to cart
            </v-btn>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import DummyLoader from '@/components/DummyLoader'

export default {
  name: 'ProductList',
  computed: {
    ...mapState(['products', 'count']),
  },
  data() {
    return {
      timeOut: true
    }
  },
  mounted() {
    setTimeout(() => (this.timeOut = false), 3000);
  },
  components: {
    DummyLoader
  }
}
</script>

<style lang="css" scoped>

</style>
