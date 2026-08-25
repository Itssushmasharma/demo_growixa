import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Play, 
  CheckCircle2, 
  BarChart3, 
  Zap, 
  Bot, 
  ShieldCheck, 
  Layers,
  Search,
  TrendingUp,
  Mail,
  Users
} from 'lucide-react';

export default function GlowingHeroOrb({ openBookingModal }) {
  return (
    <section style={{
      position: 'relative',
      paddingTop: '10rem',
      paddingBottom: '7rem',
      overflow: 'hidden',
      background: 'radial-gradient(ellipse at top, #0B1739 0%, #030712 70%)'
    }}>
      {/* Background Radial Glow */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '700px',
        height: '700px',
        background: 'radial-gradient(circle, rgba(0, 240, 255, 0.15) 0%, rgba(59, 130, 246, 0.08) 50%, transparent 70%)',
        filter: 'blur(90px)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Main Title & Subtitle */}
        <div style={{ maxWidth: '880px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '0.4rem 1.25rem',
            borderRadius: 'var(--radius-full)',
            background: 'rgba(0, 240, 255, 0.1)',
            border: '1px solid rgba(0, 240, 255, 0.3)',
            marginBottom: '2rem'
          }}>
            <span className="pulse-dot" />
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#00F0FF' }}>
              Boltshift AI Assistant & Business System Core
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2.75rem, 5.5vw, 4.5rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: '1.5rem',
            letterSpacing: '-0.03em'
          }}>
            Your AI Assistant for <span className="gradient-text">Smarter Growth.</span>
          </h1>

          <p style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
            color: 'var(--text-secondary)',
            marginBottom: '2.5rem',
            fontWeight: 400,
            lineHeight: 1.6
          }}>
            Harness the power of AI to automate email campaigns, streamline SDR B2B lead prospecting, and boost your team's revenue efficiency — all in one simple platform.
          </p>

          {/* Glowing Action Buttons (Boltshift Style) */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.25rem',
            flexWrap: 'wrap',
            marginBottom: '5rem'
          }}>
            <button 
              onClick={openBookingModal}
              className="btn-primary"
              style={{ padding: '0.9rem 2.25rem', fontSize: '1.05rem' }}
            >
              <span>Get started</span>
              <ArrowRight size={18} />
            </button>

            <a 
              href="#ai-composer" 
              className="btn-secondary"
              style={{ padding: '0.9rem 2rem', fontSize: '1.05rem' }}
            >
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#00F0FF', boxShadow: '0 0 10px #00F0FF' }} />
              <span>See It in Action</span>
            </a>
          </div>
        </div>

        {/* Central Glowing AI Orb Diagram (Boltshift Screenshot 1 Exact Match) */}
        <div style={{
          position: 'relative',
          maxWidth: '1050px',
          margin: '0 auto',
          minHeight: '480px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>

          {/* SVG Glowing Conduits Connecting Orb to 4 Cards */}
          <svg 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
              zIndex: 1
            }}
            viewBox="0 0 1000 480"
          >
            {/* Top Left Line */}
            <path d="M 280 120 Q 400 120 500 240" fill="none" stroke="#00F0FF" strokeWidth="2.5" opacity="0.85" filter="drop-shadow(0 0 8px #00F0FF)" />
            {/* Bottom Left Line */}
            <path d="M 280 360 Q 400 360 500 240" fill="none" stroke="#00F0FF" strokeWidth="2.5" opacity="0.85" filter="drop-shadow(0 0 8px #00F0FF)" />
            {/* Top Right Line */}
            <path d="M 720 120 Q 600 120 500 240" fill="none" stroke="#00F0FF" strokeWidth="2.5" opacity="0.85" filter="drop-shadow(0 0 8px #00F0FF)" />
            {/* Bottom Right Line */}
            <path d="M 720 360 Q 600 360 500 240" fill="none" stroke="#00F0FF" strokeWidth="2.5" opacity="0.85" filter="drop-shadow(0 0 8px #00F0FF)" />
          </svg>

          {/* Central 3D Pulsing Glowing AI Core Orb */}
          <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="ai-core-orb">
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: '#FFFFFF',
                fontWeight: 800,
                fontSize: '1rem',
                letterSpacing: '0.05em',
                textShadow: '0 0 10px #00F0FF',
                textAlign: 'center'
              }}>
                <Zap size={32} color="#FFFFFF" style={{ filter: 'drop-shadow(0 0 10px #00F0FF)' }} />
                <div>GROWIXA AI</div>
              </div>
            </div>
          </div>

          {/* Card 1: Top Left - Task Lists */}
          <div className="glass-card" style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            width: '260px',
            padding: '1.25rem',
            borderRadius: 'var(--radius-md)',
            zIndex: 3,
            border: '1px solid rgba(0, 240, 255, 0.4)',
            boxShadow: '0 0 25px rgba(0, 240, 255, 0.2)'
          }}>
            <div style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
              Task Lists & Campaigns
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.8rem' }}>
              <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '0.4rem 0.6rem', borderRadius: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Draft Postmark Campaign</span>
                <span className="status-pill status-pill-done" style={{ fontSize: '0.65rem', padding: '0.1rem 0.4rem' }}>Updated</span>
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '0.4rem 0.6rem', borderRadius: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Real-Time SMTP Check</span>
                <span className="status-pill status-pill-done" style={{ fontSize: '0.65rem', padding: '0.1rem 0.4rem' }}>Verified</span>
              </div>
            </div>
          </div>

          {/* Card 2: Bottom Left - Workflows */}
          <div className="glass-card" style={{
            position: 'absolute',
            bottom: '20px',
            left: '20px',
            width: '260px',
            padding: '1.25rem',
            borderRadius: 'var(--radius-md)',
            zIndex: 3,
            border: '1px solid rgba(0, 240, 255, 0.4)',
            boxShadow: '0 0 25px rgba(0, 240, 255, 0.2)'
          }}>
            <div style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
              Automated Workflows
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              <div style={{ padding: '0.4rem', background: 'rgba(0, 240, 255, 0.1)', borderRadius: '6px', color: '#00F0FF', marginBottom: '0.4rem', fontWeight: 600 }}>
                ⚡ Executive Lead Scraped
              </div>
              <div style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.7rem' }}>↓ Manager Review & Approval</div>
              <div style={{ padding: '0.4rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '6px', color: '#60A5FA', marginTop: '0.4rem' }}>
                ✉️ Trigger Postmark Dispatch
              </div>
            </div>
          </div>

          {/* Card 3: Top Right - Analytics */}
          <div className="glass-card" style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '260px',
            padding: '1.25rem',
            borderRadius: 'var(--radius-md)',
            zIndex: 3,
            border: '1px solid rgba(0, 240, 255, 0.4)',
            boxShadow: '0 0 25px rgba(0, 240, 255, 0.2)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>Analytics</span>
              <span style={{ fontSize: '0.75rem', color: '#34D399', fontWeight: 700 }}>↑ 60% from last mth</span>
            </div>
            {/* Simulated Bar Chart */}
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '0.4rem', height: '60px', paddingT: '0.5rem' }}>
              <div style={{ flex: 1, background: '#3B82F6', height: '40%', borderRadius: '3px' }} />
              <div style={{ flex: 1, background: '#3B82F6', height: '60%', borderRadius: '3px' }} />
              <div style={{ flex: 1, background: '#3B82F6', height: '50%', borderRadius: '3px' }} />
              <div style={{ flex: 1, background: '#00F0FF', height: '85%', borderRadius: '3px' }} />
              <div style={{ flex: 1, background: '#00F0FF', height: '100%', borderRadius: '3px' }} />
            </div>
          </div>

          {/* Card 4: Bottom Right - Insights */}
          <div className="glass-card" style={{
            position: 'absolute',
            bottom: '20px',
            right: '20px',
            width: '260px',
            padding: '1.25rem',
            borderRadius: 'var(--radius-md)',
            zIndex: 3,
            border: '1px solid rgba(0, 240, 255, 0.4)',
            boxShadow: '0 0 25px rgba(0, 240, 255, 0.2)'
          }}>
            <div style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
              AI Insights & GEO
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.8rem' }}>
              <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '0.4rem 0.6rem', borderRadius: '6px', color: 'var(--text-secondary)' }}>
                🤖 Automate weekly reports
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '0.4rem 0.6rem', borderRadius: '6px', color: '#00F0FF', fontWeight: 600 }}>
                ⚡ Focus on top B2B channels
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
