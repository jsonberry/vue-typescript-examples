<template>
        <div>
                <div>{{ propString }}</div>
                <div>{{ propNumber }}</div>
                <div>{{ propBoolean }}</div>
                <div>{{ propNotPassed }}</div>
        </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from '@/vue-script'
import { AnExampleObject } from '@/types'

@Component({})
export default class PassingPropertiesDownExample extends Vue {
        @Prop() propString: string

        @Prop() propBoolean: boolean

        @Prop({ default: 'this is a default' })
        propNotPassed: string

        @Prop({
                validator(value: AnExampleObject) {
                        return value.foo === 'foo'
                },
        })
        propObject: AnExampleObject

        @Prop({
                default: 10,
                validator(value: number) {
                        return value > 10
                },
        })
        propNumber: number

        created() {
                // By typing the property, we get type inference
                // Try adding a "." to the end of "this.propObject" to see what is available
                console.log(this.propObject)
        }
}
</script>
