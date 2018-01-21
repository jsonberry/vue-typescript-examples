<template>
        <div>
                <select v-model="selected">
                        <option v-for="opt in opts" :key="opt">
                                {{ opt }}
                        </option>
                </select>
                <component :is="selected" />
        </div>
</template>
//
<script lang="ts">
import { Vue, Component } from "@/vue-script"
import {
        AsyncCodeSplittingHelperOne,
        AsyncCodeSplittingHelperTwo,
} from "@/components"

@Component({
        components: {
                one: AsyncCodeSplittingHelperOne,
                two: AsyncCodeSplittingHelperTwo,
                three: () =>
                        import("@/components/components-async-code-splitting/AsyncCodeSplittingHelperThree.vue"),
        },
})
export default class AsyncCodeSplittingExample extends Vue {

        // This does not seem to be working yet
        // Need to do some more research
        // The async import functionality _does_ work
        // But this build isn't splitting the chunks out correctly

        opts = ["one", "two", "three"]
        selected = "one"
}
</script>
