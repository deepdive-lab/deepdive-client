import React from 'react';
import { Link } from 'react-router-dom';
import { Github, SquareChartGantt } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';

interface NavBarProps {
  onSubscribeClick?: () => void;
}

export const NavBar: React.FC<NavBarProps> = ({ onSubscribeClick }) => {
  return (
    <nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-slate-950/70 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
            <SquareChartGantt className="text-white w-5 h-5" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white">딥다이브랩</span>
        </Link>

        <div className="hidden md:flex items-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/"
                    className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors bg-transparent hover:bg-white/5 rounded-md"
                  >
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/archive"
                    className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors bg-transparent hover:bg-white/5 rounded-md"
                  >
                    Archive
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/archive"
                    className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors bg-transparent hover:bg-white/5 rounded-md"
                  >
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <Button
            size="sm"
            variant="outline"
            onClick={onSubscribeClick}
          >
            Subscribe
          </Button>
        </div>
      </div>
    </nav>
  );
};
