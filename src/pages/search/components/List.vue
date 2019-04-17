<template>
  <v-layout row>
    <v-flex>
      <v-card
        color="grey lighten-4"
        flat
        tile
        height="40px"
      >
        <v-toolbar  height="40px">
          <v-toolbar-title class="subheading">搜索记录</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items class="hidden-sm-and-down">
            <v-btn flat>Link One</v-btn>
            <v-btn flat>Link Two</v-btn>
            <v-btn flat>Link Three</v-btn>
          </v-toolbar-items>
        </v-toolbar>
      </v-card>
        <v-card >
          <v-list dense >
            <v-list-tile
              avatar
              ripple
              to="/detail"
            >
              <v-list-tile-action>
                <v-icon color="pink">star</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-title>hahah </v-list-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
</template>

<script>
export default {
  name: 'SearchList'
}
</script>

<style scoped>

</style>
