<template>
  <div>
    this is a 404 page
    <router-link to="/">home</router-link>
    <router-link :to="{name: 'Message', params: { msg: 'Goodbye Cruel World' }}">message</router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class ErrorPage extends Vue {}
</script>
