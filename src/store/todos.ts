import { MutationTree, GetterTree, ActionTree, Module } from 'vuex'
import { ToDo, ToDoState, RootState } from '@/types'

type TodoGetter = GetterTree<ToDoState, RootState>

export const state: ToDoState = {
        todos: [
                { task: 'Laundry', done: false },
                { task: 'Eat', done: false },
                { task: 'Poop', done: false },
        ],
}

export const getters: TodoGetter = {
        todos: (state, getters, rootState) =>
                state.todos.filter(todo => !todo.done),
        dones: state => state.todos.filter(todo => todo.done),
}

export const mutations: MutationTree<ToDoState> = {
        addToDo(state, newTodo) {
                const todoCopy = Object.assign({}, newTodo)
                state.todos.push(todoCopy)
        },
        toggleToDo(state, todo) {
                todo.checked = !todo.checked
        },
}

export const actions: ActionTree<ToDoState, RootState> = {}

export const todos: Module<ToDoState, RootState> = {
        state,
        getters,
        mutations,
        actions,
        namespaced: true,
}
