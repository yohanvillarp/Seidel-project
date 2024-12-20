import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProductoPorId } from '../../services/productServices';
import './ProductInfoCard.css';
import Talla from './Talla';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


const ProductInfoCard = () => {

  const navigate = useNavigate();
  const { id } = useParams();

  const [producto, setProducto] = useState({});
  const [imagenes, setImagenes] = useState([]);
  const [tallaSeleccionada, setTallaSeleccionada] = useState(null);

  useEffect(() => {
    try {
      const obtenerProducto = async () => {
        const productoObtenido = await getProductoPorId(id);
        setProducto(productoObtenido);

      }
      obtenerProducto();
    } catch (e) {
      console.error(e);
    }
  }, [id]);

  const handleAddBag = async (talla, color) => {
    const bolsaActual = JSON.parse(localStorage.getItem('bolsa')) || []; 

    const productoEnBolsa = bolsaActual.some((producto) => producto.id === id);
    if(productoEnBolsa){
      Swal.fire({
        title: '¡Ya estás en tu bolsa!',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      })
      return;
    }
    else if(tallaSeleccionada === null){
      Swal.fire({
        title: '¡Debes seleccionar una talla!',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      })
      return;
    }

    const nuevoProducto = { id, talla , color};
    const nuevaBolsa = [...bolsaActual, nuevoProducto];
    localStorage.setItem('bolsa', JSON.stringify(nuevaBolsa));

    const respuesta = await Swal.fire({
      title: '¡Añadido a la bolsa! ¿Desea revisarla?',
      icon: 'success',
      confirmButtonText: 'VER AHORA',
      showCancelButton: true,
      cancelButtonText: 'NO POR EL MOMENTO',
      confirmButtonColor: '#4CAF50',
      CancelButtonColor : '#d33'
    })

    if(respuesta.isConfirmed){
      navigate('/bag');
    }

  }

  return (
    <section className='infoProduct'>
      <div className='infoProduct__content'>


        <div className='infoProduct__imagenes'>
          <img src={`${import.meta.env.VITE_AZURE_BLOB_URL}${id}_1.jpg`} alt={producto.modelo} className='infoProduct__image' />

          <img src={`${import.meta.env.VITE_AZURE_BLOB_URL}${id}_2.jpg`} alt={producto.modelo} className='infoProduct__image' />
        </div>


        <div className='infoProduct__info'>
          <h1 className='infoProduct__title'>{producto.modelo}</h1>
          <p className='infoProduct__price'>S/.{producto.precio}</p>
          
          
          <div className='infoProduct__color'>

          </div>
          <p>Selecciona tú talla</p>
          <div className='infoProduct__talla'>

            {tallas.map((talla) => (
              <Talla nroTalla={talla} key={talla} tallaSeleccionada={tallaSeleccionada} 
              setTallaSeleccionada={setTallaSeleccionada}/>
            ))}

          </div>

          <div className='infoProduct__botones'>
            <button className='infoProduct__boton' onClick={() => handleAddBag(tallaSeleccionada, 'blanco')}>
              <span>Añadir a la bolsa</span>
            </button>
            <button className='infoProduct__boton'>
              <i className='fas fa-heart fa-3x infoProduct__icon'></i>
            </button>
          </div>

        </div>
      </div>
      <div className='infoProduct__footer'>
        <div className='infoProduct__description'>
          <h3>Descripción</h3>
          <p>{producto.descripcion}</p>
        </div>
        <div className='infoProduct__detalles'>
          <h3>Detalles</h3>
          <p>{producto.detalles}</p>
        </div>
      </div>
    </section>
  )
}

export default ProductInfoCard

let tallas = [
  38, 39, 40, 41, 42, 43, 44, 45, 46, 47
]
let colors = [
  'rojo', 'azul', 'amarillo', 'verde', 'naranja', 'gris'
]