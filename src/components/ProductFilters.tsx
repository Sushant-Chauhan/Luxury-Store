import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ProductFiltersProps {
  categories: string[];
  brands: string[];
  onCategoryChange: (category: string) => void;
  onBrandChange: (brand: string) => void;
  onPriceRangeChange: (range: string) => void;
  selectedCategory: string;
  selectedBrand: string;
  selectedPriceRange: string;
}

export const ProductFilters = ({
  categories,
  brands,
  onCategoryChange,
  onBrandChange,
  onPriceRangeChange,
  selectedCategory,
  selectedBrand,
  selectedPriceRange,
}: ProductFiltersProps) => {
  const priceRanges = [
    "All",
    "Under $50",
    "$50 - $100",
    "$100 - $200",
    "Over $200",
  ];

  return (
    <div className="space-y-4 p-4 bg-white rounded-lg shadow-sm">
      <div className="space-y-2">
        <label className="text-sm font-medium">Category</label>
        <Select value={selectedCategory} onValueChange={onCategoryChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Brand</label>
        <Select value={selectedBrand} onValueChange={onBrandChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select brand" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Brands</SelectItem>
            {brands.map((brand) => (
              <SelectItem key={brand} value={brand}>
                {brand}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Price Range</label>
        <Select value={selectedPriceRange} onValueChange={onPriceRangeChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select price range" />
          </SelectTrigger>
          <SelectContent>
            {priceRanges.map((range) => (
              <SelectItem key={range} value={range}>
                {range}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Button
        variant="outline"
        className="w-full"
        onClick={() => {
          onCategoryChange("all");
          onBrandChange("all");
          onPriceRangeChange("All");
        }}
      >
        Reset Filters
      </Button>
    </div>
  );
};