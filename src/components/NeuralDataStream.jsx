import React from 'react';
import { 
  ShoppingCart, 
  MousePointer, 
  ThumbsUp, 
  Mail, 
  Star, 
  Users, 
  MapPin, 
  Monitor, 
  Bot, 
  UserCheck, 
  Zap,
  ShieldCheck
} from 'lucide-react';

export default function NeuralDataStream() {
  const signals = [
    { label: 'PURCHASE HISTORY', icon: ShoppingCart },
    { label: 'WEBSITE INTERACTIONS', icon: MousePointer },
    { label: 'SOCIAL ENGAGEMENT', icon: ThumbsUp },
    { label: 'EMAIL ACTIVITY', icon: Mail },
    { label: 'CUSTOMER REVIEWS', icon: Star },
    { label: 'DEMOGRAPHICS', icon: Users },
    { label: 'LOCATION DATA', icon: MapPin },
    { label: 'TECH STACK INFO', icon: Monitor }
  ];

  return (
    <section style={{ padding: '6rem 0', background: 'rgba(3, 7, 18, 0.98)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3.5rem auto' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-cyan)' }}>
            Neural Network AI Architecture
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginTop: '0.5rem', marginBottom: '1rem' }}>
            Brand Signals to <span className="gradient-text">Predictive User Insights</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            Growixa's neural network processes multi-channel brand signals in real time to generate verified executive lead profiles.
          </p>
        </div>

        {/* Neural Network Diagram Box (Screenshot 4 Exact Match) */}
        <div className="glass-card" style={{ padding: '2.5rem', borderRadius: 'var(--radius-lg)', maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center' }}>
            
            {/* Left Column: Brand Signals List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-cyan)', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
                BRAND SIGNALS INPUT
              </div>
              {signals.map((sig, idx) => {
                const Icon = sig.icon;
                return (
                  <div
                    key={idx}
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border-color)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '0.55rem 0.85rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      fontSize: '0.8rem',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-mono)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(0, 240, 255, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00F0FF' }}>
                      <Icon size={14} />
                    </div>
                    <span>{sig.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Center Column: AI Neural Engine Network Core */}
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-indigo)', letterSpacing: '0.08em', marginBottom: '1rem' }}>
                GROWIXA AI NEURAL ENGINE
              </div>

              {/* Central Glowing Orb Core */}
              <div style={{
                width: '160px',
                height: '160px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, #00F0FF 0%, #3B82F6 50%, #030712 100%)',
                boxShadow: '0 0 70px #00F0FF, 0 0 100px rgba(59, 130, 246, 0.8)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                position: 'relative'
              }}>
                <Bot size={54} color="#FFFFFF" style={{ filter: 'drop-shadow(0 0 15px #00F0FF)' }} />
              </div>

              <div style={{ background: 'rgba(0, 0, 0, 0.5)', padding: '0.75rem 1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>
                <div style={{ color: 'var(--accent-emerald)', fontWeight: 600, marginBottom: '0.2rem' }}>⚡ Real-Time Processing: 87%</div>
                <div style={{ color: 'var(--text-muted)' }}>Learning & Optimizing...</div>
              </div>
            </div>

            {/* Right Column: Predictive User Profile */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
              border: '1px solid rgba(0, 240, 255, 0.4)',
              borderRadius: 'var(--radius-md)',
              padding: '1.75rem',
              textAlign: 'center',
              boxShadow: '0 10px 30px rgba(0, 240, 255, 0.15)'
            }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#00F0FF', letterSpacing: '0.08em', marginBottom: '1rem' }}>
                USER PROFILE & PREDICTIVE INSIGHTS
              </div>

              <div style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #00F0FF, #3B82F6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem auto',
                color: '#FFFFFF',
                boxShadow: '0 0 20px #00F0FF'
              }}>
                <UserCheck size={36} />
              </div>

              <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                Verified Executive Lead
              </h4>
              <span style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                Deliverability: 99.82% Verified
              </span>

              <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)', fontSize: '0.8rem', color: 'var(--text-secondary)', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <div>✔ High Buying Intent Score: <strong>94/100</strong></div>
                <div>✔ Triple SMTP Check: <strong>PASSED</strong></div>
                <div>✔ Recommended Channel: <strong>Postmark Email + SMS</strong></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
