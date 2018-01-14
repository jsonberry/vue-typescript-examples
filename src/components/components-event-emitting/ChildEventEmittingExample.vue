<template>
        <div>
                <button @click="crossComponentEmission()">Click me to emit an event from a child component</button>
        </div>
</template>

<script lang="ts">
import { Vue, Component, Emit } from '@/vue-script'

@Component({})
export default class ChildEventEmittingExample extends Vue {
        @Emit('emission-from-child')
        crossComponentEmission(){}
}
</script>
