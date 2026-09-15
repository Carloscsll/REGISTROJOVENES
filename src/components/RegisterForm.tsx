import React, { useState } from 'react';
import { Sparkles, ArrowRight, User } from 'lucide-react';

interface RegisterFormProps {
  onGenerate: (name: string) => void;
  isLoading: boolean;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ onGenerate, isLoading }) => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    if (!trimmedName) {
      setError('Por favor escribe tu nombre para continuar.');
      return;
    }
    setError('');
    onGenerate(trimmedName);
  };

  return (
    <div className="glass-panel animate-fade-in" style={{ textAlign: 'center' }}>
      {/* Brand Tagline */}
      <div style={{ marginBottom: '1.25rem' }}>
        <span className="brand-badge">
          <Sparkles size={14} /> Encuentro Juvenil 2026
        </span>
      </div>

      {/* Main VITA Title */}
      <h1 className="title-vita">VITA</h1>
      <p className="subtitle-vita">
        Visión Innovadora para Transformar y Actuar
      </p>

      <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, transparent, #0066FF, transparent)', margin: '1.25rem auto' }}></div>

      <p style={{ color: '#475569', fontSize: '1rem', fontWeight: 600, marginBottom: '1.75rem', lineHeight: '1.4' }}>
        Genera tu invitación personalizada
      </p>

      {/* Registration Form */}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#0066FF', opacity: 0.7 }}>
            <User size={20} />
          </div>
          <input
            type="text"
            className="form-input"
            placeholder="Escribe tu nombre"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (error) setError('');
            }}
            maxLength={45}
            style={{ paddingLeft: '48px', textTransform: 'capitalize' }}
            autoFocus
          />
        </div>

        {error && (
          <p style={{ color: '#dc2626', fontSize: '0.875rem', fontWeight: 600, marginTop: '-0.5rem' }}>
            {error}
          </p>
        )}

        <button
          type="submit"
          className="btn-primary"
          disabled={isLoading || !name.trim()}
          style={{ opacity: !name.trim() ? 0.65 : 1 }}
        >
          {isLoading ? (
            <span>Generando invitación...</span>
          ) : (
            <>
              <span>Generar mi invitación</span>
              <ArrowRight size={20} />
            </>
          )}
        </button>
      </form>

      {/* Institutional Footer Notice */}
      <div style={{ marginTop: '1.75rem', paddingTop: '1.25rem', borderTop: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
        <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 500 }}>Organizado por</span>
        <strong style={{ fontSize: '0.825rem', color: '#09172e', fontWeight: 800 }}>Jóvenes Unidos</strong>
      </div>
    </div>
  );
};
