import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';

export default function FAQAccordion() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'How does Growixa guarantee 99.8% email deliverability?',
      a: 'Growixa uses direct Postmark API integration combined with Fernet encrypted SMTP credentials and automated background workers. Every email list is pre-cleansed through our automated deduplication engine and real-time SMTP verification, filtering out invalid or dormant addresses before sending.'
    },
    {
      q: 'How does the B2B Prospecting & Credit Wallet work?',
      a: 'Similar to GrowthToolkit.io, Growixa provides a pay-as-you-go credit wallet system alongside monthly plans. 1 credit unlocks 1 fully verified executive email and phone contact with zero bounce guarantee. Unused credits roll over infinitely with no monthly expiration lock-in.'
    },
    {
      q: 'Is Growixa fully compliant with GDPR and TCPA privacy regulations?',
      a: 'Yes! Growixa includes an automated Consent & Suppression Engine (GRX-FEAT-010) that tracks opt-in consent history, handles 1-click unsubscribe headers, and automatically enforces global email and phone suppression lists across all campaign channels.'
    },
    {
      q: 'Can I integrate my existing CRM, Shopify, or custom app via API?',
      a: 'Absolutely. Growixa provides RESTful API endpoints and Postmark delivery webhooks for instant event streaming. You can connect your existing tech stack or trigger automated transactional emails directly from your application.'
    },
    {
      q: 'What makes Growixa Autonomous AI Growth Agents different?',
      a: 'Unlike generic copy generators, Growixa AI Agents enforce a mandatory Brand Voice & Safety Engine (GRX-FEAT-022). All AI-generated subject lines, social posts, and email copy are checked against your forbidden compliance claims and require manager approval before going live.'
    }
  ];

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" style={{ padding: '6rem 0', background: 'rgba(15, 23, 42, 0.4)', borderTop: '1px solid var(--border-color)' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-indigo)' }}>
            Got Questions?
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginTop: '0.5rem', marginBottom: '1rem' }}>
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            Everything you need to know about Growixa's email deliverability, B2B lead search, and AI safety engine.
          </p>
        </div>

        {/* Accordions List */}
        <div>
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="accordion-item" style={{ borderColor: isOpen ? 'var(--accent-emerald)' : 'var(--border-color)' }}>
                <div 
                  className="accordion-header"
                  onClick={() => toggle(idx)}
                >
                  <span style={{ color: isOpen ? 'var(--text-primary)' : 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <HelpCircle size={18} color={isOpen ? 'var(--accent-emerald)' : 'var(--text-muted)'} />
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s',
                      color: isOpen ? 'var(--accent-emerald)' : 'var(--text-muted)'
                    }}
                  />
                </div>

                {isOpen && (
                  <div className="accordion-body animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
