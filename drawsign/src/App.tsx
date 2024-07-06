import React from 'react'
import { Route, Routes } from 'react-router-dom'
import styles from './styles'
import Header from './components/Header/Header'
import { tabs } from './components/Header/config'
import SignPad from './components/SignPad/SignPad'
import Manage from './components/Manage/Manage'

const App = () => {
    const classes = styles()
    return (
        <div className={classes.mainApp}>
            <Header tabs={tabs} />
            <Routes>
                <Route path="/" element={<SignPad />} />
                <Route path="/manage" element={<Manage />} />
            </Routes>
        </div>
    )
}

export default App
