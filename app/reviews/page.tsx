
"use client";

import React, { useState } from 'react';
import { Search, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function ReviewsPage() {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState<'IDLE' | 'SEARCHING' | 'FOUND' | 'DENIED'>('IDLE');

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;
    setStatus('SEARCHING');
    setTimeout(() => {
      if (query.toUpperCase().includes('BRC')) {
        setStatus('FOUND');
      } else {
        setStatus('DENIED');
      }
    }, 2500);
  };

  return (
    <section className="h-[calc(100vh-160px)] flex flex-col items-center justify-center px-4 sm:px-12 animate-in fade-in duration-1000">
      <div className="max-w-3xl w-full text-center space-y-16">
        <div className="space-y-4">
          <h1 className="font-display text-7xl italic leading-none">Provenance Ritual</h1>
          <p className="font-mono text-[10px] tracking-[0.6em] opacity-40 uppercase">Verification_of_Recognition</p>
        </div>

        <form onSubmit={handleVerify} className="relative group">
          <div className="absolute -top-4 -left-4 w-6 h-6 border-t border-l border-white/10 group-focus-within:border-brc-green group-focus-within:w-10 group-focus-within:h-10 transition-all"></div>
          <div className="absolute -bottom-4 -right-4 w-6 h-6 border-b border-r border-white/10 group-focus-within:border-brc-green group-focus-within:w-10 group-focus-within:h-10 transition-all"></div>
          
          <input 
            type="text" 
            placeholder="INPUT_UNIT_IDENTIFIER" 
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setStatus('IDLE');
            }}
            className="w-full bg-black border border-white/10 px-12 py-10 font-mono text-2xl tracking-[0.4em] uppercase text-center focus:outline-none focus:border-brc-green transition-colors"
          />
          <button 
            type="submit"
            className="absolute right-8 top-1/2 -translate-y-1/2 text-brc-green opacity-40 hover:opacity-100 transition-opacity"
          >
            {status === 'SEARCHING' ? <Loader2 size={32} className="animate-spin" /> : <Search size={32} />}
          </button>
        </form>

        <div className="h-32 flex items-center justify-center">
          {status === 'SEARCHING' && (
            <div className="flex flex-col items-center gap-4">
              <span className="font-mono text-xs tracking-[0.4em] text-brc-green shimmer">SCANNING_GLOBAL_LEDGER...</span>
              <div className="w-64 h-[2px] bg-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-brc-green w-1/4 animate-[shimmer_1s_infinite]"></div>
              </div>
            </div>
          )}

          {status === 'FOUND' && (
            <div className="flex items-center gap-6 animate-in zoom-in-95 duration-500">
              <CheckCircle2 size={48} className="text-brc-green" />
              <div className="text-left">
                <span className="block font-mono text-brc-green font-bold text-xl tracking-[0.2em] uppercase">Signature Recognized</span>
                <span className="block font-mono text-[10px] opacity-40 uppercase tracking-widest mt-1">This unit is an authenticated artifact of the Bitcoin Rich Club.</span>
              </div>
            </div>
          )}

          {status === 'DENIED' && (
            <div className="flex items-center gap-6 animate-in zoom-in-95 duration-500">
              <AlertCircle size={48} className="text-brc-rust" />
              <div className="text-left">
                <span className="block font-mono text-brc-rust font-bold text-xl tracking-[0.2em] uppercase">Access Denied</span>
                <span className="block font-mono text-[10px] opacity-40 uppercase tracking-widest mt-1">Identifier not found in verified block records. Integrity failure.</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
