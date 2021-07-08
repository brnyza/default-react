import React, {useContext, useState } from 'react';

import Input from '../../components/Input'
import LargeButton from '../../components/LargeButton'
// import {ReactComponent as Logo}  from '../assets/logo.svg'
import { AuthContext } from '../../contexts/auth';
import { AlertContext } from '../../contexts/alert';
import { serialize } from '../../components/Form';

interface Ireturn {
    email: string
    password: string
}

const Login: React.FC = () => {
    
    const { createAlert } = useContext(AlertContext)
    const { signIn } = useContext(AuthContext)
    
    const [loading, setLoading] = useState(false)
    
    async function handleSubmit(event: any) {
        setLoading(true)
        const { email, password }: Ireturn = serialize(event).fields
        await signIn({email, password})
        setLoading(false)
    }

    return (
        <div className="w-full h-screen flex justify-center items-center flex-col">
            <form 
            onSubmit={handleSubmit} 
            noValidate={true}
            className="border w-full max-w-sm md:max-w-md py-10 px-7 rounded-2xl transition-all" 
            >
                <div className="flex flex-col items-center text-gray-600 mb-4">
                    {/* <Logo /> */}
                </div>
                <h1 className="flex justify-center text-4xl font-bold tracking-widest text-blue-500 mb-10">Blue Marble</h1>
                <Input name="email" type="email" required/>
                <Input name="password" type="password"/>
                <Input name="Valor" type="precision" decimalsLimit={2} prefix="R$" />
                <Input name="Valor" type="text" mask="R$ 99,99" />
                <LargeButton title="Login" isLoading={loading} />
            </form>
        </div>
        )
    }
    
    export {Login}