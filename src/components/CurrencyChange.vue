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
        ></v-select>
      </v-col>
    </v-row>
</template>

<script>
export default {
  name: 'CurrencyChange',
  data: () => ({
    select: { currency: 'Florida', abbr: 'USD' },
    items: [
      { currency: 'Dollar', abbr: 'USD' },
      { currency: 'Pounds Sterling', abbr: 'GBP' }
    ],
  }) 
}
</script>

<style>
.width-30 {
  width: 10px;
}
</style>