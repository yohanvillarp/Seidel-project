import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ id , marca, modelo, categoria, precio, imagenes, detalles, descripcion}) => {

  console.log("imagenes: "+imagenes);
  imagenes = JSON.parse(imagenes);
  
  const [currentImage, setCurrentImage] = useState(imagenes[0]);

  //cambiando imagen cada vez que se actualice
  useEffect(() => {
    setCurrentImage(imagenes[0]);
  }, [imagenes]);

  const formatoModelo = modelo.replace(/\s+/g, '-').toLowerCase();

  return (
    
    <Link
      to={`/modelo/${id}`}
      className="product-card"
      style={{ textDecoration: 'none', color: 'inherit' }}
      
    >
      <div className={`product-card__content${id}`}>
        <img
          src={currentImage}
          alt={modelo}
          className="product-card__image"
          onMouseEnter={() => setCurrentImage(imagenes[1])}
          onMouseLeave={() => setCurrentImage(imagenes[0])}
          style={{
            transition: "0.3s ease-in-out",
          }}
        />
        <h3 className="product-card__title">{modelo}</h3>
        <div className="product-card__footer">
          <span className="product-card__price">S/.{precio}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
