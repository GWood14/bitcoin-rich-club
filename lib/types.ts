// Drop Registry Data Model

export type UnitStatus = 'UNISSUED' | 'ISSUED' | 'ARCHIVED';
export type DropStatus = 'LIVE' | 'ARCHIVED' | 'SOLD_OUT';
export type IssuanceMethod = 'BTC' | 'FIAT_BRIDGE';

export interface UnitRecord {
  unitId: string;            // e.g. ".0001-07"
  serial: string;            // "01".."21"
  status: UnitStatus;
  method: IssuanceMethod;
  fiatRef: number | null;    // locked fiat reference at issuance
  issuedAt?: string;         // ISO timestamp for issued units only
}

export interface DropRecord {
  dropId: string;            // ".0001"
  dropName: string;          // "GENESIS_DROP"
  nomenclature: string;      // "SCARCITY_TEE"
  description: string;
  imageUrl: string;          // hero image
  thumbUrl?: string;         // optional filmstrip thumbnail
  btcPrice: number;          // always 0.001
  hardLimit: number;         // always 21
  status: DropStatus;
  units: UnitRecord[];
}

// Deprecated (kept for temporary compatibility if needed, but should be removed)
export interface ArchiveStats {
  avgCp: number;
  totalUnits: number;
  issuedUnits: number;
  entropy: number;
}
