import { createContext, useContext, useEffect, useState } from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../server/database/auth/firebase";

const initialContext = {
    user: null,
    setUser : () => {}
}
const AuthContext = createContext(initialContext)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(initialContext.user)

    useEffect(() => {
        app
        const auth = getAuth()
        auth.onAuthStateChanged(user => {
            setUser(user)
        })
    }, [])
    
    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}


const AuthContextProvider = () => useContext(AuthContext)

export {AuthProvider, AuthContextProvider}