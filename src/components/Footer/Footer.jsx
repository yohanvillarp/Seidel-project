import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Sección Empresa */}
      <div className="footer__section">
        <h4 className="footer__title">Empresa</h4>
        <ul className="footer__list">
          <li>
            <Link to="/nosotros" className="footer__link">Nosotros</Link>
          </li>
          <li>
            <Link to="/servicios" className="footer__link">Nuestros servicios</Link>
          </li>
          <li>
            <Link to="/privacidad" className="footer__link">Políticas de privacidad</Link>
          </li>
        </ul>
      </div>

      {/* Sección Ayuda */}
      <div className="footer__section">
        <h4 className="footer__title">Ayuda</h4>
        <ul className="footer__list">
          <li>
            <Link to="/faq" className="footer__link">Preguntas frecuentes</Link>
          </li>
          <li>
            <Link to="/eventos" className="footer__link">Compras y eventos</Link>
          </li>
        </ul>
      </div>

      {/* Sección Síguenos */}
      <div className="footer__section">
        <h4 className="footer__title">Síguenos</h4>
        <ul className="footer__socials">
          <li>
            <Link to="https://www.facebook.com/profile.php?id=61566807050447" className="footer__link" target='_blank'>
              <i className="fab fa-facebook"></i>
            </Link>
          </li>
          <li>
            <a href="https://www.instagram.com/seidel_store/" className="footer__link" target='_blank'>
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://x.com/vihukstore" className="footer__link" target='_blank'>
              <i className="fab fa-twitter"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
