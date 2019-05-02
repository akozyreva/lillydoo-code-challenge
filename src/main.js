import Vue from 'vue'
import App from './App.vue'
Vue.prototype.$eventHub = new Vue(); // Global event bus

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
