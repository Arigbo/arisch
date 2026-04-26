'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './dashboard.module.css';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navItems = [
    { name: 'My Orders', path: '/dashboard' },
    { name: 'Track Order', path: '/dashboard/track' },
    { name: 'Settings', path: '/dashboard/settings' },
    { name: 'Help Center', path: '/dashboard/help' },
  ];

  return (
    <div className={styles.dashboard}>
      <div className="container">
        <div className={styles.header}>
          <h1>User Dashboard</h1>
          <p>Manage your orders, tracking, and account preferences.</p>
        </div>

        <div className={styles.grid}>
          <div className={styles.sidebar}>
            <div className="glass-card" style={{ padding: '2rem' }}>
              <ul className={styles.nav}>
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link 
                      href={item.path} 
                      className={pathname === item.path ? styles.active : ''}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.main}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
