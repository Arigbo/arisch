'use client';

import React, { useEffect, useState } from 'react';
import styles from './dashboard.module.css';

export default function MyOrders() {
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
        <p>You haven't placed any orders yet.</p>
        <button className="btn-primary" style={{ marginTop: '1.5rem' }} onClick={() => window.location.href = '/shop'}>
          Go to Shop
        </button>
      </div>
    );
  }

  return (
    <div className={styles.orderCard}>
      <div className="glass-card" style={{ padding: '2.5rem' }}>
        <div className={styles.orderHeader}>
          <div>
            <h2>Order #{order.id}</h2>
            <p>Placed on {order.date}</p>
          </div>
          <div className={styles.statusBadge}>
            {order.status}
          </div>
        </div>

        <div className={styles.orderItems}>
          <h3>Items</h3>
          {order.items.map((item: any) => (
            <div key={item.id} className={styles.item}>
              <span>{item.name} (x{item.quantity})</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>

        <div className={styles.orderFooter}>
          <div className={styles.totalRow}>
            <span>Total Amount:</span>
            <span>${order.total.toFixed(2)}</span>
          </div>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            <strong>Shipping to:</strong> {order.address}
          </p>
        </div>
      </div>
    </div>
  );
}
