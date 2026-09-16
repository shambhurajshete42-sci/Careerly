import React, { useState } from 'react';
import { 
  Compass, 
  ArrowRight, 
  TrendingUp, 
  Check, 
  AlertTriangle, 
  Filter, 
  Sparkles,
  DollarSign
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ProgressBar } from '../common/ProgressBar';
import { Badge } from '../common/Badge';

export const CareerExplorerView: React.FC = () => {
  const { careers, navigateTo, setTargetCareer, student } = useApp();
  const [filter, setFilter] = useState<'All' | 'High Match' | 'Very High Demand'>('All');

  const filteredCareers = careers.filter(c => {
    if (filter === 'High Match') return c.matchPercentage >= 80;
    if (filter === 'Very High Demand') return c.marketDemand === 'Very High';
    return true;
  });

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-purple-100/60">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Career Explorer
            </h1>
            <span className="text-xs font-bold text-brand-800 bg-brand-50 px-2.5 py-0.5 rounded-full border border-brand-200">
              AI Matching
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Discover potential roles computed against your skills, strengths, and live industry requirements.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex items-center gap-2">
          {(['All', 'High Match', 'Very High Demand'] as const).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                filter === f
                  ? 'bg-brand-800 text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-purple-100 hover:bg-lavender-50'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Note about AI match */}
      <div className="p-3.5 rounded-2xl bg-lavender-50/70 border border-purple-100 text-xs text-slate-600 flex items-center justify-between">
        <span>
          💡 <strong>Note:</strong> Career matches are indicative fit estimates powered by AI analysis of your student profile and job market telemetry.
        </span>
        <span className="hidden md:inline font-semibold text-brand-800">
          Current Target: {careers.find(c => c.id === student.targetCareerId)?.title || 'AI/ML Engineer'}
        </span>
      </div>

      {/* Career Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCareers.map(career => {
          const isCurrentTarget = career.id === student.targetCareerId;

          return (
            <div
              key={career.id}
              className={`bg-white rounded-3xl p-6 shadow-card hover:shadow-card-hover border transition-all duration-300 flex flex-col justify-between relative group ${
                isCurrentTarget ? 'border-brand-500 ring-2 ring-purple-100' : 'border-purple-100 hover:border-brand-300'
              }`}
            >
              <div>
                {/* Card Header */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        {isCurrentTarget ? 'Active Target Career' : 'Potential Fit'}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-900 transition-colors mt-0.5">
                      {career.title}
                    </h3>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-lg font-black text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                      {career.matchPercentage}%
                    </span>
                    <p className="text-[10px] text-slate-400 font-semibold mt-1">AI Match</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {career.description}
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-2 p-3 bg-slate-50/70 rounded-xl mb-4 text-xs">
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Market Demand:</span>
                    <strong className="text-slate-800 font-bold">{career.marketDemand}</strong>
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Est. Salary (Demo Data):</span>
                    <strong className="text-brand-900 font-bold truncate block">{career.salaryRange.split('/')[0]}</strong>
                  </div>
                </div>

                {/* Skill Match Coverage Bars */}
                <div className="space-y-2.5 mb-5">
                  <span className="text-xs font-bold text-slate-700 block">Your Skill Coverage:</span>
                  {career.skills.slice(0, 3).map(skill => (
                    <div key={skill.name}>
                      <ProgressBar
                        label={skill.name}
                        value={skill.currentPercentage}
                        targetValue={skill.targetPercentage}
                        height="sm"
                        color={skill.currentPercentage >= 70 ? 'green' : skill.currentPercentage >= 45 ? 'purple' : 'amber'}
                      />
                    </div>
                  ))}
                </div>

                {/* Why This Matches You */}
                <div className="p-3.5 rounded-2xl bg-lavender-50/50 border border-purple-100/60 text-xs space-y-1.5 mb-5">
                  <span className="font-bold text-slate-800 block text-[11px] uppercase tracking-wider">
                    Why this matches you:
                  </span>
                  {career.whyMatch.strengths.slice(0, 2).map((str, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-slate-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{str}</span>
                    </div>
                  ))}
                  {career.whyMatch.gaps.slice(0, 1).map((gap, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-slate-600">
                      <span className="text-amber-600 font-bold shrink-0">△</span>
                      <span>{gap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => {
                    setTargetCareer(career.id);
                  }}
                  className={`text-xs font-bold px-3 py-2 rounded-xl border transition-all ${
                    isCurrentTarget
                      ? 'bg-brand-50 text-brand-800 border-brand-300 cursor-default'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {isCurrentTarget ? '✓ Selected as Target' : 'Set as My Target'}
                </button>

                <button
                  onClick={() => navigateTo('career-detail', career.id)}
                  className="px-4 py-2 rounded-xl bg-brand-800 hover:bg-brand-900 text-white font-bold text-xs shadow-subtle flex items-center gap-1.5 transition-all"
                >
                  <span>View Career</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
