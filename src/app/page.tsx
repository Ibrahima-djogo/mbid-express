import Hero from '@/components/Hero';
import SearchBar from '@/components/SearchBar';
import Services from '@/components/Services';
import FeaturedProducts from '@/components/FeaturedProducts';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <div className="container mx-auto px-4 -mt-8 relative z-10">
        <SearchBar />
      </div>
      <Services />
      <FeaturedProducts />
    </div>
  );
}
