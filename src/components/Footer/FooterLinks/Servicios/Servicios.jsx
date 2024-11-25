import './Servicios.css';
import ServiceCard from './ServiceCard';

const Servicios = () => {
  return (
    <section className="services">

      <h2 className="services__title">Nuestros Servicios</h2>

      {servicios.map((servicio) => (
        <ServiceCard
          key={servicio.id}
          iconClass={servicio.iconClass}
          title={servicio.title}
          description={servicio.description}
        />
      ))}
    </section>
  )
}

export default Servicios

let servicios = [
  {
      id: 1,
      iconClass : 'fa-solid fa-shop fa-5x', 
      title : 'Ventas Online: Fácil, Rápido y Seguro',
      description : 'Hemos diseñado una experiencia de compra en línea que es tan fácil como dar un clic. Con una plataforma intuitiva, pagos seguros y entregas rápidas, te aseguramos un proceso ágil para que obtengas tus productos sin complicaciones. Además, estamos aquí para responder tus dudas en cualquier momento.'
  },
  {
    id: 2,
      iconClass : 'fa-solid fa-person fa-5x',
      title : 'Encuentra lo que necesitas, en persona',
      description : 'Visítanos en nuestra tienda física y disfruta de un servicio personalizado. Nuestro equipo está listo para asesorarte, mostrarte nuestras colecciones y ayudarte a encontrar ofertas exclusivas que no encontrarás en línea. ¡La calidad y atención que mereces te espera en nuestra tienda!'
  },
  {
      id: 3,
      iconClass: 'fa-solid fa-basket-shopping fa-5x',
      title: 'Zapatillas de Calidad',
      description: 'Te ofrecemos una amplia selección de zapatillas de calidad, diseñadas para brindarte confort y estilo. Nuestra colección incluye desde modelos deportivos hasta opciones elegantes para todo tipo de ocasiones. Nos comprometemos a ofrecerte productos duraderos, cómodos y con un diseño que se adapta a tus necesidades, para que encuentres el par perfecto que combine lo mejor de la moda y la funcionalidad.'
  },
  {
    id: 4,
    iconClass : 'fa-solid fa-shoe-prints fa-5x',
    title: 'Venta de Tacos para Damas: Comodidad y Elegancia',
    description : 'Te ofrecemos un servicio dedicado a ayudarte a encontrar el calzado perfecto. Nuestra colección de tacos para damas está diseñada para adaptarse a tus necesidades, desde modelos elegantes para eventos especiales hasta opciones cómodas para el día a día. Nuestro compromiso es brindarte productos de alta calidad y asesorarte para que encuentres el par ideal que combine estilo y confort.'
  }
]

