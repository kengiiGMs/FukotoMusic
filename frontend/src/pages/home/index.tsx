import Head from "next/head"
import { useState } from "react";

import { Header } from "../../components/Header";
import styles from "./style.module.scss";

import { canSSRAuth } from "@/utils/canSSRAuth"
import { setupAPIClient } from "@/services/api";

type MusicProps = {
    id: string;
    name: string;
    banner: string;
    mp3: string;
    singer_id: string;
    singer: {
        id: string;
        name: string;
        banner: string;
    };

}

interface HomeProps {
    music: MusicProps[];
}


export default function Home({ music }: HomeProps) {

    const [musicList, setMusicList] = useState(music || []);

    return (
        < >
            <Head>
                <title>FukotoMusic | Home</title>
            </Head>
            <Header />
            <div className={styles.container}>
                <h1>Músicas Mais Tocadas</h1>
                <div className={styles.grid}>
                    {
                        musicList.map(item => (
                            <div className={styles.containerMusic} key={item.id}>
                                <h2>{item.name}</h2>
                                <h3>{item.singer.name}</h3>
                                <div className={styles.containerBanner}>
                                    <img src={`http://localhost:3333/files/music/${item.banner}`} alt="Foto Música" />
                                </div>
                                <div className={styles.containerAudio}>
                                    <audio controls>
                                        <source src={`http://localhost:3333/files/music/play/${item.mp3}`} type="audio/mp3" />
                                        Seu navegador não suporta o elemento de áudio.
                                    </audio>
                                </div>
                            </div>

                        ))
                    }
                </div>

            </div>


        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
    const apiClient = setupAPIClient(ctx);

    const response = await apiClient.get('/music');
    return {
        props: {
            music: response.data
        }
    }
})