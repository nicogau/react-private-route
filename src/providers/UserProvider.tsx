import { ReactNode, useState } from "react"
import { initialUserState, User, UserContext } from "../contexts/UserContext"

interface UserProviderProps {
    children: ReactNode
}

const UserProvider = ({children}: UserProviderProps) => {
    const [userState, setUserState] = useState<User>(initialUserState)
    const setUser = (user: User) => {setUserState(user)}
    const logout = () => { setUserState(initialUserState)}

    return (
        <UserContext.Provider value={{...userState, setUser, logout}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserProvider}
