<template>
  <v-card
    color="grey lighten-4"
    flat
    tile
  >
    <v-toolbar dense>
      <v-btn to="/detail" icon>
        <v-icon >reply</v-icon>
      </v-btn>

      <v-toolbar-title class="text-xs-center">24话</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>share</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  name: 'MatterHeader'
}
</script>

<style scoped>

</style>
