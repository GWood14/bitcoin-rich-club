"use client";

import React from "react";

const TOTAL_UNITS = 21;
const UNIT_PRICES = [95.0, 98.2, 101.3]; // mock data

export function ScarcityGrid() {
    // Generate 21 cells
    const cells = Array.from({ length: TOTAL_UNITS }, (_, i) => {
        // Mock logic: First 11 units issued, rest unissued
        const isIssued = i < 11;
        // Mock prices based on index for tooltip
        // Cycle through mock prices
        const price = UNIT_PRICES[i % UNIT_PRICES.length].toFixed(2);

        return {
            id: i,
            status: isIssued ? "issued" : "unissued", // "archived" logic could be added but prompt says "if all issued" for archived.
            price
        };
    });

    return (
        <div className="mt-12">
            {/* 5.1 Grid */}
            <div className="grid grid-cols-7 gap-2">
                {cells.map((cell) => (
                    <div
                        key={cell.id}
                        className="group relative"
                    >
                        {/* 5.2 Cell States */}
                        <div
                            className={`
                aspect-square w-full border transition-colors duration-300
                ${cell.status === "issued"
                                    ? "bg-brc-green border-brc-green"
                                    : "bg-black border-white/10"
                                }
              `}
                        />

                        {/* 5.3 Hover Tooltip (Issued Units) */}
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
                                    ISSUED_AT: ${cell.price}
                                </span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
