import React, {createContext, useState} from "react";

export const UserInfoContext = createContext ({})

function UserInfoProvider ({children}) {
    const [infos, setInfos] = useState ({})

    const config = {
        headers: {
            Authorization: `Bearer ${infos.token}`	
        }
    }

    return (
        <UserInfoContext.Provider value={{infos, setInfos, config}}>
            {children}
        </UserInfoContext.Provider>
    )
}

export default UserInfoProvider