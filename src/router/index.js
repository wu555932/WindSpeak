
import VueRouter from 'vue-router'

const routes = [
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: "/home",
      name: 'HomePage',
      component: () => import('../view/Home.vue')
    },
    {
      path: "/login",
      name: "LoginPage",
      component: () => import('../view/Login.vue')
    }
]
export default  new VueRouter({
  routes
})
