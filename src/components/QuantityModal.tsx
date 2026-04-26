'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Product } from '@/context/CartContext';
import styles from './QuantityModal.module.css';

interface QuantityModalProps {
  product: Product;
  onClose: () => void;
  onConfirm: (quantity: number) => void;
}

const QuantityModal: React.FC<QuantityModalProps> = ({ product, onClose, onConfirm }) => {
  const isMaterial = product.category === 'Materials' || product.category === 'Fabrics';
  const [quantity, setQuantity] = useState(1);

  const handleConfirm = () => {
    if (quantity > 0) {
      onConfirm(quantity);
      onClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={`glass-card ${styles.modal}`} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>✕</button>
        
        <div className={styles.content}>
          <div className={styles.productInfo}>
            <div className={styles.imageWrapper}>
              <Image src={product.image} alt={product.name} fill style={{ objectFit: 'cover', borderRadius: '8px' }} />
            </div>
            <div>
              <h3>{product.name}</h3>
              <p className={styles.price}>${product.price.toFixed(2)} {isMaterial ? '/ yard' : ''}</p>
            </div>
          </div>

          <div className={styles.selection}>
            <label className={styles.label}>
              {isMaterial ? 'Select Yardage' : 'Select Quantity'}
            </label>
            <div className={styles.controls}>
              <button onClick={() => setQuantity(Math.max(0, quantity - (isMaterial ? 0.5 : 1)))}>-</button>
              <input 
                type="number" 
                step={isMaterial ? "0.5" : "1"} 
                value={quantity} 
                onChange={(e) => setQuantity(parseFloat(e.target.value) || 0)}
              />
              <button onClick={() => setQuantity(quantity + (isMaterial ? 0.5 : 1))}>+</button>
            </div>
          </div>

          <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={handleConfirm}>
            Add {quantity} {isMaterial ? 'Yards' : 'Items'} to Basket
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuantityModal;
