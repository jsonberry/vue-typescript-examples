import { MutationTree, GetterTree, ActionTree, Module } from "vuex"
import { PeopleState, RootState, PeopleGetter } from "@/types"

import axios from "axios"
import { Observable } from "rxjs"
import { switchMap, concatMap } from "rxjs/operators"
import { from, range } from "rxjs/create"

const state = {
        posts: [],
}

const getters = {
        posts: state => state.posts,
}

const mutations = {
        addPosts(state, payload) {
                state.posts = [...state.posts, ...payload]
        },
}

const actions = {
        bus({ dispatch, commit }) {
                Observable.from(dispatch("getPosts")).subscribe(
                        val => {
                                // commit("addPosts", data)
                        },
                        err => console.log("Oh no, an error!", err),
                )
        },
        getPosts({ commit }) {
                const endpoint = "http://demo.wp-api.org/wp-json/wp/v2/posts"
                return Observable.from(axios.get(endpoint))
                        .switchMap(({ headers }) =>
                                Observable.range(
                                        1,
                                        Number(headers["x-wp-totalpages"]),
                                ),
                        )
                        .concatMap(page =>
                                axios.get(endpoint, {
                                        params: {
                                                page,
                                        },
                                }),
                        )
        },
}

export const wordpress = {
        state,
        getters,
        mutations,
        actions,
        namespaced: true,
}
