import { makeStyles } from '@mui/styles'

const styles = () =>
    ({
        headerWrapper: {
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            margin: '30px 0',
            '& .fa-circle-half-stroke': {
                color: 'rgba(195, 6, 153, 1)',
                width: 28,
                height: 28,
            },
        },
        gridItems: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '& .fa-gear': {
                position: 'relative',
                left: 2,
            },
        },
        tabIcon: {
            color: 'rgba(195, 6, 153, 1)',
            width: 18,
            height: 17,
        },
    }) as const

export default makeStyles(styles)
