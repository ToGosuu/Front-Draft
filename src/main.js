import Vue from 'vue';
import App from './App.vue';
import router from './router'; // Importa el router configurado

Vue.config.productionTip = false;

new Vue({
  router, // Usa el router configurado en la instancia de Vue
  render: h => h(App)
}).$mount('#app');
