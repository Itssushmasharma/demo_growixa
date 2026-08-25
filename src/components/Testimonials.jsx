import React from 'react';
import { 
  Star, 
  Quote, 
  TrendingUp, 
  CheckCircle2, 
  ShieldCheck, 
  Zap,
  Building2
} from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      quote: "Growixa's Postmark Fernet integration boosted our email inbox placement from 84% to 99.8%. We saw an immediate 3.4x spike in qualified pipeline sales within 30 days.",
      author: "Sarah Jenkins",
      role: "VP of Growth, TechScale SaaS",
      metric: "+340% Revenue Increase",
      rating: 5
    },
    {
      quote: "The rule-based audience segment builder and automated GDPR consent suppression saved us over 15 hours a week in manual CRM scrubbing. Essential for scaling B2B marketing.",
      author: "David Vance",
      role: "Head of Marketing, FinFlow Intelligence",
      metric: "15 hrs/wk Saved",
      rating: 5
    },
    {
      quote: "Growixa's AI Brand Voice Safety Engine gave our executive management total confidence. Every single generated social post and email subject line is verified before going live.",
      author: "Elena Rostova",
      role: "Chief Brand Officer, HealthPulse",
      metric: "100% Brand Compliance",
      rating: 5
    }
  ];

  return (
    <section style={{ padding: '6rem 0', background: 'rgba(15, 23, 42, 0.3)', borderTop: '1px solid var(--border-color)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3.5rem auto' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-emerald)' }}>
            Verified Client Success
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginTop: '0.5rem', marginBottom: '1rem' }}>
            Trusted by Growth Leaders <span className="gradient-text">& SaaS Pioneers</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            Discover how marketing engineering teams rely on Growixa to scale high-deliverability campaigns.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '2rem',
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                {/* Rating & Metric Badge */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', gap: '0.2rem' }}>
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
                    ))}
                  </div>
                  <span className="status-pill status-pill-done" style={{ fontSize: '0.75rem' }}>
                    {rev.metric}
                  </span>
                </div>

                {/* Quote */}
                <p style={{ color: 'var(--text-primary)', fontStyle: 'italic', lineHeight: 1.6, fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                  "{rev.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #10B981, #6366F1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  fontWeight: 700
                }}>
                  {rev.author[0]}
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700 }}>{rev.author}</h4>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{rev.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partner Ecosystem Badges */}
        <div style={{
          marginTop: '4rem',
          paddingTop: '2.5rem',
          borderTop: '1px solid var(--border-color)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '3rem',
          flexWrap: 'wrap',
          opacity: 0.75
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
            <Zap size={20} color="var(--accent-emerald)" /> Postmark Premier SMTP Partner
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
            <Building2 size={20} color="var(--accent-indigo)" /> Twilio Verified Bulk SMS Engine
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
            <ShieldCheck size={20} color="var(--accent-violet)" /> Argon2id Security Standard
          </div>
        </div>
      </div>
    </section>
  );
}
