import { motion } from "framer-motion";
import { Star, Package, Truck, Headphones, Coins } from "lucide-react";

export const FeaturesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center p-6 glass-card hover-lift"
          >
            <Star className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
            <h3 className="text-xl font-semibold mb-2">Luxury Brands Only</h3>
            <p className="text-gray-600">Curated selection of premium luxury brands, ensuring authentic products</p>
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
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center p-6 glass-card hover-lift"
          >
            <Headphones className="w-12 h-12 mx-auto mb-4 text-purple-500" />
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">Round-the-clock technical support in addition to brand support</p>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="text-center p-6 glass-card hover-lift"
          >
            <Coins className="w-12 h-12 mx-auto mb-4 text-amber-500" />
            <h3 className="text-xl font-semibold mb-2">Loyalty Rewards</h3>
            <p className="text-gray-600">Earn loyalty coins with every purchase for exclusive benefits</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};