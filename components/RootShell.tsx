"use client";

import type { ReactNode } from "react";
import { TelemetryBar } from "./TelemetryBar";
import { Header } from "./Header";
import { Footer } from "./Footer";
import {
    GrainOverlay,
    Scanlines,
    CornerBrackets,
    TruthWatermark,
} from "./SystemOverlays";

export function RootShell({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen bg-background text-text-authoritative font-sans selection:bg-brc-green selection:text-black">
            <TelemetryBar />

            <Header />

            <main className="pt-24 pb-16 min-h-screen relative z-10">
                {children}
            </main>

            <Footer />

            {/* Visual System Overlays */}
            <GrainOverlay />
            <Scanlines />
            <CornerBrackets />

            {/* Grid Background */}
            <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:80px_80px]" />
            </div>
        </div>
    );
}
