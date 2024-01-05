import { createContext, ReactNode, useState, useEffect, useDebugValue } from 'react'
import { destroyCookie, setCookie, parseCookies } from 'nookies'

import { api } from '../services/apiClient'

import { toast } from 'react-toastify'

import Router from 'next/router'

type AuthContextData = {
    user: UserProps;
    isAuthenticated: boolean;
    signIn: (credentials: SignInProps) => Promise<void>;
    signOut: () => void;
    signUp: (credentials: SignUpProps) => Promise<void>;
}

type UserProps = {
    id: string,
    name: string,
    email: string
}

type SignInProps = {
    email: string,
    password: string
}

type SignUpProps = {
    email: string,
    name: string,
    password: string,
    confirmPassword: string
}

type AuthProviderProps = {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function signOut() {
    try {
        destroyCookie(undefined, '@nextauth.token');
        Router.push('/')
    } catch {
        console.log("Erro ao Deslogar!")
    }
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<UserProps>()
    const isAuthenticated = !!user;

    useEffect(() => {

        const { '@nextauth.token': token } = parseCookies();

        if (token) {
            api.get('/me').then(response => {
                const { id, name, email } = response.data;

                setUser({
                    id,
                    name,
                    email
                })
            })
                .catch(() => {
                    signOut();
                })
        }

    }, [])


    async function signIn({ email, password }: SignInProps) {
        try {
            const response = await api.post('/session', {
                email,
                password
            })

            const { id, token, name } = response.data;

            setCookie(undefined, '@nextauth.token', token, {
                maxAge: 60 * 60 * 24 * 30,
                path: "/"
            })

            setUser({
                id,
                name,
                email,
            })

            api.defaults.headers['Authorization'] = `Bearer ${token}`

            toast.success('Logado com Sucesso!')

            Router.push('/')

        } catch (err) {

            toast.error('ERRO ao Logar!')

            console.log("Erro ao Logar", err)
        }
    }

    async function signUp({ name, email, password, confirmPassword }: SignUpProps) {
        try {

            const response = await api.post('/users', {
                name,
                email,
                password,
                confirmPassword
            })

            toast.success("Perfil Criado com Sucesso!")

            Router.push('/')

        } catch (err) {
            toast.error("ERRO ao Cadastrar Login!")
            console.log("Erro ao Cadastrar", err);
        }
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut, signUp }}>
            {children}
        </AuthContext.Provider>
    )
}