"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ScarcityGrid } from "./components/ScarcityGrid";
import { DropInterface } from "./components/DropInterface";
import { INITIAL_DROPS } from "@/lib/constants";

export default function DropPage() {
    // Default to the first drop (newest) or finding the specific one if needed
    // User requested "Default selected drop = first element (newest) or explicitly .0001"
    // Given the array order in constants, .0001 is first.
    const [selectedDrop, setSelectedDrop] = useState(INITIAL_DROPS[0]);

    // Calculate dynamic stats
    const soldUnits = selectedDrop.units.filter(u => u.status === 'ISSUED' || u.status === 'ARCHIVED').length;
    const isSoldOut = soldUnits >= selectedDrop.hardLimit;

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
                        {/* 
                            Note: Using a placeholder color/text if image missing for new drops 
                            since assets might not essentially exist in the repo yet.
                        */}
                        <div className="absolute inset-0 bg-white/5 flex items-center justify-center text-white/20 font-mono text-xs">
                            [IMG: {selectedDrop.dropName}]
                        </div>

                        <Image
                            src={selectedDrop.imageUrl}
                            alt={selectedDrop.dropName}
                            fill
                            className="object-cover grayscale contrast-110 brightness-90 transition-transform duration-700 group-hover:scale-105"
                            onError={(e) => {
                                // Fallback to avoid broken image if assets don't exist
                                e.currentTarget.style.display = 'none';
                            }}
                        />

                        {/* 3.2 Scanning Line Effect */}
                        <div className="absolute left-0 right-0 h-[2px] bg-[#00FF80] opacity-60 animate-scan pointer-events-none" />

                        {/* 3.3 Metadata Overlay (Top-Left) */}
                        <div className="absolute top-4 left-4 font-mono text-[9px] text-white/40">
                            <div>REF: {selectedDrop.dropId}</div>
                            <div>SERIAL: 01–{selectedDrop.hardLimit}</div>
                        </div>
                    </div>
                </div>

                {/* 4. RIGHT COLUMN — PRODUCT INFO */}
                <div className="flex flex-col justify-start">
                    {/* 4.1 Product Title */}
                    <h1 className="font-display italic text-5xl sm:text-6xl text-white mb-8">
                        {selectedDrop.nomenclature.replace(/_/g, " ")}
                    </h1>

                    {/* 4.2 Price Block */}
                    <div className="mb-8">
                        <div className="font-mono text-2xl text-brc-green mb-1">
                            {selectedDrop.btcPrice} BTC
                        </div>
                        <div className="font-mono text-xs text-white/40">
                            Fiat reference locked at verification
                        </div>
                    </div>

                    {/* 4.3 Description */}
                    <p className="font-sans text-base sm:text-lg text-white/50 mb-8 border-l border-white/10 pl-6">
                        {selectedDrop.description}
                    </p>

                    {/* 5. SCARCITY VISUALIZER (DYNAMIC) */}
                    <ScarcityGrid
                        totalUnits={selectedDrop.hardLimit}
                        soldUnits={soldUnits}
                        price={selectedDrop.btcPrice.toString()}
                    />

                    {/* Sold Count / Issued Count Display */}
                    <div className="mt-2 font-mono text-[9px] text-white/60">
                        ISSUED: {soldUnits}/{selectedDrop.hardLimit}
                    </div>

                    {/* 6. PRIMARY CTA & 7. PAYMENT STATE MACHINE */}
                    {/* Pass isSoldOut status or disable if needed, though DropInterface might handle its own logic for now. 
                        We keep it simple as requested. */}
                    <DropInterface />

                    {/* 8. PREVIOUS DROPS STRIP */}
                    <div className="mt-16 border-t border-white/5 pt-8">
                        <div className="font-mono text-[10px] tracking-widest text-white/40 uppercase mb-4">
                            PREVIOUS_DROPS
                        </div>

                        {/* Horizontal Scroll Container */}
                        <div className="flex items-center gap-4 overflow-x-auto pb-4 scrollbar-hide">
                            {INITIAL_DROPS.map((drop) => (
                                <button
                                    key={drop.dropId}
                                    onClick={() => setSelectedDrop(drop)}
                                    className={`
                                        relative w-24 h-24 flex-shrink-0 border transition-all duration-300 group
                                        ${selectedDrop.dropId === drop.dropId
                                            ? "border-brc-green opacity-100"
                                            : "border-white/10 opacity-40 hover:opacity-80 hover:border-white/30"
                                        }
                                    `}
                                >
                                    {/* Thumbnail Image */}
                                    <div className="absolute inset-0 bg-white/5">
                                        <Image
                                            src={drop.imageUrl}
                                            alt={drop.dropName}
                                            fill
                                            className="object-cover grayscale"
                                            onError={(e) => {
                                                e.currentTarget.style.display = 'none';
                                            }}
                                        />
                                    </div>

                                    {/* Scanline Overlay on Thumbnail */}
                                    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] opacity-50 pointer-events-none" />

                                    {/* Selected Indicator */}
                                    {selectedDrop.dropId === drop.dropId && (
                                        <div className="absolute inset-0 bg-brc-green/5 pointer-events-none" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
