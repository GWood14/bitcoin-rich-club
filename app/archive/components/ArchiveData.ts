
export type ArchiveStatus = "ISSUED" | "ARCHIVED";
export type ArchiveMethod = "BTC" | "FIAT_BRIDGE";

export interface ArchiveItem {
    refId: string;
    name: string;
    serial: number;
    fiatPrice: number;
    method: ArchiveMethod;
    status: ArchiveStatus;
    verifiedAt: string;
    image: string;
}

export const ARCHIVE_DATA: ArchiveItem[] = Array.from({ length: 21 }, (_, i) => {
    const serial = i + 1;
    const isArchived = i >= 15; // Last few are archived for variety
    const basePrice = 90 + Math.random() * 20;

    return {
        refId: `REF_OBS_${serial.toString().padStart(3, "0")}`,
        name: "Obsidian Container",
        serial: serial,
        fiatPrice: parseFloat(basePrice.toFixed(2)),
        method: Math.random() > 0.3 ? "BTC" : "FIAT_BRIDGE",
        status: isArchived ? "ARCHIVED" : "ISSUED",
        verifiedAt: "2024.01.15", // Static date for now, or could be dynamic
        image: "/assets/obsidian-container.jpg",
    };
});
