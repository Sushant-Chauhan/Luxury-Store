import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ProductCard } from "@/components/ProductCard";
import { Navigation } from "@/components/Navigation";
import { ProductFilters } from "@/components/ProductFilters";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const products: Product[] = [
  {
    id: 1,
    name: "Premium Watch",
    price: 299,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=800&q=80",
    category: "Accessories",
    brand: "Timex",
    description: "Elegant timepiece with premium materials and precise movement.",
  },
  {
    id: 2,
    name: "Leather Wallet",
    price: 89,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=800&q=80",
    category: "Accessories",
    brand: "Heritage",
    description: "Handcrafted leather wallet with multiple card slots.",
  },
  {
    id: 3,
    name: "Wireless Earbuds",
    price: 199,
    image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=800&q=80",
    category: "Electronics",
    brand: "SoundCore",
    description: "High-quality wireless earbuds with noise cancellation.",
  },
  {
    id: 4,
    name: "Smart Speaker",
    price: 149,
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=800&q=80",
    category: "Electronics",
    brand: "EchoTech",
    description: "Voice-controlled smart speaker with premium sound.",
  },
  {
    id: 5,
    name: "Laptop Stand",
    price: 59,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    category: "Accessories",
    brand: "ErgoMax",
    description: "Adjustable aluminum laptop stand for better ergonomics.",
  },
  {
    id: 6,
    name: "Wireless Mouse",
    price: 49,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=80",
    category: "Electronics",
    brand: "TechGear",
    description: "Ergonomic wireless mouse with precision tracking.",
  },
  {
    id: 7,
    name: "Mechanical Keyboard",
    price: 159,
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=800&q=80",
    category: "Electronics",
    brand: "TechGear",
    description: "Premium mechanical keyboard with RGB backlight.",
  },
  {
    id: 8,
    name: "Leather Backpack",
    price: 199,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
    category: "Bags",
    brand: "Heritage",
    description: "Spacious leather backpack with laptop compartment.",
  },
];

// ... keep existing code (state management and filter functions)

const Products = () => {
  const { toast } = useToast();
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

  const handleAddToCart = (product: Product) => {
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleBuyNow = (product: Product) => {
    window.location.href = `/checkout/${product.id}`;
  };

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="flex flex-col">
                  <ProductCard {...product} />
                  <div className="mt-4 space-y-2">
                    <Button 
                      className="w-full"
                      onClick={() => handleAddToCart(product)}
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                    <Button 
                      variant="outline"
                      className="w-full"
                      onClick={() => handleBuyNow(product)}
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
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
