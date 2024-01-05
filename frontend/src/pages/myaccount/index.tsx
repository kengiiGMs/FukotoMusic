
import Head from "next/head"
import { canSSRAuth } from "../../utils/canSSRAuth"

export default function MyAccount() {
    return (
        < >
            <Head>
                <title>FukotoMusic | Minha Conta</title>
            </Head>
            <div>
                <h1>Olá Mundo!</h1>
            </div>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
    return {
        props: {}
    }
})