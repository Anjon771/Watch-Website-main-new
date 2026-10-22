import React from 'react';
import { ArrowRight, Award, Compass, Shield } from 'lucide-react';
import { TollFreeBanner } from '../components/TollFreeBanner';

interface HomePageProps {
  onNavigateToCollection: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigateToCollection }) => {
  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Quotation Headline from original index.html */}
      <div className="border-l-4 border-[#880e0e] pl-4 sm:pl-6 py-1">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-neutral-900 tracking-wide italic">
          &ldquo;You simply don&rsquo;t become official supplier to world aviation by chance&rdquo;
        </h2>
      </div>

      {/* Brand Story Paragraphs from original index.html */}
      <div className="space-y-4 text-base sm:text-lg text-neutral-800 leading-relaxed font-serif-luxury">
        <p>
          Known as an <strong>&ldquo;innovator by tradition,&rdquo;</strong> Tissot has accomplished a long line of firsts in watchmaking history, including creating the first-ever men&rsquo;s wristwatch. The brand&rsquo;s sporty timepieces are championed by collectors with an affinity for precision as well as by first-time buyers, thanks to their accessible price point.
        </p>
        <p>
          For more than 160 years, Tissot has produced timepieces of exceptional quality. As the Official Timekeeper of the NBA and Tour de France, Tissot watches maintain a high standard for accuracy and reliability. This commitment to being &ldquo;innovative by design&rdquo; can be seen in pieces like the iconic Powermatic movements, which boast 80 hours of battery reserve, and the Seastar dive collection, which is water-resistant up to 1,000 feet. With its dedication to quality, every Tissot watch features Swiss movements produced in-house to the highest specifications, bringing a standard of excellence to its devoted clientele.
        </p>
      </div>

      {/* Key Brand Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
        <div className="bg-[#dad5d5] p-4 rounded border border-neutral-300 flex items-start gap-3">
          <Award className="w-6 h-6 text-[#880e0e] shrink-0 mt-0.5" />
          <div>
            <h4 className="font-heading font-bold text-sm text-neutral-900">Official Timekeeper</h4>
            <p className="text-xs text-neutral-700 mt-0.5">Partnering with Tour de France, NBA & MotoGP worldwide.</p>
          </div>
        </div>
        <div className="bg-[#dad5d5] p-4 rounded border border-neutral-300 flex items-start gap-3">
          <Compass className="w-6 h-6 text-[#880e0e] shrink-0 mt-0.5" />
          <div>
            <h4 className="font-heading font-bold text-sm text-neutral-900">Powermatic 80</h4>
            <p className="text-xs text-neutral-700 mt-0.5">Extended 80-hour power reserve with antimagnetic Nivachron.</p>
          </div>
        </div>
        <div className="bg-[#dad5d5] p-4 rounded border border-neutral-300 flex items-start gap-3">
          <Shield className="w-6 h-6 text-[#880e0e] shrink-0 mt-0.5" />
          <div>
            <h4 className="font-heading font-bold text-sm text-neutral-900">Swiss Made Standards</h4>
            <p className="text-xs text-neutral-700 mt-0.5">Crafted in Le Locle, Switzerland to the highest specifications.</p>
          </div>
        </div>
      </div>

      {/* Original Hero Section with side-by-side watches and tagline */}
      <div className="mt-8 pt-4 border-t border-neutral-300">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="bg-white/90 p-4 rounded-lg shadow-sm border border-neutral-300 flex flex-col items-center">
            <span className="text-xs font-sans-ui uppercase tracking-widest text-neutral-500 mb-2 font-bold">
              Timepieces For Him
            </span>
            <img
              src="/watch_for_him_2.webp"
              alt="Tissot Watch for Him"
              className="max-h-80 md:max-h-96 w-auto object-contain hover:scale-102 transition-transform duration-300"
            />
          </div>

          <div className="bg-white/90 p-4 rounded-lg shadow-sm border border-neutral-300 flex flex-col items-center">
            <span className="text-xs font-sans-ui uppercase tracking-widest text-neutral-500 mb-2 font-bold">
              Timepieces For Her
            </span>
            <img
              src="/MenWomen_850x1050_Cecilia_PR100.webp"
              alt="Tissot PR100 Watch for Her"
              className="max-h-80 md:max-h-96 w-auto object-contain hover:scale-102 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Tagline & Browse CTA matching original tagline */}
        <div className="text-center py-8">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-neutral-900 leading-tight">
            Premium watches,<br />for Him and Her.
          </h3>
          <div className="mt-5">
            <button
              onClick={onNavigateToCollection}
              className="inline-flex items-center gap-2 bg-[rgb(175,170,170)] hover:bg-[#880e0e] hover:text-white text-black font-heading font-bold px-8 py-3.5 text-base border-2 border-black tracking-widest transition-all hover:scale-105 cursor-pointer shadow"
            >
              <span>BROWSE</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Toll free banner */}
      <TollFreeBanner />
    </div>
  );
};
