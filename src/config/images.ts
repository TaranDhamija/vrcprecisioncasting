/**
 * Temporary stock imagery. Replace each URL with real company photography when available.
 * Every <ImageWithFallback> falls back to a designed placeholder if a URL fails.
 */
const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`;

export const images = {
  heroCasting: u('photo-1565514020179-026b92b84bb6', 2000),
  foundry: u('photo-1537462715879-360eeb61a0ad'),
  cnc: u('photo-1581092160562-40aa08e78837'),
  engineering: u('photo-1581091226825-a6a2a5aee158'),
  inspection: u('photo-1530124566582-a618bc2615dc'),
  factory: u('photo-1504917595217-d4dc5ebe6122'),
  machinery: u('photo-1567789884554-0b844b597180'),
  production: u('photo-1513828583688-c52646db42da'),
  metalParts: u('photo-1565608438257-fac3c27beb36'),
  components: u('photo-1572981779307-38b8cabb2407'),
  automotive: u('photo-1492144534655-ae79c964c9d7'),
  oilgas: u('photo-1518709268805-4e9042af9f23'),
  aerospace: u('photo-1436491865332-7a61a109cc05'),
  marine: u('photo-1559825481-12a05cc00344'),
  heavy: u('photo-1541888946425-d81bb19240f5'),
  machinery2: u('photo-1581092918056-0c4c3acd3789'),
} as const;

export type ImageKey = keyof typeof images;
