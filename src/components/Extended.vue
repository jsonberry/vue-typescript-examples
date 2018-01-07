<template>
  <div>
          <router-link to="/">home</router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Router from 'vue-router'
import { Component, Watch } from 'vue-property-decorator'

@Component({})
export default class Extended extends Vue {
        beforeRouteEnter(to, from, next) {
                console.log('beforeRouteEnter')
                next()
        }

        beforeRouteLeave(to, from, next) {
                console.log('beforeRouteLeave')
        }

        created() {
                // console.log(this.$route);
        }

        @Watch('$route')
        doThings(newVal, oldVal) {
                console.log('route changed');
                // console.log(newVal)
        }
}
</script>
