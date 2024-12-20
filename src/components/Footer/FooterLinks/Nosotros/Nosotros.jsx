import './Nosotros.css';
import NosotrosCard from './NosotrosCard';

const Nosotros = () => {
  return (
    <section className="about-us">
      <h1 className="about-us__title">Nosotros</h1>

      {/* Introducción antes de Misión y Visión */}
      <div className="about-us__intro">
        <div className="about-us__intro-text">
          <h2>Vistiendo Tu Estilo, Creando Confianza</h2>
          <p>
            En Seidel, no solo vendemos zapatillas, creamos experiencias. Cada par está diseñado para resaltar lo mejor de ti,
            brindándote la confianza que necesitas para conquistar tu día.
          </p>
        </div>
        <div className="about-us__intro-logo">
          <img src="http://localhost:5173/logo.png" alt="Seidel Logo" />
        </div>
      </div>

      {/* Sección Misión y Visión */}
      <div className="about-us__content">
        {nosotros.map((seccion) => (
          <NosotrosCard
            key={seccion.id}
            title={seccion.title}
            contenido={seccion.contenido}
            classIcon={seccion.classIcon}
          />
        ))}
      </div>

      {/* Sección del Mapa */}
      <div className="about-us__map">
        <h2 className="about-us__map--title">Encuéntranos Aquí</h2>
        <iframe
          title="Seidel Ubicación"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.1865298273173!2d-69.1917557252014!3d-12.60346828761083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91dd0298bda1f681%3A0x7c2af9e7d7f7f31e!2sPlaza%20Bolognesi%2C%20Puerto%20Maldonado!5e0!3m2!1ses!2spe!4v1691783916094!5m2!1ses!2spe"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Nosotros;

const nosotros = [
  {
    id: 1,
    title: 'Misión',
    contenido:
      'Nuestra empresa se proyecta como el principal referente en la venta de zapatillas en Puerto Maldonado, ofreciendo productos de alta calidad, comodidad y estilo para todas las edades. Queremos que las personas piensen en nosotros cuando busquen zapatillas modernas, cómodas y a buen precio. Aspiramos a ser el destino preferido para quienes buscan las mejores marcas, asegurando a nuestros clientes una experiencia de compra excepcional y accesible en cada visita.',
    classIcon: 'fas fa-bullseye fa-3x',
  },
  {
    id: 2,
    title: 'Visión',
    contenido:
      'Ofrecer zapatillas modernas, cómodas y de calidad a las personas de Puerto Maldonado. Queremos que nuestros clientes encuentren el par perfecto que se ajuste a su estilo y necesidades, ya sea para deporte, trabajo o uso diario. Fomentamos una experiencia de compra personalizada, tanto en nuestra tienda física como en nuestra página web, y estamos dedicados a trabajar con productos que respeten el medio ambiente, demostrando que es posible lucir bien mientras cuidamos del planeta.',
    classIcon: 'fas fa-eye fa-3x',
  },
];
