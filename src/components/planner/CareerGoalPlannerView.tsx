import React, { useState, useMemo } from 'react';
import { 
  Target, 
  Search, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  AlertCircle, 
  BookOpen, 
  Milestone, 
  SplitSquareVertical, 
  TrendingUp, 
  Briefcase, 
  Brain, 
  Code, 
  Database, 
  BarChart3, 
  Shield, 
  Cloud, 
  Palette, 
  Bot, 
  Rocket, 
  GraduationCap, 
  FolderGit2, 
  Award, 
  Zap, 
  Check, 
  Clock, 
  Layers, 
  ExternalLink,
  ChevronRight,
  Filter
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { CAREER_GOALS, calculateCareerReadiness } from '../../data/careerGoalsData';
import { CareerGoalItem } from '../../types';
import { ProgressBar } from '../common/ProgressBar';
import { Badge } from '../common/Badge';

// Helper to resolve icon by name
const getCareerIcon = (iconName: string, className = "w-6 h-6") => {
  switch (iconName) {
    case 'Brain': return <Brain className={className} />;
    case 'Code': return <Code className={className} />;
    case 'Database': return <Database className={className} />;
    case 'BarChart3': return <BarChart3 className={className} />;
    case 'Shield': return <Shield className={className} />;
    case 'Cloud': return <Cloud className={className} />;
    case 'Palette': return <Palette className={className} />;
    case 'Briefcase': return <Briefcase className={className} />;
    case 'Bot': return <Bot className={className} />;
    case 'Rocket': return <Rocket className={className} />;
    default: return <Target className={className} />;
  }
};

export const CareerGoalPlannerView: React.FC = () => {
  const { 
    student, 
    selectedGoalCareerId, 
    setSelectedGoalCareerId, 
    setTargetCareer, 
    navigateTo, 
    simulateSkillImprovement 
  } = useApp();

  // Mode: 'select' (Career selection grid) or 'details' (Deep-dive career goal blueprint)
  const [activeMode, setActiveMode] = useState<'select' | 'details'>('select');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [skillFilter, setSkillFilter] = useState<'All' | 'Priority' | 'Developing' | 'Strong'>('All');
  const [boostedSkill, setBoostedSkill] = useState<string | null>(null);

  // Active career goal
  const currentCareerGoal = useMemo(() => {
    return CAREER_GOALS.find(c => c.id === selectedGoalCareerId) || CAREER_GOALS[0];
  }, [selectedGoalCareerId]);

  // Personalized readiness calculation based on student's actual profile skills
  const readiness = useMemo(() => {
    return calculateCareerReadiness(currentCareerGoal, student.skills);
  }, [currentCareerGoal, student.skills]);

  // Filtered career list for Step 2 Selection Page
  const filteredCareers = useMemo(() => {
    return CAREER_GOALS.filter(career => {
      const matchesSearch = 
        career.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        career.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        career.coreSkills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
        career.technicalSkills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = selectedCategory === 'All' || career.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const categories = ['All', 'Engineering & AI', 'Data & Analytics', 'Design & Product', 'Cloud & Security', 'Business & Leadership'];

  const handleSelectCareer = (careerId: string) => {
    setSelectedGoalCareerId(careerId);
    setActiveMode('details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSetAsTarget = (careerId: string) => {
    setTargetCareer(careerId);
  };

  const handleBoostSkill = (skillName: string) => {
    simulateSkillImprovement(skillName);
    setBoostedSkill(skillName);
    setTimeout(() => setBoostedSkill(null), 2500);
  };

  const isCurrentActiveTarget = student.targetCareerId === currentCareerGoal.id;

  // Filtered skills for personalized comparison
  const filteredSkillComparisons = readiness.skillComparisons.filter(s => {
    if (skillFilter === 'Priority') return s.status === 'Priority';
    if (skillFilter === 'Developing') return s.status === 'Developing';
    if (skillFilter === 'Strong') return s.status === 'Strong';
    return true;
  });

  // ==========================================
  // VIEW 1: CAREER SELECTION PAGE (STEP 2)
  // ==========================================
  if (activeMode === 'select') {
    return (
      <div className="space-y-8 pb-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-purple-100/60">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="p-2 rounded-xl bg-brand-50 text-brand-800 border border-brand-200/60">
                <Target className="w-5 h-5" />
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Choose Your Career Goal
              </h1>
              <span className="text-xs font-bold text-brand-800 bg-brand-50 px-2.5 py-0.5 rounded-full border border-brand-200">
                Goal Planner
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mt-1">
              Tell us where you want to go. We'll show you what it takes to get there.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => navigateTo('career-explorer')}
              className="text-xs font-semibold text-slate-500 hover:text-brand-800 px-3 py-2 rounded-xl hover:bg-lavender-50 transition-colors flex items-center gap-1.5"
            >
              <span>Explore recommended fits</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Informative Banner */}
        <div className="p-5 sm:p-6 rounded-3xl bg-[#F0ECFF] border border-[#DDD5FF] shadow-sm relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="max-w-xl">
              <span className="text-[10px] uppercase tracking-widest font-bold text-[#5B3FD6] bg-white px-2.5 py-1 rounded-full border border-[#DDD5FF] inline-block mb-1.5">
                Student-Led Career Pathing
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#292631]">
                "I want to become a..."
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-200 mt-1 leading-relaxed">
                Choose any target role you aspire to. Careerly analyzes your current skills against industry benchmarks, identifies gaps, and maps out projects and roadmaps to get you hired.
              </p>
            </div>
            <div className="shrink-0 bg-white rounded-2xl p-4 border border-[#DDD5FF] text-left sm:text-right shadow-subtle">
              <span className="text-xs text-charcoal-100 block font-medium">Currently Selected Target:</span>
              <span className="text-sm font-extrabold text-[#5B3FD6] block mt-0.5">
                {CAREER_GOALS.find(c => c.id === student.targetCareerId)?.title || 'AI / Machine Learning Engineer'}
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#36644B] bg-[#E4F3EA] px-2 py-0.5 rounded-full mt-1.5 border border-[#CEE8D8]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6FAF8B]"></span>
                In Progress
              </span>
            </div>
          </div>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for a career..."
                className="w-full pl-11 pr-4 py-3 bg-white border border-purple-100 rounded-2xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 shadow-sm transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-brand-800 text-white shadow-sm shadow-brand-900/10'
                    : 'bg-white text-slate-600 border border-purple-100/80 hover:bg-lavender-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span>Showing <strong>{filteredCareers.length}</strong> career pathways</span>
          {searchQuery && (
            <span>Filtered by: "{searchQuery}"</span>
          )}
        </div>

        {/* Career Cards Grid (Step 2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCareers.map((career) => {
            const isTarget = career.id === student.targetCareerId;
            const quickReadiness = calculateCareerReadiness(career, student.skills);

            return (
              <div
                key={career.id}
                className={`bg-white rounded-3xl p-6 sm:p-7 shadow-card hover:shadow-card-hover border transition-all duration-300 flex flex-col justify-between relative group ${
                  isTarget ? 'border-brand-500 ring-2 ring-purple-100' : 'border-purple-100 hover:border-brand-300'
                }`}
              >
                <div>
                  {/* Top Bar: Icon + Category + Target Pill */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-lavender-50 border border-purple-100 text-brand-800 flex items-center justify-center shadow-subtle group-hover:scale-105 group-hover:bg-brand-800 group-hover:text-white transition-all">
                        {getCareerIcon(career.iconName, "w-6 h-6")}
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-2 py-0.5 rounded-md border border-brand-200/50">
                          {career.category}
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-1 group-hover:text-brand-900 transition-colors">
                          {career.title}
                        </h3>
                      </div>
                    </div>

                    {isTarget && (
                      <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 flex items-center gap-1 shrink-0">
                        <Check className="w-3 h-3" />
                        Active Goal
                      </span>
                    )}
                  </div>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {career.shortDescription}
                  </p>

                  {/* Quick Skills Preview */}
                  <div className="mb-4">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                      Core Foundations
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {career.coreSkills.slice(0, 4).map(skill => (
                        <span 
                          key={skill}
                          className="text-[11px] font-medium px-2 py-0.5 rounded-lg bg-slate-50 text-slate-600 border border-slate-200/60"
                        >
                          {skill}
                        </span>
                      ))}
                      {career.coreSkills.length > 4 && (
                        <span className="text-[11px] font-medium px-2 py-0.5 rounded-lg bg-lavender-50 text-brand-700">
                          +{career.coreSkills.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Readiness Mini Preview */}
                  <div className="p-3 rounded-2xl bg-slate-50/80 border border-slate-100 mb-5 flex items-center justify-between text-xs">
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold uppercase block">Your Skill Readiness</span>
                      <span className="font-semibold text-slate-700">
                        {quickReadiness.strongCount} strong • {quickReadiness.developingCount} developing
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-base font-extrabold text-brand-800">
                        {quickReadiness.overallScore}%
                      </span>
                      <span className="text-[10px] text-slate-400 block font-medium">alignment</span>
                    </div>
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="pt-2 border-t border-purple-50 flex items-center justify-between gap-3">
                  <div className="text-[11px] font-semibold text-slate-400">
                    <span>{career.salaryRange.split('/')[0]}</span>
                  </div>

                  <button
                    onClick={() => handleSelectCareer(career.id)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-800 hover:bg-brand-900 text-white text-xs font-bold shadow-subtle hover:shadow-md transition-all active:scale-95 group-hover:bg-brand-700"
                  >
                    <span>Explore Path</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state */}
        {filteredCareers.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-purple-100 p-8">
            <div className="w-12 h-12 rounded-2xl bg-lavender-50 text-brand-700 flex items-center justify-center mx-auto mb-3">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900">No matching careers found</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              Try adjusting your search query or choosing "All" categories to see all 10+ career options.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="mt-4 px-4 py-2 rounded-xl bg-brand-800 text-white text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    );
  }

  // =========================================================================
  // VIEW 2: CAREER GOAL DETAILS (STEP 3, STEP 4, STEP 5, STEP 6)
  // =========================================================================
  return (
    <div className="space-y-8 pb-16">
      {/* Top Bar Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-purple-100/60">
        <button
          onClick={() => {
            setActiveMode('select');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-brand-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Careers</span>
        </button>

        {/* Quick Actions */}
        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={() => handleSetAsTarget(currentCareerGoal.id)}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              isCurrentActiveTarget
                ? 'bg-emerald-50 text-emerald-800 border border-emerald-300'
                : 'bg-brand-50 hover:bg-brand-100 text-brand-800 border border-brand-200'
            }`}
          >
            {isCurrentActiveTarget ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-700" />
                <span>✓ Active Target Goal</span>
              </>
            ) : (
              <>
                <Target className="w-3.5 h-3.5 text-brand-700" />
                <span>Set as My Target Goal</span>
              </>
            )}
          </button>

          <button
            onClick={() => {
              handleSetAsTarget(currentCareerGoal.id);
              navigateTo('roadmap');
            }}
            className="px-3.5 py-2 rounded-xl bg-brand-800 hover:bg-brand-900 text-white text-xs font-bold shadow-subtle flex items-center gap-1.5 transition-all"
          >
            <Milestone className="w-3.5 h-3.5" />
            <span>Open 5-Phase Roadmap</span>
          </button>
        </div>
      </div>

      {/* Main Hero Header Card (Step 3) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-card border border-purple-100 relative overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                YOUR CAREER GOAL
              </span>
              <span className="text-[11px] font-bold text-brand-800 bg-brand-50 px-2 py-0.5 rounded-md border border-brand-200">
                {currentCareerGoal.category}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-lavender-50 border border-purple-100 text-brand-800 flex items-center justify-center shrink-0">
                {getCareerIcon(currentCareerGoal.iconName, "w-6 h-6")}
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {currentCareerGoal.title}
              </h1>
            </div>

            <p className="text-sm sm:text-base font-medium text-brand-900 italic">
              "Here's what you'll need to build toward this career."
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {currentCareerGoal.overview}
            </p>
          </div>

          {/* Quick Metrics Pill */}
          <div className="bg-lavender-50/70 border border-purple-100 rounded-2xl p-4 shrink-0 space-y-2 text-xs w-full lg:w-64">
            <div className="flex justify-between items-center">
              <span className="text-slate-500 font-medium">Estimated Pay:</span>
              <span className="font-bold text-slate-900">{currentCareerGoal.salaryRange.split('/')[0]}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-500 font-medium">Market Trend:</span>
              <span className="font-bold text-emerald-700">{currentCareerGoal.marketOutlook.split(' ')[0]} Growth</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-500 font-medium">Profile Fit:</span>
              <span className="font-bold text-brand-800">{readiness.overallScore}% Aligned</span>
            </div>
          </div>
        </div>
      </div>

      {/* STEP 5: CAREER READINESS SUMMARY CARD */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-card border border-purple-100 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Left: Score & Description */}
          <div className="space-y-2 max-w-md">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                CAREER READINESS
              </span>
              <Badge variant="purple" size="sm">Calculated from your skills</Badge>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-4xl sm:text-5xl font-black text-brand-800 tracking-tight">
                {readiness.overallScore}%
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-500">
                Readiness Score
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Based on your current skills and the requirements of this career.
            </p>
          </div>

          {/* Right: Calculated Metric Counters */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full md:w-auto">
            <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-4 text-center">
              <div className="text-xl sm:text-2xl font-black text-emerald-800">
                {readiness.strongCount}
              </div>
              <div className="text-[11px] font-bold text-emerald-700 mt-0.5">
                Strong Skills
              </div>
              <div className="text-[10px] text-emerald-600/80 mt-0.5">
                ✓ Ready
              </div>
            </div>

            <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-4 text-center">
              <div className="text-xl sm:text-2xl font-black text-amber-800">
                {readiness.developingCount}
              </div>
              <div className="text-[11px] font-bold text-amber-700 mt-0.5">
                Developing Skills
              </div>
              <div className="text-[10px] text-amber-600/80 mt-0.5">
                ⚠ In progress
              </div>
            </div>

            <div className="bg-rose-50/70 border border-rose-200/80 rounded-2xl p-4 text-center">
              <div className="text-xl sm:text-2xl font-black text-rose-800">
                {readiness.priorityCount}
              </div>
              <div className="text-[11px] font-bold text-rose-700 mt-0.5">
                Priority Skills
              </div>
              <div className="text-[10px] text-rose-600/80 mt-0.5">
                🔴 Needs focus
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic overall progress bar */}
        <div className="mt-6 pt-5 border-t border-purple-50">
          <div className="flex justify-between items-center text-xs font-semibold text-slate-600 mb-1.5">
            <span>Overall Alignment Progress</span>
            <span className="text-brand-800 font-bold">{readiness.overallScore}%</span>
          </div>
          <ProgressBar 
            value={readiness.overallScore} 
            color={readiness.overallScore >= 75 ? 'green' : readiness.overallScore >= 55 ? 'purple' : 'amber'} 
            height="md" 
            showValueLabel={false} 
          />
        </div>
      </div>

      {/* STEP 4: PERSONALIZED SKILL READINESS (CURRENT vs TARGET) */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-card border border-purple-100 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-purple-100/60">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <SplitSquareVertical className="w-5 h-5 text-brand-700" />
              <span>Personalized Skill Readiness</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Comparing your current verified skills against benchmarks for {currentCareerGoal.title}.
            </p>
          </div>

          {/* Skill status filter pills */}
          <div className="flex items-center gap-1.5 bg-slate-50 p-1 rounded-xl border border-slate-200/60">
            {(['All', 'Priority', 'Developing', 'Strong'] as const).map(f => (
              <button
                key={f}
                onClick={() => setSkillFilter(f)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                  skillFilter === f
                    ? 'bg-white text-slate-900 shadow-xs border border-slate-200'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Informative Supportive Guidance Note */}
        <div className="p-3.5 rounded-2xl bg-lavender-50/70 border border-purple-100 text-xs text-slate-600 flex items-center justify-between">
          <span>
            💡 <strong>Guidance:</strong> Every professional builds skills incrementally. Focus first on your <strong>Priority areas</strong>, then polish developing areas into strong foundations.
          </span>
          <button
            onClick={() => navigateTo('skill-gap')}
            className="text-xs font-bold text-brand-800 hover:text-brand-900 shrink-0 ml-4 flex items-center gap-1"
          >
            <span>Full Skill Gap View</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Skill comparison rows */}
        <div className="space-y-4">
          {filteredSkillComparisons.map((item) => {
            const isBoosted = boostedSkill === item.name;

            return (
              <div
                key={item.name}
                className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                  item.status === 'Priority'
                    ? 'bg-rose-50/30 border-rose-100 hover:border-rose-200'
                    : item.status === 'Developing'
                    ? 'bg-amber-50/30 border-amber-100 hover:border-amber-200'
                    : 'bg-emerald-50/30 border-emerald-100 hover:border-emerald-200'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-slate-900">
                        {item.name}
                      </h4>
                      <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                        • {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    {/* Supportive Status Badges */}
                    {item.status === 'Strong' && (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 bg-emerald-100/70 px-2.5 py-0.5 rounded-full border border-emerald-200">
                        <Check className="w-3 h-3 text-emerald-700" />
                        <span>Strong foundation</span>
                      </span>
                    )}
                    {item.status === 'Developing' && (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-800 bg-amber-100/70 px-2.5 py-0.5 rounded-full border border-amber-200">
                        <AlertTriangle className="w-3 h-3 text-amber-700" />
                        <span>Skill to develop</span>
                      </span>
                    )}
                    {item.status === 'Priority' && (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-800 bg-rose-100/70 px-2.5 py-0.5 rounded-full border border-rose-200">
                        <span className="w-2 h-2 rounded-full bg-rose-600 animate-pulse" />
                        <span>Priority area</span>
                      </span>
                    )}

                    {/* Interactive Practice Button */}
                    <button
                      onClick={() => handleBoostSkill(item.name)}
                      className={`text-[11px] font-bold px-2.5 py-1 rounded-lg transition-all flex items-center gap-1 ${
                        isBoosted 
                          ? 'bg-emerald-600 text-white shadow-xs' 
                          : 'bg-white hover:bg-brand-50 text-brand-800 border border-brand-200 shadow-xs active:scale-95'
                      }`}
                      title="Simulate practicing this skill to level up your score"
                    >
                      <Zap className={`w-3 h-3 ${isBoosted ? 'animate-bounce' : 'text-brand-600'}`} />
                      <span>{isBoosted ? 'Leveled Up! +15%' : 'Practice +15%'}</span>
                    </button>
                  </div>
                </div>

                {/* Progress bar comparison */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-medium text-slate-600">
                    <span>
                      Current Level: <strong>{item.currentPercentage}%</strong>
                    </span>
                    <span>
                      Target Requirement: <strong>{item.targetPercentage}%</strong>
                    </span>
                  </div>

                  <div className="w-full bg-slate-200/80 rounded-full h-2.5 overflow-hidden relative">
                    {/* Target marker */}
                    <div 
                      className="absolute top-0 bottom-0 w-0.5 bg-slate-900/60 z-10" 
                      style={{ left: `${item.targetPercentage}%` }}
                      title={`Target benchmark: ${item.targetPercentage}%`}
                    />
                    {/* Current Fill */}
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        item.status === 'Strong' ? 'bg-emerald-500' :
                        item.status === 'Developing' ? 'bg-amber-500' : 'bg-rose-500'
                      }`}
                      style={{ width: `${item.currentPercentage}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* STEP 6: WHAT SHOULD I DO NEXT? ("Your Next Steps") */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-card border border-purple-100 space-y-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-brand-50 text-brand-800 border border-brand-200/60">
              <Zap className="w-4 h-4" />
            </span>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
              Your Next Steps
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Top recommended actions based on your skill gaps to help you build toward becoming a {currentCareerGoal.title}.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {currentCareerGoal.nextSteps.map((step) => (
            <div
              key={step.stepNumber}
              className="p-5 rounded-2xl bg-lavender-50/50 border border-purple-100 hover:border-brand-300 hover:bg-lavender-50 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-brand-400 group-hover:text-brand-700 transition-colors font-mono">
                    {step.stepNumber}
                  </span>
                  <span className="text-[10px] font-bold text-brand-800 bg-brand-100/70 px-2 py-0.5 rounded uppercase tracking-wider">
                    Recommended Action
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-brand-900 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {step.actionView && (
                <button
                  onClick={() => navigateTo(step.actionView!)}
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-brand-800 group-hover:text-brand-900 group-hover:underline transition-all"
                >
                  <span>{step.actionLabel || 'Proceed'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* STEP 3 DETAILED CAREER SECTIONS: A through H */}
      
      {/* SECTION A & B: CORE SKILLS & TECHNICAL SKILLS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* A. CORE SKILLS */}
        <div className="bg-white rounded-3xl p-6 shadow-card border border-purple-100 space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-purple-50">
            <span className="text-xs font-black text-brand-700 bg-brand-50 px-2 py-0.5 rounded">A</span>
            <h3 className="text-base font-bold text-slate-900">Core Skills</h3>
          </div>
          <p className="text-xs text-slate-500">
            Foundational cognitive and engineering competencies required for this role:
          </p>
          <ul className="space-y-2.5">
            {currentCareerGoal.coreSkills.map((skill) => (
              <li key={skill} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* B. TECHNICAL SKILLS */}
        <div className="bg-white rounded-3xl p-6 shadow-card border border-purple-100 space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-purple-50">
            <span className="text-xs font-black text-brand-700 bg-brand-50 px-2 py-0.5 rounded">B</span>
            <h3 className="text-base font-bold text-slate-900">Technical Skills</h3>
          </div>
          <p className="text-xs text-slate-500">
            Domain-specific methodologies, algorithms, and engineering disciplines:
          </p>
          <ul className="space-y-2.5">
            {currentCareerGoal.technicalSkills.map((tech) => (
              <li key={tech} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{tech}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* SECTION C & D: TOOLS & TECHNOLOGIES & SOFT SKILLS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* C. TOOLS & TECHNOLOGIES */}
        <div className="bg-white rounded-3xl p-6 shadow-card border border-purple-100 space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-purple-50">
            <span className="text-xs font-black text-brand-700 bg-brand-50 px-2 py-0.5 rounded">C</span>
            <h3 className="text-base font-bold text-slate-900">Tools &amp; Technologies</h3>
          </div>
          <p className="text-xs text-slate-500">
            Modern industry tool stack used daily by practitioners:
          </p>
          <div className="flex flex-wrap gap-2">
            {currentCareerGoal.toolsAndTechnologies.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1.5 rounded-xl bg-slate-50 border border-purple-100 text-xs font-semibold text-slate-800 hover:bg-lavender-50 transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* D. SOFT SKILLS */}
        <div className="bg-white rounded-3xl p-6 shadow-card border border-purple-100 space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-purple-50">
            <span className="text-xs font-black text-brand-700 bg-brand-50 px-2 py-0.5 rounded">D</span>
            <h3 className="text-base font-bold text-slate-900">Soft Skills &amp; Mindset</h3>
          </div>
          <p className="text-xs text-slate-500">
            Interpersonal and communication skills for high impact:
          </p>
          <ul className="space-y-2.5">
            {currentCareerGoal.softSkills.map((soft) => (
              <li key={soft} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                <span>{soft}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* SECTION E: EDUCATION & KNOWLEDGE */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-card border border-purple-100 space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-purple-50">
          <span className="text-xs font-black text-brand-700 bg-brand-50 px-2 py-0.5 rounded">E</span>
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-brand-700" />
            <span>Education &amp; Knowledge Areas</span>
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-600">
          Key theoretical subject domains and knowledge foundations relevant to this career:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          {currentCareerGoal.educationAndKnowledge.map((edu, idx) => {
            const isNote = edu.startsWith('Note:');
            return (
              <div 
                key={idx}
                className={`p-3.5 rounded-2xl border text-xs leading-relaxed ${
                  isNote 
                    ? 'sm:col-span-2 bg-lavender-50 border-purple-200 text-brand-900 font-semibold' 
                    : 'bg-slate-50/70 border-slate-100 text-slate-700 font-medium'
                }`}
              >
                {isNote ? (
                  <span>🎓 {edu}</span>
                ) : (
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-600" />
                    {edu}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* SECTION F: EXPERIENCE */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-card border border-purple-100 space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-purple-50">
          <span className="text-xs font-black text-brand-700 bg-brand-50 px-2 py-0.5 rounded">F</span>
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-brand-700" />
            <span>Useful Experience That Can Help</span>
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-600">
          Real-world activities and milestones students can pursue to stand out in interviews:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-1">
          {currentCareerGoal.experience.map((exp, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-lavender-50/40 border border-purple-100 text-xs text-slate-700 font-medium flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
              <span>{exp}</span>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION G: PORTFOLIO PROJECTS */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-card border border-purple-100 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-purple-50">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black text-brand-700 bg-brand-50 px-2 py-0.5 rounded">G</span>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <FolderGit2 className="w-4 h-4 text-brand-700" />
              <span>Recommended Portfolio Projects</span>
            </h3>
          </div>
          <span className="text-xs text-slate-500 font-medium">
            Build these to showcase hands-on mastery
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentCareerGoal.portfolioProjects.map((project, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:border-brand-300 hover:bg-white hover:shadow-subtle transition-all flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-sm font-bold text-slate-900">
                    {project.title}
                  </h4>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${
                    project.difficulty === 'Beginner' ? 'bg-emerald-100 text-emerald-800' :
                    project.difficulty === 'Intermediate' ? 'bg-amber-100 text-amber-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {project.difficulty}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                  Skills Practiced:
                </span>
                <div className="flex flex-wrap gap-1">
                  {project.skillsPracticed.map(skill => (
                    <span key={skill} className="text-[10px] font-semibold px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION H: OPTIONAL CERTIFICATIONS */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-card border border-purple-100 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-purple-50">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black text-brand-700 bg-brand-50 px-2 py-0.5 rounded">H</span>
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Award className="w-4 h-4 text-brand-700" />
              <span>Certifications (Optional)</span>
            </h3>
          </div>
          <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
            Optional Credentials
          </span>
        </div>

        <p className="text-xs text-slate-500">
          Certifications are strictly optional supplements to help validate your knowledge. Practical projects and demonstrated coding skills carry the highest value in hiring.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-1">
          {currentCareerGoal.optionalCertifications.map((cert, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-lavender-50/40 border border-purple-100 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-bold text-brand-700 uppercase tracking-wider">
                    {cert.provider}
                  </span>
                  <span className="text-[10px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.2 rounded border border-amber-200">
                    Optional
                  </span>
                </div>
                <h4 className="text-xs font-bold text-slate-900">
                  {cert.title}
                </h4>
                <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                  {cert.note}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA Banner linking to Roadmap & Skill Gap */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#5B3FD6] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-card">
        <div className="space-y-1 max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/15 text-purple-100 text-[11px] font-semibold border border-white/20 mb-1">
            <Sparkles className="w-3 h-3 text-purple-200" />
            <span>Growth Milestone</span>
          </div>
          <h3 className="text-lg sm:text-2xl font-bold text-white">
            Ready to build toward becoming a {currentCareerGoal.title}?
          </h3>
          <p className="text-xs sm:text-sm text-purple-100 leading-relaxed">
            Follow your personalized 5-phase career roadmap with step-by-step milestones, vetted learning courses, and practice challenges.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => {
              handleSetAsTarget(currentCareerGoal.id);
              navigateTo('roadmap');
            }}
            className="px-5 py-3 rounded-2xl bg-white text-[#5B3FD6] hover:bg-[#FAF8FF] text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95 flex items-center gap-2"
          >
            <span>View 5-Phase Roadmap</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
