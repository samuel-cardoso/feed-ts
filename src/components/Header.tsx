import styles from './Header.module.css';
import ignitlogo from '../assets/ignite-logo.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={ignitlogo} alt="Logotipo do Ignite" />
        </header>
    );
}