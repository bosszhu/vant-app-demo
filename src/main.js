import Vant from 'vant';
import 'vant/lib/index.css';
import Vue from 'vue';
import router from '../router/router';
import App from './App.vue';
//vant组件
Vue.use(Vant);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

// axios.defaults.baseURL = "/api"
