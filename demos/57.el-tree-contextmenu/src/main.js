import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import VueContextMenu from '@xunlei/vue-context-menu'

Vue.use(VueContextMenu)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
