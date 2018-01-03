<template>
  <div>
    {{ msg }}
    <router-link to="/">home</router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Watch } from 'vue-property-decorator'

@Component
export default class MsgComponent extends Vue {

    get msg () {
      return this.$route.params.msg
    }

    @Watch('$route')
    onRouteChange (to, from) {
        console.log(to)
        console.log(from)
    }

}
</script>
