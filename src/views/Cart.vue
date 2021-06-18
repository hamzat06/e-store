<template>
  <v-container fluid>
    <v-row>
      <v-col cols="8">
        <v-card
          class="mx-auto"
          outlined
        >
          <v-container fluid>
            <v-row>
              <v-col cols="7">
                <h2 class="text-h5 primary--text ml-2 font-weight-bold">Shopping Cart</h2>
                <v-divider></v-divider>
                <v-list-item three-line>
                  <v-list-item-avatar
                    tile
                    size="100"
                    color="grey"

                  ></v-list-item-avatar>
                    <v-list-item-content>
                      <div class="text-overline font-weight-light">
                        category
                      </div>
                      <v-list-item-title class="text-h5">
                        Headline 5
                      </v-list-item-title>
                      <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
                <v-col cols="3">
                  <h2 class="text-h6 primary--text lighten-1 ml-2">Price</h2>
                  <v-divider></v-divider>
                </v-col>
                <v-col cols="2">
                  <h2 class="text-h6 primary--text lighten-1 ml-2">Actions</h2>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-btn rounded outlined color="red" align="right" @click="removeFromCart(product)">
                      Remove
                    </v-btn>
                  </v-card-actions>
                </v-col>
              </v-row>
            </v-container>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card>
          <h2 class="ml-2 text-h6 primary--text font-weight-bold">Order Summary</h2>
          <v-divider></v-divider>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Cart'
}
</script>

<style lang="css" scoped>
</style>
