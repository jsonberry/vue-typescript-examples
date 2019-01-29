<template>
    <div>
        <!-- <template v-for="(post, index) in foo">
                <article :key="post.id + index">

                </article>
        </template> -->
    </div>
</template>

<script lang="ts">
import {
        Vue,
        Component,
        Getter,
        namespace,
        Mutation,
        Action,
} from "@/vue-script"

const WordPressGetters = namespace("wordpress", Getter)
const WordPressMutations = namespace("wordpress", Mutation)
const WordPressActions = namespace("wordpress", Action)

@Component({})
export default class StoreWordPressExample extends Vue {
        @WordPressGetters posts
        @WordPressActions bus
        // foo

        created() {
                this.bus()
                // this.posts.subscribe(posts => {
                //         this.foo = posts
                // })
        }
}
</script>
