import { useContext, FormEvent, useState } from "react"

import Head from "next/head"

import Image from "next/image"

import styles from '../../../styles/home.module.scss'

import logoImg from '../../../public/logo.png'

import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"

import Link from "next/link"

import { AuthContext } from "../../contexts/AuthContext"

export default function SignIn() {
    const { signIn } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [loading, setLoading] = useState(false);


    async function handleLogin(event: FormEvent) {
        event.preventDefault();
        let data = {
            email,
            password
        }

        await signIn(data)
    }
    return (
        < >
            <Head>
                <title>FukotoMusic | Login</title>
            </Head>

            <div className={styles.containerCenter}>
                <Image src={logoImg} alt="Logo FukotoMusic" className={styles.logoImg} width={230} />

                <div className={styles.login}>
                    <form onSubmit={handleLogin}>
                        <Input placeholder="Digite o Seu Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Input placeholder="Digite a Sua Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <Button type="submit" loading={false}>
                            Acessar
                        </Button>
                    </form>
                    <Link href="/signup" legacyBehavior>
                        <a className={styles.text}>Ainda Não Possuí uma Conta? Cadastre-se</a>
                    </Link>
                </div>
            </div>
        </>
    )
}
