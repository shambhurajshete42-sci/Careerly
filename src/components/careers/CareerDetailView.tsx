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
                ? 'bg-[#E4F3EA] text-[#292631] border border-[#6FAF8B]'
                : 'bg-[#F0ECFF] hover:bg-[#5B3FD6] hover:text-white text-[#5B3FD6] border border-[#5B3FD6]/30'
            }`}
          >
            {isCurrentTarget ? '✓ Active Target Career' : 'Set as My Target Career'}
          </button>
          <button
            onClick={() => navigateTo('roadmap')}
            className="px-4 py-2 rounded-xl bg-[#5B3FD6] hover:bg-[#4b32b8] text-white text-xs font-bold shadow-xs flex items-center gap-1.5 transition-all"
          >
            <span>Open Learning Roadmap</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Hero Header Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-card border border-[#F0ECFF] relative overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Career Intelligence Blueprint
              </span>
              <Badge variant="purple" size="sm">AI Evaluated</Badge>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-[#292631] tracking-tight">
              {career.title}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
              {career.description}
            </p>
          </div>

          <div className="flex items-center gap-4 bg-[#F0ECFF] p-4 sm:p-5 rounded-2xl border border-[#5B3FD6]/20 shrink-0">
            <div className="text-center">
              <span className="text-3xl sm:text-4xl font-black text-[#5B3FD6]">
                {career.matchPercentage}%
              </span>
              <p className="text-[11px] font-bold text-[#5B3FD6] uppercase tracking-wider mt-0.5">
                Profile Match
              </p>
            </div>
            <div className="h-10 w-px bg-[#5B3FD6]/20" />
            <div className="text-xs space-y-1">
              <div className="flex items-center gap-1.5 text-[#292631] font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-[#6FAF8B]"></span>
                <span>Demand: <strong>{career.marketDemand}</strong></span>
              </div>
              <div className="text-slate-600">
                Growth: <strong className="text-[#5B3FD6]">{career.growthRate}</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-100 text-xs">
          <div className="p-3.5 rounded-xl bg-[#F7F3EA]/70 border border-slate-200/60">
            <span className="text-slate-500 font-medium block text-[11px]">Salary Benchmark (Demo):</span>
            <span className="text-[#292631] font-bold text-sm">{career.salaryRange}</span>
          </div>
          <div className="p-3.5 rounded-xl bg-[#F7F3EA]/70 border border-slate-200/60">
            <span className="text-slate-500 font-medium block text-[11px]">Core Discipline:</span>
            <span className="text-[#292631] font-bold text-sm">Computer Science &amp; Applied AI</span>
          </div>
          <div className="p-3.5 rounded-xl bg-[#F7F3EA]/70 border border-slate-200/60">
            <span className="text-slate-500 font-medium block text-[11px]">Readiness Velocity:</span>
            <span className="text-[#5B3FD6] font-bold text-sm">Estimated 4–6 Months to Job Ready</span>
          </div>
        </div>
      </div>

      {/* Visual Skill Comparison: YOUR LEVEL vs TARGET LEVEL */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-card border border-[#F0ECFF] space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-xl font-bold text-[#292631]">
              Visual Skill Comparison
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Side-by-side benchmark of your current capability against market target proficiency.
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs font-semibold">
            <span className="flex items-center gap-1.5 text-[#5B3FD6]">
              <span className="w-3 h-3 rounded-full bg-[#5B3FD6]"></span>
              YOUR CURRENT LEVEL
            </span>
            <span className="flex items-center gap-1.5 text-slate-500">
              <span className="w-3 h-3 rounded-full bg-[#F0ECFF] border border-[#5B3FD6]"></span>
              TARGET INDUSTRY LEVEL
            </span>
          </div>
        </div>

        <div className="space-y-5 pt-2">
          {career.skills.map(skill => {
            return (
              <div key={skill.name} className="p-4 rounded-2xl bg-[#F0ECFF]/30 border border-[#F0ECFF] space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#292631] text-sm">{skill.name}</span>
                    <Badge 
                      variant={skill.gap === 'High' ? 'gold' : skill.gap === 'Moderate' ? 'blue' : 'green'} 
                      size="sm"
                    >
                      {skill.gap} Gap
                    </Badge>
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    Current: <strong className="text-[#5B3FD6]">{skill.currentLevel} ({skill.currentPercentage}%)</strong>
                    <span className="mx-2">→</span>
                    Target: <strong className="text-[#292631]">{skill.targetLevel} ({skill.targetPercentage}%)</strong>
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
                  <span>Recommended Focus: <strong className="text-[#292631]">{skill.recommendedResource}</strong></span>
                  <button
                    onClick={() => navigateTo('learning')}
                    className="font-bold text-[#5B3FD6] hover:text-[#4b32b8] transition-colors"
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
          <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-card border border-[#F0ECFF] space-y-3">
            <h3 className="text-base font-bold text-[#292631]">
              Role Overview &amp; Day-to-Day
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {career.overview}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-card border border-[#F0ECFF] space-y-3">
            <div className="flex items-center gap-2 text-[#5B3FD6]">
              <TrendingUp className="w-5 h-5 text-[#5B3FD6]" />
              <h3 className="text-base font-bold text-[#292631]">
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
          <div className="bg-white rounded-3xl p-6 shadow-card border border-[#F0ECFF] space-y-4">
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-[#5B3FD6]" />
              <h3 className="text-base font-bold text-[#292631]">
                Possible Job Titles
              </h3>
            </div>
            <div className="space-y-2">
              {career.possibleRoles.map((role, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-[#F0ECFF]/40 border border-[#F0ECFF] text-xs font-semibold text-[#292631] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5B3FD6]"></span>
                  <span>{role}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#5B3FD6] text-white rounded-3xl p-6 shadow-card space-y-3">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white/20 text-white">
              Action Plan
            </span>
            <h4 className="font-bold text-sm">Close Your Skill Gap</h4>
            <p className="text-xs text-[#F0ECFF] leading-relaxed">
              See the personalized step-by-step roadmap designed specifically for this career pathway.
            </p>
            <button
              onClick={() => navigateTo('roadmap')}
              className="w-full mt-2 py-2.5 bg-white text-[#5B3FD6] rounded-xl font-bold text-xs hover:bg-[#F0ECFF] transition-colors shadow-xs"
            >
              Start Roadmap Phase 2
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
