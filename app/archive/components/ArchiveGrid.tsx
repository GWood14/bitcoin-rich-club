"use client";

import React from "react";
import Image from "next/image";
import { DropRecord } from "@/lib/types";

interface ArchiveGridProps {
    drops: DropRecord[];
    selectedDropId: string;
    onDropClick: (drop: DropRecord) => void;
}

export function ArchiveGrid({ drops, selectedDropId, onDropClick }: ArchiveGridProps) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {drops.map((drop) => {
                const issuedCount = drop.units.filter(u => u.status === 'ISSUED' || u.status === 'ARCHIVED').length;
                const isSelected = drop.dropId === selectedDropId;

                return (
                    <div
                        key={drop.dropId}
                        onClick={() => onDropClick(drop)}
                        className={`
                            group relative aspect-[4/5] bg-[#050505] border cursor-pointer overflow-hidden transition-all duration-300 transform
                            ${isSelected ? 'border-brc-green' : 'border-white/5 hover:border-brc-green/40'}
                        `}
                    >
                        {/* Background Image */}
                        <Image
                            src={drop.imageUrl}
                            alt={drop.dropName}
                            fill
                            className="object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                            }}
                        />

                        {/* Green Overlay Fade-in */}
                        <div className={`absolute inset-0 bg-brc-green/10 transition-opacity duration-300 ${isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />

                        {/* Overlay Metadata */}
                        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 to-transparent">
                            <div className="font-mono text-[9px] text-white/60 space-y-1">
                                <div className={`transition-colors ${isSelected ? 'text-brc-green' : 'text-white group-hover:text-brc-green'}`}>
                                    {drop.dropId}
                                </div>
                                <div className="text-white uppercase tracking-wider">{drop.dropName}</div>
                                <div className="flex justify-between mt-2 pt-2 border-t border-white/10">
                                    <span>ISSUED: {issuedCount}/{drop.hardLimit}</span>
                                    <span
                                        className={
                                            drop.status === "LIVE" ? "text-brc-green" : "text-white/40"
                                        }
                                    >
                                        {drop.status}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
