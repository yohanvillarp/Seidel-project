import './Talla.css';
const Talla = ({nroTalla, tallaSeleccionada, setTallaSeleccionada}) => { 
  
  return (
    <button
    className={`talla ${tallaSeleccionada === nroTalla ? 'talla--active' : ''}`}
    onClick={() => setTallaSeleccionada(nroTalla)}>
        {nroTalla}
    </button>
  )
}

export default Talla