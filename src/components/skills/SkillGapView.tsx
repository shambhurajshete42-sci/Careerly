import React, { useState } from 'react';
import { 
  SplitSquareVertical, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Zap, 
  BookOpen, 
  Target, 
  Sparkles,
  Award
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Badge } from '../common/Badge';
import { ProgressBar } from '../common/ProgressBar';

export const SkillGapView: React.FC = () => {
  const { 
    activeTargetCareer, 
    simulateSkillImprovement, 
    navigateTo 
  } = useApp();

  const [activeTab, setActiveTab] = useState<'All' | 'Priority Skills' | 'Developing' | 'Strong Skills'>('All');
  const [justLeveledUp, setJustLeveledUp] = useState<string | null>(null);

  const prioritySkills = activeTargetCareer.skills.filter(s => s.category === 'Priority Skills');
  const developingSkills = activeTargetCareer.skills.filter(s => s.category === 'Developing');
  const strongSkills = activeTargetCareer.skills.filter(s => s.category === 'Strong Skills');

  const displayedSkills = activeTargetCareer.skills.filter(s => {
    if (activeTab === 'Priority Skills') return s.category === 'Priority Skills';
    if (activeTab === 'Developing') return s.category === 'Developing';
    if (activeTab === 'Strong Skills') return s.category === 'Strong Skills';
    return true;
  });

  const handlePracticeLevelUp = (skillName: string) => {
    simulateSkillImprovement(skillName);
    setJustLeveledUp(skillName);
    setTimeout(() => setJustLeveledUp(null), 3000);
  };

  return (
    <div className="space-y-8 pb-14">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-black text-[#292631] tracking-tight">
              Your Skill Gap
            </h1>
            <span className="text-xs font-bold text-[#5B3FD6] bg-[#F0ECFF] px-2.5 py-0.5 rounded-full border border-[#5B3FD6]/30">
              Target: {activeTargetCareer.title}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Here's what you should focus on to move toward your target career.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {(['All', 'Priority Skills', 'Developing', 'Strong Skills'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                activeTab === tab
                  ? 'bg-[#5B3FD6] text-white shadow-xs'
                  : 'bg-white text-[#292631] border border-slate-200 hover:bg-[#F0ECFF] hover:text-[#5B3FD6]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Simulation Notification Banner */}
      {justLeveledUp && (
        <div className="p-4 rounded-2xl bg-[#E4F3EA] border border-[#6FAF8B] text-[#292631] text-xs font-medium flex items-center justify-between animate-fadeIn">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#6FAF8B]" />
            <span>Successfully practiced: <strong>{justLeveledUp}</strong>. Skill proficiency updated.</span>
          </div>
          <span className="text-[11px] font-bold text-sage-800">Career Readiness Recalculated</span>
        </div>
      )}

      {/* 3 Overview Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-subtle flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#F0ECFF] border border-[#5B3FD6]/20 text-[#5B3FD6] flex items-center justify-center font-bold text-lg">
            {prioritySkills.length}
          </div>
          <div>
            <span className="text-xs font-bold text-[#292631]">Priority Skills</span>
            <p className="text-[11px] text-slate-500">Immediate focus to break through into role</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-subtle flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 border border-[#6C8CFF]/30 text-[#6C8CFF] flex items-center justify-center font-bold text-lg">
            {developingSkills.length}
          </div>
          <div>
            <span className="text-xs font-bold text-[#292631]">Developing Competencies</span>
            <p className="text-[11px] text-slate-500">Active progress, needs project reinforcement</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-subtle flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#E4F3EA] border border-[#6FAF8B]/30 text-[#6FAF8B] flex items-center justify-center font-bold text-lg">
            {strongSkills.length}
          </div>
          <div>
            <span className="text-xs font-bold text-[#292631]">Strong Assets</span>
            <p className="text-[11px] text-slate-500">Solid foundation aligned with requirements</p>
          </div>
        </div>
      </div>

      {/* Main Skills List */}
      <div className="space-y-4">
        {displayedSkills.map(skill => {
          const isPriority = skill.category === 'Priority Skills';
          const isDeveloping = skill.category === 'Developing';

          return (
            <div
              key={skill.name}
              className={`bg-white rounded-3xl p-6 shadow-card border transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 ${
                isPriority ? 'border-[#5B3FD6]/40 ring-1 ring-[#F0ECFF]' : 'border-slate-200'
              }`}
            >
              {/* Skill Info */}
              <div className="md:w-5/12 space-y-2">
                <div className="flex items-center gap-2.5">
                  <h3 className="text-base font-bold text-[#292631]">{skill.name}</h3>
                  <Badge
                    variant={isPriority ? 'gold' : isDeveloping ? 'blue' : 'green'}
                    size="sm"
                  >
                    {skill.category}
                  </Badge>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    skill.gap === 'High' ? 'bg-[#F0ECFF] text-[#5B3FD6]' : skill.gap === 'Moderate' ? 'bg-blue-50 text-blue-800' : 'bg-[#E4F3EA] text-[#6FAF8B]'
                  }`}>
                    {skill.gap} Gap
                  </span>
                </div>

                <div className="flex items-center gap-4 text-xs text-slate-600">
                  <span>Current: <strong className="text-[#5B3FD6]">{skill.currentLevel}</strong></span>
                  <span>Target: <strong className="text-[#292631]">{skill.targetLevel}</strong></span>
                </div>

                <div className="pt-1">
                  <ProgressBar
                    value={skill.currentPercentage}
                    targetValue={skill.targetPercentage}
                    height="sm"
                    color={skill.currentPercentage >= 70 ? 'green' : isPriority ? 'amber' : 'purple'}
                    showValueLabel={true}
                  />
                </div>
              </div>

              {/* Recommended Resource */}
              <div className="md:w-4/12 p-3.5 rounded-2xl bg-[#F0ECFF]/40 border border-[#F0ECFF] text-xs space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  Recommended Course / Resource:
                </span>
                <p className="font-bold text-[#292631] line-clamp-2">
                  {skill.recommendedResource}
                </p>
                <button
                  onClick={() => navigateTo('learning')}
                  className="text-[11px] font-bold text-[#5B3FD6] hover:text-[#4b32b8] flex items-center gap-1 pt-1"
                >
                  <BookOpen className="w-3 h-3" />
                  <span>View in Learning Library</span>
                </button>
              </div>

              {/* Action Buttons */}
              <div className="md:w-3/12 flex flex-col sm:flex-row md:flex-col gap-2 shrink-0 justify-center">
                <button
                  onClick={() => navigateTo('learning')}
                  className="px-4 py-2.5 rounded-xl bg-[#5B3FD6] hover:bg-[#4b32b8] text-white font-bold text-xs shadow-xs flex items-center justify-center gap-1.5 transition-all"
                >
                  <span>Start Learning</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => handlePracticeLevelUp(skill.name)}
                  className="px-3 py-1.5 rounded-xl bg-[#E4F3EA] hover:bg-[#d5eee0] border border-[#6FAF8B]/30 text-[#292631] font-semibold text-[11px] transition-colors flex items-center justify-center gap-1"
                  title="Practice this skill"
                >
                  <Zap className="w-3 h-3 text-[#6FAF8B]" />
                  <span>Practice this skill</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
