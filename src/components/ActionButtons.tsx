import React, { useState } from 'react';
import { Download, Camera, RefreshCw, Check } from 'lucide-react';
import { toBlob, toPng } from 'html-to-image';

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

  const generateBlob = async (): Promise<Blob> => {
    if (!cardRef.current) throw new Error("Tarjeta no encontrada");
    
    // First try toBlob directly
    try {
      const blob = await toBlob(cardRef.current, {
        cacheBust: true,
        pixelRatio: 3,
        backgroundColor: '#ffffff'
      });
      if (blob) return blob;
    } catch (e) {
      console.warn("toBlob failed, falling back to toPng", e);
    }

    // Fallback: toPng -> fetch -> blob
    const dataUrl = await toPng(cardRef.current, {
      cacheBust: true,
      pixelRatio: 3,
      backgroundColor: '#ffffff'
    });
    const res = await fetch(dataUrl);
    return await res.blob();
  };

  const handleDownload = async () => {
    if (!cardRef.current || isExporting) return;
    try {
      setIsExporting(true);
      setSuccessMessage(null);

      const blob = await generateBlob();
      const fileName = getCleanFileName();
      const file = new File([blob], fileName, { type: 'image/png' });

      // Native Web Share API on mobile (iOS Safari / Android Chrome)
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        try {
          await navigator.share({
            files: [file],
            title: `Invitación VITA - ${userName}`,
            text: `¡Mi invitación oficial para el encuentro VITA Jóvenes Unidos!`
          });
          setSuccessMessage('¡Invitación lista para compartir!');
          setTimeout(() => setSuccessMessage(null), 4000);
          return;
        } catch (shareErr: any) {
          if (shareErr.name === 'AbortError') {
            return;
          }
          console.log('Share dismissed or failed, proceeding with direct download', shareErr);
        }
      }

      // Universal Object URL download
      const objectUrl = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = objectUrl;
      link.download = fileName;
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();

      setTimeout(() => {
        document.body.removeChild(link);
        URL.revokeObjectURL(objectUrl);
      }, 1500);

      setSuccessMessage('¡Invitación descargada con éxito!');
      setTimeout(() => setSuccessMessage(null), 4000);
    } catch (err) {
      console.error('Error al descargar invitación:', err);
      
      // Secondary fallback: open high-res image in new window/tab for manual saving
      try {
        const dataUrl = await toPng(cardRef.current, { cacheBust: true, pixelRatio: 2.5, backgroundColor: '#ffffff' });
        const imgWindow = window.open('');
        if (imgWindow) {
          imgWindow.document.write(`
            <!DOCTYPE html>
            <html>
              <head>
                <title>Invitación VITA - ${userName}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                  body { margin: 0; background: #050d1a; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; font-family: sans-serif; color: white; text-align: center; padding: 20px; box-sizing: border-box; }
                  img { max-width: 100%; max-height: 80vh; border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
                  p { margin-top: 15px; font-size: 14px; color: #94a3b8; }
                </style>
              </head>
              <body>
                <img src="${dataUrl}" alt="Invitación VITA" />
                <p>Mantén presionada la imagen o haz clic derecho para <strong>Guardar imagen</strong></p>
              </body>
            </html>
          `);
          imgWindow.document.close();
          setSuccessMessage('¡Imagen abierta! Mantén presionada para guardar.');
          setTimeout(() => setSuccessMessage(null), 5000);
          return;
        }
      } catch (fallbackErr) {
        console.error('Fallback image window failed', fallbackErr);
      }

      alert('Hubo un inconveniente al descargar. Prueba usando el botón "Tomar captura".');
    } finally {
      setIsExporting(false);
    }
  };

  const handleCapture = async () => {
    if (!cardRef.current || isExporting) return;
    try {
      setIsExporting(true);
      setSuccessMessage(null);

      const blob = await generateBlob();
      const fileName = `captura_${getCleanFileName()}`;

      // Try copying to clipboard if supported
      if (navigator.clipboard && window.ClipboardItem) {
        try {
          await navigator.clipboard.write([
            new ClipboardItem({ 'image/png': blob })
          ]);
          setSuccessMessage('¡Copiada al portapapeles!');
          setTimeout(() => setSuccessMessage(null), 4000);
          return;
        } catch (clipboardErr) {
          console.log('Clipboard copy not supported/permitted, falling back to direct save', clipboardErr);
        }
      }

      // Fallback: Direct Blob download
      const objectUrl = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = objectUrl;
      link.download = fileName;
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();

      setTimeout(() => {
        document.body.removeChild(link);
        URL.revokeObjectURL(objectUrl);
      }, 1500);

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
    <div style={{ width: '100%', maxWidth: '390px', marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.9rem', zIndex: 10 }}>
      {/* Primary Action Row */}
      <div style={{ display: 'flex', gap: '10px', width: '100%' }}>
        <button
          onClick={handleDownload}
          disabled={isExporting}
          className="btn-download-primary"
        >
          <Download size={18} />
          <span>{isExporting ? 'Generando...' : 'Descargar invitación'}</span>
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
