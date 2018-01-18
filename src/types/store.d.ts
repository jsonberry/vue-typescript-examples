import { GetterTree, Module } from "vuex"

export interface Person {
        first: string
        last: string
        full?: string
        properties: any
        value?: any
}

export interface PeopleState {
        people: Person[]
}

export interface RootState {
        people: PeopleState
}

export type PeopleGetter = GetterTree<PeopleState, RootState>
