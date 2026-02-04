"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArchiveItem } from "./ArchiveData";

interface DossierModalProps {
    item: ArchiveItem | null;
    onClose: () => void;
}

export function DossierModal({ item, onClose }: DossierModalProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (item) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, [item]);

    // Handle ESC key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    if (!item && !isVisible) return null;

    return (
        <div
            className={`
        fixed inset-0 z-50 flex items-center justify-center
        transition-all duration-300
        ${item ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/85 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div
                className={`
            relative w-full max-w-5xl h-[80vh] bg-[#050505] border border-white/10 flex flex-col md:flex-row
            transition-all duration-500 transform
            ${item ? "scale-100 translate-y-0" : "scale-95 translate-y-4"}
        `}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-50 text-white/40 hover:text-white font-mono text-xl"
                >
                    [X]
                </button>

                {/* Corner Brackets */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/20 pointer-events-none" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/20 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/20 pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/20 pointer-events-none" />


                {item && (
                    <>
                        {/* LEFT PANE - Image */}
                        <div className="w-full md:w-1/2 h-1/2 md:h-full relative border-b md:border-b-0 md:border-r border-white/10 overflow-hidden group">
                            <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-cover grayscale contrast-125 brightness-75"
                            />
                            {/* Scanning Line Animation */}
                            <div className="absolute left-0 right-0 h-[2px] bg-[#00FF80] opacity-50 animate-scan pointer-events-none" />

                            {/* Overlay grain/scanlines if desired, but global shell has them already. 
                        Let's add a local overlay for extra "modal" feel if needed. 
                        For now, rely on image filter.
                    */}
                        </div>

                        {/* RIGHT PANE - Metadata */}
                        <div className="w-full md:w-1/2 h-1/2 md:h-full p-8 md:p-12 flex flex-col justify-center bg-[#050505]">
                            <h3 className="font-display italic text-4xl text-white mb-8">
                                {item.name}
                            </h3>

                            <div className="space-y-6 font-mono text-[11px] leading-relaxed">
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span className="text-white/40">REF_ID</span>
                                    <span className="text-white">{item.refId}</span>
                                </div>
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span className="text-white/40">SERIAL</span>
                                    <span className="text-white">{item.serial.toString().padStart(2, '0')} / 21</span>
                                </div>
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span className="text-white/40">NOMENCLATURE</span>
                                    <span className="text-white">OBSIDIAN_CONTAINER</span>
                                </div>
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span className="text-white/40">FIAT_LOCK_PRICE</span>
                                    <span className="text-brc-green">${item.fiatPrice.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span className="text-white/40">PAYMENT_METHOD</span>
                                    <span className="text-white">{item.method}</span>
                                </div>
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span className="text-white/40">SCARCITY</span>
                                    <span className="text-white">21 / 21</span>
                                </div>
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span className="text-white/40">VERIFIED_AT</span>
                                    <span className="text-white">{item.verifiedAt}</span>
                                </div>
                                <div className="flex justify-between pt-2">
                                    <span className="text-white/40">STATUS</span>
                                    <span className={item.status === "ISSUED" ? "text-brc-green" : "text-brc-rust"}>
                                        {item.status}
                                    </span>
                                </div>
                            </div>

                            <div className="mt-12 opacity-30 text-[9px] font-mono text-center">
                        // END OF TRANSMISSION
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
