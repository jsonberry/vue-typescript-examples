import Vue from "vue"

const SquarePlugin = (Vue, options): void => {
        Vue.prototype.$square = (x: number) => Math.floor(x * x)
}

Vue.use(SquarePlugin)
