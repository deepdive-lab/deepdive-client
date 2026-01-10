import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onStartReading: () => void;
  onSubscribeClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartReading, onSubscribeClick }) => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none opacity-50 mix-blend-screen" />

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">

        <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1 mb-8 animate-fade-in">
          <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-pulse"></span>
          <span className="text-xs font-medium text-indigo-300 tracking-wide">
            DEVINTEL v2.0 IS LIVE
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 max-w-4xl leading-[1.1] animate-fade-in [animation-delay:100ms]">
          Curating Posts for <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400">
            the Deep-Dives.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed animate-fade-in [animation-delay:200ms]">
          Curating collection of deep-dives, under-the-hood, and technical insights from the teams leading the tech frontiers.<br />
          Subscribe and get the latest posts delivered to your inbox.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in [animation-delay:300ms]">
          <Button size="lg" className="rounded-full px-8 text-base bg-indigo-600 hover:bg-indigo-500 text-white border-0" onClick={onStartReading}>
            <Sparkles className="w-4 h-4 mr-2" />
            Start Reading
          </Button>
          <Button variant="outline" size="lg" className="rounded-full px-8 text-base border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800" onClick={onSubscribeClick}>
            Subscribe
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section >
  );
};
