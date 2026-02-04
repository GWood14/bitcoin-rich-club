"use client";

import React, { useState, useMemo } from "react";
import { ARCHIVE_DATA, ArchiveItem } from "./ArchiveData";
import { ArchiveLedger } from "./ArchiveLedger";
import { ArchiveGrid } from "./ArchiveGrid";
import { DossierModal } from "./DossierModal";

export default function ArchiveView() {
    const [selectedItem, setSelectedItem] = useState<ArchiveItem | null>(null);

    const avgCp = useMemo(() => {
        const issuedItems = ARCHIVE_DATA.filter((i) => i.status === "ISSUED");
        if (issuedItems.length === 0) return 0;
        const total = issuedItems.reduce((acc, curr) => acc + curr.fiatPrice, 0);
        return total / issuedItems.length;
    }, []);

    return (
        <>
            {/* 3. TOP METADATA HEADER */}
            <div className="flex flex-wrap items-center gap-6 mb-12 font-mono text-[10px] tracking-[0.3em] text-white/40 uppercase">
                <span className="text-white">ARCHIVE_LEDGER</span>
                <span>TOTAL_UNITS: 21</span>
                <span>AVG_CP: ${avgCp.toFixed(2)}</span>
                <span className="ml-auto text-brc-green">STATUS: IMMUTABLE</span>
            </div>

            {/* 4. MAIN LEDGER TABLE */}
            <div className="mb-24">
                <ArchiveLedger items={ARCHIVE_DATA} onItemClick={setSelectedItem} />
            </div>

            {/* 5. VISUAL INDEX GRID */}
            <div className="mb-24">
                <div className="flex items-center gap-4 mb-8">
                    <div className="h-px flex-1 bg-white/10" />
                    <h3 className="font-mono text-[10px] text-white/40 tracking-widest">VISUAL INDEX</h3>
                    <div className="h-px flex-1 bg-white/10" />
                </div>
                <ArchiveGrid items={ARCHIVE_DATA} onItemClick={setSelectedItem} />
            </div>

            {/* 6. DOSSIER MODAL */}
            <DossierModal item={selectedItem} onClose={() => setSelectedItem(null)} />
        </>
    );
}
