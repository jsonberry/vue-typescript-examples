<template>
        <div>
                <p>{{ count }}</p>
                <button @click="addOne">Add One</button>
                <button @click="minusOne">Minus One</button>
                <p> {{ oldVal }} </p>
                <p> {{ newVal }} </p>
        </div>
</template>

<script lang="ts">
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
        doWatchThings(newVal: number, oldVal: number) {
                this.oldVal = `The previous count: ${oldVal}`
                this.newVal = `The new count: ${newVal}`
        }
}
</script>
