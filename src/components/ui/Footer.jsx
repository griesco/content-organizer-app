import styles from '../../styles/Footer.module.css'

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                <a
                    href='https://www.pescar.org.ar/'
                    target='_blank'
                    rel='noreferrer'
                >
                    Desarrollado por egresados de
                    <picture>
                        <img
                            width='100'
                            loading='lazy'
                            style={{ marginTop: '-2px' }}
                            src='/pescar.png' alt='pescar logo'
                        />
                    </picture>
                </a>
                <span>&bull;</span>
                <a
                    href='https://github.com/griesco/content-organizer-app'
                    rel='nofollow noreferrer'
                    target='_blank'>
                    GitHub
                </a>
                <span>&bull;</span>
                <a
                    href='https://drive.google.com/drive/folders/1Yx2zK1a7tUP4ar_L5OcccmeRkplQu1kj'
                    rel='nofollow noreferrer'
                    target='_blank'>
                    Google Drive
                </a>
                <span>&bull;</span>
                <a
                    href='https://linktr.ee/artech.it'
                    rel='nofollow noreferrer'
                    target='_blank'>
                    Artech
                </a>
            </div>
        </footer>
    )
}
