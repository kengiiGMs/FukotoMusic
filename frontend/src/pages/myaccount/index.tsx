
import Head from "next/head"
import { canSSRAuth } from "../../utils/canSSRAuth"
import { useState } from "react";

import { Header } from "../../components/Header";
import styles from './style.module.scss'
import Modal from 'react-modal';

import { ModalAlterPassword } from "../../components/ModalAlterPassword";
import { ModalAlterProfile } from "../../components/ModalAlterProfile";

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

export type UserDestailsProps = {
    name: string,
    email: string,
}


export default function MyAccount({ userDetails }: ItemProps) {

    const [userDetail, setUserDetail] = useState(userDetails);

    const [modalVisiblePass, setModalVisiblePass] = useState(false);

    const [modalVisibleProf, setModalVisibleProf] = useState(false);

    const [modalItem, setModalItem] = useState<UserDestailsProps>();

    async function handleOpenModalPass() {
        setModalVisiblePass(true);
    }

    async function handleCloseModalPass() {
        setModalVisiblePass(false);
    }

    async function handleOpenModalProf() {

        const apiClient = setupAPIClient();

        const response = await apiClient.get('/me')

        setModalItem(response.data);

        setModalVisibleProf(true);
    }

    async function handleCloseModalProf() {
        setModalVisibleProf(false);
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
                    <button className={styles.buttonSubmit} onClick={() => handleOpenModalProf()}>
                        Editar Informações
                    </button>
                </div>

                <div className={styles.containerButton}>
                    <button className={styles.buttonSubmit} onClick={() => handleOpenModalPass()}>
                        Alterar Senha
                    </button>
                </div>
            </div >

            {modalVisiblePass && (
                <ModalAlterPassword isOpen={modalVisiblePass} onRequestClose={handleCloseModalPass} />
            )
            }

            {modalVisibleProf && (
                <ModalAlterProfile isOpen={modalVisibleProf} onRequestClose={handleCloseModalProf} user={modalItem} />
            )
            }


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
