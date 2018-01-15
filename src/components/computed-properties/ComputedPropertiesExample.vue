<template>
        <div>
                <p>This changes every second, causing a tick and re-rendering of the UI: {{ foo }}</p>
                <p>Computed: {{ fullNameComputed }}, # of times it gets computed: {{ computedCount }}</p>
                <p>Method: {{ fullNameMethod() }}, # of times it gets computed: {{ methodCount }}</p>
                <button @click="switchNames()">Switch first and last names, causing the computed value to recompute</button>
        </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from '@/vue-script'

@Component({})
export default class ComputedPropertiesExample extends Vue {
        firstName = 'Jason'
        lastName = 'Awbrey'
        foo = 'foo'
        intervalId = null
        computedCount = 0
        methodCount = 0

        /**
         *      I have yet to come up with _good_ reasons to use custom setters for computed properties
         *      I have set them up, I have seen other examples, but I don't like the patterns and have not found them useful
         *      Computed Property getters, on the other hand, have some good value:
         *
         *      1) They help create a computed property, based on the Vue instance data
         *      2) They cache the result of their computation, and only recompute if the original data changes
         *
         *      If you come up with a good reason for a setter, hit me up!
         *      @jsonberry
         */

        get fullNameComputed() {
                this.computedCount += 1
                return `${this.firstName} ${this.lastName}`
        }

        public fullNameMethod() {
                // never use a method in a template!
                this.methodCount += 1
                return `${this.firstName} ${this.lastName}`
        }

        public switchNames() {
                this.firstName === 'Jason'
                        ? (this.firstName = 'Awbrey')
                        : (this.firstName = 'Jason')

                this.lastName === 'Awbrey'
                        ? (this.lastName = 'Jason')
                        : (this.lastName = 'Awbrey')
        }

        mounted() {
                this.intervalId = setInterval(() => {
                        this.foo === 'foo'
                                ? (this.foo = 'bar')
                                : (this.foo = 'foo')
                }, 1000)
        }

        beforeDestroy() {
                clearInterval(this.intervalId)
        }
}
</script>
