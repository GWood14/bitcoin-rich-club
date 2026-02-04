
"use client";

import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="min-h-[calc(100vh-160px)] flex items-center justify-center px-4 sm:px-12 py-32 animate-in fade-in duration-1000">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-24">
        <div className="space-y-12">
          <div className="space-y-4">
            <h1 className="font-display text-7xl italic leading-none">Access Request</h1>
            <p className="font-mono text-[10px] tracking-[0.6em] opacity-40 uppercase">Initiate_Communication_Protocol</p>
          </div>
          
          <div className="space-y-8 font-mono text-[11px] leading-relaxed uppercase tracking-[0.2em]">
            <div className="space-y-2">
              <span className="opacity-40 block">PHYSICAL_HQ</span>
              <span>Coordinates Locked // Vault 84</span>
            </div>
            <div className="space-y-2">
              <span className="opacity-40 block">COMM_FREQ</span>
              <a href="mailto:ACCESS@BRC.INTERNAL" className="text-brc-green hover:underline">ACCESS@BRC.INTERNAL</a>
            </div>
            <div className="space-y-2">
              <span className="opacity-40 block">STATUS</span>
              <span className="text-brc-green">Listening...</span>
            </div>
          </div>
        </div>

        <div className="relative">
          {sent ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6 animate-in zoom-in-95">
              <div className="w-16 h-16 border border-brc-green flex items-center justify-center text-brc-green">
                <Send size={24} />
              </div>
              <p className="font-mono text-xl tracking-[0.3em] text-brc-green uppercase">Message Encrypted</p>
              <p className="font-mono text-[10px] opacity-40 uppercase leading-loose tracking-widest">
                Our oracles have received your signal.<br/>
                Wait for a response within the next 21 blocks.
              </p>
              <button 
                onClick={() => setSent(false)}
                className="font-mono text-[9px] opacity-40 hover:opacity-100 underline decoration-dotted"
              >
                RESET_HANDSHAKE
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <label className="font-mono text-[9px] opacity-40 tracking-widest uppercase">Identity_Ref</label>
                <input type="text" placeholder="YOUR_NOMENCLATURE" required className="w-full bg-black border border-white/10 p-4 font-mono text-xs uppercase tracking-widest focus:border-brc-green outline-none" />
              </div>
              <div className="space-y-1">
                <label className="font-mono text-[9px] opacity-40 tracking-widest uppercase">Endpoint_Addr</label>
                <input type="email" placeholder="EMAIL_OR_LN_ADDR" required className="w-full bg-black border border-white/10 p-4 font-mono text-xs uppercase tracking-widest focus:border-brc-green outline-none" />
              </div>
              <div className="space-y-1">
                <label className="font-mono text-[9px] opacity-40 tracking-widest uppercase">Intent_Payload</label>
                <textarea rows={6} placeholder="DESCRIBE_YOUR_INTENT" required className="w-full bg-black border border-white/10 p-4 font-mono text-xs uppercase tracking-widest focus:border-brc-green outline-none resize-none" />
              </div>
              <button 
                type="submit"
                className="w-full py-5 border border-brc-green text-brc-green font-mono text-[12px] tracking-[0.4em] uppercase hover:bg-brc-green hover:text-black transition-all"
              >
                BROADCAST_SIGNAL
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
