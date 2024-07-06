import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

export interface Tab {
    id: string
    title: string
    icon: IconDefinition
}

export interface HeaderProps {
    defaultTitle?: string
    tabs: Array<Tab>
}
