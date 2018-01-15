<template>
        <div>
                <h1>path: components/lifecycles</h1>
                <p>{{ componentProperty }}</p>
                <button :class="style" @click="changeComponentProperty()">Trigger beforeUpdate / update Lifecycles</button>
                <p>By: {{ author }}</p>
        </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from '@/vue-script'
import { Component as ComponentInterface } from 'vue'
import axios from 'axios'
import CustomFormInput from '@/components/forms/CustomFormInput.vue'

import { BUTTON } from '@/style'
import { css } from 'emotion'

@Component({})
export default class LifecycleExamples extends Vue {
        componentProperty = 'foo'
        author = null // in Vue 2, properties need to be declared to fit into Vue's reactive system

        changeComponentProperty() {
                this.componentProperty =
                        this.componentProperty === 'foo' ? 'bar' : 'foo'
        }

        get style() {
                return css({
                        ...BUTTON,
                })
        }

        /**
         *      Called synchronously immediately after the instance has been initialized,
         *      before data observation and event/watcher setup.
         *      https://vuejs.org/v2/api/#beforeCreate
         *
         */
        beforeCreate() {
                // this.componentProperty does not exist yet
                console.log('beforeCreate', this.componentProperty)
        }

        /**
         *      Called synchronously after the instance is created. At this stage, the instance
         *      has finished processing the options which means the following have been set up: data
         *      observation, computed properties, methods, watch/event callbacks. However, the mounting
         *      phase has not been started, and the $el property will not be available yet.
         *      https://vuejs.org/v2/api/#created
         *
         */
        created() {
                // this.componentProperty is NOW available
                console.log('created', this.componentProperty)
        }

        /**
         *      Called right before the mounting begins: the render function is about to be called
         *      for the first time.
         *
         *      This hook is not called during server-side rendering.
         *      https://vuejs.org/v2/api/#beforeMount
         *
         */
        beforeMount() {
                console.log('beforeMount', this.componentProperty)
        }

        /**
         *      Called after the instance has been mounted, where el is replaced by the newly created vm.$el
         *
         *      Note that mounted does not guarantee that all child components have also been mounted.
         *      If you want to wait until the entire view has been rendered, you can use vm.$nextTick inside of mounted
         *      https://vuejs.org/v2/api/#mounted
         */
        mounted() {
                console.log('mounted', this.componentProperty)
        }

        /**
         *      Called when the data changes, before the virtual DOM is re-rendered and patched.
         *      You can perform further state changes in this hook and they will not trigger additional re-renders.
         *
         *      This hook is not called during server-side rendering.
         *      https://vuejs.org/v2/api/#beforeUpdate
         */
        beforeUpdate() {
                console.log('beforeUpdate', this.componentProperty)
        }

        /**
         *      Called after a data change causes the virtual DOM to be re-rendered and patched.
         *      The component’s DOM will have been updated when this hook is called, so you can
         *      perform DOM-dependent operations here. However, in most cases you should avoid
         *      changing state inside the hook. To react to state changes, it’s usually better
         *      to use a computed property or watcher instead.
         *
         *      This hook is not called during server-side rendering.
         *      https://vuejs.org/v2/api/#updated
         */
        updated() {
                console.log('updated', this.componentProperty)
        }

        /**
         *      Called when a kept-alive component is activated.
         *
         *      This hook is not called during server-side rendering.
         *      https://vuejs.org/v2/api/#activated
         */
        activated() {
                console.log('activated')
        }

        /**
         *      Called when a kept-alive component is deactivated.
         *
         *      This hook is not called during server-side rendering.
         *      https://vuejs.org/v2/api/#deactivated
         */
        deactivated() {
                console.log('deactivated')
        }

        /**
         *      Called right before a Vue instance is destroyed.
         *      At this stage the instance is still fully functional.
         *
         *      This hook is not called during server-side rendering.
         *      https://vuejs.org/v2/api/#beforeDestroy
         */
        beforeDestroy() {
                console.log('beforeDestroy', this.componentProperty)
        }

        /**
         *      Called after a Vue instance has been destroyed. When this hook is called,
         *      all directives of the Vue instance have been unbound, all event listeners have
         *      been removed, and all child Vue instances have also been destroyed.
         *
         *      This hook is not called during server-side rendering.
         *      https://vuejs.org/v2/api/#destroyed
         */
        destroyed() {
                console.log('destroyed', this.componentProperty)
        }

        errorCaptured(err: Error, vm: ComponentInterface, info: string) {
                console.log('errorCaptured')
        }

        /**
         *     TODO: Move the router lifecycle guards to the router section
         *      Vue Router In-Component Navigation Guards
         *      https://router.vuejs.org/en/advanced/navigation-guards.html
         */

        /**
         *      The beforeRouteEnter guard does NOT have access to this, because the guard is
         *      called before the navigation is confirmed, thus the new entering component has
         *      not even been created yet.
         */
        beforeRouteEnter(to, from, next) {
                // NO access to "this"
                // This will fail
                // console.log('beforeRouteEnter', this.componentProperty)
                console.log(
                        "beforeRouteEnter - kicking off HTTP request for Author name, don't load the route yet!",
                )
                axios
                        .get('https://api.myjson.com/bins/10hyj5')
                        .then(({ data: { author } }) => author) // Deep ES6 Parameter Destructuring
                        .then((author: string) => {
                                console.log(
                                        "beforeRouteEnter - faking 3 second async call, don't load the route yet!",
                                )
                                // Fake some more async time, route should wait 3 seconds to render
                                setTimeout(() => {
                                        // After the $nextTick, we have access to the Vue instance properties
                                        // beforeRouteEnter is the only guard that supports passing a callback to next
                                        next(vm => {
                                                console.log(
                                                        'beforeRouteEnter, inside the next callback, set the author and render the view!',
                                                )
                                                // this.author = author // this would fail, no access to the Vue instance yet
                                                vm.author = author
                                        })
                                }, 3000)
                        })
        }

        /**
         *      The leave guard is usually used to prevent the user from accidentally leaving the route with unsaved edits.
         *      The navigation can be canceled by calling next(false).
         */
        async beforeRouteLeave(to, from, next) {
                const answer = window.confirm(
                        '(beforeRouteLeave) Do you really want to leave? (Leaving will take 3 seconds)',
                )
                if (answer) {
                        // async/await being used here just as example, just to show it can be used with Vue Router Navigation Guards
                        await new Promise((resolve, reject) => {
                                setTimeout(() => {
                                        resolve(
                                                "Is that air you think you're breathing?",
                                        )
                                }, 3000)
                        })
                        next() // let me outta here!
                } else {
                        next(false) // oops no I wanna stay here!
                }
        }
}
</script>
