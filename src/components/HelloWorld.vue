<template>
  <div class="hello">
    <!-- <my-awesome-component v-once phrase="my-awesome-component is super awesome" /> -->
    <router-link :to="{name: 'Message', params: { msg: 'Goodbye Cruel World' }}">message</router-link>
    <router-link to="/extended">Extended</router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import MyAwesomeComponent from '@/components/MyAwesomeComponent.vue'

@Component({
        components: {
                MyAwesomeComponent,
        },
        name: 'HelloWorld',
})
export default class HelloWorldComponent extends Vue {
        msg = 'Welcome to Your Vue.js App'
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
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
