import Vue from 'vue'
import App from './App.vue'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import router from './router';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
