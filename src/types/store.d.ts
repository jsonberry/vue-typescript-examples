import { MutationTree, GetterTree, ActionTree, Module } from 'vuex'

export interface ToDo {
        task: string
        done: boolean
}

export interface ToDoState {
        todos: ToDo[]
}

export interface RootState {
        todo: ToDoState
        login: any
}

export type ToDoGetter = GetterTree<ToDoState, RootState>
