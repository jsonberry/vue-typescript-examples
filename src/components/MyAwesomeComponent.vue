<template functional>
  <h2>{{ props.phrase }}</h2>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { Prop } from 'vue-property-decorator';

@Component
export default class MyAwesomeComponent extends Vue {
    @Prop() phrase
}
</script>
