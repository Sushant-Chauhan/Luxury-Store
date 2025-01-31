import { Product } from "@/types/product";

export const fashionProducts: Product[] = [
  {
    id: 101,
    name: "Designer Silk Dress",
    price: 899,
    image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&q=80",
    category: "Fashion & Apparel",
    brand: "Haute Couture",
    description: "Elegant silk dress with intricate embroidery and modern silhouette.",
    rating: 4.8,
    reviews: [
      {
        id: 1,
        userName: "Emma S.",
        rating: 5,
        comment: "Absolutely stunning dress, perfect for special occasions!",
        date: "2024-02-15"
      }
    ],
    returnPolicy: "30 days",
    replacementDays: 14,
    stockStatus: "In Stock",
    features: [
      "100% pure silk",
      "Hand-embroidered details",
      "Made in Italy"
    ]
  },
  {
    id: 102,
    name: "Cashmere Sweater",
    price: 499,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80",
    category: "Fashion & Apparel",
    brand: "Luxe Essentials",
    description: "Premium cashmere sweater with a contemporary fit.",
    rating: 4.7,
    reviews: [
      {
        id: 1,
        userName: "Michael R.",
        rating: 5,
        comment: "Incredibly soft and warm!",
        date: "2024-02-16"
      }
    ],
    returnPolicy: "30 days",
    replacementDays: 14,
    stockStatus: "In Stock",
    features: [
      "100% cashmere",
      "Sustainable sourcing",
      "Available in multiple colors"
    ]
  }
];