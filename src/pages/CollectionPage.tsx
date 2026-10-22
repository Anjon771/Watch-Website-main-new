import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, Eye, ShoppingBag } from 'lucide-react';
import { WATCHES, Watch } from '../data/watches';

interface CollectionPageProps {
  onSelectWatch: (watch: Watch) => void;
  onBuyDirect: (watch: Watch) => void;
}

export const CollectionPage: React.FC<CollectionPageProps> = ({ onSelectWatch, onBuyDirect }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc'>('default');

  const categories = ['All', 'Men', 'Women', 'Sport', 'Heritage', 'Touch'];

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

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Title matching original shopnow.html: <h1><u>Latest Collection</u></h1> */}
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-neutral-900 tracking-wide underline decoration-[#880e0e] underline-offset-8">
          Latest Collection
        </h1>
        <p className="mt-3 text-sm sm:text-base text-neutral-700 font-serif-luxury italic">
          Explore our complete catalog of authentic Swiss timepieces. Each crafted with legendary Swiss precision.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-[#dedada] p-4 rounded-lg border border-neutral-300 shadow-xs space-y-3 font-sans-ui">
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
          {/* Search Input */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by model, reference, movement..."
              className="w-full pl-9 pr-3 py-2 bg-white border border-neutral-300 rounded text-xs sm:text-sm focus:outline-none focus:border-[#880e0e]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-neutral-700"
              >
                Clear
              </button>
            )}
          </div>

          {/* Sort By */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end text-xs">
            <SlidersHorizontal className="w-3.5 h-3.5 text-neutral-600" />
            <span className="font-semibold text-neutral-700">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-white border border-neutral-300 rounded px-2.5 py-1.5 font-medium focus:outline-none focus:border-[#880e0e]"
            >
              <option value="default">Featured Order</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 text-xs font-semibold rounded-full transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#880e0e] text-white shadow-xs'
                  : 'bg-neutral-200 hover:bg-neutral-300 text-neutral-800'
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="ml-auto text-xs text-neutral-600 self-center">
            {filteredWatches.length} of {WATCHES.length} pieces
          </span>
        </div>
      </div>

      {/* Cards Grid matching original .cards and .card */}
      <div className="flex flex-wrap justify-center gap-6 pt-4">
        {filteredWatches.length === 0 ? (
          <div className="text-center py-12 w-full font-serif-luxury text-neutral-600">
            <p className="text-lg">No timepieces match your criteria &ldquo;{searchQuery}&rdquo;</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-3 text-xs font-sans-ui text-[#880e0e] underline font-bold"
            >
              Reset filters
            </button>
          </div>
        ) : (
          filteredWatches.map((watch) => (
            <div
              key={watch.id}
              onClick={() => onSelectWatch(watch)}
              className="card bg-[#dddddd] p-3 rounded shadow-xs max-w-[300px] w-full flex flex-col items-center justify-between hover:text-[rgb(136,14,14)] transition-all cursor-pointer group border border-neutral-300/80"
              style={{
                fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
              }}
            >
              {/* Reference tag */}
              <div className="w-full flex justify-between items-center text-[10px] text-neutral-600 pb-1 font-sans-ui">
                <span className="font-semibold text-[#880e0e]">{watch.category}</span>
                <span>Ref: {watch.reference}</span>
              </div>

              {/* Watch Image matching original 300px scale */}
              <div className="relative w-[280px] h-[280px] bg-white/70 rounded p-2 flex items-center justify-center overflow-hidden">
                <img
                  src={watch.image}
                  alt={watch.name}
                  className="max-h-[260px] max-w-[260px] object-contain group-hover:scale-105 transition-transform duration-200"
                  loading="lazy"
                />

                {/* Quick view overlay button */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white/95 text-neutral-900 text-xs font-sans-ui font-semibold px-3 py-1.5 rounded-full shadow flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5 text-[#880e0e]" />
                    View Details
                  </span>
                </div>
              </div>

              {/* Title matching original <h3> */}
              <h3 className="font-heading font-bold text-sm sm:text-base text-center mt-3 text-neutral-900 group-hover:text-[rgb(136,14,14)] tracking-wide">
                {watch.name}
              </h3>

              {/* Price matching original <h5> */}
              <h5 className="font-bold text-sm text-[#880e0e] mt-1">
                {watch.priceFormatted}
              </h5>

              {/* Action Buttons: matching original <button>Buy</button> */}
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
                  <span>Buy</span>
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
