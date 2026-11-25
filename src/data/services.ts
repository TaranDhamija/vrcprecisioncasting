import { images } from '../config/images';

export interface Service {
  slug: string;
  title: string;
  label: string;
  short: string;
  description: string;
  image: string;
  highlights: string[];
  process: string[];
  /** Provisional until confirmed by the company. */
  provisional: boolean;
}

export const services: Service[] = [
  {
    slug: 'investment-casting',
    title: 'Investment Casting',
    label: 'LOST-WAX PROCESS',
    short: 'Complex metal geometries produced through the investment (lost-wax) casting process.',
    description:
      'Investment casting is well suited to intricate shapes and fine surface detail. This is placeholder copy — replace it with the exact alloys, size ranges and process details that VR Precision Casting offers.',
    image: images.foundry,
    highlights: [
      'Suited to complex geometries and fine detail',
      'Material and alloy options to be confirmed',
      'Size and weight range to be confirmed',
    ],
    process: ['Pattern & wax assembly', 'Shell building', 'Dewax & pouring', 'Finishing & inspection'],
    provisional: true,
  },
  {
    slug: 'precision-machining',
    title: 'Precision Machining',
    label: 'CNC & FINISH MACHINING',
    short: 'Machining of cast components to the dimensional requirements of the drawing.',
    description:
      'Cast components often need machined features for fit and function. This is placeholder copy — confirm machine types, axes and tolerance capability before publishing.',
    image: images.cnc,
    highlights: [
      'Machining of critical features on cast parts',
      'Equipment list to be confirmed',
      'Tolerance capability to be confirmed',
    ],
    process: ['Drawing review', 'Fixture planning', 'Machining', 'Dimensional check'],
    provisional: true,
  },
  {
    slug: 'tooling',
    title: 'Pattern & Tooling',
    label: 'PATTERN DEVELOPMENT',
    short: 'Tooling and pattern development to take a component from drawing to repeatable production.',
    description:
      'Good tooling underpins repeatable casting quality. This is placeholder copy — describe actual in-house or partnered tooling capability here.',
    image: images.engineering,
    highlights: [
      'Tooling planned from the component drawing',
      'In-house vs. partner tooling to be confirmed',
      'Lead times to be confirmed',
    ],
    process: ['Design review', 'Tool design', 'Tool manufacture', 'Sampling'],
    provisional: true,
  },
  {
    slug: 'surface-finishing',
    title: 'Surface Finishing',
    label: 'FINISHING',
    short: 'Surface preparation and finishing to meet appearance and functional requirements.',
    description:
      'Finishing prepares castings for service or further assembly. This is placeholder copy — list the finishing processes actually available.',
    image: images.metalParts,
    highlights: [
      'Finishing options to be confirmed',
      'Cosmetic and functional requirements considered',
      'Process list to be confirmed',
    ],
    process: ['Cleaning', 'Fettling', 'Surface treatment', 'Final check'],
    provisional: true,
  },
  {
    slug: 'assembly',
    title: 'Assembly',
    label: 'SUB-ASSEMBLY',
    short: 'Sub-assembly support for components that ship ready to fit.',
    description:
      'Where required, components can be supplied as sub-assemblies. This is placeholder copy — confirm the assembly scope offered.',
    image: images.production,
    highlights: [
      'Assembly scope to be confirmed',
      'Packaging and kitting to be confirmed',
      'Documentation options to be confirmed',
    ],
    process: ['Kit preparation', 'Assembly', 'Functional check', 'Packing'],
    provisional: true,
  },
  {
    slug: 'custom-manufacturing',
    title: 'Custom Manufacturing Solutions',
    label: 'ENGINEERED TO ORDER',
    short: 'Engineering discussion for components that do not fit a standard catalogue.',
    description:
      'Share a drawing or sample and discuss feasibility with the team. This is placeholder copy — replace with the real engagement process.',
    image: images.machinery2,
    highlights: [
      'Drawing- or sample-based enquiries',
      'Feasibility discussion with engineering',
      'Commercial terms to be confirmed',
    ],
    process: ['Enquiry', 'Feasibility review', 'Quotation', 'Production planning'],
    provisional: true,
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
