'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import styles from './Navbar.module.css';

const Navbar = () => {
  const { totalItems, cart, removeFromCart, clearCart, totalPrice, updateQuantity } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <Image src="/logo.png" alt="Arisch Logo" width={100} height={35} priority />
        </Link>

        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.menuOpen : ''}`}>
          <li><Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><Link href="/shop" onClick={() => setIsMenuOpen(false)}>Shop</Link></li>
          <li><Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
          <li><Link href="/contact" onClick={() => setIsMenuOpen(false)}>Support</Link></li>
          <li><Link href="/dashboard" onClick={() => setIsMenuOpen(false)}>My Orders</Link></li>
        </ul>

        <div className={styles.navActions}>
          <button 
            className={styles.cartTrigger} 
            onClick={() => setIsCartOpen(!isCartOpen)}
            aria-label="Toggle Cart"
          >
            <span className={styles.cartIcon}>🛒</span>
            {totalItems > 0 && <span className={styles.cartBadge}>{totalItems}</span>}
          </button>
          
          <button 
            className={styles.menuTrigger} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Slide-out Cart Drawer */}
      <div className={`${styles.cartDrawer} ${isCartOpen ? styles.open : ''}`}>
        <div className={styles.drawerHeader}>
          <h3>Your Basket</h3>
          <button onClick={() => setIsCartOpen(false)}>✕</button>
        </div>
        
        <div className={styles.drawerContent}>
          {cart.length === 0 ? (
            <p className={styles.emptyMsg}>Your basket is empty.</p>
          ) : (
            <>
              {cart.map((item) => {
                const isMaterial = item.category === 'Materials' || item.category === 'Fabrics';
                const step = isMaterial ? 0.5 : 1;
                
                return (
                  <div key={item.id} className={styles.cartItem}>
                    <div className={styles.itemInfo}>
                      <p className={styles.itemName}>{item.name}</p>
                      <div className={styles.quantityControls}>
                        <button onClick={() => updateQuantity(item.id, item.quantity - step)}>-</button>
                        <span>{item.quantity} {isMaterial ? 'yds' : ''}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + step)}>+</button>
                      </div>
                      <p className={styles.itemPrice}>${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className={styles.removeBtn}
                    >
                      Remove
                    </button>
                  </div>
                );
              })}
              <div className={styles.drawerFooter}>
                <div className={styles.totalRow}>
                  <span>Total:</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <button className={styles.clearBtn} onClick={clearCart}>Clear Entire Basket</button>
                <Link href="/checkout" onClick={() => setIsCartOpen(false)}>
                  <button className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}>
                    Checkout
                  </button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
      {isCartOpen && <div className={styles.overlay} onClick={() => setIsCartOpen(false)} />}
    </nav>
  );
};

export default Navbar;
