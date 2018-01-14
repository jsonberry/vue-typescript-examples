import Vue from 'vue'

interface MyPlugin {
        square: (x: number) => number
}

declare module 'vue/types/vue' {
        interface Vue {
                $myplugin: MyPlugin
        }
}
