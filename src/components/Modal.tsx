import React, { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    closeModal(value: boolean): void
    maxSize: string
}

const Modal:React.FC<InputProps> = ({ children, closeModal, maxSize, ...props }) => {
    return (
        <div 
            className="
                fixed 
                left-0 top-0 
                w-full h-screen 
                flex
                justify-center
                items-center
                z-20
            " >
            <div
                onClick={ () => closeModal(false) } 
                className="
                    bg-black
                    opacity-40 
                    absolute 
                    left-0 top-0 
                    w-full h-screen
                " />
            <div 
                className={`
                    relative px-7 py-6 
                    animate-arrive
                    opacity-100 bg-white 
                    w-full
                    rounded-2xl
                    max-w-${maxSize}
                `}
                {...props}
                >
                {children}
            </div>    
        </div>
    )
}

export { Modal }