<template>
  <v-toolbar
    prominent
    tabs>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>
      <img class="logo" src="../../../../static/img/logo.png" alt="">
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <router-link to="/Search">
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
    </router-link>
    <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  .logo
    width 40%
</style>
