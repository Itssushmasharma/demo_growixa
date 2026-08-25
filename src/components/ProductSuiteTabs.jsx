import React, { useState } from 'react';
import { 
  Mail, 
  Users, 
  MessageSquare, 
  Send, 
  Bot, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  Database,
  Search,
  Zap,
  Globe,
  Sliders,
  ShieldCheck
} from 'lucide-react';

export default function ProductSuiteTabs({ openBookingModal }) {
  const [activeSuite, setActiveSuite] = useState('marketing');

  const suites = [
    {
      id: 'marketing',
      title: 'Marketing Platform Suite',
      badge: 'Growixa Multi-Channel Engine',
      icon: Mail,
      color: '#10B981',
      tagline: 'Connect across every customer touchpoint with unified campaign intelligence.',
      features: [
        { name: 'Multi-Provider Email Marketing', desc: 'High-deliverability Postmark & Custom SMTP Fernet encrypted pipelines.', icon: Mail },
        { name: 'Bulk SMS Marketing', desc: 'Twilio provider setup, E.164 phone check, and GSM-7 segment calculator.', icon: MessageSquare },
        { name: 'WhatsApp Marketing API', desc: 'Approved Meta Cloud API business templates with rich media attachments.', icon: Send },
        { name: 'Web Push Notifications', desc: 'Trigger high-converting desktop and mobile browser push notifications.', icon: Globe }
      ]
    },
    {
      id: 'prospecting',
      title: 'B2B Sales & Lead Prospecting Suite',
      badge: 'GrowthToolkit-Style Prospecting',
      icon: Search,
      color: '#6366F1',
      tagline: 'Find verified decision-maker contact details and enrich B2B lead pipelines.',
      features: [
        { name: 'Deep Search & Executive Email Finder', desc: 'Discover verified executive emails and phone numbers for targeted target accounts.', icon: Search },
        { name: 'LinkedIn Lead Scraper & Extension', desc: 'Extract leads directly from LinkedIn & Sales Navigator into your Growixa CRM.', icon: Users },
        { name: 'Real-Time SMTP Email Verification', desc: 'Multi-layer SMTP verification ensuring 99.8% deliverability and zero bounce rates.', icon: ShieldCheck },
        { name: 'Bulk Lead Data Enrichment', desc: 'Enrich lead profiles with job titles, company size, revenue, and technographics.', icon: Database }
      ]
    },
    {
      id: 'transactional',
      title: 'Transactional Messaging Engine',
      badge: 'Enterprise Postmark Engine',
      icon: Zap,
      color: '#8B5CF6',
      tagline: 'Deliver critical password resets, OTP tokens, and invoices in under 500ms.',
      features: [
        { name: 'Sub-Second SMTP Delivery', desc: 'Fernet encrypted Postmark integration optimized for transactional messaging.', icon: Zap },
        { name: 'Real-Time Delivery Webhooks', desc: 'Track opens, clicks, hard/soft bounces, and spam complaints via instant webhooks.', icon: CheckCircle2 },
        { name: 'Dedicated Dedicated IP Pools', desc: 'Warm up dedicated IP addresses for enterprise sender reputation protection.', icon: ShieldCheck },
        { name: 'Template Versioning & Dual Engine', desc: 'Transactional HTML templates with live iframe rendering and fallback engines.', icon: Sliders }
      ]
    },
    {
      id: 'cdp',
      title: 'Customer Data Platform (CDP)',
      badge: 'Audience CRM & Consent',
      icon: Database,
      color: '#06B6D4',
      tagline: 'Unify lead data across all channels with dynamic segmentation and GDPR suppression.',
      features: [
        { name: 'Automated Email Deduplication', desc: 'Cleanse duplicate lead entries automatically upon import.', icon: CheckCircle2 },
        { name: 'Rule-Based Dynamic Segmentation', desc: 'Live-evaluated target audiences that update dynamically based on user behavior.', icon: Sliders },
        { name: 'GDPR & TCPA Suppression Engine', desc: 'Strict suppression list enforcement tracking consent history.', icon: ShieldCheck },
        { name: 'CSV Auto-Column Mapping', desc: 'Upload spreadsheets and auto-detect custom field attributes seamlessly.', icon: Database }
      ]
    },
    {
      id: 'agents',
      title: 'Autonomous AI Growth Agents',
      badge: 'Release 2.4 Multi-Agent Vision',
      icon: Bot,
      color: '#EC4899',
      tagline: 'Deploy specialized AI agents for content creation, sales outreach, and search optimization.',
      features: [
        { name: 'AI Marketing Content Agent', desc: 'Generates email copy, subject lines, social posts, and tone rewrites automatically.', icon: Bot },
        { name: 'AI Brand Voice & Safety Manager', desc: 'Enforces strict company compliance rules and mandatory human approval gates.', icon: ShieldCheck },
        { name: 'Generative Engine Optimization (GEO)', desc: 'Outrank competitors on AI search engines (ChatGPT, Perplexity, Gemini).', icon: Globe },
        { name: 'Answer Engine Indexing (AEO)', desc: 'Automated GitHub/WordPress PR creation for approved search metadata.', icon: Zap }
      ]
    }
  ];

  const currentSuite = suites.find(s => s.id === activeSuite);

  return (
    <section id="suites" style={{ padding: '6rem 0' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3.5rem auto' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-emerald)' }}>
            The Complete Customer & Marketing Suite
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginTop: '0.5rem', marginBottom: '1rem' }}>
            5 Integrated <span className="gradient-text">Growth Platforms in One</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            Replace 5 separate subscriptions (Mailchimp, Apollo, Hubspot, Twilio, Postmark) with Growixa's unified engine.
          </p>
        </div>

        {/* Suite Tabs Selector */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.75rem',
          flexWrap: 'wrap',
          marginBottom: '3rem'
        }}>
          {suites.map((s) => {
            const Icon = s.icon;
            const isActive = activeSuite === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setActiveSuite(s.id)}
                style={{
                  background: isActive ? s.color : 'var(--bg-card)',
                  color: isActive ? '#FFFFFF' : 'var(--text-secondary)',
                  border: isActive ? `1px solid ${s.color}` : '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-full)',
                  padding: '0.75rem 1.5rem',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  transition: 'all 0.25s ease',
                  boxShadow: isActive ? `0 6px 20px ${s.color}40` : 'none'
                }}
              >
                <Icon size={18} />
                <span>{s.title.split(' Suite')[0].split(' Platform')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Suite Showcase Panel */}
        {currentSuite && (
          <div className="glass-card animate-fade-in" style={{ padding: '2.5rem', borderRadius: 'var(--radius-lg)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border-color)' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <span className="status-pill status-pill-done" style={{ fontSize: '0.75rem' }}>
                    {currentSuite.badge}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.85rem', fontWeight: 800 }}>{currentSuite.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginTop: '0.25rem' }}>{currentSuite.tagline}</p>
              </div>

              <button
                onClick={openBookingModal}
                className="btn-primary"
                style={{ padding: '0.75rem 1.5rem' }}
              >
                <span>Try {currentSuite.title.split(' ')[0]} Suite Free</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Grid of features */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
              {currentSuite.features.map((feat, idx) => {
                const FeatIcon = feat.icon;
                return (
                  <div
                    key={idx}
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border-color)',
                      borderRadius: 'var(--radius-md)',
                      padding: '1.5rem',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseOver={e => e.currentTarget.style.borderColor = currentSuite.color}
                    onMouseOut={e => e.currentTarget.style.borderColor = 'var(--border-color)'}
                  >
                    <div style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: `${currentSuite.color}20`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: currentSuite.color,
                      marginBottom: '1rem'
                    }}>
                      <FeatIcon size={22} />
                    </div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.4rem' }}>{feat.name}</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5 }}>{feat.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
