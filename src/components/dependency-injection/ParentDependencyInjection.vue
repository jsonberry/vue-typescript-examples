<template>
        <div>
                <h1>path: components/dependency-injection</h1>
                <child-dependency-injection />
        </div>
</template>

<script lang="ts">
import { Vue, Component, Provide } from '@/vue-script'
import { ChildDependencyInjection } from '@/components'

@Component({
        components: {
                ChildDependencyInjection,
        },
})
export default class ParentDepInject extends Vue {
        @Provide('foo1') foo1 = 'bar'
        @Provide('foo2') foo2 = 'baz'
}
</script>
