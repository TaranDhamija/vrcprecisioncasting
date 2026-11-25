import PageHero from '../components/common/PageHero';
import Button from '../components/common/Button';
import { useSeo } from '../hooks/useSeo';

export default function NotFound() {
  useSeo('Page not found');
  return (
    <PageHero
      eyebrow="Error 404"
      title="Off the drawing."
      text="The page you are looking for does not exist or has moved."
      crumbs={[{ label: 'Not found' }]}
    >
      <Button to="/" variant="dark">
        Back to home
      </Button>
      <Button to="/products" variant="outline">
        Browse products
      </Button>
    </PageHero>
  );
}
