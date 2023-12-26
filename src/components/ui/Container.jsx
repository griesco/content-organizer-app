import styles from '../../styles/Home.module.css'

// eslint-disable-next-line react/prop-types
export function Container({ children }) {
    return (
        <div id='container' className={styles.container}>
            <main className={styles.main}>

                {children}

            </main>
        </div>
    )
}