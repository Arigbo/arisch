'use client';

import React, { useEffect, useState } from 'react';
import styles from '../dashboard.module.css';

export default function TrackOrder() {
  const [order, setOrder] = useState<any>(null);

  useEffect(() => {
    const savedOrder = localStorage.getItem('arisch_latest_order');
    if (savedOrder) {
      setOrder(JSON.parse(savedOrder));
    }
  }, []);

  if (!order) {
    return (
      <div className="glass-card" style={{ padding: '4rem', textAlign: 'center' }}>
        <p>No active orders to track.</p>
      </div>
    );
  }

  return (
    <div className="glass-card" style={{ padding: '2.5rem' }}>
      <h2>Tracking Order #{order.id}</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '3rem' }}>Latest update: Your order is being processed at our Lagos hub.</p>
      
      <div className={styles.tracking}>
        <div className={styles.trackLine}>
          <div className={`${styles.step} ${styles.completed}`}>
            <div className={styles.dot}></div>
            <span>Confirmed</span>
          </div>
          <div className={`${styles.step} ${styles.current}`}>
            <div className={styles.dot}></div>
            <span>Processing</span>
          </div>
          <div className={styles.step}>
            <div className={styles.dot}></div>
            <span>Shipped</span>
          </div>
          <div className={styles.step}>
            <div className={styles.dot}></div>
            <span>Delivered</span>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '4rem', padding: '1.5rem', background: 'var(--accent)', borderRadius: '8px' }}>
        <h4 style={{ marginBottom: '0.5rem' }}>Shipping Details</h4>
        <p style={{ fontSize: '0.9rem' }}>Carrier: Arisch Logistics Premium</p>
        <p style={{ fontSize: '0.9rem' }}>Estimated Delivery: 2-3 Business Days</p>
      </div>
    </div>
  );
}
