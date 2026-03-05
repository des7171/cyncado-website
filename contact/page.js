'use client'

import { useState, useEffect } from 'react'

export default function Contact() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '20px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: scrollY > 50 ? 'rgba(5, 5, 5, 0.95)' : 'rgba(5, 5, 5, 0.8)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid #1a1a1a',
        transition: 'all 0.3s ease',
      }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <CyncadoLogoSmall />
          <span style={{ fontSize: '18px', fontWeight: '600', letterSpacing: '-0.3px' }}>
            <span className="gradient-text">Cyncado</span>
            <span style={{ color: '#666', fontWeight: '400', marginLeft: '6px' }}>Therapeutics</span>
          </span>
        </a>
        
        <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
          <a className="nav-link" href="/#science">Science</a>
          <a className="nav-link" href="/#pipeline">Pipeline</a>
          <a className="nav-link" href="/#about">About</a>
          <a className="nav-link" href="/contact" style={{ color: '#fff' }}>Contact</a>
        </div>
      </nav>

      {/* Contact Section */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        padding: '120px 40px 80px',
      }}>
        {/* Background gradient orbs */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(21, 159, 106, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          right: '10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(162, 206, 34, 0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontSize: '52px', fontWeight: '700', marginBottom: '20px', letterSpacing: '-1.5px' }}>
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p style={{ fontSize: '19px', color: '#888', lineHeight: '1.7', marginBottom: '50px' }}>
            For investor relations, partnership opportunities, or general inquiries, 
            please reach out to our team.
          </p>
          
          {/* Email Card */}
          <div style={{
            background: 'linear-gradient(145deg, #0a0a0a, #111)',
            border: '1px solid #1a1a1a',
            borderRadius: '16px',
            padding: '40px',
            marginBottom: '40px',
          }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, rgba(21, 159, 106, 0.2), rgba(162, 206, 34, 0.1))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px',
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#159F6A" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            
            <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px', color: '#fff' }}>
              Email Us
            </h3>
            <p style={{ fontSize: '15px', color: '#666', marginBottom: '24px' }}>
              We aim to respond to all inquiries within 2 business days.
            </p>
            
            <a 
              href="mailto:pmolloy@cyncado.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '16px 32px',
                background: 'linear-gradient(135deg, #159F6A, #128a5c)',
                color: '#fff',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
            >
              pmolloy@cyncado.com
            </a>
          </div>

          {/* Back to Home */}
          <a 
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: '#666',
              fontSize: '14px',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Home
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '40px', borderTop: '1px solid #151515', textAlign: 'center' }}>
        <p style={{ color: '#444', fontSize: '13px' }}>© 2026 Cyncado Therapeutics. All rights reserved.</p>
      </footer>
    </main>
  )
}

function CyncadoLogoSmall() {
  return (
    <svg width="36" height="24" viewBox="0 0 87.1 68.5">
      <path fill="#159F6A" d="M73.8,47L66,53.9c-0.4,0.3-0.8,0.5-1.3,0.5c-0.5,0-1.1-0.2-1.5-0.7c-0.7-0.8-0.6-2.1,0.2-2.8l2.4-2.1L52.1,35.4c-3.2-3.2-7.6-4.8-11.9-4.8c-4.2,0-8.4,1.5-11.7,4.7l-0.3,0.3c-3.2,3.2-4.7,7.4-4.7,11.5c0,4.1,1.6,8.1,4.6,11.2l0.4,0.4c2.1,2.1,4.8,3.5,7.5,4.2c2.9,0.7,5.9,0.7,8.8-0.1c1.1-0.3,2.2,0.3,2.5,1.4c0.3,1.1-0.3,2.1-1.4,2.4c-3.6,1-7.3,1-10.8,0.1c-3.4-0.9-6.7-2.6-9.3-5.2l-0.5-0.5c-3.7-3.9-5.7-8.9-5.7-13.9c0-5.1,1.9-10.3,5.8-14.3l0.4-0.4c4.1-4,9.3-5.9,14.5-5.8c5.4,0,10.7,2.1,14.7,6l13.8,13.6l2.5-2.2c0.8-0.7,2.1-0.7,2.8,0.2C74.8,45,74.7,46.3,73.8,47z"/>
      <path fill="#A2CE22" d="M87.1,47.9c0.1,5.1-1.8,10.2-5.8,14.3l-0.4,0.4c-4.1,4-9.3,5.9-14.5,5.9c-5.4,0-10.7-2.1-14.7-6L38.3,49.2l-2.3,2c-0.4,0.3-0.8,0.5-1.3,0.5c-0.6,0-1.1-0.2-1.5-0.7c-0.7-0.8-0.7-2.1,0.2-2.8l7.9-6.9c0.8-0.7,2.1-0.7,2.8,0.2c0.7,0.8,0.6,2.1-0.2,2.8l-2.6,2.3l13.3,13.1c3.2,3.2,7.6,4.8,11.9,4.8c4.2,0,8.4-1.5,11.7-4.7l0.3-0.3c3.2-3.2,4.7-7.4,4.7-11.5c0-4.1-1.6-8.1-4.6-11.2l-0.4-0.4c-2.1-2.1-4.8-3.5-7.5-4.2c-2.9-0.7-5.9-0.7-8.8,0.1c-1,0.3-2.1-0.3-2.4-1.4c-0.3-1.1,0.3-2.1,1.4-2.4c3.5-1,7.3-1,10.8-0.1c3.4,0.9,6.7,2.6,9.3,5.2l0.5,0.5C85.1,37.9,87.1,42.9,87.1,47.9z"/>
    </svg>
  )
}
