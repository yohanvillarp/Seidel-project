import React from "react";
import "./Footer.css"; // Estilos del footer (compilado de SCSS)

const Footer = () => {
  return (
    <footer className="footer">
      {/* Sección Empresa */}
      <div className="footer__section">
        <h4 className="footer__title">Empresa</h4>
        <ul className="footer__list">
          <li>
            <a href="/nosotros" className="footer__link">Nosotros</a>
          </li>
          <li>
            <a href="/servicios" className="footer__link">Nuestros servicios</a>
          </li>
          <li>
            <a href="/privacidad" className="footer__link">Políticas de privacidad</a>
          </li>
        </ul>
      </div>

      {/* Sección Ayuda */}
      <div className="footer__section">
        <h4 className="footer__title">Ayuda</h4>
        <ul className="footer__list">
          <li>
            <a href="/faq" className="footer__link">Preguntas frecuentes</a>
          </li>
          <li>
            <a href="/eventos" className="footer__link">Compras y eventos</a>
          </li>
        </ul>
      </div>

      {/* Sección Síguenos */}
      <div className="footer__section">
        <h4 className="footer__title">Síguenos</h4>
        <ul className="footer__socials">
          <li>
            <a href="https://facebook.com" className="footer__link">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://instagram.com" className="footer__link">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com" className="footer__link">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
