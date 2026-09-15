import React, { useState, useRef } from 'react';
import confetti from 'canvas-confetti';
import { Header } from './components/Header';
import { RegisterForm } from './components/RegisterForm';
import { InvitationCard } from './components/InvitationCard';
import { ActionButtons } from './components/ActionButtons';
import { Sparkles, ShieldCheck } from 'lucide-react';

export const App: React.FC = () => {
  const [step, setStep] = useState<'form' | 'generating' | 'ready'>('form');
  const [userName, setUserName] = useState<string>('');
  const cardRef = useRef<HTMLDivElement>(null);

  const handleGenerate = (name: string) => {
    setUserName(name);
    setStep('generating');

    // Smooth elegant transition (800ms)
    setTimeout(() => {
      setStep('ready');

      // Trigger celebratory festive confetti burst
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#0066FF', '#0052CC', '#1A82FF', '#FFFFFF']
        });
      } catch (e) {
        console.log('Confetti trigger ignored:', e);
      }
    }, 700);
  };

  const handleReset = () => {
    setStep('form');
    setUserName('');
  };

  return (
    <div className="app-container">
      <div className="content-wrapper">
        {/* Institutional Header */}
        <Header />

        {/* STEP 1: WELCOME & REGISTRATION FORM */}
        {step === 'form' && (
          <RegisterForm onGenerate={handleGenerate} isLoading={false} />
        )}

        {/* STEP 2: TRANSITION LOADER */}
        {step === 'generating' && (
          <div className="glass-panel animate-fade-in" style={{ textAlign: 'center', padding: '3.5rem 1.5rem' }}>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              border: '4px solid rgba(0, 102, 255, 0.2)',
              borderTopColor: '#0066FF',
              margin: '0 auto 1.5rem auto',
              animation: 'spin 0.8s linear infinite'
            }}>
              <style>{`
                @keyframes spin {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
              `}</style>
            </div>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.4rem', fontWeight: 800, color: '#09172e', marginBottom: '8px' }}>
              Diseñando tu invitación VITA...
            </h2>
            <p style={{ fontSize: '0.925rem', color: '#64748b', fontWeight: 600 }}>
              Personalizando tarjeta para <strong>{userName}</strong>
            </p>
          </div>
        )}

        {/* STEP 3: PERSONALIZED INVITATION CARD & ACTIONS */}
        {step === 'ready' && (
          <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            {/* Success Ribbon */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(0, 102, 255, 0.15)',
              border: '1px solid rgba(0, 102, 255, 0.3)',
              color: '#ffffff',
              padding: '6px 16px',
              borderRadius: '9999px',
              fontSize: '0.85rem',
              fontWeight: 700,
              marginBottom: '1rem',
              backdropFilter: 'blur(8px)'
            }}>
              <Sparkles size={14} color="#0066FF" />
              <span>¡Tu invitación está lista!</span>
            </div>

            {/* The Printable / Capturable Card */}
            <InvitationCard ref={cardRef} name={userName} />

            {/* Action buttons (Download, Capture, Reset) */}
            <ActionButtons cardRef={cardRef} userName={userName} onReset={handleReset} />
          </div>
        )}
      </div>

      {/* Page Footer */}
      <footer style={{ zIndex: 1, marginTop: '2.5rem', textAlign: 'center', color: '#64748b', fontSize: '0.775rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
        <ShieldCheck size={14} color="#0066FF" />
        <span>Jóvenes Unidos — Registro Oficial VITA Encarnación de Díaz</span>
      </footer>
    </div>
  );
};

export default App;
