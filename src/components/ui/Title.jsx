import styles from '../../styles/Title.module.css'

// eslint-disable-next-line react/prop-types
export function Title({ style, children }) {
    return (
        <h1 className={styles.title} style={style}>{children}</h1>
    )
}