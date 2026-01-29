import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Folder, Image as ImageIcon, ChevronRight, ExternalLink, Grid, Layers, Package, PenTool, Shirt, Droplets, FileText, Download } from 'lucide-react';
import Footer from '../components/Footer';
// Folder structure with icons mapping
const folderData = {
  'Annual Reports': {
    images: [
      './assets/images/wetransfer_website_2025-09-18_1414/website/Annual Reports/GVfy86fW4AAFn5n.jpg',
      './assets/images/wetransfer_website_2025-09-18_1414/website/Annual Reports/IBP-OBS-Annual-Report.jpg',
      './assets/images/wetransfer_website_2025-09-18_1414/website/Annual Reports/Screenshot 2024-09-23 124612.png',
      './assets/images/wetransfer_website_2025-09-18_1414/website/Annual Reports/Screenshot 2024-09-23 130226.png',
      './assets/images/wetransfer_website_2025-09-18_1414/website/Annual Reports/WhatsApp Image 2024-09-23 at 13.26.58.jpeg',
      './assets/images/wetransfer_website_2025-09-18_1414/website/Annual Reports/WhatsApp Image 2024-09-23 at 13.27.00.jpeg',
    ],
    icon: FileText,
    description: 'Professional annual reports and corporate documentation'
  },
  'Signage': {
    images: [
      './assets/images/wetransfer_website_2025-09-18_1414/website/Signage/top-signwriter-and-signage-tips.jpg',
      './assets/images/wetransfer_website_2025-09-18_1414/website/Signage/Screenshot 2024-09-23 131156.png',
      './assets/images/wetransfer_website_2025-09-18_1414/website/Signage/WhatsApp Image 2024-09-23 at 13.34.33 (1).jpeg',
      './assets/images/wetransfer_website_2025-09-18_1414/website/Signage/WhatsApp Image 2024-09-23 at 13.34.33.jpeg',
      './assets/images/wetransfer_website_2025-09-18_1414/website/Signage/WhatsApp Image 2024-09-23 at 13.34.34 (1).jpeg',
      './assets/images/wetransfer_website_2025-09-18_1414/website/Signage/WhatsApp Image 2024-09-23 at 13.34.34.jpeg',
    ],
    icon: Grid,
    description: 'Custom signage solutions for indoor and outdoor spaces'
  },
  'Executive Gift': {
    images: [
      './assets/images/wetransfer_website_2025-09-18_1414/website/website excutive gift/default_1024X1024 (1).jpg',
      './assets/images/wetransfer_website_2025-09-18_1414/website/website excutive gift/default_1024X1024 (2).jpg',
      './assets/images/wetransfer_website_2025-09-18_1414/website/website excutive gift/default_1024X1024 (3).jpg',
      './assets/images/wetransfer_website_2025-09-18_1414/website/website excutive gift/default_1024X1024 (4).jpg',
      './assets/images/wetransfer_website_2025-09-18_1414/website/website excutive gift/default_1024X1024 (5).jpg',
      './assets/images/wetransfer_website_2025-09-18_1414/website/website excutive gift/default_1024X1024 (6).jpg',
      './assets/images/wetransfer_website_2025-09-18_1414/website/website excutive gift/default_1024X1024 (8).jpg',
      './assets/images/wetransfer_website_2025-09-18_1414/website/website excutive gift/default_1024X1024.jpg',
    ],
    icon: Package,
    description: 'Premium corporate gifts and executive merchandise'
  },
  'Laptop Bags': {
    images: [
      './assets/images/wetransfer_website_2025-09-18_1414/website/website laptop bags/default_1024X1024 (1).jpg',
      './assets/images/wetransfer_website_2025-09-18_1414/website/website laptop bags/default_1024X1024 (2).jpg',
      './assets/images/wetransfer_website_2025-09-18_1414/website/website laptop bags/default_1024X1024 (3).jpg',
      './assets/images/wetransfer_website_2025-09-18_1414/website/website laptop bags/default_1024X1024 (4).jpg',
      './assets/images/wetransfer_website_2025-09-18_1414/website/website laptop bags/default_1024X1024 (5).jpg',
      './assets/images/wetransfer_website_2025-09-18_1414/website/website laptop bags/default_1024X1024 (6).jpg',
      './assets/images/wetransfer_website_2025-09-18_1414/website/website laptop bags/default_1024X1024 (7).jpg',
      './assets/images/wetransfer_website_2025-09-18_1414/website/website laptop bags/default_1024X1024 (8).jpg',
      './assets/images/wetransfer_website_2025-09-18_1414/website/website laptop bags/default_1024X1024 l.jpg',
      './assets/images/wetransfer_website_2025-09-18_1414/website/website laptop bags/default_260X250.jpg',
      './assets/images/wetransfer_website_2025-09-18_1414/website/website laptop bags/default_1024X1024.jpg',
    ],
    icon: Package,
    description: 'Branded laptop bags and professional carrying solutions'
  },
  'Stationery': {
    images: [
      './assets/images/wetransfer_website_2025-09-18_1414/website/website stationery/default_1024X1024 (3).jpg',
      './assets/images/wetransfer_website_2025-09-18_1414/website/website stationery/default_1024X1024 (4).jpg',
      './assets/images/wetransfer_website_2025-09-18_1414/website/website stationery/default_1024X1024 (5).jpg',
      './assets/images/wetransfer_website_2025-09-18_1414/website/website stationery/default_1024X1024 (6).jpg',
      './assets/images/wetransfer_website_2025-09-18_1414/website/website stationery/default_1024X1024 (7).jpg',
      './assets/images/wetransfer_website_2025-09-18_1414/website/website stationery/default_1024X1024.jpg',
      './assets/images/wetransfer_website_2025-09-18_1414/website/website stationery/Haus-006.jpg',
      './assets/images/wetransfer_website_2025-09-18_1414/website/website stationery/IDEA-5341-BL_1024X1024.jpg',
      './assets/images/wetransfer_website_2025-09-18_1414/website/website stationery/IDEA-55002-IDEA-55002-SW_1024X1024.jpg',
    ],
    icon: PenTool,
    description: 'Custom stationery and office branding solutions'
  },
  'T Shirts': {
    images: [
      './assets/images/wetransfer_website_2025-09-18_1414/website/website t shirts/2e910c03c29aa8f6aa63a7252a395114.jpg',
      './assets/images/wetransfer_website_2025-09-18_1414/website/website t shirts/6c8fd84afc8029b62e5312409f8664f9.jpg',
      './assets/images/wetransfer_website_2025-09-18_1414/website/website t shirts/ALT-ASMS-L-MOBK 3_1024X1024.jpg',
      './assets/images/wetransfer_website_2025-09-18_1414/website/website t shirts/default_1024X1024 (1).jpg',
      './assets/images/wetransfer_website_2025-09-18_1414/website/website t shirts/default_1024X1024 (2).jpg',
      './assets/images/wetransfer_website_2025-09-18_1414/website/website t shirts/default_1024X1024 (3).jpg',
      './assets/images/wetransfer_website_2025-09-18_1414/website/website t shirts/default_1024X1024 (4).jpg',
      './assets/images/wetransfer_website_2025-09-18_1414/website/website t shirts/default_1024X1024.jpg',
      './assets/images/wetransfer_website_2025-09-18_1414/website/website t shirts/GS-AV-263-A-GY-MOGR 040_1024X1024.jpg',
    ],
    icon: Shirt,
    description: 'Custom branded apparel and promotional clothing'
  },
  'Water Bottles': {
    images: [
      './assets/images/wetransfer_website_2025-09-18_1414/website/website water bottles/default_1024X1024.jpg',
      './assets/images/wetransfer_website_2025-09-18_1414/website/website water bottles/default_1024X1024 (1).jpg',
      './assets/images/wetransfer_website_2025-09-18_1414/website/website water bottles/default_1024X1024 (2).jpg',
      './assets/images/wetransfer_website_2025-09-18_1414/website/website water bottles/default_1024X1024 (3).jpg',
      './assets/images/wetransfer_website_2025-09-18_1414/website/website water bottles/default_1024X1024 (4).jpg',
      './assets/images/wetransfer_website_2025-09-18_1414/website/website water bottles/default_1024X1024 (5).jpg',
      './assets/images/wetransfer_website_2025-09-18_1414/website/website water bottles/default_1024X1024 (6).jpg',
      './assets/images/wetransfer_website_2025-09-18_1414/website/website water bottles/default_1024X1024 (7).jpg',
      './assets/images/wetransfer_website_2025-09-18_1414/website/website water bottles/default_1024X1024 (8).jpg',
      './assets/images/wetransfer_website_2025-09-18_1414/website/website water bottles/default_1024X1024 (9).jpg',
      './assets/images/wetransfer_website_2025-09-18_1414/website/website water bottles/default_1024X1024 (10).jpg',
      './assets/images/wetransfer_website_2025-09-18_1414/website/website water bottles/default_1024X1024 (11).jpg',
    ],
    icon: Droplets,
    description: 'Branded hydration products and drinkware solutions'
  }
};

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const categories = Object.entries(folderData);
  const totalImages = categories.reduce((total, [_, data]) => total + data.images.length, 0);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setSelectedImageIndex(0);
  };

  const handleNextImage = () => {
    if (selectedCategory) {
      const images = folderData[selectedCategory as keyof typeof folderData].images;
      setSelectedImageIndex((prev) => (prev + 1) % images.length);
    }
  };

  const handlePrevImage = () => {
    if (selectedCategory) {
      const images = folderData[selectedCategory as keyof typeof folderData].images;
      setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  const handleDownload = (imageUrl: string) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = imageUrl.split('/').pop() || 'image';
    link.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
 <section className="relative bg-gradient-to-r from-[#0F455D] to-[#105569] text-white overflow-hidden">
  <div className="absolute inset-0 bg-black/20" />
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center"
    >
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm mb-6">
        <Layers className="w-10 h-10" />
      </div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
        Gallery
      </h1>
      <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
        Explore our comprehensive work across branding, corporate gifting, and promotional merchandise
      </p>
    </motion.div>
  </div>
</section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Browse Our Work
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Select a category to view our portfolio of completed projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map(([category, data], index) => {
              const Icon = data.icon;
              const previewImages = data.images.slice(0, 4);
              
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleCategoryClick(category)}
                  className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer border border-gray-100 hover:border-[#0F455D]/20"
                >
                  {/* Category Header */}
                  <div className="p-6 bg-gradient-to-r from-gray-50 to-white border-b border-gray-100">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0F455D] to-[#00CFC1] flex items-center justify-center mr-4">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{category}</h3>
                          <p className="text-sm text-gray-500">{data.images.length} items</p>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#0F455D] transition-colors" />
                    </div>
                    <p className="text-gray-600 text-sm">{data.description}</p>
                  </div>

                  {/* Image Grid Preview */}
                  <div className="p-4">
                    <div className="grid grid-cols-2 gap-2">
                      {previewImages.map((image, imgIndex) => (
                        <div key={imgIndex} className="aspect-square overflow-hidden rounded-lg">
                          <img
                            src={image}
                            alt={`${category} ${imgIndex + 1}`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* View More Button */}
                  <div className="px-6 pb-6">
                    <button className="w-full py-3 bg-gradient-to-r from-gray-50 to-white text-[#0F455D] font-semibold rounded-lg border border-gray-200 hover:border-[#0F455D]/30 hover:bg-[#0F455D]/5 transition-all duration-300 group-hover:shadow-inner">
                      View All {data.images.length} Items
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gradient-to-r from-[#0F455D] to-[#105569] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">{categories.length}</div>
              <div className="text-gray-300">Categories</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">{totalImages}</div>
              <div className="text-gray-300">Total Items</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">7</div>
              <div className="text-gray-300">Service Areas</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-gray-300">Happy Clients</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedCategory && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-6xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0F455D] to-[#00CFC1] flex items-center justify-center mr-3">
                  {React.createElement(folderData[selectedCategory as keyof typeof folderData].icon, {
                    className: "w-5 h-5 text-white"
                  })}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedCategory}</h3>
                  <p className="text-gray-300">
                    Image {selectedImageIndex + 1} of {folderData[selectedCategory as keyof typeof folderData].images.length}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleDownload(folderData[selectedCategory as keyof typeof folderData].images[selectedImageIndex])}
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                  title="Download"
                >
                  <Download className="w-5 h-5 text-white" />
                </button>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Main Image */}
            <div className="relative rounded-xl overflow-hidden bg-black">
              <img
                src={folderData[selectedCategory as keyof typeof folderData].images[selectedImageIndex]}
                alt={`${selectedCategory} ${selectedImageIndex + 1}`}
                className="w-full h-[60vh] object-contain"
              />
              
              {/* Navigation Buttons */}
              <button
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white rotate-180" />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              {/* Image Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {folderData[selectedCategory as keyof typeof folderData].images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      selectedImageIndex === index
                        ? 'w-6 bg-white'
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
              {folderData[selectedCategory as keyof typeof folderData].images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImageIndex === index
                      ? 'border-[#00CFC1]'
                      : 'border-transparent hover:border-white/30'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;