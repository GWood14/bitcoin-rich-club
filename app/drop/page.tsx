
import React from "react";
import Image from "next/image";
import { ScarcityGrid } from "./components/ScarcityGrid";
import { DropInterface } from "./components/DropInterface";

export default function DropPage() {
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
            {/* 2. GRID LAYOUT (TWO COLUMNS) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                {/* 3. LEFT COLUMN — PRODUCT MEDIA */}
                <div>
                    {/* 3.1 Product Image Container */}
                    <div className="relative aspect-[4/5] border border-white/10 overflow-hidden group">
                        <Image
                            src="/assets/obsidian-container.jpg"
                            alt="Obsidian Container"
                            fill
                            className="object-cover grayscale contrast-110 brightness-90 transition-transform duration-700 group-hover:scale-105"
                        />

                        {/* 3.2 Scanning Line Effect */}
                        <div className="absolute left-0 right-0 h-[2px] bg-[#00FF80] opacity-60 animate-scan pointer-events-none" />

                        {/* 3.3 Metadata Overlay (Top-Left) */}
                        <div className="absolute top-4 left-4 font-mono text-[9px] text-white/40">
                            <div>REF: OBSIDIAN_001</div>
                            <div>SERIAL: 01–21</div>
                        </div>
                    </div>
                </div>

                {/* 4. RIGHT COLUMN — PRODUCT INFO */}
                <div className="flex flex-col justify-start">
                    {/* 4.1 Product Title */}
                    <h1 className="font-display italic text-5xl sm:text-6xl text-white mb-8">
                        Obsidian Container
                    </h1>

                    {/* 4.2 Price Block */}
                    <div className="mb-8">
                        <div className="font-mono text-2xl text-brc-green mb-1">
                            0.001 BTC
                        </div>
                        <div className="font-mono text-xs text-white/40">
                            Fiat reference locked at verification
                        </div>
                    </div>

                    {/* 4.3 Description */}
                    <p className="font-sans text-base sm:text-lg text-white/50 mb-8 border-l border-white/10 pl-6">
                        A sealed archival object. Issued once. Verified forever.
                    </p>

                    {/* 5. SCARCITY VISUALIZER (21-UNIT GRID) */}
                    <ScarcityGrid />

                    {/* 6. PRIMARY CTA & 7. PAYMENT STATE MACHINE */}
                    <DropInterface />

                </div>
            </div>
        </div>
    );
}
