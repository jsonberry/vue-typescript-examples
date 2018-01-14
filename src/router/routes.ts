import * as Components from '@/components'

export const routes = [
        {
                path: '/',
                name: 'Home',
                component: Components.HomePage,
        },
        {
                path: '/forms',
                name: 'Forms (with and without custom Vue  inputs)',
                component: Components.ParentForm,
        },
        {
                path: '/dependency-injection',
                name: 'Dependency Injection',
                component: Components.ParentDependencyInjection,
        },
        {
                path: '/custom-directives',
                name: 'Directives',
                component: Components.DirectiveExample,
        },
        {
                path: '/custom-decorator',
                name: 'Custom TypeScript Decorator',
                component: Components.ParentCustomVueTsDecorator,
        },
        {
                path: '/style',
                name: 'Style: CSS, SCSS, Scoped, CSS-in-TS/JS',
                component: Components.ParentCustomVueTsDecorator,
        },
        {
                path: '/animation',
                name: 'Animation',
                component: Components.ParentCustomVueTsDecorator,
        },
        {
                path: '/lifecycles',
                name: 'Lifecycles (takes up to 3 seconds to load)',
                component: Components.LifecycleExamples,
        },
        {
                path: '/data-binding',
                name: 'Data Binding',
                component: Components.DataBindingExample,
        },
]
