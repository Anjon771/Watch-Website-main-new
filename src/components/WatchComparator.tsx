import React, { useState } from 'react';
import { Columns, ArrowLeftRight, Check, ShoppingBag } from 'lucide-react';
import { WATCHES, Watch } from '../data/watches';

interface WatchComparatorProps {
  onBuyWatch: (watch: Watch) => void;
}

export const WatchComparator: React.FC<WatchComparatorProps> = ({ onBuyWatch }) => {
  const [watchIdA, setWatchIdA] = useState<string>(WATCHES[0].id);
  const [watchIdB, setWatchIdB] = useState<string>(WATCHES[1].id);

  const watchA = WATCHES.find((w) => w.id === watchIdA) || WATCHES[0];
  const watchB = WATCHES.find((w) => w.id === watchIdB) || WATCHES[1];

  const handleSwap = () => {
    setWatchIdA(watchIdB);
    setWatchIdB(watchIdA);
  };

  return (
    <div className="bg-[#e4e0e0] border border-neutral-300 rounded-xl p-6 md:p-8 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-neutral-300">
        <div>
          <span className="text-xs font-sans-ui text-neutral-600 uppercase tracking-widest font-bold">
            Interactive Horological Comparison
          </span>
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-neutral-900 mt-0.5">
            Compare Timepieces Side-by-Side
          </h3>
          <p className="text-xs sm:text-sm text-neutral-700 font-serif-luxury mt-1">
            Analyze Swiss movements, water resistance ratings, and architectural case dimensions.
          </p>
        </div>

        <button
          type="button"
          onClick={handleSwap}
          className="self-start sm:self-center flex items-center gap-2 px-3 py-2 bg-neutral-200 hover:bg-neutral-300 rounded text-xs font-sans-ui font-semibold text-neutral-800 transition-colors cursor-pointer border border-neutral-300"
          title="Swap timepieces"
        >
          <ArrowLeftRight className="w-3.5 h-3.5 text-[#880e0e]" />
          <span>Swap Models</span>
        </button>
      </div>

      {/* Selectors */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-xs font-sans-ui font-bold text-neutral-700 mb-1.5">
            Select First Model:
          </label>
          <select
            value={watchIdA}
            onChange={(e) => setWatchIdA(e.target.value)}
            className="w-full bg-white border border-neutral-400 rounded px-3 py-2 text-xs sm:text-sm font-sans-ui focus:outline-none focus:border-[#880e0e]"
          >
            {WATCHES.map((w) => (
              <option key={w.id} value={w.id}>
                {w.name} ({w.reference}) — {w.priceFormatted}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-sans-ui font-bold text-neutral-700 mb-1.5">
            Select Second Model:
          </label>
          <select
            value={watchIdB}
            onChange={(e) => setWatchIdB(e.target.value)}
            className="w-full bg-white border border-neutral-400 rounded px-3 py-2 text-xs sm:text-sm font-sans-ui focus:outline-none focus:border-[#880e0e]"
          >
            {WATCHES.map((w) => (
              <option key={w.id} value={w.id}>
                {w.name} ({w.reference}) — {w.priceFormatted}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Side-by-side comparison grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Watch A Card */}
        <div className="bg-white rounded-lg p-5 border border-neutral-300 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex justify-between items-center text-xs text-neutral-500 font-sans-ui mb-2">
              <span className="font-bold text-[#880e0e]">{watchA.category}</span>
              <span>Ref: {watchA.reference}</span>
            </div>

            <div className="h-56 bg-neutral-50 rounded flex items-center justify-center p-3 mb-4">
              <img
                src={watchA.image}
                alt={watchA.name}
                className="max-h-48 max-w-full object-contain"
              />
            </div>

            <h4 className="font-heading font-bold text-lg text-neutral-900 text-center">
              {watchA.name}
            </h4>
            <p className="text-center font-bold text-lg text-[#880e0e] mt-1 font-sans-ui">
              {watchA.priceFormatted}
            </p>
            <p className="text-xs text-neutral-600 font-serif-luxury mt-2 text-center line-clamp-2">
              {watchA.description}
            </p>

            {/* Spec rows */}
            <div className="mt-4 pt-4 border-t border-neutral-200 space-y-2 text-xs font-sans-ui">
              <div className="flex justify-between py-1 border-b border-neutral-100">
                <span className="text-neutral-500 font-medium">Movement</span>
                <span className="text-neutral-900 font-semibold text-right">{watchA.movement}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-100">
                <span className="text-neutral-500 font-medium">Water Resistance</span>
                <span className="text-neutral-900 font-semibold text-right">{watchA.waterResistance}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-100">
                <span className="text-neutral-500 font-medium">Dial</span>
                <span className="text-neutral-900 font-semibold text-right">{watchA.dialColor}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-neutral-500 font-medium">Case Material</span>
                <span className="text-neutral-900 font-semibold text-right">{watchA.caseMaterial}</span>
              </div>
            </div>
          </div>

          <div className="mt-5 pt-3">
            <button
              type="button"
              onClick={() => onBuyWatch(watchA)}
              className="w-full py-2.5 bg-[#880e0e] hover:bg-[#680b0b] text-white text-xs font-sans-ui font-bold uppercase tracking-wider rounded flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Reserve This Model</span>
            </button>
          </div>
        </div>

        {/* Watch B Card */}
        <div className="bg-white rounded-lg p-5 border border-neutral-300 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex justify-between items-center text-xs text-neutral-500 font-sans-ui mb-2">
              <span className="font-bold text-[#880e0e]">{watchB.category}</span>
              <span>Ref: {watchB.reference}</span>
            </div>

            <div className="h-56 bg-neutral-50 rounded flex items-center justify-center p-3 mb-4">
              <img
                src={watchB.image}
                alt={watchB.name}
                className="max-h-48 max-w-full object-contain"
              />
            </div>

            <h4 className="font-heading font-bold text-lg text-neutral-900 text-center">
              {watchB.name}
            </h4>
            <p className="text-center font-bold text-lg text-[#880e0e] mt-1 font-sans-ui">
              {watchB.priceFormatted}
            </p>
            <p className="text-xs text-neutral-600 font-serif-luxury mt-2 text-center line-clamp-2">
              {watchB.description}
            </p>

            {/* Spec rows */}
            <div className="mt-4 pt-4 border-t border-neutral-200 space-y-2 text-xs font-sans-ui">
              <div className="flex justify-between py-1 border-b border-neutral-100">
                <span className="text-neutral-500 font-medium">Movement</span>
                <span className="text-neutral-900 font-semibold text-right">{watchB.movement}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-100">
                <span className="text-neutral-500 font-medium">Water Resistance</span>
                <span className="text-neutral-900 font-semibold text-right">{watchB.waterResistance}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-neutral-100">
                <span className="text-neutral-500 font-medium">Dial</span>
                <span className="text-neutral-900 font-semibold text-right">{watchB.dialColor}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-neutral-500 font-medium">Case Material</span>
                <span className="text-neutral-900 font-semibold text-right">{watchB.caseMaterial}</span>
              </div>
            </div>
          </div>

          <div className="mt-5 pt-3">
            <button
              type="button"
              onClick={() => onBuyWatch(watchB)}
              className="w-full py-2.5 bg-[#880e0e] hover:bg-[#680b0b] text-white text-xs font-sans-ui font-bold uppercase tracking-wider rounded flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Reserve This Model</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
