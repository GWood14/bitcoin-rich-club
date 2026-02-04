
"use client";

import React, { useState } from 'react';
import { INITIAL_PRODUCTS, BTC_FIXED_AMOUNT } from '@/lib/constants';
import { ScarcityVisualizer } from '@/components/ScarcityVisualizer';
import { ArrowRight, QrCode, CreditCard } from 'lucide-react';

export default function ServicesPage() {
  const [selectedProduct] = useState(INITIAL_PRODUCTS[0]);
  const [purchaseStep, setPurchaseStep] = useState<'IDLE' | 'PAYMENT' | 'VERIFYING' | 'SUCCESS'>('IDLE');

  const handlePurchase = () => {
    setPurchaseStep('PAYMENT');
  };

  return (
    <section className="px-4 sm:px-12 pt-32 pb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 max-w-7xl mx-auto">

        {/* Product Media Column */}
        <div className="space-y-8">
          <div className="relative aspect-square bg-black border border-white/10 group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-brc-green z-20 animate-scan"></div>
            <img
              src={selectedProduct.imageUrl}
              alt={selectedProduct.nomenclature}
              className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
            />
            <div className="absolute bottom-6 left-6 font-mono text-[10px] flex flex-col gap-1">
              <span className="opacity-40 uppercase">REF_ID</span>
              <span className="font-bold tracking-widest">{selectedProduct.refId}</span>
            </div>
            <div className="absolute top-6 right-6 font-mono text-[10px] bg-black/80 px-2 py-1 border border-white/20">
              SERIAL: ARCH_01_CORE
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center font-mono text-[10px] tracking-widest opacity-40">
              <span>SCARCITY_VISUALIZER</span>
              <span>{selectedProduct.units.filter(u => u.status === 'ISSUED').length}/21 ISSUED</span>
            </div>
            <ScarcityVisualizer units={selectedProduct.units} status={selectedProduct.status} />
          </div>
        </div>

        {/* Info Column */}
        <div className="flex flex-col justify-center space-y-12">
          <div className="space-y-6">
            <h1 className="font-display text-7xl leading-tight italic">{selectedProduct.nomenclature}</h1>
            <p className="font-sans text-xl text-text-secondary leading-relaxed max-w-lg">
              {selectedProduct.description}
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-baseline gap-6">
              <span className="font-mono text-5xl font-bold tracking-tighter">{BTC_FIXED_AMOUNT} BTC</span>
              <span className="font-mono text-sm opacity-30">≈ $94.21 REF</span>
            </div>

            <button
              onClick={handlePurchase}
              disabled={selectedProduct.status === 'ARCHIVED'}
              className={`w-full py-8 border font-mono text-[14px] tracking-[0.4em] uppercase transition-all flex items-center justify-center gap-4 ${selectedProduct.status === 'ARCHIVED'
                ? 'border-white/10 text-white/20 cursor-not-allowed'
                : 'border-brc-green text-brc-green hover:bg-brc-green hover:text-black'
                }`}
            >
              {selectedProduct.status === 'ARCHIVED' ? 'FULLY_ARCHIVED' : 'ACQUIRE_UNIT [+]'}
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Payment Overlay */}
      {purchaseStep === 'PAYMENT' && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={() => setPurchaseStep('IDLE')}></div>
          <div className="relative w-full max-w-xl bg-background border border-white/20 p-12 animate-in zoom-in-95 duration-500">
            <div className="flex justify-between items-center mb-16 pb-4 border-b border-white/10 font-mono text-[10px] opacity-40 uppercase tracking-widest">
              <span>Payment_Handshake</span>
              <span>REF: {selectedProduct.refId}</span>
            </div>

            <div className="flex flex-col items-center gap-10">
              <div className="p-4 bg-white">
                <QrCode size={200} className="text-black" />
              </div>

              <div className="text-center space-y-2">
                <p className="font-mono text-[10px] opacity-40 uppercase">Send Exactly</p>
                <p className="font-mono text-3xl font-bold text-brc-green">{BTC_FIXED_AMOUNT} BTC</p>
              </div>

              <div className="w-full p-4 bg-white/5 border border-white/10 font-mono text-[11px] text-center select-all cursor-pointer hover:bg-white/10">
                bc1q_archived_truth_21_limited_supply_v3_xyz
              </div>

              <div className="grid grid-cols-2 gap-4 w-full">
                <button
                  onClick={() => {
                    setPurchaseStep('VERIFYING');
                    setTimeout(() => setPurchaseStep('SUCCESS'), 3000);
                  }}
                  className="py-4 border border-white/20 font-mono text-[10px] uppercase tracking-widest hover:border-brc-green hover:text-brc-green"
                >
                  <CreditCard size={14} className="inline mr-2" /> FIAT BRIDGE
                </button>
                <button
                  onClick={() => setPurchaseStep('IDLE')}
                  className="py-4 border border-white/20 font-mono text-[10px] uppercase tracking-widest hover:text-brc-rust"
                >
                  CANCEL
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {purchaseStep === 'VERIFYING' && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/95 backdrop-blur-xl">
          <div className="flex flex-col items-center gap-8">
            <div className="w-16 h-16 border-4 border-brc-green border-t-transparent rounded-full animate-spin"></div>
            <p className="font-mono text-xl tracking-[0.4em] text-brc-green shimmer">VERIFYING_BLOCK_HISTORY...</p>
          </div>
        </div>
      )}

      {purchaseStep === 'SUCCESS' && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/95 backdrop-blur-xl" onClick={() => setPurchaseStep('IDLE')}>
          <div className="text-center space-y-8 animate-in zoom-in-95 duration-700">
            <h2 className="font-display text-8xl italic text-brc-green">Acquired</h2>
            <div className="font-mono text-[12px] uppercase tracking-[0.4em] opacity-40">
              <p>Handshake Complete.</p>
              <p>Provenance Logged at Block: 840,432</p>
              <p>Welcome to the BRC Global Archive.</p>
            </div>
            <button className="px-12 py-4 border border-white/20 font-mono text-[10px] uppercase tracking-widest hover:border-brc-green">CLOSE_PROTOCOL</button>
          </div>
        </div>
      )}
    </section>
  );
}
