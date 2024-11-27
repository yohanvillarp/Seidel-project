import './offerCard.css';
import Swal from 'sweetalert2';

const OfferCard = ({title, description, color, codigo, limite}) => {

  const handleCopy = async () => {
    try{
      await navigator.clipboard.writeText(codigo);
      Swal.fire({
        title: '¡Copiado!',
        text: `El código "${codigo}" se ha copiado al portapapeles.`,
        icon: 'success',
        confirmButtonText: 'Entendido',
        background: '#f9f9f9',
        color: '#333',
        confirmButtonColor: '#007bff',
      });
  
    }catch(e){
      Swal.fire({
        title: 'Error',
        text: 'No se pudo copiar el texto. Inténtalo de nuevo.',
        icon: 'error',
        confirmButtonText: 'Entendido',
      });
    }
  }

  return (
    <article className="offerCard">
      <header className="offerCard__header">
        <h2 className="offerCard__title">
          {title}
        </h2>
      </header>
      <hr className="offerCard__separator"/>
      <section className="offerCard__body">
        <p className="offerCard__content">{description}</p> 
        <p className='offerCard__limit'>
          <span>Limite : </span>{limite}
        </p>
      </section>
      
      <hr className="offerCard__separator"/>
      <footer className='offerCard__footer'>
      <button
       id="copyButton" className='offerCard__footer--copy'
      onClick={handleCopy}>
      Copiar codigo
      </button>
      </footer>
    </article>
  )
}

export default OfferCard;
