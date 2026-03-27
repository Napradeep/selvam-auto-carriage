import { Phone, MapPin, Mail, ChevronRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#051125] text-white pt-20 pb-8 border-t border-primary relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-50" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 relative z-10">
          
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-6">
              Selvam Auto <span className="text-secondary">Carriage</span>
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6 text-sm">
              Your trusted partner for comprehensive car care and maintenance in Dharapuram. We guarantee reliable and transparent service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-secondary"></span>
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About Us', href: '#about' },
                { name: 'Founder Journey', href: '#founder' },
                { name: 'Services', href: '#services' },
                { name: 'Gallery', href: '#gallery' },
                { name: 'Contact', href: '#contact' },
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group text-sm font-medium"
                  >
                    <ChevronRight size={14} className="text-secondary opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all duration-300" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-secondary"></span>
            </h4>
            <ul className="space-y-3">
              {[
                'Engine Repair',
                'General Service',
                'Oil Change',
                'Electrical Work',
                'Breakdown Support'
              ].map((service, index) => (
                <li key={index} className="text-gray-400 text-sm flex items-center gap-2 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary/50"></div>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 relative inline-block">
              Contact Info
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-secondary"></span>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-secondary shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm leading-relaxed font-medium">
                  By-Pass Road, Poolavadi Pirivu,<br />
                  Dharapuram
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-secondary shrink-0" />
                <a href="tel:07598554598" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                  +91 75985 54598
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-secondary shrink-0" />
                <a href="mailto:info@selvamautocarrege.com" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                  info@selvamautocarrege.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center relative z-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Selvam Auto Carriage. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
