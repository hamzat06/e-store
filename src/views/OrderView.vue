<template lang="html">
  <v-container>
    <h2 class="text-h5">Order View Page</h2>
    <span>  
      {{ inCart | json }}
    </span>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Orderview',
  filters: {
    json(value) {
      return JSON.stringify(value)
    }
  },
  computed: {
    ...mapGetters({ inCart: 'inCart' })
  }
}
</script>

<style lang="css" scoped>
</style>
