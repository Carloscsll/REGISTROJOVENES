import { forwardRef, useEffect, useRef } from 'react';
import { Calendar, Clock, MapPin, Lightbulb, Users, Target, Rocket } from 'lucide-react';

interface InvitationCardProps {
  name: string;
}

export const InvitationCard = forwardRef<HTMLDivElement, InvitationCardProps>(({ name }, ref) => {
  const nameSpanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const span = nameSpanRef.current;
    if (!span) return;
    const MAX_SIZE = 22;
    const MIN_SIZE = 8;
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
      style={{ background: '#ffffff', fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* Backgrounds */}
      <div className="card-grid-bg" />
      <div className="card-top-geometric" />
      <div className="card-bottom-geometric" />

      {/* Corner accents */}
      <svg style={{ position: 'absolute', top: 0, left: 0, width: '80px', height: '80px', pointerEvents: 'none', opacity: 0.15 }} viewBox="0 0 100 100" fill="none">
        <line x1="0" y1="20" x2="60" y2="0" stroke="#0052CC" strokeWidth="2" />
        <line x1="0" y1="40" x2="80" y2="0" stroke="#0052CC" strokeWidth="2" />
        <circle cx="20" cy="20" r="3" fill="#0052CC" />
      </svg>
      <svg style={{ position: 'absolute', bottom: 0, right: 0, width: '80px', height: '80px', pointerEvents: 'none', opacity: 0.15 }} viewBox="0 0 100 100" fill="none">
        <line x1="40" y1="100" x2="100" y2="40" stroke="#0052CC" strokeWidth="2" />
        <line x1="20" y1="100" x2="100" y2="20" stroke="#0052CC" strokeWidth="2" />
      </svg>

      {/* ── ZONA 1: ENCABEZADO ── */}
      <div style={{ zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '4px' }}>
        {/* Organiza badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '5px',
          background: 'rgba(0, 82, 204, 0.07)', border: '1px solid rgba(0, 82, 204, 0.18)',
          borderRadius: '9999px', padding: '3px 12px', marginBottom: '2px'
        }}>
          <span style={{ fontSize: '0.55rem', fontWeight: 800, color: '#0052CC', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            Jóvenes Unidos
          </span>
          <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#0052CC', opacity: 0.5 }}></span>
          <span style={{ fontSize: '0.5rem', fontWeight: 600, color: '#475569', letterSpacing: '0.08em' }}>
            Encarnación de Díaz
          </span>
        </div>

        <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 900, fontSize: '1.1rem', color: '#0052CC', letterSpacing: '0.05em', textTransform: 'uppercase', lineHeight: 1 }}>
          JÓVENES UNIDOS
        </div>
        <div style={{ fontSize: '0.58rem', fontWeight: 700, color: '#64748b', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
          "CREER PARA PODER CREAR"
        </div>
      </div>

      {/* ── ZONA 2: VITA PRINCIPAL ── */}
      <div style={{ zIndex: 2, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
        {/* Eyebrow label */}
        <div style={{ fontSize: '0.62rem', fontWeight: 800, color: '#64748b', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
          ENCUENTRO JUVENIL
        </div>

        {/* VITA */}
        <h1 style={{
          fontFamily: "'Outfit', sans-serif",
          fontWeight: 900,
          fontSize: '5.5rem',
          lineHeight: '0.9',
          letterSpacing: '0.06em',
          margin: '0',
          background: 'linear-gradient(150deg, #06152b 0%, #0047b3 45%, #0066ff 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textTransform: 'uppercase',
          filter: 'drop-shadow(0 2px 6px rgba(0, 82, 204, 0.18))',
        }}>
          VITA
        </h1>

        {/* Tagline */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
          <span style={{ height: '13px', width: '2px', background: '#0052CC', flexShrink: 0 }}></span>
          <span style={{ fontSize: '0.58rem', fontWeight: 800, color: '#0052CC', letterSpacing: '0.07em', textTransform: 'uppercase' }}>
            VISIÓN <span style={{ color: '#09172e' }}>INNOVADORA</span> PARA <span style={{ color: '#09172e' }}>TRANSFORMAR Y ACTUAR</span>
          </span>
          <span style={{ height: '13px', width: '2px', background: '#0052CC', flexShrink: 0 }}></span>
        </div>
      </div>

      {/* ── ZONA 3: NOMBRE PERSONALIZADO ── */}
      <div style={{ zIndex: 2, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
        {/* Decorative line above */}
        <div style={{ width: '40px', height: '2px', background: 'linear-gradient(90deg, transparent, #0052CC, transparent)' }}></div>

        <div style={{ fontSize: '0.6rem', fontWeight: 700, color: '#64748b', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          TU INVITACIÓN PERSONAL
        </div>

        <div style={{
          background: 'linear-gradient(135deg, #0052cc 0%, #0066ff 100%)',
          color: '#ffffff',
          borderRadius: '9999px',
          padding: '9px 20px',
          boxShadow: '0 6px 18px rgba(0, 82, 204, 0.32)',
          display: 'block',
          width: '100%',
          border: '2px solid rgba(255, 255, 255, 0.35)'
        }}>
          <span
            ref={nameSpanRef}
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 800,
              fontSize: '22px',
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

        <p style={{ fontSize: '0.7rem', fontWeight: 600, color: '#475569', lineHeight: '1.35', fontStyle: 'italic', margin: 0, textAlign: 'center', padding: '0 4px' }}>
          "Una experiencia para conectar, aprender, transformar y actuar."
        </p>
      </div>

      {/* ── ZONA 4: PILARES ── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '4px',
        zIndex: 2,
        padding: '8px 6px',
        background: 'rgba(230, 240, 255, 0.55)',
        borderRadius: '12px',
        border: '1px solid rgba(0, 82, 204, 0.13)'
      }}>
        {[
          { Icon: Lightbulb, label: 'Inspira', sub: 'Tu mente' },
          { Icon: Users, label: 'Conecta', sub: 'Con propósito' },
          { Icon: Target, label: 'Descubre', sub: 'Tu rumbo' },
          { Icon: Rocket, label: 'Actúa', sub: 'Y transforma' },
        ].map(({ Icon, label, sub }, i) => (
          <div key={label} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '2px',
            borderLeft: i > 0 ? '1px solid rgba(0, 82, 204, 0.12)' : 'none',
            padding: '2px 0'
          }}>
            <Icon size={13} color="#0052CC" />
            <span style={{ fontSize: '0.52rem', fontWeight: 800, color: '#09172e', textTransform: 'uppercase', lineHeight: 1 }}>{label}</span>
            <span style={{ fontSize: '0.47rem', color: '#0052CC', fontWeight: 600, lineHeight: 1.1 }}>{sub}</span>
          </div>
        ))}
      </div>

      {/* ── ZONA 5: DATOS DEL EVENTO ── */}
      <div style={{
        zIndex: 2,
        background: '#ffffff',
        border: '1.5px solid #09172e',
        borderRadius: '14px',
        padding: '9px 12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 3px 10px rgba(0,0,0,0.06)'
      }}>
        {/* Date */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flex: '1.1' }}>
          <div style={{ background: '#e6f0ff', padding: '6px', borderRadius: '8px', color: '#0052CC', flexShrink: 0 }}>
            <Calendar size={14} />
          </div>
          <div>
            <div style={{ fontSize: '0.5rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>FECHA</div>
            <div style={{ fontSize: '0.7rem', color: '#09172e', fontWeight: 800, lineHeight: 1.1 }}>3 de octubre</div>
          </div>
        </div>

        <div style={{ width: '1px', height: '24px', background: '#e2e8f0', flexShrink: 0 }}></div>

        {/* Time */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flex: '0.85', justifyContent: 'center' }}>
          <div style={{ background: '#e6f0ff', padding: '6px', borderRadius: '8px', color: '#0052CC', flexShrink: 0 }}>
            <Clock size={14} />
          </div>
          <div>
            <div style={{ fontSize: '0.5rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>HORA</div>
            <div style={{ fontSize: '0.7rem', color: '#09172e', fontWeight: 800, lineHeight: 1.1 }}>9:00 AM</div>
          </div>
        </div>

        <div style={{ width: '1px', height: '24px', background: '#e2e8f0', flexShrink: 0 }}></div>

        {/* Location */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flex: '1.5', justifyContent: 'flex-end' }}>
          <div style={{ background: '#e6f0ff', padding: '6px', borderRadius: '8px', color: '#0052CC', flexShrink: 0 }}>
            <MapPin size={14} />
          </div>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: '0.5rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>LUGAR</div>
            <div style={{ fontSize: '0.62rem', color: '#09172e', fontWeight: 800, lineHeight: '1.1' }}>
              Salón Los Pavorreales
            </div>
            <div style={{ fontSize: '0.5rem', color: '#0052CC', fontWeight: 700, lineHeight: '1.2' }}>
              Col. Niños Héroes, Encarnación de Díaz
            </div>
          </div>
        </div>
      </div>

      {/* ── ZONA 6: FOOTER ── */}
      <div style={{ zIndex: 2, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
        <div style={{ width: '40px', height: '1.5px', background: 'linear-gradient(90deg, transparent, #0052CC, transparent)' }}></div>
        <div style={{ fontSize: '0.6rem', fontWeight: 800, color: '#0052CC', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          ¡NO TE LO PIERDAS! JUNTOS PODEMOS MÁS.
        </div>
        <div style={{
          display: 'inline-flex', alignItems: 'center',
          background: '#09172e', color: '#ffffff',
          borderRadius: '9999px', padding: '4px 14px',
          fontSize: '0.6rem', fontWeight: 700
        }}>
          @jovenesunidosac_
        </div>
      </div>
    </div>
  );
});

InvitationCard.displayName = 'InvitationCard';
