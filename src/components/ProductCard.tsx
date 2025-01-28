import { motion } from "framer-motion";
import { Product } from "@/types/product";

interface ProductCardProps extends Product {}

export const ProductCard = ({ name, price, image, brand, description }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-lg hover-lift bg-white"
    >
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4 space-y-2">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-medium text-gray-900">{name}</h3>
          <span className="text-sm font-semibold text-gray-900">${price}</span>
        </div>
        <p className="text-xs text-gray-500">{brand}</p>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
      </div>
    </motion.div>
  );
};