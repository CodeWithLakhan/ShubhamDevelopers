import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Custom Marker Styles
const PulseIcon = L.divIcon({
  className: 'custom-marker',
  html: `<div class="marker-pulse"></div><div class="marker-core"></div>`,
  iconSize: [24, 24],
  iconAnchor: [12, 12],
  popupAnchor: [0, -12]
});

const MapSection = () => {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);

  // Center roughly between Dhule and Shirpur
  const shirpurCoords = [21.3524, 74.8808]; // Shirpur
  
  const projects = [
    { id: 1, name: "Shubham Lifestyle", coords: [21.3535, 74.8850], type: "Residential" },
    { id: 2, name: "City Center Commercial", coords: [21.3510, 74.8790], type: "Commercial" },
    { id: 3, name: "Green Valley Villas", coords: [21.3580, 74.8820], type: "Villas" }
  ];

  useEffect(() => {
    // Initialize map if not already initialized
    if (mapContainerRef.current && !mapInstanceRef.current) {
      const map = L.map(mapContainerRef.current, {
        center: [20.9042, 74.7749], // Start at Dhule
        zoom: 10,
        zoomControl: false,
        scrollWheelZoom: false,
        dragging: true
      });

      mapInstanceRef.current = map;

      // Minimal Light Tile Layer for Vector Look
      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
      }).addTo(map);

      // Animation: Fly to Shirpur
      setTimeout(() => {
        map.flyTo(shirpurCoords, 14, {
          duration: 3,
          easeLinearity: 0.25
        });
      }, 1000);

      // Add Circle for Shirpur Area (simulating the highlighted region)
      // Using a larger, soft circle to mimic a highlighted territory
      L.circle(shirpurCoords, {
        color: '#548CA8',
        fillColor: '#548CA8',
        fillOpacity: 0.1,
        weight: 1,
        radius: 3000
      }).addTo(map);

      // Add Main Shirpur Marker
      const mainPopup = `
        <div class="text-center p-2">
          <h3 class="font-bold text-lg text-[#548CA8] mb-1">Shirpur</h3>
          <p class="text-xs text-gray-600 font-medium tracking-wider uppercase">Headquarters</p>
        </div>
      `;
      L.marker(shirpurCoords, { icon: PulseIcon })
        .addTo(map)
        .bindPopup(mainPopup);

      // Add Project Markers
      projects.forEach(project => {
        const popupContent = `
          <div class="text-center p-2">
            <h4 class="font-bold text-[#548CA8] mb-1">${project.name}</h4>
            <span class="text-[10px] bg-[#96CADC]/20 text-[#548CA8] px-2 py-0.5 rounded-full font-bold uppercase tracking-wide">
              ${project.type}
            </span>
          </div>
        `;
        L.marker(project.coords, { icon: PulseIcon })
          .addTo(map)
          .bindPopup(popupContent);
      });
    }

    // Cleanup on unmount
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <style>{`
        .marker-pulse {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: rgba(84, 140, 168, 0.4);
          animation: map-pulse 2s infinite;
        }
        .marker-core {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #548CA8;
          border: 2px solid white;
          box-shadow: 0 0 10px rgba(0,0,0,0.2);
        }
        @keyframes map-pulse {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(3); opacity: 0; }
        }
        .leaflet-popup-content-wrapper {
          border-radius: 12px;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
        }
        .leaflet-popup-tip {
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
        }
      `}</style>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold tracking-wider text-sm uppercase">Our Presence</span>
          <h2 className="text-4xl font-bold mt-2 mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Located in the Heart of Shirpur
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our prime locations across Dhule District, with a special focus on our developing township in Shirpur.
          </p>
        </div>

        <div className="h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl border-8 border-white relative z-10 transition-transform hover:scale-[1.01] duration-500">
          <div ref={mapContainerRef} className="h-full w-full bg-[#f8f9fa]" style={{ zIndex: 1 }} />
          
          {/* Overlay gradient for better blending */}
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.05)] z-[400] rounded-3xl"></div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl translate-y-1/3 translate-x-1/3"></div>
      </div>
    </section>
  );
};

export default MapSection;
