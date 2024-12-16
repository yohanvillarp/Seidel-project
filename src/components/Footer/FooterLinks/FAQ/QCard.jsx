import './QCard.css';

const QCard = ({ pregunta, respuesta }) => {
  return (
    <div className="qcard">
      <details className="qcard__content">
        <summary className="qcard__content-title">
          {pregunta}
        </summary>
        <p className="qcard__content-content">{respuesta}</p>
      </details>
    </div>
  );
};

export default QCard;
