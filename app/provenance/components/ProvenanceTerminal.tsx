"use client";

import React, { useState, FormEvent, useEffect } from "react";

type ProvenanceState = "IDLE" | "SCANNING" | "SUCCESS" | "ERROR";

const VALID_IDS = [
    "UNIT_0001_0001",
    "UNIT_0007_0007",
    "UNIT_0014_0014",
    "UNIT_0021_0021"
];

export function ProvenanceTerminal() {
    const [state, setState] = useState<ProvenanceState>("IDLE");
    const [inputValue, setInputValue] = useState("");
    const [scannedId, setScannedId] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (state === "SCANNING" || !inputValue.trim()) return;

        setState("SCANNING");
        setScannedId(inputValue.trim().toUpperCase());
    };


    useEffect(() => {
        if (state === "SCANNING") {
            const timer = setTimeout(() => {
                if (VALID_IDS.includes(scannedId)) {
                    setState("SUCCESS");
                } else {
                    setState("ERROR");
                }
            }, 2000); // 2000ms simulated delay

            return () => clearTimeout(timer);
        }
    }, [state, scannedId]);

    // Reset on input change if in error state, or just allow typing
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value.toUpperCase());
        if (state === "ERROR" || state === "SUCCESS") {
            setState("IDLE");
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto px-6 py-24 text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
            {/* 4. PRIMARY HEADING */}
            <h1 className="font-display italic text-4xl sm:text-6xl text-white mb-12">
                Provenance
            </h1>

            {/* 5. VERIFICATION INPUT MODULE */}
            <div className="relative">
                {/* Subtle vertical gradient */}
                <div className="absolute inset-x-0 -top-20 -bottom-20 bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none -z-10 w-1/2 mx-auto" />

                <div className={`
            relative p-5 transition-colors duration-300 border bg-black/40
            ${state === "IDLE" ? "border-white/15" : ""}
            ${state === "SCANNING" || state === "SUCCESS" ? "border-brc-green" : ""}
            ${state === "ERROR" ? "border-brc-rust bg-black/60" : ""}
        `}>
                    {/* Corner Accents */}
                    <div className={`absolute top-0 left-0 w-3 h-3 border-t border-l transition-colors duration-300 ${state === "ERROR" ? "border-brc-rust" : "border-white/25"}`} />
                    <div className={`absolute top-0 right-0 w-3 h-3 border-t border-r transition-colors duration-300 ${state === "ERROR" ? "border-brc-rust" : "border-white/25"}`} />
                    <div className={`absolute bottom-0 left-0 w-3 h-3 border-b border-l transition-colors duration-300 ${state === "ERROR" ? "border-brc-rust" : "border-white/25"}`} />
                    <div className={`absolute bottom-0 right-0 w-3 h-3 border-b border-r transition-colors duration-300 ${state === "ERROR" ? "border-brc-rust" : "border-white/25"}`} />

                    <form onSubmit={handleSubmit} className="relative overflow-hidden">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            disabled={state === "SCANNING"}
                            placeholder="ENTER UNIT IDENTIFIER"
                            className={`
                        w-full bg-transparent border-none text-center font-mono text-sm tracking-[0.25em] uppercase text-white placeholder:text-white/20 focus:outline-none focus:ring-0
                        ${state === "SCANNING" ? "opacity-50 cursor-not-allowed" : ""}
                    `}
                            autoFocus
                        />

                        {/* Scanning Shimmer Effect */}
                        {state === "SCANNING" && (
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brc-green/20 to-transparent animate-shimmer pointer-events-none" />
                        )}
                    </form>
                </div>

                {/* Status Text & Metadata */}
                <div className="mt-8 min-h-[100px]">
                    {state === "SCANNING" && (
                        <div className="font-mono text-[10px] text-brc-green tracking-[0.3em] animate-pulse">
                            SCANNING ARCHIVAL LEDGER…
                        </div>
                    )}

                    {state === "SUCCESS" && (
                        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                            <div className="font-mono text-[11px] text-brc-green tracking-[0.35em] mb-4">
                                UNIT RECOGNISED WITHIN THE BRC ARCHIVE
                            </div>
                            <div className="font-mono text-[10px] text-white/40 space-y-1">
                                <div>REF_ID: ARC-{scannedId.split('_')[1] || "000"}</div>
                                <div>SERIAL: {parseInt(scannedId.split('_')[1] || "0", 10)}/21</div>
                                <div>STATUS: VERIFIED</div>
                            </div>
                        </div>
                    )}

                    {state === "ERROR" && (
                        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                            <div className="font-mono text-[12px] text-brc-rust tracking-[0.4em] mb-1">
                                ACCESS DENIED
                            </div>
                            <div className="font-mono text-[9px] text-brc-rust/40 uppercase">
                                UNIT NOT FOUND IN ARCHIVE
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
