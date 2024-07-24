import {createContext, useContext} from "react"


export const AppContext = createContext();

export const AppContextProvider = (props) => {

    const phone = "13255411"
    const name = "Saddam"
    return (
        <AppContext.Provider value={{phone, name}}>
            {props.children}
        </AppContext.Provider>
    )
}