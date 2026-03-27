import { motion } from 'framer-motion';

const Team = () => {
  return (
    <section id="team" className="py-24 bg-zinc-900 overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-sm font-semibold mb-6"
          >
            Meet the Experts
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Our Dedicated <span className="text-orange-500">Team</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400"
          >
            Our skilled technicians are experienced in handling all types of vehicles and repairs, ensuring top-quality service.
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          
          {/* Owner Profile Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-96 group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-orange-500/20 to-blue-600/20 rounded-3xl transform rotate-3 scale-105 group-hover:rotate-6 transition-transform duration-500 opacity-50" />
            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden relative z-10 p-6 flex flex-col items-center text-center shadow-2xl">
              
              <div className="w-40 h-40 rounded-full border-4 border-zinc-800 overflow-hidden mb-6 relative group-hover:border-orange-500 transition-colors duration-500 group-hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]">
                <img 
                  // Fallback to stock if user hasn't added owner.jpg yet
                  src="/images/owner.jpeg" 
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&q=80"; }}
                  alt="Selvam - Owner" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                Selvam
              </h3>
              <p className="text-orange-500 text-sm font-medium uppercase tracking-widest mb-4">
                Founder & Chief Mechanic
              </p>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                "With years of expertise in automobile repair and maintenance, I personally ensure top-quality service and complete customer satisfaction for every vehicle that enters our workshop."
              </p>
              
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Team;
