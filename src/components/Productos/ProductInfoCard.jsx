import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProductoPorId } from '../../services/productServices';
import './ProductInfoCard.css';
import Talla from './Talla';

const ProductInfoCard = () => {

  const { id } = useParams();

  const [producto, setProducto] = useState({});
  const [imagenes, setImagenes] = useState([]);


  useEffect(() => {
    try {
      const obtenerProducto = async () => {
        const productoObtenido = await getProductoPorId(id);
        setProducto(productoObtenido);

      }
      obtenerProducto();
      console.log(producto.imagenes)

    } catch (e) {
      console.error(e);
    }
  }, [id]);

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
              <Talla nroTalla={talla} key={talla} />
            ))}

          </div>

          <div className='infoProduct__botones'>
            <button className='infoProduct__boton'>
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