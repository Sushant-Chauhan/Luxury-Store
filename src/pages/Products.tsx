import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { ProductFilters } from "@/components/ProductFilters";
import { ProductGrid } from "@/components/products/ProductGrid";
import { products } from "@/data/products"; // We'll create this file next

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState("All");

  const categories = [...new Set(products.map((product) => product.category))];
  const brands = [...new Set(products.map((product) => product.brand))];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch =
        selectedCategory === "all" || product.category === selectedCategory;
      const brandMatch = selectedBrand === "all" || product.brand === selectedBrand;
      
      let priceMatch = true;
      if (selectedPriceRange !== "All") {
        const price = product.price;
        switch (selectedPriceRange) {
          case "Under $50":
            priceMatch = price < 50;
            break;
          case "$50 - $100":
            priceMatch = price >= 50 && price <= 100;
            break;
          case "$100 - $200":
            priceMatch = price > 100 && price <= 200;
            break;
          case "Over $200":
            priceMatch = price > 200;
            break;
        }
      }

      return categoryMatch && brandMatch && priceMatch;
    });
  }, [selectedCategory, selectedBrand, selectedPriceRange]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="container px-4 py-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Our Products
        </motion.h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <ProductFilters
              categories={categories}
              brands={brands}
              onCategoryChange={setSelectedCategory}
              onBrandChange={setSelectedBrand}
              onPriceRangeChange={setSelectedPriceRange}
              selectedCategory={selectedCategory}
              selectedBrand={selectedBrand}
              selectedPriceRange={selectedPriceRange}
            />
          </div>
          
          <div className="lg:col-span-3">
            <ProductGrid products={filteredProducts} />
            
            {filteredProducts.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-500">No products found matching your filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;