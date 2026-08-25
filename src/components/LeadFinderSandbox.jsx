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
    <section id="prospecting" style={{ padding: '6rem 0', background: 'rgba(15, 23, 42, 0.4)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3.5rem auto' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-indigo)' }}>
            GrowthToolkit-Style Prospecting Sandbox
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginTop: '0.5rem', marginBottom: '1rem' }}>
            B2B Executive Email <span className="gradient-text">Finder & SMTP Verifier</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            Search any target company domain to find verified executive contacts with zero bounce rate guarantee.
          </p>
        </div>

        {/* Sandbox Glass Box */}
        <div className="glass-card" style={{ padding: '2.5rem', borderRadius: 'var(--radius-lg)', maxWidth: '1050px', margin: '0 auto' }}>
          {/* Search Form Controls */}
          <form onSubmit={handleSearch} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', alignItems: 'flex-end', marginBottom: '2rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                Target Company Domain:
              </label>
              <div style={{ position: 'relative' }}>
                <Building size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                <input
                  type="text"
                  required
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  className="form-input"
                  style={{ paddingLeft: '2.5rem' }}
                  placeholder="e.g. stripe.com"
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                Target Job Role / Title:
              </label>
              <select
                value={targetRole}
                onChange={(e) => setTargetRole(e.target.value)}
                className="form-input"
              >
                <option value="Head of Growth">Head of Growth / Marketing</option>
                <option value="Chief Executive Officer (CEO)">CEO / Founder</option>
                <option value="VP of Sales">VP of Sales / Business Dev</option>
                <option value="Chief Technology Officer (CTO)">CTO / VP Engineering</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={isSearching}
              className="btn-primary"
              style={{ padding: '0.75rem 1.5rem', justifyContent: 'center', height: '44px' }}
            >
              {isSearching ? <RefreshCw size={18} className="animate-spin" /> : <Search size={18} />}
              <span>{isSearching ? 'Deep Searching...' : 'Deep Search Leads'}</span>
            </button>
          </form>

          {/* Results Table */}
          <div style={{ background: 'rgba(9, 13, 22, 0.9)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ShieldCheck size={18} color="#34D399" />
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  Verified B2B Decision Makers ({results.length} Contacts Found)
                </span>
              </div>

              <div style={{ fontSize: '0.8rem', color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)' }}>
                ⚡ SMTP Real-Time Verification: ACTIVE
              </div>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <th style={{ padding: '0.75rem' }}>Contact Name</th>
                    <th style={{ padding: '0.75rem' }}>Title & Location</th>
                    <th style={{ padding: '0.75rem' }}>Verified Email</th>
                    <th style={{ padding: '0.75rem' }}>Phone Number</th>
                    <th style={{ padding: '0.75rem', textAlign: 'center' }}>SMTP Status</th>
                    <th style={{ padding: '0.75rem', textAlign: 'right' }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((item, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)' }}>
                      <td style={{ padding: '1rem 0.75rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                        {item.name}
                      </td>
                      <td style={{ padding: '1rem 0.75rem', fontSize: '0.875rem' }}>
                        <div style={{ color: 'var(--text-primary)' }}>{item.title}</div>
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.775rem' }}>{item.location}</div>
                      </td>
                      <td style={{ padding: '1rem 0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent-emerald)' }}>
                        {item.email}
                      </td>
                      <td style={{ padding: '1rem 0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                        {item.phone}
                      </td>
                      <td style={{ padding: '1rem 0.75rem', textAlign: 'center' }}>
                        <span className="status-pill status-pill-done" style={{ fontSize: '0.7rem' }}>
                          <CheckCircle2 size={12} /> {item.deliverabilityScore}%
                        </span>
                      </td>
                      <td style={{ padding: '1rem 0.75rem', textAlign: 'right' }}>
                        <button
                          onClick={() => handleCopy(item.email, idx)}
                          className="btn-secondary"
                          style={{ padding: '0.35rem 0.75rem', fontSize: '0.775rem' }}
                        >
                          {copiedIndex === idx ? <Check size={12} /> : <Copy size={12} />}
                          <span>{copiedIndex === idx ? 'Copied' : 'Copy'}</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Wallet credit usage info */}
            <div style={{ marginTop: '1.25rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              <span>GrowthToolkit Credit Model: Pay only for 100% verified SMTP deliverability.</span>
              <span style={{ color: 'var(--accent-indigo)', fontWeight: 600 }}>Available Free Test Credits: 500 / 500</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
