import React from 'react';
import Hero from '../components/Hero';

const Home = () => {
    return (
        <div className="page-home">
            <Hero />
            <section className="container mt-4 mb-4">
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
                `}</style>
            </section>
        </div>
    );
};

export default Home;
