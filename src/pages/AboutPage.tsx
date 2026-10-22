import React from 'react';
import { Gem, ShieldCheck, Fingerprint, Waves } from 'lucide-react';
import { TollFreeBanner } from '../components/TollFreeBanner';

export const AboutPage: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-300">
      {/* Title */}
      <div className="border-b-2 border-neutral-400 pb-3">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-neutral-900 tracking-wide underline decoration-[#880e0e] underline-offset-8">
          About our watches
        </h2>
      </div>

      {/* Video Presentation */}
      <div className="bg-black/90 p-2 sm:p-4 rounded-xl shadow-lg border-2 border-neutral-400 overflow-hidden">
        <div className="aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden bg-black flex items-center justify-center">
          <video
            className="w-full h-full object-contain"
            controls
            preload="metadata"
            poster="/Content_Push_KnowHow_1080x810_Sapphire.webp"
          >
            <source src="/tissotvideo.mp4" type="video/mp4" />
            Your browser does not support HTML video.
          </video>
        </div>
        <p className="text-center text-xs sm:text-sm text-neutral-300 font-sans-ui mt-3 tracking-wide">
          Official Tissot Swiss Craftsmanship & Precision Engineering Film
        </p>
      </div>

      {/* Know-How Innovations Showcase */}
      <div className="space-y-12">
        {/* Sapphire */}
        <section className="bg-[#dedada] p-6 rounded-lg border border-neutral-300 shadow-xs">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-1/2 space-y-3">
              <div className="flex items-center gap-2">
                <Gem className="w-6 h-6 text-[#880e0e]" />
                <h2 className="text-2xl font-heading font-bold text-neutral-900 underline decoration-neutral-500">
                  Sapphire
                </h2>
              </div>
              <h3 className="text-base sm:text-lg text-neutral-800 leading-relaxed font-serif-luxury">
                A sapphire crystal gives a watch extremely high resistance to impact and superior screen and hand readability thanks to its transparency.
              </h3>
              <p className="text-xs sm:text-sm text-neutral-700 font-sans-ui leading-relaxed">
                Second only to diamonds in hardness, Tissot sapphire crystals undergo diamond-wheel cutting and anti-reflective treatment to ensure flawless clarity in all light conditions.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src="/Content_Push_KnowHow_1080x810_Sapphire.webp"
                alt="Tissot Sapphire Crystal Craftsmanship"
                className="rounded-lg shadow border border-neutral-400 max-h-72 object-cover hover:scale-102 transition-transform duration-300"
              />
            </div>
          </div>
        </section>

        {/* Ceramic */}
        <section className="bg-[#dedada] p-6 rounded-lg border border-neutral-300 shadow-xs">
          <div className="flex flex-col md:flex-row-reverse gap-6 items-center">
            <div className="w-full md:w-1/2 space-y-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-[#880e0e]" />
                <h2 className="text-2xl font-heading font-bold text-neutral-900 underline decoration-neutral-500">
                  Ceramic
                </h2>
              </div>
              <h3 className="text-base sm:text-lg text-neutral-800 leading-relaxed font-serif-luxury">
                This material is recognised to be one of the hardest substances and is perfectly suited to the external parts of a watch.
              </h3>
              <p className="text-xs sm:text-sm text-neutral-700 font-sans-ui leading-relaxed">
                Hypoallergenic, imperishable, and heat-resistant, high-tech ceramic ensures bezels and bracelet links retain their lustrous finish for decades without tarnishing.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src="/Content_Push_KnowHow_1080x810_Ceramic.webp"
                alt="Tissot Ceramic Watch Bezel"
                className="rounded-lg shadow border border-neutral-400 max-h-72 object-cover hover:scale-102 transition-transform duration-300"
              />
            </div>
          </div>
        </section>

        {/* Tactile */}
        <section className="bg-[#dedada] p-6 rounded-lg border border-neutral-300 shadow-xs">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-1/2 space-y-3">
              <div className="flex items-center gap-2">
                <Fingerprint className="w-6 h-6 text-[#880e0e]" />
                <h2 className="text-2xl font-heading font-bold text-neutral-900 underline decoration-neutral-500">
                  Tactile
                </h2>
              </div>
              <h3 className="text-base sm:text-lg text-neutral-800 leading-relaxed font-serif-luxury">
                This high-tech feature improves watch ergonomics and makes it unique and intuitive to use.
              </h3>
              <p className="text-xs sm:text-sm text-neutral-700 font-sans-ui leading-relaxed">
                Pioneered in 1999 with the T-Touch series, interactive capacitive sensors behind the sapphire crystal respond to your fingertips for instant barometric and compass readings.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src="/Content_Push_KnowHow_1080x810_TactileTechnology_New.webp"
                alt="Tissot Tactile Technology"
                className="rounded-lg shadow border border-neutral-400 max-h-72 object-cover hover:scale-102 transition-transform duration-300"
              />
            </div>
          </div>
        </section>

        {/* Water Resistance */}
        <section className="bg-[#dedada] p-6 rounded-lg border border-neutral-300 shadow-xs">
          <div className="flex flex-col md:flex-row-reverse gap-6 items-center">
            <div className="w-full md:w-1/2 space-y-3">
              <div className="flex items-center gap-2">
                <Waves className="w-6 h-6 text-[#880e0e]" />
                <h2 className="text-2xl font-heading font-bold text-neutral-900 underline decoration-neutral-500">
                  Water Resistance
                </h2>
              </div>
              <h3 className="text-base sm:text-lg text-neutral-800 leading-relaxed font-serif-luxury">
                All Tissot watch cases undergo several tests, including a water resistance check.
              </h3>
              <p className="text-xs sm:text-sm text-neutral-700 font-sans-ui leading-relaxed">
                Pressure chamber testing simulates harsh oceanic environments down to 300 meters (1,000 feet) to guarantee total hermetic sealing of crowns, cases, and crystals.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src="/Content_Push_KnowHow_1080x810_WaterResistant.webp"
                alt="Tissot Water Resistance Testing"
                className="rounded-lg shadow border border-neutral-400 max-h-72 object-cover hover:scale-102 transition-transform duration-300"
              />
            </div>
          </div>
        </section>
      </div>

      <TollFreeBanner />
    </div>
  );
};
