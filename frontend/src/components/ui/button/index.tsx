import styles from './styles.module.scss';
import { ReactNode, ButtonHTMLAttributes } from 'react';

import { FaSpinner } from 'react-icons/fa';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean,
    children: ReactNode,
}

export function Button({ loading, children, ...rest }: ButtonProps) {
    return (
        <button className={styles.button} disabled={loading} {...rest}>
            {loading ? (<FaSpinner className={styles.spinner} />) : (<a>{children}</a>)}
        </button>
    )
}