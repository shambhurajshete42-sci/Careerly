import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Target,
  Compass, 
  SplitSquareVertical, 
  Milestone, 
  TrendingUp, 
  BookOpen, 
  Bot, 
  UserCircle, 
  HelpCircle, 
  RotateCcw,
  Sparkles,
  Menu,
  X,
  GraduationCap
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { AppView } from '../../types';
import { HACKATHON_METADATA } from '../../data/sampleData';

export const Sidebar: React.FC = () => {
  const { 
    currentView, 
    navigateTo, 
    student, 
    setAssistantOpen, 
    resetToDefaultDemo 
  } = useApp();
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showHelpModal, setShowHelpModal] = useState(false);

  const navItems: { view: AppView; label: string; icon: React.FC<{ className?: string }> }[] = [
    { view: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { view: 'career-goal-planner', label: 'Career Goal Planner', icon: Target },
    { view: 'career-explorer', label: 'Career Explorer', icon: Compass },
    { view: 'skill-gap', label: 'Skill Gap', icon: SplitSquareVertical },
    { view: 'roadmap', label: 'Roadmap', icon: Milestone },
    { view: 'market-trends', label: 'Market Trends', icon: TrendingUp },
    { view: 'learning', label: 'Learning', icon: BookOpen },
    { view: 'profile', label: 'Profile', icon: UserCircle },
  ];

  const handleNavClick = (view: AppView) => {
    navigateTo(view);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Top Header */}
      <div className="lg:hidden flex items-center justify-between px-4 py-3 bg-white border-b border-purple-100 sticky top-0 z-30">
        <div 
          onClick={() => navigateTo('landing')}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="w-8 h-8 rounded-lg bg-brand-800 flex items-center justify-center text-white font-bold">
            <Compass className="w-4 h-4 text-purple-200" />
          </div>
          <span className="text-lg font-bold text-slate-900">Careerly</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setAssistantOpen(true)}
            className="p-2 text-brand-700 bg-brand-50 rounded-lg hover:bg-brand-100"
            title="Ask Careerly AI"
          >
            <Bot className="w-5 h-5 text-brand-700" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 rounded-lg hover:bg-slate-100"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}>
          <div 
            className="fixed top-0 bottom-0 left-0 w-72 bg-white p-5 flex flex-col justify-between shadow-2xl z-50 overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-brand-800 flex items-center justify-center text-white">
                    <Compass className="w-4 h-4 text-purple-200" />
                  </div>
                  <div>
                    <h2 className="font-bold text-slate-900">Careerly</h2>
                    <p className="text-[10px] text-slate-400">AI Career Intelligence</p>
                  </div>
                </div>
                <button onClick={() => setMobileMenuOpen(false)} className="p-1 text-slate-400 hover:text-slate-700">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-4 space-y-1">
                {navItems.map(item => {
                  const Icon = item.icon;
                  const isActive = currentView === item.view;
                  return (
                    <button
                      key={item.view}
                      onClick={() => handleNavClick(item.view)}
                      className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                        isActive 
                          ? 'bg-brand-800 text-white shadow-sm' 
                          : 'text-slate-600 hover:bg-lavender-50 hover:text-brand-800'
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                      <span>{item.label}</span>
                    </button>
                  );
                })}

                <button
                  onClick={() => {
                    setAssistantOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium text-brand-700 bg-brand-50 hover:bg-brand-100 transition-colors mt-2"
                >
                  <Bot className="w-4 h-4 text-brand-700" />
                  <span>AI Assistant</span>
                </button>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 text-xs text-slate-500">
              <p className="font-semibold text-slate-700">{student.name}</p>
              <p>{student.degreeCourse}</p>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Persistent Sidebar */}
      <aside className="hidden lg:flex flex-col justify-between w-64 min-h-[calc(100vh-4rem)] bg-white border-r border-beige-200 p-4 sticky top-16 select-none shrink-0">
        <div>
          {/* Logo & Subtitle */}
          <div 
            onClick={() => navigateTo('landing')}
            className="px-3 py-3 rounded-xl mb-4 hover:bg-[#F0ECFF]/60 cursor-pointer transition-colors group"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#5B3FD6] flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
                <Compass className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-lg tracking-tight text-[#292631] group-hover:text-[#5B3FD6] transition-colors">
                    Careerly
                  </span>
                  <span className="text-[10px] font-bold px-1.5 py-0.2 bg-[#F0ECFF] text-[#5B3FD6] rounded">
                    ED-02
                  </span>
                </div>
                <p className="text-[11px] text-charcoal-50 font-medium">Career Intelligence</p>
              </div>
            </div>
          </div>

          {/* Student Profile Pill */}
          <div 
            onClick={() => navigateTo('profile')}
            className="mb-5 mx-1 p-3 rounded-xl bg-[#FAF7F0] border border-beige-200 hover:border-[#DDD5FF] cursor-pointer transition-all hover:shadow-subtle"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#F0ECFF] text-[#5B3FD6] font-bold flex items-center justify-center text-xs border border-[#DDD5FF]">
                {student.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="overflow-hidden">
                <p className="text-xs font-bold text-[#292631] truncate">{student.name}</p>
                <p className="text-[11px] text-charcoal-100 truncate">{student.yearOfStudy} • {student.degreeCourse.split(' ')[0]}</p>
              </div>
            </div>
          </div>

          {/* Main Navigation */}
          <nav className="space-y-1">
            {navItems.map(item => {
              const Icon = item.icon;
              const isActive = currentView === item.view;
              return (
                <button
                  key={item.view}
                  onClick={() => navigateTo(item.view)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all group ${
                    isActive 
                      ? 'bg-[#5B3FD6] text-white shadow-sm font-bold' 
                      : 'text-charcoal-200 hover:bg-[#F0ECFF] hover:text-[#5B3FD6]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 transition-colors ${isActive ? 'text-white' : 'text-charcoal-50 group-hover:text-[#5B3FD6]'}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.view === 'career-goal-planner' && (
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-[#E4F3EA] text-[#36644B]'}`}>
                      Goal
                    </span>
                  )}
                  {item.view === 'roadmap' && (
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-[#E4F3EA] text-[#36644B]'}`}>
                      5 Phases
                    </span>
                  )}
                  {item.view === 'skill-gap' && (
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-[#F0ECFF] text-[#5B3FD6]'}`}>
                      3 Focus
                    </span>
                  )}
                </button>
              );
            })}

            {/* AI Assistant Navigation Button */}
            <button
              onClick={() => setAssistantOpen(true)}
              className="w-full mt-2 flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold text-[#5B3FD6] bg-[#F0ECFF] hover:bg-lavender-200 border border-[#DDD5FF] transition-all active:scale-98 group"
            >
              <div className="flex items-center gap-3">
                <Bot className="w-4 h-4 text-[#5B3FD6] group-hover:scale-110 transition-transform" />
                <span>AI Career Assistant</span>
              </div>
              <Sparkles className="w-3.5 h-3.5 text-[#5B3FD6] animate-pulse" />
            </button>
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="pt-4 border-t border-slate-100 space-y-1.5">
          <button
            onClick={() => setShowHelpModal(true)}
            className="w-full flex items-center gap-3 px-3 py-2 text-xs font-medium text-slate-500 hover:text-slate-800 hover:bg-slate-50 rounded-lg transition-colors"
          >
            <HelpCircle className="w-4 h-4 text-slate-400" />
            <span>Problem &amp; Team Details</span>
          </button>

          <button
            onClick={resetToDefaultDemo}
            className="w-full flex items-center gap-3 px-3 py-2 text-xs font-medium text-slate-400 hover:text-brand-700 hover:bg-lavender-50 rounded-lg transition-colors"
            title="Reset sample profile to default demo state"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Demo Data</span>
          </button>

          <div className="pt-2 px-2 text-[10px] text-slate-400 leading-tight">
            <p className="font-semibold text-slate-600">Team {HACKATHON_METADATA.teamName}</p>
            <p className="text-[9px] text-slate-400 mt-0.5">Problem Statement: {HACKATHON_METADATA.problemStatementId}</p>
          </div>
        </div>
      </aside>

      {/* Info Modal */}
      {showHelpModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm" onClick={() => setShowHelpModal(false)}>
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl border border-purple-100" onClick={e => e.stopPropagation()}>
            <div className="flex items-center gap-2 text-brand-800 mb-2">
              <GraduationCap className="w-5 h-5 text-brand-700" />
              <h3 className="text-base font-bold text-slate-900">Careerly Project Info</h3>
            </div>
            <div className="space-y-3 text-xs text-slate-600 mt-4 leading-relaxed">
              <div className="p-3 bg-lavender-50 rounded-xl border border-purple-100">
                <span className="font-bold text-slate-800 block mb-0.5">Problem Statement:</span>
                <p className="text-brand-900 font-semibold">{HACKATHON_METADATA.problemStatementId} — {HACKATHON_METADATA.problemStatementTitle}</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl">
                <span className="font-bold text-slate-800 block mb-1">Team: {HACKATHON_METADATA.teamName}</span>
                <ul className="space-y-1 font-medium text-slate-700">
                  {HACKATHON_METADATA.teamMembers.map(m => (
                    <li key={m.name} className="flex items-center justify-between">
                      <span>• {m.name}</span>
                      <span className="text-slate-400 text-[11px]">{m.role}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <button
              onClick={() => setShowHelpModal(false)}
              className="mt-5 w-full py-2 bg-brand-800 text-white rounded-xl font-semibold text-xs hover:bg-brand-900 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};
