'use client';

import Link from 'next/link';
import Image from 'next/image';
import ProductCard from '@/components/ProductCard';
import styles from './page.module.css';

const featuredProducts = [
  { id: '1', name: 'Premium Ankara Pattern', price: 45.00, image: '/ankara.png', category: 'Materials' },
  { id: '2', name: 'Royal Gold Silk', price: 65.00, image: '/silk.png', category: 'Fabrics' },
  { id: '3', name: 'Professional Tailor Set', price: 120.00, image: '/tools.png', category: 'Equipment' },
];

export default function Home() {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <h1 className={`${styles.heroTitle} fade-in`}>
            Wired for <span className={styles.highlight}>Fashion</span>
          </h1>
          <p className={`${styles.heroSubtitle} fade-in`}>
            Discover premium materials, intricate Ankara patterns, and professional equipment curated for the modern designer.
          </p>
          <div className={`${styles.heroBtns} fade-in`}>
            <Link href="/shop" className="btn-primary">
              Shop Collections ➔
            </Link>
            <Link href="/about" className={styles.btnOutline}>
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className={styles.featured}>
        <div className="container">
          <h2 className="section-title">Featured Collections</h2>
          <div className={styles.productGrid}>
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className={styles.values}>
        <div className="container">
          <div className={styles.valuesGrid}>
            <div className={styles.valueItem}>
              <span className={styles.valueIcon}>💎</span>
              <h3>Premium Quality</h3>
              <p>Hand-selected materials from the finest textile regions.</p>
            </div>
            <div className={styles.valueItem}>
              <span className={styles.valueIcon}>🚚</span>
              <h3>Fast Delivery</h3>
              <p>Reliable shipping to your doorstep, wherever you are.</p>
            </div>
            <div className={styles.valueItem}>
              <span className={styles.valueIcon}>🛠️</span>
              <h3>Professional Tools</h3>
              <p>Equipping you with industry-standard machinery and kits.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
