import React from 'react'
import styles from './styles'
import Header from './components/Header/Header'
import { tabs } from './components/Header/config'

const App = () => {
    const classes = styles()
    return (
        <div className={classes.mainApp}>
            <Header tabs={tabs} />
        </div>
    )
}

export default App
