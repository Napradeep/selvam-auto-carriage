
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const testimonials = [
    {
      name: 'Ramesh K.',
      text: 'Exceptional service! I took my car here for a general service and they were incredibly thorough. The pricing was transparent and the staff was very polite. Highly recommended in Dharapuram.',
      initials: 'RK',
      bgType: 'from-orange-500 to-red-500'
    },
    {
      name: 'Priya S.',
      text: 'My car broke down late at night on the bypass road. Selvam Auto Carriage responded quickly to my emergency call and fixed the issue on the spot. Lifesavers!',
      initials: 'PS',
      bgType: 'from-blue-500 to-indigo-600'
    },
    {
      name: 'Karthik V.',
      text: 'Got my car AC repaired and some electrical work done. They have genuine parts and skilled mechanics. The car feels brand new now. 5 stars for their professionalism.',
      initials: 'KV',
      bgType: 'from-green-500 to-emerald-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="reviews" className="py-24 bg-zinc-950 relative border-t border-zinc-800">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-64 bg-yellow-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-5 py-2 rounded-full mb-6 shadow-lg shadow-yellow-500/5"
          >
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <span className="text-white font-bold ml-2">5.0</span>
            <span className="text-gray-400 text-sm ml-1">Google Reviews</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            What Our <span className="text-yellow-500">Customers</span> Say
          </motion.h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {testimonials.map((review, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              className="bg-zinc-900/80 backdrop-blur-md border border-zinc-800 p-8 rounded-3xl relative hover:-translate-y-2 transition-transform duration-300"
            >
              <Quote className="text-zinc-800 absolute top-6 right-6" size={48} />
              
              <div className="flex text-yellow-500 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-8 relative z-10 italic">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-zinc-800/50 pt-6 mt-auto">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${review.bgType} flex items-center justify-center text-white font-bold text-lg shadow-inner`}>
                  {review.initials}
                </div>
                <div>
                  <h4 className="text-white font-bold">{review.name}</h4>
                  <span className="text-zinc-500 text-xs uppercase tracking-wider">Verified Customer</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Reviews;
