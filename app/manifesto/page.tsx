
import React from 'react';

export default function ManifestoPage() {
    return (
        <div
            className="
        relative z-10
        max-w-7xl mx-auto
        px-6 sm:px-12
        py-24
        animate-in fade-in slide-in-from-bottom-4 duration-1000
      "
        >
            {/* 2. BACKGROUND PARALLAX TYPOGRAPHY */}
            {/* 2. BACKGROUND PARALLAX TYPOGRAPHY */}
            <div className="fixed top-1/2 right-4 -translate-y-1/2 -z-10 pointer-events-none select-none mix-blend-overlay hidden lg:block">
                <span className="font-display italic text-[12vw] text-white/[0.02] -rotate-90 whitespace-nowrap block origin-center">
                    ARCHIVAL DOCTRINE
                </span>
            </div>

            {/* 3. SECTION 01 — VALUE DISCOVERED (LEFT ALIGNED) */}
            <div className="relative max-w-4xl mr-auto border border-white/10 p-10 transition-colors duration-500 hover:border-brc-green/40">
                {/* Metadata stamp */}
                <div className="absolute -top-3 -left-3 font-mono text-[8px] bg-[#050505] px-1 border border-white/10 text-white/40">
                    BLOCK_COORD: 01
                </div>

                {/* Label row */}
                <div className="flex items-center gap-4 mb-6">
                    <span className="font-mono text-[10px] tracking-[0.4em] text-brc-green uppercase">
                        PRICE AS SIGNAL
                    </span>
                    <div className="h-px w-12 bg-brc-green/30" />
                </div>

                {/* Headline */}
                <h2 className="font-display italic text-5xl sm:text-7xl leading-[0.9] text-white mb-6">
                    Value Discovered
                </h2>

                {/* Body copy */}
                <p className="font-sans font-bold text-lg sm:text-xl text-white/50 mb-8">
                    Price is not a negotiation; it is a signal of belief.<br />
                    0.001 BTC is not a market price — it is a filter of intent.
                </p>

                {/* Forensic footer */}
                <div className="border-t border-white/5 pt-3 font-mono text-[9px] text-white/20 uppercase">
                    Source: genesis_archive.bin / Status: verified_signature
                </div>

                {/* Decorative sidebar text */}
                <div className="absolute top-10 -right-8 hidden lg:block">
                    <span className="block rotate-90 origin-top-left font-mono text-[8px] tracking-[1em] text-white/10 whitespace-nowrap">
             // SIGNAL_STRENGTH: 100%
                    </span>
                </div>
            </div>

            {/* 4. SECTION 02 — THE 21 LAW (RIGHT ALIGNED) */}
            <div className="relative max-w-4xl ml-auto border border-white/10 p-10 bg-white/[0.01] transition-colors duration-500 hover:border-brc-green/40 mt-32">
                {/* Metadata stamp */}
                <div className="absolute -bottom-3 -right-3 font-mono text-[8px] bg-[#050505] px-1 border border-white/10 text-white/40">
                    HARD_LIMIT: 21
                </div>

                {/* Label */}
                <div className="flex justify-end mb-6">
                    <span className="font-mono text-[10px] text-brc-green uppercase">
                        ABSOLUTE SCARCITY
                    </span>
                </div>

                {/* Headline */}
                <h2 className="font-display italic text-right text-5xl sm:text-7xl leading-[0.9] text-white mb-6">
                    The 21 Law
                </h2>

                {/* Body */}
                <p className="font-sans text-right text-white/50 mb-8">
                    There are no restocks. There are no secondary drops.<br />
                    Issuance is final, irreversible, and capped by design.
                </p>

                {/* Footer */}
                <div className="border-t border-white/5 pt-3 text-right font-mono text-[9px] text-white/20 uppercase">
                    Constraint: absolute_scarcity / Epoch: genesis_0
                </div>
            </div>

            {/* 5. SECTION 03 — PERMANENT RECORD (CENTERED) */}
            <div className="relative max-w-2xl mx-auto px-12 py-20 border-x border-white/10 mt-32">
                {/* Corner brackets - Top Left */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/20" />
                {/* Corner brackets - Top Right */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/20" />
                {/* Corner brackets - Bottom Left */}
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/20" />
                {/* Corner brackets - Bottom Right */}
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/20" />

                {/* Label */}
                <div className="flex justify-center mb-6">
                    <span className="font-mono text-brc-green uppercase">
                        ARCHIVAL FACT
                    </span>
                </div>

                {/* Headline */}
                <h2 className="font-display italic text-center text-5xl sm:text-6xl text-white mb-6">
                    Permanent Record
                </h2>

                {/* Body */}
                <div className="font-sans text-center text-white/50 space-y-1">
                    <p>Every issuance is recorded.</p>
                    <p>Every verification is immutable.</p>
                    <p>No revision. No erasure.</p>
                </div>

                {/* Ritual stamp */}
                <div className="absolute bottom-10 right-10 border-2 border-brc-rust/30 p-2 rotate-3">
                    <span className="font-mono text-[10px] text-brc-rust uppercase">
                        ARCHIVAL VALIDATED
                    </span>
                </div>
            </div>

            {/* 6. FINAL DIRECTIVE */}
            <div className="flex flex-col items-center mt-48 pb-24">
                {/* Vertical gradient line */}
                <div className="w-px h-32 bg-gradient-to-b from-transparent via-white/10 to-brc-green mb-12" />

                {/* Final headline */}
                <h1 className="font-display italic text-6xl sm:text-8xl text-white text-center mb-4">
                    Time is the only luxury.
                </h1>
                <h1 className="font-display italic text-6xl sm:text-8xl text-white text-center opacity-20 mb-12">
                    Time is the only luxury.
                </h1>

                {/* Ritual dates */}
                <div className="font-mono text-[10px] tracking-[0.4em] text-white/20 hover:text-brc-green transition-colors cursor-default">
                    2009.01.03 • 2024.ARCHIVE
                </div>
            </div>
        </div>
    );
}
