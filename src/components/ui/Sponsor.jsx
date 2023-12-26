import styles from '../../styles/Sponsor.module.css'

// eslint-disable-next-line react/prop-types
export function Sponsor({ href, src, alt, style }) {
    return (
        <a className={styles.sponsorsAnchor} href={href} target="_blank" rel="noopener noreferrer">
            <div className={styles.sponsorsDiv}>
                <img style={style} src={src} alt={alt} />
            </div>
        </a>
    )
}