<template>
  <v-footer
    fixed
    height="auto"
  >
    <v-layout
      row
      wrap
    >
      <v-flex xs4 text-xs-center>
        <v-btn flat>
          <v-icon>
            build
          </v-icon>
        </v-btn>
      </v-flex>
      <v-flex xs4 text-xs-center>
        <v-btn flat>
          <v-icon>
            view_list
          </v-icon>
        </v-btn>
      </v-flex>
      <v-flex xs4 text-xs-center>
        <v-btn flat>
          <v-icon>
            textsms
          </v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  name: 'MatterFooter'
}
</script>

<style scoped>

</style>
