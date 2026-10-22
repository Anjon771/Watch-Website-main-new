import React from 'react';
import { PhoneCall, Clock, ShieldCheck } from 'lucide-react';

export const TollFreeBanner: React.FC = () => {
  return (
    <div className="my-8 p-5 bg-[#d6d2d2] border border-neutral-400 rounded text-center shadow-xs">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-sm text-neutral-800">
        <div className="flex items-center gap-2 font-medium">
          <Clock className="w-4 h-4 text-[#880e0e]" />
          <span>Concierge Hours: Mon–Sat 9AM–8PM EST</span>
        </div>
        <div className="flex items-center gap-2 font-medium">
          <ShieldCheck className="w-4 h-4 text-[#880e0e]" />
          <span>Official Swiss Warranty & Verification</span>
        </div>
      </div>
      <div className="mt-3">
        <a
          href="tel:824-526-8843"
          className="inline-flex items-center gap-2 font-semibold text-base sm:text-lg text-[#0b0a0c] hover:text-[#880e0e] transition-colors underline decoration-[#880e0e] underline-offset-4"
        >
          <PhoneCall className="w-4 h-4 text-[#880e0e]" />
          <span>For further information you can call us at (toll free-824-526-8843)</span>
        </a>
      </div>
    </div>
  );
};
