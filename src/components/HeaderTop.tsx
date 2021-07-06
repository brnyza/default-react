import { InputHTMLAttributes } from 'react'
import { MdExitToApp } from 'react-icons/md'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    modulo: string
    backUrl: string
}

const HeaderTop: React.FC<InputProps> = ({ modulo, backUrl }) => {
    return (
        <header className="top-0 left-0 w-full h-16 bg-white border-b-2 flex items-center justify-center">
            <div className="w-full max-w-6xl flex justify-between">
                <h4 className="flex text-md">
                    {modulo}
                </h4>
                <a href={backUrl} rel="noreferrer">
                    <MdExitToApp className="text-2xl" />
                </a>
            </div>
        </header>
    )
}

export { HeaderTop }