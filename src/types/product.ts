export interface Review {
  id: number;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  brand: string;
  description: string;
  rating: number;
  reviews: Review[];
  returnPolicy: string;
  replacementDays: number;
  stockStatus: string;
  features: string[];
}