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
            '& .fa-pen-nib': {
                width: 19,
                height: 18,
            },
            '& .fa-signature': {
                position: 'relative',
                right: 15,
                width: 25,
                height: 25,
            },
            '& .active': {
                '& .MuiTypography-root': {
                    color: 'rgba(230, 230, 230, 1)',
                    textShadow: '10px 10px 20px rgba(100, 100, 100, 1)',
                }
            },
        },
        tabIcon: {
            color: 'rgba(195, 6, 153, 1)',
        },
        link: {
            textDecoration: 'none',
            '& :hover': {
                color: 'rgba(230, 230, 230, 1)',
            },
        },
    }) as const

export default makeStyles(styles)
