<template>
  <div class="icons">
    <swiper >
      <!-- slides -->
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon"
             v-for="item of page"
             :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src='item.imgUrl' alt="">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList: [{
        id: '0001',
        imgUrl: '../../../../static/img/logo.png',
        desc: '少年漫画'
      }, {
        id: '0002',
        imgUrl: '../../../../static/img/logo.png',
        desc: '少女漫画'
      }, {
        id: '0003',
        imgUrl: '../../../../static/img/logo.png',
        desc: '热血漫画'
      }, {
        id: '0004',
        imgUrl: '../../../../static/img/logo.png',
        desc: '后宫漫画'
      }, {
        id: '0005',
        imgUrl: '../../../../static/img/logo.png',
        desc: '机战漫画'
      }, {
        id: '0006',
        imgUrl: '../../../../static/img/logo.png',
        desc: '魔神漫画'
      }, {
        id: '0007',
        imgUrl: '../../../../static/img/logo.png',
        desc: '科幻漫画'
      }, {
        id: '0008',
        imgUrl: '../../../../static/img/logo.png',
        desc: '体育漫画'
      }, {
        id: '0009',
        imgUrl: '../../../../static/img/logo.png',
        desc: '中二漫画'
      }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>>.swiper-container
    height:0
    padding-bottom 50%
  .icon
    position relative
    overflow hidden
    float left
    width 25%
    height: 0
    padding-bottom 25%
    .icon-img
      position absolute
      top:0
      left 0
      right 0
      bottom .44rem
      -webkit-box-sizing: border-box
      -moz-box-sizing: border-box
      box-sizing: border-box
      padding .1rem
      .icon-img-content
        display block
        margin 0 auto
        height 78%
    .icon-desc
      position absolute
      left 0
      right 0
      bottom 0
      height 1.44rem
      line-height 1.44rem
      text-align center
      margin-bottom 0
      color $darkTextColor
      ellipsis()
</style>
