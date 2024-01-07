import Head from "next/head"
import { useState, FormEvent } from 'react'
import { Header } from "../../components/Header"
import styles from "./styles.module.scss"

import { setupAPIClient } from "../../services/api"
import { toast } from "react-toastify"

import { canSSRAuth } from "../../utils/canSSRAuth"

export default function Singers() {
    const [name, setName] = useState('');

    async function handleRegister(event: FormEvent) {
        event.preventDefault();

        if (name === "") {
            toast.info('Preencha Todos os Campos !')
            return
        }

        try {
            const apiClient = setupAPIClient();
            await apiClient.post('/singer', {
                name: name
            })

            toast.success('Cantor Cadastrado com Sucesso')
            setName('')
        } catch (err) {
            toast.error("Erro ao Cadastrar Cantor")
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