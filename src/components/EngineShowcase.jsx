import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Users, 
  Mail, 
  Share2, 
  CreditCard, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  ArrowUpRight,
  Database,
  Lock,
  FileSpreadsheet,
  Send,
  Calendar,
  Bot,
  MessageCircle,
  Search,
  Cpu
} from 'lucide-react';

export default function EngineShowcase() {
  const [activeTab, setActiveTab] = useState('auth');

  const engineModules = [
    {
      id: 'auth',
      title: '1. Auth & Admin Security',
      subtitle: 'GRX-FEAT-001..028',
      icon: ShieldCheck,
      color: '#10B981',
      description: 'Argon2id password hashing, JWT refresh rotation, rate limiting, centralized RBAC engine across 6 roles, audit log trails, and real-time infrastructure health monitoring (Postgres, Redis, RabbitMQ).',
      features: [
        { code: 'GRX-FEAT-001', name: 'Authentication Engine', useCase: 'Argon2id password hashing, JWT refresh rotation, rate limiting, and reset flows.', status: 'DONE' },
        { code: 'GRX-FEAT-002', name: 'User Management', useCase: 'Invite internal marketing staff, manage user access states, and assign RBAC roles.', status: 'DONE' },
        { code: 'GRX-FEAT-003', name: 'RBAC Engine', useCase: 'Centralized server-side route permission checking across 6 distinct RBAC roles.', status: 'DONE' },
        { code: 'GRX-FEAT-004', name: 'Company Profile', useCase: 'Set up organization profile, business address, timezone, and legal email footers.', status: 'DONE' },
        { code: 'GRX-FEAT-005', name: 'Brand Voice Profile', useCase: 'Define brand tone, audience personas, forbidden compliance claims, and brand facts.', status: 'DONE' },
        { code: 'GRX-FEAT-027', name: 'Audit Logs', useCase: 'Insert-only security event trail tracking logins, role changes, and data modifications.', status: 'DONE' },
        { code: 'GRX-FEAT-028', name: 'Admin Health Panel', useCase: 'Monitor real-time infrastructure metrics (Postgres, Redis, RabbitMQ) and execute ops jobs.', status: 'DONE' }
      ]
    },
    {
      id: 'contacts',
      title: '2. Contact & Audience CRM',
      subtitle: 'GRX-FEAT-006..010',
      icon: Users,
      color: '#6366F1',
      description: 'Centralized CRM with email deduplication, CSV column auto-mapping, tagging, dynamic rule-based audience segment builder, and strict GDPR/TCPA suppression list enforcement.',
      features: [
        { code: 'GRX-FEAT-006', name: 'Contact Management', useCase: 'Centralized CRM list with automatic email deduplication and custom attribute fields.', status: 'DONE' },
        { code: 'GRX-FEAT-007', name: 'CSV Contact Import', useCase: 'Upload lead spreadsheets, auto-detect CSV columns, map attributes, and view import history.', status: 'DONE' },
        { code: 'GRX-FEAT-008', name: 'Contact Tagging', useCase: 'Apply inline categorization tags to organize leads by campaign or customer status.', status: 'DONE' },
        { code: 'GRX-FEAT-009', name: 'Segmentation Builder', useCase: 'Build rule-based Dynamic (live-evaluated) and Saved (frozen) audience target segments.', status: 'DONE' },
        { code: 'GRX-FEAT-010', name: 'Consent & Suppression', useCase: 'Track GDPR/TCPA consent history and enforce automated email/phone suppression lists.', status: 'DONE' }
      ]
    },
    {
      id: 'email',
      title: '3. Email Marketing Engine',
      subtitle: 'GRX-FEAT-011..016',
      icon: Mail,
      color: '#8B5CF6',
      description: 'Postmark & Custom SMTP integration with Fernet encrypted credentials, live HTML iframe template builder, background scheduler with DLQ error handling, Postmark webhooks, and analytics.',
      features: [
        { code: 'GRX-FEAT-011', name: 'Email Integrations', useCase: 'Connect Postmark & Custom SMTP with Fernet encrypted credentials and connection testing.', status: 'DONE' },
        { code: 'GRX-FEAT-012', name: 'Email Templates', useCase: 'Versioned template builder with live HTML iframe preview, formatting tools, and duplication.', status: 'DONE' },
        { code: 'GRX-FEAT-013', name: 'Campaign Pipeline', useCase: 'Compose marketing campaigns targeting specific segments, execute test sends and immediate sends.', status: 'DONE' },
        { code: 'GRX-FEAT-014', name: 'Campaign Scheduler', useCase: 'Schedule campaigns for future dates; automatic background worker claims, retries & DLQ handling.', status: 'DONE' },
        { code: 'GRX-FEAT-015', name: 'Delivery & Webhooks', useCase: 'Track message deliveries via Postmark webhooks (Open/Click/Bounce) and public 1-click unsubscribe.', status: 'DONE' },
        { code: 'GRX-FEAT-016', name: 'Campaign Analytics', useCase: 'Interactive reports showing sent, delivered, open, click, bounce, and complaint percentage metrics.', status: 'DONE' }
      ]
    },
    {
      id: 'social',
      title: '4. Social & AI Assistant',
      subtitle: 'GRX-FEAT-017..023',
      icon: Share2,
      color: '#06B6D4',
      description: 'OAuth 2.0 connection for LinkedIn and Twitter/X, drag-and-drop content calendar combining emails and social posts, AI content assistant for subject lines and copy, AI Brand Safety engine, and token cost telemetry.',
      features: [
        { code: 'GRX-FEAT-017', name: 'Social Accounts', useCase: 'OAuth 2.0 account connection management for LinkedIn and Twitter/X.', status: 'READY' },
        { code: 'GRX-FEAT-018', name: 'Social Post Composer', useCase: 'Draft social posts with rich media attachments (images, video) and preview rendering.', status: 'READY' },
        { code: 'GRX-FEAT-019', name: 'Social Scheduler', useCase: 'Automated background worker queue for publishing posts at optimal scheduled times.', status: 'READY' },
        { code: 'GRX-FEAT-020', name: 'Content Calendar', useCase: 'Unified drag-and-drop calendar combining scheduled email campaigns and social posts.', status: 'READY' },
        { code: 'GRX-FEAT-021', name: 'AI Content Assistant', useCase: 'Generate email subject lines, email copy, social captions, CTAs, and tone rewrites.', status: 'READY' },
        { code: 'GRX-FEAT-022', name: 'AI Brand Voice & Safety', useCase: 'Apply company brand rules; mandatory human manager approval for all AI-generated content.', status: 'READY' },
        { code: 'GRX-FEAT-023', name: 'AI Cost & Token Telemetry', useCase: 'Track token consumption, prompt versions, and estimated provider costs per generation.', status: 'READY' }
      ]
    },
    {
      id: 'saas',
      title: '5. Customer Account SaaS Platform',
      subtitle: 'GRX-SAAS-001..005',
      icon: CreditCard,
      color: '#F59E0B',
      description: 'Self-service customer registration, Stripe subscription lifecycle integration, strict multi-tenant account_id isolation, platform master staff login, and administrative portal.',
      features: [
        { code: 'GRX-SAAS-001', name: 'Account Data Isolation', useCase: 'Strict account_id boundary on all database tables to guarantee customer data isolation.', status: 'BACKLOG' },
        { code: 'GRX-SAAS-002', name: 'Platform Auth Boundary', useCase: 'Separate platform_admins table and POST /platform/auth/login for master staff.', status: 'BACKLOG' },
        { code: 'GRX-SAAS-003', name: 'Self-Service Signup', useCase: 'Public registration, email verification token flow, and customer plan selection.', status: 'BACKLOG' },
        { code: 'GRX-SAAS-004', name: 'Billing & Subscriptions', useCase: 'Stripe subscription lifecycle integration, payment webhooks, and usage limit enforcement.', status: 'BACKLOG' },
        { code: 'GRX-SAAS-005', name: 'Platform Admin Panel', useCase: 'Master portal for subscription overrides, usage tracking, financial analytics, and support.', status: 'BACKLOG' }
      ]
    },
    {
      id: 'growth',
      title: '6. SMS, WhatsApp & GEO/AEO',
      subtitle: 'Release 1.2 – V3 Roadmap',
      icon: Cpu,
      color: '#EC4899',
      description: 'Twilio bulk SMS marketing with GSM-7 calculator, Meta Cloud API WhatsApp marketing, technical SEO site crawler, Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), and Autonomous Multi-Agent Growth Loop.',
      features: [
        { code: 'GRX-FEAT-SMS-001', name: 'Bulk SMS Marketing', useCase: 'Twilio provider setup, E.164 phone validation, GSM-7 segment calculator, TCPA opt-out webhooks.', status: 'STAGED' },
        { code: 'GRX-FEAT-WA-001', name: 'WhatsApp Marketing', useCase: 'Twilio WhatsApp API / Meta Cloud API, approved business message templates, media attachments.', status: 'STAGED' },
        { code: 'GRX-FEAT-SEO-001', name: 'Website Intelligence', useCase: 'Technical SEO site crawler, page inventory, metadata recommendations, Search Console metrics.', status: 'DEFERRED' },
        { code: 'GRX-FEAT-SEO-004', name: 'SEO & AEO Execution', useCase: 'WordPress/GitHub automated PR creation for approved metadata, Answer Engine Optimization.', status: 'DEFERRED' },
        { code: 'GRX-FEAT-SEO-009', name: 'GEO & Growth Agents', useCase: 'Generative Engine Optimization (GEO), Competitor Intelligence Agent, Multi-Agent Loop.', status: 'DEFERRED' }
      ]
    }
  ];

  const currentModule = engineModules.find(m => m.id === activeTab);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'DONE':
        return <span className="status-pill status-pill-done">DONE</span>;
      case 'READY':
        return <span className="status-pill status-pill-ready">READY</span>;
      case 'BACKLOG':
        return <span className="status-pill status-pill-backlog">BACKLOG</span>;
      case 'STAGED':
        return <span className="status-pill status-pill-staged">STAGED</span>;
      case 'DEFERRED':
        return <span className="status-pill" style={{ background: 'rgba(100, 116, 139, 0.15)', color: '#94A3B8', borderColor: 'rgba(100, 116, 139, 0.3)' }}>DEFERRED</span>;
      default:
        return null;
    }
  };

  return (
    <section id="engines" style={{ padding: '6rem 0', background: 'rgba(15, 23, 42, 0.4)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-emerald)' }}>
            Official Feature Catalog & Specification
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginTop: '0.5rem', marginBottom: '1rem' }}>
            6 Core Platform <span className="gradient-text">Engine Modules</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            Explore Growixa's complete architectural specification as documented in release matrix v2.4.
          </p>
        </div>

        {/* Engine Tabs Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '1rem',
          marginBottom: '2.5rem'
        }}>
          {engineModules.map((module) => {
            const Icon = module.icon;
            const isActive = activeTab === module.id;
            return (
              <button
                key={module.id}
                onClick={() => setActiveTab(module.id)}
                style={{
                  background: isActive ? 'rgba(16, 185, 129, 0.12)' : 'var(--bg-card)',
                  border: isActive ? `1px solid ${module.color}` : '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem 1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  textAlign: 'center'
                }}
              >
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: isActive ? module.color : 'rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: isActive ? '#FFFFFF' : module.color
                }}>
                  <Icon size={20} />
                </div>
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)' }}>
                  {module.title.split('. ')[1]}
                </span>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  {module.subtitle}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Engine Module Detail Container */}
        {currentModule && (
          <div className="glass-card animate-fade-in" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
            {/* Header info */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border-color)' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>
                    {currentModule.title}
                  </h3>
                  <span style={{ fontSize: '0.8rem', color: currentModule.color, fontFamily: 'var(--font-mono)', padding: '0.2rem 0.6rem', borderRadius: '4px', background: 'rgba(255, 255, 255, 0.05)' }}>
                    {currentModule.subtitle}
                  </span>
                </div>
                <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', maxWidth: '800px' }}>
                  {currentModule.description}
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Module Features:</span>
                <span style={{ fontWeight: 700, color: 'var(--accent-emerald)' }}>{currentModule.features.length} Items</span>
              </div>
            </div>

            {/* Feature Items Table */}
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--border-color)', fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    <th style={{ padding: '0.75rem 1rem' }}>Code</th>
                    <th style={{ padding: '0.75rem 1rem' }}>Feature Name</th>
                    <th style={{ padding: '0.75rem 1rem' }}>Practical Business Use Case</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'right' }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {currentModule.features.map((feat, idx) => (
                    <tr 
                      key={idx} 
                      style={{ 
                        borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
                        transition: 'background 0.15s'
                      }}
                      onMouseOver={e => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'}
                      onMouseOut={e => e.currentTarget.style.background = 'transparent'}
                    >
                      <td style={{ padding: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: currentModule.color, fontWeight: 600 }}>
                        {feat.code}
                      </td>
                      <td style={{ padding: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                        {feat.name}
                      </td>
                      <td style={{ padding: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                        {feat.useCase}
                      </td>
                      <td style={{ padding: '1rem', textAlign: 'right' }}>
                        {getStatusBadge(feat.status)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
