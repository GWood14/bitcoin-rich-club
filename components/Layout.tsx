
import React from 'react';
import { AppView } from '../types';
import { Lock } from 'lucide-react';

interface HeaderProps {
  currentView: AppView;
  setView: (v: AppView) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, setView }) => {
  const navItems = [
    { label: 'HOME', view: AppView.HOME },
    { label: 'MANIFESTO', view: AppView.MANIFESTO },
    { label: 'DROP', view: AppView.DROP },
    { label: 'ARCHIVE', view: AppView.ARCHIVE },
    { label: 'PROVENANCE', view: AppView.PROVENANCE },
  ];

  return (
    <header className="fixed top-8 left-0 right-0 h-16 flex items-center justify-between px-4 sm:px-12 z-[150] bg-black/80 backdrop-blur-sm border-b border-white/5">
      <div className="flex items-center gap-4 cursor-pointer" onClick={() => setView(AppView.HOME)}>
        <div className="w-10 h-10 border-2 border-[#00FF80] flex items-center justify-center font-mono font-bold text-xl">B</div>
        <div className="flex flex-col">
          <span className="font-mono text-[10px] leading-tight tracking-[0.2em] opacity-40">BITCOIN</span>
          <span className="font-mono text-[12px] leading-tight font-bold">RICH CLUB</span>
        </div>
      </div>

      <nav className="hidden md:flex items-center gap-8 font-mono text-[11px] tracking-widest">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => setView(item.view)}
            className={`relative py-2 transition-opacity hover:opacity-100 ${
              currentView === item.view ? 'opacity-100 text-[#00FF80]' : 'opacity-40'
            }`}
          >
            {item.label}
            {currentView === item.view && (
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#00FF80]"></div>
            )}
          </button>
        ))}
      </nav>

      <div className="flex items-center gap-4 font-mono text-[10px] opacity-60">
        <span className="hidden sm:inline">ACCESS_GRANTED</span>
        <div className="w-8 h-8 border border-white/20 flex items-center justify-center">
          <Lock size={14} />
        </div>
      </div>
    </header>
  );
};

export const Footer: React.FC = () => (
  <footer className="fixed bottom-0 left-0 right-0 h-10 bg-black border-t border-white/10 flex items-center justify-between px-4 sm:px-12 z-[150] font-mono text-[9px] uppercase tracking-widest">
    <div>
      <span className="opacity-40">BRC ARCHIVE © 2024 // </span>
      <a href="mailto:ACCESS@BRC.INTERNAL" className="hover:text-[#00FF80] transition-colors">ACCESS@BRC.INTERNAL</a>
    </div>
    <div className="flex gap-6 items-center">
      <div className="flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-[#00FF80]"></div>
        <span>STABLE_NODE</span>
      </div>
      <span className="opacity-40">V_CORE_3.1</span>
    </div>
  </footer>
);
