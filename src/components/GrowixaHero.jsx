import React from 'react';
import {
  Star,
  Play,
  ArrowRight,
  CheckCircle2,
  Mail,
  MessageSquare,
  Send,
  TrendingUp,
  Users,
  ShieldCheck,
} from 'lucide-react';

export default function GrowixaHero({ openBookingModal }) {
  return (
    <section
      style={{
        position: 'relative',
        paddingTop: '8.5rem',
        paddingBottom: '5rem',
        background: 'var(--bg-hero)',
        borderBottom: '1px solid var(--border-color)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Headline & Action Buttons */}
          <div>
            <h1
              style={{
                fontSize: 'clamp(2.25rem, 5vw, 4.25rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: '1.25rem',
                color: '#111827',
                letterSpacing: '-0.03em',
              }}
            >
              Turn Every Interaction into a{' '}
              <span style={{ color: '#0B996E' }}>Lifetime Customer</span>
            </h1>

            <p
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                color: '#4B5563',
                marginBottom: '2rem',
                lineHeight: 1.6,
              }}
            >
              One AI-powered customer platform for all your marketing and sales needs. From email
              marketing, SMS, WhatsApp, and beyond, drive business growth and lasting loyalty.
            </p>

            {/* Action Buttons (Full width on mobile) */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                flexWrap: 'wrap',
                marginBottom: '2rem',
              }}
            >
              <button
                onClick={openBookingModal}
                className="btn-primary"
                style={{
                  padding: '0.95rem 2rem',
                  fontSize: '1rem',
                  borderRadius: '8px',
                  flex: '1 1 200px',
                  justifyContent: 'center',
                }}
              >
                <span>Sign up free</span>
              </button>

              <button
                onClick={openBookingModal}
                className="btn-secondary"
                style={{
                  padding: '0.95rem 2rem',
                  fontSize: '1rem',
                  borderRadius: '8px',
                  flex: '1 1 200px',
                  justifyContent: 'center',
                }}
              >
                <span>Watch live demo</span>
              </button>
            </div>

            {/* Social Rating Proof */}
            <div>
              <div
                style={{
                  fontSize: '0.875rem',
                  color: '#6B7280',
                  marginBottom: '0.35rem',
                  fontWeight: 600,
                }}
              >
                Loved by users everywhere
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span style={{ fontWeight: 800, fontSize: '1.1rem', color: '#111827' }}>4.5</span>
                <div style={{ display: 'flex', gap: '0.2rem' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="#0B996E" color="#0B996E" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Growixa App Dashboard Mockup */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                padding: '1.5rem',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)',
                position: 'relative',
              }}
            >
              {/* Window Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.25rem',
                  paddingBottom: '0.75rem',
                  borderBottom: '1px solid #F3F4F6',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <div
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      background: '#EF4444',
                    }}
                  />
                  <div
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      background: '#F59E0B',
                    }}
                  />
                  <div
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      background: '#10B981',
                    }}
                  />
                  <span
                    style={{
                      fontSize: '0.8rem',
                      color: '#6B7280',
                      fontWeight: 600,
                      marginLeft: '0.4rem',
                    }}
                  >
                    Growixa Platform Console
                  </span>
                </div>
                <span className="status-pill status-pill-done" style={{ fontSize: '0.65rem' }}>
                  Live Data Platform
                </span>
              </div>

              {/* Dashboard Content Mockup */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                  gap: '1rem',
                }}
              >
                {/* Card 1: Summer Campaign */}
                <div
                  style={{
                    background: '#F9FAFB',
                    border: '1px solid #E5E7EB',
                    borderRadius: '12px',
                    padding: '1rem',
                  }}
                >
                  <div style={{ fontSize: '0.775rem', color: '#6B7280', marginBottom: '0.2rem' }}>
                    Summer Collection Campaign
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#9CA3AF', marginBottom: '0.75rem' }}>
                    Sent on June 27, 2026
                  </div>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '0.5rem',
                      fontSize: '0.775rem',
                    }}
                  >
                    <div>
                      <span style={{ color: '#6B7280', display: 'block', fontSize: '0.65rem' }}>
                        Delivered
                      </span>
                      <strong style={{ color: '#111827' }}>22,490</strong>
                    </div>
                    <div>
                      <span style={{ color: '#6B7280', display: 'block', fontSize: '0.65rem' }}>
                        Orders
                      </span>
                      <strong style={{ color: '#0B996E' }}>30</strong>
                    </div>
                  </div>
                </div>

                {/* Card 2: Customer Data */}
                <div
                  style={{
                    background: '#F9FAFB',
                    border: '1px solid #E5E7EB',
                    borderRadius: '12px',
                    padding: '1rem',
                  }}
                >
                  <div style={{ fontSize: '0.775rem', color: '#6B7280', marginBottom: '0.2rem' }}>
                    Customer Data
                  </div>
                  <div
                    style={{
                      fontSize: '1.35rem',
                      fontWeight: 800,
                      color: '#111827',
                      margin: '0.2rem 0',
                    }}
                  >
                    5,200
                  </div>
                  <span style={{ fontSize: '0.7rem', color: '#0B996E', fontWeight: 600 }}>
                    New contacts added
                  </span>
                </div>
              </div>

              {/* Revenue Graph Mockup */}
              <div
                style={{
                  marginTop: '1rem',
                  background: '#F9FAFB',
                  border: '1px solid #E5E7EB',
                  borderRadius: '12px',
                  padding: '1rem',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '0.4rem',
                    fontSize: '0.8rem',
                  }}
                >
                  <span style={{ fontWeight: 700, color: '#111827' }}>Revenue Run Rate</span>
                  <span style={{ fontWeight: 800, color: '#0B996E' }}>$19,450 / mo</span>
                </div>
                {/* SVG Curve */}
                <svg viewBox="0 0 400 60" style={{ width: '100%', height: '36px' }}>
                  <path
                    d="M 0 50 Q 100 10 200 40 T 400 10"
                    fill="none"
                    stroke="#0B996E"
                    strokeWidth="3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
