import React, {createContext, useState} from "react";

export const UserInfoContext = createContext ({})

function UserInfoProvider ({children}) {
    const [percent, setPercent] = useState (0)

    //Pegando as informações do usuário no LocalStorage
    const stringifyInfos = localStorage.getItem('userInfos')
    const infos = (JSON.parse(stringifyInfos))


    function calcPercent (item) {
        if (item.length !== 0 && item.filter(h => h.done !== false).length !== 0) {
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
            Authorization: `Bearer ${infos === null ? '' : infos.token} `
        }
    }

    return (
        <UserInfoContext.Provider value={{infos, percent, setPercent, calcPercent, config}}>
            {children}
        </UserInfoContext.Provider>
    )
}

export default UserInfoProvider