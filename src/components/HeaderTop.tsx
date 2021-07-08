import { InputHTMLAttributes } from 'react'
import { MdExitToApp } from 'react-icons/md'
import { useHistory } from 'react-router-dom'
import {MdArrowBack} from 'react-icons/md'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    modulo: string
    backUrl: string
    noBack?: boolean
    maxSize?: string
}

const HeaderTop: React.FC<InputProps> = ({ modulo, backUrl, noBack, maxSize }) => {
    
    const history = useHistory()

    return (
        <header className="px-4 lg:px-0 top-0 left-0 w-full h-16 bg-white border-b-2 flex items-center justify-center">
            <div className={`w-full ${(maxSize) ? `max-w-${maxSize}` : 'max-w-6xl' } flex justify-between`}>
                <div className="flex gap-2">
                    {
                        !noBack &&
                        <button onClick={ ()=> history.goBack()} className="flex items-center">
                            <MdArrowBack className="text-xl"/>
                        </button>
                    }
                    <h4 className="flex text-lg font-bold items-center">
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