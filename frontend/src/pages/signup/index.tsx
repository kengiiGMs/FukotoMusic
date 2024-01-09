import { useState, FormEvent, useContext, ChangeEvent } from "react"

import Head from "next/head"
import Image from "next/image"
import styles from '../../../styles/home.module.scss'
import logoImg from '../../../public/logo.png'
import Link from "next/link"

import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"

import { AuthContext } from "../../contexts/AuthContext"
import { canSSRGuest } from "../../utils/canSSRGuest"

import { toast } from 'react-toastify'
import { FiUpload } from "react-icons/fi";


export default function SignUp() {

    const [avatarUrl, setAvatarUrl] = useState('');
    const [imageAvatar, setImageAvatar] = useState(null);

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
            confirmPassword,
            imageAvatar
        }

        await signUp(data);

        setLoading(false);

    }

    function handleFile(e: ChangeEvent<HTMLInputElement>) {
        if (!e.target.files) {
            toast.error("Erro Insira a Imagem !")
            return;
        }

        const image = e.target.files[0];

        if (!image) {
            toast.error("Erro Formato de Imagem Invalida !")
            return;
        }

        if (image.type === 'image.jpeg' || image.type === 'image/png') {
            setImageAvatar(image);
            setAvatarUrl(URL.createObjectURL(e.target.files[0]))
        }

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
                        <label className={styles.labelAvatar}>
                            <span>
                                <FiUpload size={25} color="#fff" />
                            </span>
                            <input type="file" accept="image/png, image/jpeg" onChange={handleFile} />

                            {avatarUrl && (
                                <img src={avatarUrl} alt="Foto do Pefil" width={250} height={250} className={styles.preview} />
                            )}
                        </label>
                        <Button type="submit" loading={loading}>
                            Cadastrar
                        </Button>
                    </form>
                    <Link href="/" legacyBehavior>
                        <a className={styles.text}>Já Possuí uma Conta? Faça Login</a>
                    </Link>
                </div>
            </div>
        </>
    )
}

export const getServerSideProps = canSSRGuest(async (ctx) => {
    return {
        props: {}
    }
})
