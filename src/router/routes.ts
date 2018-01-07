import HomePage from '@/components/HomePage.vue'
import ParentForm from '@/components/forms/ParentForm.vue'
import ParentDependencyInjection from '@/components/dependency-injection/ParentDependencyInjection.vue'
import ParentCustomVueTsDecorator from '@/components/custom-vue-ts-decorator/ParentCustomVueTsDecorator.vue'
import DirectiveExample from '@/components/directives/DirectiveExample.vue'

export const routes = [
        {
                path: '/',
                name: 'Home',
                component: HomePage,
        },
        {
                path: '/forms',
                name: 'Forms, with and without Custom Inputs',
                component: ParentForm,
        },
        {
                path: '/dependency-injection',
                name: 'Dependency Injection',
                component: ParentDependencyInjection,
        },
        {
                path: '/custom-directives',
                name: 'Directives',
                component: DirectiveExample,
        },
        {
                path: '/custom-decorator',
                name: 'Custom TypeScript Decorator',
                component: ParentCustomVueTsDecorator,
        },
        {
                path: '/style',
                name: 'Style: CSS, SCSS, Scoped, CSS-in-TS/JS',
                component: ParentCustomVueTsDecorator,
        },
        {
                path: '/animation',
                name: 'Animation',
                component: ParentCustomVueTsDecorator,
        },
]
