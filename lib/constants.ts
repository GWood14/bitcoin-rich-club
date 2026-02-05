import { DropRecord, UnitRecord } from './types';

export const BTC_FIXED_AMOUNT = 0.001;
export const HARD_LIMIT = 21;

// Deterministic Unit Generator
const generateDeterministicUnits = (dropId: string, issuedCount: number, baseFiat: number, isArchived: boolean = false): UnitRecord[] => {
  return Array.from({ length: 21 }, (_, i) => {
    const serialNum = i + 1;
    const serialStr = String(serialNum).padStart(2, '0'); // "01"
    const isIssued = i < issuedCount;

    // Deterministic pseudo-randomness for fiat fluctuation
    const fiatVariance = Math.sin(i * 123.45) * 5;

    return {
      unitId: `${dropId}-${serialStr}`,
      serial: serialStr,
      status: isIssued ? (isArchived ? 'ARCHIVED' : 'ISSUED') : 'UNISSUED',
      method: i % 3 === 0 ? 'FIAT_BRIDGE' : 'BTC', // Deterministic method mix
      fiatRef: isIssued ? Number((baseFiat + fiatVariance).toFixed(2)) : null,
      issuedAt: isIssued ? new Date(1704067200000 + (i * 86400000)).toISOString() : undefined // Fixed timestamps from Jan 1 2024
    };
  });
};

export const INITIAL_DROPS: DropRecord[] = [
  {
    dropId: '.0001',
    dropName: 'GENESIS_DROP',
    nomenclature: 'SCARCITY_TEE',
    description: 'Heavyweight 400GSM cotton. Cold-storage archival quality finish.',
    imageUrl: '/assets/scarcity-tee.jpg',
    btcPrice: 0.001,
    hardLimit: 21,
    status: 'SOLD_OUT',
    units: generateDeterministicUnits('.0001', 21, 95.00, true).map(u => ({ ...u, status: 'ISSUED' })) // All issued
  },
  {
    dropId: '.0002',
    dropName: 'OBSIDIAN_CONTAINER',
    nomenclature: 'OBSIDIAN_OBJECT',
    description: 'A sealed archival object. Issued once. Verified forever.',
    imageUrl: '/assets/obsidian-container.jpg',
    btcPrice: 0.001,
    hardLimit: 21,
    status: 'LIVE',
    units: generateDeterministicUnits('.0002', 11, 142.50) // 11 Issued
  },
  {
    dropId: '.0003',
    dropName: 'ARCHIVE_KEY',
    nomenclature: 'ACCESS_KEY_V1',
    description: 'Physical key for digital entry. Stainless steel construction.',
    imageUrl: '/assets/archive-key.jpg',
    btcPrice: 0.001,
    hardLimit: 21,
    status: 'LIVE',
    units: generateDeterministicUnits('.0003', 5, 210.00) // 5 Issued
  },
  {
    dropId: '.0004',
    dropName: 'GENESIS_BLOCK',
    nomenclature: 'BLOCK_REPRESENTATION',
    description: 'Commemorative block representation. Solid styling.',
    imageUrl: '/assets/genesis-block.jpg',
    btcPrice: 0.001,
    hardLimit: 21,
    status: 'LIVE',
    units: generateDeterministicUnits('.0004', 18, 350.00) // 18 Issued
  }
];
