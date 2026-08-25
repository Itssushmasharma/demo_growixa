import React from 'react';
import { 
  Globe, 
  Search, 
  Bot, 
  Zap, 
  ShieldCheck, 
  CheckCircle2,
  Share2
} from 'lucide-react';

export default function CyberneticTreeAEO({ openBookingModal }) {
  const nodes = [
    { title: 'What is AI-Driven Growth?', status: 'Rank #1' },
    { title: 'Top B2B Prospecting Tools 2026', status: 'Indexed' },
    { title: 'Postmark SMTP Deliverability Benchmark', status: 'Verified' },
    { title: 'Answer Engine Optimization (AEO)', status: 'Active Node' },
    { title: 'Generative Engine Optimization (GEO)', status: 'Active Node' }
  ];

  return (
    <section style={{ padding: '6rem 0', background: 'radial-gradient(ellipse at bottom, #0B1739 0%, #030712 80%)', borderTop: '1px solid var(--border-color)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3.5rem auto' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-cyan)' }}>
            Release 2.4 Vision (Screenshot 5 Match)
          </span>
          <h2 style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', marginTop: '0.5rem', marginBottom: '1rem' }}>
            Generative Engine Optimization <span className="gradient-text">(GEO & AEO Tree)</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem' }}>
            Outrank legacy competitors on AI search engines (ChatGPT, Perplexity, Gemini) with autonomous Answer Engine Indexing.
          </p>
        </div>

        {/* Cybernetic Neural Tree Graphic Container (Screenshot 5 Exact Match) */}
        <div className="glass-card" style={{ padding: '2.5rem', borderRadius: 'var(--radius-lg)', maxWidth: '1050px', margin: '0 auto', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          
          {/* Background Ambient Glow */}
          <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: '500px', height: '350px', background: 'radial-gradient(circle, rgba(0, 240, 255, 0.2) 0%, transparent 70%)', filter: 'blur(70px)', pointerEvents: 'none' }} />

          {/* SVG Tree Network Visualization */}
          <div style={{ position: 'relative', minHeight: '360px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }} viewBox="0 0 1000 360">
              {/* Tree Trunk Base */}
              <line x1="500" y1="360" x2="500" y2="200" stroke="#00F0FF" strokeWidth="4" filter="drop-shadow(0 0 10px #00F0FF)" />
              
              {/* Branching Arms */}
              <path d="M 500 200 Q 300 140 180 80" fill="none" stroke="#00F0FF" strokeWidth="2.5" opacity="0.8" />
              <path d="M 500 200 Q 400 120 340 70" fill="none" stroke="#00F0FF" strokeWidth="2.5" opacity="0.8" />
              <path d="M 500 200 Q 500 100 500 60" fill="none" stroke="#00F0FF" strokeWidth="2.5" opacity="0.8" />
              <path d="M 500 200 Q 600 120 660 70" fill="none" stroke="#00F0FF" strokeWidth="2.5" opacity="0.8" />
              <path d="M 500 200 Q 700 140 820 80" fill="none" stroke="#00F0FF" strokeWidth="2.5" opacity="0.8" />
            </svg>

            {/* Glowing Tree Nodes */}
            <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%', position: 'relative', zIndex: 2, paddingTop: '20px' }}>
              {nodes.map((n, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'rgba(11, 17, 32, 0.9)',
                    border: '1px solid #00F0FF',
                    borderRadius: 'var(--radius-sm)',
                    padding: '0.6rem 0.85rem',
                    fontSize: '0.8rem',
                    boxShadow: '0 0 20px rgba(0, 240, 255, 0.3)',
                    maxWidth: '170px'
                  }}
                >
                  <div style={{ color: '#FFFFFF', fontWeight: 700, marginBottom: '0.2rem' }}>{n.title}</div>
                  <span className="status-pill status-pill-done" style={{ fontSize: '0.65rem', padding: '0.1rem 0.4rem' }}>
                    {n.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Callout */}
          <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <span style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
              Automate Answer Engine Optimization (AEO) PRs to WordPress & GitHub repositories.
            </span>
            <button onClick={openBookingModal} className="btn-primary" style={{ padding: '0.75rem 1.75rem' }}>
              <span>Deploy GEO Agents</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
