"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { DropRecord, UnitRecord } from "@/lib/types";

interface DossierModalProps {
    unit: UnitRecord | null;
    drop: DropRecord; // Needed for context like name, image, hard limit
    onClose: () => void;
}

export function DossierModal({ unit, drop, onClose }: DossierModalProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (unit) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, [unit]);

    // Handle ESC key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    if (!unit && !isVisible) return null;

    return (
        <div
            className={`
        fixed inset-0 z-[200] flex items-center justify-center
        transition-all duration-300
        ${unit ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/90 backdrop-blur-xl"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div
                className={`
            relative w-full max-w-5xl h-[80vh] bg-[#050505] border border-white/10 flex flex-col md:flex-row
            transition-all duration-500 transform
            ${unit ? "scale-100 translate-y-0" : "scale-95 translate-y-4"}
        `}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-50 text-white/40 hover:text-white font-mono text-xl"
                >
                    CLOSE_DOSSIER [X]
                </button>

                {/* Corner Brackets */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/20 pointer-events-none" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/20 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/20 pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/20 pointer-events-none" />


                {unit && (
                    <>
                        {/* LEFT PANE - Image */}
                        <div className="w-full md:w-1/2 h-1/2 md:h-full relative border-b md:border-b-0 md:border-r border-white/10 overflow-hidden group">
                            <Image
                                src={drop.imageUrl}
                                alt={drop.dropName}
                                fill
                                className="object-cover grayscale contrast-125 brightness-75"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                }}
                            />
                            {/* Scanning Line Animation */}
                            <div className="absolute left-0 right-0 h-[2px] bg-[#00FF80] opacity-50 animate-scan pointer-events-none" />
                        </div>

                        {/* RIGHT PANE - Metadata */}
                        <div className="w-full md:w-1/2 h-1/2 md:h-full p-8 md:p-12 flex flex-col justify-center bg-[#050505]">
                            <h3 className="font-display italic text-3xl sm:text-4xl text-white mb-2">
                                {drop.nomenclature.replace(/_/g, " ")}
                            </h3>
                            <div className="font-mono text-xs text-white/50 mb-8">{drop.dropName}</div>

                            <div className="space-y-6 font-mono text-[11px] leading-relaxed">
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span className="text-white/40">UNIT_ID</span>
                                    <span className="text-white bg-white/5 px-2">{unit.unitId}</span>
                                </div>
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span className="text-white/40">DROP_REF</span>
                                    <span className="text-white">{drop.dropId}</span>
                                </div>
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span className="text-white/40">SERIAL</span>
                                    <span className="text-white">{unit.serial} / {drop.hardLimit}</span>
                                </div>
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span className="text-white/40">BTC_PRICE</span>
                                    <span className="text-brc-green">{drop.btcPrice} BTC</span>
                                </div>
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span className="text-white/40">FIAT_REF_AT_ISSUANCE</span>
                                    <span className="text-white">
                                        {unit.fiatRef ? `$${unit.fiatRef.toFixed(2)}` : "—"}
                                    </span>
                                </div>
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span className="text-white/40">METHOD</span>
                                    <span className="text-white">{unit.method}</span>
                                </div>
                                {unit.issuedAt && (
                                    <div className="flex justify-between border-b border-white/5 pb-2">
                                        <span className="text-white/40">ISSUED_AT</span>
                                        <span className="text-white">{unit.issuedAt}</span>
                                    </div>
                                )}
                                <div className="flex justify-between pt-2">
                                    <span className="text-white/40">STATUS</span>
                                    <span className={
                                        unit.status === "ISSUED" ? "text-brc-green" :
                                            unit.status === "ARCHIVED" ? "text-brc-rust" : "text-white/30"
                                    }>
                                        {unit.status}
                                    </span>
                                </div>
                            </div>

                            <div className="mt-12 opacity-30 text-[9px] font-mono text-center">
                        // SECURED RECORD // END OF TRANSMISSION
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
