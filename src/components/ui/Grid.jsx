import styles from '../../styles/Grid.module.css'

// eslint-disable-next-line react/prop-types
export function Grid({ style, children }) {
    return (
        <div className={styles.grid} style={style}>
            {children}
        </div>
    )
}