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
    <section id="ai-composer" style={{ padding: '6rem 0', background: '#030712', borderTop: '1px solid rgba(255, 255, 255, 0.1)', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3.5rem auto' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#00F0FF' }}>
            GRX-FEAT-021 & GRX-FEAT-022 Live Simulator
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginTop: '0.5rem', marginBottom: '1rem', color: '#FFFFFF' }}>
            Test the <span style={{ color: '#00F0FF' }}>AI Content Assistant & Brand Safety</span>
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '1.1rem' }}>
            Experience how Growixa's AI generates channel-optimized copy with real-time brand voice enforcement and token telemetry.
          </p>
        </div>

        {/* Sandbox Dark Panel */}
        <div style={{ background: '#0B1120', padding: '2rem', borderRadius: 'var(--radius-lg)', maxWidth: '1000px', margin: '0 auto', border: '1px solid rgba(0, 240, 255, 0.3)', boxShadow: '0 0 40px rgba(0, 240, 255, 0.15)' }}>
          {/* Controls Bar */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => setSelectedChannel('email')}
                style={{
                  background: selectedChannel === 'email' ? '#00F0FF' : 'rgba(255, 255, 255, 0.05)',
                  color: selectedChannel === 'email' ? '#030712' : '#FFFFFF',
                  border: '1px solid rgba(0, 240, 255, 0.4)',
                  borderRadius: '8px',
                  padding: '0.5rem 1rem',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}
              >
                <Mail size={16} /> Email Campaign
              </button>
              <button
                onClick={() => setSelectedChannel('linkedin')}
                style={{
                  background: selectedChannel === 'linkedin' ? '#00F0FF' : 'rgba(255, 255, 255, 0.05)',
                  color: selectedChannel === 'linkedin' ? '#030712' : '#FFFFFF',
                  border: '1px solid rgba(0, 240, 255, 0.4)',
                  borderRadius: '8px',
                  padding: '0.5rem 1rem',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}
              >
                <Share2 size={16} /> LinkedIn Post
              </button>
              <button
                onClick={() => setSelectedChannel('twitter')}
                style={{
                  background: selectedChannel === 'twitter' ? '#00F0FF' : 'rgba(255, 255, 255, 0.05)',
                  color: selectedChannel === 'twitter' ? '#030712' : '#FFFFFF',
                  border: '1px solid rgba(0, 240, 255, 0.4)',
                  borderRadius: '8px',
                  padding: '0.5rem 1rem',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}
              >
                <MessageSquare size={16} /> Twitter/X Thread
              </button>
              <button
                onClick={() => setSelectedChannel('sms')}
                style={{
                  background: selectedChannel === 'sms' ? '#00F0FF' : 'rgba(255, 255, 255, 0.05)',
                  color: selectedChannel === 'sms' ? '#030712' : '#FFFFFF',
                  border: '1px solid rgba(0, 240, 255, 0.4)',
                  borderRadius: '8px',
                  padding: '0.5rem 1rem',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}
              >
                <Zap size={16} /> SMS Broadcast
              </button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: '#34D399', background: 'rgba(52, 211, 153, 0.15)', padding: '0.35rem 0.75rem', borderRadius: 'var(--radius-full)', fontWeight: 700 }}>
              <ShieldCheck size={14} /> Brand Safety Engine Active
            </div>
          </div>

          {/* Prompt Input Area */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', color: '#F8FAFC', marginBottom: '0.5rem', fontWeight: 700 }}>
              Input Growth Campaign Prompt or Topic:
            </label>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
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
                placeholder="e.g. Announce our launch to B2B founders..."
              />
              <button
                onClick={handleGenerate}
                disabled={isGenerating}
                style={{
                  background: 'linear-gradient(135deg, #00F0FF 0%, #3B82F6 100%)',
                  color: '#030712',
                  fontWeight: 800,
                  padding: '0.75rem 1.5rem',
                  borderRadius: 'var(--radius-sm)',
                  border: 'none',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                {isGenerating ? <RefreshCw size={18} className="animate-spin" /> : <Sparkles size={18} />}
                <span>{isGenerating ? 'Generating...' : 'Generate AI Copy'}</span>
              </button>
            </div>
          </div>

          {/* Generated Output Preview Box (Bright Crisp White Text) */}
          <div style={{
            background: '#030712',
            borderRadius: 'var(--radius-md)',
            border: '1px solid rgba(0, 240, 255, 0.4)',
            padding: '1.5rem',
            position: 'relative'
          }}>
            {/* Header bar of preview box */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Bot size={18} color="#00F0FF" />
                <span style={{ fontSize: '0.95rem', fontWeight: 800, color: '#00F0FF' }}>
                  {generatedOutput.subject}
                </span>
              </div>
              <button
                onClick={copyToClipboard}
                style={{
                  background: copied ? '#34D399' : 'rgba(0, 240, 255, 0.15)',
                  border: '1px solid #00F0FF',
                  color: copied ? '#030712' : '#00F0FF',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  padding: '0.35rem 0.75rem',
                  borderRadius: '6px'
                }}
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            {/* Generated Content Text (Crisp Pure White Text) */}
            <pre style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1rem',
              color: '#FFFFFF',
              fontWeight: 500,
              whiteSpace: 'pre-wrap',
              lineHeight: 1.7,
              margin: 0
            }}>
              {generatedOutput.body}
            </pre>

            {/* Telemetry Footer Bar */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
              marginTop: '1.5rem',
              paddingTop: '1rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              fontSize: '0.8rem',
              color: '#94A3B8',
              fontFamily: 'var(--font-mono)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span>🛡️ Brand Safety: <strong style={{ color: '#34D399' }}>{generatedOutput.safetyScore}% Approved</strong></span>
                <span>⚡ Token Telemetry: <strong style={{ color: '#FFFFFF' }}>{generatedOutput.tokensUsed} Tokens</strong></span>
              </div>
              <div>
                <span>Est. Provider Cost: <strong style={{ color: '#34D399' }}>{generatedOutput.estimatedCost}</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
