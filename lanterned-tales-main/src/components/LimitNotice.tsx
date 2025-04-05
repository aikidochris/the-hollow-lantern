
import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

interface LimitNoticeProps {
  remainingPrompts: number;
  maxPrompts: number;
}

const LimitNotice: React.FC<LimitNoticeProps> = ({ remainingPrompts, maxPrompts }) => {
  const isLow = remainingPrompts < maxPrompts * 0.2;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`flex items-center rounded-lg px-4 py-2 text-sm ${
        isLow ? 'bg-horror-accent/20 text-horror-accent' : 'bg-horror-secondary/20 text-horror-secondary'
      }`}
    >
      <AlertCircle className="h-4 w-4 mr-2" />
      <span>
        {isLow 
          ? `Warning: Only ${remainingPrompts} prompts remaining today` 
          : `You have ${remainingPrompts} of ${maxPrompts} prompts remaining today`}
      </span>
    </motion.div>
  );
};

export default LimitNotice;
