import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import { useState, useEffect } from 'react';
import { getProductosPorCategoria } from '../../services/productServices';
import './Productos.css'
import FilterCard from './FilterCard';
import { filtrarProductos } from '../../utils/filtrarProductos';
import { getCategoriaPorNombre } from '../../services/categoriaServices';

const Productos = () => {

  const { nombreCategoria } = useParams();
  const [categoria, setCategoria] = useState({});

  const [productos, setProductos] = useState([]);
  const [filtros, setFiltros] = useState({
    marca: 'all',
    precio: 'all',
    color: 'all',
  })

  useEffect(() => {
    try {
      const obtenerCategoria = async () => {
        const categoriaObtenida = await getCategoriaPorNombre(nombreCategoria);
        console.log(categoriaObtenida);
        setCategoria(categoriaObtenida);
      }
      obtenerCategoria();
    } catch (e) {
      console.error(e);
    }
  }, [nombreCategoria]);


  useEffect(() => {
    try {
      const listaProductos = async () => {
        const productos = await getProductosPorCategoria(nombreCategoria);
        setProductos(productos);
      }
      listaProductos();

    } catch (e) {
      console.error(e);
    }
  }, [nombreCategoria]);

  //retorna todos los productos filtrados
  const productosFiltrados = filtrarProductos(productos, filtros);

  return (
    <section className="productos">
      <header className="productos__header">
        <h1 className="productos__header--title">
          Zapatillas para {nombreCategoria} [{productos.length}]
        </h1>
        <p className="productos__header--text">
          {categoria.nombre}
        </p>
        
      </header>
      <FilterCard filtros={filtros} setFiltros={setFiltros} />
      <main className="productos__content">
      
        {productosFiltrados.map((producto) => (
          <ProductCard
            key={producto.id}
            id={producto.id_producto}
            marca={producto.marca}
            modelo={producto.modelo}
            categoria={producto.categoria}
            precio={producto.precio}
            imagenes={producto.imagenes}
            fechaAgregado={producto.fechaAgregado}
            detalles={producto.detalles}
            descripcion={producto.descripcion}
          />
        ))}
      </main>
    </section>

  )
}

export default Productos



