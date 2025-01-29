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
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&q=80",
    category: "Accessories",
    brand: "Timex",
    description: "Elegant timepiece with premium materials and precise movement.",
    rating: 4.5,
    reviews: [
      {
        id: 1,
        userName: "John D.",
        rating: 5,
        comment: "Excellent quality and design!",
        date: "2024-02-15"
      }
    ],
    returnPolicy: "30 days",
    replacementDays: 7,
    stockStatus: "In Stock",
    features: ["Water resistant", "Premium leather strap", "Sapphire crystal"]
  },
  {
    id: 2,
    name: "Leather Wallet",
    price: 89,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=800&q=80",
    category: "Accessories",
    brand: "Heritage",
    description: "Handcrafted leather wallet with multiple card slots.",
    rating: 4.2,
    reviews: [
      {
        id: 1,
        userName: "Mike R.",
        rating: 4,
        comment: "Great quality leather!",
        date: "2024-02-10"
      }
    ],
    returnPolicy: "14 days",
    replacementDays: 5,
    stockStatus: "In Stock",
    features: ["Genuine leather", "Multiple card slots", "RFID protection"]
  },
  {
    id: 3,
    name: "Wireless Earbuds",
    price: 199,
    image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=800&q=80",
    category: "Electronics",
    brand: "SoundCore",
    description: "High-quality wireless earbuds with noise cancellation.",
    rating: 4.8,
    reviews: [
      {
        id: 1,
        userName: "Sarah L.",
        rating: 5,
        comment: "Amazing sound quality!",
        date: "2024-02-12"
      }
    ],
    returnPolicy: "30 days",
    replacementDays: 10,
    stockStatus: "Limited Stock",
    features: ["Active noise cancellation", "40h battery life", "Water resistant"]
  },
  {
    id: 4,
    name: "Smart Speaker",
    price: 149,
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=800&q=80",
    category: "Electronics",
    brand: "EchoTech",
    description: "Voice-controlled smart speaker with premium sound.",
    rating: 4.3,
    reviews: [
      {
        id: 1,
        userName: "David M.",
        rating: 4,
        comment: "Great sound, easy setup",
        date: "2024-02-08"
      }
    ],
    returnPolicy: "30 days",
    replacementDays: 7,
    stockStatus: "In Stock",
    features: ["Voice control", "Multi-room audio", "Smart home integration"]
  },
  {
    id: 5,
    name: "Designer Sunglasses",
    price: 399,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80",
    category: "Accessories",
    brand: "RayBan",
    description: "Premium sunglasses with UV protection and stylish design.",
    rating: 4.7,
    reviews: [
      {
        id: 1,
        userName: "Lisa M.",
        rating: 5,
        comment: "Perfect fit and great quality!",
        date: "2024-02-14"
      }
    ],
    returnPolicy: "Returnable",
    replacementDays: 30,
    stockStatus: "In Stock",
    features: [
      "UV protection",
      "Polarized lenses",
      "Premium case included"
    ]
  },
  {
    id: 6,
    name: "Premium Headphones",
    price: 549,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    category: "Electronics",
    brand: "Bose",
    description: "High-end noise cancelling headphones with premium sound quality.",
    rating: 4.9,
    reviews: [
      {
        id: 1,
        userName: "James R.",
        rating: 5,
        comment: "Best headphones I've ever owned",
        date: "2024-02-13"
      }
    ],
    returnPolicy: "Returnable",
    replacementDays: 30,
    stockStatus: "In Stock",
    features: [
      "Active noise cancellation",
      "40h battery life",
      "Premium audio quality"
    ]
  },
  {
    id: 7,
    name: "Premium Camera",
    price: 1299,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80",
    category: "Electronics",
    brand: "Sony",
    description: "Professional-grade mirrorless camera with advanced features.",
    rating: 4.8,
    reviews: [
      {
        id: 1,
        userName: "Mark P.",
        rating: 5,
        comment: "Amazing image quality!",
        date: "2024-02-15"
      }
    ],
    returnPolicy: "30 days",
    replacementDays: 14,
    stockStatus: "In Stock",
    features: ["Full-frame sensor", "4K video", "Weather-sealed body"]
  },
  {
    id: 8,
    name: "Luxury Pen",
    price: 299,
    image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=800&q=80",
    category: "Accessories",
    brand: "MontBlanc",
    description: "Elegant writing instrument crafted with precision.",
    rating: 4.6,
    reviews: [
      {
        id: 1,
        userName: "Sarah K.",
        rating: 5,
        comment: "Beautiful craftsmanship",
        date: "2024-02-14"
      }
    ],
    returnPolicy: "14 days",
    replacementDays: 7,
    stockStatus: "Limited Stock",
    features: ["14K gold nib", "Premium resin body", "Lifetime warranty"]
  },
  {
    id: 9,
    name: "Luxury Backpack",
    price: 199,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
    category: "Bags",
    brand: "Heritage",
    description: "Spacious leather backpack with laptop compartment.",
    rating: 4.5,
    reviews: [
      {
        id: 1,
        userName: "Chris P.",
        rating: 4,
        comment: "Perfect for daily commute",
        date: "2024-02-09"
      }
    ],
    returnPolicy: "30 days",
    replacementDays: 7,
    stockStatus: "In Stock",
    features: ["Genuine leather", "Laptop compartment", "Water resistant"]
  },
  {
    id: 10,
    name: "Smartwatch",
    price: 249,
    image: "https://images.unsplash.com/photo-1601758132020-1c1c1c1c1c1c?w=800&q=80",
    category: "Electronics",
    brand: "Fitbit",
    description: "Feature-rich smartwatch with health tracking.",
    rating: 4.4,
    reviews: [
      {
        id: 1,
        userName: "Anna L.",
        rating: 5,
        comment: "Great for fitness tracking!",
        date: "2024-02-11"
      }
    ],
    returnPolicy: "30 days",
    replacementDays: 7,
    stockStatus: "In Stock",
    features: ["Heart rate monitor", "GPS tracking", "Water resistant"]
  },
  {
    id: 11,
    name: "Bluetooth Speaker",
    price: 99,
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&q=80",
    category: "Electronics",
    brand: "JBL",
    description: "Portable Bluetooth speaker with powerful sound.",
    rating: 4.5,
    reviews: [
      {
        id: 1,
        userName: "Tom H.",
        rating: 4,
        comment: "Great sound for the size!",
        date: "2024-02-10"
      }
    ],
    returnPolicy: "30 days",
    replacementDays: 7,
    stockStatus: "In Stock",
    features: ["Water resistant", "12-hour battery life", "Compact design"]
  },
  {
    id: 12,
    name: "Gaming Mouse",
    price: 59,
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=800&q=80",
    category: "Electronics",
    brand: "Logitech",
    description: "High-precision gaming mouse with customizable buttons.",
    rating: 4.6,
    reviews: [
      {
        id: 1,
        userName: "Jake R.",
        rating: 5,
        comment: "Perfect for gaming!",
        date: "2024-02-12"
      }
    ],
    returnPolicy: "30 days",
    replacementDays: 7,
    stockStatus: "In Stock",
    features: ["RGB lighting", "Adjustable DPI", "Ergonomic design"]
  },
  {
    id: 13,
    name: "Portable Charger",
    price: 39,
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&q=80",
    category: "Accessories",
    brand: "Anker",
    description: "Compact portable charger with fast charging capabilities.",
    rating: 4.7,
    reviews: [
      {
        id: 1,
        userName: "Emily S.",
        rating: 5,
        comment: "Very handy for travel!",
        date: "2024-02-13"
      }
    ],
    returnPolicy: "30 days",
    replacementDays: 7,
    stockStatus: "In Stock",
    features: ["Fast charging", "Compact size", "Multiple ports"]
  },
  {
    id: 14,
    name: "Wireless Charger",
    price: 29,
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&q=80",
    category: "Accessories",
    brand: "Samsung",
    description: "Fast wireless charger for compatible devices.",
    rating: 4.5,
    reviews: [
      {
        id: 1,
        userName: "Laura T.",
        rating: 4,
        comment: "Works great with my phone!",
        date: "2024-02-14"
      }
    ],
    returnPolicy: "30 days",
    replacementDays: 7,
    stockStatus: "In Stock",
    features: ["Fast charging", "Sleek design", "LED indicator"]
  },
  {
    id: 15,
    name: "Fitness Tracker",
    price: 79,
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&q=80",
    category: "Electronics",
    brand: "Garmin",
    description: "Advanced fitness tracker with heart rate monitoring.",
    rating: 4.8,
    reviews: [
      {
        id: 1,
        userName: "Mike W.",
        rating: 5,
        comment: "Helps me stay on track!",
        date: "2024-02-15"
      }
    ],
    returnPolicy: "30 days",
    replacementDays: 7,
    stockStatus: "In Stock",
    features: ["Heart rate monitor", "Sleep tracking", "Water resistant"]
  },
];

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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
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
