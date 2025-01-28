import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl font-bold mb-8">About Us</h1>
          <div className="glass-card p-8 space-y-6">
            <p className="text-lg text-gray-600">
              Welcome to our premium e-commerce store. We specialize in bringing you
              the finest selection of high-quality products that combine style,
              functionality, and innovation.
            </p>
            <p className="text-lg text-gray-600">
              Our mission is to provide an exceptional shopping experience with
              carefully curated products that enhance your lifestyle.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;