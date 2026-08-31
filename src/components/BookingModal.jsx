import React, { useState } from 'react';
import {
  X,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Mail,
  User,
  Building,
  Send,
  Zap,
  ShieldCheck,
} from 'lucide-react';

export default function BookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    companyName: '',
    selectedEngine: 'Full SaaS Growth Stack',
    monthlyVolume: '50k - 250k Emails',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 2000,
        background: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
    >
      <div
        className="glass-card animate-fade-in"
        style={{
          width: '100%',
          maxWidth: '560px',
          padding: '2.25rem',
          borderRadius: 'var(--radius-lg)',
          position: 'relative',
          background: 'var(--bg-secondary)',
          border: '1px solid rgba(16, 185, 129, 0.4)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8)',
        }}
      >
        {/* Close Button */}
        <button
          onClick={handleReset}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'rgba(255, 255, 255, 0.05)',
            border: 'none',
            color: 'var(--text-secondary)',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <X size={18} />
        </button>

        {!submitted ? (
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '0.5rem',
                }}
              >
                <Zap size={20} color="var(--accent-emerald)" />
                <span
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: 'var(--accent-emerald)',
                    textTransform: 'uppercase',
                  }}
                >
                  GRX-SAAS-003 Self-Service Signup
                </span>
              </div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800 }}>
                Get Your Free <span className="gradient-text">Growixa Account</span>
              </h3>
              <p
                style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.25rem' }}
              >
                Instant access to high-deliverability email pipelines, dynamic CRM segmentation, and
                AI brand voice tools.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}
            >
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    marginBottom: '0.4rem',
                    color: 'var(--text-secondary)',
                  }}
                >
                  Full Name
                </label>
                <div style={{ position: 'relative' }}>
                  <User
                    size={16}
                    style={{
                      position: 'absolute',
                      left: '1rem',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: 'var(--text-muted)',
                    }}
                  />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Mercer"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="form-input"
                    style={{ paddingLeft: '2.5rem' }}
                  />
                </div>
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    marginBottom: '0.4rem',
                    color: 'var(--text-secondary)',
                  }}
                >
                  Work Email Address
                </label>
                <div style={{ position: 'relative' }}>
                  <Mail
                    size={16}
                    style={{
                      position: 'absolute',
                      left: '1rem',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: 'var(--text-muted)',
                    }}
                  />
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    className="form-input"
                    style={{ paddingLeft: '2.5rem' }}
                  />
                </div>
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    marginBottom: '0.4rem',
                    color: 'var(--text-secondary)',
                  }}
                >
                  Company Name
                </label>
                <div style={{ position: 'relative' }}>
                  <Building
                    size={16}
                    style={{
                      position: 'absolute',
                      left: '1rem',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: 'var(--text-muted)',
                    }}
                  />
                  <input
                    type="text"
                    required
                    placeholder="Acme SaaS Inc."
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="form-input"
                    style={{ paddingLeft: '2.5rem' }}
                  />
                </div>
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    marginBottom: '0.4rem',
                    color: 'var(--text-secondary)',
                  }}
                >
                  Primary Core Focus
                </label>
                <select
                  value={formData.selectedEngine}
                  onChange={(e) => setFormData({ ...formData, selectedEngine: e.target.value })}
                  className="form-input"
                >
                  <option value="Full SaaS Growth Stack">
                    Full SaaS Growth Stack (Email, Social, CRM, AI)
                  </option>
                  <option value="Postmark Email Pipeline">
                    Postmark & Custom SMTP Email Pipeline
                  </option>
                  <option value="Social AI Composer">Social Media Automation & AI Assistant</option>
                  <option value="Twilio SMS & WhatsApp">Bulk SMS & WhatsApp Marketing</option>
                  <option value="GEO & AEO Intelligence">
                    Answer Engine Optimization (AEO/GEO)
                  </option>
                </select>
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  padding: '0.85rem 1.5rem',
                  marginTop: '0.5rem',
                  fontSize: '1rem',
                }}
              >
                <span>Launch Trial & Request Audit</span>
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(16, 185, 129, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto',
                color: '#34D399',
              }}
            >
              <CheckCircle2 size={36} />
            </div>

            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.5rem' }}>
              Welcome to Growixa, {formData.fullName.split(' ')[0]}!
            </h3>
            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '0.95rem',
                marginBottom: '1.5rem',
                lineHeight: 1.6,
              }}
            >
              We have generated your instant platform workspace credentials for{' '}
              <strong>{formData.companyName}</strong>. Check your inbox at{' '}
              <span style={{ color: 'var(--accent-emerald)' }}>{formData.workEmail}</span> for your
              verification token link.
            </p>

            <div
              style={{
                background: 'rgba(255, 255, 255, 0.04)',
                padding: '1rem',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.85rem',
                color: 'var(--text-muted)',
                marginBottom: '1.5rem',
                fontFamily: 'var(--font-mono)',
              }}
            >
              GRX-SAAS-003 STATUS: Verification Token Dispatched (Fernet Encrypted JWT)
            </div>

            <button
              onClick={handleReset}
              className="btn-secondary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Return to Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
