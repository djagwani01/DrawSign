import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Snackbar, SnackbarContent } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {
    faCircleCheck,
    faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons'

interface CustomAnchorType {
    vertical: 'top' | 'bottom'
    horizontal: 'left' | 'right' | 'center'
}

interface OpenSnackBarProps {
    message: string
    type: string
    customAnchor?: CustomAnchorType
    shouldAutoHide?: boolean
}

let openSnackBarFn: any

const SnackBar = () => {
    const [open, setOpen] = useState<boolean>(false)
    const [message, setMessage] = useState<string>('')
    const [type, setType] = useState<string>('success')
    const [customAnchor, setCustomAnchor] = useState<CustomAnchorType>({
        vertical: 'top',
        horizontal: 'right',
    })

    const openSnackBar = ({
        message,
        type,
        customAnchor,
    }: OpenSnackBarProps) => {
        setOpen(true)
        setMessage(message)
        setType(type)
        customAnchor && setCustomAnchor(customAnchor)
    }

    useEffect(() => {
        openSnackBarFn = openSnackBar
    }, [])

    return (
        <Snackbar
            open={open}
            anchorOrigin={customAnchor}
            autoHideDuration={3000}
            onClose={() => setOpen(false)}
            sx={{
                zIndex: 99,
                width: 'max-content',
                height: 40,
                margin: '95px 17px',
            }}
        >
            <SnackbarContent
                message={
                    <>
                        <FontAwesomeIcon
                            icon={
                                type === 'success'
                                    ? faCircleCheck
                                    : faTriangleExclamation
                            }
                        />
                        <span>{message}</span>
                    </>
                }
                sx={{
                    width: 'inherit',
                    height: 'inherit',
                    backgroundColor:
                        type === 'success'
                            ? 'rgba(0, 170, 20, 0.9)'
                            : 'rgba(210, 0, 0, 0.8)',
                    boxShadow: '1px 1px 5px rgba(0, 0, 0, 1)',
                    color: 'rgba(255, 255, 255, 1)',
                    fontSize: 18,
                    fontWeight: 600,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    '& .fa-circle-check': {
                        marginRight: 2,
                    },
                    '& .fa-triangle-exclamation': {
                        marginRight: 2,
                    },
                }}
            />
        </Snackbar>
    )
}

export const openSnackBar = ({
    message,
    type,
    customAnchor,
}: OpenSnackBarProps) => {
    return openSnackBarFn({ message, type, customAnchor })
}

export default SnackBar
