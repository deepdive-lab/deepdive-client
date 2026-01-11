import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Hero } from '@/features/landing/Hero';
import { BrandMarquee } from '@/features/landing/Marquee';
import { PostCarousel } from '@/features/landing/PostCarousel';
import { SubscribeDialog } from '@/features/landing/SubscribeDialog';
import { POSTS } from '@/data/content';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);

  const handleStartReading = () => {
    navigate('/archive');
  };

  const handleSubscribe = () => {
    setIsSubscribeOpen(true);
  };

  const latestPosts = [...POSTS]
    .sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime())
    .slice(0, 5);

  return (
    <div className="space-y-20 pb-20">
      <Hero
        onStartReading={handleStartReading}
        onSubscribeClick={handleSubscribe}
      />
      <BrandMarquee />
      <PostCarousel
        title="Into the Engine Room"
        description="Peek inside the Black Box and pull the latest commits from the frontiers."
        posts={latestPosts}
      />
      <PostCarousel
        title="Check out the popular reads"
        description="Explore the most popular posts from our archive."
        posts={latestPosts}
      />
      <SubscribeDialog
        open={isSubscribeOpen}
        onOpenChange={setIsSubscribeOpen}
      />
    </div>
  );
};
