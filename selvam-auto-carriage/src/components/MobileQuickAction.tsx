
import { Phone, Navigation, MessageCircle } from 'lucide-react';

const MobileQuickAction = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-zinc-950/95 backdrop-blur-lg border-t border-zinc-800 z-50 px-2 py-3 pb-safe shadow-[0_-10px_40px_rgba(0,0,0,0.3)]">
      <div className="grid grid-cols-3 gap-2">
        <a
          href="tel:07598554598"
          className="flex flex-col items-center justify-center gap-1 text-orange-500 hover:text-orange-400 active:scale-95 transition-transform"
        >
          <div className="bg-orange-500/10 p-2 rounded-full">
            <Phone size={20} />
          </div>
          <span className="text-[10px] uppercase font-semibold">Call</span>
        </a>
        
        <a
          href="https://wa.me/917598554598"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 text-green-500 hover:text-green-400 active:scale-95 transition-transform"
        >
          <div className="bg-green-500/10 p-2 rounded-full">
            <MessageCircle size={20} />
          </div>
          <span className="text-[10px] uppercase font-semibold">WhatsApp</span>
        </a>
        
        <a
          href="https://maps.google.com/?q=Selvam+Auto+Carriage+Dharapuram"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 text-blue-500 hover:text-blue-400 active:scale-95 transition-transform"
        >
          <div className="bg-blue-500/10 p-2 rounded-full">
            <Navigation size={20} />
          </div>
          <span className="text-[10px] uppercase font-semibold">Directions</span>
        </a>
      </div>
    </div>
  );
};

export default MobileQuickAction;
