import Vue from 'vue'
import VueRouter from 'vue-router'
import ViewDesign from 'view-design'
import App from './App.vue'
import router from './router/index'
import SocketIO from 'vue-socket.io'
import ClientSocketIO  from 'socket.io-client'
import 'view-design/dist/styles/iview.css';
Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(ViewDesign);
Vue.use(
  new SocketIO({
    debug: false,  //开启调试模式
    connection: ClientSocketIO.connect('http://192.168.100.5:3000',{
      transports: ['websocket'] , //默认使用请求方式
      autoConnect: false,  //是否自动连接
    })
  })
)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')


