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

interface AlbumProps {
    albumList: ItemProps[]
}

export default function Albuns({ albumList }: AlbumProps) {

    const [album, setAlbum] = useState(albumList || [])
    const [albumSelected, setAlbumSelected] = useState(0)
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [avatarUrl, setAvatarUrl] = useState('');
    const [imageAvatar, setImageAvatar] = useState(null);
    const [musicUrl, setMusicUrl] = useState('');
    const [musicAvatar, setMusicAvatar] = useState(null);


    function handleChangeAlbum(event) {
        setAlbumSelected(event.target.value)
    }

    async function handleRegister(event: FormEvent) {
        event.preventDefault();

        if (name === "" || date === "") {
            toast.info('Preencha Todos os Campos !')
            return
        }

        try {
            const data = new FormData();
            data.append('name', name);
            data.append('file', imageAvatar);
            data.append('album_id', album[albumSelected].id);
            data.append('mp3', musicAvatar);
            data.append('releaseDate', date)


            const apiClient = setupAPIClient();
            await apiClient.post('/music', data)

            toast.success('Música Cadastrada com Sucesso')
            setName('')
            setAlbumSelected(0)
            setAvatarUrl('');
            setImageAvatar(null);
            setMusicAvatar(null);
            setMusicUrl('');
        } catch (err) {
            toast.error("Erro ao Cadastrar Música !")
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

        if (image.type === 'image/jpeg' || image.type === 'image/png' || image.type === 'image/jpg') {
            setImageAvatar(image);
            setAvatarUrl(URL.createObjectURL(e.target.files[0]))
        }
    }

    function handleMusic(m: ChangeEvent<HTMLInputElement>) {
        if (!m.target.files) {
            toast.error("Erro Insira a Música !")
            return;
        }

        const music = m.target.files[0];


        if (!music) {
            toast.error("Erro Formato de Imagem Invalida !")
            return;
        }
        if (music.type === 'audio/mpeg') {
            setMusicAvatar(music);
            setMusicUrl(URL.createObjectURL(m.target.files[0]))
            console.log('Nova URL de música:', musicUrl);
        }
        console.log('Tipo de arquivo de música:', music.type);
    }

    return (
        <>
            <Head>
                <title>FukotoMusic | Músicas</title>
            </Head>
            <div>
                <Header />
                <main className={styles.container}>
                    <h1>Cadastrar Músicas</h1>

                    <form className={styles.form} onSubmit={handleRegister}>
                        <input type="text" placeholder="Digite o nome da Música" className={styles.input} value={name} onChange={(e) => setName(e.target.value)} />

                        <select value={albumSelected} onChange={handleChangeAlbum}>
                            {album.map((item, index) => {
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

                        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className={styles.input} />

                        <label className={styles.labelMusic}>
                            {musicUrl ? null : <p className={styles.textInputMusic}>Insira o Arquivo da Música</p>}
                            <input type="file" accept="audio/mpeg" onChange={handleMusic} />

                            {musicUrl && (
                                <audio controls key={musicUrl}>
                                    <source src={musicUrl} type="audio/mpeg" />
                                    Seu navegador não suporta o elemento de áudio.
                                </audio>
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

    const response = await apliClient.get('/album')

    return {
        props: {
            albumList: response.data
        }
    }
})