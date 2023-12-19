import '../../styles/Navbar.css';

export function Navbar() {
  return (
    <nav>
      <div className='logo-nav'> 
        <a><img src='/artech.png'></img></a>
      </div>
       <div className='boton-nav'>
        <button href="#">Compartir<img src='https://img.freepik.com/vector-premium/icono-aplicacion-linkedin-red-profesional-mas-grande-mundo-redes-sociales-trabajos-carreras_277909-476.jpg?w=740'></img></button>
      </div>
    </nav>
  );
}
