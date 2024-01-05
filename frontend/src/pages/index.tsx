
import Head from "next/head"
import { Header } from "@/components/Header"

export default function Home() {
  return (
    < >
      <Head>
        <title>FukotoMusic | Home</title>
      </Head>
      <div>
        <Header />
        <h1>Olá Mundo!</h1>
      </div>
    </>
  )
}
