import { useState, FormEvent, useContext } from "react"

import Head from "next/head"

import Image from "next/image"

import styles from '../../../styles/home.module.scss'

import logoImg from '../../../public/logo.png'

import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"

import { AuthContext } from "../../contexts/AuthContext"

import Link from "next/link"

import { toast } from 'react-toastify'

export default function SignUp() {
    const { signUp } = useContext(AuthContext)

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [loading, setLoading] = useState(false);

    async function handleSignUp(event: FormEvent) {
        event.preventDefault();

        if (name === '' || email === '' || password === '' || confirmPassword === '') {
            toast.info("Preencha Todos os Campos !")
            return;
        }

        setLoading(true);

        let data = {
            name,
            email,
            password,
            confirmPassword
        }

        await signUp(data);

        setLoading(false);

    }

    return (
        < >
            <Head>
                <title>FukotoMusic | Cadastre o seu Login</title>
            </Head>

            <div className={styles.containerCenter}>
                <Image src={logoImg} alt="Logo FukotoMusic" className={styles.logoImg} width={230} />
                <div className={styles.login}>
                    <form onSubmit={handleSignUp}>

                        <Input placeholder="Digite o Seu Nome" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        <Input placeholder="Digite o Seu Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Input placeholder="Digite a Sua Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <Input placeholder="Confirme a sua Senha" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        <Button type="submit" loading={loading}>
                            Cadastrar
                        </Button>
                    </form>
                    <Link href="/signin" legacyBehavior>
                        <a className={styles.text}>Já Possuí uma Conta? Faça Login</a>
                    </Link>
                </div>
            </div>
        </>
    )
}
