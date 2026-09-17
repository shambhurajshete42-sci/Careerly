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
  RotateCcw,
  Sparkles,
  Menu,
  X
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { AppView } from '../../types';

export const Sidebar: React.FC = () => {
  const { 
    currentView, 
    navigateTo, 
    student, 
    setAssistantOpen, 
    resetToDefaultDemo 
  } = useApp();
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navSections: {
    title: string;
    items: { view: AppView; label: string; icon: React.FC<{ className?: string }>; badge?: string; badgeColor?: string }[];
  }[] = [
    {
      title: 'OVERVIEW',
      items: [
        { view: 'dashboard', label: 'Dashboard', icon: LayoutDashboard }
      ]
    },
    {
      title: 'PLAN',
      items: [
        { view: 'career-goal-planner', label: 'Career Goal Planner', icon: Target, badge: 'Goal', badgeColor: 'sage' },
        { view: 'career-explorer', label: 'Career Explorer', icon: Compass }
      ]
    },
    {
      title: 'DEVELOP',
      items: [
        { view: 'skill-gap', label: 'Skill Gap', icon: SplitSquareVertical, badge: 'Focus', badgeColor: 'lavender' },
        { view: 'roadmap', label: 'Roadmap', icon: Milestone, badge: '5 Phases', badgeColor: 'sage' },
        { view: 'learning', label: 'Learning', icon: BookOpen }
      ]
    },
    {
      title: 'INSIGHTS',
      items: [
        { view: 'market-trends', label: 'Market Trends', icon: TrendingUp }
      ]
    },
    {
      title: 'ACCOUNT',
      items: [
        { view: 'profile', label: 'Profile', icon: UserCircle }
      ]
    }
  ];

  const handleNavClick = (view: AppView) => {
    navigateTo(view);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Top Header */}
      <div className="lg:hidden flex items-center justify-between px-4 py-3 bg-white border-b border-beige-200 sticky top-0 z-30">
        <div 
          onClick={() => navigateTo('landing')}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="w-8 h-8 rounded-lg bg-[#5B3FD6] flex items-center justify-center text-white font-bold">
            <Compass className="w-4 h-4 text-white" />
          </div>
          <span className="text-lg font-bold text-charcoal">Careerly</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setAssistantOpen(true)}
            className="p-2 text-[#5B3FD6] bg-[#F0ECFF] rounded-lg hover:bg-lavender-200"
            title="Ask Careerly AI"
          >
            <Bot className="w-5 h-5 text-[#5B3FD6]" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-charcoal-200 rounded-lg hover:bg-beige-100"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-charcoal/40 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}>
          <div 
            className="fixed top-0 bottom-0 left-0 w-72 bg-white p-5 flex flex-col justify-between shadow-2xl z-50 overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-beige-200">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#5B3FD6] flex items-center justify-center text-white">
                    <Compass className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h2 className="font-bold text-charcoal">Careerly</h2>
                    <p className="text-[10px] text-charcoal-50">Career Intelligence</p>
                  </div>
                </div>
                <button onClick={() => setMobileMenuOpen(false)} className="p-1 text-charcoal-50 hover:text-charcoal">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-4 space-y-4">
                {navSections.map(section => (
                  <div key={section.title}>
                    <p className="px-3.5 text-[10px] font-bold tracking-wider text-charcoal-50 uppercase mb-1">
                      {section.title}
                    </p>
                    <div className="space-y-0.5">
                      {section.items.map(item => {
                        const Icon = item.icon;
                        const isActive = currentView === item.view;
                        return (
                          <button
                            key={item.view}
                            onClick={() => handleNavClick(item.view)}
                            className={`w-full flex items-center gap-3 px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors ${
                              isActive 
                                ? 'bg-[#5B3FD6] text-white shadow-sm' 
                                : 'text-charcoal-200 hover:bg-[#F0ECFF] hover:text-[#5B3FD6]'
                            }`}
                          >
                            <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-charcoal-50'}`} />
                            <span>{item.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}

                <div>
                  <p className="px-3.5 text-[10px] font-bold tracking-wider text-charcoal-50 uppercase mb-1">
                    ASSIST
                  </p>
                  <button
                    onClick={() => {
                      setAssistantOpen(true);
                      setMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-3.5 py-2 rounded-xl text-xs font-semibold text-[#5B3FD6] bg-[#F0ECFF] hover:bg-lavender-200 transition-colors"
                  >
                    <Bot className="w-4 h-4 text-[#5B3FD6]" />
                    <span>AI Career Assistant</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-beige-200 text-xs text-charcoal-100">
              <p className="font-semibold text-charcoal">{student.name}</p>
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
                  <span className="bg-[#F0ECFF] text-[#5B3FD6] text-[10px] font-bold px-1.5 py-0.5 rounded uppercase">
                    AI
                  </span>
                </div>
                <p className="text-[11px] text-charcoal-50 font-medium">Career Intelligence</p>
              </div>
            </div>
          </div>

          {/* Student Profile Pill */}
          <div 
            onClick={() => navigateTo('profile')}
            className="mb-4 mx-1 p-2.5 rounded-xl bg-beige-50 border border-beige-200 hover:border-[#DDD5FF] cursor-pointer transition-all hover:shadow-subtle"
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

          {/* Conceptual Navigation Sections: OVERVIEW, PLAN, DEVELOP, INSIGHTS, ACCOUNT, ASSIST */}
          <nav className="space-y-3.5">
            {navSections.map(section => (
              <div key={section.title}>
                <p className="px-3.5 text-[10px] font-bold tracking-wider text-charcoal-50 uppercase mb-1">
                  {section.title}
                </p>
                <div className="space-y-0.5">
                  {section.items.map(item => {
                    const Icon = item.icon;
                    const isActive = currentView === item.view;
                    return (
                      <button
                        key={item.view}
                        onClick={() => navigateTo(item.view)}
                        className={`w-full flex items-center justify-between px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all group ${
                          isActive 
                            ? 'bg-[#5B3FD6] text-white shadow-sm font-bold' 
                            : 'text-charcoal-200 hover:bg-[#F0ECFF] hover:text-[#5B3FD6]'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className={`w-4 h-4 transition-colors ${isActive ? 'text-white' : 'text-charcoal-50 group-hover:text-[#5B3FD6]'}`} />
                          <span>{item.label}</span>
                        </div>
                        {item.badge && (
                          <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                            isActive 
                              ? 'bg-white/20 text-white' 
                              : item.badgeColor === 'sage' 
                              ? 'bg-sage-100 text-sage-800' 
                              : 'bg-[#F0ECFF] text-[#5B3FD6]'
                          }`}>
                            {item.badge}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* ASSIST Section */}
            <div>
              <p className="px-3.5 text-[10px] font-bold tracking-wider text-charcoal-50 uppercase mb-1">
                ASSIST
              </p>
              <button
                onClick={() => setAssistantOpen(true)}
                className="w-full flex items-center justify-between px-3.5 py-2 rounded-xl text-xs font-semibold text-[#5B3FD6] bg-[#F0ECFF] hover:bg-lavender-200 border border-[#DDD5FF] transition-all active:scale-98 group"
              >
                <div className="flex items-center gap-3">
                  <Bot className="w-4 h-4 text-[#5B3FD6] group-hover:scale-110 transition-transform" />
                  <span>AI Career Assistant</span>
                </div>
                <Sparkles className="w-3.5 h-3.5 text-[#5B3FD6]" />
              </button>
            </div>
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="pt-3 border-t border-beige-200">
          <button
            onClick={resetToDefaultDemo}
            className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-charcoal-100 hover:text-[#5B3FD6] hover:bg-[#F0ECFF] rounded-lg transition-colors"
            title="Reset sample profile to default demo state"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Demo Data</span>
          </button>
        </div>
      </aside>
    </>
  );
};

