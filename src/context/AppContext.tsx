import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  StudentProfile, 
  CareerPath, 
  RoadmapPhase, 
  LearningResource, 
  AppView,
  ProficiencyLevel,
  UserSkill
} from '../types';
import { 
  DEFAULT_STUDENT, 
  CAREER_PATHS, 
  INITIAL_ROADMAP_PHASES, 
  LEARNING_RESOURCES 
} from '../data/sampleData';

interface AppContextType {
  student: StudentProfile;
  careers: CareerPath[];
  activeTargetCareer: CareerPath;
  currentView: AppView;
  selectedCareerId: string;
  roadmapPhases: RoadmapPhase[];
  learningResources: LearningResource[];
  isAssistantOpen: boolean;
  isEditProfileOpen: boolean;
  careerReadinessScore: number;
  navigateTo: (view: AppView, careerId?: string) => void;
  updateStudentProfile: (updates: Partial<StudentProfile>) => void;
  setTargetCareer: (id: string) => void;
  toggleMilestone: (phaseId: number, milestoneId: string) => void;
  toggleSaveResource: (resourceId: string) => void;
  simulateSkillImprovement: (skillName: string) => void;
  setAssistantOpen: (open: boolean) => void;
  setEditProfileOpen: (open: boolean) => void;
  resetToDefaultDemo: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [student, setStudent] = useState<StudentProfile>(() => {
    const saved = localStorage.getItem('careerly_student_profile');
    return saved ? JSON.parse(saved) : DEFAULT_STUDENT;
  });

  const [currentView, setCurrentView] = useState<AppView>('landing');
  const [selectedCareerId, setSelectedCareerId] = useState<string>('ai-ml-engineer');
  const [roadmapPhases, setRoadmapPhases] = useState<RoadmapPhase[]>(() => {
    const saved = localStorage.getItem('careerly_roadmap_phases');
    return saved ? JSON.parse(saved) : INITIAL_ROADMAP_PHASES;
  });
  const [learningResources, setLearningResources] = useState<LearningResource[]>(() => {
    const saved = localStorage.getItem('careerly_resources');
    return saved ? JSON.parse(saved) : LEARNING_RESOURCES;
  });
  const [isAssistantOpen, setAssistantOpen] = useState(false);
  const [isEditProfileOpen, setEditProfileOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('careerly_student_profile', JSON.stringify(student));
  }, [student]);

  useEffect(() => {
    localStorage.setItem('careerly_roadmap_phases', JSON.stringify(roadmapPhases));
  }, [roadmapPhases]);

  useEffect(() => {
    localStorage.setItem('careerly_resources', JSON.stringify(learningResources));
  }, [learningResources]);

  // Calculate career readiness score dynamically from completed roadmap milestones & skills
  const totalMilestones = roadmapPhases.flatMap(p => p.milestones).length;
  const completedMilestones = roadmapPhases.flatMap(p => p.milestones).filter(m => m.completed).length;
  const milestoneFactor = totalMilestones > 0 ? (completedMilestones / totalMilestones) * 40 : 20;
  
  const avgSkillPct = student.skills.reduce((acc, s) => acc + s.percentage, 0) / Math.max(student.skills.length, 1);
  const skillFactor = (avgSkillPct / 100) * 50;
  const careerReadinessScore = Math.min(96, Math.max(45, Math.round(milestoneFactor + skillFactor + 10)));

  const activeTargetCareer = CAREER_PATHS.find(c => c.id === (student.targetCareerId || selectedCareerId)) || CAREER_PATHS[0];

  const navigateTo = (view: AppView, careerId?: string) => {
    if (careerId) {
      setSelectedCareerId(careerId);
    }
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const updateStudentProfile = (updates: Partial<StudentProfile>) => {
    setStudent(prev => ({ ...prev, ...updates }));
  };

  const setTargetCareer = (id: string) => {
    setSelectedCareerId(id);
    setStudent(prev => ({ ...prev, targetCareerId: id }));
  };

  const toggleMilestone = (phaseId: number, milestoneId: string) => {
    setRoadmapPhases(prevPhases => 
      prevPhases.map(phase => {
        if (phase.id !== phaseId) return phase;
        
        const updatedMilestones = phase.milestones.map(m => 
          m.id === milestoneId ? { ...m, completed: !m.completed } : m
        );
        
        const completedCount = updatedMilestones.filter(m => m.completed).length;
        const newProgress = Math.round((completedCount / updatedMilestones.length) * 100);
        const newStatus = newProgress === 100 ? 'completed' : newProgress > 0 ? 'in-progress' : 'upcoming';
        
        return {
          ...phase,
          milestones: updatedMilestones,
          progressPercentage: newProgress,
          status: newStatus
        };
      })
    );
  };

  const toggleSaveResource = (resourceId: string) => {
    setLearningResources(prev => 
      prev.map(r => r.id === resourceId ? { ...r, saved: !r.saved } : r)
    );
  };

  const simulateSkillImprovement = (skillName: string) => {
    setStudent(prev => {
      const updatedSkills = prev.skills.map(s => {
        if (s.name.toLowerCase().includes(skillName.toLowerCase()) || skillName.toLowerCase().includes(s.name.toLowerCase())) {
          const newPct = Math.min(95, s.percentage + 15);
          let newLvl: ProficiencyLevel = s.level;
          if (newPct >= 75) newLvl = 'Advanced';
          else if (newPct >= 50) newLvl = 'Intermediate';
          else newLvl = 'Beginner';
          return { ...s, percentage: newPct, level: newLvl };
        }
        return s;
      });

      // If skill didn't exist, add it
      const exists = updatedSkills.some(s => s.name.toLowerCase().includes(skillName.toLowerCase()));
      if (!exists) {
        updatedSkills.push({
          name: skillName,
          percentage: 60,
          level: 'Intermediate'
        });
      }

      return { ...prev, skills: updatedSkills };
    });
  };

  const resetToDefaultDemo = () => {
    setStudent(DEFAULT_STUDENT);
    setRoadmapPhases(INITIAL_ROADMAP_PHASES);
    setLearningResources(LEARNING_RESOURCES);
    setSelectedCareerId('ai-ml-engineer');
    localStorage.removeItem('careerly_student_profile');
    localStorage.removeItem('careerly_roadmap_phases');
    localStorage.removeItem('careerly_resources');
  };

  return (
    <AppContext.Provider
      value={{
        student,
        careers: CAREER_PATHS,
        activeTargetCareer,
        currentView,
        selectedCareerId,
        roadmapPhases,
        learningResources,
        isAssistantOpen,
        isEditProfileOpen,
        careerReadinessScore,
        navigateTo,
        updateStudentProfile,
        setTargetCareer,
        toggleMilestone,
        toggleSaveResource,
        simulateSkillImprovement,
        setAssistantOpen,
        setEditProfileOpen,
        resetToDefaultDemo
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
