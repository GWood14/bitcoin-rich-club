
export enum AppView {
  HOME = 'HOME',
  MANIFESTO = 'MANIFESTO',
  DROP = 'DROP',
  ARCHIVE = 'ARCHIVE',
  PROVENANCE = 'PROVENANCE'
}

export type UnitStatus = 'UNISSUED' | 'ISSUED' | 'ARCHIVED';

export interface Unit {
  id: string;
  serial: string;
  status: UnitStatus;
  issuedAt?: number;
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

export interface AppState {
  currentView: AppView;
  products: Product[];
  entropy: number;
}
