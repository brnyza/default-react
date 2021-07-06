import { InputHTMLAttributes } from 'react'
import { MdExitToApp } from 'react-icons/md'
import { useHistory } from 'react-router-dom'
import {MdArrowBack} from 'react-icons/md'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    modulo: string
    backUrl: string
}

const HeaderTop: React.FC<InputProps> = ({ modulo, backUrl }) => {
    
    const history = useHistory()

    return (
        <header className="top-0 left-0 w-full h-16 bg-white border-b-2 flex items-center justify-center">
            <div className="w-full max-w-6xl flex justify-between">
                <div className="flex gap-2">
                    <button onClick={ ()=> history.goBack()} className="flex items-center">
                        <MdArrowBack className="text-xl"/>
                    </button>
                    <h4 className="flex text-lg font-bold pl-2 items-center">
                        {modulo}
                    </h4>
                </div>
                <a href={backUrl} rel="noreferrer">
                    <MdExitToApp className="text-2xl" />
                </a>
            </div>
        </header>
    )
}

export { HeaderTop }