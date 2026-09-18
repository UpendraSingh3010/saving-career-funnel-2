import React from 'react';
import { X, CheckCircle2, ShieldCheck } from 'lucide-react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

export const TermsModal: React.FC<TermsModalProps> = ({
  isOpen,
  onClose,
  darkMode,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div
        className={`relative w-full max-w-lg rounded-2xl border p-6 sm:p-8 my-8 shadow-2xl transition-all ${
          darkMode
            ? 'bg-[#0e0e0e] border-[#2a2a2a] text-white'
            : 'bg-white border-[#cbd5e1] text-[#0f172a]'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-[#8e8e93] hover:text-[#00ff88] hover:bg-white/5 transition-all cursor-pointer"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        <div className="flex items-center gap-2 mb-4">
          <ShieldCheck size={18} className="text-[#00ff88]" />
          <span className="font-mono-code text-xs text-[#8e8e93] uppercase tracking-wider">
            OFFICIAL VERIFICATION PROTOCOL
          </span>
        </div>

        <h3 className="font-display text-xl font-bold mb-4">
          How the Ranking Evaluation Works
        </h3>

        <div className="space-y-4 text-xs font-mono-code text-[#8e8e93] leading-relaxed">
          <div className="p-3 rounded-xl border border-inherit">
            <span className="text-[#00ff88] font-bold block mb-1">01 // Domain Verification</span>
            Your web asset must be live on an indexed domain with active Google Search Console access.
          </div>

          <div className="p-3 rounded-xl border border-inherit">
            <span className="text-[#00ff88] font-bold block mb-1">02 // Agreed Target Queries</span>
            Ranking keywords and AI search topics are mutually agreed upon during the kickoff milestone.
          </div>

          <div className="p-3 rounded-xl border border-inherit">
            <span className="text-[#00ff88] font-bold block mb-1">03 // Proof-First Threshold</span>
            Achieving organic SERP placement, Google AI Overview citation, or LLM source retrieval qualifies you for the 100% course fee waiver (₹0).
          </div>

          <div className="p-3 rounded-xl border border-inherit">
            <span className="text-[#00ff88] font-bold block mb-1">04 // Flexible Settlement</span>
            If you do not rank, the course fee is settled flexibly within 6 months. Registration (₹999) is always separate.
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-inherit flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg font-mono-code text-xs font-bold uppercase bg-[#00ff88] text-black hover:bg-[#00cc6a] cursor-pointer"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
};
