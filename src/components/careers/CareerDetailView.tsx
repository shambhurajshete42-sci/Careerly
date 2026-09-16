import React from 'react';
import { 
  ArrowLeft, 
  Sparkles, 
  TrendingUp, 
  Compass, 
  Check, 
  SplitSquareVertical, 
  Milestone, 
  Briefcase, 
  DollarSign,
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ProgressBar } from '../common/ProgressBar';
import { Badge } from '../common/Badge';

export const CareerDetailView: React.FC = () => {
  const { 
    careers, 
    selectedCareerId, 
    student, 
    setTargetCareer, 
    navigateTo 
  } = useApp();

  const career = careers.find(c => c.id === selectedCareerId) || careers[0];
  const isCurrentTarget = career.id === student.targetCareerId;

  return (
    <div className="space-y-8 pb-14">
      {/* Back button & top bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <button
          onClick={() => navigateTo('career-explorer')}
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-brand-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Career Explorer</span>
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setTargetCareer(career.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              isCurrentTarget
                ? 'bg-emerald-50 text-emerald-800 border border-emerald-300'
                : 'bg-brand-50 hover:bg-brand-100 text-brand-800 border border-brand-200'
            }`}
          >
            {isCurrentTarget ? '✓ Active Target Career' : 'Set as My Target Career'}
          </button>
          <button
            onClick={() => navigateTo('roadmap')}
            className="px-4 py-2 rounded-xl bg-brand-800 hover:bg-brand-900 text-white text-xs font-bold shadow-subtle flex items-center gap-1.5 transition-all"
          >
            <span>Open Learning Roadmap</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Hero Header Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-card border border-purple-100 relative overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Career Intelligence Blueprint
              </span>
              <Badge variant="purple" size="sm">AI Evaluated</Badge>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {career.title}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-2 max-w-2xl leading-relaxed">
              {career.description}
            </p>
          </div>

          <div className="flex items-center gap-4 bg-lavender-50/80 p-4 sm:p-5 rounded-2xl border border-purple-100 shrink-0">
            <div className="text-center">
              <span className="text-3xl sm:text-4xl font-black text-brand-900">
                {career.matchPercentage}%
              </span>
              <p className="text-[11px] font-bold text-brand-700 uppercase tracking-wider mt-0.5">
                Profile Match
              </p>
            </div>
            <div className="h-10 w-px bg-purple-200" />
            <div className="text-xs space-y-1">
              <div className="flex items-center gap-1.5 text-slate-700 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Demand: <strong>{career.marketDemand}</strong></span>
              </div>
              <div className="text-slate-500">
                Growth: <strong className="text-brand-900">{career.growthRate}</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-purple-50 text-xs">
          <div className="p-3.5 rounded-xl bg-slate-50/80">
            <span className="text-slate-400 font-medium block text-[11px]">Salary Benchmark (Demo):</span>
            <span className="text-slate-800 font-bold text-sm">{career.salaryRange}</span>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50/80">
            <span className="text-slate-400 font-medium block text-[11px]">Core Discipline:</span>
            <span className="text-slate-800 font-bold text-sm">Computer Science &amp; Applied AI</span>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50/80">
            <span className="text-slate-400 font-medium block text-[11px]">Readiness Velocity:</span>
            <span className="text-brand-800 font-bold text-sm">Estimated 4–6 Months to Job Ready</span>
          </div>
        </div>
      </div>

      {/* Visual Skill Comparison: YOUR LEVEL vs TARGET LEVEL */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-card border border-purple-100 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Visual Skill Comparison
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Side-by-side benchmark of your current capability against market target proficiency.
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs font-semibold">
            <span className="flex items-center gap-1.5 text-brand-800">
              <span className="w-3 h-3 rounded-full bg-brand-700"></span>
              YOUR CURRENT LEVEL
            </span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <span className="w-3 h-3 rounded-full bg-brand-200 border border-brand-800"></span>
              TARGET INDUSTRY LEVEL
            </span>
          </div>
        </div>

        <div className="space-y-5 pt-2">
          {career.skills.map(skill => {
            return (
              <div key={skill.name} className="p-4 rounded-2xl bg-lavender-50/40 border border-purple-100/70 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900 text-sm">{skill.name}</span>
                    <Badge 
                      variant={skill.gap === 'High' ? 'gold' : skill.gap === 'Moderate' ? 'blue' : 'green'} 
                      size="sm"
                    >
                      {skill.gap} Gap
                    </Badge>
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    Current: <strong className="text-brand-800">{skill.currentLevel} ({skill.currentPercentage}%)</strong>
                    <span className="mx-2">→</span>
                    Target: <strong className="text-slate-800">{skill.targetLevel} ({skill.targetPercentage}%)</strong>
                  </div>
                </div>

                <ProgressBar
                  value={skill.currentPercentage}
                  targetValue={skill.targetPercentage}
                  height="md"
                  color={skill.currentPercentage >= 70 ? 'green' : skill.currentPercentage >= 40 ? 'purple' : 'amber'}
                  showValueLabel={false}
                />

                <div className="flex items-center justify-between pt-1 text-[11px] text-slate-500">
                  <span>Recommended Focus: <strong className="text-slate-700">{skill.recommendedResource}</strong></span>
                  <button
                    onClick={() => navigateTo('learning')}
                    className="font-bold text-brand-700 hover:text-brand-900"
                  >
                    Find Courses →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Grid: Overview & Market Outlook & Possible Roles */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left (8 cols): Overview & Market Outlook */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-card border border-purple-100 space-y-3">
            <h3 className="text-base font-bold text-slate-900">
              Role Overview &amp; Day-to-Day
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {career.overview}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-card border border-purple-100 space-y-3">
            <div className="flex items-center gap-2 text-brand-800">
              <TrendingUp className="w-5 h-5 text-brand-700" />
              <h3 className="text-base font-bold text-slate-900">
                Market Outlook &amp; Hiring Trajectory
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {career.marketOutlook}
            </p>
          </div>
        </div>

        {/* Right (4 cols): Possible Roles & Next Steps */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-3xl p-6 shadow-card border border-purple-100 space-y-4">
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-brand-700" />
              <h3 className="text-base font-bold text-slate-900">
                Possible Job Titles
              </h3>
            </div>
            <div className="space-y-2">
              {career.possibleRoles.map((role, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-lavender-50/50 border border-purple-100/60 text-xs font-semibold text-slate-800 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-600"></span>
                  <span>{role}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-brand-900 to-purple-900 text-white rounded-3xl p-6 shadow-card space-y-3">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-brand-500/30 text-purple-200">
              Action Plan
            </span>
            <h4 className="font-bold text-sm">Close Your Skill Gap</h4>
            <p className="text-xs text-purple-200 leading-relaxed">
              See the personalized step-by-step roadmap designed specifically for this career pathway.
            </p>
            <button
              onClick={() => navigateTo('roadmap')}
              className="w-full mt-2 py-2.5 bg-white text-brand-950 rounded-xl font-bold text-xs hover:bg-purple-50 transition-colors shadow-sm"
            >
              Start Roadmap Phase 2
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
