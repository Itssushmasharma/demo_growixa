import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Mail, 
  Search, 
  ShieldCheck,
  TrendingUp,
  Award,
  Star,
  Users,
  Database
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
          {/* GrowthToolkit.io Top Chip Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '0.4rem 1.25rem',
            borderRadius: 'var(--radius-full)',
            background: 'rgba(59, 130, 246, 0.12)',
            border: '1px solid rgba(59, 130, 246, 0.3)',
            marginBottom: '2rem'
          }}>
            <span className="pulse-dot" style={{ backgroundColor: '#3B82F6' }} />
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#60A5FA' }}>
              Most Accurate B2B Email & Phone Number Database
            </span>
          </div>

          {/* GrowthToolkit.io Main Title */}
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5.5vw, 4.25rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: '1.5rem',
            letterSpacing: '-0.03em'
          }}>
            The Ultimate B2B Prospecting Tool – <span className="gradient-text">Find, Verify & Enrich Leads</span> in One Platform
          </h1>

          {/* GrowthToolkit.io Subtitle */}
          <p style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
            color: 'var(--text-secondary)',
            marginBottom: '2.5rem',
            fontWeight: 400,
            lineHeight: 1.6
          }}>
            We find emails and phone numbers others can't using deep search, catch-all verification, and unmatched data coverage. Pay only for triple verified emails and phone numbers with bounce rate under 2.5%.
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
              <span>Get 500 Free Credits</span>
              <ArrowRight size={18} />
            </button>

            <a 
              href="#prospecting" 
              className="btn-secondary"
              style={{ padding: '0.9rem 2rem', fontSize: '1.05rem' }}
            >
              <Search size={18} />
              <span>Test Live Prospecting Tool</span>
            </a>
          </div>

          {/* GrowthToolkit.io Key Metrics Proof Bar */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2.5rem',
            flexWrap: 'wrap',
            paddingTop: '1.75rem',
            borderTop: '1px solid var(--border-color)',
            fontSize: '0.875rem',
            color: 'var(--text-secondary)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <ShieldCheck size={18} color="var(--accent-emerald)" />
              <span><strong>Under 2.5%</strong> Bounce Guarantee</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Database size={18} color="var(--accent-indigo)" />
              <span><strong>250M+</strong> B2B Verified Profiles</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Users size={18} color="var(--accent-cyan)" />
              <span><strong>10,000+</strong> Sales Reps & Founders</span>
            </div>
          </div>
        </div>

        {/* GrowthToolkit.io Dashboard Prospecting Preview Card */}
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
            {/* Window Header */}
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
                  growthtoolkit.io/app/deep-search-prospector
                </span>
              </div>
              <span className="status-pill status-pill-done" style={{ fontSize: '0.75rem' }}>
                Triple Verified Engine
              </span>
            </div>

            {/* Quick Metrics Bar */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.25rem'
            }}>
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Verified B2B Leads</div>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', margin: '0.3rem 0' }}>250M+</div>
                <span style={{ fontSize: '0.75rem', color: '#34D399' }}>✔ Real-time SMTP Checked</span>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Bounce Rate</div>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', margin: '0.3rem 0' }}>&lt; 2.5%</div>
                <span style={{ fontSize: '0.75rem', color: '#60A5FA' }}>✔ Catch-all Validation</span>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Pay-As-You-Go Credits</div>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', margin: '0.3rem 0' }}>$0.03 / lead</div>
                <span style={{ fontSize: '0.75rem', color: '#A78BFA' }}>✔ Credits Never Expire</span>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Email Campaign Deliverability</div>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', margin: '0.3rem 0' }}>99.82%</div>
                <span style={{ fontSize: '0.75rem', color: '#22D3EE' }}>✔ Postmark SMTP Pipeline</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
