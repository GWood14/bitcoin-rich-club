"use client";

import React from "react";
import { DropRecord, UnitRecord } from "@/lib/types";

interface ArchiveLedgerProps {
    drop: DropRecord;
    units: UnitRecord[];
    onUnitClick: (unit: UnitRecord) => void;
}

export function ArchiveLedger({ drop, units, onUnitClick }: ArchiveLedgerProps) {
    return (
        <div className="w-full border border-white/10 bg-black/40 overflow-hidden flex flex-col max-h-[560px]">
            <div className="overflow-x-auto overflow-y-auto custom-scrollbar brc-scrollbar">
                <table className="w-full font-mono text-left text-[10px] sm:text-xs">
                    <thead className="sticky top-0 z-10 bg-[#0A0A0A] shadow-lg">
                        <tr className="border-b border-white/10 text-white/40 uppercase tracking-widest h-10">
                            <th className="px-4 font-normal whitespace-nowrap">REF_ID</th>
                            <th className="px-4 font-normal whitespace-nowrap">NOMENCLATURE</th>
                            <th className="px-4 font-normal whitespace-nowrap">SERIAL</th>
                            <th className="px-4 font-normal whitespace-nowrap">ISSUANCE</th>
                            <th className="px-4 font-normal whitespace-nowrap">METHOD</th>
                            <th className="px-4 font-normal whitespace-nowrap text-right">STATUS</th>
                            <th className="px-4 font-normal whitespace-nowrap text-right">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {units.map((unit) => (
                            <tr
                                key={unit.unitId}
                                onClick={() => onUnitClick(unit)}
                                className="
                                    h-[44px] border-b border-white/5 text-white/70 cursor-pointer
                                    transition-colors duration-200
                                    hover:bg-[rgba(0,255,128,0.05)] hover:text-[#00FF80] group
                                "
                            >
                                <td className="px-4 whitespace-nowrap opacity-60">{drop.dropId}</td>
                                <td className="px-4 whitespace-nowrap text-white group-hover:text-[#00FF80]">{drop.nomenclature}</td>
                                <td className="px-4 whitespace-nowrap">
                                    {unit.serial}
                                </td>
                                <td className="px-4 whitespace-nowrap">
                                    {unit.fiatRef ? `$${unit.fiatRef.toFixed(2)}` : '—'}
                                </td>
                                <td className="px-4 whitespace-nowrap">{unit.method}</td>
                                <td className="px-4 whitespace-nowrap text-right">
                                    <span
                                        className={
                                            unit.status === "ISSUED" ? "text-brc-green" :
                                                unit.status === "ARCHIVED" ? "text-brc-rust" : "text-white/30"
                                        }
                                    >
                                        {unit.status}
                                    </span>
                                </td>
                                <td className="px-4 whitespace-nowrap text-right text-brc-green opacity-0 group-hover:opacity-100 transition-opacity">
                                    OPEN_DOSSIER [+]
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
