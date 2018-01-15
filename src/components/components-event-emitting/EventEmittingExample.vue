<template>
    <div>
                <button @click="localEmission('Hello Local World!')">Emit event and catch it in the current component</button>
                <!-- $on and $once do not work with emissions from child components -->
                <!-- v-on or the shorthand : is needed for capturing the event emitted from the child -->
                <child-event-emitting-example @emission-from-child="onEmissionFromChild"></child-event-emitting-example>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Emit } from '@/vue-script'
import { ChildEventEmittingExample } from '@/components'

@Component({
        components: {
                ChildEventEmittingExample,
        },
})
export default class EventEmittingExample extends Vue {
        @Emit()
        localEmission(msg) {
                this.$emit('local-once', `${msg} (only show once)`)
        }

        onLocal(msg) {
                alert(msg)
        }

        onLocalOnce(msg) {
                alert(msg)
        }

        onEmissionFromChild() {
                alert('I was emitted from a child component')
        }

        created() {
                this.$on('local-emission', this.onLocal) // $on only works for local emissions
                this.$once('local-once', this.onLocalOnce) // $once only works for local emissions
        }
}
</script>
