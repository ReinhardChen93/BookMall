<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img"
             :src="item.imgUrl"
             alt="">
        <div class="img-detail">
          <div class="img-detail-title">{{item.imgTitle}}</div>
          <div class="img-detail-main">{{item.imgMain}}</div>
        </div>
      </swiper-slide>

      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true,
        autoplay: true
      },
      swiperList: [
        {
          id: '0001',
          imgUrl: 'https://www.dccomics.com/sites/default/files/styles/trismall604x286/public/dc-hero_20190410_SuperHere_5cae7934d1e1a3.68486335.jpg?itok=DoUTPYZt',
          imgTitle: 'Superman’s Alfred Appreciation',
          imgMain: 'Batman isn’t the only one who depends on the witty and wise butler.'

        },
        {
          id: '0002',
          imgUrl: 'https://www.dccomics.com/sites/default/files/styles/trismall604x286/public/dc-hero_20190410_DCDaily_5cae79f0472c40.37087966.jpg?itok=XqszUTF_',
          imgTitle: 'Catwoman Corner',
          imgMain: 'Joëlle Jones discusses what’s next for Selina Kyle.'
        },
        {
          id: '0003',
          imgUrl: 'https://www.dccomics.com/sites/default/files/styles/trismall604x286/public/dc-hero_20190410_Shazam_Sweeps_5cae7a1e2658d2.31761860.jpg?itok=5HnmQfLJ',
          imgTitle: 'Enter our Shazam! Sweepstakes',
          imgMain: 'In an instant, your life can change.'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background #0282f9
  .wrapper >>> .swiper-pagination
    bottom 1rem
  .wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom 79%
    background #eee
    .swiper-img
      width 100%
    .img-detail
      height 9rem
      background #333333
      .img-detail-title
        padding  .8rem 2rem
        color: #0282f9
        font-size 22px
        line-height:22px
        font-weight bold
      .img-detail-main
        padding 0rem 2rem
        color #ffffff
        font-size 14px
</style>
