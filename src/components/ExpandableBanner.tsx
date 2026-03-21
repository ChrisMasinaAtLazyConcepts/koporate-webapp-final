import { useState, useEffect } from 'react';

const ExpandableBanner = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);

  // Check scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-collapse when scrolling down, expand when at top
  useEffect(() => {
    if (!isAtTop && isExpanded) {
      setIsExpanded(false);
    } else if (isAtTop && !isExpanded) {
      setIsExpanded(true);
    }
  }, [isAtTop]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Banner Container */}
      <div 
        className={`
          w-full bg-white shadow-md transition-all duration-500 ease-in-out
          ${isExpanded ? 'py-6' : 'py-2'}
        `}
      >
        <div className="container mx-auto px-4 relative">
          {/* Logo/Brand Area */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {/* Replace with your actual logo */}
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              {isExpanded && (
                <div className="transition-opacity duration-300">
                  <h1 className="text-xl font-bold text-gray-800">Your Brand</h1>
                  <p className="text-sm text-gray-600">Tagline or description</p>
                </div>
              )}
            </div>

            {/* Arrow Button - Only visible when not expanded OR at top */}
            {(!isExpanded || !isAtTop) && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="absolute right-4 bottom-0 transform translate-y-1/2 
                           bg-white rounded-full p-2 shadow-lg hover:shadow-xl 
                           transition-all duration-300 group focus:outline-none
                           border border-gray-200"
                aria-label={isExpanded ? "Collapse banner" : "Expand banner"}
              >
                <svg
                  className={`w-5 h-5 text-gray-600 transition-transform duration-300 
                              ${isExpanded ? 'rotate-180' : 'rotate-0'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M5 15l7-7 7 7" />
                </svg>
              </button>
            )}
          </div>

          {/* Expandable Content */}
          <div
            className={`
              overflow-hidden transition-all duration-500 ease-in-out
              ${isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}
            `}
          >
            <div className="border-t border-gray-200 pt-4">
              <p className="text-gray-600">
                This is your banner content. Add any promotional text, announcements, 
                or important information here.
              </p>
              <div className="mt-3 flex space-x-4">
                <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                  Learn More →
                </button>
                <button className="text-sm text-gray-600 hover:text-gray-700">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content from hiding under fixed banner */}
      <div className={isExpanded ? 'h-32' : 'h-14'}></div>
    </div>
  );
};

export default ExpandableBanner;