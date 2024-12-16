import './Banner.css'
import React, { useState, useEffect } from 'react'; 

const Banner = ({imgBanner}) => {

  //estado para frase actual
  const [currentFraseIndex, setCurremtFraseIndex] = React.useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    const interval = setInterval( () => {
      setCurremtFraseIndex((prevIndex) => (prevIndex + 1) % frases.length);
  } , 7000);
  return () => clearInterval(interval);
},[]);

// Simular carga y comprobar cuando la imagen está lista
useEffect(() => {
  const img = new Image();
  img.src = imgBanner;
  img.onload = () => {
    setIsLoading(false);
  };
}, [imgBanner]);

if (isLoading) {
  return null; //es posible mostrar un loader
}

  return (
      <div className="banner">
        <img src={imgBanner} alt="banner" className="banner__img" />
        <p className="banner__text">{frases[currentFraseIndex].lema}</p>
        <button className="banner__btn">
          <i className="fa-solid fa-gifts"></i>
          Comprar ahora</button> 
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

