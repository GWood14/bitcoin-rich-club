
"use client";

import { Plus } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center px-4 sm:px-12 h-[calc(100vh-160px)] animate-in fade-in duration-1000 relative">
      {/* Element #2 — TRUTH WATERMARK */}

      <div className="relative z-10 w-full max-w-6xl aspect-[21/9] border border-white/10 flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute top-2 left-4 font-mono text-[8px] opacity-40">LAT: 51.5074</div>
        <div className="absolute bottom-2 right-4 font-mono text-[8px] opacity-40">LNG: -0.1278</div>
        <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-white/5"></div>
        <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-white/5"></div>

        <div className="z-10 text-center flex flex-col items-center gap-10">
          {/* Element #1 — TOP PILL */}
          <div className="flex justify-center mb-0">
            <div className="px-8 py-3 border border-brc-green/30 text-brc-green font-mono text-[10px] tracking-[0.4em] uppercase bg-black/30 backdrop-blur-sm transition-colors duration-300 hover:border-brc-green/60">
              ENTER THE VAULT — BELIEVE IN THE FUTURE
            </div>
          </div>

          <h1 className="font-display text-6xl sm:text-9xl tracking-tight leading-none italic">
            Tangible Truth
          </h1>
          <p className="font-sans text-white/60 text-sm sm:text-base max-w-lg leading-relaxed -mt-6 mb-2">
            A forensic record of value. Native Bitcoin issuance at 0.001 BTC. Limited to 21 units per archive entry.
          </p>

          <div className="flex flex-col items-center gap-6">
            <div className="px-4 py-1 bg-brc-green/5 border border-brc-green/30 font-mono text-[10px] text-brc-green uppercase tracking-[0.3em] overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              VERIFIED_ASSET_CLASS
            </div>
            <Link
              href="/services"
              className="group flex items-center gap-4 px-10 py-5 border border-brc-green text-brc-green font-mono text-[12px] tracking-[0.4em] uppercase hover:bg-brc-green hover:text-black transition-all"
            >
              ACQUIRE_UNIT
              <Plus size={16} className="group-hover:rotate-90 transition-transform duration-300" />
            </Link>

          </div>
        </div>
      </div>

      {/* Element #3 — Left Vertical Sidebar Text */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 hidden lg:block z-20">
        <div className="rotate-[-90deg] origin-left font-mono text-[10px] tracking-[0.6em] uppercase text-white/40">
          ESTABLISHED // BLOCK_840000
        </div>
      </div>

      {/* Value Columns */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-16 w-full max-w-6xl mt-24">
        {[
          { id: '01', title: 'Tangible Truth', desc: 'The physical manifestation of cryptographic certainty. Objects that bridge the gap between the ephemeral and the eternal.' },
          { id: '02', title: 'Absolute Scarcity', desc: 'Strictly limited to 21 units per archival reference. No re-issuance. No inflationary decay. Hard-capped by law.' },
          { id: '03', title: 'Fixed Issuance', desc: 'Every unit is priced at exactly 0.001 BTC. The fiat reference is locked at the moment of verification, forming an immutable archive.' }
        ].map(col => (
          <div key={col.id} className="flex flex-col gap-6 border-l border-white/10 pl-6 group">
            <span className="font-mono text-[10px] opacity-20 group-hover:opacity-100 transition-opacity">{col.id}</span>
            <h3 className="font-display text-2xl italic">{col.title}</h3>
            <p className="font-mono text-[11px] leading-relaxed opacity-40 normal-case">{col.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
