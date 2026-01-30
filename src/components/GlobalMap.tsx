import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const GlobalMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapError, setMapError] = useState<string>('');
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const locations = [
    // South Africa
    { name: 'Johannesburg', lat: -26.2041, lng: 28.0473, description: 'Head Office', country: 'South Africa' },
    { name: 'Durban', lat: -29.8587, lng: 31.0218, description: 'KZN Operations', country: 'South Africa' },
    { name: 'Gqeberha', lat: -33.9608, lng: 25.6022, description: 'Eastern Cape Operations', country: 'South Africa' },
    { name: 'Cape Town', lat: -33.9249, lng: 18.4241, description: 'Western Operations', country: 'South Africa' },
    
    // Southern African Development Community (SADC) Countries
    { name: 'Lusaka', lat: -15.3875, lng: 28.3228, description: 'Zambia Operations', country: 'Zambia' },
    { name: 'Maputo', lat: -25.9692, lng: 32.5732, description: 'Mozambique Operations', country: 'Mozambique' },
    { name: 'Luanda', lat: -8.8390, lng: 13.2894, description: 'Angola Operations', country: 'Angola' },
    { name: 'Harare', lat: -17.8252, lng: 31.0335, description: 'Zimbabwe Operations', country: 'Zimbabwe' },
    { name: 'Gaborone', lat: -24.6282, lng: 25.9231, description: 'Botswana Operations', country: 'Botswana' },
    // Namibia remains as previously
    { name: 'Windhoek', lat: -22.5609, lng: 17.0658, description: 'Namibia Operations', country: 'Namibia' },
  ];

  // Country information for the info cards
  const countryInfo = [
    {
      name: 'South Africa',
      flag: '🇿🇦',
      cities: ['Johannesburg (Head Office)', 'Durban', 'Gqeberha', 'Cape Town'],
      operations: 'Full-service operations across major regions',
      color: '#007749' // Green from SA flag
    },
    {
      name: 'Zambia',
      flag: '🇿🇲',
      cities: ['Lusaka'],
      operations: 'Regional hub for central Africa operations',
      color: '#198a00' // Zambia green
    },
    {
      name: 'Mozambique',
      flag: '🇲🇿',
      cities: ['Maputo'],
      operations: 'Coastal and logistics operations',
      color: '#007168' // Mozambique teal
    },
    {
      name: 'Angola',
      flag: '🇦🇴',
      cities: ['Luanda'],
      operations: 'West Africa operations hub',
      color: '#cc092f' // Angola red
    },
    {
      name: 'Zimbabwe',
      flag: '🇿🇼',
      cities: ['Harare'],
      operations: 'Landlocked operations and distribution',
      color: '#de2910' // Zimbabwe red
    },
    {
      name: 'Botswana',
      flag: '🇧🇼',
      cities: ['Gaborone'],
      operations: 'Southern region operations',
      color: '#75aadb' // Botswana blue
    },
    {
      name: 'Namibia',
      flag: '🇳🇦',
      cities: ['Windhoek'],
      operations: 'Southwest Africa operations',
      color: '#003580' // Namibia blue
    }
  ];

  useEffect(() => {
    const initMap = () => {
      try {
        if (!mapRef.current) {
          setMapError('Map container not found');
          return;
        }

        // Check if Google Maps is available
        if (typeof google === 'undefined' || !google.maps) {
          setMapError('Google Maps API not loaded properly');
          return;
        }

        // Calculate center to show all Southern Africa locations
        const bounds = new google.maps.LatLngBounds();
        locations.forEach(location => {
          bounds.extend(new google.maps.LatLng(location.lat, location.lng));
        });

        const map = new google.maps.Map(mapRef.current, {
          zoom: 4,
          center: { lat: -15.0, lng: 25.0 }, // Center on Southern Africa
          restriction: {
            latLngBounds: {
              north: 0,   // Exclude North Africa
              south: -35,  // Bottom of South Africa
              east: 45,    // Eastern Mozambique coast
              west: 10     // Western Angola coast
            },
            strictBounds: false
          },
          styles: [
            {
              featureType: 'all',
              elementType: 'geometry',
              stylers: [{ color: '#f5f5f5' }],
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{ color: '#e1f5fe' }], // Light blue for water
            },
            {
              featureType: 'landscape',
              elementType: 'geometry',
              stylers: [{ color: '#f0f4c3' }], // Light green for land
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{ color: '#ffffff' }],
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{ color: '#757575' }],
            },
          ],
        });

        // Fit map to show all markers
        map.fitBounds(bounds);

        // Create markers with different colors by country
        const countryColors: Record<string, string> = {
          'South Africa': '#0F455D',    // Dark blue
          'Zambia': '#4CAF50',          // Green
          'Mozambique': '#2196F3',      // Blue
          'Angola': '#F44336',          // Red
          'Zimbabwe': '#FF9800',        // Orange
          'Botswana': '#9C27B0',        // Purple
          'Namibia': '#795548',         // Brown
        };

        locations.forEach((location) => {
          const markerColor = countryColors[location.country] || '#000000';
          
          const marker = new google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map: map,
            title: `${location.name}, ${location.country}`,
            icon: {
              path: google.maps.SymbolPath.CIRCLE,
              scale: 10,
              fillColor: markerColor,
              fillOpacity: 0.8,
              strokeColor: '#ffffff',
              strokeWeight: 2,
            },
            animation: google.maps.Animation.DROP,
          });

          const infoWindow = new google.maps.InfoWindow({
            content: `
              <div class="p-3 max-w-xs">
                <div class="flex items-center mb-2">
                  <div class="w-3 h-3 rounded-full mr-2" style="background-color: ${markerColor}"></div>
                  <h3 class="font-bold text-gray-900 text-lg">${location.name}</h3>
                </div>
                <div class="mb-2">
                  <span class="inline-block px-2 py-1 text-xs font-semibold rounded bg-gray-100 text-gray-700">
                    ${location.country}
                  </span>
                </div>
                <p class="text-gray-700">${location.description}</p>
                <div class="mt-3 pt-3 border-t border-gray-200">
                  <p class="text-sm text-gray-600">
                    <strong>Services:</strong> Full marketing and business solutions
                  </p>
                </div>
              </div>
            `,
          });

          marker.addListener('click', () => {
            infoWindow.open(map, marker);
          });

          // Add hover effect
          marker.addListener('mouseover', () => {
            marker.setIcon({
              ...marker.getIcon(),
              scale: 12,
            });
          });

          marker.addListener('mouseout', () => {
            marker.setIcon({
              ...marker.getIcon(),
              scale: 10,
            });
          });
        });

        setIsMapLoaded(true);
        setMapError('');

      } catch (error) {
        console.error('Failed to initialize map:', error);
        setMapError('Failed to load Google Maps. Please try again later.');
      }
    };

    // Check if API key is available
    const apiKey = 'AIzaSyBgtmDrI8g4cW1Tf9nxnwp1Si8KqEdD-XM';
    if (!apiKey) {
      setMapError('Google Maps API key not configured');
      return;
    }

    // Load Google Maps API if not already loaded
    if (typeof google === 'undefined') {
      // Check if script is already being loaded
      if (document.querySelector('script[src*="maps.googleapis.com"]')) {
        // Script is already loading, wait for it
        const checkGoogleLoaded = () => {
          if (typeof google !== 'undefined' && google.maps) {
            initMap();
          } else {
            setTimeout(checkGoogleLoaded, 100);
          }
        };
        checkGoogleLoaded();
        return;
      }

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initGlobalMap`;
      script.async = true;
      script.defer = true;
      
      // Set up global callback
      (window as any).initGlobalMap = initMap;
      
      script.onload = () => {
        console.log('Google Maps API loaded successfully');
      };
      
      script.onerror = () => {
        setMapError('Failed to load Google Maps. Please check your API key and internet connection.');
      };

      document.head.appendChild(script);
    } else {
      // Google Maps is already loaded
      initMap();
    }

    // Cleanup function
    return () => {
      if ((window as any).initGlobalMap) {
        delete (window as any).initGlobalMap;
      }
    };
  }, []);

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Footprint
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Serving clients across Southern Africa and the SADC region.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden relative mb-12"
        >
          {mapError && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
              <div className="text-center p-8">
                <div className="text-red-500 text-4xl mb-4">⚠️</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Map Unavailable</h3>
                <p className="text-gray-600 mb-4">{mapError}</p>
                <button
                  onClick={() => window.location.reload()}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Retry
                </button>
              </div>
            </div>
          )}
          
          {!isMapLoaded && !mapError && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Loading Southern Africa map...</p>
              </div>
            </div>
          )}
          
          <div 
            ref={mapRef} 
            className="w-full h-[600px]" 
            style={{ visibility: isMapLoaded ? 'visible' : 'hidden' }}
          />
		 <div className="flex flex-wrap justify-center gap-3 py-10  bg-gray-100 ">
			  {locations.map((country) => (
	<div 
  key={country.name} 
  className="inline-flex items-center px-4 py-2 backdrop-blur-md bg-white/10 border border-white/20 rounded-lg"
>
  <div className="font-semibold text-xs text-gray-800 whitespace-nowrap">
    {country.name}
  </div>
</div>
				
			  ))}
				  
			</div>
        </motion.div>

      </div>
    </section>
  );
};

export default GlobalMap;