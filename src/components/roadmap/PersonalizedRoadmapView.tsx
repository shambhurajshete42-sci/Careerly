import React, { useState } from 'react';
import { 
  Milestone, 
  CheckCircle2, 
  Circle, 
  Clock, 
  BookOpen, 
  Sparkles, 
  ArrowRight,
  Compass,
  Award,
  Calendar,
  Layers
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ProgressBar } from '../common/ProgressBar';
import { Badge } from '../common/Badge';

export const PersonalizedRoadmapView: React.FC = () => {
  const { 
    roadmapPhases, 
    toggleMilestone, 
    activeTargetCareer, 
    navigateTo 
  } = useApp();

  const [viewMode, setViewMode] = useState<'timeline' | 'cards'>('timeline');

  // Overall roadmap stats
  const allMilestones = roadmapPhases.flatMap(p => p.milestones);
  const completedMilestones = allMilestones.filter(m => m.completed).length;
  const overallRoadmapPercentage = Math.round((completedMilestones / allMilestones.length) * 100);

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-purple-100/60">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Your AI Career Roadmap
            </h1>
            <span className="text-xs font-bold text-brand-800 bg-brand-50 px-2.5 py-0.5 rounded-full border border-brand-200">
              5 Phases to Placement
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            A personalized path from where you are today to your target career as a <strong>{activeTargetCareer.title}</strong>.
          </p>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setViewMode('timeline')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              viewMode === 'timeline'
                ? 'bg-brand-800 text-white shadow-sm'
                : 'bg-white text-slate-600 border border-purple-100 hover:bg-lavender-50'
            }`}
          >
            Timeline View
          </button>
          <button
            onClick={() => setViewMode('cards')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              viewMode === 'cards'
                ? 'bg-brand-800 text-white shadow-sm'
                : 'bg-white text-slate-600 border border-purple-100 hover:bg-lavender-50'
            }`}
          >
            Phase Cards
          </button>
        </div>
      </div>

      {/* Progress Summary Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-card border border-purple-100 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-brand-700" />
            <span className="text-xs font-bold text-brand-800 uppercase tracking-wider">
              Roadmap Velocity Tracker
            </span>
          </div>
          <h3 className="text-xl font-extrabold text-slate-900">
            {completedMilestones} of {allMilestones.length} Milestones Accomplished
          </h3>
          <p className="text-xs text-slate-500">
            Click any milestone circle below to mark completed as you build projects and learn!
          </p>
        </div>

        <div className="w-full sm:w-64 space-y-1.5">
          <div className="flex justify-between text-xs font-bold">
            <span className="text-slate-600">Total Completion</span>
            <span className="text-brand-900">{overallRoadmapPercentage}%</span>
          </div>
          <ProgressBar value={overallRoadmapPercentage} height="md" color="purple" showValueLabel={false} />
          <span className="text-[10px] text-slate-400 block text-right">Est. 38 Weeks Total</span>
        </div>
      </div>

      {/* TIMELINE VIEW */}
      {viewMode === 'timeline' ? (
        <div className="relative pl-6 sm:pl-10 space-y-10 before:content-[''] before:absolute before:left-3 sm:before:left-5 before:top-4 before:bottom-4 before:w-1 before:bg-gradient-to-b before:from-brand-600 before:via-purple-300 before:to-slate-200">
          {roadmapPhases.map((phase, idx) => {
            const isCompleted = phase.status === 'completed';
            const isInProgress = phase.status === 'in-progress';

            return (
              <div key={phase.id} className="relative group">
                {/* Timeline node icon */}
                <div
                  className={`absolute -left-6 sm:-left-10 top-0 w-8 h-8 sm:w-10 sm:h-10 rounded-2xl flex items-center justify-center font-black text-xs sm:text-sm border-2 transition-transform group-hover:scale-110 ${
                    isCompleted
                      ? 'bg-emerald-500 border-emerald-300 text-white shadow-md'
                      : isInProgress
                      ? 'bg-brand-800 border-purple-200 text-white ring-4 ring-purple-100 shadow-glow'
                      : 'bg-white border-slate-300 text-slate-400'
                  }`}
                >
                  {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : idx + 1}
                </div>

                {/* Phase Card */}
                <div className={`bg-white rounded-3xl p-6 sm:p-7 shadow-card border transition-all ${
                  isInProgress ? 'border-brand-300 ring-2 ring-purple-100/80' : 'border-purple-100'
                }`}>
                  {/* Phase Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-purple-50">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                          {phase.phaseNumber}
                        </span>
                        <Badge
                          variant={isCompleted ? 'green' : isInProgress ? 'purple' : 'slate'}
                          size="sm"
                        >
                          {isCompleted ? 'Completed' : isInProgress ? 'In Progress' : 'Upcoming'}
                        </Badge>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-1">
                        {phase.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-semibold text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-brand-600" />
                        {phase.duration}
                      </span>
                      <span className="text-brand-900 bg-lavender-50 px-2.5 py-1 rounded-lg border border-purple-100">
                        {phase.progressPercentage}% Complete
                      </span>
                    </div>
                  </div>

                  {/* Skills covered pills */}
                  <div className="pt-4 flex flex-wrap gap-2 items-center">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-1">
                      Key Competencies:
                    </span>
                    {phase.skills.map(s => (
                      <span key={s} className="text-xs font-semibold px-2.5 py-1 bg-lavender-50 text-brand-800 rounded-lg border border-purple-100">
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Milestones Checkbox List */}
                  <div className="pt-5 space-y-2.5">
                    <span className="text-xs font-bold text-slate-700 block uppercase tracking-wider">
                      Phase Checkpoints:
                    </span>
                    {phase.milestones.map(m => {
                      return (
                        <div
                          key={m.id}
                          onClick={() => toggleMilestone(phase.id, m.id)}
                          className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center gap-3 text-xs ${
                            m.completed
                              ? 'bg-emerald-50/50 border-emerald-200/80 text-slate-800 font-medium'
                              : 'bg-slate-50/70 border-slate-200 text-slate-700 hover:bg-lavender-50 hover:border-purple-200'
                          }`}
                        >
                          <div className={`w-5 h-5 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                            m.completed ? 'bg-emerald-500 text-white' : 'border border-slate-300 bg-white'
                          }`}>
                            {m.completed && <CheckCircle2 className="w-3.5 h-3.5" />}
                          </div>
                          <span className={m.completed ? 'line-through text-slate-400' : 'text-slate-800'}>
                            {m.title}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Curated Resources */}
                  <div className="pt-5 mt-4 border-t border-purple-50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-slate-400 font-medium">Recommended Prep:</span>
                      {phase.recommendedResources.map((res, i) => (
                        <span key={i} className="font-semibold text-brand-800 bg-purple-50 px-2 py-0.5 rounded border border-purple-100">
                          {res.title} ({res.type})
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => navigateTo('learning')}
                      className="font-bold text-brand-700 hover:text-brand-900 flex items-center gap-1 self-start sm:self-auto"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Explore Resources →</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* CARDS VIEW */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roadmapPhases.map((phase) => {
            const isCompleted = phase.status === 'completed';
            const isInProgress = phase.status === 'in-progress';

            return (
              <div
                key={phase.id}
                className={`bg-white rounded-3xl p-6 shadow-card border flex flex-col justify-between ${
                  isInProgress ? 'border-brand-400 ring-2 ring-purple-100' : 'border-purple-100'
                }`}
              >
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      {phase.phaseNumber}
                    </span>
                    <Badge variant={isCompleted ? 'green' : isInProgress ? 'purple' : 'slate'} size="sm">
                      {phase.status}
                    </Badge>
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-1">
                    {phase.title}
                  </h3>
                  <span className="text-xs text-slate-500 block mb-4">
                    {phase.duration}
                  </span>

                  <ProgressBar value={phase.progressPercentage} height="sm" color="purple" showValueLabel={true} />

                  <div className="mt-4 space-y-2 text-xs">
                    {phase.milestones.map(m => (
                      <div
                        key={m.id}
                        onClick={() => toggleMilestone(phase.id, m.id)}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <div className={`w-4 h-4 rounded flex items-center justify-center shrink-0 ${
                          m.completed ? 'bg-emerald-500 text-white' : 'border border-slate-300'
                        }`}>
                          {m.completed && <CheckCircle2 className="w-3 h-3" />}
                        </div>
                        <span className={`text-[11px] ${m.completed ? 'line-through text-slate-400' : 'text-slate-700'}`}>
                          {m.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-purple-50">
                  <button
                    onClick={() => navigateTo('learning')}
                    className="text-xs font-bold text-brand-700 hover:text-brand-900 flex items-center gap-1"
                  >
                    <span>View Courses</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
