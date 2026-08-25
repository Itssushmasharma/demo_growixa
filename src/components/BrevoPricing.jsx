import React, { useState } from 'react';
import { 
  Check, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Heart
} from 'lucide-react';

export default function BrevoPricing({ openBookingModal }) {
  const [annualBilling, setAnnualBilling] = useState(true);

  const plans = [
    {
      name: 'Starter',
      badge: 'Single Users',
      priceMonthly: 15,
      priceAnnual: 13,
      description: 'Best for single users starting with email and multi-channel marketing.',
      features: [
        '5,000 emails/mo included (expandable)',
        'No daily sending limits',
        'Email marketing & html template builder',
        'Transactional email (Postmark relay)',
        'Basic audience CRM & contact deduplication',
        'GDPR & TCPA consent suppression lists',
        '24/7 email support'
      ],
      ctaText: 'Sign up free',
      highlighted: false
    },
    {
      name: 'Standard',
      badge: 'Most Popular',
      priceMonthly: 25,
      priceAnnual: 22,
      description: 'Best for small businesses ready to automate and test campaigns.',
      features: [
        'Everything in Starter, plus:',
        'A/B variant email testing & send-time optimization',
        'Advanced marketing automation workflows',
        'Remove Brevo/Growixa logo from emails',
        'Multi-channel SMS & WhatsApp messaging',
        'Advanced campaign reports & click telemetry',
        'Phone & live chat support'
      ],
      ctaText: 'Sign up free',
      highlighted: true
    },
    {
      name: 'Professional',
      badge: 'Data & AI Teams',
      priceMonthly: 499,
      priceAnnual: 449,
      description: 'Best for teams leveraging data and AI to drive growth across channels.',
      features: [
        'Everything in Standard, plus:',
        'AI Content Assistant & Brand Voice Safety engine',
        'Growixa Data Platform (CDP) & dynamic rules',
        'Sub-account multi-tenant isolation (`account_id`)',
        'Dedicated IP address & warm-up management',
        'Generative Search Optimization (GEO/AEO agents)',
        'Multi-role RBAC security management (6 roles)',
        'Dedicated success manager'
      ],
      ctaText: 'Sign up free',
      highlighted: false
    },
    {
      name: 'Enterprise',
      badge: 'Custom Solutions',
      priceMonthly: 'Custom',
      priceAnnual: 'Custom',
      description: 'Best for companies with 1M+ contacts needing custom solutions & full data control.',
      features: [
        'Everything in Professional, plus:',
        'Unlimited contact volume & custom sending limits',
        'Enterprise SLA & 99.99% uptime guarantee',
        'Insert-only security audit logs & SSO SAML auth',
        'Custom API limits & dedicated webhook pipes',
        'Tailored onboarding & engineering consulting'
      ],
      ctaText: 'Get a demo',
      highlighted: false
    }
  ];

  return (
    <section id="pricing" style={{ padding: '6rem 0', background: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3.5rem auto' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#0B996E' }}>
            Flexible Brevo Pricing
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginTop: '0.5rem', marginBottom: '1rem' }}>
            Simple, Predictable <span style={{ color: '#0B996E' }}>Plans for Every Stage</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            Pay for the emails you send, not the size of your contact list. Unused capacity rolls over smoothly.
          </p>

          {/* Top Banner Card (Photo 5 Exact Match) */}
          <div style={{
            background: 'var(--bg-hero)',
            borderRadius: '16px',
            border: '1px solid var(--border-color)',
            padding: '1.5rem 2rem',
            marginTop: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            textAlign: 'left'
          }}>
            <div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#111827' }}>
                Free forever, no credit card needed
              </h4>
              <p style={{ color: '#4B5563', fontSize: '0.95rem', marginTop: '0.2rem' }}>
                Best for individuals and solopreneurs building an online presence.
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <button onClick={openBookingModal} className="btn-primary" style={{ padding: '0.75rem 1.5rem', borderRadius: '8px' }}>
                <span>Sign up free</span>
              </button>
              <a href="#capabilities" style={{ color: '#0B996E', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <span>See all features</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Monthly / Yearly (-10%) Billing Switcher (Photo 5 Match) */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '1rem',
            background: '#F3F4F6',
            padding: '0.4rem 0.6rem',
            borderRadius: 'var(--radius-full)',
            marginTop: '2.5rem'
          }}>
            <button
              onClick={() => setAnnualBilling(false)}
              style={{
                background: !annualBilling ? '#FFFFFF' : 'transparent',
                color: !annualBilling ? '#111827' : '#6B7280',
                boxShadow: !annualBilling ? '0 2px 5px rgba(0, 0, 0, 0.1)' : 'none',
                border: 'none',
                padding: '0.5rem 1.25rem',
                borderRadius: 'var(--radius-full)',
                fontWeight: 700,
                fontSize: '0.9rem',
                cursor: 'pointer'
              }}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnualBilling(true)}
              style={{
                background: annualBilling ? '#0B996E' : 'transparent',
                color: annualBilling ? '#FFFFFF' : '#6B7280',
                border: 'none',
                padding: '0.5rem 1.25rem',
                borderRadius: 'var(--radius-full)',
                fontWeight: 700,
                fontSize: '0.9rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              <span>Yearly (-10%)</span>
            </button>
          </div>
        </div>

        {/* 4 Tiered Pricing Cards Grid (Photo 5 Match) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.75rem', alignItems: 'stretch' }}>
          {plans.map((plan, idx) => {
            const isCustom = typeof plan.priceMonthly === 'string';
            const price = annualBilling ? plan.priceAnnual : plan.priceMonthly;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '2.25rem 1.75rem',
                  borderRadius: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  border: plan.highlighted ? '2px solid #0B996E' : '1px solid var(--border-color)',
                  boxShadow: plan.highlighted ? '0 15px 35px rgba(11, 153, 110, 0.15)' : 'none',
                  background: '#FFFFFF'
                }}
              >
                {/* Most Popular Badge */}
                {plan.highlighted && (
                  <div style={{
                    position: 'absolute',
                    top: '-14px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#0B996E',
                    color: '#FFFFFF',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    padding: '0.25rem 1rem',
                    borderRadius: 'var(--radius-full)'
                  }}>
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#111827' }}>{plan.name}</h3>
                  </div>

                  <p style={{ color: '#4B5563', fontSize: '0.875rem', marginBottom: '1.5rem', minHeight: '44px' }}>
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div style={{ marginBottom: '1.75rem' }}>
                    {isCustom ? (
                      <div style={{ fontSize: '2.25rem', fontWeight: 800, color: '#111827' }}>Custom</div>
                    ) : (
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.2rem' }}>
                        <span style={{ fontSize: '2.5rem', fontWeight: 800, color: '#111827' }}>${price}</span>
                        <span style={{ color: '#6B7280', fontSize: '0.9rem' }}>/mo</span>
                      </div>
                    )}
                    <span style={{ fontSize: '0.75rem', color: '#6B7280' }}>
                      {isCustom ? 'Tailored billing for high volume' : annualBilling ? 'Billed annually' : 'Billed monthly'}
                    </span>
                  </div>

                  {/* Features */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                    {plan.features.map((f, fIdx) => (
                      <div key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem' }}>
                        <Check size={16} color="#0B996E" style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span style={{ color: '#374151', fontWeight: fIdx === 0 && plan.name !== 'Starter' ? 700 : 400 }}>
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={openBookingModal}
                  className={plan.name === 'Enterprise' ? 'btn-secondary' : 'btn-primary'}
                  style={{ width: '100%', justifyContent: 'center', borderRadius: '8px' }}
                >
                  <span>{plan.ctaText}</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
