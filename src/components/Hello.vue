<template>
        <div class="hello">
                <h1 v-ey-a11y.label="'this is the label'">{{'I have a custom directive and filter applied to me' | my-filter}}</h1>
                <router-link to="hello-ts">Hello TS</router-link>
        </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class Hello extends Vue {
        foo = 'bar'
        beforeRouteEnter(to, from, next) {
                console.log('heylo')
                next()
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
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
