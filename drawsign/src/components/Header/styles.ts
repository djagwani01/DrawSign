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
            '& .MuiTypography-root': {
                color: 'rgba(255, 255, 255, 1)',
                fontWeight: 'bold',
            },
            '& .fa-gear': {
                position: 'relative',
                left: 2,
            },
            '& .active': {
                textShadow: '1px 2px 5px black',
            },
        },
        tabIcon: {
            color: 'rgba(195, 6, 153, 1)',
            width: 18,
            height: 17,
        },
        link: {
            textDecoration: 'none',
            '& :hover': {
                color: 'rgba(230, 230, 230, 1)',
            },
        },
    }) as const

export default makeStyles(styles)
