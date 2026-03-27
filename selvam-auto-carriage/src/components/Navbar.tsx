import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Story', to: 'founder' },
    { name: 'Services', to: 'services' },
    { name: 'Gallery', to: 'gallery' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
        }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center overflow-hidden border-2 border-secondary shadow-[0_0_15px_rgba(230,57,70,0.3)] group-hover:scale-105 transition-transform duration-300">
            <img src="/web_logo.png" alt="Selvam Auto Carriage Logo" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col">
            <h1 className={`text-xl md:text-2xl font-bold tracking-tight leading-tight transition-colors duration-300 ${isScrolled ? 'text-primary' : 'text-white'}`}>
              Selvam <span className="text-secondary font-black">Auto</span>
            </h1>
            <span className={`text-[10px] uppercase tracking-[0.2em] font-medium transition-colors duration-300 ${isScrolled ? 'text-gray-600' : 'text-gray-300'}`}>Carriage</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`text-sm font-semibold uppercase tracking-wider cursor-pointer transition-colors duration-300 ${isScrolled ? 'text-gray-700 hover:text-secondary' : 'text-gray-200 hover:text-white'}`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:07598554598"
            className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-5 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-orange-500/20"
          >
            <Phone size={16} />
            <span>Call Now</span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden focus:outline-none p-2 rounded-lg transition-colors duration-300 ${isScrolled ? 'text-primary hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 py-6 px-4 space-y-4 shadow-xl overflow-hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-700 hover:text-secondary text-base font-semibold uppercase tracking-wider py-2 transition-colors border-b border-gray-50 last:border-0"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-4">
              <a
                href="tel:07598554598"
                className="flex items-center justify-center gap-2 bg-secondary text-white py-4 rounded-xl font-bold transition-all shadow-md active:scale-95"
              >
                <Phone size={20} />
                <span>Call Now</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
