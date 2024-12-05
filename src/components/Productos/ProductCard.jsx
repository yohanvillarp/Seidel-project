import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ id, nombre, descripcion, marca, precio, foto, color }) => {
  return (
    
    <Link
      to={`/hombres/${nombre.replace(/\s+/g, '-').toLowerCase()}`}
      className="product-card"
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <div className={`product-card__content${id}`}>
        <img
          src={foto}
          alt={nombre}
          className="product-card__image"
          style={{ backgroundColor: color }}
        />
        <h3 className="product-card__title">{marca}</h3>
        <p className="product-card__description">{descripcion}</p>
        <div className="product-card__footer">
          <span className="product-card__price">${precio}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
