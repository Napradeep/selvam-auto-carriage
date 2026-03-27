
import { motion } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';

const Hero = () => {

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center pt-20 overflow-hidden bg-primary">
      {/* Background Video & Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary/70 z-10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/40 z-10 opacity-90" />
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="w-full h-full"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60"
          >
            <source src="/video1.mp4" type="video/mp4" />
          </video>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-6 z-20 relative text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ y: 0 }}
          className="max-w-4xl"
        >
          {/* Heading */}
          <motion.h1
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-4 tracking-tight drop-shadow-2xl"
          >
            Selvam Auto Carriage
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto font-light drop-shadow-md"
          >
            All Car Service – Trusted in Dharapuram
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="tel:07598554598"
              className="flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-full font-medium text-lg transition-all shadow-lg"
            >
              <Phone size={20} />
              <span>Call Now</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="#services"
              className="flex items-center justify-center gap-2 bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-full font-medium text-lg transition-all shadow-md"
            >
              <span>View Services</span>
              <ArrowRight size={20} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

