'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [animationPhase, setAnimationPhase] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const timers = [
      setTimeout(() => setAnimationPhase(1), 300),
      setTimeout(() => setAnimationPhase(2), 1200),
      setTimeout(() => setAnimationPhase(3), 3000),
      setTimeout(() => setAnimationPhase(4), 3600),
      setTimeout(() => setAnimationPhase(5), 4200),
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getLeftOffset = () => {
    if (animationPhase < 1) return -50
    if (animationPhase < 2) return -35
    return 0
  }
  
  const getRightOffset = () => {
    if (animationPhase < 1) return 50
    if (animationPhase < 2) return 35
    return 0
  }

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
        background: scrollY > 50 ? 'rgba(5, 5, 5, 0.95)' : 'transparent',
        backdropFilter: scrollY > 50 ? 'blur(20px)' : 'none',
        borderBottom: scrollY > 50 ? '1px solid #1a1a1a' : 'none',
        transition: 'all 0.3s ease',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <CyncadoLogoSmall />
          <span style={{ fontSize: '18px', fontWeight: '600', letterSpacing: '-0.3px' }}>
            <span className="gradient-text">Cyncado</span>
            <span style={{ color: '#666', fontWeight: '400', marginLeft: '6px' }}>Therapeutics</span>
          </span>
        </div>
        
        <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
          <a className="nav-link" href="#science">Science</a>
          <a className="nav-link" href="#pipeline">Pipeline</a>
          <a className="nav-link" href="#about">About</a>
          <a className="nav-link" href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        padding: '120px 40px 80px',
      }}>
        <div style={{
          position: 'absolute',
          top: '15%',
          left: '5%',
          width: '700px',
          height: '700px',
          background: 'radial-gradient(circle, rgba(21, 159, 106, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '5%',
          right: '0%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(162, 206, 34, 0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        {/* Animated Logo */}
        <div 
          className={animationPhase >= 4 ? 'animate-float' : ''}
          style={{
            position: 'relative',
            width: '500px',
            height: '180px',
            marginBottom: '60px',
          }}
        >
          <svg 
            viewBox="0 0 272.2 95.1" 
            className={animationPhase >= 4 ? 'animate-glow' : ''}
            style={{ width: '100%', height: '100%', overflow: 'visible' }}
          >
            <g style={{
              opacity: animationPhase >= 1 ? 1 : 0,
              transform: `translateX(${getLeftOffset()}px)`,
              transition: animationPhase >= 2 
                ? 'transform 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.8s ease' 
                : 'opacity 0.8s ease',
            }}>
              <path fill="#159F6A" d="M73.8,47L66,53.9c-0.4,0.3-0.8,0.5-1.3,0.5c-0.5,0-1.1-0.2-1.5-0.7c-0.7-0.8-0.6-2.1,0.2-2.8l2.4-2.1L52.1,35.4c-3.2-3.2-7.6-4.8-11.9-4.8c-4.2,0-8.4,1.5-11.7,4.7l-0.3,0.3c-3.2,3.2-4.7,7.4-4.7,11.5c0,4.1,1.6,8.1,4.6,11.2l0.4,0.4c2.1,2.1,4.8,3.5,7.5,4.2c2.9,0.7,5.9,0.7,8.8-0.1c1.1-0.3,2.2,0.3,2.5,1.4c0.3,1.1-0.3,2.1-1.4,2.4c-3.6,1-7.3,1-10.8,0.1c-3.4-0.9-6.7-2.6-9.3-5.2l-0.5-0.5c-3.7-3.9-5.7-8.9-5.7-13.9c0-5.1,1.9-10.3,5.8-14.3l0.4-0.4c4.1-4,9.3-5.9,14.5-5.8c5.4,0,10.7,2.1,14.7,6l13.8,13.6l2.5-2.2c0.8-0.7,2.1-0.7,2.8,0.2C74.8,45,74.7,46.3,73.8,47z"/>
            </g>
            
            <g style={{
              opacity: animationPhase >= 1 ? 1 : 0,
              transform: `translateX(${getRightOffset()}px)`,
              transition: animationPhase >= 2 
                ? 'transform 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.8s ease' 
                : 'opacity 0.8s ease',
            }}>
              <path fill="#A2CE22" d="M87.1,47.9c0.1,5.1-1.8,10.2-5.8,14.3l-0.4,0.4c-4.1,4-9.3,5.9-14.5,5.9c-5.4,0-10.7-2.1-14.7-6L38.3,49.2l-2.3,2c-0.4,0.3-0.8,0.5-1.3,0.5c-0.6,0-1.1-0.2-1.5-0.7c-0.7-0.8-0.7-2.1,0.2-2.8l7.9-6.9c0.8-0.7,2.1-0.7,2.8,0.2c0.7,0.8,0.6,2.1-0.2,2.8l-2.6,2.3l13.3,13.1c3.2,3.2,7.6,4.8,11.9,4.8c4.2,0,8.4-1.5,11.7-4.7l0.3-0.3c3.2-3.2,4.7-7.4,4.7-11.5c0-4.1-1.6-8.1-4.6-11.2l-0.4-0.4c-2.1-2.1-4.8-3.5-7.5-4.2c-2.9-0.7-5.9-0.7-8.8,0.1c-1,0.3-2.1-0.3-2.4-1.4c-0.3-1.1,0.3-2.1,1.4-2.4c3.5-1,7.3-1,10.8-0.1c3.4,0.9,6.7,2.6,9.3,5.2l0.5,0.5C85.1,37.9,87.1,42.9,87.1,47.9z"/>
            </g>

            <g style={{ opacity: animationPhase >= 3 ? 1 : 0, transition: 'opacity 0.8s ease 0.3s' }}>
              <path fill="#159F6A" d="M107.4,52.5c-1.3-0.7-2.2-1.6-2.9-2.7s-1-2.5-1-4.1v-7.4c0-1.5,0.3-2.9,1-4.1c0.7-1.2,1.7-2.1,2.9-2.7s2.7-1,4.4-1c1.6,0,3.1,0.3,4.3,0.9c1.2,0.6,2.2,1.5,2.9,2.6s1,2.4,1,3.9c0,0.2-0.1,0.3-0.4,0.4l-3.7,0.2h-0.1c-0.2,0-0.3-0.1-0.3-0.4c0-1.1-0.3-2-1-2.7c-0.7-0.7-1.6-1-2.7-1c-1.2,0-2.1,0.3-2.8,1c-0.7,0.7-1,1.6-1,2.7v7.7c0,1.1,0.3,2,1,2.7c0.7,0.7,1.6,1,2.8,1c1.1,0,2-0.3,2.7-1c0.7-0.7,1-1.6,1-2.7c0-0.2,0.1-0.4,0.4-0.4l3.7,0.2c0.1,0,0.2,0,0.3,0.1c0.1,0.1,0.1,0.1,0.1,0.2c0,1.5-0.3,2.8-1,3.9s-1.7,2-2.9,2.6c-1.2,0.6-2.7,0.9-4.3,0.9C110.1,53.5,108.6,53.2,107.4,52.5z"/>
              <path fill="#159F6A" d="M129.9,53.1c-0.1-0.1-0.1-0.2-0.1-0.3v-8.1c0-0.1,0-0.1,0-0.2l-6.6-13.2c0-0.1-0.1-0.1-0.1-0.2c0-0.2,0.1-0.3,0.4-0.3h4c0.2,0,0.4,0.1,0.4,0.3l4,8.5c0.1,0.1,0.1,0.1,0.2,0l4-8.5c0.1-0.2,0.2-0.3,0.4-0.3h4.1c0.1,0,0.2,0,0.3,0.1c0.1,0.1,0,0.2,0,0.3l-6.7,13.2c0,0,0,0.1,0,0.2v8.1c0,0.1,0,0.2-0.1,0.3c-0.1,0.1-0.2,0.1-0.3,0.1h-3.7C130,53.2,129.9,53.2,129.9,53.1z"/>
              <path fill="#159F6A" d="M158.1,30.9c0.1-0.1,0.2-0.1,0.3-0.1h3.7c0.1,0,0.2,0,0.3,0.1c0.1,0.1,0.1,0.2,0.1,0.3v21.6c0,0.1,0,0.2-0.1,0.3c-0.1,0.1-0.2,0.1-0.3,0.1h-3.6c-0.2,0-0.4-0.1-0.4-0.3l-8.3-13.7c0-0.1-0.1-0.1-0.1-0.1c0,0-0.1,0.1-0.1,0.1l0.1,13.5c0,0.1,0,0.2-0.1,0.3c-0.1,0.1-0.2,0.1-0.3,0.1h-3.7c-0.1,0-0.2,0-0.3-0.1c-0.1-0.1-0.1-0.2-0.1-0.3V31.2c0-0.1,0-0.2,0.1-0.3c0.1-0.1,0.2-0.1,0.3-0.1h3.6c0.2,0,0.4,0.1,0.4,0.3l8.3,13.6c0,0.1,0.1,0.1,0.1,0.1c0,0,0.1-0.1,0.1-0.1l0-13.4C158,31.1,158,31,158.1,30.9z"/>
              <path fill="#159F6A" d="M171.8,52.5c-1.3-0.7-2.2-1.6-2.9-2.7s-1-2.5-1-4.1v-7.4c0-1.5,0.3-2.9,1-4.1c0.7-1.2,1.7-2.1,2.9-2.7s2.7-1,4.4-1c1.6,0,3.1,0.3,4.3,0.9c1.2,0.6,2.2,1.5,2.9,2.6s1,2.4,1,3.9c0,0.2-0.1,0.3-0.4,0.4l-3.7,0.2h-0.1c-0.2,0-0.3-0.1-0.3-0.4c0-1.1-0.3-2-1-2.7c-0.7-0.7-1.6-1-2.7-1c-1.2,0-2.1,0.3-2.8,1c-0.7,0.7-1,1.6-1,2.7v7.7c0,1.1,0.3,2,1,2.7c0.7,0.7,1.6,1,2.8,1c1.1,0,2-0.3,2.7-1c0.7-0.7,1-1.6,1-2.7c0-0.2,0.1-0.4,0.4-0.4l3.7,0.2c0.1,0,0.2,0,0.3,0.1c0.1,0.1,0.1,0.1,0.1,0.2c0,1.5-0.3,2.8-1,3.9s-1.7,2-2.9,2.6c-1.2,0.6-2.7,0.9-4.3,0.9C174.5,53.5,173.1,53.2,171.8,52.5z"/>
            </g>
            
            <g style={{ opacity: animationPhase >= 3 ? 1 : 0, transition: 'opacity 0.8s ease 0.5s' }}>
              <path fill="#A2CE22" d="M202.4,52.9l-1-3.1c0-0.1-0.1-0.1-0.2-0.1h-7.9c-0.1,0-0.1,0-0.2,0.1l-0.9,3.1c-0.1,0.2-0.2,0.3-0.4,0.3h-4.1c-0.1,0-0.2,0-0.3-0.1c-0.1-0.1-0.1-0.2,0-0.3l6.9-21.6c0.1-0.2,0.2-0.3,0.4-0.3h5c0.2,0,0.4,0.1,0.4,0.3l6.9,21.6c0,0,0,0.1,0,0.2c0,0.2-0.1,0.3-0.4,0.3h-4.1C202.6,53.2,202.4,53.1,202.4,52.9z M194.5,46.2h5.6c0.1,0,0.2-0.1,0.1-0.2l-2.9-9.5c0-0.1-0.1-0.1-0.1-0.1c0,0-0.1,0-0.1,0.1l-2.8,9.5C194.3,46.1,194.4,46.2,194.5,46.2z"/>
              <path fill="#A2CE22" d="M211.7,53.1c-0.1-0.1-0.1-0.2-0.1-0.3V31.2c0-0.1,0-0.2,0.1-0.3c0.1-0.1,0.2-0.1,0.3-0.1h8c1.6,0,3,0.3,4.2,0.8c1.2,0.6,2.1,1.4,2.8,2.4c0.7,1,1,2.2,1,3.6v8.8c0,1.3-0.3,2.5-1,3.6c-0.7,1-1.6,1.8-2.8,2.4c-1.2,0.6-2.6,0.8-4.2,0.8h-8C211.9,53.2,211.8,53.2,211.7,53.1z M216.3,49.4h3.9c1,0,1.8-0.3,2.4-1c0.6-0.7,0.9-1.5,0.9-2.7v-7.4c0-1.1-0.3-2-0.9-2.7c-0.6-0.7-1.4-1-2.4-1h-3.8c-0.1,0-0.2,0.1-0.2,0.2v14.3C216.1,49.3,216.2,49.4,216.3,49.4z"/>
              <path fill="#A2CE22" d="M236.8,52.6c-1.3-0.7-2.3-1.6-3-2.9s-1.1-2.6-1.1-4.2v-6.8c0-1.6,0.4-3,1.1-4.2s1.7-2.2,3-2.8s2.7-1,4.4-1c1.7,0,3.2,0.3,4.4,1s2.3,1.6,3,2.8s1.1,2.6,1.1,4.2v6.8c0,1.6-0.4,3-1.1,4.3c-0.7,1.2-1.7,2.2-3,2.9s-2.7,1-4.4,1C239.6,53.6,238.1,53.2,236.8,52.6z M244.1,48.6c0.7-0.7,1.1-1.7,1.1-3v-7c0-1.2-0.4-2.2-1.1-3c-0.7-0.8-1.7-1.1-2.9-1.1c-1.2,0-2.1,0.4-2.8,1.1c-0.7,0.8-1.1,1.8-1.1,3v7c0,1.2,0.4,2.2,1.1,3c0.7,0.7,1.7,1.1,2.8,1.1C242.4,49.7,243.4,49.3,244.1,48.6z"/>
            </g>

            <g style={{ opacity: animationPhase >= 3 ? 1 : 0, transition: 'opacity 0.8s ease 0.7s' }}>
              <path fill="#888888" d="M145.7,61.5H143v-1h6.7v1H147v5.4h-1.4V61.5z"/>
              <path fill="#888888" d="M152.1,60.5h1.4v6.4h-1.4V60.5z M153.3,63h5v1h-5V63z M158,60.5h1.4v6.4H158V60.5z"/>
              <path fill="#888888" d="M162.2,60.5h5.9v1.1h-4.5v1.5h4.3v1h-4.3v1.7h4.5v1.1h-5.9V60.5z"/>
              <path fill="#888888" d="M170.7,60.5h4.1c0.6,0,1,0.1,1.4,0.2s0.7,0.3,0.8,0.6c0.2,0.3,0.3,0.6,0.3,1c0,0.4-0.1,0.7-0.2,1c-0.2,0.3-0.4,0.5-0.7,0.6s-0.7,0.2-1.2,0.2v0c0.4,0,0.7,0,0.9,0.1c0.2,0.1,0.4,0.2,0.6,0.4c0.2,0.2,0.3,0.5,0.4,0.8l0.4,1.4h-1.4l-0.3-1.3c-0.1-0.3-0.1-0.5-0.3-0.6c-0.1-0.1-0.2-0.2-0.4-0.3c-0.2-0.1-0.3-0.1-0.6-0.1h-2.4v2.3h-1.4V60.5z M175.6,63.3c0.2-0.2,0.3-0.5,0.3-0.9c0-0.2-0.1-0.4-0.2-0.6s-0.3-0.2-0.4-0.3c-0.2,0-0.4-0.1-0.7-0.1h-2.5v2h2.4C175,63.6,175.4,63.5,175.6,63.3z"/>
              <path fill="#888888" d="M182.7,60.5h1.8l3,6.4H186l-2.4-5.4h-0.1l-2.4,5.4h-1.5L182.7,60.5z M181.8,64.3h3.6l0.2,1h-4L181.8,64.3z"/>
              <path fill="#888888" d="M189.8,60.5h4.1c0.8,0,1.5,0.2,1.9,0.5c0.5,0.3,0.7,0.9,0.7,1.6c0,0.5-0.1,0.9-0.3,1.2c-0.2,0.3-0.4,0.6-0.8,0.7c-0.4,0.2-0.9,0.3-1.5,0.3h-2.8v-0.9h2.7c0.3,0,0.6,0,0.8-0.1c0.2-0.1,0.3-0.2,0.4-0.4s0.1-0.4,0.1-0.7c0-0.4-0.1-0.7-0.3-0.9s-0.5-0.3-1-0.3h-2.6v5.4h-1.4V60.5z"/>
              <path fill="#888888" d="M199.1,60.5h5.9v1.1h-4.5v1.5h4.3v1h-4.3v1.7h4.5v1.1h-5.9V60.5z"/>
              <path fill="#888888" d="M209.1,66.7c-0.5-0.2-0.9-0.4-1.2-0.8c-0.3-0.4-0.4-0.8-0.4-1.4v-4h1.4v4c0,0.5,0.2,0.9,0.5,1.2c0.4,0.2,0.9,0.4,1.7,0.4c0.8,0,1.3-0.1,1.7-0.4c0.4-0.2,0.5-0.6,0.5-1.2v-4h1.4v4c0,0.6-0.2,1.1-0.5,1.4c-0.3,0.4-0.7,0.6-1.2,0.8s-1.2,0.2-1.9,0.2C210.3,66.9,209.6,66.9,209.1,66.7z"/>
              <path fill="#888888" d="M219.6,61.5H217v-1h6.7v1H221v5.4h-1.4V61.5z"/>
              <path fill="#888888" d="M226.1,60.5h1.4v6.4h-1.4V60.5z"/>
              <path fill="#888888" d="M231.9,66.6c-0.6-0.2-1.1-0.5-1.4-1s-0.5-1.1-0.5-1.9c0-0.8,0.1-1.4,0.4-1.9s0.7-0.9,1.3-1.1c0.6-0.2,1.3-0.3,2.2-0.3c0.9,0,1.6,0.1,2.2,0.3s1,0.5,1.3,0.8s0.4,0.8,0.5,1.4h-1.4c0-0.5-0.3-0.9-0.7-1.1s-1-0.4-1.8-0.4c-0.6,0-1.1,0.1-1.5,0.2c-0.4,0.1-0.7,0.4-0.9,0.7c-0.2,0.3-0.3,0.8-0.3,1.4c0,0.6,0.1,1,0.3,1.4c0.2,0.3,0.5,0.6,0.9,0.7c0.4,0.1,0.9,0.2,1.5,0.2c0.6,0,1,0,1.4-0.1c0.4-0.1,0.6-0.3,0.8-0.5c0.2-0.2,0.3-0.5,0.3-0.9h1.4c-0.1,0.6-0.3,1.1-0.6,1.5c-0.3,0.4-0.7,0.6-1.2,0.8s-1.2,0.2-2.1,0.2C233.3,66.9,232.5,66.8,231.9,66.6z"/>
              <path fill="#888888" d="M242.2,66.7c-0.5-0.1-0.9-0.4-1.2-0.7c-0.3-0.3-0.5-0.8-0.6-1.4h1.4c0,0.3,0.2,0.6,0.4,0.8c0.2,0.2,0.4,0.3,0.7,0.4c0.3,0.1,0.7,0.1,1.2,0.1c0.6,0,1.1-0.1,1.5-0.2s0.5-0.4,0.5-0.7c0-0.2-0.1-0.4-0.3-0.5c-0.2-0.1-0.4-0.2-0.7-0.3s-0.7-0.1-1.2-0.2c-0.7-0.1-1.3-0.2-1.7-0.3c-0.4-0.1-0.8-0.3-1.1-0.6c-0.3-0.3-0.5-0.6-0.5-1.1c0-0.4,0.1-0.7,0.3-1c0.2-0.3,0.6-0.5,1-0.6c0.5-0.2,1.1-0.2,2-0.2c0.8,0,1.4,0.1,1.9,0.2s0.9,0.4,1.1,0.7c0.3,0.3,0.4,0.8,0.5,1.3H246c-0.1-0.3-0.2-0.6-0.3-0.8c-0.1-0.2-0.3-0.3-0.6-0.4c-0.3-0.1-0.7-0.1-1.2-0.1c-0.5,0-0.8,0-1.1,0.1c-0.3,0.1-0.5,0.2-0.6,0.3c-0.1,0.1-0.2,0.3-0.2,0.4c0,0.2,0.1,0.4,0.3,0.5s0.4,0.2,0.7,0.3c0.3,0.1,0.7,0.1,1.2,0.2c0.7,0.1,1.3,0.2,1.7,0.3s0.8,0.3,1.2,0.6s0.5,0.7,0.5,1.2c0,0.4-0.1,0.7-0.3,1c-0.2,0.3-0.6,0.5-1.1,0.7s-1.2,0.2-2.1,0.2C243.3,66.9,242.7,66.9,242.2,66.7z"/>
            </g>
          </svg>

          {animationPhase >= 2 && animationPhase < 3 && (
            <div style={{
              position: 'absolute',
              bottom: '-35px',
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: '11px',
              color: '#444',
              letterSpacing: '3px',
              textTransform: 'uppercase',
            }}>
              synchronizing...
            </div>
          )}
        </div>

        {/* Tags */}
        <div style={{
          display: 'flex',
          gap: '12px',
          marginBottom: '30px',
          opacity: animationPhase >= 5 ? 1 : 0,
          transform: animationPhase >= 5 ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.8s ease-out',
        }}>
          <span className="tag tag-green">A2A Antagonist</span>
          <span className="tag tag-lime">A2B Antagonist</span>
        </div>

        {/* Hero Text */}
        <h1 style={{
          fontSize: '56px',
          fontWeight: '700',
          textAlign: 'center',
          lineHeight: '1.15',
          marginBottom: '24px',
          letterSpacing: '-1.5px',
          maxWidth: '850px',
          opacity: animationPhase >= 5 ? 1 : 0,
          transform: animationPhase >= 5 ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 1s ease-out 0.1s',
        }}>
          <span className="gradient-text">Synchronized</span> Precision<br />
          Against Rare Cancers
        </h1>

        <p style={{
          fontSize: '19px',
          color: '#888',
          textAlign: 'center',
          maxWidth: '620px',
          lineHeight: '1.6',
          marginBottom: '48px',
          opacity: animationPhase >= 5 ? 1 : 0,
          transform: animationPhase >= 5 ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 1s ease-out 0.2s',
        }}>
          Pioneering dual adenosine receptor antagonist therapy, with target 
          synchronization to unlock the immune system&apos;s power against rare 
          and difficult-to-treat cancers.
        </p>

        <div style={{ 
          display: 'flex', 
          gap: '16px',
          opacity: animationPhase >= 5 ? 1 : 0,
          transform: animationPhase >= 5 ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 1s ease-out 0.3s',
        }}>
          <a className="btn btn-primary" href="#science">Explore Our Science</a>
          <a className="btn btn-secondary" href="#pipeline">View Pipeline</a>
        </div>
      </section>

      {/* Science Section */}
      <section id="science" style={{ padding: '120px 40px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '44px', fontWeight: '700', marginBottom: '20px', letterSpacing: '-1px' }}>
          The Power of <span className="gradient-text">Synchronization</span>
        </h2>
        <p style={{ fontSize: '18px', color: '#888', maxWidth: '700px', lineHeight: '1.7', marginBottom: '60px' }}>
          Tumors exploit the adenosine pathway to suppress immune responses. 
          Our dual-antagonist approach simultaneously blocks both A2A and A2B receptors, 
          delivering a synchronized attack that releases the brakes on your immune system.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          <div className="card">
            <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#159F6A' }}>TT-4</h3>
            <p style={{ color: '#888', fontSize: '15px', lineHeight: '1.6' }}>
              A2BR antagonist — our lead program targeting mesothelioma, sickle cell disease, and asthma.
            </p>
          </div>
          <div className="card">
            <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#A2CE22' }}>TT-10</h3>
            <p style={{ color: '#888', fontSize: '15px', lineHeight: '1.6' }}>
              A2AR antagonist — targeting solid tumors and Parkinson&apos;s disease with Phase I/II and Phase II ready programs.
            </p>
          </div>
          <div className="card">
            <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px' }}>
              <span className="gradient-text">TT-4 + TT-10</span>
            </h3>
            <p style={{ color: '#888', fontSize: '15px', lineHeight: '1.6' }}>
              Dual A2BR + A2AR blockade — synchronized combination therapy for prostate cancer and RCC.
            </p>
          </div>
        </div>
      </section>

      {/* Pipeline Section */}
      <section id="pipeline" style={{ 
        padding: '120px 40px', 
        background: 'linear-gradient(180deg, #080808 0%, #050505 100%)',
        borderTop: '1px solid #151515',
        borderBottom: '1px solid #151515',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '44px', fontWeight: '700', marginBottom: '12px', letterSpacing: '-1px' }}>
            Pipeline: <span className="gradient-text">Adenosine Axis</span>
          </h2>
          <p style={{ fontSize: '20px', color: '#666', marginBottom: '60px' }}>
            One Pathway, Multiple Diseases
          </p>

          {/* Pipeline Table */}
          <div style={{ overflowX: 'auto' }}>
            {/* Header */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '140px 1fr 100px 120px 1fr 140px',
              gap: '1px',
              marginBottom: '2px',
              padding: '16px 20px',
              background: '#0a0a0a',
              borderRadius: '12px 12px 0 0',
              fontSize: '12px',
              fontWeight: '600',
              color: '#159F6A',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}>
              <div>Therapeutic Area</div>
              <div>Indication</div>
              <div>Asset</div>
              <div>Target</div>
              <div>Stage</div>
              <div>Funding</div>
            </div>

            {/* Oncology Section */}
            <PipelineCategory 
              category="ONCOLOGY" 
              color="#159F6A"
              items={[
                { indication: 'Mesothelioma', asset: 'TT-4', target: 'A2BR', stage: 'Phase I/II Active', stageType: 'lead', funding: 'Direct Investment & ISTs/Grants' },
                { indication: 'Solid Tumors', asset: 'TT-10', target: 'A2AR', stage: 'Phase I/II Active', stageType: 'active', funding: 'ISTs/Grants' },
                { indication: 'Prostate/RCC', asset: 'TT-4 + TT-10', target: 'A2BR + A2AR', stage: 'Phase I/II Active', stageType: 'active', funding: 'ISTs/Grants/Direct' },
                { indication: 'Solid Tumors', asset: 'TT-53', target: 'A2AR/A2BR', stage: 'Preclinical', stageType: 'preclinical', funding: 'Grants/Partner' },
                { indication: 'Gut Cancers', asset: 'TT-3', target: 'A2BR', stage: 'Preclinical/IND Ready', stageType: 'ind', funding: 'Grants' },
              ]}
            />

            {/* Neurology Section */}
            <PipelineCategory 
              category="NEUROLOGY" 
              color="#A2CE22"
              items={[
                { indication: "Parkinson's Disease", asset: 'TT-10', target: 'A2AR', stage: 'Phase II Ready', stageType: 'phase2', funding: 'Grants/Partner' },
              ]}
            />

            {/* Hematologic Section */}
            <PipelineCategory 
              category="HEMATOLOGIC" 
              color="#e74c3c"
              items={[
                { indication: 'Sickle Cell Disease', asset: 'TT-4', target: 'A2BR', stage: 'Preclinical/IND Ready', stageType: 'ind', funding: 'Grants/Partner' },
              ]}
            />

            {/* Pulmonary Section */}
            <PipelineCategory 
              category="PULMONARY" 
              color="#3498db"
              items={[
                { indication: 'Asthma', asset: 'TT-4', target: 'A2BR', stage: 'Preclinical/IND Ready', stageType: 'ind', funding: 'Grants/Partner' },
              ]}
            />
          </div>

          <p style={{ fontSize: '12px', color: '#555', marginTop: '20px' }}>
            *IST = Investigator Sponsored Trials
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '80px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px', textAlign: 'center' }}>
          {[
            { value: '70+', label: 'Patents Filed' },
            { value: '5', label: 'Clinical Assets' },
            { value: '4', label: 'Therapeutic Areas' },
            { value: '2026', label: 'US Trial Target' },
          ].map((stat, i) => (
            <div key={i}>
              <div style={{ fontSize: '52px', fontWeight: '700', marginBottom: '8px' }} className="gradient-text">
                {stat.value}
              </div>
              <div style={{ color: '#666', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '40px', borderTop: '1px solid #151515', textAlign: 'center' }}>
        <p style={{ color: '#444', fontSize: '13px' }}>© 2026 Cyncado Therapeutics. All rights reserved.</p>
      </footer>
    </main>
  )
}

function PipelineCategory({ category, color, items }) {
  return (
    <div style={{ marginBottom: '2px', borderLeft: `4px solid ${color}` }}>
      {items.map((item, index) => (
        <div 
          key={index}
          style={{
            display: 'grid',
            gridTemplateColumns: '140px 1fr 100px 120px 1fr 140px',
            gap: '1px',
            padding: '16px 20px',
            background: '#0a0a0a',
            alignItems: 'center',
            fontSize: '14px',
          }}
        >
          <div style={{ 
            color: color, 
            fontWeight: '700',
            fontSize: '12px',
            visibility: index === 0 ? 'visible' : 'hidden',
          }}>
            {category}
          </div>
          <div style={{ color: '#ccc' }}>{item.indication}</div>
          <div style={{ color: '#fff', fontWeight: '500' }}>{item.asset}</div>
          <div style={{ color: '#888' }}>{item.target}</div>
          <div>
            <StageIndicator stage={item.stage} type={item.stageType} />
          </div>
          <div style={{ color: '#666', fontSize: '12px' }}>{item.funding}</div>
        </div>
      ))}
    </div>
  )
}

function StageIndicator({ stage, type }) {
  const getStyle = () => {
    switch(type) {
      case 'lead':
        return { background: '#159F6A', color: '#fff', border: 'none' }
      case 'active':
        return { background: 'rgba(21, 159, 106, 0.2)', color: '#159F6A', border: '1px solid #159F6A' }
      case 'phase2':
        return { background: 'transparent', color: '#A2CE22', border: '1px solid #A2CE22' }
      case 'preclinical':
        return { background: 'transparent', color: '#888', border: '1px solid #444' }
      case 'ind':
        return { background: 'transparent', color: '#888', border: '1px solid #666' }
      default:
        return { background: 'transparent', color: '#888', border: '1px solid #444' }
    }
  }

  const style = getStyle()

  return (
    <span style={{
      display: 'inline-block',
      padding: '6px 12px',
      borderRadius: '20px',
      fontSize: '11px',
      fontWeight: '500',
      ...style,
    }}>
      {stage}
    </span>
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
