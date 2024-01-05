
import Head from "next/head"
import { canSSRAuth } from "../../utils/canSSRAuth"

import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';


export default function MyAccount() {

    const { user } = useContext(AuthContext)

    return (
        < >
            <Head>
                <title>FukotoMusic | Minha Conta</title>
            </Head>
            <div>
                <h1>Bem Vindo! {user?.name}</h1>
                <h2>Email: {user.email}</h2>
            </div>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
    return {
        props: {}
    }
})