import Head from "next/head";
import styles from './style.module.scss'
import { Header } from "../../components/Header";

import { canSSRAuth } from "@/utils/canSSRAuth";

export default function Albuns() {
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

                        <select>
                            <option>
                                Lisa
                            </option>
                            <option>
                                Reona
                            </option>
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
    return {
        props: {}
    }
})