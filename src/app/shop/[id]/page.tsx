'use client';

import React, { useState, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart, Product } from '@/context/CartContext';
import styles from './product.module.css';

const products: Product[] = [
  { id: '1', name: 'Premium Ankara Pattern', price: 45.00, image: '/ankara.png', category: 'Materials' },
  { id: '2', name: 'Royal Gold Silk', price: 65.00, image: '/silk.png', category: 'Fabrics' },
  { id: '3', name: 'Professional Tailor Set', price: 120.00, image: '/tools.png', category: 'Equipment' },
  { id: '4', name: 'Classic Cotton Roll', price: 30.00, image: '/ankara.png', category: 'Materials' },
  { id: '5', name: 'Velvet Soft Finish', price: 55.00, image: '/silk.png', category: 'Fabrics' },
  { id: '6', name: 'Precision Cutting Shears', price: 25.00, image: '/tools.png', category: 'Equipment' },
];

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === resolvedParams.id);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="container" style={{ padding: '8rem 0', textAlign: 'center' }}>
        <h1>Product Not Found</h1>
        <Link href="/shop" className="btn-primary" style={{ marginTop: '2rem' }}>Back to Shop</Link>
      </div>
    );
  }

  const handleQuantityChange = (val: string) => {
    const num = parseFloat(val);
    if (!isNaN(num) && num >= 0) {
      setQuantity(num);
    } else if (val === '') {
      setQuantity(0);
    }
  };

  const isMaterial = product.category === 'Materials' || product.category === 'Fabrics';

  return (
    <div className={styles.productPage}>
      <div className="container">
        <Link href="/shop" className={styles.backLink}>← Back to Shop</Link>
        
        <div className={styles.grid}>
          <div className={styles.imageSection}>
            <div className="glass-card" style={{ padding: '1rem', height: '500px', position: 'relative' }}>
              <Image 
                src={product.image} 
                alt={product.name} 
                fill 
                style={{ objectFit: 'cover', borderRadius: '12px' }} 
              />
            </div>
          </div>

          <div className={styles.detailsSection}>
            <span className={styles.category}>{product.category}</span>
            <h1 className={styles.title}>{product.name}</h1>
            <p className={styles.price}>${product.price.toFixed(2)} {isMaterial ? '/ yard' : ''}</p>
            
            <p className={styles.description}>
              Experience the pinnacle of fashion craftsmanship with our {product.name}. 
              Sourced from the finest producers, this {product.category.toLowerCase()} 
              is designed for durability and a premium aesthetic. Perfect for professional 
              designers and enthusiasts alike.
            </p>

            <div className={styles.purchaseBox}>
              <div className={styles.quantityLabel}>
                {isMaterial ? 'How many yards?' : 'Quantity'}
              </div>
              <div className={styles.quantityControls}>
                <button onClick={() => setQuantity(Math.max(0, quantity - (isMaterial ? 0.5 : 1)))}>-</button>
                <input 
                  type="number" 
                  step={isMaterial ? "0.5" : "1"}
                  value={quantity} 
                  onChange={(e) => handleQuantityChange(e.target.value)}
                />
                <button onClick={() => setQuantity(quantity + (isMaterial ? 0.5 : 1))}>+</button>
              </div>
              
              <button 
                className="btn-primary" 
                style={{ width: '100%', justifyContent: 'center', fontSize: '1.1rem' }}
                onClick={() => addToCart(product, quantity)}
              >
                Add {quantity} {isMaterial ? 'Yards' : 'Items'} to Basket
              </button>
            </div>

            <div className={styles.meta}>
              <p>✓ In stock and ready to ship</p>
              <p>✓ Premium quality guaranteed</p>
              <p>✓ Secured checkout</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
