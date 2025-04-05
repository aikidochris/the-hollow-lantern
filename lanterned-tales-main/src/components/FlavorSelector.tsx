
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { flavors, Flavor } from '@/data/flavors';

interface FlavorSelectorProps {
  onSelectFlavor: (flavor: Flavor) => void;
  className?: string;
}

const FlavorSelector: React.FC<FlavorSelectorProps> = ({ onSelectFlavor, className }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`bg-horror-tertiary/10 p-6 rounded-lg border border-horror-secondary/30 ${className}`}
    >
      <h3 className="text-2xl font-medium mb-4 text-horror-foreground text-shadow">Choose a Flavor</h3>
      <p className="text-horror-muted mb-6">Select a thematic direction for your prompt:</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {flavors.map((flavor) => (
          <Button
            key={flavor.id}
            variant="outline"
            className="justify-start text-left h-auto py-3 px-4 border-horror-secondary/40 bg-horror/50 hover:bg-horror-secondary/20 text-horror-foreground"
            onClick={() => onSelectFlavor(flavor)}
          >
            <div>
              <div className="font-medium">{flavor.name}</div>
              <div className="text-sm text-horror-muted mt-1">{flavor.description}</div>
            </div>
          </Button>
        ))}
      </div>
    </motion.div>
  );
};

export default FlavorSelector;
