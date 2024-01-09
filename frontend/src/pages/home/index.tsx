import Head from "next/head"

import { Header } from "../../components/Header";

import { canSSRAuth } from "@/utils/canSSRAuth"


export default function SignIn() {


    return (
        < >
            <Head>
                <title>FukotoMusic | Home</title>
            </Head>
            <Header />
            <h1>Home</h1>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
    return {
        props: {}
    }
})