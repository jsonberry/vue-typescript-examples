import { css } from 'emotion'

export const colors = {
        GREEN: '#42b983',
        BLUE: 'blue',
}

export const ANCHOR = {
        color: colors.GREEN,
        display: 'block',
}

export const HEADER = {
        fontWeight: 'normal',
}

export const UNORDERED_LIST = {
        listStyleType: 'none',
        padding: 0,
}

export const LIST_ITEM = {
        display: 'block',
        marginBottom: '10px',
}

export type Button = {
        color: string
        padding: string,
        background: string,
        fontSize: string,
        cursor: string,
        borderRadius: string,
}

export const BUTTON: Button = {
        color: colors.GREEN,
        padding: '1rem',
        background: 'transparent',
        fontSize: '1.5rem',
        cursor: 'pointer',
        borderRadius: '4px',
}
