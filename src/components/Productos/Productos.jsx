import React from 'react'
import ProductCard from './ProductCard';
import { useState , useEffect } from 'react';
import { getProductos } from '../../services/productServices';
import './Productos.css'

const Productos = ({filter}) => {
  let personaInt='man';

  const [productos, setProductos] = useState([]);
  
  if(filter.persona===personaInt)
    personaInt = 'hombres'
  else if(filter.persona === 'woman') 
    personaInt = 'mujeres'
  else
    personaInt = 'niños'
    

  useEffect(() =>{
    try{
      const listaProductos = async () => {
        const productos = await getProductos();
        const filtro = productos.filter(producto =>
          producto.genero=== filter.persona && producto.id!=undefined
        );
        setProductos(filtro);
      }
      listaProductos();
    }catch(e){
      console.error(e);
    }
  }, [filter.persona]);

  return (
    <section className="productos">
      <header className="productos__header">
        <h1 className="productos__header--title">
          Zapatillas para {personaInt} [{productos.length}]
        </h1>
        <p className="productos__header--text">
          {filter.text}
        </p>
      </header>
    
    <main className="productos__content">
      
    {productos.map((producto) =>(
      <ProductCard
        id={producto.id}
        key={producto.id}
        nombre={producto.nombre}
        marca = {producto.marca}
        descripcion={producto.descripcion}
        color={producto.color}
        precio={producto.precio}
        foto = {producto.foto}
      />
    ))}
    </main>
    </section>
    
  )
}

export default Productos



