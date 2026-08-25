import React, { useState } from 'react';
import { 
  Search, 
  CheckCircle2, 
  ShieldCheck, 
  Mail, 
  Users, 
  Building, 
  RefreshCw, 
  Copy, 
  Check,
  Zap,
  Lock,
  Download
} from 'lucide-react';

export default function LeadFinderSandbox() {
  const [domain, setDomain] = useState('techscale.io');
  const [targetRole, setTargetRole] = useState('Head of Growth');
  const [isSearching, setIsSearching] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const [results, setResults] = useState([
    {
      name: 'Sarah Jenkins',
      title: 'VP of Growth & Marketing',
      email: 's.jenkins@techscale.io',
      phone: '+1 (415) 890-2341',
      location: 'San Francisco, CA',
      smtpStatus: 'VERIFIED',
      deliverabilityScore: 99.8,
      creditsUsed: 1
    },
    {
      name: 'Marcus Vance',
      title: 'Chief Marketing Officer',
      email: 'marcus@techscale.io',
      phone: '+1 (415) 890-5612',
      location: 'San Francisco, CA',
      smtpStatus: 'VERIFIED',
      deliverabilityScore: 100.0,
      creditsUsed: 1
    },
    {
      name: 'Elena Rostova',
      title: 'Head of Demand Generation',
      email: 'e.rostova@techscale.io',
      phone: '+1 (415) 890-9942',
      location: 'Austin, TX',
      smtpStatus: 'VERIFIED',
      deliverabilityScore: 99.4,
      creditsUsed: 1
    }
  ]);

  const handleSearch = (e) => {
    e.preventDefault();
    setIsSearching(true);
    setTimeout(() => {
      const cleanDomain = domain.replace('https://', '').replace('http://', '').split('/')[0] || 'company.com';
      setResults([
        {
          name: 'Alex Mercer',
          title: targetRole || 'VP of Marketing',
          email: `a.mercer@${cleanDomain}`,
          phone: '+1 (415) 782-9910',
          location: 'San Francisco, CA',
          smtpStatus: 'VERIFIED',
          deliverabilityScore: 99.9,
          creditsUsed: 1
        },
        {
          name: 'Samantha Ray',
          title: 'Director of Growth Engineering',
          email: `s.ray@${cleanDomain}`,
          phone: '+1 (415) 782-4421',
          location: 'New York, NY',
          smtpStatus: 'VERIFIED',
          deliverabilityScore: 99.5,
          creditsUsed: 1
        },
        {
          name: 'David Chen',
          title: 'Head of Product Marketing',
          email: `d.chen@${cleanDomain}`,
          phone: '+1 (415) 782-1133',
          location: 'Seattle, WA',
          smtpStatus: 'VERIFIED',
          deliverabilityScore: 99.7,
          creditsUsed: 1
        }
      ]);
      setIsSearching(false);
    }, 750);
  };

  const handleCopy = (email, idx) => {
    navigator.clipboard.writeText(email);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="prospecting" style={{ padding: '6rem 0', background: '#030712', borderTop: '1px solid rgba(255, 255, 255, 0.1)', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3.5rem auto' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#00F0FF' }}>
            GrowthToolkit Prospecting Sandbox
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginTop: '0.5rem', marginBottom: '1rem', color: '#FFFFFF' }}>
            B2B Executive Email <span style={{ color: '#00F0FF' }}>Finder & SMTP Verifier</span>
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '1.1rem' }}>
            Search any target company domain to find verified executive contacts with zero bounce rate guarantee.
          </p>
        </div>

        {/* Sandbox Dark Cyber Card */}
        <div style={{ background: '#0B1120', padding: '2.5rem', borderRadius: 'var(--radius-lg)', maxWidth: '1080px', margin: '0 auto', border: '1px solid rgba(0, 240, 255, 0.3)', boxShadow: '0 0 40px rgba(0, 240, 255, 0.15)' }}>
          
          {/* Search Form Controls */}
          <form onSubmit={handleSearch} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', alignItems: 'flex-end', marginBottom: '2rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#F8FAFC', marginBottom: '0.4rem' }}>
                Target Company Domain:
              </label>
              <div style={{ position: 'relative' }}>
                <Building size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#64748B' }} />
                <input
                  type="text"
                  required
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem 0.75rem 2.5rem',
                    background: '#030712',
                    border: '1px solid rgba(0, 240, 255, 0.4)',
                    borderRadius: 'var(--radius-sm)',
                    color: '#FFFFFF',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.95rem',
                    outline: 'none'
                  }}
                  placeholder="e.g. stripe.com"
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#F8FAFC', marginBottom: '0.4rem' }}>
                Target Job Role / Title:
              </label>
              <select
                value={targetRole}
                onChange={(e) => setTargetRole(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  background: '#030712',
                  border: '1px solid rgba(0, 240, 255, 0.4)',
                  borderRadius: 'var(--radius-sm)',
                  color: '#FFFFFF',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.95rem',
                  outline: 'none'
                }}
              >
                <option value="Head of Growth" style={{ background: '#030712', color: '#FFFFFF' }}>Head of Growth / Marketing</option>
                <option value="Chief Executive Officer (CEO)" style={{ background: '#030712', color: '#FFFFFF' }}>CEO / Founder</option>
                <option value="VP of Sales" style={{ background: '#030712', color: '#FFFFFF' }}>VP of Sales / Business Dev</option>
                <option value="Chief Technology Officer (CTO)" style={{ background: '#030712', color: '#FFFFFF' }}>CTO / VP Engineering</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={isSearching}
              style={{
                background: 'linear-gradient(135deg, #00F0FF 0%, #3B82F6 100%)',
                color: '#030712',
                fontWeight: 800,
                padding: '0.75rem 1.5rem',
                borderRadius: 'var(--radius-sm)',
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                height: '44px',
                boxShadow: '0 0 20px rgba(0, 240, 255, 0.4)'
              }}
            >
              {isSearching ? <RefreshCw size={18} className="animate-spin" /> : <Search size={18} />}
              <span>{isSearching ? 'Deep Searching...' : 'Deep Search Leads'}</span>
            </button>
          </form>

          {/* Results Table (Bright White Text & Cyber Style) */}
          <div style={{ background: '#030712', borderRadius: 'var(--radius-md)', border: '1px solid rgba(0, 240, 255, 0.3)', padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ShieldCheck size={18} color="#34D399" />
                <span style={{ fontSize: '0.95rem', fontWeight: 800, color: '#FFFFFF' }}>
                  Verified B2B Decision Makers ({results.length} Contacts Found)
                </span>
              </div>

              <div style={{ fontSize: '0.8rem', color: '#34D399', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
                ⚡ SMTP Real-Time Verification: ACTIVE
              </div>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ fontSize: '0.8rem', color: '#94A3B8', textTransform: 'uppercase', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', letterSpacing: '0.05em' }}>
                    <th style={{ padding: '0.75rem', color: '#CBD5E1' }}>Contact Name</th>
                    <th style={{ padding: '0.75rem', color: '#CBD5E1' }}>Title & Location</th>
                    <th style={{ padding: '0.75rem', color: '#CBD5E1' }}>Verified Email</th>
                    <th style={{ padding: '0.75rem', color: '#CBD5E1' }}>Phone Number</th>
                    <th style={{ padding: '0.75rem', textAlign: 'center', color: '#CBD5E1' }}>SMTP Status</th>
                    <th style={{ padding: '0.75rem', textAlign: 'right', color: '#CBD5E1' }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((item, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                      {/* Name */}
                      <td style={{ padding: '1rem 0.75rem', fontWeight: 800, color: '#FFFFFF', fontSize: '0.95rem' }}>
                        {item.name}
                      </td>

                      {/* Title & Location */}
                      <td style={{ padding: '1rem 0.75rem', fontSize: '0.875rem' }}>
                        <div style={{ color: '#F8FAFC', fontWeight: 600 }}>{item.title}</div>
                        <div style={{ color: '#94A3B8', fontSize: '0.775rem' }}>{item.location}</div>
                      </td>

                      {/* Verified Email */}
                      <td style={{ padding: '1rem 0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#34D399', fontWeight: 700 }}>
                        {item.email}
                      </td>

                      {/* Phone Number */}
                      <td style={{ padding: '1rem 0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#F1F5F9' }}>
                        {item.phone}
                      </td>

                      {/* SMTP Status Pill */}
                      <td style={{ padding: '1rem 0.75rem', textAlign: 'center' }}>
                        <span style={{
                          background: 'rgba(52, 211, 153, 0.15)',
                          color: '#34D399',
                          border: '1px solid rgba(52, 211, 153, 0.4)',
                          padding: '0.25rem 0.65rem',
                          borderRadius: 'var(--radius-full)',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.3rem'
                        }}>
                          <CheckCircle2 size={12} /> {item.deliverabilityScore}%
                        </span>
                      </td>

                      {/* Copy Action Button */}
                      <td style={{ padding: '1rem 0.75rem', textAlign: 'right' }}>
                        <button
                          onClick={() => handleCopy(item.email, idx)}
                          style={{
                            background: copiedIndex === idx ? '#34D399' : 'rgba(0, 240, 255, 0.15)',
                            color: copiedIndex === idx ? '#030712' : '#00F0FF',
                            border: '1px solid #00F0FF',
                            padding: '0.4rem 0.85rem',
                            borderRadius: '6px',
                            fontSize: '0.8rem',
                            fontWeight: 700,
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.35rem',
                            transition: 'all 0.2s ease'
                          }}
                        >
                          {copiedIndex === idx ? <Check size={14} /> : <Copy size={14} />}
                          <span>{copiedIndex === idx ? 'Copied' : 'Copy'}</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Wallet credit usage info footer (Bright White & Cyan Text) */}
            <div style={{ marginTop: '1.25rem', paddingTop: '0.85rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.85rem', color: '#E2E8F0', flexWrap: 'wrap', gap: '0.5rem' }}>
              <span style={{ color: '#F1F5F9', fontWeight: 500 }}>
                GrowthToolkit Credit Model: Pay only for 100% verified SMTP deliverability.
              </span>
              <span style={{ color: '#00F0FF', fontWeight: 800, fontFamily: 'var(--font-mono)' }}>
                Available Free Test Credits: 500 / 500
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
