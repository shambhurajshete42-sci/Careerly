import React from 'react';
import { Sparkles, ArrowRight, Compass, Users, Award } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { HACKATHON_METADATA } from '../../data/sampleData';

export const Navbar: React.FC = () => {
  const { currentView, navigateTo } = useApp();

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-beige-200 transition-all">
      {/* Top bar with clean Primary Purple */}
      <div className="bg-[#5B3FD6] text-white text-[11px] py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2 font-medium">
            <span className="bg-white/15 text-white px-2 py-0.5 rounded text-[10px] font-bold tracking-wide uppercase border border-white/20">
              Problem Statement {HACKATHON_METADATA.problemStatementId}
            </span>
            <span className="hidden sm:inline text-purple-200">|</span>
            <span className="flex items-center gap-1.5 text-white font-semibold">
              <Users className="w-3.5 h-3.5 text-purple-200" />
              Team {HACKATHON_METADATA.teamName}
            </span>
          </div>
          <div className="flex items-center gap-3 text-purple-100 text-[10px] sm:text-[11px]">
            <span className="bg-[#E4F3EA] text-[#36644B] px-2 py-0.5 rounded-full font-semibold border border-[#CEE8D8] flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6FAF8B] animate-pulse"></span>
              Live Prototype
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <div 
          onClick={() => navigateTo('landing')}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-[#5B3FD6] flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
            <Compass className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-black tracking-tight text-[#292631] group-hover:text-[#5B3FD6] transition-colors">
                Careerly
              </span>
              <span className="bg-[#F0ECFF] text-[#5B3FD6] text-[10px] font-bold px-1.5 py-0.5 rounded-md uppercase tracking-wider">
                AI
              </span>
            </div>
            <p className="text-[10px] font-medium text-charcoal-50 tracking-wide uppercase">Career Intelligence</p>
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
            className="hover:text-brand-700 transition-colors"
          >
            How It Works
          </button>
          <button 
            onClick={() => navigateTo('career-goal-planner')} 
            className={`hover:text-brand-700 transition-colors ${currentView === 'career-goal-planner' ? 'text-brand-800 font-semibold' : ''}`}
          >
            Goal Planner
          </button>
          <button 
            onClick={() => navigateTo('career-explorer')} 
            className={`hover:text-brand-700 transition-colors ${currentView === 'career-explorer' ? 'text-brand-800 font-semibold' : ''}`}
          >
            Careers
          </button>
          <button 
            onClick={() => navigateTo('market-trends')} 
            className={`hover:text-brand-700 transition-colors ${currentView === 'market-trends' ? 'text-brand-800 font-semibold' : ''}`}
          >
            Market Trends
          </button>
          <button 
            onClick={() => navigateTo('dashboard')} 
            className={`hover:text-brand-700 transition-colors ${currentView === 'dashboard' ? 'text-brand-800 font-semibold' : ''}`}
          >
            Dashboard
          </button>
        </nav>

        {/* CTAs */}
        <div className="flex items-center gap-3">
          {currentView === 'landing' ? (
            <>
              <button 
                onClick={() => navigateTo('dashboard')}
                className="hidden sm:inline-flex text-xs font-semibold text-[#5B3FD6] hover:text-[#4E34BF] px-3 py-2 rounded-xl hover:bg-[#F0ECFF] transition-colors"
              >
                Demo Dashboard
              </button>
              <button
                onClick={() => navigateTo('onboarding')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#5B3FD6] hover:bg-[#4E34BF] text-white text-xs sm:text-sm font-semibold shadow-sm transition-all active:scale-95"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={() => navigateTo('landing')}
                className="text-xs font-semibold text-charcoal-100 hover:text-charcoal px-3 py-1.5 rounded-xl border border-beige-300 hover:bg-white transition-colors"
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
