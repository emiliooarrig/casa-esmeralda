import React from 'react';

const Story = () => {
  return (
    <div className="page-story">
      <div className="story-hero">
        <div className="container">
          <h1>Nuestra Historia</h1>
        </div>
      </div>

      <div className="container mt-4 mb-4">
        <div className="story-content">
          <div className="story-text">
            <h2>Artesanía y Tradición</h2>
            <p>
              Fundada en 2025, <strong>Casa Esmeralda</strong> nació con la visión de comercializar piezas de joyería que no solo adornen, sino que cuenten historias.
              Cada joya, es seleccionada a mano, asegurando que solo las piedras más puras y vibrantes lleguen a nuestros clientes.
            </p>
            <p>
              Nuestra filosofía se basa en la <em>excelencia sin compromisos</em>. Creemos que la verdadera belleza reside en los detalles y en el atrevimiento de
              ser uno mismo, en el lujo sutíl de ser tú.
            </p>
            <h3>Compromiso con la Calidad</h3>
            <p>
              Trabajamos exclusivamente con metales preciosos éticamente obtenidos y libres de conflicto.
              Cuando adquieres una pieza de Casa Esmeralda, no solo compras una joya, inviertes en un legado de integridad y arte.
            </p>
          </div>
          <div className="story-image">
            <img src="history/history-foto.jpg" alt="Artesano trabajando" />
          </div>
        </div>
      </div>

      <style>{`
        .story-hero {
          background-color: var(--color-primary);
          padding: 4rem 0;
          text-align: center;
          margin-bottom: 3rem;
        }
        .story-hero h1 {
          color: var(--color-secondary);
        }
        .story-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
        }
        .story-text p {
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
          color: #555;
        }
        .story-text h2, .story-text h3 {
          color: var(--color-primary);
          margin-bottom: 1.5rem;
        }
        .story-image img {
          width: 100%;
          border-radius: 8px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }

        @media (min-width: 768px) {
          .story-content {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Story;
