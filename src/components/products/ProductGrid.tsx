
import { Product } from "@/types/product";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

interface ProductGridProps {
  products: Product[];
}

export const ProductGrid = ({ products }: ProductGridProps) => {
  const { toast } = useToast();
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleAddToCart = (product: Product) => {
    if (!isLoggedIn) {
      toast({
        title: "Login Required",
        description: "Please login to add items to your cart.",
        variant: "destructive",
      });
      navigate('/login');
      return;
    }

    const cart = localStorage.getItem('cart');
    let cartItems = cart ? JSON.parse(cart) : [];
    
    const existingItem = cartItems.find((item: { id: number }) => item.id === product.id);
    
    if (existingItem) {
      cartItems = cartItems.map((item: { id: number; quantity: number }) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      cartItems.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1
      });
    }
    
    localStorage.setItem('cart', JSON.stringify(cartItems));
    window.dispatchEvent(new Event('storage'));
    
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleBuyNow = (product: Product) => {
    if (!isLoggedIn) {
      toast({
        title: "Login Required",
        description: "Please login to make a purchase.",
        variant: "destructive",
      });
      navigate('/login');
      return;
    }

    handleAddToCart(product);
    window.location.href = `/checkout/${product.id}`;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {products.map((product) => (
        <div key={product.id} className="flex flex-col">
          <ProductCard {...product} />
          <div className="mt-4 space-y-2">
            <Button 
              className="w-full"
              onClick={() => handleAddToCart(product)}
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
            <Button 
              variant="outline"
              className="w-full"
              onClick={() => handleBuyNow(product)}
            >
              Buy Now
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};
