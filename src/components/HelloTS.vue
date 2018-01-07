<template>
  <div>
    <h1>Hello TS</h1>
    <router-link to="/">Hello</router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class HelloTS extends Vue {
        created() {
                // console.log('Hello TS created!')
        }
}
</script>
