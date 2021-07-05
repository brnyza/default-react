import { createContext, useState } from "react"

interface AlertContextType {
    message: string
    type: string
    createAlert(message: string, type: string): void
}

export const AlertContext = createContext({  } as AlertContextType)


const AlertProvider:React.FC = ({ children }) => {

    const [type, setType] = useState('')
    const [message, setMessage] = useState('')

    function createAlert(newMessage: string, type: string) {
        setMessage(newMessage)
        setType(type)
    }

    return (
        <AlertContext.Provider value={{ message: message, type, createAlert }} >
            { children }
        </AlertContext.Provider>
    )
}

export { AlertProvider }