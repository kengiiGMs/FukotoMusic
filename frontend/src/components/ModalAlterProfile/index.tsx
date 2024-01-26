import Modal from 'react-modal';
import styles from './style.module.scss';
import { FormEvent, useState, ChangeEvent } from 'react';

import { toast } from 'react-toastify';

import { FiX } from 'react-icons/fi';

import { UserDestailsProps } from '../../pages/myaccount';

import { FiUpload } from "react-icons/fi";

import { setupAPIClient } from '../../services/api';

import Router from 'next/router'

interface ModalAlterPasswordProps {
    isOpen: boolean;
    onRequestClose: () => void;
    user: UserDestailsProps
}

export function ModalAlterProfile({ isOpen, onRequestClose, user }: ModalAlterPasswordProps) {
    const [avatarUrl, setAvatarUrl] = useState('');
    const [imageAvatar, setImageAvatar] = useState(null);
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);

    const customStyles = {
        content: {
            top: '50%',
            bottom: 'auto',
            left: '50%',
            right: 'auto',
            padding: '30px',
            transform: 'translate(-50%,-50%)',
            backgroundColor: 'whitesmoke'
        }
    }

    async function handleAlterProfile(event: FormEvent) {
        event.preventDefault();

        if (email === '' || name === '') {
            toast.info("Preencha Todos os Campos !")
            return
        }


        try {
            const data = new FormData();
            data.append('name', name);
            data.append('email', email)
            data.append('file', imageAvatar);
            const apiClient = setupAPIClient();
            await apiClient.put('me/alterUser', data);
            onRequestClose();

            toast.success('Dados Atualizados com Sucesso');

            setTimeout(() => {
                window.location.reload();
            }, 4000);



        } catch (err) {
            console.log(err)
            toast.error("Erro ao Atualizar Dados")
        }
    }

    function handleFile(e: ChangeEvent<HTMLInputElement>) {
        if (!e.target.files) {
            toast.error("Erro Insira a Imagem !")
            return;
        }

        const image = e.target.files[0];

        if (!image) {
            toast.error("Erro Formato de Imagem Invalida !")
            return;
        }

        if (image.type === 'image/jpeg' || image.type === 'image/png' || image.type === 'image/jpg') {
            setImageAvatar(image);
            setAvatarUrl(URL.createObjectURL(e.target.files[0]))
        }

    }

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles} >
            <button
                type='button' onClick={onRequestClose} className='react-modal-close' style={{ background: 'transparent', border: 0 }}>
                <FiX size={45} color="red" />
            </button>
            <form onSubmit={handleAlterProfile} className={styles.containerForm}>
                <h2>Alterar Informações do Perfil</h2>

                <input placeholder="Confirme o seu Nome" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <input placeholder="Confirme o seu Email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label className={styles.labelAvatar}>
                    <span>
                        <FiUpload size={25} color="#fff" />
                    </span>
                    <input type="file" accept="image/png, image/jpeg" onChange={handleFile} />

                    {avatarUrl && (
                        <img src={avatarUrl} alt="Foto do Pefil" width={250} height={250} className={styles.preview} />
                    )}
                </label>

                <button type="submit">
                    Acessar
                </button>
            </form>

        </Modal>
    )
}