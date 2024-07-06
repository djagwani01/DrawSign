import React, { MouseEvent, useEffect, useRef, useState } from 'react'
import styles from './styles'
import { Box, Grid } from '@mui/material'
import DSButton from '../Button/Button'

const SignPad = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const canvasContext = useRef<CanvasRenderingContext2D | null>(null)
    const [isDrawing, setIsDrawing] = useState<boolean>(false)
    const [clearPlaceHolder, setClearPlaceHolder] = useState<boolean>(false)

    const classes = styles()

    useEffect(() => {
        const canvas = canvasRef.current
        if (canvas) {
            canvas.width = 500
            canvas.height = 400

            const context = canvas.getContext('2d')
            if (context) {
                context.lineCap = 'round'
                context.strokeStyle = 'black'
                context.lineWidth = 1
                canvasContext.current = context
                console.log({ context: canvasContext.current })
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

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                margin: '50px 0',
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
                    <DSButton label="SAVE" />
                </Grid>
                <Grid item xs={2.5}>
                    <DSButton label="CLEAR" />
                </Grid>
            </Grid>
        </Box>
    )
}

export default SignPad
