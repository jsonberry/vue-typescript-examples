<template>
        <div class="hello">
                <h1>Vue Examples</h1>
                <h2>In the flavor of TypeScript</h2>
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

@Component({})
export default class HomePage extends Vue {
        get links() {
                return routes.filter(({ path }) => path !== '/' )
        }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
