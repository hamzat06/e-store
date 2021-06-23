<template lang="html">
  <v-container>
    <h2 class="text-h5">Order View Page</h2>
    <span>  
      {{ checkout | json }}
    </span>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Orderview',
  computed: {
    ...mapGetters({ checkout: 'checkout' })
  }
}
</script>

<style lang="css" scoped>
</style>
