import React, {
    Dispatch,
    MouseEvent,
    SetStateAction,
    useEffect,
    useRef,
    useState,
} from 'react'
import styles from './styles'
import { Box, Grid } from '@mui/material'
import DSButton from '../Button/Button'
import { openSnackBar } from '../Snackbar/Snackbar'
import { ManageDataTypes } from '../../hooks/useManageData'

interface SignPadProps {
    data: {
        setImgUrl: Dispatch<SetStateAction<string>>
        manageData: Array<ManageDataTypes>
        setManageData: Dispatch<SetStateAction<Array<ManageDataTypes>>>
    }
}

const SignPad = ({ data }: SignPadProps) => {
    const { setImgUrl, manageData } = data
    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const canvasContext = useRef<CanvasRenderingContext2D | null>(null)
    const [isDrawing, setIsDrawing] = useState<boolean>(false)
    const [clearPlaceHolder, setClearPlaceHolder] = useState<boolean>(false)
    const classes = styles()

    useEffect(() => {
        const canvas = canvasRef.current
        if (canvas) {
            canvas.width = 550
            canvas.height = 380

            const context = canvas.getContext('2d')
            if (context) {
                context.lineCap = 'round'
                context.strokeStyle = 'black'
                context.lineWidth = 3
                canvasContext.current = context
            }
        }
    }, [])

    useEffect(() => {
        if (canvasContext && canvasContext.current) {
            if (isDrawing && clearPlaceHolder) {
                canvasContext.current.clearRect(0, 0, 500, 400)
            } else {
                canvasContext.current.font = '50px Arial'
                canvasContext.current.fillStyle = 'grey'
                canvasContext.current.fillText('Sign Here...', 50, 200)
            }
        }
    }, [clearPlaceHolder])

    const startDrawing = ({ nativeEvent }: MouseEvent<HTMLCanvasElement>) => {
        setClearPlaceHolder(true)
        const { offsetX, offsetY } = nativeEvent
        if (canvasContext && canvasContext.current) {
            canvasContext.current.beginPath()
            canvasContext.current.moveTo(offsetX, offsetY)
            canvasContext.current.lineTo(offsetX, offsetY)
            canvasContext.current.stroke()
            setIsDrawing(true)
            nativeEvent.preventDefault()
        }
    }

    const draw = ({ nativeEvent }: MouseEvent<HTMLCanvasElement>) => {
        if (!isDrawing) {
            return
        }
        const { offsetX, offsetY } = nativeEvent
        if (canvasContext && canvasContext.current) {
            canvasContext.current.lineTo(offsetX, offsetY)
            canvasContext.current.stroke()
            nativeEvent.preventDefault()
        }
    }

    const stopDrawing = () => {
        if (canvasContext && canvasContext.current) {
            canvasContext.current.closePath()
            setIsDrawing(false)
        }
    }

    const handleSave = () => {
        if (canvasRef && canvasRef.current) {
            setImgUrl(canvasRef?.current?.toDataURL())
        }
        openSnackBar({
            message:
                manageData.length === 5
                    ? 'You cannot add more than 5 signatures. Please delete a signature to add a new one.'
                    : 'Signature saved successfully',
            type: manageData.length === 5 ? 'error' : 'success',
            customAnchor: {
                horizontal: manageData.length === 5 ? 'center' : 'right',
                vertical: 'top',
            },
        })
        handleClear()
    }

    const handleClear = () => {
        if (canvasContext && canvasContext.current) {
            canvasContext.current.clearRect(0, 0, 600, 400)
            setClearPlaceHolder(false)
        }
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                margin: '90px 0',
            }}
        >
            <Grid container className={classes.canvasContainer}>
                <canvas
                    ref={canvasRef}
                    className={classes.canvas}
                    onMouseDown={startDrawing}
                    onMouseMove={draw}
                    onMouseUp={stopDrawing}
                    onMouseOut={stopDrawing}
                />
            </Grid>
            <Grid
                container
                sx={{
                    width: 550,
                    justifyContent: 'flex-end',
                    margin: '20px 0',
                }}
            >
                <Grid item xs={3}>
                    <DSButton label="SAVE" handleClick={handleSave} />
                </Grid>
                <Grid item xs={2.5}>
                    <DSButton label="CLEAR" handleClick={handleClear} />
                </Grid>
            </Grid>
        </Box>
    )
}

export default SignPad
