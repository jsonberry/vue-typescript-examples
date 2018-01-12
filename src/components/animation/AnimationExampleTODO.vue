<template>
    <div>
        I'm a child component
        <button @click="$emit('balls', 'button # 1')">button # 1</button>
        <button @click="$emit('balls', 'button # 2')">button # 2</button>
        <button v-on="{
            mouseup: handleMouseUp,
            mousedown: handleMouseDown,
        }">
            cool button
        </button>
        <button @click="show = !show">Show/Hide List</button>
        <transition-group
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
        >
            <h1
                v-show="show"
                v-bind:css="false"
                v-for="(s, i) in stuff"
                :key="i"
                :data-index="i"
            >
                {{s}}
            </h1>
        </transition-group>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class ChildComponent extends Vue {
        stuff = ['pillow', 'couch', 'phone', 'card']
        show = false

        beforeEnter(el, done) {
                // el.style = {
                //     position: 'relative',
                //     left: '-400px'
                // }

                el.style.position = 'relative'
                el.style.left = '-400px'
                console.log('attrs', el.dataset.index)
        }

        enter(el, done) {
                el.animate([{ left: '-400px' }, { left: 0 }], {
                        duration: 350 * el.dataset.index,
                })
        }

        handleStuff(stuff) {
                this.$emit('balls', stuff)
        }

        handleMouseDown() {
                this.$emit('balls', 'mousedown')
        }

        handleMouseUp() {
                this.$emit('balls', 'mouseup')
        }
}
</script>
