import React from 'react';
import { ShoppingBag } from 'lucide-react';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <div className="product-image">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
                <h3>{product.name}</h3>
                <p className="price">${product.price.toLocaleString()}</p>
                <button className="btn btn-primary add-to-cart">
                    <ShoppingBag size={18} style={{ marginRight: '8px' }} />
                    Añadir
                </button>
            </div>
            <style>{`
        .product-card {
          border: 1px solid #eee;
          border-radius: 8px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          background: white;
        }
        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
        .product-image {
          height: 250px;
          overflow: hidden;
          background-color: #f9f9f9;
        }
        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .product-card:hover .product-image img {
          transform: scale(1.05);
        }
        .product-info {
          padding: 1.5rem;
          text-align: center;
        }
        .product-info h3 {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          color: var(--color-base);
        }
        .price {
          font-size: 1.2rem;
          color: var(--color-primary);
          font-weight: bold;
          margin-bottom: 1rem;
        }
        .add-to-cart {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          font-size: 0.9rem;
        }
      `}</style>
        </div>
    );
};

export default ProductCard;
