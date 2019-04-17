<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap class="detail-header align-center">
      <v-flex xs4>
        <v-img class="detail-img"
               src="https://www.dccomics.com/sites/default/files/styles/covers192x291/public/gn-covers/2019/04/CTWv1_CC_144-001_HD_5ca5299a751963.53054221.jpg?itok=NpjDKaZ_"></v-img>
      </v-flex>
      <v-flex xs8>
        <v-flex v-for="i in 4" :key="`4${i}`" xs12>
          <p class="detail-list text-xs-left">
            <v-icon dark left small>check_circle</v-icon> Following her near-miss
          </p>
        </v-flex>
        <v-layout row wrap justify-center>
          <v-flex xs5>
            <v-btn color="primary" class="detail-header-btn"  dark>
              取消订阅
            </v-btn>
          </v-flex>
          <v-flex xs5>
            <v-btn color="primary" class="detail-header-btn"  dark to="/matter">
              续看24话
            </v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'DetailHeader'
}
</script>

<style lang="stylus" scoped>
  .detail-header
    background #424242
    padding 0
    .detail-img
      width 100%
    .detail-list
      height 2rem
      line-height 2rem
      padding 0 2rem
      margin 0
      font-size 14px
      color white
    .detail-header-btn
      height 2rem
      line-height 2rem
      padding 0
      font-size 14px
</style>
