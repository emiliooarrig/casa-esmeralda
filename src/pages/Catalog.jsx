import React, { useState, useMemo } from 'react';
import ProductCard from '../components/ProductCard';

const MOCK_PRODUCTS = [
  { id: 1, name: 'Anillo Esmeralda Real', category: 'Anillos', price: 1200, image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 2, name: 'Collar de Oro 18k', category: 'Collares', price: 850, image: 'https://images.unsplash.com/photo-1599643478518-17488fbbcd75?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 3, name: 'Brazalete Diamante', category: 'Brazaletes', price: 2500, image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 4, name: 'Anillo Solitario', category: 'Anillos', price: 900, image: 'https://images.unsplash.com/photo-1603561591411-cd7eb9527cda?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 5, name: 'Pendientes Perla', category: 'Pendientes', price: 450, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 6, name: 'Collar Minimalista', category: 'Collares', price: 320, image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
];

const Catalog = () => {
  // Declaracion de variables
  const [filter, setFilter] = useState('Todos');
  const [sort, setSort] = useState('default');

  const categories = ['Todos', 'Anillos', 'Collares', 'Brazaletes', 'Pendientes'];

  const filteredProducts = useMemo(() => {
    let products = [...MOCK_PRODUCTS];

    if (filter !== 'Todos') {
      products = products.filter(p => p.category === filter);
    }

    if (sort === 'price-asc') {
      products.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-desc') {
      products.sort((a, b) => b.price - a.price);
    }

    return products;
  }, [filter, sort]);

  return (
    <div className="page-catalog container mt-4 mb-4">
      <div className="catalog-header">
        <h1>Catálogo</h1>
        <p>Explora nuestra colección exclusiva</p>
      </div>

      <div className="catalog-controls">
        <div className="filter-group">
          <span className="label">Filtrar por:</span>
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="sort-group">
          <span className="label">Ordenar:</span>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="default">Relevancia</option>
            <option value="price-asc">Precio: Menor a Mayor</option>
            <option value="price-desc">Precio: Mayor a Menor</option>
          </select>
        </div>
      </div>

      <div className="product-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <style>{`
        .catalog-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        .catalog-controls {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 2rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid #eee;
        }
        .filter-group {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          align-items: center;
        }
        .label {
          font-weight: 600;
          margin-right: 0.5rem;
          color: var(--color-base);
        }
        .filter-btn {
          background: none;
          border: 1px solid #ddd;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 0.9rem;
          transition: all 0.2s;
        }
        .filter-btn:hover {
          border-color: var(--color-primary);
          color: var(--color-primary);
        }
        .filter-btn.active {
          background-color: var(--color-primary);
          color: white;
          border-color: var(--color-primary);
        }
        .sort-group select {
          padding: 8px;
          border-radius: 4px;
          border: 1px solid #ddd;
          font-family: var(--font-body);
        }
        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .catalog-controls {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Catalog;
