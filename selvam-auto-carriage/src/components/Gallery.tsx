import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Play, Image as ImageIcon, Video as VideoIcon, ChevronLeft, ChevronRight } from 'lucide-react';

// Fixed arrays based on user uploads
const images = [
  '/image1.jpg',
  '/image2.jpg',
  '/image3.jpeg',
  '/image4.jpeg',
  '/image5.jpeg',
  '/image6.jpeg',
  '/image7.jpeg',
  '/image8.jpeg',
  '/image10.jpeg',
  '/image11.jpeg'
];
const videos = [
  '/video1.mp4',
  '/video2.mp4'
];

type MediaType = 'images' | 'videos';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState<MediaType>('images');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const currentMedia = activeTab === 'images' ? images : videos;

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'Escape') setSelectedIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! + 1) % currentMedia.length);
  };

  const handlePrevious = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! - 1 + currentMedia.length) % currentMedia.length);
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { type: "spring" as const, stiffness: 100 } }
  };

  return (
    <section id="gallery" className="py-24 bg-white border-t border-gray-100 relative z-10">
      <div className="container mx-auto px-4 md:px-6">

        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-semibold tracking-wider uppercase text-sm mb-4"
          >
            Our Workspace
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-primary mb-6"
          >
            Experience Our Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg"
          >
            Take a look inside our workshop and see the quality of our service.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 p-1 rounded-full shadow-inner">
            <button
              onClick={() => setActiveTab('images')}
              className={`flex items-center gap-2 px-8 py-3 rounded-full font-medium transition-all ${activeTab === 'images'
                  ? 'bg-white text-primary shadow-md'
                  : 'text-gray-500 hover:text-primary'
                }`}
            >
              <ImageIcon size={18} />
              Images
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`flex items-center gap-2 px-8 py-3 rounded-full font-medium transition-all ${activeTab === 'videos'
                  ? 'bg-white text-primary shadow-md'
                  : 'text-gray-500 hover:text-primary'
                }`}
            >
              <VideoIcon size={18} />
              Videos
            </button>
          </div>
        </div>

        {/* Media Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={container}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {activeTab === 'images' && images.map((src, index) => (
              <motion.div
                key={`img-${index}`}
                variants={item}
                className="relative overflow-hidden rounded-xl aspect-square cursor-pointer group shadow-sm bg-gray-100"
                onClick={() => setSelectedIndex(index)}
              >
                <img
                  src={src}
                  onError={(e) => { e.currentTarget.src = `https://images.unsplash.com/photo-1625047509168-a7026f36de04?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80`; }}
                  alt={`Workshop Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full text-white transform scale-50 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn size={24} />
                  </div>
                </div>
              </motion.div>
            ))}

            {activeTab === 'videos' && videos.map((src, index) => (
              <motion.div
                key={`vid-${index}`}
                variants={item}
                className="relative overflow-hidden rounded-xl aspect-square cursor-pointer group shadow-sm bg-gray-900"
                onClick={() => setSelectedIndex(index)}
              >
                <video
                  src={src}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-secondary/90 backdrop-blur-sm p-4 rounded-full text-white transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Play size={24} className="ml-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 text-white"
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-3 bg-white/10 rounded-full hover:bg-white/20 z-50 shadow-lg"
              onClick={() => setSelectedIndex(null)}
            >
              <X size={24} />
            </button>

            {/* Navigation Buttons */}
            <button
              className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-4 bg-white/5 rounded-full hover:bg-white/10 z-50 backdrop-blur-sm shadow-xl hidden sm:block"
              onClick={(e) => { e.stopPropagation(); handlePrevious(); }}
            >
              <ChevronLeft size={32} />
            </button>

            <button
              className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-4 bg-white/5 rounded-full hover:bg-white/10 z-50 backdrop-blur-sm shadow-xl hidden sm:block"
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
            >
              <ChevronRight size={32} />
            </button>

            {/* Content Swipe Container */}
            <motion.div
              key={selectedIndex}
              initial={{ scale: 0.9, opacity: 0, x: 50 }}
              animate={{ scale: 1, opacity: 1, x: 0 }}
              exit={{ scale: 0.9, opacity: 0, x: -50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl max-h-screen flex items-center justify-center cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              {activeTab === 'images' ? (
                <img
                  src={images[selectedIndex]}
                  onError={(e) => { e.currentTarget.src = `https://images.unsplash.com/photo-1625047509168-a7026f36de04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80`; }}
                  alt="Enlarged view"
                  className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl border border-white/10"
                />
              ) : (
                <div className="w-full aspect-video flex items-center justify-center">
                   <video
                    src={videos[selectedIndex]}
                    key={videos[selectedIndex]}
                    controls
                    autoPlay
                    className="max-w-full max-h-[80vh] rounded-lg shadow-2xl border border-white/10 outline-none"
                  />
                </div>
              )}
              
              {/* Media Counter/Indicator */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-white/10 px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-md">
                {selectedIndex + 1} / {currentMedia.length}
              </div>
            </motion.div>
            
            {/* Click outside to close (overlay area) */}
            <div className="absolute inset-0 z-0" onClick={() => setSelectedIndex(null)} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
