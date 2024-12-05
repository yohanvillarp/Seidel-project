import React from 'react';
import './Banner.css'
import { useEffect } from 'react';

const Banner = ({imgBanner}) => {

  //estado para frase actual
  const [currentFraseIndex, setCurremtFraseIndex] = React.useState(0);

  useEffect( () => {
    const interval = setInterval( () => {
      setCurremtFraseIndex((prevIndex) => (prevIndex + 1) % frases.length);
  } , 7000);
  return () => clearInterval(interval);
},[]);

  return (
      <div className="banner">
        <img src={imgBanner} alt="banner" className="banner__img" />
        <p className="banner__text">{frases[currentFraseIndex].lema}</p>
        <button className="banner__btn">Comprar ahora</button> 
      </div>
  );
};

export default Banner;



const frases = [
    {
      lema : "¡Celebra la Navidad con estilo!"
    },
    {
      lema :"¡Regala sonrisas esta Navidad con nuestras zapatillas!"
    },
    {
      lema : "Este diciembre, camina con alegría y comodidad"
    }
  ]

