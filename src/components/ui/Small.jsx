import styles from '../../styles/Small.module.css'

// eslint-disable-next-line react/prop-types
export function Small({ children }) {
    return (
        <small className={styles.description}>
            {children}
        </small>
    )
}