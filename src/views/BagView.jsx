import React, { useState } from 'react';
import './Bag.css';

const BagView = () => {
  const [productos, setProductos] = useState([
    {
      id: 1,
      marca: 'Nike',
      modelo: 'Court Legacy Lift',
      precio: 399.90,
      imagen: 'https://www.nike.com.pe/dw/image/v2/BJKZ_PRD/on/demandware.static/-/Sites-catalog-equinox/default/dwdcf69fb7/images/marathon/196153962088_1-20240903120000-mrtChile.jpg?sw=140&sh=140',
      color: 'Blanco/Blanco-Blanco',
      talla: 8.5,
      cantidad: 1,
    },
    {
      id: 2,
      marca: 'Nike',
      modelo: 'Court Legacy Lift',
      precio: 399.90,
      imagen: 'https://www.nike.com.pe/dw/image/v2/BJKZ_PRD/on/demandware.static/-/Sites-catalog-equinox/default/dwe2f7c00d/images/hi-res/194502875980_1_20240305120000-mrtPeru.jpeg?sw=500&sh=500',
      color: 'Blanco/Blanco-Blanco',
      talla: 8,
      cantidad: 1,
    },
  ]);

  // Eliminar producto
  const eliminarProducto = (id) => {
    setProductos(productos.filter((producto) => producto.id !== id));
  };

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
              <img src={producto.imagen} alt={producto.modelo} className="bag__image" />
              <div className="bag__details">
                <h3>{producto.marca} {producto.modelo}</h3>
                <p className="bag__talla">Talla: {producto.talla}</p>
                <p className="bag__price">S/ {producto.precio.toFixed(2)}</p>
              </div>
              <button className="bag__delete-btn" onClick={() => eliminarProducto(producto.id)}>
                <i className="fas fa-trash"></i>
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
