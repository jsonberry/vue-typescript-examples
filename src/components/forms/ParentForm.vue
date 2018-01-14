<template>
        <div :class="style">
                <h1>path: components/forms</h1>
                <h2>We declare the form model so that it can be <a href="https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties">reactive</a></h2>
                <form @submit.prevent="submit()">
                        <fieldset>
                                <legend>Non-custom Inputs</legend>
                                <h3>These update the model on the "input" event</h3>
                                <input
                                        type="text"
                                        :placeholder="formData.firstName.placeholder"
                                        v-model="formData.firstName.entry"
                                >
                                <input
                                        type="text"
                                        :placeholder="formData.lastName.placeholder"
                                        v-model="formData.lastName.entry"
                                >
                        </fieldset>
                        <fieldset>
                                <legend>Custom Vue Component Inputs</legend>
                                <h3>These update the model on the "change" event</h3>
                                <custom-form-input
                                        v-model="formData.firstName.entry"
                                        :placeholder="formData.firstName.placeholder"
                                />
                                <custom-form-input
                                        v-model="formData.lastName.entry"
                                        :placeholder="formData.lastName.placeholder"
                                />
                        </fieldset>
                        <button type="submit">Submit</button>
                </form>
                <pre>
                        {{formData}}
                </pre>
        </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from '@/vue-script'
import { CustomFormInput } from '@/components';
import { css } from 'emotion'

@Component({
        components: {
                CustomFormInput,
        },
})
export default class FormPage extends Vue {
        // With Vue in JS, this would be in the data section of the Component
        // We declare the form model so that it can be reactive https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties
        public formData = {
                firstName: {
                        placeholder: 'First Name',
                        id: 'firstName',
                        entry: '',
                },
                lastName: {
                        placeholder: 'Last Name',
                        id: 'lastName',
                        entry: '',
                },
        }

        get style() {
                return css(`
                      fieldset {
                                padding: 0 1.5rem 2.5rem;
                                margin-bottom: 1rem;
                                max-width: 250px;
                                margin-left: auto;
                                margin-right: auto;
                      }
                `)
        }

        // Vue Computed Property
        get fullName() {
                return `${this.formData.firstName.entry} ${this.formData.lastName.entry}`
        }

        submit() {
                alert(`Hello ${this.fullName}`)
        }
}
</script>
