import { Product } from "@/types/product";

export const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Premium Watch",
    price: 299,
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
    returnPolicy: "Returnable",
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
    price: 89,
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
    returnPolicy: "Returnable",
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
    price: 199,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80",
    category: "Electronics",
    brand: "SoundCore",
    description: "High-quality wireless earbuds with noise cancellation.",
    rating: 4.6,
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
      "30-hour battery life",
      "Water resistant"
    ]
  },
  {
    id: 4,
    name: "Smart Speaker",
    price: 149,
    image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=800&q=80",
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
    returnPolicy: "Returnable",
    replacementDays: 10,
    stockStatus: "In Stock",
    features: [
      "360° sound",
      "Voice control",
      "Smart home compatible"
    ]
  },
  {
    id: 5,
    name: "Designer Sunglasses",
    price: 399,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80",
    category: "Accessories",
    brand: "RayBan",
    description: "Premium sunglasses with UV protection and stylish design.",
    rating: 4.7,
    reviews: [
      {
        id: 1,
        userName: "Lisa M.",
        rating: 5,
        comment: "Perfect fit and great quality!",
        date: "2024-02-14"
      }
    ],
    returnPolicy: "Returnable",
    replacementDays: 30,
    stockStatus: "In Stock",
    features: [
      "UV protection",
      "Polarized lenses",
      "Premium case included"
    ]
  },
  {
    id: 6,
    name: "Premium Headphones",
    price: 549,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    category: "Electronics",
    brand: "Bose",
    description: "High-end noise cancelling headphones with premium sound quality.",
    rating: 4.9,
    reviews: [
      {
        id: 1,
        userName: "James R.",
        rating: 5,
        comment: "Best headphones I've ever owned",
        date: "2024-02-13"
      }
    ],
    returnPolicy: "Returnable",
    replacementDays: 30,
    stockStatus: "In Stock",
    features: [
      "Active noise cancellation",
      "40h battery life",
      "Premium audio quality"
    ]
  }
];
