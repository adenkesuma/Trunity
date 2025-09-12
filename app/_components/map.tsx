"use client"
import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const defaultIcon = L.icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = defaultIcon;

const MapLocation = () => {
  const companyAddress = "Ruko Sentosaland, Jl. T. Amir Hamzah No.9n, Sei Agul, Kec. Medan Bar, Kota Medan, Sumatera Utara 20235";
  const encodedAddress = encodeURIComponent(companyAddress);
  const googleMapsUrl = 'https://www.google.com/maps/place/Trunity/@3.6068904,98.6663189,17z/data=!3m1!4b1!4m6!3m5!1s0x303131f29abc49eb:0xdb26518946492d6b!8m2!3d3.6068904!4d98.6663189!16s%2Fg%2F11xt21ppjj?hl=en-GB&entry=ttu&g_ep=EgoyMDI5MDkwOS4wIKXMDSoASAFQAw%3D%3D';
  
  // Koordinat Trunity Medan
  const latitude = 3.6068904;
  const longitude = 98.6663189;
  
  const mapRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && mapRef.current) {
      // Initialize map
      const map = L.map(mapRef.current).setView([latitude, longitude], 16);
      
      // Add OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
      
      // Add custom icon
      const customIcon = L.icon({
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        iconSize: [35, 45],
        iconAnchor: [17, 42],
        popupAnchor: [0, -40]
      });
      
      // Add marker
      L.marker([latitude, longitude], { icon: customIcon })
        .addTo(map)
        .bindPopup(`
          <div style="font-weight: bold; margin-bottom: 5px;">Trunity</div>
          <div>${companyAddress}</div>
        `)
        .openPopup();
      
      // Add click event to open Google Maps
      map.on('click', () => {
        window.open(googleMapsUrl, '_blank');
      });

      // Clean up function
      return () => {
        map.remove();
      };
    }
  }, [isClient, latitude, longitude, companyAddress, googleMapsUrl]);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl relative z-20 md:text-4xl lg:text-5xl font-bold text-center mb-2 text-blue-950 font-sans tracking-tight">
            Lokasi Kami
          </h2>
          <p className="text-lg text-gray-600 mx-auto">
            Kunjungi kantor kami untuk konsultasi langsung mengenai layanan asuransi yang tepat untuk kebutuhan Anda.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="w-full lg:w-2/3 h-[435px] rounded-2xl overflow-hidden">
            {/* Map container - will be initialized by Leaflet */}
            <div 
              ref={mapRef} 
              className="w-full h-full cursor-pointer"
              style={{ backgroundColor: '#e5e7eb' }}
            >
              {/* Fallback content while map loads */}
              {!isClient && (
                <div className="w-full h-full flex items-center justify-center bg-gray-200">
                  <div className="text-center p-4">
                    <div className="animate-pulse mb-4">
                      <svg className="w-12 h-12 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <p className="text-gray-500">Memuat peta...</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="w-full lg:w-1/3 bg-white p-6 rounded-2xl">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Lokasi Kantor</h3>
            <p className="text-gray-600 mb-6">{companyAddress}</p>
            
            <div className="mb-6">
              <h4 className="font-medium text-gray-800 mb-2">Jam Operasional:</h4>
              <p className="text-gray-600">Senin - Jumat: 09.00 - 17.30 WIB</p>
              <p className="text-gray-600">Sabtu: 09.00 - 13.00 WIB</p>
              <p className="text-gray-600">Minggu: Tutup</p>
            </div>
            
            <div className="mb-6">
              <h4 className="font-medium text-gray-800 mb-2">Kontak:</h4>
              <p className="text-gray-600">Telepon: (021) 1234-5678</p>
              <p className="text-gray-600">Email: trunityagency@gmail.com</p>
            </div>
            
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors"
            >
              Buka di Google Maps
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapLocation;
