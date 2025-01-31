import { useState } from "react";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

interface PersonalizeFormProps {
  product: Product;
}

export const PersonalizeForm = ({ product }: PersonalizeFormProps) => {
  const { toast } = useToast();
  const [customization, setCustomization] = useState({
    name: "",
    message: "",
    specialInstructions: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Personalization Saved",
      description: "Your customization details have been saved successfully.",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name/Initials to Engrave
        </label>
        <Input
          id="name"
          value={customization.name}
          onChange={(e) =>
            setCustomization({ ...customization, name: e.target.value })
          }
          placeholder="Enter name or initials"
          className="mt-1"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Custom Message
        </label>
        <Input
          id="message"
          value={customization.message}
          onChange={(e) =>
            setCustomization({ ...customization, message: e.target.value })
          }
          placeholder="Enter your custom message"
          className="mt-1"
        />
      </div>

      <div>
        <label
          htmlFor="instructions"
          className="block text-sm font-medium text-gray-700"
        >
          Special Instructions
        </label>
        <Textarea
          id="instructions"
          value={customization.specialInstructions}
          onChange={(e) =>
            setCustomization({
              ...customization,
              specialInstructions: e.target.value,
            })
          }
          placeholder="Any special instructions for customization"
          className="mt-1"
        />
      </div>

      <Button type="submit" className="w-full">
        Save Personalization
      </Button>
    </form>
  );
};