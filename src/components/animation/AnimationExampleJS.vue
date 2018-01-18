<template>
        <div>
                <button @click="show = !show">Show/Hide List</button>
                <div>
                        <transition-group
                                v-on:before-enter="beforeEnter"
                                v-on:enter="enter"
                        >
                                <span
                                        v-show="show"
                                        :css="false"
                                        v-for="(thing, index) in stuff"
                                        :key="index"
                                        :data-index="index"
                                >
                                        {{thing}}
                                </span>
                        </transition-group>
                </div>
        </div>
</template>

<script lang="ts">
import { Vue, Component } from "@/vue-script"

@Component({})
export default class AnimationExampleJS extends Vue {
        stuff = ["pillow", "couch", "phone", "card"]
        show = false

        beforeEnter(el, done) {
                el.style.opacity = 0
                el.style.position = "relative"
                el.style.bottom = "-100px"
                console.log("attrs", el.dataset.index)
        }

        enter(el, done) {
                el.animate(
                        [
                                { bottom: "-100px", opacity: 0 },
                                { bottom: 0, opacity: 1 },
                        ],
                        {
                                duration:
                                        el.dataset.index == 0
                                                ? 1
                                                : 350 * el.dataset.index,
                                fill: "both",
                        },
                )
        }
}
</script>
