<template>
        <div>
                <input
                        type="text"
                        :placeholder="placeholder"
                        :value="entry"
                        @change="changed"
                >
        </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Model } from '@/vue-script'

@Component({})
export default class FormTextInput extends Vue {
        @Prop() placeholder: string
        @Model('changed') entry: string

        changed(ev) {
                this.$emit('changed', ev.target.value)
        }
}
</script>
