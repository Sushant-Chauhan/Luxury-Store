import { Navigation } from "@/components/Navigation";
import { Newsletter } from "@/components/Newsletter";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { Footer } from "@/components/home/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <FeaturedProducts />
      <CategoriesSection />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;