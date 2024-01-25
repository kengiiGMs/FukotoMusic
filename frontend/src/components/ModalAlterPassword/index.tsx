import Modal from 'react-modal';
import styles from './style.module.scss';
import { useState, FormEvent } from 'react';

import { setupAPIClient } from '@/services/api';

import { Input } from '../ui/input';
import { Button } from "../ui/button"

import { FiX } from 'react-icons/fi';

import { toast } from 'react-toastify'

interface ModalAlterPasswordProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function ModalAlterPassword({ isOpen, onRequestClose }: ModalAlterPasswordProps) {

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);


    const customStyles = {
        content: {
            top: '50%',
            bottom: 'auto',
            left: '50%',
            right: 'auto',
            padding: '30px',
            transform: 'translate(-50%,-50%)',
            backgroundColor: '#1d1d2e'
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

        setLoading(true)
        const apiClient = setupAPIClient();
        await apiClient.post('/me/alterPassword', data);

        setLoading(false)
        toast.success("Senha Alterada com Sucesso !")

    }

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles} >
            <button
                type='button' onClick={onRequestClose} className='react-modal-close' style={{ background: 'transparent', border: 0 }}>
                <FiX size={45} color="red" />
            </button>
            <form onSubmit={handleLogin}>
                <Input placeholder="Digite a Sua Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Input placeholder="Confirme a Sua Senha" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                <Button type="submit" loading={loading}>
                    Acessar
                </Button>
            </form>

        </Modal>
    )
}