import Vue from 'vue'
import { DirectiveOptions, VNodeDirective } from 'vue'

type BindingPayload = {
        label: string
        enabled: boolean
}

const directive: DirectiveOptions = {
        bind: (el, binding) => {
                const payload: BindingPayload = binding.value
                let label = (binding.value && binding.value.label) || {}

                if (binding.modifiers.label) {
                        label = binding.value
                }

                el.setAttribute('tabindex', '0')
                el.setAttribute('aria-label', label)
        },
}

Vue.directive('ey-a11y', directive)
