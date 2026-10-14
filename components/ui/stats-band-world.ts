export const WORLD = {
  west: -180,
  east: 180,
  north: 85,
  south: -60,
  columns: 80,
  rows: 30,
};

const LANDMASS = [
  [15, 10, 13, 6], // North America
  [24, 20, 7, 8], // South America
  [42, 10, 7, 4], // Europe
  [43, 17, 9, 8], // Africa
  [57, 11, 16, 7], // Asia
  [67, 23, 7, 4], // Australia
] as const;

export const worldLand = Array.from({ length: WORLD.columns * WORLD.rows }, (_, index) => {
  const x = index % WORLD.columns;
  const y = Math.floor(index / WORLD.columns);
  return LANDMASS.some(([centerX, centerY, radiusX, radiusY]) =>
    ((x - centerX) / radiusX) ** 2 + ((y - centerY) / radiusY) ** 2 <= 1
  );
});
