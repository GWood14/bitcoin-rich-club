
import { Product } from './types';

export const BTC_FIXED_AMOUNT = 0.001;
export const HARD_LIMIT = 21;

const generateUnits = (count: number, issued: number): any[] => {
  return Array.from({ length: count }).map((_, i) => ({
    id: `u-${i}`,
    serial: `BRC-U-${String(i + 1).padStart(3, '0')}`,
    status: i < issued ? 'ISSUED' : 'UNISSUED',
    fiatPrice: 94 + Math.random() * 10,
    issuedAt: i < issued ? new Date(Date.now() - Math.random() * 1000000000).toISOString() : undefined,
  }));
};

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'p1',
    refId: 'BRC-840001',
    nomenclature: 'ARCHIVAL_VESSEL_01',
    description: 'A matte-black obsidian-glass container designed for cold-storage seed phrase preservation. Forensic-grade engraving on high-density ceramic core.',
    imageUrl: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=1000&auto=format&fit=crop',
    units: generateUnits(21, 14),
    status: 'LIVE',
    method: 'BLOCK_CORE',
  },
  {
    id: 'p2',
    refId: 'BRC-840002',
    nomenclature: 'CHRONOS_SIGIL_V2',
    description: 'Titanium-alloy block timepiece synced to the bitcoin block height. No mechanical hands, only the immutable ledger flow.',
    imageUrl: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1000&auto=format&fit=crop',
    units: generateUnits(21, 21),
    status: 'ARCHIVED',
    method: 'BLOCK_CORE',
  },
  {
    id: 'p3',
    refId: 'BRC-840003',
    nomenclature: 'ORACLE_LENS',
    description: 'Proprietary optics filtered to only reveal data when viewed under specific block-height verified illumination patterns.',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop',
    units: generateUnits(21, 3),
    status: 'LIVE',
    method: 'LN_V2',
  }
];
