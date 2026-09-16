import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  Sparkles, 
  Brain, 
  User, 
  Heart, 
  Code2, 
  Target, 
  Cpu, 
  TrendingUp, 
  Milestone,
  CheckCircle2
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { 
  AVAILABLE_INTERESTS, 
  AVAILABLE_SKILLS_LIST, 
  AVAILABLE_GOALS 
} from '../../data/sampleData';
import { ProficiencyLevel, UserSkill } from '../../types';

export const OnboardingFlow: React.FC = () => {
  const { student, updateStudentProfile, navigateTo } = useApp();
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Form states initialized with student data
  const [name, setName] = useState(student.name);
  const [educationLevel, setEducationLevel] = useState(student.educationLevel);
  const [degreeCourse, setDegreeCourse] = useState(student.degreeCourse);
  const [yearOfStudy, setYearOfStudy] = useState(student.yearOfStudy);
  const [selectedInterests, setSelectedInterests] = useState<string[]>(student.interests);
  const [skills, setSkills] = useState<UserSkill[]>(student.skills);
  const [selectedGoals, setSelectedGoals] = useState<string[]>(student.goals);
  const [vision, setVision] = useState(student.vision3to5Years);

  // Analysis screen animation states
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [analysisStep, setAnalysisStep] = useState(0);

  const analysisSteps = [
    { text: 'Analyzing your student profile & aptitude...', icon: Brain },
    { text: 'Matching your skills with high-growth career opportunities...', icon: Cpu },
    { text: 'Checking current tech market & compensation trends...', icon: TrendingUp },
    { text: 'Building your personalized 5-phase career roadmap...', icon: Milestone }
  ];

  // Auto-progress Step 5 (Analysis)
  useEffect(() => {
    if (currentStep === 5) {
      const interval = setInterval(() => {
        setAnalysisProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              // Update context profile
              updateStudentProfile({
                name,
                educationLevel,
                degreeCourse,
                yearOfStudy,
                interests: selectedInterests,
                skills,
                goals: selectedGoals,
                vision3to5Years: vision
              });
              navigateTo('dashboard');
            }, 800);
            return 100;
          }
          return prev + 2;
        });
      }, 50);

      return () => clearInterval(interval);
    }
  }, [currentStep]);

  useEffect(() => {
    if (analysisProgress < 25) setAnalysisStep(0);
    else if (analysisProgress < 55) setAnalysisStep(1);
    else if (analysisProgress < 85) setAnalysisStep(2);
    else setAnalysisStep(3);
  }, [analysisProgress]);

  const toggleInterest = (interest: string) => {
    setSelectedInterests(prev => 
      prev.includes(interest) ? prev.filter(i => i !== interest) : [...prev, interest]
    );
  };

  const toggleGoal = (goal: string) => {
    setSelectedGoals(prev => 
      prev.includes(goal) ? prev.filter(g => g !== goal) : [...prev, goal]
    );
  };

  const handleSkillLevelChange = (skillName: string, level: ProficiencyLevel) => {
    const pctMap: Record<ProficiencyLevel, number> = {
      Beginner: 35,
      Intermediate: 70,
      Advanced: 90
    };

    setSkills(prev => {
      const existing = prev.find(s => s.name === skillName);
      if (existing) {
        return prev.map(s => s.name === skillName ? { ...s, level, percentage: pctMap[level] } : s);
      } else {
        return [...prev, { name: skillName, level, percentage: pctMap[level] }];
      }
    });
  };

  const handleRemoveSkill = (skillName: string) => {
    setSkills(prev => prev.filter(s => s.name !== skillName));
  };

  const handleAddSkillFromList = (skillItem: typeof AVAILABLE_SKILLS_LIST[0]) => {
    if (!skills.some(s => s.name === skillItem.name)) {
      setSkills(prev => [
        ...prev,
        {
          name: skillItem.name,
          level: skillItem.defaultLevel,
          percentage: skillItem.defaultPct
        }
      ]);
    }
  };

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const stepsList = [
    { num: '01', title: 'Profile' },
    { num: '02', title: 'Interests' },
    { num: '03', title: 'Skills' },
    { num: '04', title: 'Goals' },
    { num: '05', title: 'Results' }
  ];

  return (
    <div className="min-h-screen bg-[#F7F3EA] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Step Indicator Header (except on step 5) */}
        {currentStep < 5 && (
          <div className="mb-8">
            <div className="flex items-center justify-between relative">
              {/* Connecting Line */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#F0ECFF] -translate-y-1/2 -z-0" />
              
              {stepsList.map((st, idx) => {
                const stepNum = idx + 1;
                const isCurrent = currentStep === stepNum;
                const isPassed = currentStep > stepNum;

                return (
                  <div key={st.num} className="relative z-10 flex flex-col items-center">
                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-all duration-300 ${
                        isCurrent
                          ? 'bg-[#5B3FD6] text-white ring-4 ring-[#F0ECFF] shadow-md scale-110'
                          : isPassed
                          ? 'bg-[#6FAF8B] text-white'
                          : 'bg-white text-slate-400 border border-slate-200'
                      }`}
                    >
                      {isPassed ? <Check className="w-4 h-4" /> : st.num}
                    </div>
                    <span className={`text-[11px] font-semibold mt-1.5 hidden sm:block ${
                      isCurrent ? 'text-[#5B3FD6] font-bold' : isPassed ? 'text-slate-600' : 'text-slate-400'
                    }`}>
                      {st.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Step Card Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-card border border-[#F0ECFF] relative">
          {/* STEP 1: Student Profile */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-[#5B3FD6] uppercase tracking-wider bg-[#F0ECFF] px-2.5 py-1 rounded-md">
                  Step 01 of 05
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#292631] mt-2">
                  Tell us about yourself
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  We'll customize your career intelligence using your academic foundation.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#5B3FD6] focus:ring-2 focus:ring-[#F0ECFF] outline-none text-sm text-[#292631] transition-all font-medium"
                    placeholder="e.g. Aarav Sharma"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Education Level
                  </label>
                  <select
                    value={educationLevel}
                    onChange={e => setEducationLevel(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#5B3FD6] focus:ring-2 focus:ring-[#F0ECFF] outline-none text-sm text-[#292631] transition-all font-medium bg-white"
                  >
                    <option value="Undergraduate">Undergraduate (B.Tech / B.E / B.Sc)</option>
                    <option value="Postgraduate">Postgraduate (M.Tech / M.S / MBA)</option>
                    <option value="Diploma">Diploma / Polytechnic</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Degree / Course
                  </label>
                  <input
                    type="text"
                    value={degreeCourse}
                    onChange={e => setDegreeCourse(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#5B3FD6] focus:ring-2 focus:ring-[#F0ECFF] outline-none text-sm text-[#292631] transition-all font-medium"
                    placeholder="e.g. B.Tech Computer Science"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Year of Study
                  </label>
                  <select
                    value={yearOfStudy}
                    onChange={e => setYearOfStudy(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#5B3FD6] focus:ring-2 focus:ring-[#F0ECFF] outline-none text-sm text-[#292631] transition-all font-medium bg-white"
                  >
                    <option value="1st Year">1st Year</option>
                    <option value="2nd Year">2nd Year</option>
                    <option value="3rd Year">3rd Year</option>
                    <option value="Final Year">Final Year</option>
                    <option value="Recent Graduate">Recent Graduate</option>
                  </select>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#F0ECFF]/60 border border-[#5B3FD6]/20 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#F0ECFF] text-[#5B3FD6] flex items-center justify-center font-bold text-xs shrink-0">
                  💡
                </div>
                <p className="text-xs text-slate-600">
                  <strong>Example preloaded:</strong> Aarav Sharma, 2nd Year B.Tech Computer Science at GH Raisoni International Skill Tech University.
                </p>
              </div>
            </div>
          )}

          {/* STEP 2: Interests */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-[#5B3FD6] uppercase tracking-wider bg-[#F0ECFF] px-2.5 py-1 rounded-md">
                  Step 02 of 05
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#292631] mt-2">
                  What domains excite you?
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Select all topics and fields that you enjoy learning or building in.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {AVAILABLE_INTERESTS.map(interest => {
                  const isSelected = selectedInterests.includes(interest);
                  return (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => toggleInterest(interest)}
                      className={`p-3.5 rounded-2xl text-xs sm:text-sm font-semibold text-left transition-all border flex items-center justify-between ${
                        isSelected
                          ? 'bg-[#F0ECFF] border-[#5B3FD6] text-[#292631] shadow-xs'
                          : 'bg-white border-slate-200 text-[#292631] hover:border-[#5B3FD6]/40 hover:bg-[#F0ECFF]/30'
                      }`}
                    >
                      <span>{interest}</span>
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
                        isSelected ? 'bg-[#5B3FD6] text-white' : 'border border-slate-300'
                      }`}>
                        {isSelected && <Check className="w-2.5 h-2.5" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              <p className="text-xs text-slate-400">
                Selected: <strong>{selectedInterests.length} domains</strong>
              </p>
            </div>
          )}

          {/* STEP 3: Skills & Proficiency */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-[#5B3FD6] uppercase tracking-wider bg-[#F0ECFF] px-2.5 py-1 rounded-md">
                  Step 03 of 05
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#292631] mt-2">
                  Your Current Skills &amp; Proficiency
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Rate your current comfort level. Don't worry about being a master yet!
                </p>
              </div>

              {/* Active Rated Skills */}
              <div className="space-y-3.5">
                {skills.map(s => {
                  return (
                    <div key={s.name} className="p-3.5 rounded-2xl bg-[#F7F3EA]/70 border border-slate-200/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="min-w-[160px]">
                        <p className="text-sm font-bold text-[#292631]">{s.name}</p>
                        <div className="w-32 bg-[#F0ECFF] h-1.5 rounded-full mt-1.5 overflow-hidden">
                          <div
                            className="bg-[#5B3FD6] h-full rounded-full transition-all duration-300"
                            style={{ width: `${s.percentage}%` }}
                          />
                        </div>
                      </div>

                      {/* Level Selector Buttons */}
                      <div className="flex items-center gap-1.5">
                        {(['Beginner', 'Intermediate', 'Advanced'] as ProficiencyLevel[]).map(lvl => {
                          const isActive = s.level === lvl;
                          return (
                            <button
                              key={lvl}
                              type="button"
                              onClick={() => handleSkillLevelChange(s.name, lvl)}
                              className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                                isActive
                                  ? 'bg-[#5B3FD6] text-white shadow-xs'
                                  : 'bg-white text-[#292631] border border-slate-200 hover:bg-[#F0ECFF]'
                              }`}
                            >
                              {lvl}
                            </button>
                          );
                        })}
                        <button
                          type="button"
                          onClick={() => handleRemoveSkill(s.name)}
                          className="ml-2 text-xs text-slate-400 hover:text-red-500 p-1"
                          title="Remove skill"
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Add more skills chips */}
              <div className="pt-2">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  + Add more skills to profile:
                </p>
                <div className="flex flex-wrap gap-2">
                  {AVAILABLE_SKILLS_LIST.filter(item => !skills.some(s => s.name === item.name)).map(item => (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => handleAddSkillFromList(item)}
                      className="text-xs font-semibold px-2.5 py-1 bg-white border border-[#5B3FD6]/30 text-[#5B3FD6] hover:bg-[#F0ECFF] rounded-lg transition-colors"
                    >
                      + {item.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Goals */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-[#5B3FD6] uppercase tracking-wider bg-[#F0ECFF] px-2.5 py-1 rounded-md">
                  Step 04 of 05
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#292631] mt-2">
                  What are you looking for?
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Choose the career characteristics and outcomes most important to you.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {AVAILABLE_GOALS.map(goal => {
                  const isSelected = selectedGoals.includes(goal);
                  return (
                    <button
                      key={goal}
                      type="button"
                      onClick={() => toggleGoal(goal)}
                      className={`p-3.5 rounded-2xl text-xs sm:text-sm font-semibold text-left transition-all border flex items-center justify-between ${
                        isSelected
                          ? 'bg-[#F0ECFF] border-[#5B3FD6] text-[#292631] shadow-xs'
                          : 'bg-white border-slate-200 text-[#292631] hover:border-[#5B3FD6]/40 hover:bg-[#F0ECFF]/30'
                      }`}
                    >
                      <span>{goal}</span>
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
                        isSelected ? 'bg-[#5B3FD6] text-white' : 'border border-slate-300'
                      }`}>
                        {isSelected && <Check className="w-2.5 h-2.5" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Where do you see yourself in 3–5 years?
                </label>
                <textarea
                  value={vision}
                  onChange={e => setVision(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 rounded-2xl border border-slate-200 focus:border-[#5B3FD6] focus:ring-2 focus:ring-[#F0ECFF] outline-none text-xs sm:text-sm text-[#292631] transition-all"
                  placeholder="e.g. Working as an AI/ML Engineer leading generative AI models in high impact tech products..."
                />
              </div>
            </div>
          )}

          {/* STEP 5: AI Analysis Screen */}
          {currentStep === 5 && (
            <div className="py-12 px-2 text-center space-y-8">
              <div className="relative inline-flex items-center justify-center">
                <div className="w-24 h-24 rounded-3xl bg-[#5B3FD6] text-white flex items-center justify-center shadow-lg shadow-[#5B3FD6]/20 animate-pulse">
                  <Cpu className="w-12 h-12 text-[#F0ECFF]" />
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-extrabold text-[#292631] tracking-tight">
                  Analyzing Your Career Intelligence
                </h3>
                <p className="text-sm text-slate-500 max-w-md mx-auto">
                  Cross-referencing your profile against real-time industry roles, required competencies, and salary benchmarks.
                </p>
              </div>

              {/* Progress bar */}
              <div className="max-w-md mx-auto">
                <div className="w-full bg-[#F0ECFF] h-2.5 rounded-full overflow-hidden mb-3">
                  <div 
                    className="bg-[#5B3FD6] h-full rounded-full transition-all duration-300 ease-out"
                    style={{ width: `${analysisProgress}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs font-semibold text-slate-500">
                  <span>AI Computation</span>
                  <span>{analysisProgress}%</span>
                </div>
              </div>

              {/* Dynamic status list */}
              <div className="max-w-md mx-auto space-y-2.5 text-left">
                {analysisSteps.map((step, idx) => {
                  const isDone = analysisStep > idx || analysisProgress === 100;
                  const isCurrent = analysisStep === idx && analysisProgress < 100;
                  const Icon = step.icon;

                  return (
                    <div
                      key={idx}
                      className={`p-3 rounded-xl border transition-all flex items-center gap-3 text-xs ${
                        isDone
                          ? 'bg-[#E4F3EA] border border-[#6FAF8B]/40 text-[#292631]'
                          : isCurrent
                          ? 'bg-[#F0ECFF] border border-[#5B3FD6]/40 text-[#292631] font-semibold ring-2 ring-[#F0ECFF]'
                          : 'bg-slate-50/50 border-slate-100 text-slate-400'
                      }`}
                    >
                      <div className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 ${
                        isDone ? 'bg-[#6FAF8B] text-white' : isCurrent ? 'bg-[#5B3FD6] text-white' : 'bg-slate-200 text-slate-500'
                      }`}>
                        {isDone ? <Check className="w-3.5 h-3.5" /> : <Icon className="w-3.5 h-3.5" />}
                      </div>
                      <span className="flex-1">{step.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Navigation Controls (Steps 1 to 4) */}
          {currentStep < 5 && (
            <div className="pt-8 border-t border-slate-100 flex items-center justify-between">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-[#F0ECFF] text-xs sm:text-sm font-semibold transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => navigateTo('landing')}
                  className="text-xs font-semibold text-slate-400 hover:text-slate-600 px-3 py-2"
                >
                  Cancel
                </button>
              )}

              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-[#5B3FD6] hover:bg-[#4b32b8] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#5B3FD6]/20 transition-all"
              >
                <span>{currentStep === 4 ? 'Generate AI Analysis' : 'Next Step'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
