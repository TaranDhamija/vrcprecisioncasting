import { images } from '../config/images';

export type ProductCategory =
  | 'Valve Components'
  | 'Pump Components'
  | 'Industrial Fittings'
  | 'Custom Cast Components'
  | 'Mechanical Components';

export interface Product {
  slug: string;
  name: string;
  category: ProductCategory;
  application: string;
  material: string;
  summary: string;
  description: string;
  process: string;
  images: string[];
  applications: string[];
  specs: { label: string; value: string }[];
}

export const categories: ProductCategory[] = [
  'Valve Components',
  'Pump Components',
  'Industrial Fittings',
  'Custom Cast Components',
  'Mechanical Components',
];

const TBC = 'To be confirmed';

const spec = (extra: { label: string; value: string }[] = []) => [
  { label: 'Material', value: TBC },
  { label: 'Weight range', value: TBC },
  { label: 'Dimensional tolerance', value: TBC },
  { label: 'Surface finish', value: TBC },
  ...extra,
];

/** Illustrative sample products — not a verified catalogue. */
export const products: Product[] = [
  {
    slug: 'valve-body-sample',
    name: 'Valve Body',
    category: 'Valve Components',
    application: 'Flow control systems',
    material: 'Material placeholder',
    summary: 'Sample listing for a cast valve body component.',
    description:
      'Illustrative product entry. Replace with the real description, drawings and photography of the component.',
    process: 'Investment casting followed by finishing (placeholder — confirm actual route).',
    images: [images.metalParts, images.components, images.cnc],
    applications: ['Industrial flow control', 'Process equipment'],
    specs: spec(),
  },
  {
    slug: 'valve-disc-sample',
    name: 'Valve Disc',
    category: 'Valve Components',
    application: 'Isolation and control',
    material: 'Material placeholder',
    summary: 'Sample listing for a cast valve disc.',
    description:
      'Illustrative product entry. Replace with confirmed component details before publishing.',
    process: 'Investment casting (placeholder — confirm actual route).',
    images: [images.components, images.metalParts, images.inspection],
    applications: ['Industrial valves', 'Fluid handling'],
    specs: spec(),
  },
  {
    slug: 'pump-impeller-sample',
    name: 'Pump Impeller',
    category: 'Pump Components',
    application: 'Fluid handling',
    material: 'Material placeholder',
    summary: 'Sample listing for a cast impeller.',
    description:
      'Illustrative product entry. Impellers are a typical example of complex cast geometry; replace with real product details.',
    process: 'Investment casting followed by machining (placeholder).',
    images: [images.machinery, images.metalParts, images.cnc],
    applications: ['Pumps', 'Industrial fluid systems'],
    specs: spec(),
  },
  {
    slug: 'pump-casing-sample',
    name: 'Pump Casing Component',
    category: 'Pump Components',
    application: 'Pump assemblies',
    material: 'Material placeholder',
    summary: 'Sample listing for a cast pump housing component.',
    description:
      'Illustrative product entry. Replace with confirmed details, drawings and photography.',
    process: 'Casting and machining (placeholder).',
    images: [images.production, images.machinery, images.inspection],
    applications: ['Pump assemblies'],
    specs: spec(),
  },
  {
    slug: 'pipe-fitting-sample',
    name: 'Pipe Fitting',
    category: 'Industrial Fittings',
    application: 'Piping systems',
    material: 'Material placeholder',
    summary: 'Sample listing for a cast industrial fitting.',
    description:
      'Illustrative product entry. Replace with the actual fittings range once confirmed.',
    process: 'Investment casting (placeholder).',
    images: [images.components, images.metalParts, images.factory],
    applications: ['Piping', 'Process lines'],
    specs: spec(),
  },
  {
    slug: 'flange-connector-sample',
    name: 'Flange & Connector',
    category: 'Industrial Fittings',
    application: 'Pipe and equipment connections',
    material: 'Material placeholder',
    summary: 'Sample listing for a flange or connector component.',
    description:
      'Illustrative product entry. Replace with confirmed standards, sizes and materials.',
    process: 'Casting and machining (placeholder).',
    images: [images.metalParts, images.cnc, images.components],
    applications: ['Industrial piping', 'Equipment connections'],
    specs: spec(),
  },
  {
    slug: 'custom-bracket-sample',
    name: 'Custom Cast Bracket',
    category: 'Custom Cast Components',
    application: 'Drawing-based custom parts',
    material: 'Material placeholder',
    summary: 'Sample listing for a component made to customer drawing.',
    description:
      'Illustrative product entry showing how a custom, drawing-based component could be presented.',
    process: 'Tooling and casting to customer drawing (placeholder).',
    images: [images.engineering, images.foundry, images.metalParts],
    applications: ['OEM components', 'Custom machinery'],
    specs: spec(),
  },
  {
    slug: 'custom-housing-sample',
    name: 'Custom Housing',
    category: 'Custom Cast Components',
    application: 'Engineered enclosures',
    material: 'Material placeholder',
    summary: 'Sample listing for a custom cast housing.',
    description:
      'Illustrative product entry. Replace with real project examples when approved for display.',
    process: 'Tooling, casting and finishing (placeholder).',
    images: [images.foundry, images.engineering, images.inspection],
    applications: ['Equipment housings'],
    specs: spec(),
  },
  {
    slug: 'gear-component-sample',
    name: 'Gear & Drive Component',
    category: 'Mechanical Components',
    application: 'Power transmission',
    material: 'Material placeholder',
    summary: 'Sample listing for a mechanical drive component.',
    description:
      'Illustrative product entry. Replace with confirmed product details.',
    process: 'Casting and precision machining (placeholder).',
    images: [images.machinery2, images.cnc, images.machinery],
    applications: ['Machinery', 'Drive systems'],
    specs: spec(),
  },
  {
    slug: 'lever-linkage-sample',
    name: 'Lever & Linkage',
    category: 'Mechanical Components',
    application: 'Mechanical assemblies',
    material: 'Material placeholder',
    summary: 'Sample listing for a lever or linkage component.',
    description:
      'Illustrative product entry. Replace with confirmed product details.',
    process: 'Investment casting (placeholder).',
    images: [images.components, images.machinery2, images.metalParts],
    applications: ['Mechanical assemblies', 'Equipment controls'],
    specs: spec(),
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
