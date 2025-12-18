import React from 'react';
import Hero from '../components/Hero';
import { Truck, ShieldCheck, Heart, CreditCard } from 'lucide-react';

const Home = () => {
    return (
        <div className="page-home">
            <Hero />
            <section className="container mt-4">
                <div className="text-center mb-2">
                    <h2>Colecciones Exclusivas</h2>
                    <p>Descubre la elegancia atemporal en cada pieza.</p>
                </div>

                <div className="collections-grid">
                    <div className="collection-item">
                        <img src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Colección Nupcial" />
                        <div className="collection-overlay">
                            <h3>Nupcial</h3>
                        </div>
                    </div>
                    <div className="collection-item">
                        <img src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Colección Diamantes" />
                        <div className="collection-overlay">
                            <h3>Diamantes</h3>
                        </div>
                    </div>
                    <div className="collection-item">
                        <img src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Colección Oro" />
                        <div className="collection-overlay">
                            <h3>Oro 18k</h3>
                        </div>
                    </div>
                </div>

                <style>{`

                    .main-content {
                        margin-bottom: 0rem;
                    }

                    .collections-grid {
                        display: grid;
                        grid-template-columns: 1fr;
                        gap: 2rem;
                    }
                    .collection-item {
                        position: relative;
                        height: 300px;
                        border-radius: 8px;
                        overflow: hidden;
                        cursor: pointer;
                    }
                    .collection-item img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        transition: transform 0.5s ease;
                    }
                    .collection-item:hover img {
                        transform: scale(1.1);
                    }
                    .collection-overlay {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
                        padding: 2rem 1rem 1rem;
                        color: white;
                    }
                    .collection-overlay h3 {
                        color: var(--color-secondary);
                        margin: 0;
                        font-size: 1.5rem;
                    }
                    
                    @media (min-width: 768px) {
                        .collections-grid {
                            grid-template-columns: repeat(3, 1fr);
                        }
                    }

                    /* Best Sellers Section */
                    .best-sellers-section {
                        background-color: #f2f2f2; /* Soft light background */
                        padding: 5rem 0;
                        margin: 6rem 0;
                        width: 100%;
                    }
                    .best-sellers-grid {
                        display: grid;
                        grid-template-columns: repeat(4, 1fr); /* Force 4 columns full width on large screens */
                        gap: 2rem;
                        padding: 0 2rem; /* Add horizontal padding */
                    }
                    @media (max-width: 1024px) {
                         .best-sellers-grid {
                            grid-template-columns: repeat(2, 1fr);
                        }
                    }
                    @media (max-width: 600px) {
                         .best-sellers-grid {
                            grid-template-columns: 1fr;
                        }
                    }
                    .product-card {
                        background: white;
                        border-radius: 8px;
                        overflow: hidden;
                        transition: transform 0.3s ease, box-shadow 0.3s ease;
                        text-align: center;
                        padding-bottom: 1.5rem;
                    }
                    .product-card:hover {
                        transform: translateY(-5px);
                        box-shadow: 0 10px 20px rgba(0,0,0,0.05);
                    }
                    .product-card img {
                        width: 100%;
                        height: 300px;
                        object-fit: cover;
                    }
                    .product-card h4 {
                        margin: 1rem 0 0.5rem;
                        font-family: 'Playfair Display', serif;
                        font-size: 1.2rem;
                    }
                    .product-card .price {
                        font-weight: 500;
                        color: var(--color-primary);
                    }

                    /* Creator Section */
                    .creator-section {
                        margin-top: 6rem;
                        margin-bottom: 4rem;
                        display: grid;
                        grid-template-columns: 1fr;
                        gap: 4rem;
                        align-items: center;
                        background-color: #f9f7f2; /* Color hueso */
                        padding: 3rem;
                        border-radius: 12px;
                    }
                    .creator-image img {
                        width: 100%;
                        border-radius: 8px;
                        box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                    }
                    .creator-content h2 {
                        font-size: 2.5rem;
                        margin-bottom: 1.5rem;
                        color: var(--color-primary);
                    }
                    .creator-content p {
                        font-size: 1.1rem;
                        line-height: 1.8;
                        color: var(--color-text);
                        margin-bottom: 1.5rem;
                    }
                    .signature {
                        font-family: 'Dancing Script', cursive; /* Assuming you might add this font or standard script */
                        font-size: 2rem;
                        color: var(--color-secondary);
                        margin-top: 1rem;
                    }

                    /* Info Bar Section */
                    .info-bar {
                        background-color: var(--color-primary); /* Contrast background */
                        color: white;
                        padding: 4rem 0;
                        margin-top: 6rem;
                    }
                    .info-grid {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                        gap: 2rem;
                        text-align: center;
                    }
                    .info-icon {
                        margin-bottom: 1rem;
                        color: var(--color-secondary);
                    }
                    .info-item h4 {
                        font-size: 1.2rem;
                        margin-bottom: 0.5rem;
                        color: var(--color-secondary);
                    }
                    .info-item p {
                        font-size: 0.9rem;
                        opacity: 0.9;
                    }

                    @media (min-width: 768px) {
                        .creator-section {
                            grid-template-columns: 1fr 1fr;
                        }
                    }
                `}</style>
            </section>

            <div className="best-sellers-section">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', marginBottom: '0' }}>Más Vendidos</h2>
                        <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '1rem' }}>Piezas favoritas que definen nuestro estilo.</p>
                    </div>
                </div>
                <div className="best-sellers-grid">
                    {[
                        { id: 1, name: "Anillo Eternidad", price: "$14,500", img: "https://images.unsplash.com/photo-1605100804763-ebea243bc305?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
                        { id: 2, name: "Collar Minimalista", price: "$9,200", img: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
                        { id: 3, name: "Aretes Perla", price: "$4,800", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
                        { id: 4, name: "Brazalete Oro", price: "$18,000", img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
                    ].map(item => (
                        <div key={item.id} className="product-card">
                            <img src={item.img} alt={item.name} />
                            <h4>{item.name}</h4>
                            <p className="price">{item.price}</p>
                            <a href="/Catalog" className="btn btn-primary">Comprar</a>
                        </div>
                    ))}
                </div>
            </div>

            <section className="container">
                <div className="creator-section">
                    <div className="creator-image">
                        <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="La Creadora" />
                    </div>
                    <div className="creator-content">
                        <h2>El Alma Detrás de la Joya</h2>
                        <p>
                            "Cada pieza que diseño lleva consigo un fragmento de historia, un susurro de la naturaleza y una promesa de eternidad.
                            Mi pasión no es solo moldear metales preciosos, sino dar forma a emociones que perduren en el tiempo."
                        </p>
                        <p>
                            Formada en los talleres más prestigiosos de Europa y con un corazón profundamente arraigado en la riqueza cultural de México,
                            busco crear puentes entre la tradición artesanal y el diseño contemporáneo.
                        </p>
                        <div className="signature">Esmeralda Castillo </div>
                    </div>
                </div>
            </section>

            <div className="info-bar">
                <div className="container">
                    <div className="info-grid">
                        <div className="info-item">
                            <Truck size={32} className="info-icon" />
                            <h4>Envíos Seguros</h4>
                            <p>A todo México y el mundo.</p>
                        </div>
                        <div className="info-item">
                            <ShieldCheck size={32} className="info-icon" />
                            <h4>Devoluciones</h4>
                            <p>30 días de garantía.</p>
                        </div>
                        <div className="info-item">
                            <Heart size={32} className="info-icon" />
                            <h4>Hecho en México</h4>
                            <p>Orgullo y pasión artesanal.</p>
                        </div>
                        <div className="info-item">
                            <CreditCard size={32} className="info-icon" />
                            <h4>Métodos de Pago</h4>
                            <p>Tarjetas y transferencias.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
