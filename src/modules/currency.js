import Vue from 'vue'

Vue.filter('currency', function(value, selectedCurrency){
  let formatter = new Intl.NumberFormat('en', {
    minimumFractionDigits: 0
  })
  if (selectedCurrency.abbr == 'USD') {
    return `$${formatter.format(value)}`
  }
  if (selectedCurrency.abbr == 'GBP') {
    return `£${formatter.format(value = value * 0.5) }`
  }
})

Vue.filter('json', function(value) {
  return JSON.stringify(value)
})