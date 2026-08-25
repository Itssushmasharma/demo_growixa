import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Clock, 
  Rocket, 
  Layers, 
  Cpu, 
  Sparkles, 
  Calendar,
  ChevronRight
} from 'lucide-react';

export default function RoadmapMatrix() {
  const roadmapStages = [
    {
      stage: 'MVP (Slices 1–6)',
      focus: 'Email Marketing Foundation, Contact CRM, Social Automation, AI Assistant',
      timeline: 'Slices 1–4 DONE / Slices 5–6 Active',
      status: 'DONE',
      progress: 85,
      highlights: [
        'Argon2id Auth & 6-Role RBAC',
        'Postmark & Fernet Encrypted SMTP',
        'Dynamic CRM Rule Segmentation',
        'AI Content & Brand Voice Safety'
      ]
    },
    {
      stage: 'Sprint 5',
      focus: 'Customer Account SaaS Platform (account_id isolation, self-signup, Stripe billing, Platform Admin)',
      timeline: 'Scheduled Next (DEC-GRX-017)',
      status: 'BACKLOG',
      progress: 40,
      highlights: [
        'Strict DB account_id Data Isolation',
        'Stripe Lifecycle & Payment Webhooks',
        'Self-Service Public Signup Flow',
        'Master Platform Staff Portal'
      ]
    },
    {
      stage: 'Release 1.1',
      focus: 'Marketing Depth: Advanced segmentation, approval workflows, calendar polish',
      timeline: 'Staged Post-Sprint 5',
      status: 'STAGED',
      progress: 25,
      highlights: [
        'Saved (Frozen) vs Dynamic Target Audiences',
        'Multi-Manager Approval Workflows',
        'Unified Drag & Drop Content Calendar'
      ]
    },
    {
      stage: 'Release 1.2',
      focus: 'Marketing Breadth: Bulk SMS Marketing (Twilio), multi-social, A/B testing',
      timeline: 'Staged (GRX-FEAT-SMS-001)',
      status: 'STAGED',
      progress: 15,
      highlights: [
        'GSM-7 Segment Calculator & E.164 Phone Check',
        'Twilio Bulk SMS Delivery Engine',
        'Multi-Social Variant A/B Testing'
      ]
    },
    {
      stage: 'Release 1.2+',
      focus: 'WhatsApp Marketing (Meta/Twilio API), push notification channels',
      timeline: 'Staged Channel Expansion',
      status: 'STAGED',
      progress: 10,
      highlights: [
        'Meta Cloud API Approved Message Templates',
        'Rich Media WhatsApp Attachments',
        'Web & Mobile Push Notifications'
      ]
    },
    {
      stage: 'V1.5 – V3',
      focus: 'SEO Crawler, WordPress/GitHub auto-PRs, AEO/GEO Specialists, Multi-Agent Autonomous Growth Engine',
      timeline: 'Long-Term Vision',
      status: 'DEFERRED',
      progress: 5,
      highlights: [
        'Generative Engine Optimization (GEO)',
        'Answer Engine Indexing (AEO)',
        'Autonomous Multi-Agent Strategy Loops'
      ]
    }
  ];

  return (
    <section id="roadmap" style={{ padding: '6rem 0', background: 'rgba(15, 23, 42, 0.5)', borderTop: '1px solid var(--border-color)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-emerald)' }}>
            Official Section 8 Specification
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginTop: '0.5rem', marginBottom: '1rem' }}>
            Master Release <span className="gradient-text">Roadmap Matrix</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            Track Growixa's continuous evolution from Single-Tenant MVP to full Multi-Tenant Autonomous SaaS.
          </p>
        </div>

        {/* Roadmap Timeline Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {roadmapStages.map((item, index) => (
            <div 
              key={index}
              className="glass-card"
              style={{
                padding: '1.75rem',
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div>
                {/* Header Stage & Status */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                    {item.stage}
                  </span>
                  {item.status === 'DONE' && <span className="status-pill status-pill-done">ACTIVE MVP</span>}
                  {item.status === 'BACKLOG' && <span className="status-pill status-pill-ready">NEXT SPRINT</span>}
                  {item.status === 'STAGED' && <span className="status-pill status-pill-staged">STAGED</span>}
                  {item.status === 'DEFERRED' && <span className="status-pill" style={{ background: 'rgba(148, 163, 184, 0.1)', color: '#94A3B8' }}>VISION</span>}
                </div>

                {/* Core Scope Description */}
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                  {item.focus}
                </p>

                {/* Highlights List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {item.highlights.map((hl, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                      <CheckCircle2 size={14} color="var(--accent-emerald)" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Progress & Target Timeline Bar */}
              <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)' }}>
                  <span>Timeline: {item.timeline}</span>
                  <span>{item.progress}%</span>
                </div>
                <div style={{ width: '100%', height: '6px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{
                    width: `${item.progress}%`,
                    height: '100%',
                    background: item.status === 'DONE' 
                      ? 'linear-gradient(90deg, #10B981, #34D399)' 
                      : item.status === 'BACKLOG' 
                        ? 'linear-gradient(90deg, #F59E0B, #FBBF24)' 
                        : 'linear-gradient(90deg, #6366F1, #818CF8)',
                    borderRadius: '3px'
                  }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
