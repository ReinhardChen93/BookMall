<template>
  <div>
    <matter-header></matter-header>
    <matter-swiper></matter-swiper>
    <matter-footer></matter-footer>
  </div>

</template>

<script>
import MatterHeader from './components/Header'
import MatterSwiper from './components/Swiper'
import MatterFooter from './components/Footer'
export default {
  name: 'Matter',
  components: {
    MatterHeader,
    MatterFooter,
    MatterSwiper
  }
}
</script>

<style scoped>

</style>
