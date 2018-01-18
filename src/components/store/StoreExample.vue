<template>
    <div>
        <div>{{ otherPeople }}</div>
        <template v-for="(person, index) in otherPeople">
                <div>
                        <p>{{person.value}}</p>
                        <input @change="updateValue({
                                value: person.value,
                                newValue: $event.target.value
                        })"/>
                </div>
        </template>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Getter, namespace, Mutation } from "@/vue-script"

const PeopleGetters = namespace("people", Getter)
const PeopleMutations = namespace("people", Mutation)

@Component
export default class StoreExample extends Vue {
        @PeopleGetters otherPeople
        @PeopleMutations updateValue
}
</script>
