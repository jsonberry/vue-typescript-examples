import Vue from "vue"

function globalFilterReverse(value) {
        return value
                .split("")
                .reverse()
                .join("")
}

Vue.filter("global-reverse", globalFilterReverse)
