import { useEffect } from "react";
import { createContext, useState } from "react"
import api from "../services/api";

type AuthContextType = {
    isAuthenticated: boolean
    signIn(data: SignInData): Promise<void>
}

type SignInData = {
    email: FormDataEntryValue
    password: FormDataEntryValue
}
type SignInResponse = {
    type: string
    token: string
    expires_at: string
}

export const AuthContext = createContext({  } as AuthContextType)

const AuthProvider:React.FC = ({ children }) => {

    const [user, setUser] = useState<object | null>(null)

    useEffect(() => {
        (async function() {
            if(document.cookie.includes('access_token')) {
                const cookies = document.cookie.split(';')
                const accessToken = cookies.filter( item => (item.includes('access_token')) && item)[0].split('=')[1]
                api.defaults.headers.Authorization = `Bearer ${accessToken}`
                if(!user) {
                    const user = await api.get('/users/me')
                    setUser(user.data)
                }
            }
            return null

        })()
    }, [user])

    async function signIn({ email, password }: SignInData) {
        return setUser({ status: 'logado'})
        
        // const response = await api.post('/login', { email, password })
        // const { type, token, expires_at }: SignInResponse = response.data
        // api.defaults.headers.Authorization = `${type} ${token}`

        // const user = await api.get('/users/me')
        // setUser(user.data)
        // document.cookie = `access_token=${token};expires=${expires_at}`
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated: !!user, signIn }} >
            { children }
        </AuthContext.Provider>
    )
}

export { AuthProvider }