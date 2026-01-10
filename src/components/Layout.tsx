import React from 'react';
import { NavBar } from './NavBar';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const handleSubscribe = () => {
    console.log('Subscribe clicked from Layout');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col relative isolate overflow-hidden">
      {/* Background Gradients */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[500px] blur-[120px] bg-gradient-to-r from-indigo-700/20 via-blue-500/10 to-cyan-400/10" />

      <NavBar onSubscribeClick={handleSubscribe} />

      <main className="flex-grow pt-16">
        {children}
      </main>

      <Footer />
    </div>
  );
};
