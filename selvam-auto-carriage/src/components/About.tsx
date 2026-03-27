import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  const features = [
    "Expert Mechanics",
    "Genuine Spare Parts",
    "Transparent Pricing",
    "On-Time Delivery"
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Images Layout */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden h-64 lg:h-80 shadow-lg mt-8">
                <img 
                  src="/image1.jpg" 
                  alt="Workshop mechanic working on engine" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-64 lg:h-80 shadow-lg">
                <img 
                  src="/image2.jpg" 
                  alt="Car repair service" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            
            {/* Experience Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                delay: 0.3,
                type: "spring",
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
              }}
              className="absolute bottom-8 -left-6 bg-primary text-white p-6 rounded-2xl shadow-[0_10px_30px_rgba(10,31,68,0.3)] border border-primary z-10"
            >
              <div className="text-4xl font-bold text-secondary mb-1">15+</div>
              <div className="text-sm font-medium">Years of<br />Excellence</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-block text-secondary font-semibold tracking-wider uppercase text-sm mb-4">
              About Our Workshop
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-6">
              Your Trusted Car Care Partner.
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              We provide reliable and high-quality car repair and maintenance services for all brands. Trusted by customers in Dharapuram for quality, transparency, and fast service.
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center gap-3 text-gray-800 font-medium"
                >
                  <CheckCircle2 className="text-secondary" size={20} />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>

            <a 
              href="#contact"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-medium transition-transform transform hover:-translate-y-1 shadow-md"
            >
              Contact Us Today
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
