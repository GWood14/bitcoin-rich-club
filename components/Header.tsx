"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Lock } from "lucide-react";

const navItems = [
  { label: "HOME", path: "/" },
  { label: "MANIFESTO", path: "/manifesto" },
  { label: "DROP", path: "/drop" },
  { label: "ARCHIVE", path: "/archive" },
  { label: "PROVENANCE", path: "/provenance" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-8 left-0 right-0 h-16 flex items-center justify-between px-4 sm:px-12 z-[150] bg-black/80 backdrop-blur-sm border-b border-white/5">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-4 cursor-pointer">
        <div className="w-10 h-10 border-2 border-[#00FF80] flex items-center justify-center font-mono font-bold text-xl">
          B
        </div>
        <div className="flex flex-col">
          <span className="font-mono text-[10px] leading-tight tracking-[0.2em] opacity-40">
            BITCOIN
          </span>
          <span className="font-mono text-[12px] leading-tight font-bold">
            RICH CLUB
          </span>
        </div>
      </Link>

      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-8 font-mono text-[11px] tracking-widest">
        {navItems.map((item) => {
          const active = pathname === item.path;

          return (
            <Link
              key={item.label}
              href={item.path}
              className={`relative py-2 transition-opacity hover:opacity-100 ${active ? "opacity-100 text-[#00FF80]" : "opacity-40"
                }`}
            >
              {item.label}
              {active && (
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#00FF80]" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Status */}
      <div className="flex items-center gap-4 font-mono text-[10px] opacity-60">
        <span className="hidden sm:inline">ACCESS_GRANTED</span>
        <div className="w-8 h-8 border border-white/20 flex items-center justify-center">
          <Lock size={14} />
        </div>
      </div>
    </header>
  );
}
