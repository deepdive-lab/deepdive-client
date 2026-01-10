import { Link } from 'react-router-dom';
import { Cpu, Github, Twitter, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-slate-950 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
                <Cpu className="text-white w-5 h-5" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">DeepDiveLab</span>
            </Link>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              최첨단 AI 기술과 엔지니어링 통찰력을 제공합니다.
              10,000명 이상의 엔지니어와 함께 지식의 경계를 넓혀보세요.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link to="/" className="hover:text-indigo-400 transition-colors">Features</Link></li>
              <li><Link to="/archive" className="hover:text-indigo-400 transition-colors">Topics</Link></li>
              <li><Link to="/archive" className="hover:text-indigo-400 transition-colors">Showcase</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} DeepDiveLab. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-500 hover:text-white transition-colors" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
