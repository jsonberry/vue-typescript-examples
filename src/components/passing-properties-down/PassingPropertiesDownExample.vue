<template>
        <div>
                <passing-properties-down-example-child
                        :propString="aString"
                        :propNumber="aNumber"
                        :propBoolean="aBoolean"
                        :propObject="anObject"
                />
        </div>
</template>

<script lang="ts">
import { Vue, Component } from '@/vue-script'
import { PassingPropertiesDownExampleChild } from '@/components'
import { AnExampleObject } from '@/types'

@Component({
        components: {
                PassingPropertiesDownExampleChild,
        },
})
export default class PassingPropertiesDownExample extends Vue {
        aString = 'I am a string'
        aNumber = 0 // Anything below 10 will cause the prop validator in the child to fail
        aBoolean = false
        anObject: AnExampleObject = {
                foo: 'foo',
                bar: 'bar',
                // baz: 'baz', // this prop will fail, doesn't fit into the TypeScript interface for it, try putting it on to see the error
        }
}
</script>
