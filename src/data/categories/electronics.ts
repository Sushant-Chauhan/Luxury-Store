import { Product } from "@/types/product";

export const electronicsProducts: Product[] = [
  {
    id: 601,
    name: "Premium Wireless Headphones",
    price: 45999,
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
  },
  {
    id: 602,
    name: "True Wireless Earbuds Pro",
    price: 24999,
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800&q=80",
    category: "Electronics & Gadgets",
    brand: "SoundCore",
    description: "Next-generation wireless earbuds with active noise cancellation and crystal-clear sound.",
    rating: 4.7,
    reviews: [
      {
        id: 1,
        userName: "Sarah L.",
        rating: 5,
        comment: "Amazing sound quality and battery life!",
        date: "2024-02-18"
      }
    ],
    returnPolicy: "30 days",
    replacementDays: 14,
    stockStatus: "In Stock",
    features: [
      "Active noise cancellation",
      "36-hour battery life",
      "IPX5 water resistance",
      "Wireless charging case"
    ]
  },
  {
    id: 603,
    name: "Smart Home Speaker",
    price: 18999,
    image: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=800&q=80",
    category: "Electronics & Gadgets",
    brand: "EchoTech",
    description: "Premium smart speaker with immersive 360° sound and voice control.",
    rating: 4.6,
    reviews: [
      {
        id: 1,
        userName: "Mike R.",
        rating: 4,
        comment: "Great sound quality and smart features!",
        date: "2024-02-17"
      }
    ],
    returnPolicy: "30 days",
    replacementDays: 14,
    stockStatus: "In Stock",
    features: [
      "360° omnidirectional sound",
      "Voice control with AI assistant",
      "Multi-room audio support",
      "Smart home integration"
    ]
  }
];