import { getFAQ } from '../../../../services/faqService';
import './FAQ.css';
import { useState, useEffect } from 'react';
import QCard from './QCard';

const FAQ = () => {

  
  const [faq, setFAQ] = useState([]);

  useEffect(() => {
    try {
      const listaPreguntas = async () => {
        const preguntas = await getFAQ();
        setFAQ(preguntas);
      }
      listaPreguntas();

    } catch (e) {
      console.error(e);
    }
  }, []);


  return (
    <section className="faq">

      <h2 className="faq__title"> Preguntas frecuentes </h2>

      {faq.map( (faq) =>(
        <QCard
        key = {faq.id}
        pregunta={faq.pregunta}
        respuesta={faq.respuesta}
        />  
      ))}
    </section>
    
  )
}

export default FAQ;