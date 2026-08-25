import React from 'react';
import { 
  Mail, 
  Share2, 
  MessageSquare, 
  Send, 
  Globe, 
  Database, 
  Zap, 
  Search,
  Bot
} from 'lucide-react';

export default function NeuronIntegrationMatrix() {
  const tools = [
    { name: 'Gmail / SMTP', icon: Mail, color: '#EA4335' },
    { name: 'LinkedIn', icon: Share2, color: '#0A66C2' },
    { name: 'WhatsApp API', icon: MessageSquare, color: '#25D366' },
    { name: 'Postmark API', icon: Zap, color: '#F59E0B' },
    { name: 'Twilio SMS', icon: Send, color: '#F22F46' },
    { name: 'Google Search', icon: Search, color: '#4285F4' },
    { name: 'Meta Ads', icon: Globe, color: '#0666E5' },
    { name: 'Slack Workflows', icon: Database, color: '#E01E5A' }
  ];

  return (
    <section style={{ padding: '6rem 0', background: 'rgba(3, 7, 18, 0.95)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-cyan)' }}>
            Neuron Ecosystem Matrix
          </span>
          <h2 style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', marginTop: '0.5rem', marginBottom: '1rem' }}>
            Connect Your <span className="gradient-text">Growth Tools</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem' }}>
            Postmark. LinkedIn. WhatsApp. Twilio. Whatever tools you use — Growixa connects directly to them.
          </p>
        </div>

        {/* Circular Matrix Graphic (Neuron Screenshot 2 Exact Match) */}
        <div style={{
          position: 'relative',
          maxWidth: '700px',
          height: '520px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {/* SVG Orbit Lines */}
          <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }} viewBox="0 0 700 520">
            <circle cx="350" cy="260" r="220" fill="none" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1.5" strokeDasharray="6 6" />
            <circle cx="350" cy="260" r="140" fill="none" stroke="rgba(0, 240, 255, 0.3)" strokeWidth="1.5" />
            
            {/* Connecting Radial Rays */}
            {tools.map((_, i) => {
              const angle = (i * 360) / tools.length;
              const rad = (angle * Math.PI) / 180;
              const x2 = 350 + 220 * Math.cos(rad);
              const y2 = 260 + 220 * Math.sin(rad);
              return (
                <line
                  key={i}
                  x1="350"
                  y1="260"
                  x2={x2}
                  y2={y2}
                  stroke="#00F0FF"
                  strokeWidth="2"
                  opacity="0.6"
                  filter="drop-shadow(0 0 6px #00F0FF)"
                />
              );
            })}
          </svg>

          {/* Central Glowing Orb */}
          <div style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, #00F0FF 0%, #3B82F6 60%, #030712 100%)',
            boxShadow: '0 0 60px #00F0FF, 0 0 90px rgba(59, 130, 246, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 2
          }}>
            <Bot size={40} color="#FFFFFF" style={{ filter: 'drop-shadow(0 0 10px #00F0FF)' }} />
          </div>

          {/* Orbiting Tool Nodes */}
          {tools.map((t, idx) => {
            const angle = (idx * 360) / tools.length;
            const rad = (angle * Math.PI) / 180;
            const x = 350 + 220 * Math.cos(rad) - 32;
            const y = 260 + 220 * Math.sin(rad) - 32;
            const Icon = t.icon;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  position: 'absolute',
                  left: `${x}px`,
                  top: `${y}px`,
                  width: '64px',
                  height: '64px',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 3,
                  border: '1px solid rgba(0, 240, 255, 0.4)',
                  boxShadow: '0 0 20px rgba(0, 240, 255, 0.25)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                title={t.name}
              >
                <Icon size={26} color={t.color} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
