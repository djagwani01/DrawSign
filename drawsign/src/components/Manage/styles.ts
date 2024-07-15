import { makeStyles } from '@mui/styles'

const styles = () =>
    ({
        manageWrapper: {
            width: '100%',
            height: '80%',
        },
        headerContainer: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '100%',
        },
        headerItems: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '& .MuiTypography-root': {
                color: 'rgba(50, 50, 50, 1)',
                fontSize: 32,
                fontWeight: 'bold',
            },
        },
        gridItemsWithoutImage: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 23,
            fontWeight: 500,
            '& .fa-star': {
                width: 23,
                height: 23,
                position: 'relative',
                bottom: 2,
            },
        },
        gridItemsWithImage: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '& .fa-trash-can': {
                width: 23,
                height: 23,
                position: 'relative',
                bottom: 2,
                color: 'rgba(255, 0, 0, 1)',
                cursor: 'pointer',
            },
        },
    }) as const

export default makeStyles(styles)
