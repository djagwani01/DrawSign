import { Box } from '@mui/system'
import React, { Dispatch, SetStateAction, MouseEvent } from 'react'
import styles from './styles'
import { Grid, Typography } from '@mui/material'
import DSButton from '../Button/Button'
import {
    faCirclePlus,
    faStar,
    faTrashCan,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ManageDataTypes } from '../../hooks/useManageData'

interface ManageProps {
    data: {
        setImgUrl: Dispatch<SetStateAction<string>>
        manageData: Array<ManageDataTypes>
        setManageData: Dispatch<SetStateAction<Array<ManageDataTypes>>>
    }
}

const Manage = ({ data }: ManageProps) => {
    const classes = styles()
    const { manageData, setManageData } = data

    const handleStarred = (e: MouseEvent<SVGSVGElement>) => {
        setManageData(manageData.map(data => {
            return String(data.id) === e.currentTarget.id ? {...data, starred: true} : {...data, starred: false}
        }))
    }

    return (
        <div className={classes.manageWrapper}>
            <Box
                sx={{
                    width: '50%',
                    height: '70%',
                    border: '2.5px solid rgba(128, 128, 128, 0.8)',
                    margin: '90px 150px',
                    borderRadius: 2,
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        height: '20%',
                        borderBottom: '2px solid rgba(128, 128, 128, 0.6)',
                    }}
                >
                    <Grid container className={classes.headerContainer}>
                        <Grid
                            container
                            item
                            xs={5}
                            className={classes.headerItems}
                        >
                            <Typography>Signatures</Typography>
                        </Grid>
                        <Grid
                            container
                            item
                            xs={4}
                            className={classes.headerItems}
                        >
                            <DSButton
                                label="Add"
                                icon={faCirclePlus}
                                handleClick={() => {}}
                            />
                        </Grid>
                    </Grid>
                </Box>
                <Grid
                    container
                    sx={{
                        width: '100%',
                        margin: '35px 50px',
                    }}
                >
                    {manageData?.map((item) => {
                        return (
                            <Grid
                                key={item.id}
                                container
                                item
                                sx={{
                                    width: '100%',
                                    height: 60,
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                            >
                                <Grid
                                    container
                                    item
                                    sx={{
                                        width: '20%',
                                    }}
                                >
                                    <Grid
                                        item
                                        className={
                                            classes.gridItemsWithoutImage
                                        }
                                        xs={2}
                                    >
                                        {item.id}.
                                    </Grid>
                                    <Grid
                                        item
                                        className={
                                            classes.gridItemsWithoutImage
                                        }
                                        xs={6}
                                        sx={{
                                            ...(item.starred && {
                                                '& .fa-star': {
                                                    color: 'rgba(255, 153, 0, 1)',
                                                },
                                            }),
                                        }}
                                    >
                                        <FontAwesomeIcon icon={faStar} id={String(item.id)} onClick={handleStarred} />
                                    </Grid>
                                </Grid>
                                <Grid
                                    container
                                    item
                                    sx={{
                                        width: '80%',
                                        display: 'flex',
                                        justifyContent: 'space-around',
                                        alignItems: 'center',
                                        position: 'relative',
                                        bottom: 20,
                                    }}
                                >
                                    <Grid
                                        item
                                        className={classes.gridItemsWithImage}
                                        xs={5}
                                    >
                                        <img
                                            width={300}
                                            height={60}
                                            src={item.url}
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        className={classes.gridItemsWithImage}
                                        xs={6}
                                    >
                                        <FontAwesomeIcon icon={faTrashCan} />
                                    </Grid>
                                </Grid>
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
        </div>
    )
}

export default Manage
