<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link to="/">Home</router-link>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Provide } from '@/vue-script'

@Component({})
export default class App extends Vue {
        @Provide() author = "Jason Awbrey"
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}

a {
        display: block;
        color: #42b983;
}
</style>
