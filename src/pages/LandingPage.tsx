import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Hero } from '@/features/landing/Hero';
import { BrandMarquee } from '@/features/landing/Marquee';
import { LatestPostsCarousel } from '@/features/landing/LatestPostCarousel';
import { SubscribeDialog } from '@/features/landing/SubscribeDialog';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);

  const handleStartReading = () => {
    navigate('/archive');
  };

  const handleSubscribe = () => {
    setIsSubscribeOpen(true);
  };

  return (
    <div className="space-y-20 pb-20">
      <Hero
        onStartReading={handleStartReading}
        onSubscribeClick={handleSubscribe}
      />
      <BrandMarquee />
      <LatestPostsCarousel />

      <SubscribeDialog
        open={isSubscribeOpen}
        onOpenChange={setIsSubscribeOpen}
      />
    </div>
  );
};
