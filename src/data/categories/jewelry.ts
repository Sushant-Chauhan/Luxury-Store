import { Product } from "@/types/product";

export const jewelryProducts: Product[] = [
  {
    id: 201,
    name: "Diamond Tennis Bracelet",
    price: 4999,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    category: "Jewelry & Accessories",
    brand: "Brilliant Collection",
    description: "Elegant tennis bracelet featuring brilliant-cut diamonds set in 18k white gold.",
    rating: 4.9,
    reviews: [
      {
        id: 1,
        userName: "Sophie L.",
        rating: 5,
        comment: "Absolutely stunning piece!",
        date: "2024-02-15"
      }
    ],
    returnPolicy: "30 days",
    replacementDays: 14,
    stockStatus: "In Stock",
    features: [
      "3.00 total carat weight",
      "18k white gold setting",
      "Certified diamonds"
    ]
  }
];