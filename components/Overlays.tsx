
import React, { useEffect, useState } from 'react';
import { L_BRACKET } from '../constants';

export const GrainOverlay: React.FC = () => (
  <svg className="grain">
    <filter id="noiseFilter">
      <feTurbulence 
        type="fractalNoise" 
        baseFrequency="0.6" 
        stitchTiles="stitch" 
      />
    </filter>
    <rect width="100%" height="100%" filter="url(#noiseFilter)" />
  </svg>
);

export const Brackets: React.FC = () => (
  <div className="fixed inset-0 pointer-events-none z-[100] p-4 sm:p-8">
    <div className="absolute top-4 left-4 rotate-0">{L_BRACKET}</div>
    <div className="absolute top-4 right-4 rotate-90">{L_BRACKET}</div>
    <div className="absolute bottom-4 left-4 -rotate-90">{L_BRACKET}</div>
    <div className="absolute bottom-4 right-4 rotate-180">{L_BRACKET}</div>
  </div>
);

export const TelemetryBar: React.FC<{ entropy: number }> = ({ entropy }) => (
  <div className="fixed top-0 left-0 right-0 h-8 bg-black border-b border-white/10 flex items-center justify-between px-4 z-[200] font-mono text-[10px] uppercase tracking-widest overflow-hidden">
    <div className="flex gap-6">
      <span>NETWORK: <span className="text-[#00FF80]">ARCHIVE_STATE</span></span>
      <span>ENTROPY: {entropy.toFixed(4)}%</span>
      <span className="hidden sm:inline">EPOCH: 0</span>
    </div>
    <div className="flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-[#00FF80] animate-pulse"></div>
      <span>SYSTEM_STABLE</span>
    </div>
  </div>
);

export const TruthWatermark: React.FC = () => (
  <div className="fixed bottom-0 left-0 p-8 pointer-events-none select-none z-[50]">
    <h1 className="font-display text-[24vw] leading-none opacity-[0.03] mix-blend-overlay">TRUTH</h1>
  </div>
);
