import { motion } from "framer-motion";

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
}

export const ProductCard = ({ name, price, image }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-lg hover-lift"
    >
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-4 space-y-1 text-center">
        <h3 className="text-sm font-medium text-gray-900">{name}</h3>
        <p className="text-sm text-gray-500">{price}</p>
      </div>
    </motion.div>
  );
};