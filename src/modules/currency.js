import VueI18n from "vue-i18n"

const numberFormats = {
  'en-US': {
    currency: {
      style: 'currency',
      currency: 'USD'
    }
  },
  'en-UK': {
    currency: {
      style: 'currency',
      currency: 'GBP',
      currencyDisplay: 'symbol'
    }
  }
}

const i18n = new VueI18n({
  numberFormats
})

export default i18n