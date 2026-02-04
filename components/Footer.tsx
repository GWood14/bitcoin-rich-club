
"use client";

import React from 'react';

export const Footer = () => (
  <footer className="fixed bottom-0 left-0 right-0 h-10 bg-black z-[200] border-t border-white/10 px-4 sm:px-12 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.2em]">
    <div>
      <span className="opacity-40">BRC ARCHIVE © 2024 // </span>
      <a href="mailto:ACCESS@BRC.INTERNAL" className="hover:text-brc-green">ACCESS@BRC.INTERNAL</a>
    </div>
    <div className="flex items-center gap-6">
      <div className="flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-brc-green animate-pulse"></div>
        <span className="text-brc-green">STABLE_NODE</span>
      </div>
      <span className="opacity-40">V_CORE_3.1</span>
    </div>
  </footer>
);
