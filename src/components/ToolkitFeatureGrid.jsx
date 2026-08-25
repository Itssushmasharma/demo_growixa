import React, { useState } from 'react';
import { 
  Search, 
  Mail, 
  ShieldCheck, 
  Phone, 
  Building, 
  Chrome, 
  Database, 
  Bot, 
  CheckCircle2, 
  ArrowRight,
  Zap,
  Globe
} from 'lucide-react';

export default function ToolkitFeatureGrid({ openBookingModal }) {
  const [activeFeature, setActiveFeature] = useState('prospecting');

  const featureCards = [
    {
      id: 'prospecting',
      title: 'B2B Prospecting & Deep Search',
      badge: 'Deep Search Technology',
      icon: Search,
      color: '#3B82F6',
      headline: 'Find decision-maker contacts with unmatched data coverage',
      desc: 'Filter over 250M+ B2B profiles by job title, company headcount, industry, technology stack, revenue, and location. Uncover hidden executive leads missed by traditional databases.',
      points: [
        'Deep Search algorithm across 250M+ verified profiles',
        'Advanced filters: Job title, seniority, company size & tech stack',
        'Triple-verified emails with under 2.5% bounce rate guarantee',
        'Instant CSV export & direct CRM sync'
      ]
    },
    {
      id: 'verifier',
      title: 'Real-Time SMTP Email Verifier',
      badge: 'Triple Verification Engine',
      icon: ShieldCheck,
      color: '#10B981',
      headline: 'Eliminate email bounces before sending campaigns',
      desc: 'Perform multi-stage SMTP verification, MX lookup, domain health checking, and catch-all email validation to protect your sender reputation and maximize deliverability.',
      points: [
        'Multi-stage SMTP ping & MX record validation',
        'Catch-all server verification algorithms',
        'Automated spam trap & honeypot filtering',
        'Guaranteed deliverability rate above 99.5%'
      ]
    },
    {
      id: 'extension',
      title: 'LinkedIn & Sales Navigator Extension',
      badge: 'Chrome Extension Tool',
      icon: Chrome,
      color: '#8B5CF6',
      headline: 'Extract verified emails directly from LinkedIn profiles',
      desc: 'Unlock direct dial phone numbers and verified business emails while browsing LinkedIn & Sales Navigator. Build hyper-targeted lead lists without leaving your browser.',
      points: [
        'One-click contact reveal on LinkedIn & Sales Navigator',
        'Bulk profile list export to Growixa CRM',
        'Real-time verification before credit deduction',
        'Automated company headcount & technographic enrichment'
      ]
    },
    {
      id: 'enrichment',
      title: 'Domain & Phone Enrichment',
      badge: 'Unmatched Coverage',
      icon: Phone,
      color: '#06B6D4',
      headline: 'Enrich incomplete lead lists with verified direct phone numbers',
      desc: 'Upload any list of company domains or lead emails to enrich them with direct executive phone numbers, mobile numbers, social profiles, and company HQ data.',
      points: [
        'Direct phone dials & executive mobile phone coverage',
        'Company domain enrichment & technographic data',
        'Bulk CSV batch enrichment in under 60 seconds',
        'Pay only for triple-verified phone numbers'
      ]
    },
    {
      id: 'automation',
      title: 'AI Email Marketing Engine',
      badge: 'High-Deliverability SMTP',
      icon: Mail,
      color: '#F59E0B',
      headline: 'Automate personalized outreach with Fernet encrypted SMTP',
      desc: 'Send high-deliverability email campaigns using Postmark & custom SMTP connections, versioned HTML template builders, dynamic audience rules, and automated background schedulers.',
      points: [
        'Postmark & Custom SMTP Fernet encrypted pipelines',
        'Dynamic rule-based audience segment builder',
        'Automated campaign scheduler & DLQ error handling',
        'Real-time open, click, bounce & complaint webhooks'
      ]
    },
    {
      id: 'agents',
      title: 'Autonomous AI Growth Agents',
      badge: 'GEO & AEO Specialists',
      icon: Bot,
      color: '#EC4899',
      headline: 'Outrank competitors on generative search engines (GEO/AEO)',
      desc: 'Deploy autonomous AI agents to optimize your brand for Answer Engine Indexing (AEO) and Generative Engine Optimization (GEO) across ChatGPT, Perplexity, and Gemini.',
      points: [
        'Generative Engine Optimization (GEO) rankings',
        'Answer Engine Indexing (AEO) metadata auto-PRs',
        'AI Content Assistant with Brand Voice Safety gate',
        'Autonomous multi-agent growth strategy loop'
      ]
    }
  ];

  const current = featureCards.find(f => f.id === activeFeature);

  return (
    <section id="features" style={{ padding: '6rem 0' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3.5rem auto' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-indigo)' }}>
            GrowthToolkit.io Complete Platform
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginTop: '0.5rem', marginBottom: '1rem' }}>
            Everything You Need to <span className="gradient-text">Find, Verify & Automate Leads</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            We find emails and phone numbers others can't using deep search, catch-all verification, and unmatched data coverage.
          </p>
        </div>

        {/* Feature Navigation Pills */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.75rem',
          flexWrap: 'wrap',
          marginBottom: '3rem'
        }}>
          {featureCards.map((fc) => {
            const Icon = fc.icon;
            const isActive = activeFeature === fc.id;
            return (
              <button
                key={fc.id}
                onClick={() => setActiveFeature(fc.id)}
                style={{
                  background: isActive ? fc.color : 'var(--bg-card)',
                  color: isActive ? '#FFFFFF' : 'var(--text-secondary)',
                  border: isActive ? `1px solid ${fc.color}` : '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-full)',
                  padding: '0.7rem 1.4rem',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.2s ease',
                  boxShadow: isActive ? `0 6px 20px ${fc.color}35` : 'none'
                }}
              >
                <Icon size={16} />
                <span>{fc.title.split(' & ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Feature Card Display */}
        {current && (
          <div className="glass-card animate-fade-in" style={{ padding: '2.5rem', borderRadius: 'var(--radius-lg)', maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
              
              {/* Feature Content Info */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <span className="status-pill status-pill-done" style={{ fontSize: '0.75rem' }}>
                    {current.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.85rem', fontWeight: 800, marginBottom: '0.75rem', lineHeight: 1.2 }}>
                  {current.headline}
                </h3>

                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                  {current.desc}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                  {current.points.map((pt, pIdx) => (
                    <div key={pIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem' }}>
                      <CheckCircle2 size={18} color={current.color} style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{pt}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={openBookingModal}
                  className="btn-primary"
                  style={{ padding: '0.85rem 1.75rem', fontSize: '0.95rem' }}
                >
                  <span>Start Free Trial (500 Credits)</span>
                  <ArrowRight size={18} />
                </button>
              </div>

              {/* Visual Card Representation */}
              <div style={{
                background: `linear-gradient(135deg, ${current.color}15 0%, rgba(15, 23, 42, 0.9) 100%)`,
                border: `1px solid ${current.color}40`,
                borderRadius: 'var(--radius-md)',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.4)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <current.icon size={24} color={current.color} />
                    <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{current.title}</span>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: current.color, fontFamily: 'var(--font-mono)' }}>LIVE MODULE</span>
                </div>

                <div style={{ background: 'rgba(0, 0, 0, 0.4)', borderRadius: 'var(--radius-sm)', padding: '1.25rem', fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>
                  <div style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>// GrowthToolkit.io Engine Telemetry</div>
                  <div style={{ color: 'var(--accent-emerald)', marginBottom: '0.25rem' }}>✔ Deep Search Accuracy: 99.8%</div>
                  <div style={{ color: 'var(--accent-emerald)', marginBottom: '0.25rem' }}>✔ Bounce Guarantee: &lt;2.5%</div>
                  <div style={{ color: 'var(--text-primary)' }}>✔ Triple Verification: ACTIVE</div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  <span>Credits Deducted: Only on 100% verified leads</span>
                  <span style={{ color: 'var(--accent-emerald)', fontWeight: 600 }}>0 Credit on Bounces</span>
                </div>
              </div>

            </div>
          </div>
        )}
      </div>
    </section>
  );
}
