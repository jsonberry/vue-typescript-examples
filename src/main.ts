import './hooks'
import './filters'
import './plugins'
import './directives'

import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
        el: '#app',
        router,
        store,
        template: '<App/>',
        components: { App },
})
