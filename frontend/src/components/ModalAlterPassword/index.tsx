import Modal from 'react-modal';
import styles from './style.module.scss';
import { useState, FormEvent } from 'react';

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
    const [passwordConfirmed, setPasswordConfirmed] = useState('');
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

        if (password === '' || passwordConfirmed === '') {
            toast.info("Preencha Todos os Campos !")
            return
        }

        if (password != passwordConfirmed) {
            toast.error("As Senhas não são Iguais !")
            return
        }

        setLoading(true)
        alert(password)
        setLoading(false)

    }

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles} >
            <button
                type='button' onClick={onRequestClose} className='react-modal-close' style={{ background: 'transparent', border: 0 }}>
                <FiX size={45} color="red" />
            </button>
            <form onSubmit={handleLogin}>
                <Input placeholder="Digite a Sua Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Input placeholder="Confirme a Sua Senha" type="password" value={passwordConfirmed} onChange={(e) => setPasswordConfirmed(e.target.value)} />
                <Button type="submit" loading={loading}>
                    Acessar
                </Button>
            </form>

        </Modal>
    )
}