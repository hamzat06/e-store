<template>
  <v-footer
    dark
    padless
  >

    <v-container
      flat
      fluid
      class="primary white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        copyright &copy; {{ new Date().getFullYear() }} — <strong>E-Store</strong>
      </v-card-text>
    </v-container>
  </v-footer>
</template>

<script>
  export default {
    name: 'Footer',
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>
