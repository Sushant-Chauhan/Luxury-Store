import { motion } from "framer-motion";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { featuredProducts } from "@/data/featuredProducts";

export const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-semibold">Featured Products</h2>
          <Button asChild variant="outline">
            <Link to="/products" className="flex items-center gap-2">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};