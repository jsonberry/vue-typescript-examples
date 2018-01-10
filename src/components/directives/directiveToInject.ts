import { DirectiveOptions, VNodeDirective, VNode } from 'vue'

// https://emotion.sh/
import { css, cx } from 'emotion' // CSS-in-JS project, very popular
import colors from '@/style/colors'

// This CSS stuff is unrelated to Vue Directives
// Just showing that you get access to the element and set styles
const cssClass1 = css({
        padding: '2rem',
        border: '1px solid black',
})

const cssClass2 = css`
        color: hotpink;
        ${foo(colors.BEIGE)};
`

function foo(clr) {
        return `color: ${clr}`
}

const cssClass3 = css({
        fontSize: '2rem',
})

export const injectedDirective: DirectiveOptions = {
        bind(
                el: HTMLElement, // if you type these
                binding: VNodeDirective, // you get great intellisense
                vnode: VNode, // try typing vnode. in this function
                oldVnode: VNode // and you'll see what TypeScript + VS Code Intellisense will give us
        ) {
                console.log('Directive: el', el)
                console.log('Directive: binding', binding)
                console.log('Directive: vnode', vnode)
                console.log('Directive: oldVnode', oldVnode)

                el.classList.add(
                        cx(
                                { [cssClass1]: true },
                                { [cssClass2]: true },
                                { [cssClass3]: true }
                        )
                )
        },
        inserted() {
                console.log('do inserted things')
        },
        update() {
                console.log('do update things')
        },
        componentUpdated() {
                console.log('do componentUpdated things')
        },
        unbind() {
                console.log('do unbind things')
        },
}
