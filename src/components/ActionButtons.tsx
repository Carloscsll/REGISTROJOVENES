import React, { useState } from 'react';
import { Download, Camera, RefreshCw, Check } from 'lucide-react';
import { toPng } from 'html-to-image';

interface ActionButtonsProps {
  cardRef: React.RefObject<HTMLDivElement | null>;
  userName: string;
  onReset: () => void;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({ cardRef, userName, onReset }) => {
  const [isExporting, setIsExporting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const getCleanFileName = () => {
    const cleanName = userName
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]/g, "_");
    return `invitacion_vita_${cleanName}.png`;
  };

  const handleDownload = async () => {
    if (!cardRef.current || isExporting) return;
    try {
      setIsExporting(true);
      setSuccessMessage(null);

      // Ensure all web fonts (Outfit, Plus Jakarta Sans) are fully loaded & rendered before capturing
      if (document.fonts && document.fonts.ready) {
        await document.fonts.ready;
      }

      // Render image at 3x scale for crisp high definition social share
      const dataUrl = await toPng(cardRef.current, {
        cacheBust: true,
        pixelRatio: 3,
        style: {
          margin: '0',
          transform: 'none',
        }
      });

      const link = document.createElement('a');
      link.download = getCleanFileName();
      link.href = dataUrl;
      link.click();

      setSuccessMessage('¡Invitación descargada con éxito!');
      setTimeout(() => setSuccessMessage(null), 4000);
    } catch (err) {
      console.error('Error al descargar invitación:', err);
      alert('Hubo un inconveniente al generar la imagen. Intenta tomar una captura o vuelve a intentarlo.');
    } finally {
      setIsExporting(false);
    }
  };

  const handleCapture = async () => {
    if (!cardRef.current || isExporting) return;
    try {
      setIsExporting(true);
      setSuccessMessage(null);

      if (document.fonts && document.fonts.ready) {
        await document.fonts.ready;
      }

      const dataUrl = await toPng(cardRef.current, {
        cacheBust: true,
        pixelRatio: 3,
      });

      // Try copying to clipboard if supported
      try {
        const response = await fetch(dataUrl);
        const blob = await response.blob();
        if (navigator.clipboard && window.ClipboardItem) {
          await navigator.clipboard.write([
            new ClipboardItem({ [blob.type]: blob })
          ]);
          setSuccessMessage('¡Captura copiada al portapapeles!');
          setTimeout(() => setSuccessMessage(null), 4000);
          setIsExporting(false);
          return;
        }
      } catch (clipboardErr) {
        console.log('Clipboard copy fallback to file save', clipboardErr);
      }

      // Fallback: save high-res capture PNG
      const link = document.createElement('a');
      link.download = `captura_${getCleanFileName()}`;
      link.href = dataUrl;
      link.click();

      setSuccessMessage('¡Captura guardada en tu dispositivo!');
      setTimeout(() => setSuccessMessage(null), 4000);
    } catch (err) {
      console.error('Error al capturar invitación:', err);
      alert('No se pudo tomar la captura automáticamente.');
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div style={{ width: '100%', maxWidth: '440px', marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.9rem', zIndex: 10 }}>
      {/* Primary Action Row */}
      <div style={{ display: 'flex', gap: '10px', width: '100%' }}>
        <button
          onClick={handleDownload}
          disabled={isExporting}
          className="btn-download-primary"
        >
          <Download size={18} />
          <span>Descargar invitación</span>
        </button>

        <button
          onClick={handleCapture}
          disabled={isExporting}
          className="btn-secondary"
        >
          <Camera size={18} />
          <span>Tomar captura</span>
        </button>
      </div>

      {/* Success Notification Feedback */}
      {successMessage && (
        <div style={{
          background: 'rgba(16, 185, 129, 0.15)',
          border: '1px solid rgba(16, 185, 129, 0.4)',
          color: '#10b981',
          padding: '8px 14px',
          borderRadius: '12px',
          fontSize: '0.875rem',
          fontWeight: 700,
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px'
        }}>
          <Check size={16} />
          <span>{successMessage}</span>
        </div>
      )}

      {/* Reset Name Option */}
      <div style={{ textAlign: 'center', marginTop: '0.25rem' }}>
        <span style={{ color: '#94a3b8', fontSize: '0.875rem', marginRight: '6px' }}>
          ¿No es tu nombre?
        </span>
        <button onClick={onReset} className="btn-link-reset" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
          <RefreshCw size={12} />
          <span>Crear otra invitación</span>
        </button>
      </div>
    </div>
  );
};
