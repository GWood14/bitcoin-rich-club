
"use client";

import React from 'react';

export const GrainOverlay = () => (
  <div className="fixed inset-0 pointer-events-none z-[5] opacity-[0.04]">
    <svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'>
      <filter id='noiseFilter'>
        <feTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch' />
      </filter>
      <rect width='100%' height='100%' filter='url(#noiseFilter)' />
    </svg>
  </div>
);

export const Scanlines = () => (
  <div className="fixed inset-0 pointer-events-none z-[5] mix-blend-overlay opacity-20">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]"></div>
  </div>
);

export const CornerBrackets = () => (
  <div className="fixed inset-0 pointer-events-none z-[100] p-4 sm:p-8">
    <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-white/20"></div>
    <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white/20"></div>
    <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-white/20"></div>
    <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/20"></div>
  </div>
);

export const TruthWatermark = () => (
  <div className="fixed bottom-0 left-0 p-8 pointer-events-none select-none z-[50]">
    <span className="font-display text-[24vw] italic leading-none text-text-ghost mix-blend-overlay">TRUTH</span>
  </div>
);
