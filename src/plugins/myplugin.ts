import Vue from 'vue'

const MyPlugin = (Vue, options): void => {
        Vue.prototype.$myplugin = {
                square: (x: number) => x * x,
        }
}

Vue.use(MyPlugin)
