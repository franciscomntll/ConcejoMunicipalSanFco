import { createContext, useContext, useState } from "react"

const initialContext = {
    width: true,
    setWidth : () => {}
}
const WidthContext = createContext(initialContext)

const WidthProvider = ({children}) => {
    const [width, setWidth] = useState(initialContext.width)
    return (
        <WidthContext.Provider value={{width, setWidth}}>
            {children}
        </WidthContext.Provider>
    )
}


const WidthContextProvider = () => useContext(WidthContext)

export {WidthProvider, WidthContextProvider}