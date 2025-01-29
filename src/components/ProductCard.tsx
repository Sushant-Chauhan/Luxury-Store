import { motion } from "framer-motion";
import { Product } from "@/types/product";
import { Star, Package, RefreshCw, Truck } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ProductCardProps extends Product {}

export const ProductCard = ({
  name,
  price,
  image,
  brand,
  description,
  rating,
  returnPolicy,
  replacementDays,
  stockStatus,
  features,
}: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-lg hover-lift glass-card"
    >
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded-full text-sm font-medium">
          {stockStatus}
        </div>
      </div>
      
      <div className="p-4 space-y-3">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-medium text-gray-900">{name}</h3>
            <p className="text-sm text-gray-500">{brand}</p>
          </div>
          <span className="text-xl font-semibold text-gray-900">${price}</span>
        </div>

        <div className="flex items-center space-x-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={`w-4 h-4 ${
                index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
          <span className="text-sm text-gray-500 ml-2">{rating}/5</span>
        </div>

        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>

        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="flex items-center">
                <RefreshCw className="w-4 h-4 mr-1" />
                {replacementDays}d
              </TooltipTrigger>
              <TooltipContent>
                <p>{replacementDays} days replacement</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger className="flex items-center">
                <Package className="w-4 h-4 mr-1" />
                {returnPolicy}
              </TooltipTrigger>
              <TooltipContent>
                <p>Return policy: {returnPolicy}</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger className="flex items-center">
                <Truck className="w-4 h-4" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Fast delivery available</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <ul className="text-xs text-gray-600 space-y-1">
          {features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="w-1 h-1 bg-gray-400 rounded-full mr-2" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};