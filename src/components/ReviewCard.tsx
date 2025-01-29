import { Star } from "lucide-react";
import { Review } from "@/types/product";
import { motion } from "framer-motion";

export const ReviewCard = ({ userName, rating, comment, date }: Review) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-medium text-gray-800">{userName}</h4>
        <span className="text-sm text-gray-500">{date}</span>
      </div>
      <div className="flex items-center mb-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={`w-4 h-4 ${
              index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>
      <p className="text-gray-600 text-sm">{comment}</p>
    </motion.div>
  );
};