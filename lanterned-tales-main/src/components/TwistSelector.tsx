
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { twists, Twist } from '@/data/twists';

interface TwistSelectorProps {
  onSelectTwist: (twist: Twist) => void;
  className?: string;
}

const TwistSelector: React.FC<TwistSelectorProps> = ({ onSelectTwist, className }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`bg-horror-tertiary/10 p-6 rounded-lg border border-horror-secondary/30 ${className}`}
    >
      <h3 className="text-2xl font-medium mb-4 text-horror-foreground text-shadow">Add a Twist</h3>
      <p className="text-horror-muted mb-6">Select an unexpected element to make your story unique:</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {twists.map((twist) => (
          <Button
            key={twist.id}
            variant="outline"
            className="justify-start text-left h-auto py-3 px-4 border-horror-accent/40 bg-horror/50 hover:bg-horror-accent/20 text-horror-foreground"
            onClick={() => onSelectTwist(twist)}
          >
            <div>
              <div className="font-medium">{twist.name}</div>
              <div className="text-sm text-horror-muted mt-1">{twist.description}</div>
            </div>
          </Button>
        ))}
      </div>
    </motion.div>
  );
};

export default TwistSelector;
