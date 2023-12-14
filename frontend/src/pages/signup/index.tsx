
import Head from "next/head"

import Image from "next/image"

import styles from '../../../styles/home.module.scss'

import logoImg from '../../../public/logo.png'

import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"

import Link from "next/link"

export default function SignUp() {
    return (
        < >
            <Head>
                <title>FukotoMusic | Cadastre o seu Login</title>
            </Head>

            <div className={styles.containerCenter}>
                <Image src={logoImg} alt="Logo FukotoMusic" className={styles.logoImg} width={230} />
                <div className={styles.login}>
                    <form>

                        <Input placeholder="Digite o Seu Nome" type="text" />
                        <Input placeholder="Digite o Seu Email" type="email" />
                        <Input placeholder="Digite a Sua Senha" type="password" />
                        <Input placeholder="Confirme a sua Senha" type="password" />
                        <Button type="submit" loading={false}>
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
