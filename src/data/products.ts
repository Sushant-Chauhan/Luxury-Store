import { Product } from "@/types/product";
import { fashionProducts } from "./categories/fashion";
import { jewelryProducts } from "./categories/jewelry";
import { electronicsProducts } from "./categories/electronics";

export const products: Product[] = [
  ...fashionProducts,
  ...jewelryProducts,
  ...electronicsProducts,
  {
    id: 1,
    name: "Premium Watch",
    price: 25999,
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&q=80",
    category: "Accessories",
    brand: "Timex",
    description: "Elegant timepiece with premium materials and precise movement.",
    rating: 4.5,
    reviews: [
      {
        id: 1,
        userName: "John D.",
        rating: 5,
        comment: "Excellent quality and design!",
        date: "2024-02-15"
      }
    ],
    returnPolicy: "31 days",
    replacementDays: 10,
    stockStatus: "In Stock",
    features: [
      "Premium stainless steel case",
      "Water resistant up to 50m",
      "2-year warranty"
    ]
  },
  {
    id: 2,
    name: "Leather Wallet",
    price: 7499,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&q=80",
    category: "Accessories",
    brand: "Heritage",
    description: "Handcrafted leather wallet with multiple card slots.",
    rating: 4.8,
    reviews: [
      {
        id: 1,
        userName: "Mike R.",
        rating: 5,
        comment: "Perfect size and great leather quality",
        date: "2024-02-10"
      }
    ],
    returnPolicy: "14 days",
    replacementDays: 7,
    stockStatus: "In Stock",
    features: [
      "Genuine leather",
      "RFID blocking",
      "6 card slots"
    ]
  },
  {
    id: 3,
    name: "Wireless Earbuds",
    price: 18999,
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800&q=80",
    category: "Electronics",
    brand: "SoundCore",
    description: "High-quality wireless earbuds with noise cancellation. Plus battery life is great",
    rating: 4.7,
    reviews: [
      {
        id: 1,
        userName: "Sarah L.",
        rating: 4,
        comment: "Great sound quality and battery life",
        date: "2024-02-12"
      }
    ],
    returnPolicy: "Non-Returnable",
    replacementDays: 15,
    stockStatus: "Limited Stock",
    features: [
      "Active noise cancellation",
      "Comfortable",
      "30-hour battery life",
      "Water resistant"
    ]
  },
  {
    id: 4,
    name: "Smart Speaker",
    price: 13499,
    image: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=800&q=80",
    category: "Electronics",
    brand: "EchoTech",
    description: "Voice-controlled smart speaker with premium sound.",
    rating: 4.3,
    reviews: [
      {
        id: 1,
        userName: "David M.",
        rating: 4,
        comment: "Good sound quality, easy setup",
        date: "2024-02-08"
      }
    ],
    returnPolicy: "30 days",
    replacementDays: 10,
    stockStatus: "In Stock",
    features: [
      "360° sound",
      "Voice control",
      "Smart home compatible"
    ]
  },
];

export const categories = [
  "Fashion & Apparel",
  "Jewelry & Accessories",
  "Luxury Watches",
  "Beauty & Skincare",
  "Home & Décor",
  "Electronics & Gadgets",
  "Footwear & Handbags",
  "Premium Spirits & Wine",
  "Health & Wellness",
  "Travel & Lifestyle"
];
