
import React, { useEffect, useRef } from 'react';
import { Icons } from './Icons';

declare global {
  interface Window {
    L: any;
  }
}

export const InteractiveAreaMap: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  const handleZoomIn = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.zoomIn();
    }
  };

  const handleZoomOut = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.zoomOut();
    }
  };

  useEffect(() => {
    if (!mapContainerRef.current || !window.L) return;

    // Center on Saint-Étienne-Vallée-Française
    const center: [number, number] = [44.2167, 3.8333];
    const stEtienne: [number, number] = [44.2167, 3.8333];

    // Initialize Map
    mapInstanceRef.current = window.L.map(mapContainerRef.current, {
      center: center,
      zoom: 11,
      zoomControl: false,
      scrollWheelZoom: false,
      dragging: true,
      tap: true,
      touchZoom: true,
      attributionControl: false
    });

    // Tiles selection - Force light mode
    const tileUrl = 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png';

    window.L.tileLayer(tileUrl, {
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(mapInstanceRef.current);

    // Custom Marker Icon
    const customIcon = window.L.divIcon({
      className: 'custom-div-icon',
      html: `<div class="w-4 h-4 bg-accent border-2 border-white rounded-full shadow-lg pulse-marker"></div>`,
      iconSize: [16, 16],
      iconAnchor: [8, 8]
    });

    // Add Marker
    window.L.marker(stEtienne, { icon: customIcon }).addTo(mapInstanceRef.current).bindPopup('<b class="text-primary">Saint-Étienne-Vallée-Française</b>');

    // Service Area Circle
    window.L.circle(center, {
      color: '#C9A227',
      fillColor: '#C9A227',
      fillOpacity: 0.1,
      radius: 30000, // 30km radius
      weight: 2,
      dashArray: '5, 10'
    }).addTo(mapInstanceRef.current);

    // Style for marker pulse
    const style = document.createElement('style');
    style.innerHTML = `
      .pulse-marker {
        box-shadow: 0 0 0 rgba(201, 162, 39, 0.4);
        animation: pulse 2s infinite;
      }
      @keyframes pulse {
        0% { box-shadow: 0 0 0 0 rgba(201, 162, 39, 0.7); }
        70% { box-shadow: 0 0 0 10px rgba(201, 162, 39, 0); }
        100% { box-shadow: 0 0 0 0 rgba(201, 162, 39, 0); }
      }
      .leaflet-popup-content-wrapper {
        border-radius: 12px;
        padding: 4px;
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
      if (style.parentNode) document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="w-full h-[300px] md:h-[350px] bg-neutral-100 relative overflow-hidden rounded-xl border border-gray-200 shadow-inner group">
      <div ref={mapContainerRef} className="w-full h-full z-0" />

      {/* Custom Zoom Controls */}
      <div className="absolute top-4 right-4 z-[1000] flex flex-col gap-2">
        <button
          onClick={handleZoomIn}
          className="w-10 h-10 bg-white/95 backdrop-blur-md rounded-xl border border-gray-200 shadow-lg flex items-center justify-center text-primary hover:text-accent transition-all active:scale-90"
          aria-label="Zoom avant"
        >
          <Icons.Plus size={20} strokeWidth={2.5} />
        </button>
        <button
          onClick={handleZoomOut}
          className="w-10 h-10 bg-white/95 backdrop-blur-md rounded-xl border border-gray-200 shadow-lg flex items-center justify-center text-primary hover:text-accent transition-all active:scale-90"
          aria-label="Zoom arrière"
        >
          <Icons.Minus size={20} strokeWidth={2.5} />
        </button>
      </div>

      {/* Indicator Overlay */}
      <div className="absolute bottom-4 left-4 z-[1000] pointer-events-none">
        <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-gray-200 shadow-lg flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Zone : Lozère (48)</span>
        </div>
      </div>
    </div>
  );
};
