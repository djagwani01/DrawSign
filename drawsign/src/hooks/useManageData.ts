import { useEffect, useState } from 'react'

export interface ManageDataTypes {
    id: number
    url: string
    starred: boolean
}

const useManageData = () => {
    const [imgUrl, setImgUrl] = useState<string>('')
    const [manageData, setManageData] = useState<ManageDataTypes[] | []>([])

    useEffect(() => {
        if (imgUrl && manageData.length < 5) {
            const data = {
                id: manageData.length === 0 ? 1 : manageData.length + 1,
                url: imgUrl,
                starred: false,
            }
            setManageData([...manageData, data])
        }
    }, [imgUrl])

    return {
        setImgUrl,
        manageData,
        setManageData,
    }
}

export default useManageData
