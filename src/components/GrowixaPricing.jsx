import React, { useState } from 'react';
import { 
  Check, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Globe,
  Sliders,
  DollarSign,
  HelpCircle
} from 'lucide-react';

export default function GrowixaPricing({ openBookingModal }) {
  const [annualBilling, setAnnualBilling] = useState(true);
  const [currency, setCurrency] = useState('INR'); // 'INR' or 'USD'
  const [activePlanTab, setActivePlanTab] = useState('Starter');
  const [emailVolumeIndex, setEmailVolumeIndex] = useState(0); // 0 = 5k, 1 = 10k, 2 = 15k, 3 = 20k, 4 = 30k, 5 = 50k, 6 = 100k
  const [removeBranding, setRemoveBranding] = useState(false);

  const emailSteps = [
    { label: '5k', count: 5000, priceUSD: 13.50, priceINR: 562.50 },
    { label: '10k', count: 10000, priceUSD: 21.00, priceINR: 925.00 },
    { label: '15k', count: 15000, priceUSD: 29.00, priceINR: 1210.50 },
    { label: '20k', count: 20000, priceUSD: 37.00, priceINR: 1650.00 },
    { label: '30k', count: 30000, priceUSD: 49.00, priceINR: 2150.00 },
    { label: '50k', count: 50000, priceUSD: 69.00, priceINR: 3100.00 },
    { label: '100k+', count: 100000, priceUSD: 119.00, priceINR: 5400.00 }
  ];

  const currentStep = emailSteps[emailVolumeIndex];

  // Base Plan Prices (Yearly Rates)
  const basePrices = {
    USD: {
      Starter: currentStep.priceUSD,
      Standard: 22.50,
      Professional: 449.00,
      Enterprise: 'Custom'
    },
    INR: {
      Starter: currentStep.priceINR,
      Standard: 1210.50,
      Professional: 40212.42,
      Enterprise: 'Custom'
    }
  };

  const brandingCost = currency === 'USD' ? 8.00 : 675.00;
  const rawPrice = basePrices[currency][activePlanTab];
  const totalPrice = typeof rawPrice === 'number' 
    ? rawPrice + (removeBranding ? brandingCost : 0) 
    : 'Custom';

  const formatPrice = (val) => {
    if (typeof val === 'string') return val;
    if (currency === 'INR') {
      return `₹${val.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
    return `$${val.toFixed(2)}`;
  };

  const plans = [
    {
      name: 'Starter',
      badge: 'Single Users',
      desc: 'Best for single users starting with email and multi-channel marketing.',
      ctaText: 'Sign up',
      highlighted: false
    },
    {
      name: 'Standard',
      badge: 'Most Popular',
      desc: 'Best for small businesses ready to automate and test campaigns.',
      ctaText: 'Sign up',
      highlighted: true
    },
    {
      name: 'Professional',
      badge: 'Data & AI Teams',
      desc: 'Best for teams leveraging data and AI to drive growth across channels.',
      ctaText: 'Talk to sales',
      highlighted: false
    },
    {
      name: 'Enterprise',
      badge: 'Custom Solutions',
      desc: 'Best for companies with 1M+ contacts needing custom solutions & full data control.',
      ctaText: 'Talk to sales',
      highlighted: false
    }
  ];

  return (
    <section id="pricing" style={{ padding: '6rem 0', background: 'var(--bg-primary)' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3rem auto' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#0B996E' }}>
            Growixa Official Pricing Matrix (growixa.com/pricing/)
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginTop: '0.5rem', marginBottom: '1rem' }}>
            Simple, Predictable <span style={{ color: '#0B996E' }}>Plans for Every Stage</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            Pay for the emails you send, not the size of your contact list. Unused capacity rolls over smoothly.
          </p>

          {/* Top Banner Card */}
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
              <a href="#checklist" style={{ color: '#0B996E', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <span>See all features</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Billing Switcher & Currency Selector */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.5rem',
            marginTop: '2.5rem',
            flexWrap: 'wrap'
          }}>
            {/* Monthly / Yearly (-10%) Toggle */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: '#F3F4F6',
              padding: '0.35rem 0.5rem',
              borderRadius: 'var(--radius-full)'
            }}>
              <button
                onClick={() => setAnnualBilling(false)}
                style={{
                  background: !annualBilling ? '#FFFFFF' : 'transparent',
                  color: !annualBilling ? '#111827' : '#6B7280',
                  boxShadow: !annualBilling ? '0 2px 5px rgba(0, 0, 0, 0.1)' : 'none',
                  border: 'none',
                  padding: '0.45rem 1.15rem',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: 700,
                  fontSize: '0.875rem',
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
                  padding: '0.45rem 1.15rem',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  cursor: 'pointer'
                }}
              >
                Yearly (-10%)
              </button>
            </div>

            {/* Currency Selector (USD vs INR) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: '#F3F4F6', padding: '0.35rem 0.75rem', borderRadius: 'var(--radius-full)', fontSize: '0.875rem', fontWeight: 700, color: '#374151' }}>
              <Globe size={16} color="#0B996E" />
              <span>Currency:</span>
              <button 
                onClick={() => setCurrency('INR')}
                style={{ background: currency === 'INR' ? '#0B996E' : 'transparent', color: currency === 'INR' ? '#FFFFFF' : '#6B7280', border: 'none', padding: '0.2rem 0.5rem', borderRadius: '4px', cursor: 'pointer', fontWeight: 700 }}
              >
                INR ₹
              </button>
              <button 
                onClick={() => setCurrency('USD')}
                style={{ background: currency === 'USD' ? '#0B996E' : 'transparent', color: currency === 'USD' ? '#FFFFFF' : '#6B7280', border: 'none', padding: '0.2rem 0.5rem', borderRadius: '4px', cursor: 'pointer', fontWeight: 700 }}
              >
                USD $
              </button>
            </div>
          </div>
        </div>

        {/* 4 Plan Cards Summary */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '4rem', alignItems: 'stretch' }}>
          {plans.map((p, idx) => {
            const pPrice = basePrices[currency][p.name];
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '2rem 1.5rem',
                  borderRadius: '16px',
                  border: p.highlighted ? '2px solid #0B996E' : '1px solid var(--border-color)',
                  boxShadow: p.highlighted ? '0 12px 30px rgba(11, 153, 110, 0.15)' : 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative'
                }}
              >
                {p.highlighted && (
                  <div style={{ position: 'absolute', top: '-13px', left: '50%', transform: 'translateX(-50%)', background: '#0B996E', color: '#FFFFFF', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', padding: '0.2rem 0.85rem', borderRadius: 'var(--radius-full)' }}>
                    {p.badge}
                  </div>
                )}

                <div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#111827', marginBottom: '0.4rem' }}>{p.name}</h3>
                  <p style={{ color: '#6B7280', fontSize: '0.825rem', marginBottom: '1.25rem', minHeight: '38px' }}>{p.desc}</p>
                  
                  <div style={{ marginBottom: '1.5rem' }}>
                    <div style={{ fontSize: '1.85rem', fontWeight: 800, color: '#111827' }}>
                      {formatPrice(pPrice)}
                    </div>
                    <span style={{ fontSize: '0.75rem', color: '#6B7280' }}>per month</span>
                  </div>
                </div>

                <button onClick={openBookingModal} className={p.name === 'Enterprise' || p.name === 'Professional' ? 'btn-secondary' : 'btn-primary'} style={{ width: '100%', justifyContent: 'center', borderRadius: '8px', padding: '0.7rem' }}>
                  <span>{p.ctaText}</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Interactive Monthly Email Volume Slider Calculator */}
        <div className="glass-card" style={{ padding: '2.5rem', borderRadius: '20px', border: '1px solid rgba(11, 153, 110, 0.3)', marginBottom: '5rem', background: '#FFFFFF', boxShadow: '0 15px 35px rgba(0, 0, 0, 0.05)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            
            {/* Left Column: Slider Controls */}
            <div>
              <span className="status-pill status-pill-done" style={{ fontSize: '0.75rem', marginBottom: '0.75rem' }}>
                Interactive Price Calculator
              </span>
              
              {/* Plan Tabs */}
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem' }}>
                {['Free', 'Starter', 'Standard', 'Professional'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActivePlanTab(tab)}
                    style={{
                      background: activePlanTab === tab ? '#0B996E' : '#F3F4F6',
                      color: activePlanTab === tab ? '#FFFFFF' : '#4B5563',
                      border: 'none',
                      padding: '0.5rem 1rem',
                      borderRadius: '8px',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      cursor: 'pointer'
                    }}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Email Volume Title & Count */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#111827' }}>Monthly email volume</span>
                <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0B996E' }}>
                  {currentStep.count.toLocaleString()} emails/month
                </span>
              </div>

              {/* Slider Component */}
              <input
                type="range"
                min={0}
                max={emailSteps.length - 1}
                value={emailVolumeIndex}
                onChange={(e) => setEmailVolumeIndex(parseInt(e.target.value))}
                style={{
                  width: '100%',
                  accentColor: '#0B996E',
                  height: '8px',
                  cursor: 'pointer',
                  marginBottom: '1.5rem'
                }}
              />

              {/* Slider Labels */}
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#6B7280', fontFamily: 'var(--font-mono)' }}>
                {emailSteps.map((s, idx) => (
                  <span key={idx} style={{ color: idx === emailVolumeIndex ? '#0B996E' : '#6B7280', fontWeight: idx === emailVolumeIndex ? 800 : 400 }}>
                    {s.label}
                  </span>
                ))}
              </div>

              {/* Option Checkbox: Remove Branding */}
              <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#111827' }}>Remove Growixa branding</div>
                  <div style={{ fontSize: '0.775rem', color: '#6B7280' }}>+{formatPrice(brandingCost)} per month</div>
                </div>

                <input
                  type="checkbox"
                  checked={removeBranding}
                  onChange={(e) => setRemoveBranding(e.target.checked)}
                  style={{ width: '20px', height: '20px', accentColor: '#0B996E', cursor: 'pointer' }}
                />
              </div>
            </div>

            {/* Right Column: Live Plan Calculator Summary Card */}
            <div style={{
              background: '#F9FAFB',
              border: '1px solid #E5E7EB',
              borderRadius: '16px',
              padding: '2rem',
              textAlign: 'left'
            }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.25rem' }}>
                YOUR CALCULATED PLAN SUMMARY
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#4B5563' }}>{activePlanTab} plan base:</span>
                  <strong style={{ color: '#111827' }}>{formatPrice(rawPrice)}/mo</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#4B5563' }}>Emails included:</span>
                  <span style={{ color: '#0B996E', fontWeight: 700 }}>{currentStep.count.toLocaleString()} / mo</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#4B5563' }}>Contacts capacity:</span>
                  <span style={{ color: '#111827', fontWeight: 600 }}>Unlimited</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#4B5563' }}>Web push subscribers:</span>
                  <span style={{ color: '#111827', fontWeight: 600 }}>1,000 Included</span>
                </div>
                {removeBranding && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#0B996E' }}>
                    <span>No Growixa Branding:</span>
                    <span>+{formatPrice(brandingCost)}/mo</span>
                  </div>
                )}
              </div>

              {/* Total Price Callout */}
              <div style={{ paddingTop: '1.25rem', borderTop: '1px solid #E5E7EB', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '0.8rem', color: '#6B7280', display: 'block' }}>Total estimated price</span>
                <div style={{ fontSize: '2.25rem', fontWeight: 800, color: '#111827' }}>
                  {formatPrice(totalPrice)}<span style={{ fontSize: '1rem', color: '#6B7280' }}>/month</span>
                </div>
              </div>

              <button onClick={openBookingModal} className="btn-primary" style={{ width: '100%', justifyContent: 'center', borderRadius: '8px', padding: '0.85rem' }}>
                <span>Sign up with selected plan</span>
              </button>
            </div>

          </div>
        </div>

        {/* Detailed 4-Column Feature Comparison Checklist */}
        <div id="checklist" style={{ marginTop: '5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#111827' }}>
              Detailed Plan Feature Comparison
            </h3>
            <p style={{ color: '#6B7280', fontSize: '1rem' }}>
              Compare features included across Starter, Standard, Professional, and Enterprise tiers.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', alignItems: 'stretch' }}>
            
            {/* Column 1: Starter Checklist */}
            <div className="glass-card" style={{ padding: '1.75rem', borderRadius: '16px', background: '#FFFFFF' }}>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#111827', marginBottom: '1rem' }}>
                Features included in Starter:
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', fontSize: '0.85rem', color: '#374151' }}>
                <div>✓ From 5,000 emails per month</div>
                <div>✓ Email & SMS messaging</div>
                <div>✓ Drag & Drop email editor</div>
                <div>✓ Email templates catalog</div>
                <div style={{ color: '#0B996E', fontWeight: 700 }}>◆ AI Content Generator</div>
                <div>✓ Advanced audience segmentation</div>
                <div>✓ Web sign-up forms</div>
                <div>✓ Basic reporting & analytics</div>
                <div>✓ 24/7 Email support</div>
                <div style={{ color: '#6B7280', fontSize: '0.775rem', marginTop: '0.5rem', borderTop: '1px solid #F3F4F6', paddingTop: '0.5rem' }}>
                  ⊞ No Growixa logo (+{formatPrice(brandingCost)}/mo)
                </div>
              </div>
            </div>

            {/* Column 2: Standard Checklist */}
            <div className="glass-card" style={{ padding: '1.75rem', borderRadius: '16px', background: '#FFFFFF', border: '2px solid #0B996E' }}>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#111827', marginBottom: '1rem' }}>
                Everything in Starter, plus:
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', fontSize: '0.85rem', color: '#374151' }}>
                <div>✓ Marketing automation workflows</div>
                <div>✓ A/B variant testing</div>
                <div>✓ Advanced email reporting (Heatmaps, devices)</div>
                <div style={{ color: '#0B996E', fontWeight: 700 }}>◆ AI Send Time Optimization</div>
                <div>✓ Web & event tracking</div>
                <div>✓ Landing pages (1 page included)</div>
                <div style={{ fontWeight: 700, color: '#0B996E' }}>✓ No Growixa logo</div>
                <div>✓ Phone & live chat support</div>
              </div>
            </div>

            {/* Column 3: Professional Checklist */}
            <div className="glass-card" style={{ padding: '1.75rem', borderRadius: '16px', background: '#FFFFFF' }}>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#111827', marginBottom: '1rem' }}>
                Everything in Standard, plus:
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', fontSize: '0.85rem', color: '#374151' }}>
                <div>✓ From 150,000 emails per month</div>
                <div>✓ Additional channels (WhatsApp, Push)</div>
                <div>✓ Multi-user access (10 seats included)</div>
                <div>✓ Contact lead scoring</div>
                <div>✓ Advanced ecommerce features</div>
                <div style={{ color: '#0B996E', fontWeight: 700 }}>◆ AI Audience Segmentation</div>
                <div style={{ color: '#0B996E', fontWeight: 700 }}>◆ AI Data Analyst</div>
                <div>✓ Deliverability Specialist support</div>
              </div>
            </div>

            {/* Column 4: Enterprise Checklist */}
            <div className="glass-card" style={{ padding: '1.75rem', borderRadius: '16px', background: '#FFFFFF' }}>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#111827', marginBottom: '1rem' }}>
                Everything in Professional, plus:
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', fontSize: '0.85rem', color: '#374151' }}>
                <div>✓ Multi-account management</div>
                <div>✓ Custom database objects</div>
                <div>✓ Growixa Mobile Wallet</div>
                <div>✓ Custom loyalty engine</div>
                <div>✓ Custom data integrations</div>
                <div>✓ Dedicated IP address</div>
                <div>✓ SSO & SAML enterprise auth</div>
                <div>✓ Dedicated CSM support</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
