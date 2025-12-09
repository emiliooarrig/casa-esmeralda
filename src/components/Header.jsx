import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import '../styles/index.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <Link to="/">
            <h1>Casa Esmeralda</h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/catalog">Catálogo</Link></li>
            <li><Link to="/story">Nuestra Historia</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
          </ul>
        </nav>

        <div className="header-actions">
          <button className="icon-btn" aria-label="Search">
            <Search size={24} color="var(--color-base)" />
          </button>
          <button className="icon-btn" aria-label="Cart">
            <ShoppingCart size={24} color="var(--color-base)" />
          </button>
          <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="mobile-nav">
          <ul className="mobile-nav-links">
            <li><Link to="/" onClick={toggleMenu}>Inicio</Link></li>
            <li><Link to="/catalog" onClick={toggleMenu}>Catálogo</Link></li>
            <li><Link to="/story" onClick={toggleMenu}>Nuestra Historia</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}>Contacto</Link></li>
          </ul>
        </nav>
      )}

      <style>{`
        .header {
          background-color: var(--color-white);
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          padding: 1rem 0;
          position: sticky;
          top: 0;
          z-index: 1000;
        }
        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo h1 {
          font-size: 1.5rem;
          margin: 0;
          color: var(--color-primary);
        }
        .desktop-nav {
          display: none;
        }
        .nav-links {
          display: flex;
          gap: 2rem;
        }
        .nav-links a {
          font-weight: 500;
          font-size: 1rem;
        }
        .nav-links a:hover {
          color: var(--color-secondary);
        }
        .header-actions {
          display: flex;
          gap: 1rem;
          align-items: center;
        }
        .icon-btn, .mobile-menu-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.25rem;
        }
        .mobile-nav {
          background-color: var(--color-white);
          border-top: 1px solid #eee;
          padding: 1rem 0;
        }
        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }
        
        @media (min-width: 768px) {
          .desktop-nav {
            display: block;
          }
          .mobile-menu-btn {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
