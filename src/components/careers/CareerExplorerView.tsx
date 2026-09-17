import React, { useState } from 'react';
import { 
  ArrowRight, 
  Check, 
  Sparkles,
  Search
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const CareerExplorerView: React.FC = () => {
  const { careers, navigateTo, student } = useApp();
  const [filter, setFilter] = useState<'All' | 'High Match' | 'Very High Demand'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCareers = careers.filter(c => {
    const matchesFilter = 
      filter === 'High Match' ? c.matchPercentage >= 80 :
      filter === 'Very High Demand' ? c.marketDemand === 'Very High' : true;

    const matchesSearch = 
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.skills.some(s => s.name.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-beige-200">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-black text-[#292631] tracking-tight">
              Career Explorer
            </h1>
            <span className="text-xs font-bold text-[#5B3FD6] bg-[#F0ECFF] px-2.5 py-0.5 rounded-full border border-[#DDD5FF]">
              Discovery
            </span>
          </div>
          <p className="text-xs sm:text-sm text-charcoal-100 mt-1">
            Explore potential career paths based on your skills, interests, and industry demand.
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
                  ? 'bg-[#5B3FD6] text-white shadow-xs'
                  : 'bg-white text-charcoal-200 border border-beige-200 hover:bg-[#F0ECFF] hover:text-[#5B3FD6]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Helpful Guidance Banner */}
      <div className="p-3.5 rounded-2xl bg-[#F0ECFF] border border-[#DDD5FF] text-xs text-charcoal flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <span>
          💡 <strong>Tip:</strong> Match scores represent potential fit based on your profile. Click any career to see complete requirements, skill gaps, and project roadmaps.
        </span>
        <button
          onClick={() => navigateTo('career-goal-planner')}
          className="text-xs font-bold text-[#5B3FD6] hover:underline shrink-0 text-left sm:text-right"
        >
          Have a specific target? Use Goal Planner →
        </button>
      </div>

      {/* Simplified Career Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredCareers.map(career => {
          const isCurrentTarget = career.id === student.targetCareerId;
          const keySkillsText = career.skills.slice(0, 3).map(s => s.name).join(' · ');

          return (
            <div
              key={career.id}
              className={`bg-white rounded-3xl p-6 shadow-card hover:shadow-card-hover border transition-all duration-300 flex flex-col justify-between group ${
                isCurrentTarget ? 'border-[#5B3FD6] ring-2 ring-[#F0ECFF]' : 'border-beige-200 hover:border-[#DDD5FF]'
              }`}
            >
              <div>
                {/* Header: Title + Match */}
                <div className="flex items-start justify-between gap-3 mb-2.5">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      {isCurrentTarget ? (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-sage-800 bg-sage-100 px-2 py-0.5 rounded-full border border-sage-200">
                          <Check className="w-2.5 h-2.5" />
                          Current Goal
                        </span>
                      ) : (
                        <span className="text-[10px] font-bold text-charcoal-50 uppercase tracking-wider">
                          Career Path
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-[#292631] group-hover:text-[#5B3FD6] transition-colors">
                      {career.title}
                    </h3>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-extrabold text-[#5B3FD6] bg-[#F0ECFF] border border-[#DDD5FF]">
                      {Math.round(career.matchPercentage)}% Fit
                    </span>
                  </div>
                </div>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-charcoal-200 leading-relaxed mb-4 line-clamp-2">
                  {career.description}
                </p>

                {/* Key Skills */}
                <div className="p-3 rounded-2xl bg-beige-50 border border-beige-200 text-xs mb-4">
                  <span className="text-[10px] font-bold text-charcoal-50 uppercase tracking-wider block mb-1">
                    Key Skills:
                  </span>
                  <p className="font-semibold text-charcoal">
                    {keySkillsText}
                  </p>
                </div>
              </div>

              {/* Card Footer: Metadata + Explore Button */}
              <div className="pt-3 border-t border-beige-200 flex items-center justify-between gap-3">
                <span className="text-[11px] text-charcoal-50 font-medium">
                  Demand: <strong className="text-charcoal-200">{career.marketDemand}</strong>
                </span>

                <button
                  onClick={() => navigateTo('career-detail', career.id)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#5B3FD6] hover:bg-[#4E34BF] text-white font-bold text-xs shadow-sm transition-all active:scale-95 group-hover:bg-[#4E34BF]"
                >
                  <span>Explore Career</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
