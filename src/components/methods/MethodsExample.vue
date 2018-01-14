<template>
        <div>
                <button @click="alertMethod()">Time is...</button>
        </div>
</template>

<script lang="ts">
import { Component, Vue } from '@/vue-script'

@Component({})
export default class MethodsExample extends Vue {
        public alertMethod(): void {
                const evenOrOdd = this.timeIs()

                switch (evenOrOdd.type) { // delete ".type", and put a "." on the end of evenOrOdd - notice we get an API for the var, because it's typed in the return for the timeIs method
                        case 'even':
                                alert(`Time is even: ${evenOrOdd.time}`)
                                break
                        case 'odd':
                                alert(`Time is odd: ${evenOrOdd.time}`)
                }
        }

        private timeIs(): { time: number; type: string } {
                const time = new Date().getTime()
                return time % 2 === 0
                        ? { time, type: 'even' }
                        : { time, type: 'odd' }
        }
}
</script>
