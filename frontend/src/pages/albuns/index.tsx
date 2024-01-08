import Head from "next/head";
import styles from './style.module.scss'
import { Header } from "../../components/Header";

import { canSSRAuth } from "../../utils/canSSRAuth";
import { setupAPIClient } from "../../services/api";
import { useState, FormEvent, ChangeEvent } from "react";
import { toast } from "react-toastify";

import { FiUpload } from "react-icons/fi";

type ItemProps = {
    id: string;
    name: string
}

interface SingerProps {
    singerList: ItemProps[]
}

export default function Albuns({ singerList }: SingerProps) {

    const [singer, setSinger] = useState(singerList || [])
    const [singerSelected, setSingerSelected] = useState(0)
    const [name, setName] = useState('');
    const [avatarUrl, setAvatarUrl] = useState('');
    const [imageAvatar, setImageAvatar] = useState(null);

    function handleChangeSinger(event) {
        setSingerSelected(event.target.value)
    }

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
            data.append('singer_id', singer[singerSelected].id);

            const apiClient = setupAPIClient();
            await apiClient.post('/album', data)

            toast.success('Album Cadastrado com Sucesso')
            setName('')
            setSingerSelected(0)
            setAvatarUrl('');
            setImageAvatar(null);
        } catch (err) {
            toast.error("Erro ao Cadastrar Album !")
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
                <title>FukotoMusic | Albuns</title>
            </Head>
            <div>
                <Header />
                <main className={styles.container}>
                    <h1>Cadastrar Albuns</h1>

                    <form className={styles.form} onSubmit={handleRegister}>
                        <input type="text" placeholder="Digite o nome do Album" className={styles.input} value={name} onChange={(e) => setName(e.target.value)} />

                        <select value={singerSelected} onChange={handleChangeSinger}>
                            {singer.map((item, index) => {
                                return (
                                    <option key={item.id} value={index}>
                                        {item.name}
                                    </option>
                                )
                            })}
                        </select>

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
    const apliClient = setupAPIClient(ctx);

    const response = await apliClient.get('/singer')

    return {
        props: {
            singerList: response.data
        }
    }
})