import React, { useState } from 'react';
import { X, Check, ShieldCheck, Droplets, Gauge, Sparkles, ShoppingBag } from 'lucide-react';
import { Watch } from '../data/watches';

interface WatchModalProps {
  watch: Watch | null;
  onClose: () => void;
  onAddToCart: (watch: Watch, quantity: number) => void;
}

export const WatchModal: React.FC<WatchModalProps> = ({ watch, onClose, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!watch) return null;

  const handleAdd = () => {
    onAddToCart(watch, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative bg-[#ebebeb] text-[#0b0a0c] max-w-2xl w-full rounded-lg shadow-2xl border-2 border-neutral-400 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[rgb(175,170,170)] border-b border-neutral-400">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#880e0e] font-sans-ui font-bold">
              Ref: {watch.reference}
            </span>
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-black">
              {watch.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-black/10 text-neutral-800 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <div className="w-full sm:w-1/2 flex items-center justify-center bg-white p-4 rounded border border-neutral-300">
              <img
                src={watch.image}
                alt={watch.name}
                className="max-h-72 w-auto object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="w-full sm:w-1/2 space-y-4">
              <div>
                <span className="text-3xl font-heading font-bold text-[#880e0e]">
                  {watch.priceFormatted}
                </span>
                <span className="block text-xs text-neutral-600 mt-1">
                  Includes Swiss VAT & 2-Year International Warranty
                </span>
              </div>

              <p className="text-sm text-neutral-700 leading-relaxed font-serif-luxury">
                {watch.description}
              </p>

              <div className="space-y-2 text-xs font-sans-ui text-neutral-800 bg-[#dfdbdb] p-3 rounded border border-neutral-300">
                <div className="flex items-center gap-2">
                  <Gauge className="w-4 h-4 text-[#880e0e] shrink-0" />
                  <span><strong>Movement:</strong> {watch.movement}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Droplets className="w-4 h-4 text-[#880e0e] shrink-0" />
                  <span><strong>Water Resistance:</strong> {watch.waterResistance}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#880e0e] shrink-0" />
                  <span><strong>Dial:</strong> {watch.dialColor}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#880e0e] shrink-0" />
                  <span><strong>Case:</strong> {watch.caseMaterial}</span>
                </div>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-3 pt-2">
                <span className="text-sm font-sans-ui font-semibold">Quantity:</span>
                <div className="flex items-center border border-neutral-400 rounded bg-white overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1 bg-neutral-200 hover:bg-neutral-300 font-bold"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 text-sm font-sans-ui font-bold">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1 bg-neutral-200 hover:bg-neutral-300 font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#dedada] border-t border-neutral-400">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm font-sans-ui font-medium text-neutral-700 hover:text-black cursor-pointer"
          >
            Continue Browsing
          </button>

          <button
            type="button"
            onClick={handleAdd}
            disabled={added}
            className={`flex items-center gap-2 px-6 py-2.5 rounded font-sans-ui text-sm font-bold uppercase tracking-wider transition-all cursor-pointer shadow ${
              added
                ? 'bg-emerald-700 text-white'
                : 'bg-[#880e0e] hover:bg-[#680b0b] text-white'
            }`}
          >
            {added ? (
              <>
                <Check className="w-4 h-4" />
                Added to Bag!
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                Add to Bag • ${(watch.priceNumber * quantity).toLocaleString()}
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
