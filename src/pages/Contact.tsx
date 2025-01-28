import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
          <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full rounded-lg border border-gray-200 p-3"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full rounded-lg border border-gray-200 p-3"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full rounded-lg border border-gray-200 p-3"
                required
              ></textarea>
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;