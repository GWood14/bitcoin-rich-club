"use client";

import React from "react";

interface ScarcityGridProps {
    totalUnits: number;
    soldUnits: number;
    price: string;
}

export function ScarcityGrid({ totalUnits, soldUnits, price }: ScarcityGridProps) {
    // Generate cells based on totalUnits
    const cells = Array.from({ length: totalUnits }, (_, i) => {
        // Determine issuance based on soldUnits
        const isIssued = i < soldUnits;

        return {
            id: i,
            status: isIssued ? "issued" : "unissued",
            price
        };
    });

    return (
        <div className="flex flex-col items-start gap-3 mt-4 w-full max-w-[320px]">
            {/* Label */}
            <div className="font-mono text-[9px] text-white/40 tracking-widest uppercase">
                SCARCITY_VISUALIZER // {totalUnits}_UNITS
            </div>

            {/* Grid */}
            <div className="grid grid-cols-7 gap-1 w-full">
                {cells.map((cell) => (
                    <div
                        key={cell.id}
                        className="group relative w-full aspect-[3/2]"
                    >
                        {/* Cell State */}
                        <div
                            className={`
                                w-full h-full border transition-all duration-300
                                ${cell.status === "issued"
                                    ? "bg-brc-green border-brc-green shadow-[0_0_10px_-2px_rgba(0,255,128,0.3)]"
                                    : "bg-transparent border-white/10"
                                }
                            `}
                        />

                        {/* Hover Tooltip (Issued Units) */}
                        {cell.status === "issued" && (
                            <div
                                className="
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-200
                                    absolute bottom-full left-1/2 -translate-x-1/2 mb-2
                                    bg-[#050505] border border-white/10 px-2 py-1
                                    whitespace-nowrap z-20 pointer-events-none
                                "
                            >
                                <span className="font-mono text-[9px] text-white">
                                    ISSUED_AT: {cell.price} BTC
                                </span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
