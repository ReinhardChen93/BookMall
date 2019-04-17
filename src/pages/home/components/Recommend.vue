<template>
    <div>
      <v-toolbar white color="primary">
        <v-btn icon>
          <v-icon >bookmarks</v-icon>
        </v-btn>

        <v-toolbar-title >我的订阅</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon color="white">more_vert</v-icon>
        </v-btn>
      </v-toolbar>
      <div class="wrapper">
        <swiper :options="swiperOption">
          <!-- slides -->
          <swiper-slide v-for="item in swiperList" :key="item.id">
            <router-link to="/detail">
              <div class="subscriber">
                <img class="subscriber-img" :src="item.imgUrl"/>
                <div>
                  <p class="subscriber-name">{{item.imgName}}</p>
                </div>
              </div>
            </router-link>
          </swiper-slide>
          <!-- Optional controls -->
        </swiper>
      </div>
    </div>

</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      swiperOption: {
        effect: 'coverflow',
        slidesPerView: 3,
        centeredSlides: true,
        slideToClickedSlide: true
      },
      swiperList: [
        {
          id: '0001',
          imgUrl: 'https://www.dccomics.com/sites/default/files/styles/covers192x291/public/comic-covers/2019/03/BM_68%20%28Cover%29-001_HD_5c9bb9a6007590.53615097.jpg?itok=jDKUeeKz',
          imgName: 'Superman’s Alfred Appreciation'

        },
        {
          id: '0002',
          imgUrl: 'https://www.dccomics.com/sites/default/files/styles/covers192x291/public/gn-covers/2019/04/CTWv1_CC_144-001_HD_5ca5299a751963.53054221.jpg?itok=NpjDKaZ_',
          imgName: 'Catwoman Corner'
        },
        {
          id: '0003',
          imgUrl: 'https://www.dccomics.com/sites/default/files/styles/covers192x291/public/comic-covers/2019/03/DTC_1001_300-001_HD_5c9d16b89bb880.55596478.jpg?itok=ovTAUe0B',
          imgName: 'Enter our Shazam! Sweepstakes'
        },
        {
          id: '0004',
          imgUrl: 'https://www.dccomics.com/sites/default/files/styles/covers192x291/public/comic-covers/2019/03/BM_68%20%28Cover%29-001_HD_5c9bb9a6007590.53615097.jpg?itok=jDKUeeKz',
          imgName: 'Enter our Shazam! Sweepstakes'
        }
      ]

    }
  }

}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom 100%
    background #eee
    .subscriber
      .subscriber-img
        width 140px
      .subscriber-name
        text-align center
        ellipsis()
</style>
