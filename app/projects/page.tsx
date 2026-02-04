
"use client";

import React, { useState } from 'react';
import { INITIAL_PRODUCTS } from '../lib/constants';

export default function ProjectsPage() {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  // Fixed: Added fallback for fiatPrice in reduce to handle optional field safely
  const avgCp = Math.round(INITIAL_PRODUCTS.flatMap(p => p.units.filter(u => u.status === 'ISSUED')).reduce((acc, u) => acc + (u.fiatPrice || 0), 0) / INITIAL_PRODUCTS.flatMap(p => p.units.filter(u => u.status === 'ISSUED')).length) || 98;

  return (
    <section className="px-4 sm:px-12 pt-32 pb-16 animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-12 gap-8">
          <div className="space-y-4">
            <h1 className="font-display text-7xl italic">The Ledger</h1>
            <p className="font-mono text-[10px] tracking-[0.5em] opacity-40 uppercase">Global_Asset_Distribution_Report</p>
          </div>
          <div className="text-right space-y-2">
            <span className="font-mono text-[10px] opacity-40 tracking-[0.2em]">AVG_COLLECTION_PRICE</span>
            <div className="font-mono text-5xl font-bold text-brc-green tracking-tighter">${avgCp}</div>
          </div>
        </div>

        {/* Ledger Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left font-mono text-[11px] border-collapse">
            <thead>
              <tr className="border-b border-white/5 opacity-40 uppercase tracking-widest">
                <th className="py-6 font-normal">REF_ID</th>
                <th className="py-6 font-normal">NOMENCLATURE</th>
                <th className="py-6 font-normal">ISSUANCE</th>
                <th className="py-6 font-normal">METHOD</th>
                <th className="py-6 font-normal">STATUS</th>
                <th className="py-6 font-normal text-right">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {INITIAL_PRODUCTS.map((p) => (
                <tr 
                  key={p.id} 
                  className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group cursor-pointer"
                  onMouseEnter={() => setHoveredProduct(p.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  <td className="py-8 opacity-40">{p.refId}</td>
                  <td className="py-8 font-bold text-[14px] group-hover:text-brc-green transition-colors">{p.nomenclature}</td>
                  <td className="py-8 tracking-[0.2em]">{p.units.filter(u => u.status === 'ISSUED').length}/21</td>
                  <td className="py-8 opacity-60 tracking-widest">{p.method}</td>
                  <td className="py-8">
                    <span className={p.status === 'LIVE' ? 'text-brc-green' : 'text-brc-rust'}>
                      {p.status}
                    </span>
                  </td>
                  <td className="py-8 text-right">
                    <button className="border border-white/20 px-3 py-1 hover:border-brc-green hover:text-brc-green uppercase text-[9px] tracking-widest">OPEN_DOSSIER</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Visual Index Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-16">
          {INITIAL_PRODUCTS.map((p) => (
            <div key={p.id + '_grid'} className="space-y-4 group cursor-pointer">
              <div className="relative aspect-square border border-white/10 overflow-hidden">
                <img 
                  src={p.imageUrl} 
                  alt={p.nomenclature} 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="font-mono text-[9px] tracking-[0.3em] border border-white/50 px-4 py-2 bg-black uppercase">Inspect</span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-display text-xl italic group-hover:text-brc-green transition-colors">{p.nomenclature}</span>
                <span className="font-mono text-[9px] opacity-40 tracking-widest">{p.refId} // ARCHIVED_STABLE</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
