import Container from '../common/Container';
import SectionHeader from '../common/SectionHeader';
import Button from '../common/Button';
import AnimatedSection, { Stagger, StaggerItem } from '../common/AnimatedSection';
import ProductCard from '../cards/ProductCard';
import { products } from '../../data/products';

export default function ProductShowcase() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <AnimatedSection>
          <SectionHeader
            eyebrow="Product showcase"
            title="Components, catalogued."
            text="Illustrative sample categories and placeholder descriptions — not a verified product range."
            action={
              <Button to="/products" variant="outline">
                View catalogue
              </Button>
            }
          />
        </AnimatedSection>
        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 4).map((p) => (
            <StaggerItem key={p.slug}>
              <ProductCard product={p} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
