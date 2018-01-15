import Vue from "vue"

// https://vuejs.org/v2/guide/typescript.html#Augmenting-Types-for-Use-with-Plugins
type Square = (x: number) => number
declare module "vue/types/vue" {
        interface Vue {
                $square: Square
        }
}
