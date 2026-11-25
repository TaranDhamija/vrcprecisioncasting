import HomeHero from '../components/sections/HomeHero';
import CompanyOverview from '../components/sections/CompanyOverview';
import CapabilitiesSection from '../components/sections/CapabilitiesSection';
import ProductShowcase from '../components/sections/ProductShowcase';
import IndustriesSection from '../components/sections/IndustriesSection';
import QualitySection from '../components/sections/QualitySection';
import InfrastructureSection from '../components/sections/InfrastructureSection';
import CTASection from '../components/common/CTASection';
import { useSeo } from '../hooks/useSeo';

export default function Home() {
  useSeo(undefined, 'Precision-engineered metal components through investment casting and advanced manufacturing.');
  return (
    <>
      <HomeHero />
      <CompanyOverview />
      <CapabilitiesSection />
      <ProductShowcase />
      <IndustriesSection />
      <QualitySection />
      <InfrastructureSection />
      <CTASection />
    </>
  );
}
