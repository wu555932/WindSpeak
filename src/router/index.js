
import VueRouter from 'vue-router'

const routes = [
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: "/home",
      name: 'HomePage',
      component: () => import('../view/Home.vue'),
      children:[
        {
          path: "/socket",
          name: "SocketPage",
          component: ()=> import('../view/Socket.vue')
        },
        {
          path: "/datavisible",
          name: "DataVisible",
          component: ()=> import('../view/DataVisible.vue')
        },

      ]
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
