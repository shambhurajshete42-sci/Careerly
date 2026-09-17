import React from 'react';
import { 
  ArrowRight, 
  Target, 
  SplitSquareVertical, 
  Milestone, 
  TrendingUp, 
  CheckCircle2, 
  Circle,
  Bot, 
  Compass,
  Zap,
  BookOpen
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { CircularProgress } from '../common/CircularProgress';
import { ProgressBar } from '../common/ProgressBar';

export const DashboardView: React.FC = () => {
  const { 
    student, 
    careers, 
    activeTargetCareer, 
    careerReadinessScore, 
    roadmapPhases,
    navigateTo, 
    setAssistantOpen 
  } = useApp();

  // Find priority skill gaps for target career
  const priorityGaps = activeTargetCareer.skills
    .filter(s => s.category === 'Priority Skills' || s.gap === 'High')
    .slice(0, 3);

  // Active roadmap phase & next milestone
  const activePhase = roadmapPhases.find(p => p.status === 'in-progress') || roadmapPhases[0];
  const nextMilestone = activePhase.milestones.find(m => !m.completed) || activePhase.milestones[0];

  const strongSkillsCount = student.skills.filter(s => s.percentage >= 70).length;
  const developingSkillsCount = student.skills.filter(s => s.percentage < 70).length;

  return (
    <div className="space-y-8 pb-12">
      {/* Top Welcome Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-beige-200">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#292631] tracking-tight">
            Welcome back, {student.name.split(' ')[0]} 👋
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-100 mt-1">
            Track your career readiness, target goal requirements, priority skill gaps, and next roadmap milestones.
          </p>
        </div>

        <button
          onClick={() => setAssistantOpen(true)}
          className="self-start sm:self-auto inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white hover:bg-[#F0ECFF] text-[#5B3FD6] text-xs font-semibold border border-beige-200 hover:border-[#DDD5FF] shadow-subtle transition-all"
        >
          <Bot className="w-4 h-4 text-[#5B3FD6]" />
          <span>Ask Careerly AI</span>
        </button>
      </div>

      {/* CORE QUESTIONS 1 & 2: WHERE AM I NOW? & WHAT CAREER AM I PURSUING? */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* QUESTION 1: WHERE AM I NOW? -> CAREER READINESS (5 cols) */}
        <div className="lg:col-span-5 bg-white rounded-2xl p-6 shadow-card border border-beige-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-bold text-charcoal-50 uppercase tracking-wider">
                1. Where am I now?
              </span>
              <span className="text-[11px] font-bold text-[#5B3FD6] bg-[#F0ECFF] px-2 py-0.5 rounded-full border border-[#DDD5FF]">
                Career Readiness
              </span>
            </div>

            <div className="py-3 flex flex-col items-center justify-center">
              <CircularProgress 
                percentage={careerReadinessScore} 
                size={140} 
                strokeWidth={12} 
                label="Readiness"
                sublabel="toward target career"
                color="#5B3FD6"
              />
            </div>

            <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-beige-200 text-center">
              <div className="p-2.5 rounded-xl bg-beige-50 border border-beige-200">
                <span className="text-base font-bold text-sage-800">{strongSkillsCount}</span>
                <p className="text-[10px] text-charcoal-50 font-medium">Strong Skills</p>
              </div>
              <div className="p-2.5 rounded-xl bg-beige-50 border border-beige-200">
                <span className="text-base font-bold text-[#5B3FD6]">{developingSkillsCount}</span>
                <p className="text-[10px] text-charcoal-50 font-medium">Skills Developing</p>
              </div>
            </div>
          </div>

          <button
            onClick={() => navigateTo('skill-gap')}
            className="w-full mt-4 py-2.5 bg-[#F0ECFF] hover:bg-lavender-200 text-[#5B3FD6] rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
          >
            <span>View Detailed Skill Gaps</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* QUESTION 2: WHAT CAREER AM I PURSUING? -> CURRENT CAREER GOAL (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-2xl p-6 shadow-card border border-beige-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-bold text-charcoal-50 uppercase tracking-wider">
                2. What career am I pursuing?
              </span>
              <span className="text-[11px] font-bold text-sage-800 bg-sage-100 px-2 py-0.5 rounded-full border border-sage-200">
                Current Goal
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-[#292631] tracking-tight">
              {activeTargetCareer.title}
            </h2>

            <p className="text-xs sm:text-sm text-charcoal-200 mt-2 leading-relaxed line-clamp-3">
              {activeTargetCareer.description}
            </p>

            {/* Supporting Metadata */}
            <div className="grid grid-cols-2 gap-3 mt-5 p-3.5 bg-beige-50 border border-beige-200 rounded-2xl text-xs">
              <div>
                <span className="text-[11px] text-charcoal-50 block font-medium">Indicative salary range:</span>
                <strong className="text-charcoal font-bold">{activeTargetCareer.salaryRange.split('/')[0]}</strong>
              </div>
              <div>
                <span className="text-[11px] text-charcoal-50 block font-medium">Industry Demand:</span>
                <strong className="text-sage-800 font-bold">{activeTargetCareer.marketDemand}</strong>
              </div>
            </div>
          </div>

          <div className="pt-5 mt-4 border-t border-beige-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              onClick={() => navigateTo('career-goal-planner')}
              className="text-xs font-semibold text-charcoal-100 hover:text-[#5B3FD6] transition-colors"
            >
              Change Goal in Goal Planner →
            </button>

            <button
              onClick={() => navigateTo('career-detail', activeTargetCareer.id)}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#5B3FD6] hover:bg-[#4E34BF] text-white font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-2"
            >
              <span>View Requirements & Blueprint</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* CORE QUESTIONS 3 & 4: WHAT SHOULD I WORK ON? & WHAT SHOULD I DO NEXT? */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* QUESTION 3: WHAT SHOULD I WORK ON? -> TOP SKILL GAPS (6 cols) */}
        <div className="lg:col-span-6 bg-white rounded-2xl p-6 shadow-card border border-beige-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold text-charcoal-50 uppercase tracking-wider">
                3. What should I work on?
              </span>
              <button
                onClick={() => navigateTo('skill-gap')}
                className="text-xs font-semibold text-[#5B3FD6] hover:underline"
              >
                View All Gaps →
              </button>
            </div>

            <h3 className="text-lg font-bold text-[#292631]">
              Top Priority Skill Gaps
            </h3>
            <p className="text-xs text-charcoal-100 mt-0.5 mb-4">
              Focusing on these competencies will accelerate your readiness for {activeTargetCareer.title}.
            </p>

            <div className="space-y-3">
              {priorityGaps.map(skill => (
                <div 
                  key={skill.name} 
                  className="p-3.5 rounded-2xl bg-[#F0ECFF]/30 border border-[#DDD5FF] flex items-center justify-between gap-3"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-charcoal truncate">{skill.name}</span>
                      <span className="text-[10px] font-bold text-[#5B3FD6] bg-[#F0ECFF] px-1.5 py-0.2 rounded">
                        Priority
                      </span>
                    </div>
                    <div className="text-[11px] text-charcoal-50 mt-0.5">
                      Current: <strong>{skill.currentLevel} ({Math.round(skill.currentPercentage)}%)</strong>
                      <span className="mx-1">→</span>
                      Target: <strong>{skill.targetLevel} ({Math.round(skill.targetPercentage)}%)</strong>
                    </div>
                  </div>

                  <button
                    onClick={() => navigateTo('learning')}
                    className="px-3 py-1.5 rounded-lg bg-white hover:bg-[#F0ECFF] border border-[#DDD5FF] text-[#5B3FD6] text-xs font-bold shrink-0 transition-colors"
                  >
                    Learn
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-beige-200 flex justify-between items-center text-xs">
            <span className="text-charcoal-100">Want interactive practice exercises?</span>
            <button
              onClick={() => navigateTo('skill-gap')}
              className="font-bold text-[#5B3FD6] hover:underline"
            >
              Open Skill Gap Lab →
            </button>
          </div>
        </div>

        {/* QUESTION 4: WHAT SHOULD I DO NEXT? -> NEXT ROADMAP STEP (6 cols) */}
        <div className="lg:col-span-6 bg-white rounded-2xl p-6 shadow-card border border-beige-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold text-charcoal-50 uppercase tracking-wider">
                4. What should I do next?
              </span>
              <span className="text-[11px] font-bold text-[#5B3FD6] bg-[#F0ECFF] px-2 py-0.5 rounded-full border border-[#DDD5FF]">
                Roadmap
              </span>
            </div>

            <h3 className="text-lg font-bold text-[#292631]">
              Next Roadmap Milestone
            </h3>
            <p className="text-xs text-charcoal-100 mt-0.5 mb-4">
              Current stage: <strong>{activePhase.title}</strong> ({Math.round(activePhase.progressPercentage)}% completed)
            </p>

            <div className="p-4 rounded-2xl bg-beige-50 border border-beige-200 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-charcoal">Phase Progress</span>
                <span className="font-bold text-[#5B3FD6]">{Math.round(activePhase.progressPercentage)}%</span>
              </div>
              <ProgressBar value={activePhase.progressPercentage} height="sm" color="purple" showValueLabel={false} />

              <div className="pt-2">
                <span className="text-[10px] font-bold text-charcoal-50 uppercase tracking-wider block mb-1">
                  Immediate Next Milestone:
                </span>
                <div className="flex items-start gap-2 text-xs font-semibold text-charcoal">
                  <Circle className="w-4 h-4 text-[#5B3FD6] shrink-0 mt-0.5" />
                  <span>{nextMilestone ? nextMilestone.title : 'Complete remaining phase projects'}</span>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => navigateTo('roadmap')}
            className="w-full mt-4 py-2.5 bg-[#5B3FD6] hover:bg-[#4E34BF] text-white rounded-xl text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2"
          >
            <span>Continue Interactive Roadmap</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* SUPPORTING DISCOVERY SECTION: Alternative Careers */}
      <div className="p-5 rounded-2xl bg-white border border-beige-200 shadow-card flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#F0ECFF] text-[#5B3FD6] flex items-center justify-center shrink-0">
            <Compass className="w-5 h-5 text-[#5B3FD6]" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#292631]">Looking to explore other career options?</h4>
            <p className="text-xs text-charcoal-100">
              Browse 10+ industry pathways aligned with your academic background and skillset.
            </p>
          </div>
        </div>

        <button
          onClick={() => navigateTo('career-explorer')}
          className="px-4 py-2 rounded-xl border border-beige-200 hover:border-[#DDD5FF] text-xs font-bold text-[#5B3FD6] hover:bg-[#F0ECFF] transition-colors shrink-0"
        >
          Explore Careers →
        </button>
      </div>
    </div>
  );
};
