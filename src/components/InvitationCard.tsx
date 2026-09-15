import { forwardRef, useEffect, useRef } from 'react';
import { Calendar, Clock, MapPin, Lightbulb, Users, Target, Rocket } from 'lucide-react';

interface InvitationCardProps {
  name: string;
}

export const InvitationCard = forwardRef<HTMLDivElement, InvitationCardProps>(({ name }, ref) => {
  const nameSpanRef = useRef<HTMLSpanElement>(null);

  // Auto-fit the name text to always stay on a single line
  useEffect(() => {
    const span = nameSpanRef.current;
    if (!span) return;

    const MAX_SIZE = 19; // px
    const MIN_SIZE = 8;  // px
    span.style.fontSize = `${MAX_SIZE}px`;

    let size = MAX_SIZE;
    while (span.scrollWidth > span.offsetWidth && size > MIN_SIZE) {
      size -= 0.5;
      span.style.fontSize = `${size}px`;
    }
  }, [name]);

  return (
    <div
      ref={ref}
      id="invitation-card"
      className="invitation-card-container"
      style={{
        background: '#ffffff',
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        padding: '1.1rem 1.15rem',
      }}
    >
      {/* Background Decorative Matrix & Shapes */}
      <div className="card-grid-bg" />
      <div className="card-top-geometric" />
      <div className="card-bottom-geometric" />

      {/* Decorative corner accent lines */}
      <svg
        style={{ position: 'absolute', top: 0, left: 0, width: '70px', height: '70px', pointerEvents: 'none', opacity: 0.15 }}
        viewBox="0 0 100 100"
        fill="none"
      >
        <line x1="0" y1="20" x2="60" y2="0" stroke="#0052CC" strokeWidth="2" />
        <line x1="0" y1="40" x2="80" y2="0" stroke="#0052CC" strokeWidth="2" />
        <circle cx="20" cy="20" r="3" fill="#0052CC" />
      </svg>
      <svg
        style={{ position: 'absolute', bottom: 0, right: 0, width: '70px', height: '70px', pointerEvents: 'none', opacity: 0.15 }}
        viewBox="0 0 100 100"
        fill="none"
      >
        <line x1="40" y1="100" x2="100" y2="40" stroke="#0052CC" strokeWidth="2" />
        <line x1="20" y1="100" x2="100" y2="20" stroke="#0052CC" strokeWidth="2" />
      </svg>

      {/* --- HEADER: JÓVENES UNIDOS --- */}
      <div style={{ zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 900, fontSize: '1rem', color: '#0052CC', letterSpacing: '0.06em', lineHeight: 1, textTransform: 'uppercase' }}>
          JÓVENES UNIDOS
        </div>
        <div style={{ fontSize: '0.56rem', fontWeight: 700, color: '#64748b', letterSpacing: '0.12em', marginTop: '2px', textTransform: 'uppercase' }}>
          "CREER PARA PODER CREAR"
        </div>

        {/* Separator label */}
        <div style={{ fontSize: '0.6rem', fontWeight: 800, color: '#09172e', letterSpacing: '0.14em', margin: '7px 0 3px 0', textTransform: 'uppercase', textAlign: 'center', width: '100%' }}>
          TE INVITAMOS AL ENCUENTRO JUVENIL
        </div>
      </div>

      {/* --- MAIN TITLE: VITA --- */}
      <div style={{ textAlign: 'center', zIndex: 2, margin: '0' }}>
        <h1
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 900,
            fontSize: '3.4rem',
            lineHeight: '0.95',
            letterSpacing: '0.08em',
            margin: '0',
            background: 'linear-gradient(135deg, #06152b 0%, #0047b3 50%, #0066ff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textTransform: 'uppercase',
            filter: 'drop-shadow(0 1px 3px rgba(0, 82, 204, 0.12))'
          }}
        >
          VITA
        </h1>

        {/* Tagline under VITA */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px', marginTop: '3px' }}>
          <span style={{ height: '12px', width: '2px', background: '#0052CC', flexShrink: 0 }}></span>
          <span style={{ fontSize: '0.56rem', fontWeight: 800, color: '#0052CC', letterSpacing: '0.07em', textTransform: 'uppercase' }}>
            VISIÓN <span style={{ color: '#09172e' }}>INNOVADORA</span> PARA <span style={{ color: '#09172e' }}>TRANSFORMAR Y ACTUAR</span>
          </span>
          <span style={{ height: '12px', width: '2px', background: '#0052CC', flexShrink: 0 }}></span>
        </div>
      </div>

      {/* --- PERSONALIZED NAME BANNER --- */}
      <div style={{ zIndex: 2, margin: '6px 0 4px 0', textAlign: 'center' }}>
        <div style={{
          background: 'linear-gradient(135deg, #0052cc 0%, #0066ff 100%)',
          color: '#ffffff',
          borderRadius: '9999px',
          padding: '6px 16px',
          boxShadow: '0 5px 14px rgba(0, 82, 204, 0.28)',
          display: 'block',
          width: '100%',
          border: '2px solid rgba(255, 255, 255, 0.35)'
        }}>
          <span
            ref={nameSpanRef}
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 800,
              fontSize: '19px',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              display: 'block',
              width: '100%',
              textAlign: 'center',
            }}
          >
            ¡HOLA, {name}!
          </span>
        </div>
      </div>

      {/* Youth phrase */}
      <div style={{ textAlign: 'center', zIndex: 2, padding: '0 4px', margin: '2px 0' }}>
        <p style={{ fontSize: '0.68rem', fontWeight: 600, color: '#475569', lineHeight: '1.3', fontStyle: 'italic', margin: 0 }}>
          "Una experiencia para conectar, aprender, transformar y actuar."
        </p>
      </div>

      {/* --- PILLARS GRID --- */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '3px',
        zIndex: 2,
        margin: '5px 0',
        padding: '5px 4px',
        background: 'rgba(230, 240, 255, 0.5)',
        borderRadius: '10px',
        border: '1px solid rgba(0, 82, 204, 0.12)'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1px' }}>
          <Lightbulb size={12} color="#0052CC" />
          <span style={{ fontSize: '0.5rem', fontWeight: 800, color: '#09172e', textTransform: 'uppercase', lineHeight: 1 }}>Inspira</span>
          <span style={{ fontSize: '0.45rem', color: '#0052CC', fontWeight: 600, lineHeight: 1 }}>Tu mente</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', borderLeft: '1px solid rgba(0, 82, 204, 0.12)', gap: '1px' }}>
          <Users size={12} color="#0052CC" />
          <span style={{ fontSize: '0.5rem', fontWeight: 800, color: '#09172e', textTransform: 'uppercase', lineHeight: 1 }}>Conecta</span>
          <span style={{ fontSize: '0.45rem', color: '#0052CC', fontWeight: 600, lineHeight: 1 }}>Con propósito</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', borderLeft: '1px solid rgba(0, 82, 204, 0.12)', gap: '1px' }}>
          <Target size={12} color="#0052CC" />
          <span style={{ fontSize: '0.5rem', fontWeight: 800, color: '#09172e', textTransform: 'uppercase', lineHeight: 1 }}>Descubre</span>
          <span style={{ fontSize: '0.45rem', color: '#0052CC', fontWeight: 600, lineHeight: 1 }}>Tu rumbo</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', borderLeft: '1px solid rgba(0, 82, 204, 0.12)', gap: '1px' }}>
          <Rocket size={12} color="#0052CC" />
          <span style={{ fontSize: '0.5rem', fontWeight: 800, color: '#09172e', textTransform: 'uppercase', lineHeight: 1 }}>Actúa</span>
          <span style={{ fontSize: '0.45rem', color: '#0052CC', fontWeight: 600, lineHeight: 1 }}>Y transforma</span>
        </div>
      </div>

      {/* --- EVENT DETAILS BOX --- */}
      <div style={{
        zIndex: 2,
        background: '#ffffff',
        border: '1.5px solid #09172e',
        borderRadius: '13px',
        padding: '7px 10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 3px 8px rgba(0,0,0,0.05)'
      }}>
        {/* Date */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', flex: '1.1' }}>
          <div style={{ background: '#e6f0ff', padding: '5px', borderRadius: '7px', color: '#0052CC', flexShrink: 0 }}>
            <Calendar size={13} />
          </div>
          <div>
            <div style={{ fontSize: '0.48rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>FECHA</div>
            <div style={{ fontSize: '0.65rem', color: '#09172e', fontWeight: 800, lineHeight: 1.1 }}>3 de octubre</div>
          </div>
        </div>

        <div style={{ width: '1px', height: '22px', background: '#e2e8f0', flexShrink: 0 }}></div>

        {/* Time */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', flex: '0.85', justifyContent: 'center' }}>
          <div style={{ background: '#e6f0ff', padding: '5px', borderRadius: '7px', color: '#0052CC', flexShrink: 0 }}>
            <Clock size={13} />
          </div>
          <div>
            <div style={{ fontSize: '0.48rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>HORA</div>
            <div style={{ fontSize: '0.65rem', color: '#09172e', fontWeight: 800, lineHeight: 1.1 }}>9:00 AM</div>
          </div>
        </div>

        <div style={{ width: '1px', height: '22px', background: '#e2e8f0', flexShrink: 0 }}></div>

        {/* Location */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', flex: '1.6', justifyContent: 'flex-end' }}>
          <div style={{ background: '#e6f0ff', padding: '5px', borderRadius: '7px', color: '#0052CC', flexShrink: 0 }}>
            <MapPin size={13} />
          </div>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: '0.48rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>LUGAR</div>
            <div style={{ fontSize: '0.58rem', color: '#09172e', fontWeight: 800, lineHeight: '1.1' }}>
              Salón Los Pavorreales
            </div>
            <div style={{ fontSize: '0.48rem', color: '#0052CC', fontWeight: 700, lineHeight: '1.15' }}>
              Col. Niños Héroes, Encarnación de Díaz
            </div>
          </div>
        </div>
      </div>

      {/* --- FOOTER --- */}
      <div style={{ zIndex: 2, textAlign: 'center', marginTop: '5px' }}>
        <div style={{ fontSize: '0.56rem', fontWeight: 800, color: '#0052CC', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
          ¡NO TE LO PIERDAS! JUNTOS PODEMOS MÁS.
        </div>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          background: '#09172e',
          color: '#ffffff',
          borderRadius: '9999px',
          padding: '3px 12px',
          marginTop: '3px',
          fontSize: '0.56rem',
          fontWeight: 700
        }}>
          <span>@jovenesunidosac_</span>
        </div>
      </div>
    </div>
  );
});

InvitationCard.displayName = 'InvitationCard';
