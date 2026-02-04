"use client";

import React from "react";
import { ArchiveItem } from "./ArchiveData";

interface ArchiveLedgerProps {
    items: ArchiveItem[];
    onItemClick: (item: ArchiveItem) => void;
}

export function ArchiveLedger({ items, onItemClick }: ArchiveLedgerProps) {
    return (
        <div className="w-full border border-white/10 bg-black/40 overflow-hidden flex flex-col max-h-[60vh]">
            <div className="overflow-x-auto overflow-y-auto custom-scrollbar">
                <table className="w-full font-mono text-left text-[10px] sm:text-xs">
                    <thead className="sticky top-0 z-10 bg-[#0A0A0A] shadow-lg">
                        <tr className="border-b border-white/10 text-white/40 uppercase tracking-widest h-10">
                            <th className="px-4 font-normal whitespace-nowrap">REF_ID</th>
                            <th className="px-4 font-normal whitespace-nowrap">NOMENCLATURE</th>
                            <th className="px-4 font-normal whitespace-nowrap">SERIAL</th>
                            <th className="px-4 font-normal whitespace-nowrap">ISSUANCE</th>
                            <th className="px-4 font-normal whitespace-nowrap">METHOD</th>
                            <th className="px-4 font-normal whitespace-nowrap text-right">STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => (
                            <tr
                                key={item.refId}
                                onClick={() => onItemClick(item)}
                                className="
                h-[44px] border-b border-white/5 text-white/70 cursor-pointer
                transition-colors duration-200
                hover:bg-[rgba(0,255,128,0.05)] hover:text-[#00FF80]
              "
                            >
                                <td className="px-4 whitespace-nowrap">{item.refId}</td>
                                <td className="px-4 whitespace-nowrap">{item.name}</td>
                                <td className="px-4 whitespace-nowrap">
                                    {item.serial.toString().padStart(2, "0")}
                                </td>
                                <td className="px-4 whitespace-nowrap">${item.fiatPrice.toFixed(2)}</td>
                                <td className="px-4 whitespace-nowrap">{item.method}</td>
                                <td className="px-4 whitespace-nowrap text-right">
                                    <span
                                        className={
                                            item.status === "ISSUED" ? "text-brc-green" : "text-brc-rust"
                                        }
                                    >
                                        {item.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
