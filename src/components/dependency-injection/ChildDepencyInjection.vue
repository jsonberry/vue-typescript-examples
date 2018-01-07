<template>
        <div>
                <p>{{ foo }}</p>
                <p>By: {{ author }}</p>
        </div>
</template>

<script lang="ts">
import { Vue, Component, Inject } from '@/vue-script'

@Component({})
export default class ChildDepInject extends Vue {

        /**
         *      Try switching between the Injected "foo" values below
         *      Notice how the dependencies are set up in ParentDependencyInjection.vue
         *
         *      This let's us change the implemention of what "foo" is
         *      Without this component needing to be aware of it
         *
         *      This could be good for HTTP libraries like Axios, Fetch, or Vue Resource
         *      If the dependency was set up as "http", then in any component it was injected in
         *      It could be referred to as "this.http"
         *
         *      Usually this sort of behavior will be better solved with a Vue Plugin
         *      If we needed to provide a reuseable piece to only one section of the app
         *      Dependency Injection could work, and another method would be to use a Vue Mixin
         */
        // @Inject('foo1') foo
        @Inject('foo2') foo


        /**
         *      This is provided app wide
         *      The provider is setup in App.vue
         */
        @Inject() author
}
</script>

