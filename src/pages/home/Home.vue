<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend
  }
}
</script>

<style scoped>
  .commodity{
    background: #cacaca;
  }
  .commodity .container{
    width : 100%;
    position: relative;
  }
  .commodity .container .swiText {
    position: absolute;
    height: 0.5rem;
    width: 0.5rem;
    bottom: 0.2rem;
    right: 0.3rem;
    font-size: 0.33rem;
    color: #ff382b;
    z-index: 10;
  }
  .commodity .container .swiImgs {
    width: 100%;
  }
  .commodity .container .swiImgs .item {
    height: 7.5rem;
    width : 80%;
    text-align: center;
  }
  .commodity .container .swiImgs .item .swiImg {
    height : 100%;
  }
</style>
