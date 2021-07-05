/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react"
import { AlertContext } from "../contexts/alert"

const Toast:React.FC = () => {
    const { message, type, createAlert } = useContext(AlertContext)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        function clearText() {
            const cleartext = setTimeout(() => {
                createAlert('', '')
                clearTimeout(cleartext)
            }, 1000)
        }
        
        if(!message) return  setVisible(false)

        setVisible(true)
        const counter = setTimeout(() => {
            setVisible(false)
            clearText()
            clearTimeout(counter)
        }, 4000)
    }, [message])

    return (
        <>
            <div 
                className={`
                    absolute
                    right-0
                    w-screen
                    h-screen  
                    pointer-events-none
                    overflow-hidden
                    z-30
                `}>
                    <div 
                        className={`
                            absolute
                            animate-bounce 
                            top-8 rounded-lg 
                            p-4
                            shadow-lg 
                            w-50   
                            padding
                            flex
                            text-white
                            ${(type === 'danger') && 'bg-red-500'}
                            ${(type === 'success') && 'bg-green-500'}
                            ${(type === '') && 'bg-white text-black'}
                            justify-center
                            items-center
                            ${visible ? 'right-5' : '-right-56'}
                            transition-all
                        `}
                    >
                        { message }
                    </div>
            </div>    
        </>
    )
}

export { Toast }