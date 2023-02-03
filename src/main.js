import Vant from 'vant';
import 'vant/lib/index.css';
import Vue from 'vue';
import App from './App.vue';

Vue.use(Vant);
new Vue({
  render: h => h(App)
}).$mount('#app');