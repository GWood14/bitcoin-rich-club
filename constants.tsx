
import React from 'react';
import { Product, UnitStatus } from './types';

export const BTC_AMOUNT = 0.001;
export const HARD_LIMIT = 21;

const generateUnits = (count: number, issuedCount: number): any[] => {
  return Array.from({ length: count }).map((_, i) => ({
    id: `unit-${i}`,
    serial: `BRC-U-${String(i + 1).padStart(3, '0')}`,
    status: (i < issuedCount ? 'ISSUED' : 'UNISSUED') as UnitStatus,
    fiatPrice: i < issuedCount ? 94.21 + (Math.random() * 10) : undefined,
    issuedAt: i < issuedCount ? Date.now() - (Math.random() * 100000000) : undefined,
  }));
};

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'p1',
    refId: 'BRC-001',
    nomenclature: 'ARCHIVAL_VESSEL_01',
    description: 'A matte-black obsidian-glass container designed for cold-storage seed phrase preservation. Forensic-grade engraving.',
    imageUrl: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80&w=1200',
    units: generateUnits(21, 14),
    status: 'LIVE',
    method: 'BLOCK_CORE',
  },
  {
    id: 'p2',
    refId: 'BRC-002',
    nomenclature: 'CHRONOS_SIGIL',
    description: 'Titanium-alloy block timepiece synced to the bitcoin block height. No mechanical hands, only the ledger flow.',
    imageUrl: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=1200',
    units: generateUnits(21, 21),
    status: 'ARCHIVED',
    method: 'BLOCK_CORE',
  },
  {
    id: 'p3',
    refId: 'BRC-003',
    nomenclature: 'ORACLE_LENS',
    description: 'Proprietary optics filtered to only reveal data when viewed under specific block-height verified illumination.',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200',
    units: generateUnits(21, 5),
    status: 'LIVE',
    method: 'LN_V2',
  }
];

export const L_BRACKET = (
  <svg width="12" height="12" viewBox="0 0 12 12" className="opacity-30">
    <path d="M1 11V1H11" fill="none" stroke="currentColor" strokeWidth="1"/>
  </svg>
);
