import '../../styles/Footer.css';

export default function Footer() {
    return (
        <>
            <footer className="footer-container">
                    <div className="footer-container-contenido">
                        <p>Desarrollado por egresados de </p>
                        <img className="footer-img" src='/pescar.webp' alt='Fundación Pescar' />
                        <ul className='footer-ul'>
                            <li>GitHub</li>
                            <li>Google Drive</li>
                            <li>Artech</li>
                        </ul>
                    </div>
            </footer>
        </>
    )
}