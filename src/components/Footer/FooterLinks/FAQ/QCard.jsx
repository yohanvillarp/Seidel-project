import './QCard.css';

const QCard = ({ title, pregunta }) => {
  return (
    <div className="qcard">
      <details className="qcard__content">
        <summary className="qcard__content-title">
          {title}
        </summary>
        <p className="qcard__content-content">{pregunta}</p>
      </details>
    </div>
  );
};

export default QCard;
