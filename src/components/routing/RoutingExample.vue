<template>
        <div>
                <h1>Below is another router-view that has nested child routes</h1>
                <router-link :to="{path: '/router'}" >Back to Router page</router-link>
                <div :style="{margin: '1rem'}">
                        <!-- These all do the same thing -->
                        <router-link to="/router/one">Example One</router-link>
                        <router-link :to="{path: '/router/one'}">Example One</router-link>
                        <router-link :to="{name: 'Routing Example One'}">Example One</router-link>
                        <button @click="$router.push('/router/one')">Example One</button>
                </div>
                <div>
                        <router-link :to="{path: '/router/two'}" >Example Two</router-link>
                        <router-link to="/router/two" >Example Two</router-link>
                        <router-link :to="{name: 'Routing Example Two'}" >Example Two</router-link>
                        <button @click="$router.push('/router/two')">Example Two</button>
                </div>
                <router-view></router-view>
        </div>
</template>


<script lang="ts">
import { Vue, Component, Watch } from "@/vue-script"
import { Route } from "vue-router"

@Component({})
export default class RoutingExample extends Vue {
        /**
         *      Check /src/router/routes.ts and /src/router/index.ts to see examples of how you
         *      can use the type defs from Vue Router
         *
         *      Routing is an important topic
         *      The goal of this project is to showcase examples of the Vue API mixed with TypeScript
         *      With that in mind, I'm not going to dive deeply into routing
         *
         *      You can certainly enhance the routing inside the app with interfaces and enums and such
         *      I'll leave that to your imagination
         *
         *      To learn more about routing with vue-router, please check out the documentation:
         *      https://router.vuejs.org/
         */

        beforeRouteEnter(to: Route, from: Route, next) {
                // It _is_ important to note that these navigation guards don't work with vue-class-component unless you register them
                // Check out /src/hooks.ts to see how the Vue Router navigation guards were registered, and /src/main.ts for the bootstrapping
                console.log("beforeRouteEnter")
                next()
        }

        beforeRouteLeave(to: Route, from: Route, next) {
                console.log("beforeRouteLeave")
                next()
        }

        @Watch("$route")
        doThings(newVal, oldVal) {
                console.log(newVal)
        }
}
</script>
