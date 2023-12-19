import '../../styles/Footer.css';

export default function Footer() {
    return (
        <>
            <footer className="footer-container">
                    <div className="footer-container-contenido">
                        <p>Desarrollado por egresados de </p>
                        <img className="footer-img" src='/pescar.webp' alt='Fundación Pescar' />
                        <ul className='footer-ul'>
                            <a href="https://www.google.com/" rel='noopener' target='__black'><li>GitHub</li></a>
                            <a href="https://www.google.com/" rel='noopener' target='__black'><li>Google Drive</li></a>
                            <a href="https://www.artech-consulting.com.ar/" rel='noopener' target='__black'><li>Artech</li></a>
                        </ul>
                    </div>
            </footer>
        </>
    )
}