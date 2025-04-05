import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

import PromptCard from '@/components/PromptCard';
import NewsletterSignup from '@/components/NewsletterSignup';
import Footer from '@/components/Footer';
import ShortStoryOfTheWeek from '@/components/ShortStoryOfTheWeek';

import { prompts, Prompt } from '@/data/prompts';
import { flavors, Flavor } from '@/data/flavors';
import { twists, Twist } from '@/data/twists';
import { sharePrompt } from '@/utils/share';

const taglines = [
  "Unlock your horror story…",
  "Where shadows become stories…",
  "Every tale starts with a whisper…",
  "Let the darkness guide your pen…",
  "Light the lantern and begin…",
  "Tales live longer in the dark…",
  "Fear lives in forgotten places…",
  "Not all stories stay buried…",
  "The forest listens…",
  "A flicker becomes a scream…"
];

const Index = () => {
  const [currentTagline, setCurrentTagline] = useState(taglines[0]);
  const [currentPrompt, setCurrentPrompt] = useState<Prompt | null>(null);
  const [selectedFlavor, setSelectedFlavor] = useState<Flavor | null>(null);
  const [selectedTwist, setSelectedTwist] = useState<Twist | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [liked, setLiked] = useState(false);
  const [showFlavorButton, setShowFlavorButton] = useState(false);
  const [showTwistButton, setShowTwistButton] = useState(false);

  // Rotate tagline every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => {
        const currentIndex = taglines.indexOf(prev);
        const nextIndex = (currentIndex + 1) % taglines.length;
        return taglines[nextIndex];
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const generatePrompt = () => {
    setIsGenerating(true);
    setSelectedFlavor(null);
    setSelectedTwist(null);
    setLiked(false);
    setShowFlavorButton(false);
    setShowTwistButton(false);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * prompts.length);
      const newPrompt = prompts[randomIndex];
      setCurrentPrompt(newPrompt);
      setIsGenerating(false);
      setShowFlavorButton(true);
    }, 800);
  };

  const addRandomFlavor = () => {
    const randomIndex = Math.floor(Math.random() * flavors.length);
    setSelectedFlavor(flavors[randomIndex]);
    setShowFlavorButton(false);
    setShowTwistButton(true);
  };

  const addRandomTwist = () => {
    const randomIndex = Math.floor(Math.random() * twists.length);
    setSelectedTwist(twists[randomIndex]);
    setShowTwistButton(false);
  };

  const handleShareClick = () => {
    if (currentPrompt) {
      sharePrompt(
        currentPrompt.text,
        selectedFlavor?.modifier,
        selectedTwist?.modifier
      );
    }
  };

  const handleLikeClick = () => {
    setLiked(!liked);
    if (!liked) {
      toast.success("Added to your favourites!");
    } else {
      toast.info("Removed from your favourites.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Optional fog overlay */}
      <div className="fog-overlay" />

      {/* --- HERO SECTION --- */}
      <motion.section
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  className="relative w-full h-[60vh] min-h-[400px] max-h-[400px] overflow-hidden"
>
  {/* Background image */}
  <img
    src="/images/tree-bg.png"
    alt="Foggy forest background"
    className="absolute inset-0 w-full h-full object-cover object-center z-0"
    loading="lazy"
  />

  {/* Logo container (absolutely positioned) */}
  <div
    className="absolute left-1/2"
    style={{ top: '00%', transform: 'translateX(-65%)' }}
  >
    <img
      src="/images/hollow-lantern-title.png"
      alt="The Hollow Lantern"
      className="max-w-[600px] w-[100%] h-auto"
    />
  </div>

  {/* Tagline container (absolutely positioned independently) */}
  <div
    className="absolute left-1/2"
    style={{ top: '80%', transform: 'translateX(-50%)' }}
  >
    <motion.p
      key={currentTagline}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-xl sm:text-4xl md:text-4xl text-horror-muted text-center"
    >
      {currentTagline}
    </motion.p>
  </div>
</motion.section>


      {/* --- CTA SECTION BELOW HERO --- */}
      <section className="container mx-auto px-4 py-12 text-center">
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-6 flex justify-center"
        >
          <Button
            size="lg"
            className="glow-button bg-horror-accent hover:bg-horror-accent/80 text-white px-8 py-6 text-xl rounded-lg shadow-lg"
            onClick={generatePrompt}
            disabled={isGenerating}
          >
            {isGenerating ? (
              "Igniting the Lantern..."
            ) : (
              <>
                <BookOpen className="mr-2 h-5 w-5" />
                Light the Lantern...
              </>
            )}
          </Button>
        </motion.div>
      </section>

      {/* --- MAIN CONTENT BELOW CTA --- */}
      <main className="flex-grow container mx-auto px-4 py-12">
        {currentPrompt && (
          <div className="space-y-6">
            <PromptCard
              prompt={currentPrompt.text}
              flavor={selectedFlavor?.modifier}
              twist={selectedTwist?.modifier}
              onShareClick={handleShareClick}
              onLikeClick={handleLikeClick}
              liked={liked}
            />

            {/* "Add a flavour?" button */}
            {showFlavorButton && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8 flex justify-center"
              >
                <Button
                  size="lg"
                  className="glow-button bg-horror-accent hover:bg-horror-accent/80 text-white px-8 py-6 text-xl rounded-lg shadow-lg"
                  onClick={addRandomFlavor}
                >
                  Add a flavour?
                </Button>
              </motion.div>
            )}

            {/* "Add a Twist?" button */}
            {showTwistButton && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8 flex justify-center"
              >
                <Button
                  size="lg"
                  className="glow-button bg-horror-accent hover:bg-horror-accent/80 text-white px-8 py-6 text-xl rounded-lg shadow-lg"
                  onClick={addRandomTwist}
                >
                  Add a Twist?
                </Button>
              </motion.div>
            )}
          </div>
        )}

        <NewsletterSignup />
        <ShortStoryOfTheWeek />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
