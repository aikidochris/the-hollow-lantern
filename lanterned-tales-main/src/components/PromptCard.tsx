
import React from 'react';
import { motion } from 'framer-motion';
import { Share2, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PromptCardProps {
  prompt: string;
  flavor?: string;
  twist?: string;
  onShareClick: () => void;
  onLikeClick: () => void;
  liked: boolean;
}

const PromptCard: React.FC<PromptCardProps> = ({ 
  prompt, 
  flavor, 
  twist, 
  onShareClick, 
  onLikeClick,
  liked
}) => {
  return (
    <div className="space-y-6">
      {/* Main Prompt Box */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="prompt-container rounded-lg p-6 max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-semibold mb-6 text-horror-light text-shadow">Your Tale Begins...</h2>

        <div className="text-xl text-horror-muted mb-8 leading-relaxed">

          {prompt}
        </div>
      </motion.div>

      {/* Flavor Box (if provided) */}
      {flavor && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="prompt-container rounded-lg p-6 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-semibold mb-6 text-horror-mid text-shadow">The Flavour...</h2>
          <div className="text-xl text-horror-muted italic mb-8 leading-relaxed">
            {flavor}
          </div>
        </motion.div>
      )}

      {/* Twist Box (if provided) */}
      {twist && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="prompt-container rounded-lg p-6 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-display mb-6 text-horror-accent">The Twist...</h2>
          <div className="text-xl text-horror-foreground mb-8 leading-relaxed">

            {twist}
          </div>
        </motion.div>
      )}

      {/* Actions Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex justify-end space-x-3 border-t border-horror-tertiary/30 pt-4 mt-4 max-w-3xl mx-auto"
      >
        <Button
          variant="outline"
          size="sm"
          className="bg-transparent border-horror-secondary text-horror-secondary hover:bg-horror-secondary/20"
          onClick={onShareClick}
        >
          <Share2 className="h-4 w-4 mr-2" />
          Share
        </Button>
        <Button
          variant="outline"
          size="sm"
          className={`bg-transparent ${liked ? 'border-horror-accent text-horror-accent' : 'border-horror-secondary text-horror-secondary'} hover:bg-horror-secondary/20`}
          onClick={onLikeClick}
        >
          <Heart className={`h-4 w-4 mr-2 ${liked ? 'fill-horror-accent' : ''}`} />
          {liked ? 'Liked' : 'Like'}
        </Button>
      </motion.div>
    </div>
  );
};

export default PromptCard;
