import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons'
import styles from './styles'
import { HeaderProps } from './types'

const Header = ({ defaultTitle = 'DrawSign', tabs }: HeaderProps) => {
    const classes = styles()
    return (
        <div className={classes.headerWrapper}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '95%',
                    height: 70,
                    backgroundColor: 'rgba(30, 30, 30, 1)',
                    borderRadius: 2,
                }}
            >
                <Grid
                    container
                    sx={{
                        display: 'flex',
                        width: 370,
                        height: 'inherit',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Grid item xs={1} className={classes.gridItems}>
                        <FontAwesomeIcon icon={faCircleHalfStroke} />
                    </Grid>
                    <Grid item xs={4} className={classes.gridItems}>
                        <Typography
                            sx={{
                                color: 'rgba(255, 255, 255, 1)',
                                fontSize: 24,
                                fontWeight: 'bold',
                            }}
                        >
                            {defaultTitle}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    container
                    sx={{
                        display: 'flex',
                        width: 500,
                        height: 'inherit',
                        alignItems: 'center',
                    }}
                >
                    {tabs.map((tab) => {
                        return (
                            <Grid
                                key={tab.id}
                                container
                                item
                                xs={4}
                                sx={{
                                    cursor: 'pointer',
                                }}
                                className={classes.gridItems}
                            >
                                <Grid
                                    item
                                    xs={3}
                                    mt={0.2}
                                    className={classes.gridItems}
                                >
                                    <FontAwesomeIcon
                                        icon={tab.icon}
                                        className={classes.tabIcon}
                                    />
                                </Grid>
                                <Grid item xs={5} className={classes.gridItems}>
                                    <Typography
                                        sx={{
                                            color: 'rgba(255, 255, 255, 1)',
                                            fontSize: 21,
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        {tab.title}
                                    </Typography>
                                </Grid>
                            </Grid>
                        )
                    })}
                </Grid>
                {/* <Grid container item xs={5} className={classes.gridItems}>
                        <Grid
                            item
                            xs={3}
                            mt={0.2}
                            className={classes.gridItems}
                        >
                            <FontAwesomeIcon
                                icon={faPenNib}
                                className={classes.tabIcon}
                            />
                        </Grid>
                        <Grid item xs={5} className={classes.gridItems}>
                            <Typography
                                sx={{
                                    color: 'rgba(255, 255, 255, 1)',
                                    fontSize: 21,
                                    fontWeight: 'bold',
                                }}
                            >
                                SignPad
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container item xs={5} className={classes.gridItems}>
                        <Typography
                            sx={{
                                color: 'rgba(255, 255, 255, 1)',
                                fontSize: 20,
                                fontWeight: 'bold',
                            }}
                        >
                            Manage
                        </Typography>
                    </Grid>
                </Grid> */}
            </Box>
        </div>
    )
}

export default Header
