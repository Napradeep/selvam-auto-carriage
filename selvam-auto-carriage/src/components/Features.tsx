
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Coins, Wrench, AlertTriangle } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <ShieldCheck className="text-orange-500" size={32} />,
      title: 'Trusted Local Service',
      description: 'Years of trustworthy service in Dharapuram with highly satisfied customers.'
    },
    {
      icon: <Clock className="text-blue-500" size={32} />,
      title: 'Fast Turnaround',
      description: 'Quick diagnostics and efficient repairs to get you back on the road safely.'
    },
    {
      icon: <Coins className="text-green-500" size={32} />,
      title: 'Affordable Pricing',
      description: 'Transparent, upfront pricing with no hidden costs or unnecessary add-ons.'
    },
    {
      icon: <Wrench className="text-zinc-300" size={32} />,
      title: 'Skilled Technicians',
      description: 'Experienced professionals equipped with modern diagnostic tools.'
    },
    {
      icon: <AlertTriangle className="text-red-500" size={32} />,
      title: 'Emergency Support',
      description: '24/7 emergency breakdown assistance when you need it the most.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-20 bg-zinc-950 border-b border-zinc-900 relative z-10 -mt-8">
      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 p-6 rounded-2xl hover:border-orange-500/50 transition-colors group"
            >
              <div className="w-14 h-14 bg-zinc-950 rounded-xl border border-zinc-800 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-inner">
                {feature.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
