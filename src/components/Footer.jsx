import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-section">
                    <h3>Casa Esmeralda</h3>
                    <p>Joyería fina y de autor, creando piezas únicas para momentos inolvidables.</p>
                </div>

                <div className="footer-section">
                    <h4>Enlaces Rápidos</h4>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/catalog">Catálogo</Link></li>
                        <li><Link to="/story">Nuestra Historia</Link></li>
                        <li><Link to="/contact">Contacto</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Síguenos</h4>
                    <div className="social-icons">
                        <a href="#" aria-label="Facebook"><Facebook color="var(--color-secondary)" /></a>
                        <a href="#" aria-label="Instagram"><Instagram color="var(--color-secondary)" /></a>
                        <a href="#" aria-label="Twitter"><Twitter color="var(--color-secondary)" /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Casa Esmeralda. Todos los derechos reservados.</p>
            </div>

            <style>{`
        .footer {
          background-color: var(--color-base);
          color: var(--color-white);
          padding: 4rem 0 2rem;
          margin-top: auto;
        }
        .footer-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          margin-bottom: 3rem;
        }
        .footer-section h3 {
          color: var(--color-secondary);
          margin-bottom: 1rem;
        }
        .footer-section h4 {
          color: var(--color-white);
          margin-bottom: 1rem;
          font-family: var(--font-body);
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 0.9rem;
        }
        .footer-section ul li {
          margin-bottom: 0.5rem;
        }
        .footer-section ul li a:hover {
          color: var(--color-secondary);
        }
        .social-icons {
          display: flex;
          gap: 1rem;
        }
        .footer-bottom {
          text-align: center;
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 2rem;
          font-size: 0.9rem;
          color: #888;
        }

        @media (min-width: 768px) {
          .footer-container {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
        </footer>
    );
};

export default Footer;
