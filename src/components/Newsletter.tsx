import { useState } from "react";
import { motion } from "framer-motion";

export const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setEmail("");
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="glass-card mx-auto my-20 max-w-2xl rounded-2xl px-8 py-12 text-center"
    >
      <h2 className="mb-4 text-3xl font-semibold">Stay Updated</h2>
      <p className="mb-8 text-gray-600">
        Subscribe to our newsletter for exclusive offers and updates.
      </p>
      <form onSubmit={handleSubmit} className="mx-auto max-w-md">
        <div className="flex gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 rounded-lg border border-gray-200 px-4 py-2 focus:border-gray-500 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="rounded-lg bg-gray-900 px-6 py-2 text-white transition-colors hover:bg-gray-800"
          >
            Subscribe
          </button>
        </div>
      </form>
    </motion.section>
  );
};