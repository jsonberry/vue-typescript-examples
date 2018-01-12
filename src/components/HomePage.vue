<template>
        <div :class="style">
                <h1>Vue TypeScript Examples</h1>
                <p>Hint: open your browser JavaScript console</p>
                <ul>
                        <li v-for="({ path, name }, i) in links" :key="i">
                                <router-link :to="path">{{ name }}</router-link>
                        </li>
                </ul>
        </div>
</template>

<script lang="ts">
import { Component, Vue } from '@/vue-script'
import { routes } from '@/router/routes'
import * as Style from '@/style'
import { cx, css } from 'emotion'

@Component({})
export default class HomePage extends Vue {
        get links() {
                return routes.filter(({ path }) => path !== '/')
        }

        get style() {
                return css({
                        ul: Style.UNORDERED_LIST,
                        li: Style.LIST_ITEM,
                })
        }
}
</script>
