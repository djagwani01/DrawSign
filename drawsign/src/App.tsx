import React, { createContext, Dispatch, SetStateAction } from 'react'
import { Route, Routes } from 'react-router-dom'
import styles from './styles'
import Header from './components/Header/Header'
import { tabs } from './components/Header/config'
import SignPad from './components/SignPad/SignPad'
import Manage from './components/Manage/Manage'
import useManageData, { ManageDataTypes } from './hooks/useManageData'
import SnackBar from './components/Snackbar/Snackbar'
import { MANAGE, SIGN_PAD } from './Routes'

export interface MainContextTypes {
    setImgUrl: Dispatch<SetStateAction<string>>
    manageData: ManageDataTypes[]
    setManageData: Dispatch<SetStateAction<ManageDataTypes[] | []>>
}

export const mainContext = createContext<MainContextTypes | object>({})

const App = () => {
    const classes = styles()
    const { setImgUrl, manageData, setManageData } = useManageData()

    return (
        <div className={classes.mainApp}>
            <Header tabs={tabs} />
            <SnackBar />
            <Routes>
                <Route
                    path={SIGN_PAD}
                    element={
                        <SignPad
                            data={{ setImgUrl, manageData, setManageData }}
                        />
                    }
                />
                <Route
                    path={MANAGE}
                    element={
                        <Manage
                            data={{ setImgUrl, manageData, setManageData }}
                        />
                    }
                />
            </Routes>
        </div>
    )
}

export default App
