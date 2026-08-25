import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Mail, 
  Share2, 
  MessageSquare, 
  Search, 
  ShieldCheck,
  TrendingUp,
  Cpu,
  Zap,
  Bot,
  Award,
  Star
} from 'lucide-react';

export default function Hero({ openBookingModal }) {
  return (
    <section style={{
      position: 'relative',
      paddingTop: '10rem',
      paddingBottom: '6rem',
      overflow: 'hidden'
    }}>
      {/* Background Glow Orbs */}
      <div className="ambient-glow-1" />
      <div className="ambient-glow-2" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          maxWidth: '920px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          {/* Release Version & Award Banner */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '0.4rem 1.25rem',
            borderRadius: 'var(--radius-full)',
            background: 'rgba(16, 185, 129, 0.1)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            marginBottom: '2rem'
          }}>
            <span className="pulse-dot" />
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#34D399' }}>
              Rated #1 Marketing & B2B Prospecting Suite (G2 Leader 2026 & Capterra)
            </span>
          </div>

          {/* Main Brevo/GrowthToolkit Style Headline */}
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5.5vw, 4.25rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: '1.5rem',
            letterSpacing: '-0.03em'
          }}>
            Build Stronger Customer Relationships & <span className="gradient-text">Scale Revenue 4x Faster</span>
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
            color: 'var(--text-secondary)',
            marginBottom: '2.5rem',
            fontWeight: 400,
            lineHeight: 1.6
          }}>
            The all-in-one platform combining **Brevo-style multi-channel marketing** (Email, SMS, WhatsApp, Web Push) with **GrowthToolkit-style B2B executive lead prospecting** and autonomous AI agents.
          </p>

          {/* CTA Buttons */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
            marginBottom: '3.5rem'
          }}>
            <button 
              onClick={openBookingModal}
              className="btn-primary"
              style={{ padding: '0.9rem 2.25rem', fontSize: '1.05rem' }}
            >
              <span>Get Started Free (500 Credits)</span>
              <ArrowRight size={18} />
            </button>

            <a 
              href="#prospecting" 
              className="btn-secondary"
              style={{ padding: '0.9rem 2rem', fontSize: '1.05rem' }}
            >
              <Search size={18} />
              <span>Test B2B Lead Finder</span>
            </a>
          </div>

          {/* Award Badges Grid (Brevo & Capterra style) */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
            paddingTop: '1.5rem',
            borderTop: '1px solid var(--border-color)',
            fontSize: '0.85rem',
            color: 'var(--text-secondary)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Award size={18} color="var(--accent-amber)" />
              <span><strong>G2 Leader</strong> 2026 Spring</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Star size={18} color="var(--accent-emerald)" fill="var(--accent-emerald)" />
              <span><strong>4.9 / 5.0</strong> Capterra Usability</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <ShieldCheck size={18} color="var(--accent-indigo)" />
              <span><strong>ISO 27001</strong> & GDPR Certified</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Zap size={18} color="var(--accent-cyan)" />
              <span><strong>99.82%</strong> Inbox Deliverability</span>
            </div>
          </div>
        </div>

        {/* Live Interactive Brevo-Style Dashboard Preview Card */}
        <div style={{
          marginTop: '4rem',
          position: 'relative'
        }}>
          <div className="glass-card" style={{
            padding: '1.5rem',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)'
          }}>
            {/* Dashboard Header Bar */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: '1rem',
              marginBottom: '1.5rem',
              borderBottom: '1px solid var(--border-color)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#EF4444' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#F59E0B' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10B981' }} />
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginLeft: '0.5rem' }}>
                  growixa.ai/dashboard/marketing-crm (Brevo & GrowthToolkit Unified Hub)
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span className="status-pill status-pill-done" style={{ fontSize: '0.75rem' }}>
                  System Active
                </span>
              </div>
            </div>

            {/* Metrics Counter Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.25rem'
            }}>
              {/* Metric 1 */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                padding: '1.25rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-color)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Transactional & Email Volume</span>
                  <Mail size={18} color="var(--accent-emerald)" />
                </div>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  4.2M / mo
                </div>
                <span style={{ fontSize: '0.75rem', color: '#34D399', display: 'flex', alignItems: 'center', gap: '0.2rem', marginTop: '0.25rem' }}>
                  <TrendingUp size={12} /> 99.82% Postmark SMTP Delivery
                </span>
              </div>

              {/* Metric 2 */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                padding: '1.25rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-color)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Verified B2B Prospect Leads</span>
                  <Search size={18} color="var(--accent-indigo)" />
                </div>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  250,000+
                </div>
                <span style={{ fontSize: '0.75rem', color: '#818CF8', display: 'flex', alignItems: 'center', gap: '0.2rem', marginTop: '0.25rem' }}>
                  <TrendingUp size={12} /> Real-Time SMTP Verification Passed
                </span>
              </div>

              {/* Metric 3 */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                padding: '1.25rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-color)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>AI Brand Safety Score</span>
                  <Bot size={18} color="var(--accent-violet)" />
                </div>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  100% Passed
                </div>
                <span style={{ fontSize: '0.75rem', color: '#A78BFA', display: 'flex', alignItems: 'center', gap: '0.2rem', marginTop: '0.25rem' }}>
                  <ShieldCheck size={12} /> Mandatory Brand Voice Safety Gate
                </span>
              </div>

              {/* Metric 4 */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                padding: '1.25rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-color)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>GEO & AEO Search Index</span>
                  <Search size={18} color="var(--accent-cyan)" />
                </div>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  Top #1 Position
                </div>
                <span style={{ fontSize: '0.75rem', color: '#22D3EE', display: 'flex', alignItems: 'center', gap: '0.2rem', marginTop: '0.25rem' }}>
                  <TrendingUp size={12} /> Answer Engine Optimization
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
