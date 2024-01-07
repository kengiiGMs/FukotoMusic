import Head from "next/head";
import styles from './style.module.scss'
import { Header } from "../../components/Header";

import { canSSRAuth } from "../../utils/canSSRAuth";
import { setupAPIClient } from "../../services/api";
import { useState } from "react";

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

    function handleChangeSinger(event) {
        setSingerSelected(event.target.value)
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

                    <form className={styles.form}>
                        <input type="text" placeholder="Digite o nome do Album" className={styles.input} />

                        <select value={singerSelected} onChange={handleChangeSinger}>
                            {singer.map((item, index) => {
                                return (
                                    <option key={item.id} value={index}>
                                        {item.name}
                                    </option>
                                )
                            })}
                        </select>


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