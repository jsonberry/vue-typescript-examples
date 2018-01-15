<template>
        <div>
                <p>{{ author }}</p>
                <p>{{ author | localFilterReverse }} (this is from the locally registerd filter)</p>
                <p>{{ author | global-reverse }} (this is from the globally registerd filter)</p>
                <hr />
                <h2>Sections to check out</h2>
                <ul>
                        <li>
                                src/components/filters
                        </li>
                        <li>
                                src/filters
                        </li>
                        <li>
                                src/main.ts
                        </li>
                </ul>
        </div>
</template>

<script lang="ts">
import { Vue, Component, Inject } from "@/vue-script"

function localFilterReverse(value) {
        return value
                .split("")
                .reverse()
                .join("")
}

@Component({
        filters: {
                localFilterReverse,
        },
})
export default class FilterExample extends Vue {
        @Inject() author
}
</script>
