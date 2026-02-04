
"use client";

import React from 'react';

export default function AboutPage() {
  return (
    <section className="relative px-4 sm:px-12 pt-32 pb-64 overflow-hidden">
      {/* Parallax Background Text */}
      <div className="fixed right-0 top-0 h-full w-32 pointer-events-none opacity-[0.03] overflow-hidden flex flex-col justify-around z-0">
        <span className="font-mono text-[160px] font-bold rotate-90 origin-center whitespace-nowrap">ARCHIVAL DOCTRINE</span>
        <span className="font-mono text-[160px] font-bold rotate-90 origin-center whitespace-nowrap">ARCHIVAL DOCTRINE</span>
      </div>

      <div className="max-w-4xl mx-auto space-y-96 relative z-10">
        <div className="max-w-xl border border-white/10 p-12 relative bg-black/50 backdrop-blur-sm">
          <div className="absolute -top-3 -left-3 bg-black border border-white/20 px-3 py-1 font-mono text-[9px] text-brc-green">BLOCK_COORD: 01</div>
          <h2 className="font-display text-5xl mb-8 italic">Value Discovered</h2>
          <p className="font-sans text-lg text-text-secondary leading-relaxed">
            "0.001 BTC is not a price. It is a filter of intent. It is the minimum viable commitment required to pierce the veil of digital noise and anchor value in physical reality."
          </p>
        </div>

        <div className="max-w-xl ml-auto border border-white/10 p-12 relative bg-black/50 backdrop-blur-sm text-right">
          <div className="absolute -top-3 -right-3 bg-black border border-white/20 px-3 py-1 font-mono text-[9px] text-brc-green">HARD_LIMIT: 21</div>
          <h2 className="font-display text-5xl mb-8 italic">The 21 Law</h2>
          <p className="font-sans text-lg text-text-secondary leading-relaxed">
            "In a world of infinite duplication, the only luxury is scarcity. We have tethered the physical weight of our archive to the mathematical limit of the protocol."
          </p>
        </div>

        <div className="text-center space-y-16 py-32 border-y border-white/5">
          <h2 className="font-display text-7xl italic">Permanent Record</h2>
          <div className="font-mono text-[14px] uppercase tracking-[0.4em] space-y-4 opacity-60">
            <p>Every transaction is a pulse.</p>
            <p>Every unit is a block.</p>
            <p>Every acquisition is a vow.</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-12">
          <div className="w-[1px] h-64 bg-gradient-to-b from-brc-green to-transparent opacity-30"></div>
          <h3 className="font-display text-4xl italic text-center">"Time is the only luxury."</h3>
        </div>
      </div>
    </section>
  );
}
