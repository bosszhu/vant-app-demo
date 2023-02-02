import Vant from 'vant';
import 'vant/lib/index.css';
import Vue from 'vue';
import App from './App.vue';

new Vue({
  render: h => h(App)
}).use(Vant).$mount('#app');