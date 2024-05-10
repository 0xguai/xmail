import { createRouter, createWebHistory } from 'vue-router'
import PcView from '../views/PcView.vue'
import MobileView from '../views/MobileView.vue'

const _isMobile = () => {
  let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
  return flag;
}
let routes = []
if(_isMobile()){
  routes = [
    {
      path: '/',
      name: 'home',
      component: MobileView
    }]
}else{
  routes = [
    {
      path: '/',
      name: 'home',
      component: PcView
    }
  ]
}

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
