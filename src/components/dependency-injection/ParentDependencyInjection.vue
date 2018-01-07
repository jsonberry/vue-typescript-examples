<template>
        <div>
                <child-depency-injection />
        </div>
</template>

<script lang="ts">
import { Vue, Component, Provide } from '@/vue-script'
import ChildDepencyInjection from '@/components/dependency-injection/ChildDepencyInjection.vue'

@Component({
        components: {
                ChildDepencyInjection,
        },
})
export default class ParentDepInject extends Vue {
        @Provide('foo1') foo1 = 'bar'
        @Provide('foo2') foo2 = 'baz'
}
</script>

