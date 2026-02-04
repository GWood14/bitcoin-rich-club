
"use client";

import React from 'react';
import { Unit } from '../lib/types';

export const ScarcityVisualizer = ({ units, status }: { units: Unit[], status: 'LIVE' | 'ARCHIVED' }) => {
  return (
    <div className="grid grid-cols-7 gap-1">
      {units.map((unit) => {
        const isIssued = unit.status === 'ISSUED' || unit.status === 'ARCHIVED';
        return (
          <div
            key={unit.id}
            className={`group relative aspect-square border ${
              isIssued 
                ? (status === 'ARCHIVED' ? 'bg-brc-rust border-brc-rust' : 'bg-brc-green border-brc-green')
                : 'bg-transparent border-white/10'
            }`}
          >
            {isIssued && (
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black/95 z-20 flex flex-col items-center justify-center p-1 transition-opacity pointer-events-none">
                <span className="font-mono text-[6px] tracking-tighter opacity-60">ID: {unit.serial.split('-')[2]}</span>
                {/* Added optional chaining and fallback to handle potential undefined fiatPrice */}
                <span className="font-mono text-[8px] font-bold text-brc-green">${unit.fiatPrice?.toFixed(2) ?? '0.00'}</span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
