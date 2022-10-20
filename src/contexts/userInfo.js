import React, {createContext, useState} from "react";

export const UserInfoContext = createContext ({})

function UserInfoProvider ({children}) {
    const [infos, setInfos] = useState ({})
    const [todayArr, setTodayArr] = useState ([])
    const [arrChecked, setArrChecked] = useState ([])
    const [percent, setPercent] = useState (0)

    function calcPercent (item) {
        setArrChecked(item.filter(h => h.done !== false))
        setTodayArr(item)

        if (todayArr.length !== 0 && item.filter(h => h.done !== false).length !== 0) {
            let var1 = item.filter(h => h.done !== false).length / item.length 
            let var2 = var1 * 100
            setPercent(var2.toFixed(0))
        }

        if (item.filter(h => h.done !== false).length === 0) {
            setPercent(0)
        }
    }

    const config = {
        headers: {
            Authorization: `Bearer ${infos.token}`	
        }
    }

    return (
        <UserInfoContext.Provider value={{infos, setInfos, percent, setPercent, arrChecked, setArrChecked, setTodayArr, calcPercent, config}}>
            {children}
        </UserInfoContext.Provider>
    )
}

export default UserInfoProvider