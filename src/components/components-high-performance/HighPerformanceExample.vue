<template>
        <div>
        </div>
</template>

<script lang="ts">
import { Vue, Component } from "@/vue-script"

@Component({})
export default class HighPerformanceExample extends Vue {
        items = [
                { id: 0, time: "12:00", title: "title", excerpt: "excerpt" },
                {
                        id: 1,
                        time: "8:00",
                        title: "title #2",
                        excerpt: "excerpt #2",
                },
        ]
}
</script>
