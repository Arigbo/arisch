'use client';

import React from 'react';

export default function Settings() {
  return (
    <div className="glass-card" style={{ padding: '2.5rem' }}>
      <h2 style={{ marginBottom: '2rem' }}>Account Settings</h2>
      
      <form style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontWeight: 600, fontSize: '0.9rem' }}>First Name</label>
            <input type="text" defaultValue="John" style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--accent)' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontWeight: 600, fontSize: '0.9rem' }}>Last Name</label>
            <input type="text" defaultValue="Doe" style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--accent)' }} />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label style={{ fontWeight: 600, fontSize: '0.9rem' }}>Email Address</label>
          <input type="email" defaultValue="john.doe@example.com" style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--accent)' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label style={{ fontWeight: 600, fontSize: '0.9rem' }}>Password</label>
          <button type="button" className="btn-primary" style={{ background: 'var(--secondary)', width: 'fit-content' }}>Change Password</button>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid var(--accent)' }} />

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
          <button type="button" style={{ background: 'none', fontWeight: 600 }}>Cancel</button>
          <button type="submit" className="btn-primary">Save Changes</button>
        </div>
      </form>
    </div>
  );
}
