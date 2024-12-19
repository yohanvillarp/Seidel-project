import './Home.css';
import banner from '../assets/banner-navideño.jpg';
import Banner from '../components/Banner/Banner';

const HomeView = () => {
  // Productos destacados
  const productos = [
    {
      id: 1,
      nombre: 'Zapatillas Freestyle para Mujer',
      precioOriginal: 209.0,
      precioDescuento: 99.0,
      descuento: '-53%',
      imagen: 'https://via.placeholder.com/200x200?text=Producto1',
    },
    {
      id: 2,
      nombre: 'Zapatillas Free Style para Hombre',
      precioOriginal: 199.0,
      precioDescuento: 99.0,
      descuento: '-50%',
      imagen: 'https://via.placeholder.com/200x200?text=Producto2',
    },
    {
      id: 3,
      nombre: 'Zapatillas Training para Hombre',
      precioOriginal: 199.0,
      precioDescuento: 99.0,
      descuento: '-50%',
      imagen: 'https://via.placeholder.com/200x200?text=Producto3',
    },
    {
      id: 4,
      nombre: 'Zapatillas Training para Mujer',
      precioOriginal: 209.0,
      precioDescuento: 99.0,
      descuento: '-53%',
      imagen: 'https://via.placeholder.com/200x200?text=Producto4',
    },
  ];

  // Marcas
  const marcas = [
    { id: 1, logo: 'https://1000marcas.net/wp-content/uploads/2024/02/Adidas-Logo.png' },
    { id: 2, logo: 'https://1000marcas.net/wp-content/uploads/2019/11/Logo-Nike-1.png' },
    { id: 3, logo: 'https://1000marcas.net/wp-content/uploads/2019/12/logo-Reebok.png' },
    { id: 4, logo: 'data:image/png;base64,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' },
  ];

  return (
    <div className="home">
      {/* Banner */}
      <div className="home__banner">
        <Banner imgBanner={banner} />
      </div>

      {/* Promociones */}
      <div className="home__promociones">
        <h2 className="home__promociones--title">Lo Más Buscado</h2>
        <div className="productos-grid">
          {productos.map((producto) => (
            <div key={producto.id} className="producto-card">
              <span className="descuento">{producto.descuento}</span>
              <img src={producto.imagen} alt={producto.nombre} className="producto-img" />
              <h3>{producto.nombre}</h3>
              <p className="precios">
                <span className="precio-original">S/ {producto.precioOriginal.toFixed(2)}</span>
                <span className="precio-descuento">S/ {producto.precioDescuento.toFixed(2)}</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Marcas */}
      <div className="home__marcas">
        <h2 className="home__marcas--title">Productos de buena calidad</h2>
        <div className="marcas-grid">
          {marcas.map((marca) => (
            <div key={marca.id} className="marca-card">
              <img src={marca.logo} alt="Marca" className="marca-logo" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeView;
