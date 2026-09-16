import React from 'react';
import { 
  TrendingUp, 
  BarChart3, 
  Briefcase, 
  Zap, 
  ExternalLink, 
  AlertCircle, 
  CheckCircle2, 
  ArrowUpRight 
} from 'lucide-react';
import { 
  MARKET_TREND_SKILLS, 
  MARKET_TREND_ROLES 
} from '../../data/sampleData';
import { ProgressBar } from '../common/ProgressBar';
import { Badge } from '../common/Badge';

export const MarketTrendsView: React.FC = () => {
  return (
    <div className="space-y-8 pb-14">
      {/* Header */}
      <div className="pb-4 border-b border-purple-100/60">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Market Intelligence
          </h1>
          <Badge variant="purple" size="sm">Real-Time Telemetry</Badge>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Explore how live hiring demand, compensation growth, and enterprise adoption influence your career recommendations.
        </p>
      </div>

      {/* Indicative Disclaimer Alert */}
      <div className="p-4 rounded-2xl bg-lavender-50/80 border border-purple-100 text-xs text-slate-600 flex items-start gap-3">
        <AlertCircle className="w-4 h-4 text-brand-700 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold text-slate-900">Disclaimer: </span>
          <span>Market insights are indicative and synthesized from industry surveys and hiring trends. They should be validated against active job listings and official placement cell data.</span>
        </div>
      </div>

      {/* Two Column Visual: Trending Skills (Demand Bar Chart) vs Trending Roles */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left (6 cols): Trending Skills & Demand */}
        <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-7 shadow-card border border-purple-100 space-y-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-brand-700" />
              <h2 className="text-lg font-bold text-slate-900">
                Trending Skills &amp; Industry Demand
              </h2>
            </div>
            <span className="text-[11px] font-bold text-brand-800 bg-brand-50 px-2 py-0.5 rounded">
              Index %
            </span>
          </div>

          <p className="text-xs text-slate-500">
            Current technical disciplines exhibiting the steepest hiring surges across domestic &amp; global tech.
          </p>

          <div className="space-y-4 pt-2">
            {MARKET_TREND_SKILLS.map(skill => {
              return (
                <div key={skill.name} className="p-3.5 rounded-2xl bg-lavender-50/40 border border-purple-100/60 space-y-1.5">
                  <div className="flex justify-between items-center text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900">{skill.name}</span>
                      <span className="text-[10px] text-brand-700 font-semibold bg-brand-50 px-1.5 py-0.2 rounded border border-brand-100">
                        {skill.category}
                      </span>
                    </div>
                    <span className="font-extrabold text-emerald-600 text-[11px] flex items-center gap-0.5">
                      <ArrowUpRight className="w-3 h-3" />
                      {skill.growth}
                    </span>
                  </div>

                  <ProgressBar
                    value={skill.demandPercentage}
                    height="md"
                    color={skill.demandPercentage >= 90 ? 'purple' : skill.demandPercentage >= 80 ? 'blue' : 'emerald'}
                    showValueLabel={true}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Right (6 cols): Trending Roles in 2026 */}
        <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-7 shadow-card border border-purple-100 space-y-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-brand-700" />
              <h2 className="text-lg font-bold text-slate-900">
                Top Emerging Tech Roles
              </h2>
            </div>
            <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
              High Growth
            </span>
          </div>

          <p className="text-xs text-slate-500">
            Roles with highest placement volume and competitive graduate starting salaries.
          </p>

          <div className="space-y-3.5 pt-2">
            {MARKET_TREND_ROLES.map(role => {
              return (
                <div
                  key={role.title}
                  className="p-4 rounded-2xl bg-white border border-purple-100 shadow-subtle hover:border-brand-300 hover:shadow-card-hover transition-all space-y-2"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">{role.title}</h3>
                      <span className="text-[11px] text-slate-500">{role.openings}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                        {role.growthPercentage} YoY
                      </span>
                      <p className="text-[10px] text-slate-400 font-semibold mt-0.5">{role.salaryAvg}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {role.topSkills.map(sk => (
                      <span key={sk} className="text-[10px] font-semibold px-2 py-0.5 bg-lavender-50 text-slate-700 rounded-md border border-purple-100">
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
