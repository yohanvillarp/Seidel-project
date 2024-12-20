import { useEffect, useState } from 'react';
import './Bag.css';
import { getProductoPorId } from '../services/productServices';

const BagView = () => {
  const [productos, setProductos] = useState([]);

  // Eliminar producto
  const eliminarProducto = (id) => {
    const productosFiltrados = productos.filter((producto) => producto.id_producto !== id);
    setProductos(productosFiltrados);
    localStorage.setItem('bolsa', JSON.stringify(productosFiltrados));
  };
  

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        //devuelve id, talla, color
        const InfoProductos = JSON.parse(localStorage.getItem('bolsa')) || [];
  
        const productosObtenidos = await Promise.all(
          InfoProductos.map(async ({id, talla, color}) => {
            const producto = await getProductoPorId(id);
            const imagenes = JSON.parse(producto.imagenes);
            producto.imagenes = imagenes;
            return producto;
          })
        );
  
        // Actualiza el estado con los productos obtenidos
        setProductos(productosObtenidos);
        console.log('Productos cargados:', productosObtenidos);
      } catch (e) {
        console.error('Error al cargar productos:', e);
      }
    };
    cargarProductos();
  }, []);

  // Calcular total
  const total = productos.reduce((acc, p) => acc + p.precio, 0);

  return (
    <section className="bag">
      <div className="bag__layout">
        {/* Sección de productos */}
        <div className="bag__products">
          <h2 className="bag__title">Mi bolsa</h2>
          {productos.map((producto) => (
            <div key={producto.id} className="bag__item">
              <img src={producto.imagenes[0]} alt={producto.modelo} className="bag__image" />
              <div className="bag__details">
                <h3>{producto.marca.nombre} {producto.modelo}</h3>
                <p className="bag__talla">Talla: {45}</p>
                <p className="bag__price">S/ {producto.precio.toFixed(2)}</p>
              </div>
              <button className="bag__delete-btn" onClick={() => eliminarProducto(producto.id_producto)}>
              <i className="fas fa-times fa-2x"></i>
              </button>
            </div>
          ))}
        </div>

        {/* Resumen compacto */}
        <div className="bag__summary">
          <h2>Resumen</h2>
          <p>Productos: <span>{productos.length}</span></p>
          <p className="bag__total">Total de la orden: <strong>S/ {total.toFixed(2)}</strong></p>
          <button className="bag__checkout-btn">Comprar</button>
        </div>
      </div>
    </section>
  );
};

export default BagView;
