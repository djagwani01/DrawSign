import { faPenNib, faGear } from '@fortawesome/free-solid-svg-icons'
import { MANAGE, SIGN_PAD } from '../../Routes'

export const tabs = [
    {
        id: '#icon-1',
        title: 'SignPad',
        icon: faPenNib,
        navigate: SIGN_PAD,
    },
    {
        id: '#icon-2',
        title: 'Manage',
        icon: faGear,
        navigate: MANAGE,
    },
]
