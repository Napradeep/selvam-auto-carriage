import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-semibold tracking-wider uppercase text-sm mb-4"
          >
            Get In Touch
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-primary mb-6"
          >
            Drive In Today
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg"
          >
            Visit our workshop or contact us for inquiries and emergency support.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-3xl shadow-[0_20px_50px_rgba(10,31,68,0.06)] overflow-hidden border border-gray-100">

          {/* Contact Information */}
          <div className="w-full lg:w-2/5 bg-primary p-10 md:p-14 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-[80px]" />

            <h3 className="text-3xl font-bold mb-8 relative z-10 text-white">Contact Details</h3>

            <div className="space-y-8 relative z-10">
              {[
                { icon: <MapPin size={24} className="text-secondary" />, title: 'Our Location', content: 'By-Pass Road, Poolavadi Pirivu, Dharapuram' },
                { icon: <Phone size={24} className="text-secondary" />, title: 'Phone Number', content: '+91 75985 54598', link: 'tel:07598554598' },
                { icon: <Mail size={24} className="text-secondary" />, title: 'Email Address', content: 'info@selvamautocarrege.com', link: 'mailto:info@selvamautocarrege.com' },
                { icon: <Clock size={24} className="text-secondary" />, title: 'Working Hours', content: 'Mon - Sun: 9:00 AM - 8:00 PM', sub: '24/7 Breakdown Support' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  className="flex items-start gap-5 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0 transition-colors group-hover:bg-white/20"
                  >
                    {item.icon}
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-lg text-white mb-1">{item.title}</h4>
                    {item.link ? (
                      <a href={item.link} className="text-gray-300 hover:text-white transition-colors block">
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-gray-300 leading-relaxed max-w-[250px]">{item.content}</p>
                    )}
                    {item.sub && <p className="text-secondary text-sm font-medium mt-1">{item.sub}</p>}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Direct CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-12 relative z-10"
            >
              <a
                href="tel:07598554598"
                className="flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-white w-full py-4 rounded-xl font-bold transition-all shadow-lg"
              >
                <Phone size={20} />
                Call For Appointment
              </a>
            </motion.div>
          </div>

          {/* Map */}
          <div className="w-full lg:w-3/5 min-h-[400px] lg:min-h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.4!2d77.515982!3d10.7481425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9bf21ad125f83%3A0x36a9c0174ed031e9!2sSelvam%20auto%20carrege!5e0!3m2!1sen!2sin!4v1711534000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '100%' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Selvam Auto Carrege Location"
              className="w-full h-full border-0"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
