
export type UnitStatus = 'UNISSUED' | 'ISSUED' | 'ARCHIVED';

export interface Unit {
  id: string;
  serial: string;
  status: UnitStatus;
  // Fixed: Allow both string (ISO) and number (timestamp) to maintain compatibility across different data sources
  issuedAt?: string | number;
  // Fixed: Made optional to match the definition in other type definitions in the project
  fiatPrice?: number;
}

export interface Product {
  id: string;
  refId: string;
  nomenclature: string;
  description: string;
  imageUrl: string;
  units: Unit[];
  status: 'LIVE' | 'ARCHIVED';
  method: 'BLOCK_CORE' | 'LN_V2';
}

export interface ArchiveStats {
  avgCp: number;
  totalUnits: number;
  issuedUnits: number;
  entropy: number;
}
