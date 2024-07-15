import { makeStyles } from '@mui/styles'

const styles = () =>
    ({
        canvas: {
            border: '1px solid black',
            backgroundColor: 'rgba(217, 217, 217, 1)',
        },
        canvasContainer: {
            display: 'flex',
            width: 'inherit',
            height: 'inherit',
            justifyContent: 'center',
            alignItems: 'center',
        },
    }) as const

export default makeStyles(styles)
