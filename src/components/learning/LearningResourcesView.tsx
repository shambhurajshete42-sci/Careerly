import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  Star, 
  Clock, 
  Check, 
  Plus, 
  ExternalLink, 
  Bookmark, 
  BookmarkCheck,
  Sparkles,
  Filter
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Badge } from '../common/Badge';

export const LearningResourcesView: React.FC = () => {
  const { learningResources, toggleSaveResource, navigateTo } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [addedToast, setAddedToast] = useState<string | null>(null);

  const categories = ['All', 'Courses', 'Certifications', 'Projects', 'Practice', 'Career Preparation'];

  const filteredResources = learningResources.filter(r => {
    const matchesCat = selectedCategory === 'All' || r.category === selectedCategory;
    const matchesSearch = r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          r.focus.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          r.skillsTaught.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  const handleAddToRoadmap = (title: string, id: string) => {
    toggleSaveResource(id);
    setAddedToast(title);
    setTimeout(() => setAddedToast(null), 2500);
  };

  return (
    <div className="space-y-8 pb-14">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-black text-[#292631] tracking-tight">
              Learning Library
            </h1>
            <Badge variant="purple" size="sm">Skill Gap Connected</Badge>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Hand-picked courses, projects, and interview drills tailored to bridge your exact readiness gaps.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search skills, topics..."
            className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 bg-white text-xs font-medium text-[#292631] placeholder-slate-400 focus:outline-none focus:border-[#5B3FD6] focus:ring-2 focus:ring-[#F0ECFF]"
          />
        </div>
      </div>

      {/* Added Toast */}
      {addedToast && (
        <div className="p-3.5 rounded-2xl bg-[#E4F3EA] border border-[#6FAF8B] text-[#292631] text-xs font-semibold flex items-center justify-between animate-fadeIn">
          <span>✓ Added <strong>{addedToast}</strong> to your saved roadmap resources!</span>
          <button onClick={() => navigateTo('roadmap')} className="underline text-[#5B3FD6] font-bold">
            View Roadmap
          </button>
        </div>
      )}

      {/* Category Filter Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? 'bg-[#5B3FD6] text-white shadow-xs'
                : 'bg-white text-[#292631] border border-slate-200 hover:bg-[#F0ECFF]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Resource Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map(res => {
          return (
            <div
              key={res.id}
              className="bg-white rounded-3xl p-6 shadow-card border border-slate-200 hover:border-[#5B3FD6]/40 hover:shadow-card-hover transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <Badge variant="purple" size="sm">
                    {res.category}
                  </Badge>
                  <span className="text-[11px] font-bold text-slate-400">
                    {res.level}
                  </span>
                </div>

                <h3 className="font-bold text-[#292631] text-base group-hover:text-[#5B3FD6] transition-colors line-clamp-2">
                  {res.title}
                </h3>

                <p className="text-xs text-slate-400 mt-1">
                  Provider: <span className="text-slate-600 font-medium">{res.provider}</span>
                </p>

                <p className="text-xs text-slate-600 leading-relaxed mt-3 mb-4 line-clamp-3">
                  {res.focus}
                </p>

                <div className="flex items-center gap-4 text-xs text-slate-500 mb-4 pt-2 border-t border-slate-100">
                  <span className="flex items-center gap-1 font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#5B3FD6]" />
                    {res.duration}
                  </span>
                  <span className="flex items-center gap-1 font-semibold text-amber-600">
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    {res.rating}
                  </span>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {res.skillsTaught.map(sk => (
                    <span key={sk} className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-[#F0ECFF] text-[#5B3FD6] border border-[#5B3FD6]/20">
                      {sk}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => handleAddToRoadmap(res.title, res.id)}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                    res.saved 
                      ? 'bg-[#E4F3EA] text-[#292631] border border-[#6FAF8B]' 
                      : 'bg-slate-50 hover:bg-[#F0ECFF] text-[#292631] border border-slate-200'
                  }`}
                >
                  {res.saved ? <BookmarkCheck className="w-3.5 h-3.5 text-[#6FAF8B]" /> : <Plus className="w-3.5 h-3.5" />}
                  <span>{res.saved ? 'Saved' : 'Add to Roadmap'}</span>
                </button>

                <button
                  onClick={() => alert(`Launching preview for "${res.title}".`)}
                  className="px-4 py-2 rounded-xl bg-[#5B3FD6] hover:bg-[#4b32b8] text-white font-bold text-xs shadow-xs flex items-center gap-1 transition-all"
                >
                  <span>Explore</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
