import Vue from 'vue';
import App from './App.vue';
import router from '@/routes';
import store from '@/store';
import { formatDate } from '@/utils/filters';

Vue.config.productionTip = false;
Vue.filter('formatDate', formatDate);

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');
