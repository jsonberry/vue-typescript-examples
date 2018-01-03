import Vue from 'vue'

const MyPlugin = (Vue, options) => {
    Vue.prototype.$myplugin = options.phrase
}

Vue.use(MyPlugin, {phrase: 'Hello Bob'})
