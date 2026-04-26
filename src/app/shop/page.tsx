'use client';

import React, { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import styles from './shop.module.css';

const products = [
  { id: '1', name: 'Premium Ankara Pattern', price: 45.00, image: '/ankara.png', category: 'Materials' },
  { id: '2', name: 'Royal Gold Silk', price: 65.00, image: '/silk.png', category: 'Fabrics' },
  { id: '3', name: 'Professional Tailor Set', price: 120.00, image: '/tools.png', category: 'Equipment' },
  { id: '4', name: 'Classic Cotton Roll', price: 30.00, image: '/ankara.png', category: 'Materials' },
  { id: '5', name: 'Velvet Soft Finish', price: 55.00, image: '/silk.png', category: 'Fabrics' },
  { id: '6', name: 'Precision Cutting Shears', price: 25.00, image: '/tools.png', category: 'Equipment' },
];

export default function Shop() {
  const [filter, setFilter] = useState('All');

  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter(p => p.category === filter);

  const categories = ['All', 'Materials', 'Fabrics', 'Equipment'];

  return (
    <div className={styles.shop}>
      <header className={styles.shopHeader}>
        <div className="container">
          <h1 className="section-title">Shop Our Collection</h1>
          <div className={styles.filters}>
            {categories.map((cat) => (
              <button 
                key={cat} 
                className={`${styles.filterBtn} ${filter === cat ? styles.active : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      <section className={styles.productList}>
        <div className="container">
          <div className={styles.grid}>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
