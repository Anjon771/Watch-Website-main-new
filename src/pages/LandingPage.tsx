import React, { useState, useMemo } from 'react';
import {
  Play,
  ArrowRight,
  ShieldCheck,
  Compass,
  Award,
  Clock,
  Sparkles,
  Droplets,
  Fingerprint,
  Gem,
  CheckCircle,
  Eye,
  ShoppingBag,
  Send,
  SlidersHorizontal,
  Search,
  PhoneCall,
  ChevronRight,
  RotateCcw
} from 'lucide-react';
import { WATCHES, Watch } from '../data/watches';
import { WatchComparator } from '../components/WatchComparator';
import { TollFreeBanner } from '../components/TollFreeBanner';

// Local high-fidelity horology imagery
import heroSwissAtelierImg from '../assets/images/hero_swiss_atelier_1792672479238.jpg';
import craftsmanshipCalibreImg from '../assets/images/craftsmanship_calibre_1792672499544.jpg';

interface LandingPageProps {
  onSelectWatch: (watch: Watch) => void;
  onBuyDirect: (watch: Watch) => void;
  onOpenVideo: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  onSelectWatch,
  onBuyDirect,
  onOpenVideo,
}) => {
  // Collection State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc'>('default');

  // Innovation Pillar Tab
  const [activeInnovation, setActiveInnovation] = useState<'sapphire' | 'ceramic' | 'tactile' | 'water'>('sapphire');

  // Concierge Form State
  const [conciergeForm, setConciergeForm] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    model: WATCHES[0].name,
    service: 'Private Boutique Showing',
    notes: '',
  });

  const [conciergeSubmitted, setConciergeSubmitted] = useState(false);
  const [conciergeTicketId, setConciergeTicketId] = useState('');

  // Filtered Collection
  const filteredWatches = useMemo(() => {
    return WATCHES.filter((watch) => {
      const matchesSearch =
        watch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        watch.reference.toLowerCase().includes(searchQuery.toLowerCase()) ||
        watch.movement.toLowerCase().includes(searchQuery.toLowerCase()) ||
        watch.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === 'All' || watch.category === selectedCategory;

      return matchesSearch && matchesCategory;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.priceNumber - b.priceNumber;
      if (sortBy === 'price-desc') return b.priceNumber - a.priceNumber;
      return 0;
    });
  }, [searchQuery, selectedCategory, sortBy]);

  const handleConciergeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!conciergeForm.fname || !conciergeForm.lname || !conciergeForm.email) return;

    const tkt = `CH-TISSOT-${Date.now().toString().slice(-6)}`;
    setConciergeTicketId(tkt);
    setConciergeSubmitted(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const innovations = {
    sapphire: {
      title: 'Sapphire Crystal',
      subtitle: 'Second Only to Diamond in Absolute Hardness',
      img: '/Content_Push_KnowHow_1080x810_Sapphire.webp',
      text: 'A sapphire crystal gives a watch extremely high resistance to impact and superior screen and hand readability thanks to its exceptional transparency. Diamond-wheel cut and anti-reflective treated on both faces.',
      stats: '9 Mohs Hardness · Scratchproof · Anti-Reflective Coating',
    },
    ceramic: {
      title: 'High-Tech Ceramic',
      subtitle: 'Pristine Lustre That Never Fades',
      img: '/Content_Push_KnowHow_1080x810_Ceramic.webp',
      text: 'This material is recognised to be one of the hardest substances in horology and is perfectly suited to external bezels and bracelet links. Hypoallergenic, featherlight, and completely inert to UV exposure.',
      stats: '1500°C Sintered · Hypoallergenic · Indestructible Color',
    },
    tactile: {
      title: 'Tactile Technology',
      subtitle: 'The World’s First Touchscreen Sapphire (1999)',
      img: '/Content_Push_KnowHow_1080x810_TactileTechnology_New.webp',
      text: 'This high-tech feature improves watch ergonomics and makes it unique and intuitive to use. Capacitive electrodes behind the crystal activate altimeter, compass, barometer, and chronograph modes at a fingertip touch.',
      stats: '13 Sensor Functions · Solar Powered · Altimeter & Barometer',
    },
    water: {
      title: 'Water Resistance',
      subtitle: 'Hermetic Sealing Down to 1,000 Feet',
      img: '/Content_Push_KnowHow_1080x810_WaterResistant.webp',
      text: 'All Tissot watch cases undergo rigorous testing in pressurized hyperbaric chambers to simulate underwater depths up to 30 bar (300 meters / 1,000 feet). Equipped with screw-down crown and helium escape valve.',
      stats: 'Up to 300m / 30 Bar · Screw-Down Crown · Divers ISO 6425',
    },
  };

  return (
    <div className="space-y-20 lg:space-y-28">
      {/* 1. HERO SECTION */}
      <section id="top" className="relative -mt-4 sm:-mt-6 md:-mt-8 lg:-mt-10 -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-10 rounded-b-2xl overflow-hidden shadow-2xl border-b border-neutral-400">
        <div className="relative min-h-[640px] lg:min-h-[720px] flex items-center">
          {/* Hero background image */}
          <img
            src={heroSwissAtelierImg}
            alt="Tissot Swiss Watchmaking Atelier in Le Locle"
            className="absolute inset-0 w-full h-full object-cover object-center z-0"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/hero_swiss_atelier_1792672479238.jpg';
            }}
          />

          {/* Measured Scrim allowing the Swiss atelier & snowy Alps backdrop to shine through */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/30 z-1" />

          {/* Hero Content */}
          <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 py-16 lg:py-24 text-white">
            <div className="inline-flex items-center gap-2 text-xs font-sans-ui font-semibold uppercase tracking-[0.25em] text-[#d48c8c] mb-4">
              <span>Le Locle, Switzerland</span>
              <span aria-hidden="true">·</span>
              <span>Founded 1853</span>
              <span aria-hidden="true">·</span>
              <span>Official NBA & Tour de France Timekeeper</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight leading-tight max-w-3xl text-balance">
              Swiss Precision Born in Le Locle. Innovators by Tradition.
            </h1>

            <p className="mt-6 text-base sm:text-lg md:text-xl font-serif-luxury italic text-neutral-200 max-w-2xl leading-relaxed">
              &ldquo;You simply don&rsquo;t become official supplier to world aviation by chance.&rdquo;
            </p>

            <p className="mt-4 text-sm sm:text-base font-sans-ui text-neutral-300 max-w-2xl leading-relaxed">
              For over 170 years, Tissot has defined Swiss horological excellence. From the first mass-produced pocket watch to the revolutionary 80-hour Powermatic movement, we craft accessible luxury for collectors with an affinity for absolute precision.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={() => scrollToSection('collection')}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#880e0e] hover:bg-[#a11111] text-white text-sm font-sans-ui font-bold uppercase tracking-wider rounded transition-all hover:scale-105 cursor-pointer shadow-lg"
              >
                <span>Explore Latest Collection</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onOpenVideo}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-xs text-sm font-sans-ui font-semibold rounded transition-colors cursor-pointer"
              >
                <Play className="w-4 h-4 text-[#d48c8c] fill-current" />
                <span>Watch Heritage Film (2 min)</span>
              </button>
            </div>
          </div>
        </div>

        {/* 4-Column Horological Metric Strip */}
        <div className="bg-[#1b1919] text-white py-6 px-6 sm:px-10 border-t border-neutral-700">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-heading font-extrabold text-[#d48c8c] tabular-nums">
                80 Hours
              </div>
              <p className="text-xs font-sans-ui text-neutral-300 uppercase tracking-wider font-medium">
                Powermatic Autonomy
              </p>
            </div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-heading font-extrabold text-[#d48c8c] tabular-nums">
                300 Meters
              </div>
              <p className="text-xs font-sans-ui text-neutral-300 uppercase tracking-wider font-medium">
                Seastar Hyperbaric Depth
              </p>
            </div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-heading font-extrabold text-[#d48c8c] tabular-nums">
                170+ Years
              </div>
              <p className="text-xs font-sans-ui text-neutral-300 uppercase tracking-wider font-medium">
                Continuous Swiss Legacy
              </p>
            </div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-heading font-extrabold text-[#d48c8c] tabular-nums">
                100% In-House
              </div>
              <p className="text-xs font-sans-ui text-neutral-300 uppercase tracking-wider font-medium">
                Swiss Calibre Production
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HERITAGE & DUAL SHOWCASE SECTION (#heritage) */}
      <section id="heritage" className="space-y-12 scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-sans-ui uppercase tracking-widest text-[#880e0e] font-bold">
            Chapter 01 · Heritage & Origins
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-neutral-900 mt-1">
            Ahead of the Rest Since 1853
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-700 font-serif-luxury leading-relaxed">
            Founded in Le Locle, Switzerland by father-and-son watchmaking duo Charles-Félicien and Charles-Émile Tissot, our atelier has pioneered horology for over sixteen decades.
          </p>
        </div>

        {/* Side-by-side Hero Timepiece Showcase from original assets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="bg-[#dedada] p-6 sm:p-8 rounded-xl border border-neutral-300 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between text-xs font-sans-ui text-neutral-600 mb-2">
                <span className="font-bold text-[#880e0e] uppercase tracking-wider">For Him</span>
                <span>Alpine Chronograph Series</span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-neutral-900">
                Commanding Alpine Chronographs
              </h3>
              <p className="mt-2 text-sm text-neutral-700 font-serif-luxury leading-relaxed">
                Equipped with automotive-inspired counters, tactile tachymeter bezels, and robust 316L stainless steel architecture designed for extreme athletic endurance.
              </p>
            </div>
            <div className="py-6 flex items-center justify-center">
              <img
                src="/watch_for_him_2.webp"
                alt="Tissot Watch For Him"
                className="max-h-72 object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="pt-4 border-t border-neutral-300 flex items-center justify-between">
              <span className="text-xs font-sans-ui text-neutral-600">Starting from $150</span>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('Men');
                  scrollToSection('collection');
                }}
                className="text-xs font-sans-ui font-bold text-[#880e0e] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>Browse Men’s Collection</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="bg-[#dedada] p-6 sm:p-8 rounded-xl border border-neutral-300 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between text-xs font-sans-ui text-neutral-600 mb-2">
                <span className="font-bold text-[#880e0e] uppercase tracking-wider">For Her</span>
                <span>PR 100 & Carson Series</span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-neutral-900">
                Timeless Grace & Diamond Accents
              </h3>
              <p className="mt-2 text-sm text-neutral-700 font-serif-luxury leading-relaxed">
                Featuring radiant mother-of-pearl dials, delicate fluted bezels, and fluid link bracelets crafted for effortless transitions from boardroom to evening gala.
              </p>
            </div>
            <div className="py-6 flex items-center justify-center">
              <img
                src="/MenWomen_850x1050_Cecilia_PR100.webp"
                alt="Tissot PR100 Watch For Her"
                className="max-h-72 object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="pt-4 border-t border-neutral-300 flex items-center justify-between">
              <span className="text-xs font-sans-ui text-neutral-600">Starting from $239</span>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('Women');
                  scrollToSection('collection');
                }}
                className="text-xs font-sans-ui font-bold text-[#880e0e] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>Browse Women’s Collection</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Historical Milestones */}
        <div className="bg-[#ebebeb] p-6 sm:p-8 rounded-xl border border-neutral-300">
          <h4 className="font-heading font-bold text-lg text-neutral-900 mb-6 text-center">
            Pivotal Breakthroughs in Watchmaking History
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm font-sans-ui">
            <div className="p-4 bg-white rounded border border-neutral-200 space-y-1">
              <span className="text-xs font-bold text-[#880e0e]">1853 · Le Locle</span>
              <h5 className="font-bold text-neutral-900">Dual-Time Pocket Watch</h5>
              <p className="text-xs text-neutral-600">First mass-produced pocket watch and first dual-timezone timepiece.</p>
            </div>
            <div className="p-4 bg-white rounded border border-neutral-200 space-y-1">
              <span className="text-xs font-bold text-[#880e0e]">1930 · Innovation</span>
              <h5 className="font-bold text-neutral-900">First Antimagnetic Watch</h5>
              <p className="text-xs text-neutral-600">Protected mechanical balances from emerging electrical magnetic fields.</p>
            </div>
            <div className="p-4 bg-white rounded border border-neutral-200 space-y-1">
              <span className="text-xs font-bold text-[#880e0e]">1999 · Tactile Dawn</span>
              <h5 className="font-bold text-neutral-900">T-Touch Sensor Screen</h5>
              <p className="text-xs text-neutral-600">The world’s first touchscreen sapphire crystal wristwatch.</p>
            </div>
            <div className="p-4 bg-white rounded border border-neutral-200 space-y-1">
              <span className="text-xs font-bold text-[#880e0e]">Present · Precision</span>
              <h5 className="font-bold text-neutral-900">Powermatic 80 Calibre</h5>
              <p className="text-xs text-neutral-600">80 hours of battery-free power reserve with patented Nivachron balance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INNOVATIONS & KNOW-HOW SECTION (#innovations) */}
      <section id="innovations" className="space-y-10 scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-sans-ui uppercase tracking-widest text-[#880e0e] font-bold">
            Chapter 02 · Horological Know-How
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-neutral-900 mt-1">
            Engineered for Extremes
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-700 font-serif-luxury">
            Every material and component in a Tissot timepiece undergoes rigorous metallurgical and pressure testing to guarantee longevity across generations.
          </p>
        </div>

        {/* Interactive Innovation Tabs */}
        <div className="flex justify-center">
          <div className="inline-flex p-1 bg-[#dedada] rounded-lg border border-neutral-300 gap-1 overflow-x-auto max-w-full">
            {(['sapphire', 'ceramic', 'tactile', 'water'] as const).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setActiveInnovation(key)}
                className={`px-4 py-2 text-xs font-sans-ui font-semibold rounded-md transition-all cursor-pointer whitespace-nowrap ${
                  activeInnovation === key
                    ? 'bg-[#880e0e] text-white shadow-xs'
                    : 'text-neutral-700 hover:text-black hover:bg-neutral-200'
                }`}
              >
                {innovations[key].title}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Innovation Showcase */}
        <div className="bg-[#dedada] p-6 sm:p-10 rounded-2xl border border-neutral-300 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-sans-ui font-bold text-[#880e0e] uppercase tracking-wider">
                {activeInnovation === 'sapphire' && <Gem className="w-4 h-4" />}
                {activeInnovation === 'ceramic' && <ShieldCheck className="w-4 h-4" />}
                {activeInnovation === 'tactile' && <Fingerprint className="w-4 h-4" />}
                {activeInnovation === 'water' && <Droplets className="w-4 h-4" />}
                <span>Technical Know-How</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-neutral-900">
                {innovations[activeInnovation].title}
              </h3>
              <p className="text-sm font-sans-ui font-semibold text-neutral-700">
                {innovations[activeInnovation].subtitle}
              </p>
              <p className="text-base text-neutral-800 font-serif-luxury leading-relaxed">
                {innovations[activeInnovation].text}
              </p>

              <div className="pt-2">
                <span className="inline-block text-xs font-sans-ui font-bold text-neutral-900 bg-white/80 px-3 py-1.5 rounded border border-neutral-300">
                  {innovations[activeInnovation].stats}
                </span>
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src={innovations[activeInnovation].img}
                alt={innovations[activeInnovation].title}
                className="rounded-xl shadow-lg border border-neutral-400 max-h-80 w-auto object-cover hover:scale-102 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Embedded Heritage Film Preview Card */}
        <div className="bg-[#1b1919] text-white p-6 sm:p-8 rounded-2xl border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-sans-ui uppercase tracking-widest text-[#d48c8c] font-bold">
              Watchmaking Documentary
            </span>
            <h4 className="text-xl sm:text-2xl font-heading font-bold">
              Experience the Craftsmanship of Le Locle
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300 font-serif-luxury max-w-xl">
              Take an intimate look inside the Swiss ateliers where master watchmakers assemble each mechanical component by hand.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenVideo}
            className="flex items-center gap-2 px-6 py-3 bg-[#880e0e] hover:bg-[#a11111] text-white font-sans-ui text-xs font-bold uppercase tracking-wider rounded transition-all hover:scale-105 cursor-pointer shadow whitespace-nowrap shrink-0"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>Play Video Film</span>
          </button>
        </div>
      </section>

      {/* 4. MASTER CRAFTSMANSHIP & CALIBRE SECTION (#craftsmanship) */}
      <section id="craftsmanship" className="space-y-10 scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-sans-ui uppercase tracking-widest text-[#880e0e] font-bold">
            Chapter 03 · Master Craftsmanship
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-neutral-900 mt-1">
            The Heart of Mechanical Precision
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-700 font-serif-luxury">
            Behind every exhibition caseback lies the soul of Swiss horology: hand-decorated bridges, blued screws, and antimagnetic Nivachron escapements.
          </p>
        </div>

        <div className="bg-[#dedada] rounded-2xl border border-neutral-300 overflow-hidden shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="p-6 sm:p-10 space-y-4">
              <span className="text-xs font-sans-ui font-bold text-[#880e0e] uppercase tracking-wider">
                Powermatic 80 Architecture
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-neutral-900">
                80 Hours of Uninterrupted Power
              </h3>
              <p className="text-sm sm:text-base text-neutral-800 font-serif-luxury leading-relaxed">
                While traditional mechanical watches deplete their mainspring within 36 to 48 hours, Tissot revolutionized the movement architecture to store a remarkable 80 hours of autonomy. Remove your timepiece on Friday evening and pick it up on Monday morning without resetting the hour.
              </p>

              <div className="space-y-2 text-xs font-sans-ui text-neutral-800 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span><strong>Nivachron Balance Spring:</strong> Impervious to magnetic fields produced by mobile phones and laptops.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span><strong>Laser-Regulated Oscillation:</strong> Factory laser calibrated for chronometer-grade day-to-day rate consistency.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span><strong>Geneva Waves & Rotor Engraving:</strong> Visible through scratch-resistant exhibition sapphire crystal casebacks.</span>
                </div>
              </div>
            </div>

            <div className="h-full min-h-[320px] bg-neutral-900 flex items-center justify-center overflow-hidden">
              <img
                src={craftsmanshipCalibreImg}
                alt="Swiss Calibre Movement with Oscillating Rotor"
                className="w-full h-full object-cover max-h-[460px] hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/craftsmanship_calibre_1792672499544.jpg';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE COLLECTION SHOWCASE (#collection) */}
      <section id="collection" className="space-y-8 scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-sans-ui uppercase tracking-widest text-[#880e0e] font-bold">
            Chapter 04 · Official Timepiece Collection
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-neutral-900 mt-1">
            Latest Collection
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-700 font-serif-luxury">
            Explore 36 authentic Swiss timepieces. Each piece is accompanied by international warranty and boutique concierge verification.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-[#dedada] p-4 rounded-xl border border-neutral-300 shadow-xs space-y-3 font-sans-ui">
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search models, references, movements..."
                className="w-full pl-9 pr-3 py-2 bg-white border border-neutral-300 rounded text-xs sm:text-sm focus:outline-none focus:border-[#880e0e]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-neutral-700 cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 w-full sm:w-auto justify-end text-xs">
              <SlidersHorizontal className="w-3.5 h-3.5 text-neutral-600" />
              <span className="font-semibold text-neutral-700">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-white border border-neutral-300 rounded px-2.5 py-1.5 font-medium focus:outline-none focus:border-[#880e0e]"
              >
                <option value="default">Featured Horology</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {['All', 'Men', 'Women', 'Sport', 'Heritage', 'Touch'].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#880e0e] text-white shadow-xs'
                    : 'bg-neutral-200 hover:bg-neutral-300 text-neutral-800'
                }`}
              >
                {cat}
              </button>
            ))}
            <span className="ml-auto text-xs text-neutral-600 self-center tabular-nums">
              Showing {filteredWatches.length} of {WATCHES.length} pieces
            </span>
          </div>
        </div>

        {/* Product Cards Grid matching original 300px scale */}
        <div className="flex flex-wrap justify-center gap-6 pt-2">
          {filteredWatches.length === 0 ? (
            <div className="text-center py-16 w-full font-serif-luxury text-neutral-600">
              <p className="text-lg">No timepieces match your criteria &ldquo;{searchQuery}&rdquo;</p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="mt-3 text-xs font-sans-ui text-[#880e0e] underline font-bold cursor-pointer"
              >
                Reset filters
              </button>
            </div>
          ) : (
            filteredWatches.map((watch) => (
              <div
                key={watch.id}
                onClick={() => onSelectWatch(watch)}
                className="card bg-[#dddddd] p-3 rounded-lg shadow-xs max-w-[300px] w-full flex flex-col items-center justify-between hover:text-[rgb(136,14,14)] transition-all cursor-pointer group border border-neutral-300"
                style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}
              >
                <div className="w-full flex justify-between items-center text-[10px] text-neutral-600 pb-1 font-sans-ui">
                  <span className="font-semibold text-[#880e0e]">{watch.category}</span>
                  <span className="tabular-nums">Ref: {watch.reference}</span>
                </div>

                <div className="relative w-[280px] h-[280px] bg-white/70 rounded p-2 flex items-center justify-center overflow-hidden">
                  <img
                    src={watch.image}
                    alt={watch.name}
                    className="max-h-[260px] max-w-[260px] object-contain group-hover:scale-105 transition-transform duration-200"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/95 text-neutral-900 text-xs font-sans-ui font-semibold px-3 py-1.5 rounded-full shadow flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5 text-[#880e0e]" />
                      Quick View
                    </span>
                  </div>
                </div>

                <h3 className="font-heading font-bold text-sm sm:text-base text-center mt-3 text-neutral-900 group-hover:text-[rgb(136,14,14)] tracking-wide">
                  {watch.name}
                </h3>

                <h5 className="font-bold text-sm text-[#880e0e] mt-1 tabular-nums">
                  {watch.priceFormatted}
                </h5>

                <div className="flex gap-2 w-full mt-3">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onBuyDirect(watch);
                    }}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 bg-[#c5c5c5] hover:bg-[#880e0e] hover:text-white text-black font-sans-ui font-bold text-xs uppercase tracking-wider rounded transition-all hover:scale-105 cursor-pointer shadow-xs"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Buy / Reserve</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Side-by-side Watch Comparison Tool */}
        <div className="pt-8">
          <WatchComparator onBuyWatch={onBuyDirect} />
        </div>
      </section>

      {/* 6. COLLECTOR PROOF & TESTIMONIALS SECTION */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-sans-ui uppercase tracking-widest text-[#880e0e] font-bold">
            Chapter 05 · Global Trust
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-neutral-900 mt-1">
            Championed by Collectors Worldwide
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-700 font-serif-luxury">
            From cockpits crossing the Atlantic to deep-sea oceanic expeditions, discover why enthusiasts rely on Tissot.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#dedada] p-6 rounded-xl border border-neutral-300 shadow-xs flex flex-col justify-between">
            <p className="text-sm font-serif-luxury italic text-neutral-800 leading-relaxed">
              &ldquo;In aviation, readability and anti-magnetic stability are non-negotiable. The V8 Alpine chronograph cockpit counters remain crystal-clear during heavy instrument flight.&rdquo;
            </p>
            <div className="mt-4 pt-4 border-t border-neutral-300">
              <div className="font-sans-ui font-bold text-sm text-neutral-900">Captain Marc Vernier</div>
              <div className="text-xs text-neutral-600 font-sans-ui">Airline Captain & Aerobatic Aviator</div>
              <div className="text-[11px] text-[#880e0e] font-sans-ui font-semibold mt-1">Owns: Tissot V8 Alpine</div>
            </div>
          </div>

          <div className="bg-[#dedada] p-6 rounded-xl border border-neutral-300 shadow-xs flex flex-col justify-between">
            <p className="text-sm font-serif-luxury italic text-neutral-800 leading-relaxed">
              &ldquo;The Seastar 1000 with ceramic bezel survived multiple 250m hyperbaric dives without losing a single second. It matches timepieces four times its price in ruggedness.&rdquo;
            </p>
            <div className="mt-4 pt-4 border-t border-neutral-300">
              <div className="font-sans-ui font-bold text-sm text-neutral-900">Dr. Elena Rostova</div>
              <div className="text-xs text-neutral-600 font-sans-ui">Marine Biologist & Technical Diver</div>
              <div className="text-[11px] text-[#880e0e] font-sans-ui font-semibold mt-1">Owns: Tissot Seastar 1000 Diver</div>
            </div>
          </div>

          <div className="bg-[#dedada] p-6 rounded-xl border border-neutral-300 shadow-xs flex flex-col justify-between">
            <p className="text-sm font-serif-luxury italic text-neutral-800 leading-relaxed">
              &ldquo;The Powermatic 80 movement with Nivachron balance is one of Switzerland’s most impressive horological feats. Taking it off Friday and finding it ticking Monday is pure joy.&rdquo;
            </p>
            <div className="mt-4 pt-4 border-t border-neutral-300">
              <div className="font-sans-ui font-bold text-sm text-neutral-900">Julian Meyer</div>
              <div className="text-xs text-neutral-600 font-sans-ui">Horology Historian & Collector</div>
              <div className="text-[11px] text-[#880e0e] font-sans-ui font-semibold mt-1">Owns: Tissot Heritage 1973</div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BOUTIQUE CONCIERGE & APPOINTMENT RESERVATIONS (#concierge) */}
      <section id="concierge" className="space-y-8 scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-sans-ui uppercase tracking-widest text-[#880e0e] font-bold">
            Chapter 06 · Boutique Concierge
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-neutral-900 mt-1">
            Reserve Your Timepiece or Schedule Support
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-700 font-serif-luxury">
            Book an appointment with an official Tissot horological specialist for wrist sizing, custom caseback engraving, or priority reservation.
          </p>
        </div>

        <div className="bg-[#dedada] p-6 sm:p-10 rounded-2xl border border-neutral-300 shadow-md max-w-3xl mx-auto">
          {conciergeSubmitted ? (
            <div className="p-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-neutral-900">
                Reservation Confirmed!
              </h3>
              <p className="text-sm text-neutral-700 font-serif-luxury leading-relaxed">
                Thank you, <strong>{conciergeForm.fname} {conciergeForm.lname}</strong>. Your inquiry for the <strong>{conciergeForm.model}</strong> has been registered with reference ID:
              </p>
              <div className="inline-block bg-white px-4 py-2 rounded border border-neutral-300 font-sans-ui font-bold text-sm text-[#880e0e]">
                {conciergeTicketId}
              </div>
              <p className="text-xs text-neutral-600 font-sans-ui">
                A confirmation has been dispatched to <strong>{conciergeForm.email}</strong>. Our Le Locle concierge will connect with you within 4 business hours.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setConciergeSubmitted(false);
                    setConciergeForm({
                      fname: '',
                      lname: '',
                      email: '',
                      phone: '',
                      model: WATCHES[0].name,
                      service: 'Private Boutique Showing',
                      notes: '',
                    });
                  }}
                  className="px-6 py-2.5 bg-[#880e0e] hover:bg-[#680b0b] text-white text-xs font-sans-ui font-bold uppercase tracking-wider rounded transition-colors cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleConciergeSubmit} className="space-y-4 font-sans-ui">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    First Name *
                  </label>
                  <input
                    required
                    type="text"
                    value={conciergeForm.fname}
                    onChange={(e) => setConciergeForm({ ...conciergeForm, fname: e.target.value })}
                    placeholder="First Name"
                    className="w-full px-3.5 py-2.5 bg-white border border-neutral-400 rounded text-sm focus:outline-none focus:border-[#880e0e]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    Last Name *
                  </label>
                  <input
                    required
                    type="text"
                    value={conciergeForm.lname}
                    onChange={(e) => setConciergeForm({ ...conciergeForm, lname: e.target.value })}
                    placeholder="Last Name"
                    className="w-full px-3.5 py-2.5 bg-white border border-neutral-400 rounded text-sm focus:outline-none focus:border-[#880e0e]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    required
                    type="email"
                    value={conciergeForm.email}
                    onChange={(e) => setConciergeForm({ ...conciergeForm, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-2.5 bg-white border border-neutral-400 rounded text-sm focus:outline-none focus:border-[#880e0e]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    Phone Number (optional)
                  </label>
                  <input
                    type="tel"
                    value={conciergeForm.phone}
                    onChange={(e) => setConciergeForm({ ...conciergeForm, phone: e.target.value })}
                    placeholder="(824) 526-8843"
                    className="w-full px-3.5 py-2.5 bg-white border border-neutral-400 rounded text-sm focus:outline-none focus:border-[#880e0e]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    Interested Timepiece
                  </label>
                  <select
                    value={conciergeForm.model}
                    onChange={(e) => setConciergeForm({ ...conciergeForm, model: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-neutral-400 rounded text-sm focus:outline-none focus:border-[#880e0e]"
                  >
                    {WATCHES.map((w) => (
                      <option key={w.id} value={w.name}>
                        {w.name} ({w.reference}) — {w.priceFormatted}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    Service Requested
                  </label>
                  <select
                    value={conciergeForm.service}
                    onChange={(e) => setConciergeForm({ ...conciergeForm, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-neutral-400 rounded text-sm focus:outline-none focus:border-[#880e0e]"
                  >
                    <option value="Private Boutique Showing">Private Boutique Showing</option>
                    <option value="Wrist Sizing & Delivery">Wrist Sizing & Delivery</option>
                    <option value="Custom Caseback Engraving">Custom Caseback Engraving</option>
                    <option value="Corporate Gift Inquiry">Corporate Gift Inquiry</option>
                    <option value="General Technical Support">General Technical Support</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Message or Special Instructions
                </label>
                <textarea
                  rows={4}
                  value={conciergeForm.notes}
                  onChange={(e) => setConciergeForm({ ...conciergeForm, notes: e.target.value })}
                  placeholder="Specify wrist circumference in mm, preferred boutique appointment dates, or custom engraving text..."
                  className="w-full px-3.5 py-2.5 bg-white border border-neutral-400 rounded text-sm focus:outline-none focus:border-[#880e0e]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#880e0e] hover:bg-[#680b0b] text-white text-xs font-sans-ui font-bold uppercase tracking-wider rounded shadow transition-all hover:scale-102 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Concierge Request</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Toll-Free Concierge Phone Banner */}
        <TollFreeBanner />
      </section>
    </div>
  );
};
