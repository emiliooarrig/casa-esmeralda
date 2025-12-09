import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-overlay">
                <div className="container hero-content">
                    <h1>Casa Esmeralda</h1>
                    <p>Joyería Fina y de Autor</p>
                    <Link to="/catalog" className="btn btn-secondary">
                        Ver Catálogo
                    </Link>
                </div>
            </div>
            <style>{`
        .hero {
          background-image: url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80');
          background-size: cover;
          background-position: center;
          height: 80vh;
          position: relative;
          display: flex;
          align-items: center;
        }
        .hero-overlay {
          background: rgba(0, 0, 0, 0.4);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
        }
        .hero-content {
          color: var(--color-white);
          text-align: center;
          width: 100%;
        }
        .hero-content h1 {
          font-size: 3.5rem;
          margin-bottom: 0.5rem;
          color: var(--color-white);
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        .hero-content p {
          font-size: 1.5rem;
          margin-bottom: 2rem;
          font-weight: 300;
          letter-spacing: 2px;
          text-transform: uppercase;
        }
        
        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.5rem;
          }
          .hero-content p {
            font-size: 1.2rem;
          }
        }
      `}</style>
        </section>
    );
};

export default Hero;
