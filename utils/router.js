import Vue from 'vue'
import Router from 'vue-router'
// 一级路由
import Main from '@Main'
import Login from '@Login'
// 二级路由，children 中的路由映射单独写在每个文件中
import Overview from './Overview'
import Manager from './Manager'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/main',
      name: 'main',
      component: Main,
      children: [
        ...Overview,
        ...Manager
      ]
    },
    {
      path: 'login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      redirect: '/login'
    }
  ]
})
