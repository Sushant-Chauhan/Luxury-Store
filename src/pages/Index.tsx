import { motion } from "framer-motion";
import { ProductCard } from "@/components/ProductCard";
import { Newsletter } from "@/components/Newsletter";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Package, Truck } from "lucide-react";

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

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center p-6 glass-card hover-lift"
            >
              <Star className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">Curated selection of high-quality products</p>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-center p-6 glass-card hover-lift"
            >
              <Package className="w-12 h-12 mx-auto mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
              <p className="text-gray-600">Hassle-free return and replacement policy</p>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-center p-6 glass-card hover-lift"
            >
              <Truck className="w-12 h-12 mx-auto mb-4 text-green-500" />
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick and reliable shipping service</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
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

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/products" className="relative overflow-hidden rounded-lg hover-lift">
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80"
                alt="Electronics"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-2xl font-semibold text-white">Electronics</h3>
              </div>
            </Link>
            <Link to="/products" className="relative overflow-hidden rounded-lg hover-lift">
              <img
                src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80"
                alt="Accessories"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-2xl font-semibold text-white">Accessories</h3>
              </div>
            </Link>
            <Link to="/products" className="relative overflow-hidden rounded-lg hover-lift">
              <img
                src="https://images.unsplash.com/photo-1547949003-9792a18a2601?w=800&q=80"
                alt="Bags"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-2xl font-semibold text-white">Bags</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 bg-white">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-4">About Us</h4>
              <p className="text-gray-600 text-sm">
                Premium quality products for those who appreciate excellence.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/products" className="text-gray-600 hover:text-gray-900">Products</Link></li>
                <li><Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link></li>
                <li><Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Customer Service</h4>
              <ul className="space-y-2 text-sm">
                <li><span className="text-gray-600">Shipping Policy</span></li>
                <li><span className="text-gray-600">Return Policy</span></li>
                <li><span className="text-gray-600">FAQ</span></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm">
                <li className="text-gray-600">Email: support@example.com</li>
                <li className="text-gray-600">Phone: (555) 123-4567</li>
                <li className="text-gray-600">Address: 123 Store St, City, Country</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
            <p>&copy; 2024 Premium Store. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;