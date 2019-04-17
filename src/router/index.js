import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'
import Detail from '@/pages/detail/Detail.vue'
import Search from '@/pages/search/Search.vue'
import Matter from '@/pages/matter/Matter.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/matter',
      name: 'Matter',
      component: Matter
    }
  ]
})
