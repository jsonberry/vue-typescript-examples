<template>
        <div :class="style" id="app">
                <img src="./assets/logo.png">
                <router-link to="/">Home</router-link>
                <router-view/>
        </div>
</template>

<script lang="ts">
import { Vue, Component, Provide } from '@/vue-script'
import * as Style from '@/style'
import { css, injectGlobal } from 'emotion'

@Component({})
export default class App extends Vue {
        @Provide() author = 'Jason Awbrey'

        get style() {
                return css({
                        fontFamily: "'Avenir', Helvetica, Arial, sans-serif",
                        textAlign: 'center',
                        marginTop: '60px',
                        a: Style.ANCHOR,
                })
        }

        created() {
                injectGlobal( // just sets all the headers with some style
                        Array.from(
                                new Array(6),
                                (x, i) => `h${i + 1}`
                        ).reduce((acc, curr, i) => {
                                acc[curr] = Style.HEADER
                                return acc
                        }, {})
                )
        }
}
</script>
