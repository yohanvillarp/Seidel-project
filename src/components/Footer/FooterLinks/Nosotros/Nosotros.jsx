import './Nosotros.css';
import NosotrosCard from './NosotrosCard'

const Nosotros = () => {
  return (
    <section className="about-us">
    <h1 className="about-us__title">Nosotros</h1>
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

    <footer className="about-us__footer">
      
    </footer>
    
</section>

  )
}

export default Nosotros


const nosotros = [
  {
    id: 1,
    title : 'Misión',
    contenido : 'Nuestra empresa se proyecta como el principal referente en la venta de zapatillas en Puerto Maldonado, ofreciendo productos de alta calidad, comodidad y estilo para todas las edades. Queremos que las personas piensen en nosotros cuando busquen zapatillas modernas, cómodas y a buen precio. Aspiramos a ser el destino preferido para quienes buscan las mejores marcas, asegurando a nuestros clientes una experiencia de compra excepcional y accesible en cada visita.',
    classIcon:'fas fa-bullseye fa-3x'
  },
  {
    id: 2, 
    title: 'Visión',
    contenido : 'Ofrecer zapatillas modernas, cómodas y de calidad a las personas de Puerto Maldonado. Queremos que nuestros clientes encuentren el par perfecto que se ajuste a su estilo y necesidades, ya sea para deporte, trabajo o uso diario. Fomentamos una experiencia de compra personalizada, tanto en nuestra tienda física como en nuestra página web, y estamos dedicados a trabajar con productos que respeten el medio ambiente, demostrando que es posible lucir bien mientras cuidamos del planeta.',
    classIcon:'fas fa-eye fa-3x'
  }
]