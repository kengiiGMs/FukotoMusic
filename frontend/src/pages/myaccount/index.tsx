
import Head from "next/head"
import { canSSRAuth } from "../../utils/canSSRAuth"

import { Header } from "../../components/Header";

import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';


export default function MyAccount() {

    const { user } = useContext(AuthContext)

    return (
        < >
            <Head>
                <title>FukotoMusic | Minha Conta</title>
            </Head>
            <Header />
            <div>

                <h1>Nome: {user?.name}</h1>
                <h2>Email: {user.email}</h2>
            </div>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
    return {
        props: {

        }
    }
})