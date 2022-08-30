import Vue from 'vue'
import VueRouter from 'vue-router'
import ViewDesign from 'view-design'
import App from './App.vue'
import router from './router/index'
import 'view-design/dist/styles/iview.css';
Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(ViewDesign);
(function(){
  // console.log("eeee");
  alert('eee')
})()
new Vue({
  render: h => h(App),
  router
}).$mount('#app')


