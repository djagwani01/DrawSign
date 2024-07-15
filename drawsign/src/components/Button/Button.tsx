import React, { MouseEventHandler } from 'react'
import Button from '@mui/material/Button'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Grid } from '@mui/material'

interface ButtonProps {
    label: string
    icon?: IconDefinition
    handleClick: MouseEventHandler<HTMLButtonElement>
}

const DSButton = ({ label, icon, handleClick }: ButtonProps) => {
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
            onClick={handleClick}
        >
            {icon && (
                <Grid
                    sx={{
                        marginRight: 1,
                    }}
                >
                    <FontAwesomeIcon icon={icon} />
                </Grid>
            )}
            {label}
        </Button>
    )
}

export default DSButton
