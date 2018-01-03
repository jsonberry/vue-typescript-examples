import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Plugins from './plugins'
import Filters from './filters'
import Directives from './directives';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
