import { useContext } from 'react';
import styles from './style.module.scss';
import Link from 'next/link';
import { FiLogOut } from 'react-icons/fi'
import { AuthContext } from '../../contexts/AuthContext';



export function Header() {

    const { signOut } = useContext(AuthContext)

    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href="/">
                    <img src="/logo.png" height={60} />
                </Link>

                <nav className={styles.menuNav}>
                    <Link href="/playlists" legacyBehavior>
                        <a >Playlists</a>
                    </Link>
                    <Link href="/musics" legacyBehavior>
                        <a >Músicas</a>
                    </Link>
                    <Link href="/singers" legacyBehavior>
                        <a >Cantores</a>
                    </Link>
                    <Link href="/albuns" legacyBehavior>
                        <a >Albuns</a>
                    </Link>

                    <Link href="/myaccount" legacyBehavior>
                        <a >Minha Conta</a>
                    </Link>

                    <button onClick={signOut}>
                        <FiLogOut color="#ff0055" size={24} />
                    </button>

                </nav>
            </div>
        </header>
    )
}