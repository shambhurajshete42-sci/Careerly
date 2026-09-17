import React from 'react';
import { Sparkles, ArrowRight, Compass } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Navbar: React.FC = () => {
  const { currentView, navigateTo } = useApp();

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-beige-200 transition-all">
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <div 
          onClick={() => navigateTo('landing')}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-xl bg-[#5B3FD6] flex items-center justify-center text-white transition-opacity group-hover:opacity-90">
            <Compass className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-lg font-bold tracking-tight text-[#292631] group-hover:text-[#5B3FD6] transition-colors">
                Careerly
              </span>
              <span className="bg-[#F0ECFF] text-[#5B3FD6] text-[10px] font-semibold px-1.5 py-0.5 rounded-md uppercase tracking-wider">
                AI
              </span>
            </div>
            <p className="text-[10px] font-medium text-charcoal-50 tracking-wider uppercase">Career Intelligence</p>
          </div>
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-charcoal-100">
          <button 
            onClick={() => navigateTo('landing')} 
            className={`hover:text-[#5B3FD6] transition-colors ${currentView === 'landing' ? 'text-[#5B3FD6] font-bold' : ''}`}
          >
            Home
          </button>
          <button 
            onClick={() => {
              if (currentView === 'landing') {
                document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
              } else {
                navigateTo('landing');
              }
            }} 
            className="hover:text-[#5B3FD6] transition-colors"
          >
            How It Works
          </button>
          <button 
            onClick={() => navigateTo('career-explorer')} 
            className={`hover:text-[#5B3FD6] transition-colors ${currentView === 'career-explorer' ? 'text-[#5B3FD6] font-semibold' : ''}`}
          >
            Careers
          </button>
          <button 
            onClick={() => navigateTo('career-goal-planner')} 
            className={`hover:text-[#5B3FD6] transition-colors ${currentView === 'career-goal-planner' ? 'text-[#5B3FD6] font-semibold' : ''}`}
          >
            Goal Planner
          </button>
        </nav>

        {/* CTAs */}
        <div className="flex items-center gap-3">
          {currentView === 'landing' ? (
            <button
              onClick={() => navigateTo('onboarding')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#5B3FD6] hover:bg-[#4E34BF] text-white text-xs sm:text-sm font-semibold shadow-sm transition-all active:scale-95"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={() => navigateTo('landing')}
                className="text-xs font-semibold text-charcoal-100 hover:text-charcoal px-3 py-1.5 rounded-xl border border-beige-200 hover:bg-white transition-colors"
              >
                View Landing Page
              </button>
              <button
                onClick={() => navigateTo('onboarding')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F0ECFF] text-[#5B3FD6] hover:bg-lavender-200 text-xs font-semibold transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#5B3FD6]" />
                <span>Re-run Assessment</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
