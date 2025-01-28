import { motion } from "framer-motion";
import { ProductCard } from "@/components/ProductCard";
import { Newsletter } from "@/components/Newsletter";

const featuredProducts = [
  {
    id: 1,
    name: "Premium Watch",
    price: "$299",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Leather Wallet",
    price: "$89",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Wireless Earbuds",
    price: "$199",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    name: "Smart Speaker",
    price: "$149",
    image: "/placeholder.svg",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
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
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="rounded-lg bg-gray-900 px-8 py-3 text-white transition-colors hover:bg-gray-800"
          >
            Shop Now
          </motion.button>
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