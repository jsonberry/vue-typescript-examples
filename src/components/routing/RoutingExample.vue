<template>
        <div></div>
</template>


<script lang="ts">
import { Vue, Component, Watch } from '@/vue-script'
import Router from 'vue-router'

@Component({})
export default class RoutingExampe extends Vue {
        beforeRouteEnter(to, from, next) {
                console.log('beforeRouteEnter')
                next()
        }

        beforeRouteLeave(to, from, next) {
                console.log('beforeRouteLeave')
        }

        @Watch('$route')
        doThings(newVal, oldVal) {
                console.log('route changed')
        }
}
</script>
