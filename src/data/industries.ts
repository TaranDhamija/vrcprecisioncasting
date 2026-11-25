import { images } from '../config/images';

export interface Industry {
  slug: string;
  name: string;
  index: string;
  description: string;
  image: string;
  components: string[];
}

/** Illustrative sectors — confirm with the company before presenting as served industries. */
export const industries: Industry[] = [
  {
    slug: 'automotive',
    name: 'Automotive',
    index: '01',
    description:
      'Cast components for vehicle and drivetrain assemblies, where repeatability matters. Illustrative sector.',
    image: images.automotive,
    components: ['Housings', 'Brackets', 'Linkages'],
  },
  {
    slug: 'oil-gas',
    name: 'Oil & Gas',
    index: '02',
    description:
      'Flow-control and pressure-system components for demanding environments. Illustrative sector.',
    image: images.oilgas,
    components: ['Valve parts', 'Fittings', 'Connectors'],
  },
  {
    slug: 'aerospace',
    name: 'Aerospace',
    index: '03',
    description:
      'Complex, precision geometries for aerospace supply chains. Illustrative sector; approvals to be confirmed.',
    image: images.aerospace,
    components: ['Brackets', 'Housings', 'Structural parts'],
  },
  {
    slug: 'marine',
    name: 'Marine',
    index: '04',
    description:
      'Corrosion-conscious components for marine equipment and fittings. Illustrative sector.',
    image: images.marine,
    components: ['Fittings', 'Pump parts', 'Hardware'],
  },
  {
    slug: 'industrial-machinery',
    name: 'Industrial Machinery',
    index: '05',
    description:
      'Mechanical and fluid-handling components for industrial equipment builders. Illustrative sector.',
    image: images.machinery,
    components: ['Impellers', 'Drive parts', 'Housings'],
  },
  {
    slug: 'heavy-engineering',
    name: 'Heavy Engineering',
    index: '06',
    description:
      'Robust cast components for heavy plant and engineering projects. Illustrative sector.',
    image: images.heavy,
    components: ['Plant components', 'Wear parts', 'Fittings'],
  },
];
