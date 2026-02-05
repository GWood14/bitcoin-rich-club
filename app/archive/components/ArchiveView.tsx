"use client";

import React, { useState, useMemo } from "react";
import { INITIAL_DROPS } from "@/lib/constants";
import { DropRecord, UnitRecord } from "@/lib/types";
import { ArchiveLedger } from "./ArchiveLedger";
import { ArchiveGrid } from "./ArchiveGrid";
import { DossierModal } from "./DossierModal";

export default function ArchiveView() {
    const [selectedDrop, setSelectedDrop] = useState<DropRecord>(INITIAL_DROPS[0]);
    const [selectedUnit, setSelectedUnit] = useState<UnitRecord | null>(null);

    const avgCp = useMemo(() => {
        const issuedUnits = selectedDrop.units.filter((u) => u.status === "ISSUED" || u.status === "ARCHIVED");
        if (issuedUnits.length === 0) return 0;

        // Sum fiatRef (handle nulls just in case)
        const total = issuedUnits.reduce((acc, curr) => acc + (curr.fiatRef || 0), 0);
        return total / issuedUnits.length;
    }, [selectedDrop]);

    return (
        <>
            {/* 3. TOP METADATA HEADER */}
            <div className="flex flex-wrap items-center gap-6 mb-12 font-mono text-[10px] tracking-[0.3em] text-white/40 uppercase">
                <span className="text-white">ARCHIVE_LEDGER</span>
                <span>TOTAL_UNITS: {selectedDrop.hardLimit}</span>
                <span>AVG_CP: ${avgCp.toFixed(2)}</span>
                <span className="ml-auto text-brc-green">STATUS: IMMUTABLE</span>
            </div>

            {/* 5. VISUAL INDEX GRID (DROP SELECTOR) */}
            {/* User requested Visual Index below ledger originally? No: "Below ledger or above (preferred above ledger...)" */}
            <div className="mb-24">
                <div className="flex items-center gap-4 mb-8">
                    <div className="h-px flex-1 bg-white/10" />
                    <h3 className="font-mono text-[10px] text-white/40 tracking-widest">VISUAL INDEX</h3>
                    <div className="h-px flex-1 bg-white/10" />
                </div>
                <ArchiveGrid
                    drops={INITIAL_DROPS}
                    selectedDropId={selectedDrop.dropId}
                    onDropClick={setSelectedDrop}
                />
            </div>

            {/* 4. MAIN LEDGER TABLE */}
            <div className="mb-24">
                <div className="flex items-center gap-4 mb-8">
                    <div className="h-px flex-1 bg-white/10" />
                    <h3 className="font-mono text-[10px] text-white/40 tracking-widest">
                        UNIT LEDGER // {selectedDrop.nomenclature}
                    </h3>
                    <div className="h-px flex-1 bg-white/10" />
                </div>
                <ArchiveLedger
                    drop={selectedDrop}
                    units={selectedDrop.units}
                    onUnitClick={setSelectedUnit}
                />
            </div>

            {/* 6. DOSSIER MODAL */}
            <DossierModal
                unit={selectedUnit}
                drop={selectedDrop}
                onClose={() => setSelectedUnit(null)}
            />
        </>
    );
}
