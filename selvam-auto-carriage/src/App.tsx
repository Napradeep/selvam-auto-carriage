
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Founder from './components/Founder';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import { BrowserRouter } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[999] bg-white flex flex-col items-center justify-center"
          >
            <div className="w-16 h-16 border-4 border-gray-200 border-t-primary rounded-full animate-spin"></div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-primary font-bold tracking-widest text-lg"
            >
              SELVAM AUTO
            </motion.h2>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-white text-gray-900 min-h-screen font-sans overflow-x-hidden relative">
        {/* Animated Background Elements */}
        <div className="fixed inset-0 z-0 pointer-events-none opacity-40 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
              x: [0, -50, 0],
              y: [0, 100, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-[40%] -right-[10%] w-[50%] h-[50%] bg-secondary/5 rounded-full blur-[100px]"
          />
        </div>

        <Navbar />

        <main className="relative z-10">
          <Hero />
          <About />
          <Founder />
          <Services />
          <Gallery />
          <Contact />
        </main>

        <Footer />

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/919942488809"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_6px_25px_rgba(37,211,102,0.5)] transition-all duration-300"
        >
          <MessageCircle size={28} />
        </a>
      </div>
    </BrowserRouter>
  );
}

export default App;
