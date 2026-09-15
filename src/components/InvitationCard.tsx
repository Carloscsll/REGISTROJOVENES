import { forwardRef } from 'react';
import { Calendar, Clock, MapPin, Lightbulb, Users, Target, Rocket } from 'lucide-react';

interface InvitationCardProps {
  name: string;
}

export const InvitationCard = forwardRef<HTMLDivElement, InvitationCardProps>(({ name }, ref) => {
  // Dynamic font scaling according to full greeting length
  const getNameFontSize = (text: string) => {
    const fullText = `¡HOLA, ${text}!`;
    const len = fullText.length;
    if (len <= 14) return '1.4rem';
    if (len <= 20) return '1.2rem';
    if (len <= 26) return '1.02rem';
    if (len <= 34) return '0.88rem';
    if (len <= 42) return '0.78rem';
    return '0.7rem';
  };

  return (
    <div
      ref={ref}
      id="invitation-card"
      className="invitation-card-container"
      style={{
        background: '#ffffff',
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      {/* Background Decorative Matrix & Shapes */}
      <div className="card-grid-bg" />
      <div className="card-top-geometric" />
      <div className="card-bottom-geometric" />

      {/* Decorative top corner accent lines */}
      <svg
        style={{ position: 'absolute', top: 0, left: 0, width: '90px', height: '90px', pointerEvents: 'none', opacity: 0.18 }}
        viewBox="0 0 100 100"
        fill="none"
      >
        <line x1="0" y1="20" x2="60" y2="0" stroke="#0052CC" strokeWidth="2" />
        <line x1="0" y1="40" x2="80" y2="0" stroke="#0052CC" strokeWidth="2" />
        <circle cx="20" cy="20" r="3" fill="#0052CC" />
      </svg>
      <svg
        style={{ position: 'absolute', bottom: 0, right: 0, width: '90px', height: '90px', pointerEvents: 'none', opacity: 0.18 }}
        viewBox="0 0 100 100"
        fill="none"
      >
        <line x1="40" y1="100" x2="100" y2="40" stroke="#0052CC" strokeWidth="2" />
        <line x1="20" y1="100" x2="100" y2="20" stroke="#0052CC" strokeWidth="2" />
      </svg>

      {/* --- HEADER: JÓVENES UNIDOS --- */}
      <div style={{ textTransform: 'center', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ textAlign: 'center', textTransform: 'uppercase' }}>
          <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 900, fontSize: '1.2rem', color: '#0052CC', letterSpacing: '0.06em', lineHeight: 1 }}>
            JÓVENES UNIDOS
          </div>
          <div style={{ fontSize: '0.625rem', fontWeight: 700, color: '#475569', letterSpacing: '0.14em', marginTop: '3px' }}>
            "CREER PARA PODER CREAR"
          </div>
        </div>

        {/* Separator */}
        <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#09172e', letterSpacing: '0.18em', margin: '10px 0 4px 0', textTransform: 'uppercase' }}>
          TE INVITAMOS AL ENCUENTRO JUVENIL
        </div>
      </div>

      {/* --- MAIN TITLE: VITA --- */}
      <div style={{ textAlign: 'center', zIndex: 2, margin: '2px 0' }}>
        <h1
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 900,
            fontSize: '4.2rem',
            lineHeight: '0.95',
            letterSpacing: '0.08em',
            margin: '0',
            background: 'linear-gradient(135deg, #06152b 0%, #0047b3 50%, #0066ff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textTransform: 'uppercase',
            filter: 'drop-shadow(0 2px 4px rgba(0, 82, 204, 0.15))'
          }}
        >
          VITA
        </h1>

        {/* Tagline under VITA */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', marginTop: '4px' }}>
          <span style={{ height: '14px', width: '2px', background: '#0052CC' }}></span>
          <span style={{ fontSize: '0.625rem', fontWeight: 800, color: '#0052CC', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            VISIÓN <span style={{ color: '#09172e' }}>INNOVADORA</span> PARA <span style={{ color: '#09172e' }}>TRANSFORMAR Y ACTUAR</span>
          </span>
          <span style={{ height: '14px', width: '2px', background: '#0052CC' }}></span>
        </div>
      </div>

      {/* --- PERSONALIZED NAME BANNER (NEVER CUT OFF) --- */}
      <div style={{ zIndex: 2, margin: '6px 0', textAlign: 'center', width: '100%', display: 'flex', justifyContent: 'center' }}>
        <div style={{
          background: 'linear-gradient(135deg, #0052cc 0%, #0066ff 100%)',
          color: '#ffffff',
          borderRadius: '9999px',
          padding: '8px 22px',
          boxShadow: '0 8px 18px rgba(0, 82, 204, 0.3)',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: '96%',
          border: '2px solid rgba(255, 255, 255, 0.4)'
        }}>
          <span style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 800,
            fontSize: getNameFontSize(name),
            letterSpacing: '0.03em',
            textTransform: 'uppercase',
            textAlign: 'center',
            lineHeight: 1.2,
            wordBreak: 'break-word',
            display: 'inline-block'
          }}>
            ¡HOLA, {name}!
          </span>
        </div>
      </div>

      {/* Youth phrase */}
      <div style={{ textTransform: 'none', textAlign: 'center', zIndex: 2, padding: '0 6px' }}>
        <p style={{ fontSize: '0.75rem', fontWeight: 600, color: '#334155', lineHeight: '1.35', fontStyle: 'italic' }}>
          "Una experiencia para conectar, aprender, transformar y actuar."
        </p>
      </div>

      {/* --- PILLARS GRID --- */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '4px',
        zIndex: 2,
        margin: '6px 0',
        padding: '6px 4px',
        background: 'rgba(230, 240, 255, 0.5)',
        borderRadius: '12px',
        border: '1px solid rgba(0, 82, 204, 0.15)'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <Lightbulb size={14} color="#0052CC" style={{ marginBottom: '2px' }} />
          <span style={{ fontSize: '0.55rem', fontWeight: 800, color: '#09172e', textTransform: 'uppercase' }}>Inspira</span>
          <span style={{ fontSize: '0.5rem', color: '#0052CC', fontWeight: 600 }}>Tu mente</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', borderLeft: '1px solid rgba(0, 82, 204, 0.15)' }}>
          <Users size={14} color="#0052CC" style={{ marginBottom: '2px' }} />
          <span style={{ fontSize: '0.55rem', fontWeight: 800, color: '#09172e', textTransform: 'uppercase' }}>Conecta</span>
          <span style={{ fontSize: '0.5rem', color: '#0052CC', fontWeight: 600 }}>Con propósito</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', borderLeft: '1px solid rgba(0, 82, 204, 0.15)' }}>
          <Target size={14} color="#0052CC" style={{ marginBottom: '2px' }} />
          <span style={{ fontSize: '0.55rem', fontWeight: 800, color: '#09172e', textTransform: 'uppercase' }}>Descubre</span>
          <span style={{ fontSize: '0.5rem', color: '#0052CC', fontWeight: 600 }}>Tu rumbo</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', borderLeft: '1px solid rgba(0, 82, 204, 0.15)' }}>
          <Rocket size={14} color="#0052CC" style={{ marginBottom: '2px' }} />
          <span style={{ fontSize: '0.55rem', fontWeight: 800, color: '#09172e', textTransform: 'uppercase' }}>Actúa</span>
          <span style={{ fontSize: '0.5rem', color: '#0052CC', fontWeight: 600 }}>Y transforma</span>
        </div>
      </div>

      {/* --- EVENT DETAILS BOX --- */}
      <div style={{
        zIndex: 2,
        background: '#ffffff',
        border: '2px solid #09172e',
        borderRadius: '16px',
        padding: '10px 12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 4px 12px rgba(0,0,0,0.06)'
      }}>
        {/* Date */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flex: '1.1' }}>
          <div style={{ background: '#e6f0ff', padding: '6px', borderRadius: '8px', color: '#0052CC' }}>
            <Calendar size={16} />
          </div>
          <div>
            <div style={{ fontSize: '0.55rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>FECHA</div>
            <div style={{ fontSize: '0.75rem', color: '#09172e', fontWeight: 800 }}>3 de octubre</div>
          </div>
        </div>

        <div style={{ width: '1px', height: '26px', background: '#cbd5e1' }}></div>

        {/* Time */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flex: '0.9', justifyContent: 'center' }}>
          <div style={{ background: '#e6f0ff', padding: '6px', borderRadius: '8px', color: '#0052CC' }}>
            <Clock size={16} />
          </div>
          <div>
            <div style={{ fontSize: '0.55rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>HORA</div>
            <div style={{ fontSize: '0.75rem', color: '#09172e', fontWeight: 800 }}>9:00 AM</div>
          </div>
        </div>

        <div style={{ width: '1px', height: '26px', background: '#cbd5e1' }}></div>

        {/* Location */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flex: '1.5', justifyContent: 'flex-end' }}>
          <div style={{ background: '#e6f0ff', padding: '6px', borderRadius: '8px', color: '#0052CC' }}>
            <MapPin size={16} />
          </div>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: '0.55rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>LUGAR</div>
            <div style={{ fontSize: '0.65rem', color: '#09172e', fontWeight: 800, lineHeight: '1.1' }}>
              Salón Los Pavorreales
            </div>
            <div style={{ fontSize: '0.55rem', color: '#0052CC', fontWeight: 700 }}>
              Colonia Niños Héroes, Encarnación de Díaz
            </div>
          </div>
        </div>
      </div>

      {/* --- FOOTER: MOTTO & SOCIAL HANDLES --- */}
      <div style={{ zIndex: 2, textAlign: 'center', marginTop: '4px' }}>
        <div style={{ fontSize: '0.625rem', fontWeight: 800, color: '#0052CC', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
          ¡NO TE LO PIERDAS! JUNTOS PODEMOS MÁS.
        </div>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: '#09172e',
          color: '#ffffff',
          borderRadius: '9999px',
          padding: '4px 14px',
          marginTop: '4px',
          fontSize: '0.625rem',
          fontWeight: 700
        }}>
          <span>@jovenesunidosac_</span>
        </div>
      </div>
    </div>
  );
});

InvitationCard.displayName = 'InvitationCard';
