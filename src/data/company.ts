import { images } from '../config/images';

/** All copy below is editable placeholder content, not verified company facts. */

export const capabilities = [
  {
    slug: 'investment-casting',
    title: 'Investment Casting',
    image: images.foundry,
    description: 'Intricate metal geometries through the lost-wax casting process.',
  },
  {
    slug: 'precision-machining',
    title: 'Precision Machining',
    image: images.cnc,
    description: 'Machined features on cast components to drawing requirements.',
  },
  {
    slug: 'tooling',
    title: 'Tooling & Pattern Development',
    image: images.engineering,
    description: 'Tooling planned from drawing to repeatable production.',
  },
  {
    slug: 'surface-finishing',
    title: 'Finishing & Assembly',
    image: images.metalParts,
    description: 'Finishing and sub-assembly so parts arrive ready to fit.',
  },
];

export const qualityPillars = [
  {
    title: 'Quality Assurance',
    text: 'Placeholder: describe the quality management system and responsibilities here.',
  },
  {
    title: 'Inspection',
    text: 'Placeholder: describe incoming, in-process and final inspection stages.',
  },
  {
    title: 'Dimensional Accuracy',
    text: 'Placeholder: describe measurement methods and equipment once confirmed.',
  },
  {
    title: 'Process Control',
    text: 'Placeholder: describe how process parameters are monitored and recorded.',
  },
  {
    title: 'Material Traceability',
    text: 'Placeholder: describe how material and batch traceability is maintained.',
  },
];

export const certificationPlaceholders = [
  'Certification 01',
  'Certification 02',
  'Certification 03',
  'Certification 04',
];

export const approachSteps = [
  { n: '01', title: 'Understanding Requirements', text: 'Review drawings, materials, volumes and application.' },
  { n: '02', title: 'Engineering & Planning', text: 'Assess feasibility, tooling and the production route.' },
  { n: '03', title: 'Manufacturing', text: 'Produce the component through the agreed process.' },
  { n: '04', title: 'Inspection & Quality', text: 'Verify the component against the requirement.' },
  { n: '05', title: 'Delivery', text: 'Pack, document and dispatch to schedule.' },
];

export const vision = {
  vision:
    'Placeholder vision statement: to be recognised as a dependable partner for precision cast components. Replace with the company’s own wording.',
  mission:
    'Placeholder mission statement: to deliver precision-engineered components with disciplined quality and clear communication. Replace with the company’s own wording.',
};

export const infrastructureAreas = [
  {
    title: 'Factory Overview',
    image: images.factory,
    text: 'Placeholder: describe the facility, layout and production flow.',
  },
  {
    title: 'Manufacturing Environment',
    image: images.foundry,
    text: 'Placeholder: describe the casting and production environment.',
  },
  {
    title: 'Machinery & Equipment',
    image: images.machinery,
    text: 'Placeholder: list confirmed machines and equipment.',
  },
  {
    title: 'Inspection & Quality',
    image: images.inspection,
    text: 'Placeholder: list confirmed inspection and testing equipment.',
  },
];

export const galleryImages = [
  { src: images.factory, alt: 'Industrial production floor', span: 'md:col-span-2 md:row-span-2' },
  { src: images.cnc, alt: 'CNC machining', span: '' },
  { src: images.foundry, alt: 'Foundry environment', span: '' },
  { src: images.inspection, alt: 'Inspection area', span: '' },
  { src: images.machinery2, alt: 'Machinery', span: 'md:col-span-2' },
  { src: images.metalParts, alt: 'Cast metal components', span: '' },
];

export const faqs = [
  {
    q: 'What is investment casting?',
    a: 'Investment casting, also called lost-wax casting, forms metal parts from a wax pattern coated in a ceramic shell. The wax is melted out and metal is poured into the cavity. It is commonly used for complex shapes. (Editable answer.)',
  },
  {
    q: 'What types of components can be manufactured?',
    a: 'Placeholder: list the component types and size ranges that the company confirms it can produce.',
  },
  {
    q: 'What materials can be used?',
    a: 'Placeholder: list the confirmed alloys and material grades here.',
  },
  {
    q: 'How can I submit a component enquiry?',
    a: 'Use the contact form, call, or message us on WhatsApp with your requirement. Our team will respond to discuss next steps.',
  },
  {
    q: 'Can I share a drawing for quotation?',
    a: 'Placeholder: confirm accepted drawing formats and how to share them securely.',
  },
  {
    q: 'What information is needed for an RFQ?',
    a: 'Typically helpful: drawing or sample, material, estimated quantity, application, and required delivery timeline. (Editable answer.)',
  },
];
