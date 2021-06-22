<template lang="html">
    <v-row align="right">
      <v-col
        class="d-flex"
        cols="4"
        sm="2"
      >
        <v-select
          v-model="currency"
          :items="items"
          label="Currency"
        >
        </v-select>
      </v-col>
    </v-row>
</template>

<script>
export default {
  name: 'CurrencyChange',
  data: () => ({
    currency: 'dollar',
    currencyChosen: ['naira'],
    items: ['usd', 'gbp'],
    value: ['usd']
  }) 
}
</script>

<style>
.width-30 {
  width: 10px;
}
</style>