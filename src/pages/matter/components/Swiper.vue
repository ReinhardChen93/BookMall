<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <v-img height="100%"
          :src="item.imgUrl"
          alt="">
        </v-img>
      </swiper-slide>
    </swiper>
  </div>

</template>

<script>
export default {
  name: 'MatterSwiper',
  data () {
    return {
      swiperOption: {

      },
      swiperList: [
        {
          id: '0001',
          imgUrl: 'https://images.dmzj.com/b/%E8%9D%99%E8%9D%A0%E4%BE%A0%E7%BB%9D%E5%AF%B9%E6%81%90%E6%80%96/CH01/001.jpg',
          imgTitle: 'Superman’s Alfred Appreciation',
          imgMain: 'Batman isn’t the only one who depends on the witty and wise butler.'

        },
        {
          id: '0002',
          imgUrl: 'https://images.dmzj.com/b/%E8%9D%99%E8%9D%A0%E4%BE%A0%E7%BB%9D%E5%AF%B9%E6%81%90%E6%80%96/CH01/002.jpg',
          imgTitle: 'Catwoman Corner',
          imgMain: 'Joëlle Jones discusses what’s next for Selina Kyle.'
        },
        {
          id: '0003',
          imgUrl: 'https://images.dmzj.com/b/%E8%9D%99%E8%9D%A0%E4%BE%A0%E7%BB%9D%E5%AF%B9%E6%81%90%E6%80%96/CH01/003.jpg',
          imgTitle: 'Enter our Shazam! Sweepstakes',
          imgMain: 'In an instant, your life can change.'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    overflow hidden
    width 100%
    height 100%
    padding-bottom 100%
    background #eee
</style>
