<template lang="html">
    <v-row align="right">
      <v-col
        class="d-flex"
        cols="4"
        sm="2"
      >
        <v-select
          v-model="select"
          :items="items"
          item-text="currency"
          item-value="abbr"
          label="currency"
          return-object
          @change="alertMe"
        ></v-select>
      </v-col>
    </v-row>
</template>

<script>
export default {
  name: 'CurrencyChange',
  data: () => ({
    select: { currency: 'Dollar', abbr: 'USD' },
    items: [
      { currency: 'Dollar', abbr: 'USD' },
      { currency: 'Pounds', abbr: 'GBP' }
    ],
  }),
  methods: {
    alertMe(){
      alert(this.select.currency)
    }
  }
}
</script>

<style>
.width-30 {
  width: 10px;
}
</style>
