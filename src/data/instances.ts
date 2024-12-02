export interface Instance {
  id: string;
  dependencies: string[];
}

export const instances: Instance[] = [
  { id: '1b', dependencies: ['1c', '4f'] },
  { id: '1d', dependencies: ['1c', '1e', '7e', '7c', '4f'] },
  { id: '1e', dependencies: ['1c', '4f'] },
  { id: '2a', dependencies: ['8b', '7a', '8a'] },
  { id: '2b', dependencies: ['8b', '7c', '8a'] },
  { id: '2c', dependencies: ['8b', '7d', '8a', '8d'] },
  { id: '2d', dependencies: ['8b', '7e', '8a'] },
  { id: '2e', dependencies: ['8b', '7f'] },
  { id: '2f', dependencies: ['8b', '7g'] },
  { id: '3a', dependencies: ['8a', '4f'] },
  { id: '3b', dependencies: ['4f'] },
  { id: '3c', dependencies: ['1c'] },
  { id: '3d', dependencies: ['8a'] },
  { id: '5.1a', dependencies: ['2a', '3d', '8f'] },
  { id: '5.1b', dependencies: ['2b', '3d', '8f'] },
  { id: '5.1c', dependencies: ['2c', '3d', '8f'] },
  { id: '5.1d', dependencies: ['2d', '3d', '8f'] },
  { id: '5.1e', dependencies: ['2e', '3d', '8f'] },
  { id: '5.1f', dependencies: ['2f'] },
  { id: '5.2x', dependencies: ['5.1a', '5.1b', '5.1c', '5.1d', '5.1e', '5.1f', '3c', '3b'] },
  { id: '6a', dependencies: ['1b', '4d', '4b', '4e', '4c', '1a'] },
  { id: '6b', dependencies: ['1b', '7g', '4f'] },
  { id: '7a', dependencies: ['4a', '4f', '4e', '1a'] },
  { id: '7b', dependencies: ['7c', '7e', '7f'] },
  { id: '7c', dependencies: ['4b', '7d', '8a', '1e', '1d'] },
  { id: '7d', dependencies: ['4c', '4b', '8a'] },
  { id: '7e', dependencies: ['4d', '8a', '1e'] },
  { id: '7f', dependencies: ['4e', '8a', '1e'] },
  { id: '7g', dependencies: ['4f', '4b', '4e', '1d', '8a'] },
  { id: '8a', dependencies: ['8e'] },
  { id: '8f', dependencies: ['1a'] },
  { id: '9x', dependencies: ['1c', '1b', '1e', '3a', '1d', '7b', '5.2x'] }
];