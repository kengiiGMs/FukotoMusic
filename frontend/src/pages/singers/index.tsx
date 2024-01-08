import Head from "next/head"
import { useState, FormEvent, ChangeEvent } from 'react'
import { Header } from "../../components/Header"
import styles from "./styles.module.scss"

import { setupAPIClient } from "../../services/api"
import { toast } from "react-toastify"

import { canSSRAuth } from "../../utils/canSSRAuth"

import { FiUpload } from "react-icons/fi";

export default function Singers() {
    const [name, setName] = useState('');
    const [avatarUrl, setAvatarUrl] = useState('');
    const [imageAvatar, setImageAvatar] = useState(null);


    async function handleRegister(event: FormEvent) {
        event.preventDefault();

        if (name === "") {
            toast.info('Preencha Todos os Campos !')
            return
        }

        try {
            const data = new FormData();
            data.append('name', name);
            data.append('file', imageAvatar);
            const apiClient = setupAPIClient();
            await apiClient.post('/singer', data);

            toast.success('Cantor Cadastrado com Sucesso');
            setName('');
            setAvatarUrl('');
            setImageAvatar(null);
        } catch (err) {
            toast.error("Erro ao Cadastrar Cantor")
        }
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
        <>
            <Head>
                <title>FukotoMusic | Cadastre Cantores</title>
            </Head>
            <div>
                <Header />
                <main className={styles.container}>
                    <h1>Cadastrar Cantores</h1>

                    <form className={styles.form} onSubmit={handleRegister} >
                        <input type="text" placeholder="Digite o Nome do Cantor" className={styles.input} value={name} onChange={(e) => setName(e.target.value)} />
                        <label className={styles.labelAvatar}>
                            <span>
                                <FiUpload size={25} color="#fff" />
                            </span>
                            <input type="file" accept="image/png, image/jpeg" onChange={handleFile} />

                            {avatarUrl && (
                                <img src={avatarUrl} alt="Foto do Pefil" width={250} height={250} className={styles.preview} />
                            )}
                        </label>
                        <button type="submit" className={styles.buttonAdd}>
                            Cadastrar
                        </button>
                    </form>
                </main>
            </div>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
    return {
        props: {}
    }
})