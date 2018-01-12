<template>
        <div>
                <span v-a11y>This span has accessiblity stuff added to it with a global directive</span>
                <p v-injected-directive>Directives are just objects with a specific set of functions, they get called like lifecycle hooks</p>
        </div>
</template>

<script lang="ts">
import { Vue, Component } from '@/vue-script'
import { injectedDirective } from './directiveToInject';

@Component({
        directives: {
                injectedDirective
        }
})
export default class DirectiveExample extends Vue {}
</script>
