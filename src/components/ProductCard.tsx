'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart, Product } from '@/context/CartContext';
import styles from './ProductCard.module.css';
import QuantityModal from './QuantityModal';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = (quantity: number) => {
    addToCart(product, quantity);
  };

  return (
    <>
      <div className={`glass-card ${styles.card}`}>
        <Link href={`/shop/${product.id}`} className={styles.imageLink}>
          <div className={styles.imageWrapper}>
            <Image 
              src={product.image} 
              alt={product.name} 
              fill 
              style={{ objectFit: 'cover' }}
              className={styles.image}
            />
            <div className={styles.badge}>{product.category}</div>
          </div>
        </Link>
        <div className={styles.content}>
          <Link href={`/shop/${product.id}`}>
            <h3 className={styles.title}>{product.name}</h3>
          </Link>
          <p className={styles.price}>${product.price.toFixed(2)}</p>
          <button 
            className="btn-primary" 
            onClick={() => setIsModalOpen(true)}
            style={{ width: '100%', justifyContent: 'center' }}
          >
            Add to Basket
          </button>
        </div>
      </div>

      {isModalOpen && (
        <QuantityModal 
          product={product} 
          onClose={() => setIsModalOpen(false)} 
          onConfirm={handleAddToCart} 
        />
      )}
    </>
  );
};

export default ProductCard;
