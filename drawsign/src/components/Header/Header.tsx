import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons'
import styles from './styles'
import { HeaderProps } from './types'
import { NavLink, useLocation } from 'react-router-dom'
import { SIGN_PAD } from '../../Routes'

const Header = ({ defaultTitle = 'DrawSign', tabs }: HeaderProps) => {
    const classes = styles()
    const location = useLocation()

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
                        <Typography sx={{ fontSize: 24 }}>
                            {defaultTitle}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    container
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        width: 600,
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
                                xs={3.5}
                                sx={{
                                    cursor: 'pointer',
                                    height: 'inherit',
                                    ...(location.pathname === tab.navigate && {
                                        backgroundColor:
                                            'rgba(255, 255, 255, 0.2)',
                                    }),
                                    ...(tab.navigate === SIGN_PAD
                                        ? {
                                              borderRight:
                                                  '1px solid rgba(150, 150, 150, 1)',
                                          }
                                        : {
                                              borderLeft:
                                                  '1px solid rgba(150, 150, 150, 1)',
                                          }),
                                }}
                                className={classes.gridItems}
                            >
                                <Grid
                                    item
                                    xs={1}
                                    mt={0.2}
                                    className={classes.gridItems}
                                >
                                    <NavLink
                                        to={tab.navigate}
                                        className={classes.link}
                                    >
                                        <FontAwesomeIcon
                                            icon={tab.icon}
                                            className={classes.tabIcon}
                                        />
                                    </NavLink>
                                </Grid>
                                <Grid item xs={7} className={classes.gridItems}>
                                    <NavLink
                                        to={tab.navigate}
                                        className={classes.link}
                                    >
                                        <Typography sx={{ fontSize: 21 }}>
                                            {tab.title}
                                        </Typography>
                                    </NavLink>
                                </Grid>
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
        </div>
    )
}

export default Header
