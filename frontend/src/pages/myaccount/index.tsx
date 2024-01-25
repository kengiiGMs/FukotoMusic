
import Head from "next/head"
import { canSSRAuth } from "../../utils/canSSRAuth"
import { useState } from "react";

import { Header } from "../../components/Header";
import styles from './style.module.scss'
import Modal from 'react-modal';

import { ModalAlterPassword } from "../../components/ModalAlterPassword";

import { setupAPIClient } from "../../services/api";

import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

interface UserProps {
    id: string;
    name: string,
    banner: string,
    email: string
}

interface ItemProps {
    userDetails: UserProps
}


export default function MyAccount({ userDetails }: ItemProps) {

    const [userDetail, setUserDetail] = useState(userDetails);

    const [modalItem, setModalItem] = useState();
    const [modalVisible, setModalVisible] = useState(false);

    async function handleOpenModal() {
        setModalVisible(true);
    }

    async function handleCloseModal() {
        setModalVisible(false);

    }

    const { user } = useContext(AuthContext)

    const linkBanner = "http://localhost:3333/files/user/" + userDetail.banner;

    Modal.setAppElement('#__next');

    return (
        < >
            <Head>
                <title>FukotoMusic | Minha Conta</title>
            </Head>
            <Header />
            <div className={styles.container}>
                <img src={linkBanner} alt="Foto do Pefil" width={250} height={250} className={styles.imgProfile} />

                <h1>Nome: {user?.name}</h1>
                <h2>Email: {user?.email}</h2>

                <div className={styles.containerButton}>
                    <button className={styles.buttonSubmit}>
                        Editar Informações
                    </button>
                </div>

                <div className={styles.containerButton}>
                    <button className={styles.buttonSubmit} onClick={() => handleOpenModal()}>
                        Alterar Senha
                    </button>
                </div>
            </div>

            {modalVisible && (
                <ModalAlterPassword isOpen={modalVisible} onRequestClose={handleCloseModal} />
            )}
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {

    const apliClient = setupAPIClient(ctx);

    const response = await apliClient.get('/me')

    return {
        props: {
            userDetails: response.data
        }
    }
})
