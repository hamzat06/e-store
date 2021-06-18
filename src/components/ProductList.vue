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

          <v-card-text class="pt-3">
            <h2 class="text-h6 primary--text" v-text="product.name"></h2>
            <p class="font-weight-bold mt-1">{{ product.price | currency }}</p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </v-card-text>

          <v-card-text class="font-weight-bold py-0" v-text="product.category"></v-card-text>

          <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon color="red" disabled>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon color="error" rounded @click="addToCart(product)" v-if="disabled">
                <v-icon>mdi-cart-minus</v-icon>
              </v-btn>

              <v-btn icon color="primary" rounded @click="addToCart(product)" v-else>
                <v-icon>mdi-cart-plus</v-icon>
              </v-btn>
            </v-card-actions>
          <v-card-title>
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
    ...mapState(['products']),
    // allProducts() {
    //   return this.$store.getters.allProducts
    // }
  },
  data() {
    return {
      timeOut: true,
      disabled: false
    }
  },
  mounted() {
    setTimeout(() => (this.timeOut = false), 3000);
  },
  methods: {
    addToCart: product => this.$store.dispatch('addToCart', product)
  },
  components: {
    DummyLoader
  }
}
</script>

<style lang="css" scoped>

</style>
