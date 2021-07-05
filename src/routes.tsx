import { useContext, useEffect } from 'react'

import {
    Switch,
    Route
} from "react-router-dom"
import { AuthContext } from './contexts/auth'

import api from './services/api'
import { Login} from './pages/auth/Login'
import Example from './pages/Example/Example'
export default function Routes() {

    const { isAuthenticated } = useContext(AuthContext)
    
    useEffect(() => {
        api.interceptors.response.use( response => response, async (error) => {
            if(error.response.status === 401) {
                
                const { config } = error
                config._retryCount = config._retryCount || 0
                if(config._retryCount >= 3) return error
                config._retryCount +=1
    
                try {
                    const response = await api.get('/refreshToken')
                    const token = response.data
                    config.headers.Authorization = `Bearer ${token.token}`
                    const defaultResponse = await api(config)
                    document.cookie = `access_token=${token.token};expires=${token.expires_at}`
                    
                    return defaultResponse
    
                } catch (error) {
                    return Promise.reject(error)
                }
            }
            return Promise.reject(error)
        })
    }, [isAuthenticated])

    return (
        <Switch>
            { isAuthenticated ?
                <>
                    <Route path='/' exact component={Example} />
                </>
             :
                <>
                    <Route path="*">
                        <Login/>
                    </Route>
                </>
             }
        </Switch>
    )
}