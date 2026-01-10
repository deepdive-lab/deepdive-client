import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Hero } from '@/features/landing/Hero';
import { BrandMarquee } from '@/features/landing/Marquee';
import { LatestPostsCarousel } from '@/features/landing/LatestPostCarousel';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleStartReading = () => {
    navigate('/archive');
  };

  const handleSubscribe = () => {
    // For now, let's just scroll to something or keep it simple
    console.log('Subscribe clicked');
  };

  return (
    <div className="space-y-20 pb-20">
      <Hero
        onStartReading={handleStartReading}
        onSubscribeClick={handleSubscribe}
      />
      <BrandMarquee />
      <LatestPostsCarousel />
    </div>
  );
};
