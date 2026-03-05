'use client'

import { useState, useEffect } from 'react'

export default function Mission() {
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
          <NavDropdown 
            label="About Us" 
            items={[
              { label: 'Our Mission', href: '/mission' },
              { label: 'Leadership', href: '/leadership' },
            ]} 
            activeItem="Our Mission"
          />
          <a className="nav-link" href="/contact">Contact</a>
        </div>
      </nav>

      {/* Mission Content */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        padding: '140px 40px 80px',
      }}>
        {/* Background gradient orbs */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(21, 159, 106, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(162, 206, 34, 0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h1 style={{ 
            fontSize: '52px', 
            fontWeight: '700', 
            marginBottom: '30px', 
            letterSpacing: '-1.5px',
            textAlign: 'center',
          }}>
            Our <span className="gradient-text">Mission</span>
          </h1>
          
          <div style={{
            background: 'linear-gradient(145deg, #0a0a0a, #111)',
            border: '1px solid #1a1a1a',
            borderRadius: '16px',
            padding: '50px',
            marginBottom: '40px',
          }}>
            <p style={{ 
              fontSize: '22px', 
              color: '#ccc', 
              lineHeight: '1.8', 
              marginBottom: '30px',
              textAlign: 'center',
              fontStyle: 'italic',
            }}>
              &ldquo;To develop innovative adenosine receptor antagonist therapies that transform 
              the treatment of rare cancers and other serious diseases.&rdquo;
            </p>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '28px', fontWeight: '600', marginBottom: '20px', color: '#fff' }}>
              What Drives Us
            </h2>
            <p style={{ fontSize: '17px', color: '#888', lineHeight: '1.8', marginBottom: '20px' }}>
              At Cyncado Therapeutics, we are focused on developing therapies that target the adenosine 
              pathway — a critical mechanism that tumors exploit to evade the immune system. Our approach 
              centers on A2A and A2B receptor antagonists, both as monotherapies and in combination.
            </p>
            <p style={{ fontSize: '17px', color: '#888', lineHeight: '1.8' }}>
              We are committed to advancing treatments for patients with rare and difficult-to-treat 
              cancers, including mesothelioma, as well as exploring applications in neurology, 
              hematology, and pulmonary diseases.
            </p>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '28px', fontWeight: '600', marginBottom: '20px', color: '#fff' }}>
              Our Approach
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div style={{
                background: 'rgba(21, 159, 106, 0.08)',
                border: '1px solid rgba(21, 159, 106, 0.2)',
                borderRadius: '12px',
                padding: '24px',
              }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#159F6A' }}>
                  Scientific Rigor
                </h3>
                <p style={{ fontSize: '15px', color: '#888', lineHeight: '1.6' }}>
                  Our programs are built on robust preclinical data and a deep understanding of 
                  adenosine biology.
                </p>
              </div>
              <div style={{
                background: 'rgba(162, 206, 34, 0.08)',
                border: '1px solid rgba(162, 206, 34, 0.2)',
                borderRadius: '12px',
                padding: '24px',
              }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '10px', color: '#A2CE22' }}>
                  Target Synchronization
                </h3>
                <p style={{ fontSize: '15px', color: '#888', lineHeight: '1.6' }}>
                  Our dual A2A/A2B approach is designed to provide comprehensive pathway blockade.
                </p>
              </div>
            </div>
          </div>

          {/* Back to Home */}
          <div style={{ textAlign: 'center' }}>
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
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '40px', borderTop: '1px solid #151515', textAlign: 'center' }}>
        <p style={{ color: '#444', fontSize: '13px' }}>© 2026 Cyncado Therapeutics. All rights reserved.</p>
      </footer>
    </main>
  )
}

function NavDropdown({ label, items, activeItem }) {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div 
      style={{ position: 'relative' }}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        style={{
          background: 'none',
          border: 'none',
          color: activeItem ? '#fff' : '#888',
          fontSize: '14px',
          fontWeight: '500',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          padding: 0,
          transition: 'color 0.2s ease',
        }}
      >
        {label}
        <svg 
          width="12" 
          height="12" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease',
          }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
          marginTop: '12px',
          background: 'rgba(10, 10, 10, 0.98)',
          border: '1px solid #222',
          borderRadius: '8px',
          padding: '8px 0',
          minWidth: '160px',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
        }}>
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              style={{
                display: 'block',
                padding: '10px 20px',
                color: item.label === activeItem ? '#159F6A' : '#aaa',
                textDecoration: 'none',
                fontSize: '14px',
                transition: 'all 0.15s ease',
                background: item.label === activeItem ? 'rgba(21, 159, 106, 0.1)' : 'transparent',
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
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
