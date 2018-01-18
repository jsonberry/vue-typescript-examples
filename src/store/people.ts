import { MutationTree, GetterTree, ActionTree, Module } from "vuex"
import { PeopleState, RootState, PeopleGetter } from "@/types"

const state: PeopleState = {
        people: [
                {
                        first: "Jason",
                        last: "Awbrey",
                        properties: {
                                prop1: {
                                        controlType: "a",
                                        controls: {
                                                a: 1,
                                                b: 2,
                                                c: 3,
                                        },
                                },
                        },
                },
        ],
}

const getters: PeopleGetter = {
        people: state =>
                state.people.map(({ first, last }) => ({
                        first,
                        last,
                        full: `${first} ${last}`,
                })),
        otherPeople: state => {
                state.people.forEach(item => {
                        const prop = item.properties
                        for (const key in prop) {
                                const element = prop[key]
                                item.value = // don't do this! ;) never mutate state in anything other than a mutator
                                        element.controls[element.controlType]
                        }
                })
                return state.people
        },
}

const mutations: MutationTree<PeopleState> = {
        updateFirst(state, { first, newFirst }) {
                block: {
                        if (!newFirst) break block
                        const obj = state.people.find(el => el.first === first)
                        obj.first = newFirst
                }
        },
        updateLast(state, { last, newLast }) {
                block: {
                        if (!newLast) break block
                        const obj = state.people.find(el => el.last === last)
                        obj.last = newLast
                }
        },
        updateValue(state, { value, newValue }) {
                const obj = state.people.find(el => el.value === value)
                obj.properties.prop1.controlType = newValue
        },
}

export const people: Module<PeopleState, RootState> = {
        state,
        getters,
        mutations,
        namespaced: true,
}
