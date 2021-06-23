import Vue from 'vue'

Vue.filter('currency', function(value, selectedCurrency){
  let formatter = new Intl.NumberFormat({
    minimumFractionDigits: 0
  })
  if (selectedCurrency.abbr == 'USD') {
    return `$${formatter.format(value)}`
  }
  if (selectedCurrency.abbr == 'GBP') {
    return `£${formatter.format(value = value * 0.72) }`
  }
  if  (selectedCurrency.abbr == 'NGN') {
    return `₦${formatter.format(value = value * 410.25) }`
  }
})

Vue.filter('json', function(value) {
  return JSON.stringify(value)
})