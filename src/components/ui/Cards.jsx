import '../../styles/Navbar.css';

export function Cards({profesor,clases, tecnologia, img}) {
  return (
    <>
    <div className='tarjeta'>
        <img src={img}/>
        <h3>Curso de {tecnologia}</h3>
        <h5>{clases} Clases</h5>
        <p>{profesor}</p>
    </div>
    </>
  );
}