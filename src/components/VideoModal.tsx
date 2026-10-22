import React from 'react';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-black rounded-xl max-w-4xl w-full overflow-hidden shadow-2xl border border-neutral-700"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-3 bg-neutral-900 border-b border-neutral-800 text-neutral-200">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-[#880e0e] font-sans-ui font-bold">
              Heritage Cinema
            </span>
            <span className="text-xs text-neutral-400">·</span>
            <span className="text-xs text-neutral-300 font-serif-luxury">Tissot Watchmaking Documentary</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close video"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="aspect-video w-full bg-black flex items-center justify-center">
          <video
            autoPlay
            controls
            className="w-full h-full object-contain"
            poster="/Content_Push_KnowHow_1080x810_Sapphire.webp"
          >
            <source src="/tissotvideo.mp4" type="video/mp4" />
            Your browser does not support HTML video.
          </video>
        </div>
      </div>
    </div>
  );
};
