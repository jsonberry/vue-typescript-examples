import Vue from "vue"
import Router, { RouterOptions } from "vue-router"
import { routes } from "./routes"

const opts: RouterOptions = {
        mode: "history", // https://router.vuejs.org/en/essentials/history-mode.html
        routes,
}

Vue.use(Router)

export default new Router(opts)
