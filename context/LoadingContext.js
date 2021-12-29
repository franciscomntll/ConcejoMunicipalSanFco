import { createContext, useContext, useState } from "react"
import LoadingLayout from "../layouts/LoadingLayout"

const initialContext = {
    loading: false,
    setLoading : () => {}
}
const LoadingContext = createContext(initialContext)

const LoadingProvider = ({children}) => {
    const [loading, setLoading] = useState(initialContext.loading)
    return (
        <LoadingContext.Provider value={{loading, setLoading}}>
            {loading && <LoadingLayout />}
            {children}
        </LoadingContext.Provider>
    )
}


const LoadingContextProvider = () => useContext(LoadingContext)

export {LoadingProvider, LoadingContextProvider}