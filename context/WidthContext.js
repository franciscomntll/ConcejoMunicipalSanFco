import { createContext, useContext, useState } from "react"

const initialContext = {
    width: true,
    setWidth : () => {}
}
const WidthContext = createContext(initialContext)

const WidthContextProvider = ({children}) => {
    const [width, setWidth] = useState(initialContext.width)
    return (
        <WidthContext.Provider value={{width, setWidth}}>
            {children}
        </WidthContext.Provider>
    )
}




export {WidthContext, WidthContextProvider}