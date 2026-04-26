'use client';

import React, { useState } from 'react';
import styles from './contact.module.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={styles.contact}>
      <div className="container">
        <div className={styles.header}>
          <h1 className="section-title">Support & Complaints</h1>
          <p className={styles.subtitle}>
            Have a question about your order or a complaint? Our team is here to help you.
          </p>
        </div>

        <div className={styles.grid}>
          <div className="glass-card" style={{ padding: '2.5rem' }}>
            {submitted ? (
              <div className={styles.successMsg}>
                <h2>Message Sent!</h2>
                <p>We've received your inquiry and will get back to you within 24 hours.</p>
                <button className="btn-primary" onClick={() => setSubmitted(false)}>Send Another Message</button>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                  <label>Your Name</label>
                  <input type="text" placeholder="John Doe" required />
                </div>
                <div className={styles.inputGroup}>
                  <label>Order Number (Optional)</label>
                  <input type="text" placeholder="#ABC-123" />
                </div>
                <div className={styles.inputGroup}>
                  <label>Subject</label>
                  <select required style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--accent)' }}>
                    <option value="">Select a topic</option>
                    <option value="complaint">Complaint</option>
                    <option value="inquiry">General Inquiry</option>
                    <option value="shipping">Shipping Issue</option>
                    <option value="material">Material Quality</option>
                  </select>
                </div>
                <div className={styles.inputGroup}>
                  <label>Message</label>
                  <textarea placeholder="Describe your issue in detail..." rows={6} required></textarea>
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Send Message
                </button>
              </form>
            )}
          </div>

          <div className={styles.info}>
            <div className="glass-card" style={{ padding: '2.5rem', height: '100%' }}>
              <h2>Get in Touch</h2>
              <div className={styles.infoItems}>
                <div className={styles.infoItem}>
                  <span>📍</span>
                  <div>
                    <h4>Headquarters</h4>
                    <p>123 Fashion Ave, Lagos, Nigeria</p>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <span>📧</span>
                  <div>
                    <h4>Email Us</h4>
                    <p>support@arisch.com</p>
                    <p>sales@arisch.com</p>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <span>📞</span>
                  <div>
                    <h4>Call Us</h4>
                    <p>+234 800 ARISCH (274724)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
