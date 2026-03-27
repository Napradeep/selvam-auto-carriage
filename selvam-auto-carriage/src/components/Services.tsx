import { motion } from 'framer-motion';
import { 
  Wrench, 
  Settings, 
  Droplets, 
  Zap, 
  CarFront 
} from 'lucide-react';

const services = [
  {
    icon: <Wrench size={32} />,
    title: "Engine Repair",
    description: "Complete engine diagnostics, overhauls, and repairs for optimal performance.",
  },
  {
    icon: <Settings size={32} />,
    title: "General Service",
    description: "Comprehensive multi-point inspection and routine maintenance for all cars.",
  },
  {
    icon: <Droplets size={32} />,
    title: "Oil Change",
    description: "Premium synthetic oil changes and filter replacements to protect your engine.",
  },
  {
    icon: <Zap size={32} />,
    title: "Electrical Work",
    description: "Expert troubleshooting and repair for wiring, batteries, and AC systems.",
  },
  {
    icon: <CarFront size={32} />,
    title: "Breakdown Support",
    description: "Fast emergency breakdown assistance to get you back on the road safely.",
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-semibold tracking-wider uppercase text-sm mb-4"
          >
            What We Do
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-primary mb-6"
          >
            Premium Car Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg md:text-xl"
          >
            Comprehensive maintenance and repair services handled by our expert team.
          </motion.p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              whileHover={{ 
                y: -12,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="bg-white rounded-2xl p-8 border border-gray-100 transition-shadow duration-300 hover:shadow-[0_20px_40px_rgba(10,31,68,0.12)] group relative overflow-hidden"
            >
              {/* Decorative Background Element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-full -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-150" />
              
              <div className="w-16 h-16 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors duration-300 relative z-10">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed relative z-10">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
