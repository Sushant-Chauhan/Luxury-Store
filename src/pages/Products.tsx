import { motion } from "framer-motion";
import { ProductCard } from "@/components/ProductCard";
import { Navigation } from "@/components/Navigation";

const products = [
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
  {
    id: 5,
    name: "Laptop Stand",
    price: "$59",
    image: "/placeholder.svg",
  },
  {
    id: 6,
    name: "Wireless Mouse",
    price: "$49",
    image: "/placeholder.svg",
  },
];

const Products = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Our Products
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;