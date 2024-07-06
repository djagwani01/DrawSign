import React from 'react'
import Button from '@mui/material/Button'

interface ButtonProps {
    label: string
}

const DSButton = ({ label }: ButtonProps) => {
    return (
        <Button
            variant="contained"
            sx={{
                width: 120,
                color: 'rgba(255, 255, 255, 1)',
                fontSize: 16,
                fontWeight: 'bold',
                backgroundColor: 'rgba(195, 6, 153, 1)',
            }}
        >
            {label}
        </Button>
    )
}

export default DSButton
