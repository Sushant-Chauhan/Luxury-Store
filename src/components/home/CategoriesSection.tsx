import { Link } from "react-router-dom";

export const CategoriesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link to="/products" className="relative overflow-hidden rounded-lg hover-lift">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80"
              alt="Electronics"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h3 className="text-2xl font-semibold text-white">Electronics</h3>
            </div>
          </Link>
          <Link to="/products" className="relative overflow-hidden rounded-lg hover-lift">
            <img
              src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80"
              alt="Accessories"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h3 className="text-2xl font-semibold text-white">Accessories</h3>
            </div>
          </Link>
          <Link to="/products" className="relative overflow-hidden rounded-lg hover-lift">
            <img
              src="https://images.unsplash.com/photo-1547949003-9792a18a2601?w=800&q=80"
              alt="Bags"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h3 className="text-2xl font-semibold text-white">Bags</h3>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};