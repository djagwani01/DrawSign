import { makeStyles } from '@mui/styles'

const styles = () =>
    ({
        mainApp: {
            width: '100%',
            height: '100vh',
        },
    }) as const

export default makeStyles(styles)
