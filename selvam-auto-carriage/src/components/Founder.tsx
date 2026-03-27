import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Founder = () => {
  return (
    <section id="founder" className="py-24 bg-white text-gray-900 overflow-hidden relative">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-5/12"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-secondary/20 to-primary/20 rounded-2xl blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative rounded-2xl overflow-hidden border border-gray-100 shadow-xl aspect-[4/5]">
                <img
                  src="/ceo_image.png"
                  alt="Anbumani - CEO & Founder"
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-3xl font-bold text-white">Anbumani</h3>
                  <p className="text-secondary font-medium tracking-widest uppercase text-sm mt-1">CEO & Founder</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-7/12"
          >
            <div className="inline-flex items-center gap-3 text-secondary mb-6">
              <Quote size={24} fill="currentColor" />
              <span className="font-semibold tracking-[0.2em] uppercase text-sm">The Journey</span>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed text-lg font-light">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-primary text-2xl md:text-3xl font-serif italic"
              >
                "Long before success had a name, there was only a young boy with a relentless spirit."
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                At the age of just 12, while others followed ordinary paths, he stepped into the demanding world of automobile workshops — a place filled with noise, heat, and hardship. With no comfort and no shortcuts, he chose to learn from the ground up.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-gray-50 border-l-4 border-secondary p-6 rounded-r-xl shadow-sm"
              >
                <p className="text-primary font-medium italic">
                  His early days were not easy. Long hours. Tough conditions. Endless challenges. But where others saw struggle, he saw opportunity.
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                Every engine he touched taught him something new. Every mistake refined his skill. Every single day, he showed up — stronger, sharper, more determined.
              </motion.p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                >
                  <h4 className="text-primary font-bold text-xl mb-2">Mastery Through Grit</h4>
                  <p className="text-sm">What began as a humble beginning slowly transformed into something powerful — a reputation built not on words, but on trust, precision, and consistency.</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                >
                  <h4 className="text-primary font-bold text-xl mb-2">Symbol of Excellence</h4>
                  <p className="text-sm">Today, he is not just part of the industry — he stands as a symbol of excellence within it. A name customers rely on.</p>
                </motion.div>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
                className="text-gray-600 border-t border-gray-200 pt-6"
              >
                This is not just a story of success. This is a story of sacrifice, of discipline, and of unstoppable determination.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.0 }}
                className="pt-4"
              >
                <p className="text-secondary font-bold text-xl tracking-wide uppercase">
                  From 12 to Mastery: The Man Behind Selvam Auto Carriage.
                </p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Founder;
