
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { ShoppingCart, LogIn, LogOut } from "lucide-react";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

export const Navigation = () => {
  const [cartCount, setCartCount] = useState(0);
  const { isLoggedIn, user, logout } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    const updateCartCount = () => {
      const cart = localStorage.getItem('cart');
      if (cart) {
        const items = JSON.parse(cart);
        setCartCount(items.reduce((sum: number, item: { quantity: number }) => sum + item.quantity, 0));
      }
    };

    updateCartCount();
    window.addEventListener('storage', updateCartCount);
    
    return () => {
      window.removeEventListener('storage', updateCartCount);
    };
  }, []);

  const handleLogout = () => {
    logout();
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
  };

  return (
    <NavigationMenu className="max-w-full w-full justify-between mb-8 px-4">
      <NavigationMenuList className="space-x-4 items-center">
        <NavigationMenuItem className="mr-4">
          <Link to="/" className="flex items-center gap-2">
            <img src="/luxury-logo.svg" alt="Luxury Store" className="h-8 w-8" />
            <span className="font-serif text-xl">Luxury Store</span>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/" className={navigationMenuTriggerStyle()}>
            Home
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/products" className={navigationMenuTriggerStyle()}>
            Products
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/about" className={navigationMenuTriggerStyle()}>
            About
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/contact" className={navigationMenuTriggerStyle()}>
            Contact
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
      
      <NavigationMenuList className="space-x-4">
        <NavigationMenuItem>
          <Link to="/cart" className="relative">
            <ShoppingCart className="h-6 w-6" />
            {cartCount > 0 && (
              <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0">
                {cartCount}
              </Badge>
            )}
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          {isLoggedIn ? (
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">{user?.email}</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                className="flex items-center gap-2"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </div>
          ) : (
            <Link to="/login" className={navigationMenuTriggerStyle()}>
              <LogIn className="h-4 w-4 mr-2" />
              Login
            </Link>
          )}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
