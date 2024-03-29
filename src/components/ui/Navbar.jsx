import { Link } from 'react-router-dom'
import { Share } from '../../components'
import styles from '../../styles/Navbar.module.css'

export function NavBar() {
    return (
        <header className={styles.nabvar}>
            <Link to='/'>
                <img src="/pescar/img/artech.png" alt='Logo de Artech' width={130} />
            </Link>
            <Share />
        </header>
    )
}