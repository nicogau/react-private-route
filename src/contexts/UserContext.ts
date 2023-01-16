import { createContext, useContext } from "react";

export interface User {login: string, role?: string, loggedin: boolean }
export interface IUserContext extends User {
 setUser: (user: User) => void
 logout: () => void 
}

export const initialUserState = {login: "", loggedin: false}

const UserContext = createContext<IUserContext>({ ...initialUserState, setUser: (user: User) => {}, logout: () => {}})

const useUser = () => useContext<IUserContext>(UserContext)

export {UserContext, useUser }