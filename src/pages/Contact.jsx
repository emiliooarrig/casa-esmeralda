import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulario enviado:', formData);
        alert('Gracias por contactarnos. Nos pondremos en contacto contigo pronto.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="page-contact container mt-4 mb-4">
            <div className="contact-header text-center mb-2">
                <h1>Contáctanos</h1>
                <p>Estamos aquí para ayudarte a encontrar la joya perfecta.</p>
            </div>

            <div className="contact-grid">
                <div className="contact-info">
                    <div className="info-item">
                        <Phone className="icon" size={24} />
                        <div>
                            <h3>Teléfono</h3>
                            <p>+52 (55) 1234 5678</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <Mail className="icon" size={24} />
                        <div>
                            <h3>Email</h3>
                            <p>contacto@casaesmeralda.com</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <MapPin className="icon" size={24} />
                        <div>
                            <h3>Ubicación</h3>
                            <p>Av. Presidente Masaryk 123, Polanco<br />Ciudad de México, CDMX</p>
                        </div>
                    </div>

                    <div className="policies mt-2">
                        <h3>Políticas de Tienda</h3>
                        <ul>
                            <li><a href="#">Envíos y Entregas</a></li>
                            <li><a href="#">Cambios y Devoluciones</a></li>
                            <li><a href="#">Garantía de por Vida</a></li>
                        </ul>
                    </div>
                </div>

                <div className="contact-form-container">
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Nombre Completo</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Tu nombre"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Correo Electrónico</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="tucorreo@ejemplo.com"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Mensaje</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                placeholder="¿En qué podemos ayudarte?"
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">
                            <Send size={18} style={{ marginRight: '8px' }} />
                            Enviar Mensaje
                        </button>
                    </form>
                </div>
            </div>

            <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }
        .contact-info {
          background-color: var(--color-light-gray);
          padding: 2rem;
          border-radius: 8px;
        }
        .info-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 2rem;
        }
        .info-item .icon {
          color: var(--color-secondary);
          margin-right: 1rem;
          margin-top: 0.25rem;
        }
        .info-item h3 {
          font-size: 1.1rem;
          margin-bottom: 0.25rem;
          color: var(--color-primary);
        }
        .policies h3 {
          font-size: 1.1rem;
          margin-bottom: 1rem;
          border-bottom: 1px solid #ddd;
          padding-bottom: 0.5rem;
        }
        .policies ul li {
          margin-bottom: 0.5rem;
        }
        .policies ul li a {
          color: var(--color-base);
          text-decoration: underline;
        }
        
        .contact-form {
          background: white;
          padding: 2rem;
          border: 1px solid #eee;
          border-radius: 8px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }
        .form-group {
          margin-bottom: 1.5rem;
        }
        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: var(--color-primary);
        }
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-family: var(--font-body);
          font-size: 1rem;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          background-color: #fafafa;
        }
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--color-secondary);
          box-shadow: 0 0 0 3px rgba(221, 178, 40, 0.1);
          background-color: #fff;
        }
        .btn-block {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 14px;
          font-size: 1.1rem;
        }

        @media (min-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr 2fr;
          }
        }
      `}</style>
        </div>
    );
};

export default Contact;
