import { Contributors } from '../../components'
import styles from '../../styles/Subtitle.module.css'
import { CONTRIBUIDORES } from '../../data/'

export function Collaborators() {
    return (
        <>
            <h3 className={styles.subtitle} style={{ fontSize: '2.0rem' }}>Colaboradores</h3>
            <Contributors contributors={CONTRIBUIDORES} />
        </>
    )
}