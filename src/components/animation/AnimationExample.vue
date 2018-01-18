<template>
        <div>
                <router-link to="/animation/css">CSS</router-link>
                <router-link to="/animation/js">JavaScript</router-link>
                <router-link to="/animation/third-party-library">Third Party Library</router-link>
                <router-view></router-view>
        </div>
</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"

@Component({})
export default class ChildComponent extends Vue {}
</script>
