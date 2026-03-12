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
    { name: 'Windhoek', lat: -22.5609, lng: 17.0658, description: 'Namibia Operations', country: 'Namibia' },
  ];

  // Define colors for different countries
  const countryColors: Record<string, string> = {
    'South Africa': '#2563eb',     // Blue for South Africa
    'Zambia': '#10b981',           // Green for Zambia
    'Mozambique': '#f59e0b',       // Amber for Mozambique
    'Angola': '#ef4444',           // Red for Angola
    'Zimbabwe': '#8b5cf6',         // Purple for Zimbabwe
    'Botswana': '#06b6d4',         // Cyan for Botswana
    'Namibia': '#f97316',          // Orange for Namibia
  };

  // Group locations by country for legend
  const countries = Array.from(new Set(locations.map(loc => loc.country)));
  
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

        const map = new google.maps.Map(mapRef.current, {
          zoom: 4,
          center: { lat: -20.0, lng: 24.0 }, // Center for Southern Africa
          styles: [
            {
              featureType: 'all',
              elementType: 'geometry',
              stylers: [{ color: '#f5f5f5' }],
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{ color: '#e9e9e9' }],
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{ color: '#9e9e9e' }],
            },
          ],
        });

        // Create bounds to fit all markers
        const bounds = new google.maps.LatLngBounds();

        // Create markers for each location
        locations.forEach((location) => {
          const position = { lat: location.lat, lng: location.lng };
          
          // Extend bounds to include this location
          bounds.extend(position);

          // Define normal and hover icons
          const normalIcon: google.maps.Symbol = {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 8,
            fillColor: countryColors[location.country] || '#2563eb',
            fillOpacity: 1,
            strokeColor: '#ffffff',
            strokeWeight: 2,
          };

          const hoverIcon: google.maps.Symbol = {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 10,
            fillColor: countryColors[location.country] || '#2563eb',
            fillOpacity: 1,
            strokeColor: '#ffffff',
            strokeWeight: 3,
          };

          // Create marker
          const marker = new google.maps.Marker({
            position: position,
            map: map,
            title: `${location.name}, ${location.country}`,
            icon: normalIcon,
          });

          // Create info window
          const infoWindow = new google.maps.InfoWindow({
            content: `
              <div class="p-3 min-w-[200px]">
                <div class="flex items-center mb-2">
                  <div class="w-3 h-3 rounded-full mr-2" style="background-color: ${countryColors[location.country] || '#2563eb'}"></div>
                  <h3 class="font-bold text-gray-800 text-lg">${location.name}</h3>
                </div>
                <p class="text-sm text-gray-600 mb-1"><strong>Country:</strong> ${location.country}</p>
                <p class="text-sm text-gray-600">${location.description}</p>
              </div>
            `,
          });

          // Add click listener to open info window
          marker.addListener('click', () => {
            // Close any open info windows
            infoWindow.close();
            // Open this info window
            infoWindow.open(map, marker);
          });

          // Add mouseover effect
          marker.addListener('mouseover', () => {
            marker.setIcon(hoverIcon);
          });

          // Add mouseout effect
          marker.addListener('mouseout', () => {
            marker.setIcon(normalIcon);
          });
        });

        // Fit map to bounds
        map.fitBounds(bounds, {
          top: 50, right: 50, bottom: 50, left: 50
        });

        setIsMapLoaded(true);
        setMapError('');

      } catch (error) {
        console.error('Failed to initialize map:', error);
        setMapError('Failed to load Google Maps. Please try again later.');
      }
    };

    // Check if API key is available
    const apiKey = 'AIzaSyBqbY-JHa7K4HnhCDm2j_7VHYSqTcRWoUo';
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
            Our Regional Footprint
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Serving clients across Southern Africa with comprehensive marketing solutions
          </p>
          <br/>
          
          {/* Country Legend */}
          <div className="inline-flex flex-wrap justify-center gap-4 bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 mb-8">
            {countries.map((country, index) => (
              <div key={index} className="flex items-center">
                <div 
                  className="w-4 h-4 rounded-full mr-2" 
                  style={{ backgroundColor: countryColors[country] || '#2563eb' }}
                />
                <span className="text-white text-sm">{country}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden relative"
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
                <p className="text-gray-600">Loading regional map...</p>
              </div>
            </div>
          )}
          
          <div 
            ref={mapRef} 
            className="w-full h-96" 
            style={{ visibility: isMapLoaded ? 'visible' : 'hidden' }}
          />
        </motion.div>

        {/* Country Summary */}
        <div className="mt-12 mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Our Presence Across 7 Countries</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {countries.map((country, index) => {
              const countryLocations = locations.filter(loc => loc.country === country);
              return (
                <div 
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50"
                  style={{ borderLeftColor: countryColors[country] || '#2563eb', borderLeftWidth: '4px' }}
                >
                  <div className="flex items-center mb-3">
                    <div 
                      className="w-5 h-5 rounded-full mr-3" 
                      style={{ backgroundColor: countryColors[country] || '#2563eb' }}
                    />
                    <h4 className="text-lg font-bold text-white">{country}</h4>
                  </div>
                  <div className="space-y-2">
                    {countryLocations.map((loc, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-white/60 mr-2"></div>
                        <div>
                          <p className="text-white text-sm font-medium">{loc.name}</p>
                          <p className="text-gray-400 text-xs">{loc.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Location Dots Legend */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div 
                className="w-4 h-4 rounded-full mx-auto mb-2"
                style={{ backgroundColor: countryColors[location.country] || '#2563eb' }}
              />
              <h4 className="text-white font-semibold text-sm">{location.name}</h4>
              <p className="text-gray-400 text-xs">{location.country}</p>
              <p className="text-gray-500 text-xs mt-1">{location.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalMap;