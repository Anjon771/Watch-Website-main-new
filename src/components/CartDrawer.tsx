import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, CheckCircle, ArrowRight } from 'lucide-react';
import { Watch } from '../data/watches';

export interface CartItem {
  watch: Watch;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  onNavigateToContact: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onNavigateToContact,
}) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerNotes, setCustomerNotes] = useState('');

  if (!isOpen) return null;

  const totalAmount = items.reduce((acc, item) => acc + item.watch.priceNumber * item.quantity, 0);

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerEmail) return;
    setOrderComplete(true);
  };

  const handleFinish = () => {
    onClearCart();
    setOrderComplete(false);
    setIsCheckingOut(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div 
        className="w-full max-w-md bg-[#ececec] text-[#0b0a0c] h-full shadow-2xl flex flex-col border-l-2 border-neutral-400"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="px-6 py-4 bg-[rgb(175,170,170)] border-b border-neutral-400 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#880e0e]" />
            <h2 className="text-xl font-heading font-bold text-black">
              Your Timepiece Bag
            </h2>
            <span className="text-xs bg-[#880e0e] text-white px-2 py-0.5 rounded-full font-sans-ui font-semibold">
              {items.reduce((acc, i) => acc + i.quantity, 0)}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-black/10 text-neutral-800 transition-colors cursor-pointer"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {orderComplete ? (
          <div className="p-8 flex-1 flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-neutral-900">
              Reservation Inquired!
            </h3>
            <p className="text-sm text-neutral-700 leading-relaxed font-serif-luxury">
              Thank you, <strong>{customerName}</strong>. Our Tissot Swiss Timepiece Concierge has received your order inquiry for <strong>${totalAmount.toLocaleString()}</strong>. A dedicated representative will reach out to <strong>{customerEmail}</strong> promptly.
            </p>
            <div className="pt-4 w-full">
              <button
                onClick={handleFinish}
                className="w-full py-3 bg-[#880e0e] hover:bg-[#680b0b] text-white font-sans-ui font-bold rounded uppercase tracking-wider text-sm transition-colors cursor-pointer"
              >
                Back to Boutique
              </button>
            </div>
          </div>
        ) : isCheckingOut ? (
          <div className="p-6 flex-1 overflow-y-auto">
            <div className="mb-4">
              <button
                type="button"
                onClick={() => setIsCheckingOut(false)}
                className="text-xs font-sans-ui text-[#880e0e] font-semibold hover:underline"
              >
                &larr; Back to Bag Items
              </button>
              <h3 className="text-lg font-heading font-bold mt-2">
                Timepiece Reservation Inquiry
              </h3>
              <p className="text-xs text-neutral-600">
                Please complete your details to reserve your selected models with an official Tissot boutique specialist.
              </p>
            </div>

            <form onSubmit={handleCheckoutSubmit} className="space-y-4 font-sans-ui">
              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Full Name *
                </label>
                <input
                  required
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="e.g. Jean-Luc Dupont"
                  className="w-full px-3 py-2 bg-white border border-neutral-400 rounded text-sm focus:outline-none focus:border-[#880e0e]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Email Address *
                </label>
                <input
                  required
                  type="email"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full px-3 py-2 bg-white border border-neutral-400 rounded text-sm focus:outline-none focus:border-[#880e0e]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Phone Number (optional)
                </label>
                <input
                  type="tel"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder="(824) 526-8843"
                  className="w-full px-3 py-2 bg-white border border-neutral-400 rounded text-sm focus:outline-none focus:border-[#880e0e]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Special Delivery or Engraving Notes
                </label>
                <textarea
                  rows={3}
                  value={customerNotes}
                  onChange={(e) => setCustomerNotes(e.target.value)}
                  placeholder="Wrist sizing request, complimentary gift box, or engraving..."
                  className="w-full px-3 py-2 bg-white border border-neutral-400 rounded text-sm focus:outline-none focus:border-[#880e0e]"
                />
              </div>

              <div className="bg-[#dfdbdb] p-3 rounded text-xs space-y-1">
                <div className="flex justify-between font-semibold">
                  <span>Selected Pieces:</span>
                  <span>{items.reduce((acc, i) => acc + i.quantity, 0)} watch(es)</span>
                </div>
                <div className="flex justify-between font-bold text-sm text-[#880e0e]">
                  <span>Total Value:</span>
                  <span>${totalAmount.toLocaleString()}</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#880e0e] hover:bg-[#680b0b] text-white font-sans-ui font-bold rounded uppercase tracking-wider text-sm transition-colors cursor-pointer shadow"
              >
                Submit Reservation Request
              </button>
            </form>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {items.length === 0 ? (
                <div className="text-center py-16 text-neutral-500 font-serif-luxury">
                  <ShoppingBag className="w-12 h-12 mx-auto mb-3 opacity-40 text-neutral-600" />
                  <p className="text-base text-neutral-700">Your timepiece bag is currently empty.</p>
                  <p className="text-xs text-neutral-500 mt-1">
                    Explore our latest collection to select Swiss precision watches.
                  </p>
                </div>
              ) : (
                items.map(({ watch, quantity }) => (
                  <div
                    key={watch.id}
                    className="flex items-center gap-3 bg-white p-3 rounded border border-neutral-300 shadow-xs"
                  >
                    <img
                      src={watch.image}
                      alt={watch.name}
                      className="w-16 h-16 object-contain bg-neutral-100 rounded p-1 shrink-0"
                    />

                    <div className="flex-1 min-w-0">
                      <h4 className="font-heading font-bold text-sm text-neutral-900 truncate">
                        {watch.name}
                      </h4>
                      <p className="text-xs text-neutral-500">Ref: {watch.reference}</p>
                      <p className="text-xs font-bold text-[#880e0e] mt-0.5">
                        {watch.priceFormatted} &times; {quantity} = ${(watch.priceNumber * quantity).toLocaleString()}
                      </p>

                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex items-center border border-neutral-300 rounded text-xs">
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(watch.id, -1)}
                            className="px-2 py-0.5 bg-neutral-100 hover:bg-neutral-200"
                          >
                            -
                          </button>
                          <span className="px-2 py-0.5 font-bold">{quantity}</span>
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(watch.id, 1)}
                            className="px-2 py-0.5 bg-neutral-100 hover:bg-neutral-200"
                          >
                            +
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => onRemoveItem(watch.id)}
                          className="text-neutral-400 hover:text-red-600 p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-4 bg-[#dedada] border-t border-neutral-400 space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-neutral-700 font-sans-ui">Subtotal</span>
                  <span className="text-xl font-heading font-bold text-[#880e0e]">
                    ${totalAmount.toLocaleString()}
                  </span>
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={onClearCart}
                    className="px-3 py-2 text-xs font-sans-ui text-neutral-600 hover:text-red-700 border border-neutral-400 rounded"
                  >
                    Clear
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsCheckingOut(true)}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-[#880e0e] hover:bg-[#680b0b] text-white font-sans-ui font-bold rounded uppercase tracking-wider text-xs transition-colors cursor-pointer shadow"
                  >
                    <span>Proceed to Reserve</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
