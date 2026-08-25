import React, { useState } from 'react';
import { 
  Sparkles, 
  Bot, 
  Send, 
  Copy, 
  Check, 
  ShieldCheck, 
  Cpu, 
  RefreshCw, 
  Mail, 
  Share2, 
  MessageSquare,
  Zap
} from 'lucide-react';

export default function AISimulator() {
  const [selectedChannel, setSelectedChannel] = useState('email');
  const [prompt, setPrompt] = useState('Announce our new AI-driven product launch to SaaS founders');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [generatedOutput, setGeneratedOutput] = useState({
    subject: '🚀 Introducing Autonomous AI Marketing: Scale Revenue 4x Faster',
    body: `Hey SaaS Founder,\n\nTraditional marketing automation takes months to set up. Growixa changes everything.\n\nWith high-deliverability Postmark email pipelines, rule-based audience segmentation, and Answer Engine Optimization (GEO/AEO), you can automate 80% of your growth stack on day one.\n\nReady to see your real ROI metrics?`,
    safetyScore: 99.8,
    tokensUsed: 142,
    estimatedCost: '$0.00028'
  });

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      if (selectedChannel === 'email') {
        setGeneratedOutput({
          subject: '⚡ Turn your existing leads into active revenue with Growixa AI',
          body: `Hi there,\n\nAre manual campaigns slowing down your growth pipeline?\n\nGrowixa's AI Content Assistant generates brand-compliant subject lines, email copy, and dynamic segments in seconds.\n\nSchedule your live demo today: https://growixa.ai/demo`,
          safetyScore: 100,
          tokensUsed: 128,
          estimatedCost: '$0.00025'
        });
      } else if (selectedChannel === 'linkedin') {
        setGeneratedOutput({
          subject: 'LinkedIn Thought Leadership Post',
          body: `Modern marketing isn't about sending more emails—it's about Generative Engine Optimization (GEO).\n\nHere is how top SaaS teams are outranking traditional SEO:\n\n1️⃣ Direct Answer Engine Indexing (AEO)\n2️⃣ Dynamic Audience Rule-Based Segments\n3️⃣ High-Deliverability Fernet Encrypted SMTP\n\nWhat is your #1 growth bottleneck this quarter? Let's discuss below 👇\n\n#SaaS #MarketingAutomation #AIGrowth #Growixa`,
          safetyScore: 98.6,
          tokensUsed: 186,
          estimatedCost: '$0.00037'
        });
      } else if (selectedChannel === 'twitter') {
        setGeneratedOutput({
          subject: 'Twitter/X Growth Thread (1/3)',
          body: `1/ Stop burning budget on dead email lists 🛑\n\nGrowixa auto-detects CSV attributes, deduplicates contacts, and enforces GDPR/TCPA compliance automatically.\n\n2/ Combined with AI Brand Safety rules, your copy is checked before it goes live.\n\nTry the live interactive demo at Growixa.ai ⚡`,
          safetyScore: 99.2,
          tokensUsed: 94,
          estimatedCost: '$0.00018'
        });
      } else {
        setGeneratedOutput({
          subject: 'GSM-7 Twilio SMS Broadcast',
          body: `GROWIXA ALERT: Your AI Growth Audit report is ready! Tap to view your projected 340% ROI increase: https://grw.ai/audit Reply STOP to opt out.`,
          safetyScore: 100,
          tokensUsed: 42,
          estimatedCost: '$0.00008'
        });
      }
      setIsGenerating(false);
    }, 700);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedOutput.body);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="ai-composer" style={{ padding: '6rem 0' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3.5rem auto' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-indigo)' }}>
            GRX-FEAT-021 & GRX-FEAT-022 Live Simulator
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginTop: '0.5rem', marginBottom: '1rem' }}>
            Test the <span className="gradient-text">AI Content Assistant & Brand Safety</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            Experience how Growixa's AI generates channel-optimized copy with real-time brand voice enforcement and token telemetry.
          </p>
        </div>

        {/* Sandbox Glass Panel */}
        <div className="glass-card" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', maxWidth: '1000px', margin: '0 auto' }}>
          {/* Controls Bar */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-color)' }}>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => setSelectedChannel('email')}
                className={selectedChannel === 'email' ? 'btn-primary' : 'btn-secondary'}
                style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
              >
                <Mail size={16} /> Email Campaign
              </button>
              <button
                onClick={() => setSelectedChannel('linkedin')}
                className={selectedChannel === 'linkedin' ? 'btn-primary' : 'btn-secondary'}
                style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
              >
                <Share2 size={16} /> LinkedIn Post
              </button>
              <button
                onClick={() => setSelectedChannel('twitter')}
                className={selectedChannel === 'twitter' ? 'btn-primary' : 'btn-secondary'}
                style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
              >
                <MessageSquare size={16} /> Twitter/X Thread
              </button>
              <button
                onClick={() => setSelectedChannel('sms')}
                className={selectedChannel === 'sms' ? 'btn-primary' : 'btn-secondary'}
                style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
              >
                <Zap size={16} /> SMS Broadcast
              </button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: '#34D399', background: 'rgba(16, 185, 129, 0.1)', padding: '0.35rem 0.75rem', borderRadius: 'var(--radius-full)' }}>
              <ShieldCheck size={14} /> Brand Safety Engine Active
            </div>
          </div>

          {/* Prompt Input Area */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontWeight: 600 }}>
              Input Growth Campaign Prompt or Topic:
            </label>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="form-input"
                placeholder="e.g. Announce our launch to B2B founders..."
              />
              <button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="btn-primary"
                style={{ padding: '0.75rem 1.5rem', whiteSpace: 'nowrap' }}
              >
                {isGenerating ? <RefreshCw size={18} className="animate-spin" /> : <Sparkles size={18} />}
                <span>{isGenerating ? 'Generating...' : 'Generate AI Copy'}</span>
              </button>
            </div>
          </div>

          {/* Generated Output Preview Box */}
          <div style={{
            background: 'rgba(9, 13, 22, 0.9)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-color)',
            padding: '1.5rem',
            position: 'relative'
          }}>
            {/* Header bar of preview box */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.06)', paddingBottom: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Bot size={18} color="var(--accent-indigo)" />
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {generatedOutput.subject}
                </span>
              </div>
              <button
                onClick={copyToClipboard}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: copied ? 'var(--accent-emerald)' : 'var(--text-muted)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  fontSize: '0.8rem'
                }}
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            {/* Generated Content Text */}
            <pre style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.95rem',
              color: 'var(--text-primary)',
              whiteSpace: 'pre-wrap',
              lineHeight: 1.6,
              margin: 0
            }}>
              {generatedOutput.body}
            </pre>

            {/* Telemetry Footer Bar (GRX-FEAT-023 Spec) */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
              marginTop: '1.5rem',
              paddingTop: '1rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.06)',
              fontSize: '0.775rem',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-mono)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span>🛡️ Brand Safety: <strong style={{ color: '#34D399' }}>{generatedOutput.safetyScore}% Approved</strong></span>
                <span>⚡ Token Telemetry: <strong style={{ color: 'var(--text-primary)' }}>{generatedOutput.tokensUsed} Tokens</strong></span>
              </div>
              <div>
                <span>Est. Provider Cost: <strong style={{ color: 'var(--accent-emerald)' }}>{generatedOutput.estimatedCost}</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
