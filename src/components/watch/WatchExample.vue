<template>
        <div>
                <p>{{ count }}</p>
                <button @click="addOne">Add One</button>
                <button @click="minusOne">Minus One</button>
                <p> {{ oldVal }} </p>
                <p> {{ newVal }} </p>
                <hr />
                <div>anObj.foo: {{ anObj.foo }}</div>
                <div>anObj.bar: {{ anObj.bar }}</div>
                <button @click="switchObjValues">Switch values of foo and bar</button>
        </div>
</template>

<script lang="ts">
import { WatchHandler, WatchOptions } from 'vue'
import { Vue, Component, Watch } from '@/vue-script'

@Component({})
export default class WatchExample extends Vue {
        count = 0
        oldVal = `The previous count: ${this.count}`
        newVal = `The new count: ${this.count}`

        addOne(): void {
                this.count++
        }

        minusOne(): void {
                this.count--
        }

        @Watch('count')
        doCountWatchThings(newVal: number, oldVal: number) {
                this.oldVal = `The previous count: ${oldVal}`
                this.newVal = `The new count: ${newVal}`
        }

        anObj = {
                // placed here just for this example, class Data members should get declared at the top of the class declaration
                foo: 'foo',
                bar: 'bar',
        }

        switchObjValues() {
                this.anObj.foo === 'foo'
                        ? (this.anObj.foo = 'bar')
                        : (this.anObj.foo = 'foo')

                this.anObj.bar === 'bar'
                        ? (this.anObj.foo = 'foo')
                        : (this.anObj.foo = 'bar')
        }

        @Watch('anObj.foo')
        watchFooThings(newVal: string, oldVal: string) {
                // To watch a specific, deeply nested object property
                // You'll need to chain to it, like a.b.c
                // In this case, we're watchign anObj.foo
                console.log('old Foo value', oldVal)
                console.log('new Foo value', newVal)
        }

        @Watch('anObj', { deep: true })
        watchThingsDeeply(newVal, oldVal) {
                // If you want to watch for _any_ changes to an object or array
                // You'll need to pass the { deep: true } option
                console.log(oldVal)
                console.log(newVal)
        }
}
</script>
