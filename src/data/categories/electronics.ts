import { Product } from "@/types/product";

export const electronicsProducts: Product[] = [
  {
    id: 601,
    name: "Premium Wireless Headphones",
    price: 549,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    category: "Electronics & Gadgets",
    brand: "SoundMaster",
    description: "Premium noise-cancelling headphones with exceptional sound quality.",
    rating: 4.8,
    reviews: [
      {
        id: 1,
        userName: "David K.",
        rating: 5,
        comment: "Best headphones I've ever owned!",
        date: "2024-02-15"
      }
    ],
    returnPolicy: "30 days",
    replacementDays: 14,
    stockStatus: "In Stock",
    features: [
      "Active noise cancellation",
      "40-hour battery life",
      "Premium audio drivers"
    ]
  }
];