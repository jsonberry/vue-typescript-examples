<template>
        <div>
                <input
                        type="text"
                        :placeholder="placeholder"
                        :value="foo"
                        @change="bar"
                >
        </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Model } from '@/vue-script'

@Component({})
export default class FormTextInput extends Vue {
        @Prop() placeholder: string

        /**
         *      Under the hood this is using v-model
         *      The connection to the data model is assigned as "foo"
         *      The event emitted "bar" allows for a proper binding
         *      To the parent where the form model
         *
         *      By default the property would be "value" and the
         *      necessary event to emit would be "input"
         *
         *      Using @Model allows us access to the Vue instance "model"
         *      which lets us customize the name of the event to emit, and
         *      the name of the property
         *
         *      Notice that in the parent component we don't have to listen
         *      for the "bar" event, and we don't have to pass a specific "foo" property
         *      The binding is being managed for us by @Model
         */
        @Model('bar') foo: string

        // $event is passed implicitly from the @change directive
        bar(ev) {
                this.$emit('bar', ev.target.value)
        }
}
</script>
