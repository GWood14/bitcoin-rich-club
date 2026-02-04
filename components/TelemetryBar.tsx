
"use client";

import React, { useState, useEffect } from 'react';

export const TelemetryBar = () => {
  const [entropy, setEntropy] = useState(42.1337);

  useEffect(() => {
    const interval = setInterval(() => {
      setEntropy(prev => prev + (Math.random() - 0.5) * 0.0005);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-8 bg-black z-[300] border-b border-white/10 px-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest overflow-hidden">
      <div className="flex gap-8">
        <span>NETWORK: <span className="text-brc-green">ARCHIVE_STATE</span></span>
        <span className="hidden sm:inline">ENTROPY: {entropy.toFixed(4)}%</span>
        <span>EPOCH: 0</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-brc-green"></div>
        <span className="text-brc-green">SYSTEM_ACTIVE</span>
      </div>
    </div>
  );
};
