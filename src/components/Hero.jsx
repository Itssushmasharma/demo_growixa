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
  Bot
} from 'lucide-react';

export default function Hero({ openBookingModal }) {
  return (
    <section style={{
      position: 'relative',
      paddingTop: '9rem',
      paddingBottom: '6rem',
      overflow: 'hidden'
    }}>
      {/* Background Glow Orbs */}
      <div className="ambient-glow-1" />
      <div className="ambient-glow-2" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          {/* Release Version Banner Badge */}
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
              Official Catalog v2.4 Specification | Single-Tenant MVP → Multi-Tenant SaaS
            </span>
          </div>

          {/* Main Headline */}
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5.5vw, 4.25rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: '1.5rem',
            letterSpacing: '-0.03em'
          }}>
            The Autonomous <span className="gradient-text">AI Marketing Engine</span> for Modern SaaS & Brands
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
            color: 'var(--text-secondary)',
            marginBottom: '2.5rem',
            fontWeight: 400,
            lineHeight: 1.6
          }}>
            Scale high-deliverability email pipelines, dynamic audience segmentation, multi-channel social scheduling, and autonomous Answer Engine Optimization (AEO & GEO).
          </p>

          {/* CTA Buttons */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
            marginBottom: '4rem'
          }}>
            <button 
              onClick={openBookingModal}
              className="btn-primary"
              style={{ padding: '0.9rem 2.25rem', fontSize: '1.05rem' }}
            >
              <span>Get Started Free</span>
              <ArrowRight size={18} />
            </button>

            <a 
              href="#engines" 
              className="btn-secondary"
              style={{ padding: '0.9rem 2rem', fontSize: '1.05rem' }}
            >
              <Cpu size={18} />
              <span>Explore Engine Catalog</span>
            </a>
          </div>

          {/* Feature Badge Highlights */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap',
            fontSize: '0.875rem',
            color: 'var(--text-muted)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={16} color="var(--accent-emerald)" />
              <span>Argon2id & JWT Auth</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={16} color="var(--accent-emerald)" />
              <span>Postmark & Custom SMTP</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={16} color="var(--accent-emerald)" />
              <span>Twilio SMS & WhatsApp</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={16} color="var(--accent-emerald)" />
              <span>AI Brand Voice Safety</span>
            </div>
          </div>
        </div>

        {/* Live Interactive Dashboard Preview Card */}
        <div style={{
          marginTop: '4.5rem',
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
                  growixa://admin-health-panel (Postgres | Redis | RabbitMQ: HEALTHY)
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span className="status-pill status-pill-done" style={{ fontSize: '0.75rem' }}>
                  Live Telemetry
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
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Email Deliverability</span>
                  <Mail size={18} color="var(--accent-emerald)" />
                </div>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  99.82%
                </div>
                <span style={{ fontSize: '0.75rem', color: '#34D399', display: 'flex', alignItems: 'center', gap: '0.2rem', marginTop: '0.25rem' }}>
                  <TrendingUp size={12} /> Postmark Fernet Encrypted Pipeline
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
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Audience Contacts</span>
                  <MessageSquare size={18} color="var(--accent-indigo)" />
                </div>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  1,420,890
                </div>
                <span style={{ fontSize: '0.75rem', color: '#818CF8', display: 'flex', alignItems: 'center', gap: '0.2rem', marginTop: '0.25rem' }}>
                  <TrendingUp size={12} /> Dynamic Rule Segments & GDPR Suppressed
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
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>AI Content Safety Score</span>
                  <Bot size={18} color="var(--accent-violet)" />
                </div>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  100% Passed
                </div>
                <span style={{ fontSize: '0.75rem', color: '#A78BFA', display: 'flex', alignItems: 'center', gap: '0.2rem', marginTop: '0.25rem' }}>
                  <ShieldCheck size={12} /> Mandatory Brand Voice Approval Engine
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
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>AEO & GEO Search Rank</span>
                  <Search size={18} color="var(--accent-cyan)" />
                </div>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  Top #1 Position
                </div>
                <span style={{ fontSize: '0.75rem', color: '#22D3EE', display: 'flex', alignItems: 'center', gap: '0.2rem', marginTop: '0.25rem' }}>
                  <TrendingUp size={12} /> Autonomous Multi-Agent Growth Loop
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
