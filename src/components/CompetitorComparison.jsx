import React from 'react';
import { Check, X, Sparkles, ShieldCheck, Zap } from 'lucide-react';

export default function CompetitorComparison({ openBookingModal }) {
  const comparisonMatrix = [
    {
      feature: 'High-Deliverability SMTP (Postmark/Fernet)',
      growixa: true,
      brevo: true,
      mailchimp: false,
      apollo: false,
      note: '99.8% inbox placement'
    },
    {
      feature: 'B2B Lead Prospecting & SMTP Email Finder',
      growixa: true,
      brevo: false,
      mailchimp: false,
      apollo: true,
      note: 'GrowthToolkit Deep Search'
    },
    {
      feature: 'AI Brand Voice & Mandatory Safety Approvals',
      growixa: true,
      brevo: false,
      mailchimp: false,
      apollo: false,
      note: 'GRX-FEAT-022 Brand Rules'
    },
    {
      feature: 'Omnichannel SMS & WhatsApp Meta Cloud API',
      growixa: true,
      brevo: true,
      mailchimp: false,
      apollo: false,
      note: 'GSM-7 Segment Calculator'
    },
    {
      feature: 'Generative Search & Answer Engine (GEO/AEO)',
      growixa: true,
      brevo: false,
      mailchimp: false,
      apollo: false,
      note: 'AI Search Engine Rank Engine'
    },
    {
      feature: 'Strict DB Multi-Tenant Data Isolation (`account_id`)',
      growixa: true,
      brevo: true,
      mailchimp: false,
      apollo: false,
      note: 'Sprint 5 Security Spec'
    },
    {
      feature: 'Pay-As-You-Go Wallet & Credit Rollover',
      growixa: true,
      brevo: false,
      mailchimp: false,
      apollo: true,
      note: 'No long-term contract lock-in'
    }
  ];

  return (
    <section style={{ padding: '6rem 0' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3.5rem auto' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-emerald)' }}>
            Competitive Advantage
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginTop: '0.5rem', marginBottom: '1rem' }}>
            Why Growth Teams <span className="gradient-text">Choose Growixa</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            See how Growixa consolidates marketing automation, B2B lead enrichment, and AI agents into one transparent platform.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="glass-card" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--border-color)', fontSize: '0.95rem' }}>
                <th style={{ padding: '1.25rem 1rem', width: '35%' }}>Platform Capabilities</th>
                <th style={{ padding: '1.25rem 1rem', textAlign: 'center', background: 'rgba(16, 185, 129, 0.12)', borderRadius: '12px 12px 0 0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', color: '#34D399', fontWeight: 800, fontSize: '1.1rem' }}>
                    <Zap size={20} /> GROWIXA
                  </div>
                </th>
                <th style={{ padding: '1.25rem 1rem', textAlign: 'center', color: 'var(--text-secondary)' }}>Brevo</th>
                <th style={{ padding: '1.25rem 1rem', textAlign: 'center', color: 'var(--text-secondary)' }}>Mailchimp</th>
                <th style={{ padding: '1.25rem 1rem', textAlign: 'center', color: 'var(--text-secondary)' }}>Apollo.io</th>
              </tr>
            </thead>
            <tbody>
              {comparisonMatrix.map((row, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <td style={{ padding: '1.1rem 1rem' }}>
                    <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.95rem' }}>{row.feature}</div>
                    <div style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>{row.note}</div>
                  </td>

                  {/* Growixa Column */}
                  <td style={{ padding: '1.1rem 1rem', textAlign: 'center', background: 'rgba(16, 185, 129, 0.06)' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.2)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#34D399' }}>
                      <Check size={18} />
                    </div>
                  </td>

                  {/* Brevo Column */}
                  <td style={{ padding: '1.1rem 1rem', textAlign: 'center' }}>
                    {row.brevo ? (
                      <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.08)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}>
                        <Check size={16} />
                      </div>
                    ) : (
                      <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(239, 68, 68, 0.1)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#EF4444' }}>
                        <X size={16} />
                      </div>
                    )}
                  </td>

                  {/* Mailchimp Column */}
                  <td style={{ padding: '1.1rem 1rem', textAlign: 'center' }}>
                    {row.mailchimp ? (
                      <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.08)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}>
                        <Check size={16} />
                      </div>
                    ) : (
                      <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(239, 68, 68, 0.1)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#EF4444' }}>
                        <X size={16} />
                      </div>
                    )}
                  </td>

                  {/* Apollo Column */}
                  <td style={{ padding: '1.1rem 1rem', textAlign: 'center' }}>
                    {row.apollo ? (
                      <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.08)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}>
                        <Check size={16} />
                      </div>
                    ) : (
                      <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(239, 68, 68, 0.1)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#EF4444' }}>
                        <X size={16} />
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Footer Callout */}
          <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Ready to migrate your existing campaigns and lists with zero downtime?
            </span>
            <button onClick={openBookingModal} className="btn-primary" style={{ padding: '0.65rem 1.5rem', fontSize: '0.9rem' }}>
              <span>Migrate to Growixa Free</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
