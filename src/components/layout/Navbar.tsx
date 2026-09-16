import React from 'react';
import { Sparkles, ArrowRight, Compass, Users, Award } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { HACKATHON_METADATA } from '../../data/sampleData';

export const Navbar: React.FC = () => {
  const { currentView, navigateTo } = useApp();

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-purple-100 transition-all">
      {/* Top hackathon bar */}
      <div className="bg-gradient-to-r from-brand-900 via-brand-800 to-brand-900 text-white text-[11px] py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2 font-medium">
            <span className="bg-brand-500/30 text-brand-200 px-2 py-0.5 rounded text-[10px] font-bold tracking-wide uppercase border border-brand-400/30">
              Problem Statement {HACKATHON_METADATA.problemStatementId}
            </span>
            <span className="hidden sm:inline text-purple-200">|</span>
            <span className="flex items-center gap-1.5 text-purple-100 font-semibold">
              <Users className="w-3.5 h-3.5 text-purple-300" />
              Team {HACKATHON_METADATA.teamName}
            </span>
          </div>
          <div className="flex items-center gap-3 text-purple-200 text-[10px] sm:text-[11px]">
            <span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-semibold border border-emerald-400/30 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
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
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-700 to-brand-900 flex items-center justify-center text-white shadow-md shadow-brand-900/10 group-hover:scale-105 transition-transform">
            <Compass className="w-5 h-5 text-purple-200" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-black tracking-tight text-slate-900 group-hover:text-brand-800 transition-colors">
                Careerly
              </span>
              <span className="bg-brand-100 text-brand-800 text-[10px] font-bold px-1.5 py-0.5 rounded-md uppercase tracking-wider">
                AI
              </span>
            </div>
            <p className="text-[10px] font-medium text-slate-400 tracking-wide uppercase">Career Intelligence</p>
          </div>
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          <button 
            onClick={() => navigateTo('landing')} 
            className={`hover:text-brand-700 transition-colors ${currentView === 'landing' ? 'text-brand-800 font-semibold' : ''}`}
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
                className="hidden sm:inline-flex text-xs font-semibold text-brand-700 hover:text-brand-900 px-3 py-2 rounded-lg hover:bg-brand-50 transition-colors"
              >
                Demo Dashboard
              </button>
              <button
                onClick={() => navigateTo('onboarding')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-800 hover:bg-brand-900 text-white text-xs sm:text-sm font-semibold shadow-md shadow-brand-900/15 hover:shadow-brand-900/25 transition-all active:scale-95"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={() => navigateTo('landing')}
                className="text-xs font-semibold text-slate-500 hover:text-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
              >
                View Landing Page
              </button>
              <button
                onClick={() => navigateTo('onboarding')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-50 text-brand-700 hover:bg-brand-100 text-xs font-semibold transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-brand-600" />
                <span>Re-run Assessment</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
