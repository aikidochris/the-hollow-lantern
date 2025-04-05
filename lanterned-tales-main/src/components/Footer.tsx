
import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="mt-20 py-6 border-t border-horror-tertiary/20"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-medium text-horror-foreground">The Hollow Lantern</h3>
            <p className="text-horror-muted text-sm mt-1">Horror writing prompts to spark your imagination</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="text-sm text-horror-muted">
              &copy; {new Date().getFullYear()} The Hollow Lantern
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-horror-muted hover:text-horror-foreground transition-colors">
                Terms
              </a>
              <a href="#" className="text-horror-muted hover:text-horror-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="text-horror-muted hover:text-horror-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
        
        {/* Ad Placeholder */}
        <div className="mt-8 p-4 bg-horror-tertiary/10 rounded border border-horror-tertiary/20 text-center">
          <p className="text-horror-muted text-sm">Advertisement Space</p>
          <div className="h-16 flex items-center justify-center">
            <span className="text-horror-muted">Ad Content Would Appear Here</span>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
