import { motion } from "framer-motion";
import { ProductCard } from "@/components/ProductCard";
import { Newsletter } from "@/components/Newsletter";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const featuredProducts = [
  {
    id: 1,
    name: "Premium Watch",
    price: 299,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=800&q=80",
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
    returnPolicy: "Returnable",
    replacementDays: 10,
    stockStatus: "In Stock",
    features: [
      "Premium stainless steel case",
      "Water resistant up to 50m",
      "2-year warranty"
    ]
  },
  {
    id: 2,
    name: "Leather Wallet",
    price: 89,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=800&q=80",
    category: "Accessories",
    brand: "Heritage",
    description: "Handcrafted leather wallet with multiple card slots.",
    rating: 4.8,
    reviews: [
      {
        id: 1,
        userName: "Mike R.",
        rating: 5,
        comment: "Perfect size and great leather quality",
        date: "2024-02-10"
      }
    ],
    returnPolicy: "Returnable",
    replacementDays: 7,
    stockStatus: "In Stock",
    features: [
      "Genuine leather",
      "RFID blocking",
      "6 card slots"
    ]
  },
  {
    id: 3,
    name: "Wireless Earbuds",
    price: 199,
    image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=800&q=80",
    category: "Electronics",
    brand: "SoundCore",
    description: "High-quality wireless earbuds with noise cancellation.",
    rating: 4.6,
    reviews: [
      {
        id: 1,
        userName: "Sarah L.",
        rating: 4,
        comment: "Great sound quality and battery life",
        date: "2024-02-12"
      }
    ],
    returnPolicy: "Non-Returnable",
    replacementDays: 15,
    stockStatus: "Limited Stock",
    features: [
      "Active noise cancellation",
      "30-hour battery life",
      "Water resistant"
    ]
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
        comment: "Good sound quality, easy setup",
        date: "2024-02-08"
      }
    ],
    returnPolicy: "Returnable",
    replacementDays: 10,
    stockStatus: "In Stock",
    features: [
      "360° sound",
      "Voice control",
      "Smart home compatible"
    ]
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-gray-50"
      >
        <div className="container px-4 text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
          >
            Discover Premium Quality
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mx-auto mb-8 max-w-xl text-lg text-gray-600"
          >
            Explore our curated collection of premium products designed for those
            who appreciate quality and elegance.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Button asChild size="lg">
              <Link to="/products">Shop Now</Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container px-4">
          <h2 className="mb-12 text-center text-3xl font-semibold">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12">
        <div className="container px-4 text-center text-gray-600">
          <p>&copy; 2024 Premium Store. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;