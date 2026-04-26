'use client';

import React from 'react';
import Link from 'next/link';

export default function HelpCenter() {
  const faqs = [
    { q: "How long does shipping take?", a: "Standard shipping takes 3-5 business days. Premium members get 1-2 day delivery." },
    { q: "Can I return fabrics?", a: "Fabrics cut to specific yardage are non-returnable unless defective. Tools can be returned within 14 days." },
    { q: "Do you offer international shipping?", a: "Yes, Arisch ships to over 20 countries worldwide. Rates vary by location." },
    { q: "How do I track my order?", a: "Go to the 'Track Order' tab in your dashboard for real-time updates." }
  ];

  return (
    <div className="glass-card" style={{ padding: '2.5rem' }}>
      <h2 style={{ marginBottom: '1.5rem' }}>Help Center</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '3rem' }}>Find answers to common questions or reach out to our support team.</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {faqs.map((faq, i) => (
          <div key={i} style={{ borderBottom: '1px solid var(--accent)', paddingBottom: '1.5rem' }}>
            <h4 style={{ marginBottom: '0.5rem' }}>{faq.q}</h4>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>{faq.a}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '4rem', textAlign: 'center', padding: '2rem', background: 'var(--accent)', borderRadius: '12px' }}>
        <h3>Still need help?</h3>
        <p style={{ margin: '1rem 0 2rem' }}>Our support team is available 24/7 to assist you with any issues.</p>
        <Link href="/contact" className="btn-primary">Contact Support</Link>
      </div>
    </div>
  );
}
