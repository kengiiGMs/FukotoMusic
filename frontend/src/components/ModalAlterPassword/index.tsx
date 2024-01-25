import Modal from 'react-modal';
import styles from './style.module.scss';
import { useState, FormEvent } from 'react';

import { setupAPIClient } from '../../services/api';

import { FiX } from 'react-icons/fi';

import { toast } from 'react-toastify'

interface ModalAlterPasswordProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function ModalAlterPassword({ isOpen, onRequestClose }: ModalAlterPasswordProps) {

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

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

    async function handleLogin(event: FormEvent) {
        event.preventDefault();

        if (password === '' || confirmPassword === '') {
            toast.info("Preencha Todos os Campos !")
            return
        }

        if (password != confirmPassword) {
            toast.error("As Senhas não são Iguais !")
            return
        }

        let data = {
            password: password,
            confirmPassword: confirmPassword
        }

        const apiClient = setupAPIClient();
        await apiClient.post('/me/alterPassword', data);

        toast.success("Senha Alterada com Sucesso !")
        setPassword('');
        setConfirmPassword('');
        onRequestClose();
    }

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles} >
            <button
                type='button' onClick={onRequestClose} className='react-modal-close' style={{ background: 'transparent', border: 0 }}>
                <FiX size={45} color="red" />
            </button>
            <form onSubmit={handleLogin} className={styles.containerForm}>
                <h2>Alterar Senha</h2>
                <input placeholder="Digite a sua Nova Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input placeholder="Confirme a sua Nova Senha" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                <button type="submit">
                    Acessar
                </button>
            </form>

        </Modal>
    )
}