"use client";

import React from "react";
import Image from "next/image";
import { ArchiveItem } from "./ArchiveData";

interface ArchiveGridProps {
    items: ArchiveItem[];
    onItemClick: (item: ArchiveItem) => void;
}

export function ArchiveGrid({ items, onItemClick }: ArchiveGridProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item) => (
                <div
                    key={item.refId}
                    onClick={() => onItemClick(item)}
                    className="group relative aspect-[4/5] bg-[#050505] border border-white/5 cursor-pointer overflow-hidden transition-all duration-300 hover:border-brc-green/40"
                >
                    {/* Background Image */}
                    <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Green Overlay Fade-in */}
                    <div className="absolute inset-0 bg-brc-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Overlay Metadata */}
                    <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 to-transparent">
                        <div className="font-mono text-[9px] text-white/60 space-y-1">
                            <div className="text-white group-hover:text-brc-green transition-colors">{item.refId}</div>
                            <div className="flex justify-between">
                                <span>SERIAL_{item.serial.toString().padStart(2, "0")}/21</span>
                                <span
                                    className={
                                        item.status === "ISSUED" ? "text-brc-green" : "text-brc-rust"
                                    }
                                >
                                    {item.status}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
