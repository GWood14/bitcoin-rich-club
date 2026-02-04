"use client";

import React, { useState, useEffect } from "react";

type PaymentState = "ACQUIRE_UNIT" | "AWAITING_PAYMENT" | "PAYMENT_DETECTED" | "VERIFYING" | "ACQUIRED";

export function DropInterface() {
    const [state, setState] = useState<PaymentState>("ACQUIRE_UNIT");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalStep, setModalStep] = useState<1 | 2>(1);

    // 7. PAYMENT STATE MACHINE
    // Handle transitions
    useEffect(() => {
        let timeout: NodeJS.Timeout;

        if (state === "AWAITING_PAYMENT") {
            // Automatic transition for mock
            timeout = setTimeout(() => {
                setState("PAYMENT_DETECTED");
            }, 3000);
        } else if (state === "PAYMENT_DETECTED") {
            timeout = setTimeout(() => {
                setState("VERIFYING");
            }, 2000);
        } else if (state === "VERIFYING") {
            timeout = setTimeout(() => {
                setState("ACQUIRED");
                // Close modal on acquire? Or keep showing success? Prompt doesn't specify closure.
                // Let's keep modal open if user is there, or let them close it.
                // But logic says modal has payment steps.
            }, 2500);
        }

        return () => clearTimeout(timeout);
    }, [state]);

    const handleAcquireClick = () => {
        if (state === "ACQUIRE_UNIT") {
            setIsModalOpen(true);
            setState("AWAITING_PAYMENT");
        }
    };

    const closeModal = () => {
        // Optional, not specified, but good UX
        setIsModalOpen(false);
    };

    return (
        <>
            {/* 6. PRIMARY CTA — ACQUIRE UNIT */}
            <button
                onClick={handleAcquireClick}
                disabled={state === "ACQUIRED"}
                className={`
          mt-12 px-10 py-5 border border-brc-green font-mono text-[12px] tracking-[0.4em] uppercase transition-all
          ${state === "ACQUIRED"
                        ? "bg-brc-green text-black cursor-default"
                        : "text-brc-green hover:bg-brc-green hover:text-black"}
        `}
            >
                <span className="animate-shimmer bg-gradient-to-r from-brc-green via-white to-brc-green bg-[length:200%_100%] bg-clip-text text-transparent group-hover:text-black">
                    {state === "ACQUIRE_UNIT" && "ACQUIRE_UNIT +"}
                    {state === "AWAITING_PAYMENT" && "AWAITING..."}
                    {state === "PAYMENT_DETECTED" && "DETECTING..."}
                    {state === "VERIFYING" && "VERIFYING..."}
                    {state === "ACQUIRED" && "UNIT ACQUIRED"}
                </span>
                {/* Fallback simple text if gradient clip is tricky with hover states */}
                <span className={`absolute inset-0 flex items-center justify-center pointer-events-none ${state !== "ACQUIRE_UNIT" ? "hidden" : "hidden"}`}>
                    ACQUIRE_UNIT +
                </span>
            </button>

            {/* 8. FORENSIC PAYMENT MODAL */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
                    <div className="relative w-full max-w-md bg-[#050505] border border-white/10 p-8">
                        {/* Corner brackets */}
                        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/20" />
                        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/20" />
                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/20" />
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/20" />

                        {/* Content */}
                        {state === "ACQUIRED" ? (
                            <div className="text-center py-10">
                                <h3 className="font-display italic text-3xl text-brc-green mb-4">Acquisition Verified</h3>
                                <p className="font-mono text-xs text-white/50">Unit Obsidian_012 assigned to wallet.</p>
                                <button onClick={closeModal} className="mt-8 text-xs font-mono underline text-white/30 hover:text-white">CLOSE_TERMINAL</button>
                            </div>
                        ) : (
                            <>
                                {modalStep === 1 && (
                                    <div className="space-y-6">
                                        <div className="text-center font-mono text-[10px] text-white/40 uppercase tracking-widest mb-4">
                                            Step 01 / 02: Bitcoin Payment
                                        </div>

                                        <div className="bg-white p-4 mx-auto w-32 h-32 flex items-center justify-center">
                                            {/* Placeholder QR */}
                                            <div className="w-full h-full bg-black/10 flex items-center justify-center text-[8px] text-black font-mono text-center">
                                                [QR_CODE_PLACEHOLDER]
                                            </div>
                                        </div>

                                        <div className="space-y-2 font-mono text-[10px] text-white/70 break-all text-center">
                                            <p>ADD: 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa</p>
                                            <p className="text-brc-green text-sm">AMT: 0.001 BTC</p>
                                            <p className="text-white/30">REF: ~$94.21</p>
                                        </div>

                                        <div className="pt-6 border-t border-white/10 text-center">
                                            <button
                                                onClick={() => setModalStep(2)}
                                                className="font-mono text-[10px] text-brc-green underline hover:text-white transition-colors"
                                            >
                                                USE FIAT BRIDGE
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {modalStep === 2 && (
                                    <div className="space-y-6">
                                        <div className="text-center font-mono text-[10px] text-white/40 uppercase tracking-widest mb-4">
                                            Step 02 / 02: Fiat Bridge
                                        </div>

                                        <div className="space-y-4">
                                            <input
                                                type="text"
                                                placeholder="CARD_NUMBER"
                                                className="w-full bg-white/5 border border-white/10 p-3 font-mono text-xs text-white placeholder:text-white/20 focus:outline-none focus:border-brc-green"
                                            />
                                            <div className="flex gap-4">
                                                <input
                                                    type="text"
                                                    placeholder="MM/YY"
                                                    className="w-1/2 bg-white/5 border border-white/10 p-3 font-mono text-xs text-white placeholder:text-white/20 focus:outline-none focus:border-brc-green"
                                                />
                                                <input
                                                    type="text"
                                                    placeholder="CVC"
                                                    className="w-1/2 bg-white/5 border border-white/10 p-3 font-mono text-xs text-white placeholder:text-white/20 focus:outline-none focus:border-brc-green"
                                                />
                                            </div>
                                        </div>

                                        <div className="pt-6 border-t border-white/10 text-center space-y-3">
                                            <button
                                                onClick={() => setState("PAYMENT_DETECTED")} // Mock payment submission
                                                className="w-full bg-brc-green/10 border border-brc-green py-3 font-mono text-xs text-brc-green hover:bg-brc-green hover:text-black transition-colors"
                                            >
                                                TRANSMIT_FIAT
                                            </button>
                                            <button
                                                onClick={() => setModalStep(1)}
                                                className="font-mono text-[10px] text-white/30 underline hover:text-white transition-colors"
                                            >
                                                RETURN_TO_CRYPTO
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
