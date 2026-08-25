import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Users, 
  Mail, 
  Share2, 
  CreditCard, 
  Cpu, 
  CheckCircle2, 
  ArrowRight, 
  Zap,
  Layers,
  Sparkles,
  Bot
} from 'lucide-react';

export default function ClarityEngineMatrix({ openBookingModal }) {
  const [selectedModule, setSelectedModule] = useState(0);

  const modules = [
    {
      code: 'GRX-FEAT-001..028',
      title: '1. Auth & RBAC Security',
      subtitle: 'Argon2id & 6-Role Permission Engine',
      icon: ShieldCheck,
      color: '#00F0FF',
      desc: 'Argon2id password hashing, JWT refresh rotation, rate limiting, centralized 6-role RBAC, brand voice compliance rules, insert-only audit logs, and admin health panel.',
      status: 'DONE'
    },
    {
      code: 'GRX-FEAT-006..010',
      title: '2. Contact & Audience CRM',
      subtitle: 'Dynamic Rule-Based Audience Segments',
      icon: Users,
      color: '#3B82F6',
      desc: 'Centralized CRM with email deduplication, CSV column auto-mapping, tagging, live-evaluated target audiences, and GDPR/TCPA consent suppression lists.',
      status: 'DONE'
    },
    {
      code: 'GRX-FEAT-011..016',
      title: '3. Email Marketing Engine',
      subtitle: 'Postmark & Fernet Encrypted SMTP',
      icon: Mail,
      color: '#8B5CF6',
      desc: 'Postmark & custom SMTP credentials with Fernet encryption, versioned HTML iframe template builder, campaign scheduler with DLQ error handling, and delivery webhooks.',
      status: 'DONE'
    },
    {
      code: 'GRX-FEAT-017..023',
      title: '4. Social & AI Assistant',
      subtitle: 'LinkedIn/X OAuth & AI Brand Safety',
      icon: Share2,
      color: '#06B6D4',
      desc: 'OAuth 2.0 connection for LinkedIn and Twitter/X, drag-and-drop content calendar, AI content assistant for copy and subject lines, AI Brand Safety gate, and token cost telemetry.',
      status: 'READY'
    },
    {
      code: 'GRX-SAAS-001..005',
      title: '5. Customer Account SaaS',
      subtitle: 'Sprint 5 Multi-Tenant DB Isolation',
      icon: CreditCard,
      color: '#F59E0B',
      desc: 'Strict account_id database isolation guaranteeing multi-tenant boundaries, platform master staff login, self-service signup, and Stripe subscription billing lifecycle.',
      status: 'BACKLOG'
    },
    {
      code: 'GRX-FEAT-SMS/WA/SEO',
      title: '6. SMS, WhatsApp & GEO/AEO',
      subtitle: 'Release 1.2 – V3 Multi-Agent Loop',
      icon: Cpu,
      color: '#EC4899',
      desc: 'Twilio bulk SMS with GSM-7 calculator, Meta Cloud API WhatsApp marketing, technical SEO site crawler, Answer Engine Optimization (AEO), and Generative Engine Optimization (GEO).',
      status: 'STAGED'
    }
  ];

  const current = modules[selectedModule];

  return (
    <section id="engines" style={{ padding: '7rem 0', background: 'radial-gradient(ellipse at center, #0B1739 0%, #030712 90%)', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Neon Glowing Particles */}
      <div style={{ position: 'absolute', top: '15%', left: '50%', transform: 'translateX(-50%)', width: '800px', height: '600px', background: 'radial-gradient(circle, rgba(0, 240, 255, 0.12) 0%, rgba(139, 92, 246, 0.08) 50%, transparent 70%)', filter: 'blur(100px)', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Header - Matching Image 6 Header ("FROM IDEA TO DIRECTION") */}
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 4rem auto' }}>
          <div style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.25em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            GROWIXA ARCHITECTURE CATALOG (PDF SPECIFICATION v2.4)
          </div>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, letterSpacing: '-0.02em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            FROM STRATEGY TO <span className="gradient-text">AUTOMATED REVENUE</span>
          </h2>
          <p style={{ color: '#00F0FF', fontSize: '1rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600 }}>
            CLARITY TURNS LEADS INTO MEASURABLE IMPACT.
          </p>
        </div>

        {/* Central Clarity Engine Diagram Container (Exact Match to Image 6) */}
        <div className="glass-card" style={{ padding: '3rem 2rem', borderRadius: 'var(--radius-lg)', maxWidth: '1200px', margin: '0 auto', border: '1px solid rgba(0, 240, 255, 0.3)', boxShadow: '0 0 50px rgba(0, 240, 255, 0.15)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr 1fr', gap: '2rem', alignItems: 'center' }}>
            
            {/* Left Side: Idea / Raw Leads Input Particles */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.15em' }}>
                RAW SIGNALS & STRATEGY INPUT
              </div>

              {/* Glowing Particle Tree Stream */}
              <div style={{
                background: 'rgba(0, 0, 0, 0.4)',
                border: '1px solid rgba(244, 63, 94, 0.4)',
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem',
                width: '100%',
                boxShadow: '0 0 25px rgba(244, 63, 94, 0.2)'
              }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#F43F5E', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Sparkles size={16} /> RAW MARKETING DATA
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.6, fontFamily: 'var(--font-mono)' }}>
                  • Unverified Contacts & CSVs<br />
                  • Social Media Drafts & Prompts<br />
                  • Postmark SMTP Webhook Logs<br />
                  • Generative Search Keywords
                </div>
              </div>

              <div style={{ fontSize: '0.8rem', color: '#00F0FF', display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.5rem', fontFamily: 'var(--font-mono)' }}>
                <span>Flowing into Core Engine</span> <ArrowRight size={14} />
              </div>
            </div>

            {/* Center Concentric Ring Core ("GROWIXA CORE ENGINE") */}
            <div style={{ textTransform: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{
                position: 'relative',
                width: '260px',
                height: '260px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto'
              }}>
                {/* Outer Concentric Glowing Rings */}
                <div style={{ position: 'absolute', width: '260px', height: '260px', borderRadius: '50%', border: '1.5px stroke rgba(0, 240, 255, 0.4)', boxShadow: '0 0 30px rgba(0, 240, 255, 0.3)', animation: 'spin 20s linear infinite' }} />
                <div style={{ position: 'absolute', width: '210px', height: '210px', borderRadius: '50%', border: '1.5px dashed rgba(139, 92, 246, 0.5)', animation: 'spin 15s linear infinite reverse' }} />
                <div style={{ position: 'absolute', width: '160px', height: '160px', borderRadius: '50%', border: '2px solid #00F0FF', boxShadow: '0 0 40px #00F0FF' }} />

                {/* Core Center Logo Badge */}
                <div style={{
                  width: '90px',
                  height: '90px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, #00F0FF 0%, #3B82F6 100%)',
                  boxShadow: '0 0 40px #00F0FF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  zIndex: 3
                }}>
                  <Zap size={44} style={{ filter: 'drop-shadow(0 0 10px #00F0FF)' }} />
                </div>
              </div>

              <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '0.08em' }}>
                  GROWIXA CLARITY ENGINE
                </div>
                <div style={{ fontSize: '0.75rem', color: '#00F0FF', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: '0.2rem', fontFamily: 'var(--font-mono)' }}>
                  ALIGN. CONNECT. AUTOMATE.
                </div>
              </div>
            </div>

            {/* Right Side: Stacked 6 Core Platform Engine Module Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.15em', marginBottom: '0.25rem' }}>
                6 CORE PLATFORM MODULES
              </div>

              {modules.map((m, idx) => {
                const Icon = m.icon;
                const isSelected = selectedModule === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setSelectedModule(idx)}
                    style={{
                      background: isSelected ? 'rgba(0, 240, 255, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                      border: isSelected ? `1.5px solid ${m.color}` : '1px solid var(--border-color)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '0.75rem 1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      boxShadow: isSelected ? `0 0 20px ${m.color}40` : 'none'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: `${m.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: m.color }}>
                        <Icon size={16} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.875rem', fontWeight: 700, color: isSelected ? 'var(--text-primary)' : 'var(--text-secondary)' }}>
                          {m.title}
                        </div>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                          {m.code}
                        </div>
                      </div>
                    </div>

                    <span className={`status-pill ${m.status === 'DONE' ? 'status-pill-done' : m.status === 'READY' ? 'status-pill-ready' : 'status-pill-staged'}`} style={{ fontSize: '0.65rem', padding: '0.1rem 0.4rem' }}>
                      {m.status}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Selected Module Detail Panel below the diagram */}
          {current && (
            <div style={{
              marginTop: '2.5rem',
              paddingTop: '2rem',
              borderTop: '1px solid rgba(0, 240, 255, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1.5rem'
            }}>
              <div style={{ maxWidth: '800px', textAlign: 'left' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.4rem' }}>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: current.color }}>{current.title}</h4>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{current.subtitle}</span>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: 1.6 }}>{current.desc}</p>
              </div>

              <button onClick={openBookingModal} className="btn-primary" style={{ padding: '0.75rem 1.5rem', fontSize: '0.9rem' }}>
                <span>Launch {current.title.split('. ')[1]}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          )}
        </div>

        {/* Bottom Section: 3 Circular Pillar Nodes (Image 6 Bottom Pillars Match) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '2rem',
          marginTop: '4rem'
        }}>
          <div style={{ textAlign: 'center', padding: '1.5rem', background: 'rgba(255, 255, 255, 0.02)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(0, 240, 255, 0.1)', border: '1px solid #00F0FF', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto', color: '#00F0FF', boxShadow: '0 0 20px rgba(0, 240, 255, 0.3)' }}>
              <ShieldCheck size={28} />
            </div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.3rem' }}>CLARITY & BRAND SAFETY</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Cut through the noise. Enforce brand rules with AI Brand Voice gates.</p>
          </div>

          <div style={{ textAlign: 'center', padding: '1.5rem', background: 'rgba(255, 255, 255, 0.02)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(59, 130, 246, 0.1)', border: '1px solid #3B82F6', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto', color: '#3B82F6', boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' }}>
              <Layers size={28} />
            </div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.3rem' }}>STRUCTURED PIPELINES</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Organize audience segments. Build high-deliverability Postmark SMTP pipelines.</p>
          </div>

          <div style={{ textAlign: 'center', padding: '1.5rem', background: 'rgba(255, 255, 255, 0.02)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(139, 92, 246, 0.1)', border: '1px solid #8B5CF6', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto', color: '#8B5CF6', boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)' }}>
              <Zap size={28} />
            </div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.3rem' }}>AUTOMATED OUTCOMES</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Turn raw leads into action. Drive high-converting revenue momentum.</p>
          </div>
        </div>

        {/* Bottom Animated Neon Wave */}
        <div style={{ marginTop: '3rem', opacity: 0.7 }}>
          <svg viewBox="0 0 1200 120" style={{ width: '100%', height: '60px' }}>
            <path d="M 0 60 Q 300 0 600 60 T 1200 60" fill="none" stroke="url(#waveGrad)" strokeWidth="3" filter="drop-shadow(0 0 8px #00F0FF)" />
            <defs>
              <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00F0FF" />
                <stop offset="50%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#EC4899" />
              </linearGradient>
            </defs>
          </svg>
        </div>

      </div>
    </section>
  );
}
