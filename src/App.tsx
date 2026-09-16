import React from 'react';
import { useApp } from './context/AppContext';
import { Navbar } from './components/layout/Navbar';
import { Sidebar } from './components/layout/Sidebar';
import { LandingPage } from './components/landing/LandingPage';
import { OnboardingFlow } from './components/onboarding/OnboardingFlow';
import { DashboardView } from './components/dashboard/DashboardView';
import { CareerGoalPlannerView } from './components/planner/CareerGoalPlannerView';
import { CareerExplorerView } from './components/careers/CareerExplorerView';
import { CareerDetailView } from './components/careers/CareerDetailView';
import { SkillGapView } from './components/skills/SkillGapView';
import { PersonalizedRoadmapView } from './components/roadmap/PersonalizedRoadmapView';
import { MarketTrendsView } from './components/market/MarketTrendsView';
import { LearningResourcesView } from './components/learning/LearningResourcesView';
import { ProfileView } from './components/profile/ProfileView';
import { AIAssistantModal } from './components/assistant/AIAssistantModal';

export const AppContent: React.FC = () => {
  const { currentView } = useApp();

  // Landing Page View
  if (currentView === 'landing') {
    return (
      <div className="min-h-screen flex flex-col bg-[#F7F3EA]">
        <Navbar />
        <main className="flex-1">
          <LandingPage />
        </main>
        <AIAssistantModal />
      </div>
    );
  }

  // Multi-step Onboarding View
  if (currentView === 'onboarding') {
    return (
      <div className="min-h-screen flex flex-col bg-[#F7F3EA]">
        <Navbar />
        <main className="flex-1">
          <OnboardingFlow />
        </main>
      </div>
    );
  }

  // Dashboard & Authenticated Prototype Views with Persistent Layout
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3EA]">
      <Navbar />
      <div className="flex-1 flex max-w-7xl w-full mx-auto">
        {/* Desktop Sidebar / Mobile Menu */}
        <Sidebar />

        {/* View Routing */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-5xl overflow-hidden">
          {currentView === 'dashboard' && <DashboardView />}
          {currentView === 'career-goal-planner' && <CareerGoalPlannerView />}
          {currentView === 'career-explorer' && <CareerExplorerView />}
          {currentView === 'career-detail' && <CareerDetailView />}
          {currentView === 'skill-gap' && <SkillGapView />}
          {currentView === 'roadmap' && <PersonalizedRoadmapView />}
          {currentView === 'market-trends' && <MarketTrendsView />}
          {currentView === 'learning' && <LearningResourcesView />}
          {currentView === 'profile' && <ProfileView />}
        </main>
      </div>

      {/* Floating AI Assistant available on all views */}
      <AIAssistantModal />
    </div>
  );
};

export default function App() {
  return <AppContent />;
}
