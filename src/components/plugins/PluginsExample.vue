<template>
        <div>
                <p>{{ meaning }}</p>
                <hr />
                <h2>Sections to check out</h2>
                <ul>
                        <li><strong>/components/plugins</strong> (component in action)</li>
                        <li><strong>/src/plugins</strong> (plugin creation and registration)</li>
                        <li><strong>/src/types.d.ts</strong> (plugin typing <-- important for Vue + TypeScript)</li>
                        <li><strong>/src/main.ts</strong> (plugin bootstrapping)</li>
                </ul>
        </div>
</template>

<script lang="ts">
import { Vue, Component } from "@/vue-script"

@Component({})
export default class PluginsExample extends Vue {
        life = 6.48074069841

        get meaning() {
                return this.$square(this.life)
        }

        foo() {


                // Because we have typed the plugin in /src/types.d.ts we get intellisense for the plugin in our components
                // try typing "this.$sq", you should see it auto populate with "this.$square"

                // Also, since it's typed, TS knows the plugin requires a number, not a string
                // Uncomment the next line to see the error
                // this.$square('hello')
        }
}
</script>
