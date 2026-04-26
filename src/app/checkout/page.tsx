'use client';

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import styles from './checkout.module.css';

export default function Checkout() {
  const { cart, totalPrice, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [address, setAddress] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert("Your basket is empty!");
      return;
    }
    setSubmitted(true);
    // In a real app, we'd send this to an API and get an order ID
    const orderData = {
      id: Math.random().toString(36).substr(2, 9).toUpperCase(),
      date: new Date().toLocaleDateString(),
      items: cart,
      total: totalPrice,
      address: address,
      status: 'Processing'
    };
    localStorage.setItem('arisch_latest_order', JSON.stringify(orderData));
    clearCart();
  };

  if (submitted) {
    const order = JSON.parse(localStorage.getItem('arisch_latest_order') || '{}');
    return (
      <div className={`container ${styles.success}`}>
        <div className="glass-card" style={{ padding: '4rem', textAlign: 'center' }}>
          <span style={{ fontSize: '4rem' }}>🎉</span>
          <h2>Order Placed Successfully!</h2>
          <p>Order ID: <strong>#{order.id}</strong></p>
          <p>Thank you for choosing Arisch. Your premium fashion materials are being prepared for delivery to:</p>
          <p><strong>{address}</strong></p>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button className="btn-primary" onClick={() => window.location.href = '/'}>
              Back to Home
            </button>
            <button className="btn-primary" style={{ background: 'var(--secondary)' }} onClick={() => window.location.href = '/dashboard'}>
              Track Order
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.checkout}>
      <div className="container">
        <h1 className="section-title">Secure Checkout</h1>
        <div className={styles.grid}>
          <div className="glass-card" style={{ padding: '2.5rem' }}>
            <h2 style={{ marginBottom: '1.5rem' }}>Delivery Information</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <label>Full Name</label>
                <input type="text" placeholder="Jane Doe" required />
              </div>
              <div className={styles.inputGroup}>
                <label>Email Address</label>
                <input type="email" placeholder="jane@example.com" required />
              </div>
              <div className={styles.inputGroup}>
                <label>Delivery Address</label>
                <textarea 
                  placeholder="Enter your full delivery location..." 
                  rows={4} 
                  required 
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                ></textarea>
              </div>
              <div className={styles.paymentMock}>
                <h3>Payment Method</h3>
                <div className={styles.paymentOptions}>
                  <div className={styles.option}>
                    <input type="radio" id="card" name="payment" defaultChecked />
                    <label htmlFor="card">Credit / Debit Card</label>
                  </div>
                  <div className={styles.option}>
                    <input type="radio" id="transfer" name="payment" />
                    <label htmlFor="transfer">Bank Transfer</label>
                  </div>
                </div>
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Pay & Place Order (${totalPrice.toFixed(2)})
              </button>
            </form>
          </div>

          <div className={styles.summary}>
            <div className="glass-card" style={{ padding: '2.5rem' }}>
              <h2 style={{ marginBottom: '1.5rem' }}>Order Summary</h2>
              {cart.length === 0 ? (
                <p>Your basket is empty.</p>
              ) : (
                <>
                  <div className={styles.cartItems}>
                    {cart.map((item) => (
                      <div key={item.id} className={styles.cartItem}>
                        <span>{item.name} (x{item.quantity})</span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                  <div className={styles.totalRow}>
                    <span>Subtotal</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className={styles.totalRow}>
                    <span>Shipping</span>
                    <span>FREE</span>
                  </div>
                  <div className={`${styles.totalRow} ${styles.grandTotal}`}>
                    <span>Total</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
