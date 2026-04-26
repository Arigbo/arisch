import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Arisch | Premium Fashion Materials & Equipment",
  description: "Arisch offers the finest Ankara, silk, and fashion materials alongside professional tailoring equipment. Elevate your fashion design with our curated collection.",
  keywords: "fashion materials, ankara, silk, sewing machine, fashion tools, tailoring equipment, Arisch",
  openGraph: {
    title: "Arisch | Premium Fashion Materials & Equipment",
    description: "Shop premium Ankara, silk, and professional fashion equipment at Arisch.",
    images: ["/logo.png"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          <main style={{ minHeight: 'calc(100vh - 160px)' }}>
            {children}
          </main>
          <footer style={{ 
            background: 'var(--secondary)', 
            color: 'white', 
            padding: '4rem 0',
            marginTop: '4rem'
          }}>
            <div className="container">
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '2rem'
              }}>
                <div>
                  <h4 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Arisch</h4>
                  <p style={{ color: '#aaa', fontSize: '0.9rem' }}>
                    Your one-stop shop for premium fashion materials and professional tools.
                  </p>
                </div>
                <div>
                  <h4 style={{ marginBottom: '1rem' }}>Shop</h4>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem', color: '#aaa' }}>
                    <li>Ankara Materials</li>
                    <li>Silk & Fabrics</li>
                    <li>Fashion Tools</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ marginBottom: '1rem' }}>Company</h4>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem', color: '#aaa' }}>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Shipping Policy</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ marginBottom: '1rem' }}>Follow Us</h4>
                  <div style={{ display: 'flex', gap: '1rem', fontSize: '1.2rem' }}>
                    <span>📸</span> <span>📘</span> <span>🐦</span>
                  </div>
                </div>
              </div>
              <div style={{ borderTop: '1px solid #333', marginTop: '3rem', paddingTop: '2rem', textAlign: 'center', fontSize: '0.8rem', color: '#666' }}>
                &copy; {new Date().getFullYear()} Arisch Fashion Industry. All rights reserved.
              </div>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
