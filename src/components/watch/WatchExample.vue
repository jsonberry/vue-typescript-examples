<template>
        <div>
                <p>{{ count }}</p>
                <button @click="addOne">Add One</button>
                <button @click="minusOne">Minus One</button>
                <p> {{ oldVal }} </p>
                <p> {{ newVal }} </p>
                <hr />
                <div :style="{border: barChanged ? '5px solid purple' : '5px solid white'}">
                        <div
                                :class="style"
                                :style="{border: fooChanged ? '5px solid yellow' : '5px solid white'}"
                        >
                                <p>
                                        anObj.foo: {{ anObj.foo }}
                                </p>
                                <span>
                                        {{ fooChanged ? 'Hey, foo changed!' : ''}}
                                </span>
                        </div>
                        <div
                                :class="style"
                        >
                                <p>
                                        anObj.bar: {{ anObj.bar }}
                                </p>
                                <span>
                                        {{ barChanged ? 'Hey, SOME property changed!' : ''}}
                                </span>
                        </div>
                </div>
                <button @click="changeObjectValues()">Change Both Object Values</button>
                <button @click="changeValue('foo', 'bar')">Change Foo</button>
                <button @click="changeValue('bar', 'foo')">Change Bar</button>
        </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "@/vue-script"
import { css } from "emotion"

@Component({})
export default class WatchExample extends Vue {
        count = 0
        oldVal = `The previous count: ${this.count}`
        newVal = `The new count: ${this.count}`
        fooChanged = null
        barChanged = null

        get style() {
                return css({
                        maxWidth: "200px",
                        margin: "0 auto",
                        padding: "1rem",
                })
        }

        addOne(): void {
                this.count++
        }

        minusOne(): void {
                this.count--
        }

        @Watch("count")
        doCountWatchThings(newVal: number, oldVal: number) {
                this.oldVal = `The previous count: ${oldVal}`
                this.newVal = `The new count: ${newVal}`
        }

        anObj = {
                // placed here just for this example, class Data members should get declared at the top of the class declaration
                foo: "foo",
                bar: "bar",
        }

        changeValue(value, changed) {
                this.anObj[value] === value
                        ? (this.anObj[value] = changed)
                        : (this.anObj[value] = value)
        }

        changeObjectValues() {
                this.changeValue("foo", "bar")
                this.changeValue("bar", "foo")
        }

        @Watch("anObj.foo")
        watchFooThings(newVal: string, oldVal: string) {
                // To watch a specific, deeply nested object property
                // You'll need to chain to it, like a.b.c
                // In this case, we're watchign anObj.foo
                this.fooChanged = true
                setTimeout(() => {
                        this.fooChanged = false
                }, 3000)
        }

        @Watch("anObj", { deep: true })
        watchThingsDeeply(newVal, oldVal) {
                // If you want to watch for _any_ changes to an object or array
                // You'll need to pass the { deep: true } option
                this.barChanged = true
                setTimeout(() => {
                        this.barChanged = false
                }, 3000)
        }
}
</script>
