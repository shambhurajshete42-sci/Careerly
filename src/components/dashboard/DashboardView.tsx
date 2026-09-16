import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Compass, 
  SplitSquareVertical, 
  Milestone, 
  TrendingUp, 
  Award, 
  CheckCircle2, 
  AlertCircle,
  ExternalLink,
  Bot,
  Zap,
  Target
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { CircularProgress } from '../common/CircularProgress';
import { Badge } from '../common/Badge';
import { ProgressBar } from '../common/ProgressBar';

export const DashboardView: React.FC = () => {
  const { 
    student, 
    careers, 
    activeTargetCareer, 
    careerReadinessScore, 
    navigateTo, 
    setAssistantOpen 
  } = useApp();

  const primaryCareer = careers[0]; // AI/ML Engineer
  const alternativeCareers = careers.slice(1, 4);

  return (
    <div className="space-y-8 pb-12">
      {/* Top Welcome Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-purple-100/60">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Good morning, {student.name.split(' ')[0]} 👋
            </h1>
            <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-brand-50 text-brand-800 border border-brand-200/60">
              <Sparkles className="w-3 h-3 text-brand-600" />
              AI Evaluated
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Here's your personalized career intelligence based on your skills, interests, and current market trends.
          </p>
        </div>

        {/* AI Assistant Quick Pill */}
        <button
          onClick={() => setAssistantOpen(true)}
          className="self-start sm:self-auto inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-50 hover:bg-brand-100 text-brand-800 text-xs font-bold border border-brand-200/80 transition-all shadow-subtle hover:scale-105"
        >
          <Bot className="w-4 h-4 text-brand-700" />
          <span>Ask Careerly AI</span>
        </button>
      </div>

      {/* Main Readiness & Direction Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Card 1: Career Readiness Score (4 cols) */}
        <div className="lg:col-span-4 bg-white rounded-3xl p-6 sm:p-7 shadow-card border border-purple-100 flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Profile Readiness
            </span>
            <Badge variant="purple" size="sm">Live Metric</Badge>
          </div>

          <div className="py-6 flex flex-col items-center justify-center">
            <CircularProgress 
              percentage={careerReadinessScore} 
              size={150} 
              strokeWidth={13} 
              label="Readiness"
              sublabel="Towards Target Career"
              color="#6b21a8"
            />
          </div>

          <div className="pt-4 border-t border-purple-50 space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-slate-500">Skill Competency:</span>
              <span className="font-semibold text-slate-800">Advanced in Logic / Python</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-slate-500">Roadmap Progress:</span>
              <span className="font-semibold text-brand-700">Phase 2 In-Progress</span>
            </div>
            <button
              onClick={() => navigateTo('skill-gap')}
              className="w-full mt-2 py-2 bg-lavender-50 hover:bg-lavender-100 text-brand-800 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
            >
              <span>View Skill Gaps</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Card 2: Primary Career Recommendation (8 cols) */}
        <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-7 shadow-card border border-purple-100 flex flex-col justify-between relative">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Your Career Direction
                </span>
                <span className="text-[11px] font-medium text-slate-400">
                  (Based on your profile)
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-0.5">
                {primaryCareer.title}
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#5B3FD6] bg-[#F0ECFF] px-3 py-1 rounded-full border border-[#DDD5FF]">
                Primary Recommendation
              </span>
              <span className="text-sm font-extrabold text-[#36644B] bg-[#E4F3EA] px-3 py-1 rounded-full border border-[#CEE8D8]">
                {primaryCareer.matchPercentage}% AI Match
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-charcoal-200 leading-relaxed mb-5">
            {primaryCareer.description}
          </p>

          {/* Quick Skill Coverage Mini Bar */}
          <div className="p-4 rounded-2xl bg-[#FAF7F0] border border-beige-200 space-y-3 mb-5">
            <div className="flex justify-between items-center text-xs font-semibold text-charcoal">
              <span>Skill Alignment for this Role:</span>
              <span className="text-[#5B3FD6] font-bold">4 of 6 core domains ready</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div>
                <span className="text-[11px] text-charcoal-100 font-medium">Python</span>
                <ProgressBar value={70} height="sm" color="purple" showValueLabel={false} />
              </div>
              <div>
                <span className="text-[11px] text-charcoal-100 font-medium">Problem Solving</span>
                <ProgressBar value={85} height="sm" color="green" showValueLabel={false} />
              </div>
              <div>
                <span className="text-[11px] text-charcoal-100 font-medium">ML Fundamentals</span>
                <ProgressBar value={40} height="sm" color="amber" showValueLabel={false} />
              </div>
              <div>
                <span className="text-[11px] text-charcoal-100 font-medium">Model Deploy</span>
                <ProgressBar value={20} height="sm" color="purple" showValueLabel={false} />
              </div>
            </div>
          </div>

          {/* Bottom Highlights & Action */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div className="flex items-center gap-4 text-xs text-charcoal-100">
              <span className="flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-[#6FAF8B]"></span>
                Market Demand: <strong className="text-charcoal">{primaryCareer.marketDemand}</strong>
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <TrendingUp className="w-3.5 h-3.5 text-[#5B3FD6]" />
                Est. Entry: <strong className="text-charcoal">₹14 - 32 LPA</strong>
              </span>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={() => navigateTo('career-detail', primaryCareer.id)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#5B3FD6] hover:bg-[#4E34BF] text-white font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <span>View Full Career Breakdown</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Career Goal Planner Banner */}
      <div className="p-5 rounded-3xl bg-[#F0ECFF] border border-[#DDD5FF] shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-white border border-[#DDD5FF] flex items-center justify-center text-[#5B3FD6] shrink-0 shadow-subtle">
            <Target className="w-6 h-6 text-[#5B3FD6]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#5B3FD6] bg-white px-2 py-0.5 rounded border border-[#DDD5FF]">
                Goal Planner
              </span>
              <span className="text-[10px] bg-[#E4F3EA] text-[#36644B] px-2 py-0.5 rounded-full font-semibold border border-[#CEE8D8] flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5 text-[#6FAF8B]" />
                Student-Driven
              </span>
            </div>
            <h3 className="text-sm sm:text-base font-bold text-[#292631] mt-1">
              Have a specific dream career in mind?
            </h3>
            <p className="text-xs text-charcoal-200">
              Say "I want to become a Data Scientist" or choose from 10+ roles to see exact requirements and benchmarks.
            </p>
          </div>
        </div>
        <button
          onClick={() => navigateTo('career-goal-planner')}
          className="px-4 py-2.5 rounded-xl bg-[#5B3FD6] hover:bg-[#4E34BF] text-white text-xs font-bold transition-all shrink-0 flex items-center justify-center gap-2 shadow-sm active:scale-95"
        >
          <span>Open Goal Planner</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Alternative Career Paths Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Alternative Career Fits
            </h3>
            <p className="text-xs text-slate-500">
              Other viable career paths where your skills and interests translate strongly.
            </p>
          </div>
          <button
            onClick={() => navigateTo('career-explorer')}
            className="text-xs font-bold text-brand-700 hover:text-brand-900 flex items-center gap-1"
          >
            <span>Explore all careers</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {alternativeCareers.map(career => {
            return (
              <div
                key={career.id}
                className="bg-white rounded-2xl p-5 shadow-subtle hover:shadow-card-hover border border-purple-100 hover:border-brand-200 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Potential Fit
                    </span>
                    <span className="text-xs font-extrabold text-brand-800 bg-brand-50 px-2 py-0.5 rounded-full border border-brand-200">
                      {career.matchPercentage}% Match
                    </span>
                  </div>
                  <h4 className="font-bold text-slate-900 group-hover:text-brand-900 transition-colors">
                    {career.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
                    {career.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500">Demand: <strong className="text-slate-700">{career.marketDemand}</strong></span>
                  <button
                    onClick={() => navigateTo('career-detail', career.id)}
                    className="font-bold text-brand-700 hover:text-brand-900 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Inspect</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Two Column Section: Skill Gap Callout & Roadmap Snapshot */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Immediate Focus & Skill Gaps */}
        <div className="lg:col-span-6 bg-white rounded-3xl p-6 shadow-card border border-purple-100 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <SplitSquareVertical className="w-5 h-5 text-brand-700" />
              <h3 className="font-bold text-slate-900">Highest-Priority Skill Gaps</h3>
            </div>
            <button
              onClick={() => navigateTo('skill-gap')}
              className="text-xs font-semibold text-brand-700 hover:underline"
            >
              Analyze All
            </button>
          </div>

          <p className="text-xs text-slate-500">
            Closing these three competencies will unlock your next +15% career readiness milestone:
          </p>

          <div className="space-y-3 pt-1">
            <div className="p-3.5 rounded-xl bg-lavender-50/60 border border-purple-100/70 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-900">Machine Learning</span>
                  <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-1.5 py-0.2 rounded">High Gap</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5">Scikit-learn, classification &amp; regression</p>
              </div>
              <button
                onClick={() => navigateTo('learning')}
                className="text-xs font-bold text-brand-700 bg-white border border-purple-200 px-3 py-1.5 rounded-lg hover:bg-brand-50 transition-colors"
              >
                Learn
              </button>
            </div>

            <div className="p-3.5 rounded-xl bg-lavender-50/60 border border-purple-100/70 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-900">Deep Learning &amp; PyTorch</span>
                  <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-1.5 py-0.2 rounded">High Gap</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5">Neural networks, transformers &amp; attention</p>
              </div>
              <button
                onClick={() => navigateTo('learning')}
                className="text-xs font-bold text-brand-700 bg-white border border-purple-200 px-3 py-1.5 rounded-lg hover:bg-brand-50 transition-colors"
              >
                Learn
              </button>
            </div>

            <div className="p-3.5 rounded-xl bg-lavender-50/60 border border-purple-100/70 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-900">Model Deployment (MLOps)</span>
                  <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-1.5 py-0.2 rounded">High Gap</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5">FastAPI, Docker &amp; Cloud Inference</p>
              </div>
              <button
                onClick={() => navigateTo('learning')}
                className="text-xs font-bold text-brand-700 bg-white border border-purple-200 px-3 py-1.5 rounded-lg hover:bg-brand-50 transition-colors"
              >
                Learn
              </button>
            </div>
          </div>
        </div>

        {/* Right: Personalized Roadmap Snapshot */}
        <div className="lg:col-span-6 bg-white rounded-3xl p-6 shadow-card border border-purple-100 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Milestone className="w-5 h-5 text-brand-700" />
              <h3 className="font-bold text-slate-900">Active Roadmap Milestones</h3>
            </div>
            <button
              onClick={() => navigateTo('roadmap')}
              className="text-xs font-semibold text-brand-700 hover:underline"
            >
              Full Roadmap
            </button>
          </div>

          <p className="text-xs text-slate-500">
            You are currently on <strong>Phase 2: Core Machine Learning &amp; Data</strong>
          </p>

          <div className="p-4 rounded-2xl bg-lavender-50/50 border border-purple-100 space-y-2.5">
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="text-slate-800">Phase 2 Completion</span>
              <span className="text-brand-800">55%</span>
            </div>
            <ProgressBar value={55} height="sm" color="purple" showValueLabel={false} />
            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="line-through text-slate-400">Numpy, Pandas &amp; Exploratory Data Pipeline</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="line-through text-slate-400">Regression &amp; Clustering with Scikit-Learn</span>
              </div>
              <div className="flex items-center gap-2 text-slate-900 font-semibold">
                <div className="w-4 h-4 rounded-full border-2 border-brand-700 shrink-0 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-brand-700 rounded-full"></div>
                </div>
                <span>Hypothesis Testing &amp; Cross-Validation Evaluation</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => navigateTo('roadmap')}
            className="w-full py-2.5 bg-brand-800 hover:bg-brand-900 text-white rounded-xl text-xs font-bold transition-all shadow-subtle flex items-center justify-center gap-2"
          >
            <span>Open Interactive Roadmap</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
