
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here we would normally send the email to a backend
    toast.success("Thank you for subscribing!");
    setEmail('');
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-horror-tertiary/10 p-6 rounded-lg border border-horror-secondary/30 max-w-md mx-auto my-12"
    >
      <h3 className="text-2xl font-medium mb-2 text-horror-foreground text-shadow">Subscribe to stay up to date</h3>
      <p className="text-horror-muted mb-6">Receive new prompts and horror stories straight to your inbox.</p>
      
      <form onSubmit={handleSubmit} className="space-y-3">
        <Input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-horror border-horror-secondary/40 text-horror-foreground focus:border-horror-secondary"
        />
        <Button 
          type="submit" 
          className="w-full bg-horror-secondary hover:bg-horror-secondary/80 text-white"
        >
          Subscribe
        </Button>
      </form>
      
      <p className="text-xs text-horror-muted mt-4">
        By subscribing, you agree to receive emails from The Hollow Lantern. We'll never share your information.
      </p>
    </motion.div>
  );
};

export default NewsletterSignup;
