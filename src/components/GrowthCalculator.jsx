import React, { useState } from 'react';
import {
  Calculator,
  TrendingUp,
  DollarSign,
  Users,
  Mail,
  Zap,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

export default function GrowthCalculator({ openBookingModal }) {
  const [emailVolume, setEmailVolume] = useState(50000);
  const [currentLeads, setCurrentLeads] = useState(15000);
  const [avgCustomerValue, setAvgCustomerValue] = useState(250);

  // Growth formulas based on Growixa high-deliverability Postmark pipeline + rule-based CRM segments
  const deliverabilityBoostRate = 0.998; // 99.8% Postmark Fernet delivery
  const estimatedOpens = Math.round(emailVolume * deliverabilityBoostRate * 0.42); // 42% open rate with AI subject lines
  const estimatedClicks = Math.round(estimatedOpens * 0.18); // 18% CTR with dynamic AI copy
  const estimatedConversions = Math.round(estimatedClicks * 0.08); // 8% conversion rate
  const projectedMonthlyRevenue = estimatedConversions * avgCustomerValue;
  const cacReductionPercent = Math.min(48, Math.round(emailVolume / 2000 + 20));

  return (
    <section id="calculator" style={{ padding: '6rem 0' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3.5rem auto' }}>
          <span
            style={{
              fontSize: '0.85rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--accent-emerald)',
            }}
          >
            Interactive ROI Growth Simulator
          </span>
          <h2
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              marginTop: '0.5rem',
              marginBottom: '1rem',
            }}
          >
            Calculate Your <span className="gradient-text">Growixa Revenue Impact</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            Estimate how high-deliverability email pipelines, dynamic CRM segmentation, and AI brand
            copy accelerate your monthly recurring revenue.
          </p>
        </div>

        {/* Calculator Grid Container */}
        <div
          className="glass-card"
          style={{
            padding: '2.5rem',
            borderRadius: 'var(--radius-lg)',
            maxWidth: '1050px',
            margin: '0 auto',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3rem',
              alignItems: 'center',
            }}
          >
            {/* Sliders Input Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* Slider 1: Monthly Email Volume */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '0.5rem',
                  }}
                >
                  <label
                    style={{
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <Mail size={16} color="var(--accent-emerald)" /> Monthly Email Campaign Volume:
                  </label>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      color: 'var(--accent-emerald)',
                    }}
                  >
                    {emailVolume.toLocaleString()} emails/mo
                  </span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="500000"
                  step="5000"
                  value={emailVolume}
                  onChange={(e) => setEmailVolume(Number(e.target.value))}
                  style={{
                    width: '100%',
                    height: '8px',
                    borderRadius: '4px',
                    accentColor: 'var(--accent-emerald)',
                    cursor: 'pointer',
                  }}
                />
              </div>

              {/* Slider 2: Active Contact Leads */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '0.5rem',
                  }}
                >
                  <label
                    style={{
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <Users size={16} color="var(--accent-indigo)" /> Active CRM Contact Audience:
                  </label>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      color: 'var(--accent-indigo)',
                    }}
                  >
                    {currentLeads.toLocaleString()} contacts
                  </span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="100000"
                  step="1000"
                  value={currentLeads}
                  onChange={(e) => setCurrentLeads(Number(e.target.value))}
                  style={{
                    width: '100%',
                    height: '8px',
                    borderRadius: '4px',
                    accentColor: 'var(--accent-indigo)',
                    cursor: 'pointer',
                  }}
                />
              </div>

              {/* Slider 3: Average Customer LTV / Order Value */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '0.5rem',
                  }}
                >
                  <label
                    style={{
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <DollarSign size={16} color="var(--accent-violet)" /> Avg Customer Lifetime
                    Value (LTV):
                  </label>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      color: 'var(--accent-violet)',
                    }}
                  >
                    ${avgCustomerValue} USD
                  </span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="2000"
                  step="50"
                  value={avgCustomerValue}
                  onChange={(e) => setAvgCustomerValue(Number(e.target.value))}
                  style={{
                    width: '100%',
                    height: '8px',
                    borderRadius: '4px',
                    accentColor: 'var(--accent-violet)',
                    cursor: 'pointer',
                  }}
                />
              </div>
            </div>

            {/* Live Projected Revenue Card Output */}
            <div
              style={{
                background:
                  'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(99, 102, 241, 0.15) 100%)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(16, 185, 129, 0.4)',
                padding: '2rem',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '1.5rem',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  Projected Monthly Revenue Run-Rate
                </span>
                <div
                  style={{
                    fontSize: 'clamp(2.5rem, 4vw, 3.25rem)',
                    fontWeight: 800,
                    color: '#34D399',
                    margin: '0.5rem 0',
                  }}
                >
                  ${projectedMonthlyRevenue.toLocaleString()}{' '}
                  <span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>/mo</span>
                </div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block' }}>
                  Based on 99.8% deliverability + 42% open rate benchmarks
                </span>
              </div>

              {/* Sub Metrics Breakdown */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                  fontSize: '0.85rem',
                }}
              >
                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block' }}>
                    Est. Monthly Conversions
                  </span>
                  <strong style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>
                    {estimatedConversions} Sales
                  </strong>
                </div>
                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block' }}>
                    CAC Reduction
                  </span>
                  <strong style={{ fontSize: '1.2rem', color: 'var(--accent-emerald)' }}>
                    -{cacReductionPercent}% Cost
                  </strong>
                </div>
              </div>

              <button
                onClick={openBookingModal}
                className="btn-primary"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  padding: '0.85rem 1.5rem',
                  fontSize: '1rem',
                }}
              >
                <span>Unlock Growth Pipeline</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
