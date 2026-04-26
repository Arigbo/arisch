import Image from 'next/image';
import styles from './about.module.css';

export default function About() {
  return (
    <div className={styles.about}>
      <section className={styles.aboutHero}>
        <div className="container">
          <h1 className="section-title">The Arisch Story</h1>
        </div>
      </section>

      <section className={styles.content}>
        <div className={`container ${styles.grid}`}>
          <div className={styles.textContent}>
            <h2>Crafting Excellence Since Day One</h2>
            <p>
              Arisch was born out of a passion for high-quality textiles and the intricate art of fashion design. 
              We believe that every masterpiece starts with the right materials. From the vibrant threads of 
              Ankara to the smooth elegance of pure silk, we source only the best for our clients.
            </p>
            <p>
              Beyond materials, we empower creators with professional-grade fashion equipment and tools. 
              Whether you're an aspiring designer or an established industry leader, Arisch is your partner 
              in the pursuit of fashion excellence.
            </p>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <h3>500+</h3>
                <p>Premium Fabrics</p>
              </div>
              <div className={styles.stat}>
                <h3>50+</h3>
                <p>Industrial Tools</p>
              </div>
              <div className={styles.stat}>
                <h3>10k+</h3>
                <p>Happy Designers</p>
              </div>
            </div>
          </div>
          <div className={styles.imageContent}>
            <div className="glass-card" style={{ padding: '1rem' }}>
              <Image 
                src="/silk.png" 
                alt="About Arisch" 
                width={500} 
                height={600} 
                style={{ borderRadius: '12px', objectFit: 'cover', width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
