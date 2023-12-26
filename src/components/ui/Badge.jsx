import styles from '../../styles/Badge.module.css'

// eslint-disable-next-line react/prop-types
export function Badge({ emoji, text }) {
    return (
        <span className={styles.rbtBadge}>
            <div className={styles.rbtBadgeImage}>{emoji}</div>
            {text}
        </span>
    )
}