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
      <div className="pb-4 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl sm:text-3xl font-black text-[#292631] tracking-tight">
            Market Intelligence
          </h1>
          <Badge variant="purple" size="sm">Real-Time Telemetry</Badge>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Explore how live hiring demand, compensation growth, and enterprise adoption influence your career recommendations.
        </p>
      </div>

      {/* Indicative Disclaimer Alert */}
      <div className="p-4 rounded-2xl bg-[#F0ECFF] border border-[#5B3FD6]/20 text-xs text-[#292631] flex items-start gap-3">
        <AlertCircle className="w-4 h-4 text-[#5B3FD6] shrink-0 mt-0.5" />
        <div>
          <span className="font-bold text-[#292631]">Disclaimer: </span>
          <span>Market insights are indicative and synthesized from industry surveys and hiring trends. They should be validated against active job listings and official placement cell data.</span>
        </div>
      </div>

      {/* Two Column Visual: Trending Skills (Demand Bar Chart) vs Trending Roles */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left (6 cols): Trending Skills & Demand */}
        <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-7 shadow-card border border-slate-200 space-y-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-[#5B3FD6]" />
              <h2 className="text-lg font-bold text-[#292631]">
                Trending Skills &amp; Industry Demand
              </h2>
            </div>
            <span className="text-[11px] font-bold text-[#5B3FD6] bg-[#F0ECFF] px-2 py-0.5 rounded">
              Index %
            </span>
          </div>

          <p className="text-xs text-slate-500">
            Current technical disciplines exhibiting the steepest hiring surges across domestic &amp; global tech.
          </p>

          <div className="space-y-4 pt-2">
            {MARKET_TREND_SKILLS.map(skill => {
              return (
                <div key={skill.name} className="p-3.5 rounded-2xl bg-[#F0ECFF]/30 border border-[#F0ECFF] space-y-1.5">
                  <div className="flex justify-between items-center text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-[#292631]">{skill.name}</span>
                      <span className="text-[10px] text-[#5B3FD6] font-semibold bg-[#F0ECFF] px-1.5 py-0.2 rounded border border-[#5B3FD6]/20">
                        {skill.category}
                      </span>
                    </div>
                    <span className="font-extrabold text-[#6FAF8B] text-[11px] flex items-center gap-0.5">
                      <ArrowUpRight className="w-3 h-3" />
                      {skill.growth}
                    </span>
                  </div>

                  <ProgressBar
                    value={skill.demandPercentage}
                    height="md"
                    color={skill.demandPercentage >= 90 ? 'purple' : skill.demandPercentage >= 80 ? 'blue' : 'green'}
                    showValueLabel={true}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Right (6 cols): Trending Roles in 2026 */}
        <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-7 shadow-card border border-slate-200 space-y-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-[#5B3FD6]" />
              <h2 className="text-lg font-bold text-[#292631]">
                Top Emerging Tech Roles
              </h2>
            </div>
            <span className="text-[11px] font-bold text-[#6FAF8B] bg-[#E4F3EA] px-2 py-0.5 rounded">
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
                  className="p-4 rounded-2xl bg-white border border-slate-200 shadow-subtle hover:border-[#5B3FD6]/40 hover:shadow-card-hover transition-all space-y-2"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-[#292631]">{role.title}</h3>
                      <span className="text-[11px] text-slate-500">{role.openings}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-black text-[#6FAF8B] bg-[#E4F3EA] px-2.5 py-0.5 rounded-full border border-[#6FAF8B]/30">
                        {role.growthPercentage} YoY
                      </span>
                      <p className="text-[10px] text-slate-400 font-semibold mt-0.5">{role.salaryAvg}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {role.topSkills.map(sk => (
                      <span key={sk} className="text-[10px] font-semibold px-2 py-0.5 bg-[#F0ECFF] text-[#292631] rounded-md border border-[#5B3FD6]/15">
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
