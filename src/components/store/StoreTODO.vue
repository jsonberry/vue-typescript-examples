<template>
    <div>
        <ul v-for="({ task }, i) in todos" :key="i">
            <li>{{ task }}</li>
        </ul>
        <input type="text" v-model="newToDo.task" @keyup.enter="addToDo(newToDo)">
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { State, Getter, namespace, Mutation } from 'vuex-class'
import { ToDo, ToDoState } from '@/types'
import { Map } from 'immutable'

const ToDoGetters = namespace('todos', Getter)
const ToDoMutations = namespace('todos', Mutation)

@Component
export default class StoreComponent extends Vue {
        @ToDoGetters todos: ToDo[]
        @ToDoMutations addToDo

        newToDo: ToDo = {
                task: '',
                done: false,
        }
}
</script>
