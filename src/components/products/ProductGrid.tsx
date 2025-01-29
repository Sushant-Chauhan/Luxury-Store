import { Product } from "@/types/product";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface ProductGridProps {
  products: Product[];
}

export const ProductGrid = ({ products }: ProductGridProps) => {
  const { toast } = useToast();

  const handleAddToCart = (product: Product) => {
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleBuyNow = (product: Product) => {
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