
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const ShortStoryOfTheWeek: React.FC = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for subscribing!");
    setEmail('');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-horror-tertiary/10 p-6 rounded-lg border border-horror-secondary/30 max-w-3xl mx-auto my-12"
    >
      <h3 className="text-2xl font-medium mb-4 text-horror-foreground text-shadow">Short Story of the Week</h3>
      
      <div className="mb-6">
        <h4 className="text-xl font-semibold mb-2 text-horror-accent">The Whispering Well</h4>
        
        <p className="text-horror-foreground mb-6 leading-relaxed">
          The villagers of Thornwick had long known to avoid the old well in the center of town after dark. "Don't speak near the well at night," they'd warn their children, "or it will learn your voice." Martha hadn't believed the stories until the night of the full moon when she, desperate and alone, whispered her deepest desire into its depths.
        </p>

        <p className="text-horror-foreground mb-6 leading-relaxed">
          By morning, her wish had come true - but so had someone else's nightmare. The village baker found his son speaking with Martha's voice, asking for things no child should know to ask for. When Martha tried to approach the boy, he fled, screaming with her exact pitch and cadence.
        </p>

        <p className="text-horror-foreground mb-6 leading-relaxed">
          That night, three more children began speaking with voices not their own. By the third day, half the village children were affected, all speaking with adult voices, making adult demands. They moved differently too - more deliberate, more assured.
        </p>

        <p className="text-horror-foreground mb-6 leading-relaxed">
          The village elder finally revealed the truth: the well didn't grant wishes; it traded them. For every desire fulfilled, it took a voice and placed it where it could cause the most harm. The only solution was to return to the well at midnight and reclaim your voice with another wish - but that, of course, would only deepen the cycle.
        </p>

        <p className="text-horror-foreground mb-6 leading-relaxed">
          Martha stood at the well under the waning moon, listening to the chorus of borrowed voices rising from its depths. She knew what she had to do, even as tears streamed down her face. Leaning over the stone rim, she opened her mouth to make her second wish - to undo the first - knowing that whatever price the well demanded next would be hers alone to bear.
        </p>
        
        <p className="text-horror-muted mt-6 italic">
          Inspired by prompt: "An ancient well in a small village is said to grant wishes, but only at midnight during a full moon. The price is never mentioned."
        </p>
      </div>
      
      {/* Slim newsletter signup */}
      <div className="border-t border-horror-tertiary/30 pt-6 mt-8">
        <h5 className="text-sm font-medium text-horror-foreground mb-3">Enjoyed this story? Subscribe for more:</h5>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-grow bg-horror border-horror-secondary/40 text-horror-foreground focus:border-horror-secondary"
          />
          <Button 
            type="submit" 
            className="bg-horror-secondary hover:bg-horror-secondary/80 text-white"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </motion.div>
  );
};

export default ShortStoryOfTheWeek;
