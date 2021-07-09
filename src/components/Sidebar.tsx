import { InputHTMLAttributes, useState } from "react"

import { Link } from "react-router-dom"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
}

const SideBar: React.FC<InputProps> = ({children}) => {

    const [isopen, setIsopen] = useState(false)

    return(
        <>
         <nav className={`
            hidden 
            sm:flex flex-col pt-10 
            justify-between items-center py-4 
            fixed top-0 left-0 w-full 
            shadow bg-white h-screen 
            max-w-xxs
            transition-all 
            z-10
            dark:bg-gray-900 dark:text-white
            ${isopen ? 'max-w-xsm' : ''}
           `}
            onMouseOver={() => setIsopen(true)}
            onMouseOut={() => setIsopen(false)}
        >

            <ul className="flex flex-col gap-4 w-full dark:bg-gray-900 dark:text-white">
                {children}
            </ul>
        </nav>
        </>
    )
}


const SideBarItem: React.FC<any> = ({children, title, to}) => {
    return (
        <li className={`
            flex items-center overflow-hidden hover:bg-gray-100 dark:hover:bg-gray-700 py-2 w-full hover:cursor-pointer transition-all 
        `}>
            
            <Link to={to} className="flex w-full h-auto hover:text-yellow-500">
                    <div className="px-5 text-xl">
                        {children}
                    </div>
                    <span className={`w-full max-w-0 transition-all`}>
                        {title}        
                    </span>
                </Link>
        </li>
    )
}

export { SideBar, SideBarItem }
