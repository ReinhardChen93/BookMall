<template>
  <v-app>
    <search-headers></search-headers>
    <search-list></search-list>
  </v-app>
</template>

<script>
import SearchHeaders from './components/Headers'
import SearchList from './components/List'

export default {
  name: 'Search',
  components: {
    SearchHeaders,
    SearchList
  }
}
</script>

<style scoped>

</style>
