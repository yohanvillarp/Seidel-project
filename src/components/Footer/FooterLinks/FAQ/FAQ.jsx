import './FAQ.css';
import QCard from './QCard';

const FAQ = () => {
  return (
    <section className="faq">

      <h2 className="faq__title"> Preguntas frecuentes </h2>

      {preguntas.map( (pregunta) =>(
        <QCard
        key = {pregunta.id}
        title={pregunta.title}
        pregunta={pregunta .pregunta}
        />  
      ))}
    </section>
    
  )
}

export default FAQ;


const preguntas = [
  {
    id: 1,
    title: '¿Cómo puedo saber mi talla correcta?',
    pregunta: 'Puedes consultar nuestra guía de tallas, disponible en cada producto, para encontrar tu talla correcta. Te recomendamos medir tus pies y comparar las medidas con nuestra tabla para mayor precisión.'
  },
  {
    id: 2,
    title: '¿Realizan envíos a todo el país?',
    pregunta: 'No, no realizamos envíos a todo el país. Unicamente tenemos alcance a la ciudad de Puerto Maldonado.'
  },
  {
    id: 3,
    title: '¿Qué métodos de pago aceptan?',
    pregunta: 'Aceptamos pagos con tarjetas de crédito y débito, transferencias bancarias y servicios como PayPal. Algunos métodos de pago pueden tener promociones exclusivas.'
  },
  {
    id: 4,
    title: '¿Puedo cambiar o devolver un producto si no me queda bien?',
    pregunta: 'Sí, ofrecemos cambios y devoluciones dentro de un plazo de 15 días desde la recepción del producto. Consulta nuestra política de devoluciones para conocer los requisitos.'
  },
  {
    id: 5,
    title: '¿Los productos son originales?',
    pregunta: 'Sí, todos nuestros productos son 100% originales y cuentan con garantía de autenticidad. Trabajamos directamente con marcas reconocidas para garantizar calidad y confianza.'
  }
];
