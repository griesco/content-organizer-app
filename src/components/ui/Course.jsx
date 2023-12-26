import { Link } from 'react-router-dom'
import styles from '../../styles/Course.module.css'

// eslint-disable-next-line react/prop-types
export function Course({ href, title, subtitle, image, author, alt }) {
    return (
        <Link className={styles.card} to={href}>
            <header>
                <img
                    className={styles.cardImage}
                    src={image}
                    alt={alt}
                    style={{
                        width: '60px',
                        height: 'auto'
                    }}
                />
            </header>
            <section>
                <div>
                    <p>{title}</p>
                    <span className={styles.subtitle}>
                        {subtitle}
                    </span>
                </div>
                <div>
                    {author}
                </div>
            </section>
        </Link>
    )
}