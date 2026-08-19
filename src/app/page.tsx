import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import FeaturedProducts from '@/components/FeaturedProducts';
import BrandStory from '@/components/BrandStory';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </>
  );
}
