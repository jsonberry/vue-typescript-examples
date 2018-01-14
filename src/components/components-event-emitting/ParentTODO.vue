<template>
    <div>
        I'm in the parent
        <child @balls="balls($event)"/>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import Child from "@/components/Child.vue";

@Component({
    components: {
        Child
    }
})
export default class ParentComponent extends Vue {
        balls(balls) {
            console.log(balls)
        }
}
</script>
