<template lang="html">
    <v-row align="right">
      <v-col
        class="d-flex"
        cols="4"
        sm="2"
      >
        <v-select
          v-model="select"
          :items="allCurrency"
          item-text="currency"
          item-value="abbr"
          label="currency"
          return-object
          @change="selectedCurrency(select)"
        ></v-select>
      </v-col>
    </v-row>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'CurrencyChange',
  data: () => ({
    select: '',
    allCurrency: []
  }),
  computed: {
    ...mapState({ selected: 'selected'})
  },
  created() {
    this.select = this.$store.getters.selected,
    this.allCurrency = this.$store.getters.allCurrency
  },
  methods: {
    selectedCurrency(select) {
      this.$store.dispatch('selectedCurrency', select)
    }
  }
}
</script>

<style>
.width-30 {
  width: 10px;
}
</style>
