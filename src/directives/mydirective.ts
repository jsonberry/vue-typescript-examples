import Vue from 'vue'

Vue.directive('ey-a11y', {
  bind: (el, binding) => {
    const label = binding && binding.value && binding.value.label || el.textContent


    el.setAttribute('tabindex', 0)
    el.setAttribute('aria-label', label)
  }
})
