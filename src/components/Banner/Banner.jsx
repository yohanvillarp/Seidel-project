import './Banner.css';
import React, { useState, useEffect } from 'react';

const Banner = ({ imgBanner }) => {
  // Estado para manejar la frase actual
  const [currentFraseIndex, setCurrentFraseIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Frases del banner
  const frases = [
    { lema: "¡Celebra la Navidad con estilo!" },
    { lema: "¡Regala sonrisas esta Navidad con nuestras zapatillas!" },
    { lema: "Este diciembre, camina con alegría y comodidad" },
  ];

  // Cambiar la frase cada 7 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFraseIndex((prevIndex) => (prevIndex + 1) % frases.length);
    }, 7000); // 7 segundos
    return () => clearInterval(interval);
  }, [frases.length]);

  // Simular carga de la imagen
  useEffect(() => {
    const img = new Image();
    img.src = imgBanner;
    img.onload = () => {
      setIsLoading(false);
    };
  }, [imgBanner]);

  // Mostrar loader mientras carga la imagen
  if (isLoading) {
    return <div className="banner__loading">Cargando...</div>;
  }

  return (
    <div className="banner">
      <img src={imgBanner} alt="Banner principal" className="banner__img" />
      <p className="banner__text">{frases[currentFraseIndex].lema}</p>
      <button className="banner__btn">
        <i className="fa-solid fa-gifts"></i> Comprar ahora
      </button>
    </div>
  );
};

export default Banner;