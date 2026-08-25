import React, { useState } from 'react';
import { Sparkles, ArrowRight, X } from 'lucide-react';

export default function AnnouncementBar({ openBookingModal }) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="announcement-bar">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <span className="announcement-badge">v2.4 Release</span>
        <span>
          <strong>New:</strong> Autonomous AI Growth Agents & B2B Sales Prospecting Suite are live!
        </span>
        <button
          onClick={openBookingModal}
          style={{
            background: 'rgba(255, 255, 255, 0.2)',
            border: 'none',
            color: '#FFFFFF',
            fontWeight: 700,
            padding: '0.2rem 0.65rem',
            borderRadius: 'var(--radius-full)',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.3rem',
            fontSize: '0.775rem',
            marginLeft: '0.5rem'
          }}
        >
          <span>Claim 500 Free Credits</span>
          <ArrowRight size={12} />
        </button>
      </div>

      <button
        onClick={() => setVisible(false)}
        aria-label="Dismiss Announcement"
        style={{
          position: 'absolute',
          right: '1rem',
          background: 'transparent',
          border: 'none',
          color: '#FFFFFF',
          cursor: 'pointer',
          opacity: 0.8
        }}
      >
        <X size={16} />
      </button>
    </div>
  );
}
