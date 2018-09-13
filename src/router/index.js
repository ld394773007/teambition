import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('@/view/login')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/view/home'),
      children: [
        {
          name: '',
          path: '',
          component: () => import('@/view/project')
        }
      ]
    }
  ]
})
