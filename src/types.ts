export type ProficiencyLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export interface UserSkill {
  name: string;
  level: ProficiencyLevel;
  percentage: number; // 0 - 100
}

export interface StudentProfile {
  name: string;
  educationLevel: string;
  degreeCourse: string;
  yearOfStudy: string;
  institution: string;
  interests: string[];
  skills: UserSkill[];
  goals: string[];
  vision3to5Years: string;
  targetCareerId: string;
  profileCompleteness: number;
}

export interface SkillComparison {
  name: string;
  currentPercentage: number;
  targetPercentage: number;
  currentLevel: ProficiencyLevel;
  targetLevel: ProficiencyLevel;
  category: 'Strong Skills' | 'Developing' | 'Priority Skills';
  gap: 'Low' | 'Moderate' | 'High';
  recommendedResource: string;
}

export interface CareerPath {
  id: string;
  title: string;
  matchPercentage: number;
  description: string;
  marketDemand: 'Very High' | 'High' | 'Moderate';
  salaryRange: string;
  skills: SkillComparison[];
  whyMatch: {
    strengths: string[];
    gaps: string[];
  };
  overview: string;
  marketOutlook: string;
  possibleRoles: string[];
  growthRate: string;
}

export interface RoadmapMilestone {
  id: string;
  title: string;
  completed: boolean;
}

export interface RoadmapPhase {
  id: number;
  phaseNumber: string;
  title: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  progressPercentage: number;
  duration: string;
  skills: string[];
  milestones: RoadmapMilestone[];
  recommendedResources: {
    title: string;
    type: 'Course' | 'Project' | 'Certification' | 'Practice' | 'Career Preparation';
  }[];
}

export interface MarketTrendSkill {
  name: string;
  demandPercentage: number;
  growth: string;
  category: string;
}

export interface MarketTrendRole {
  title: string;
  growthPercentage: string;
  openings: string;
  topSkills: string[];
  salaryAvg: string;
}

export interface LearningResource {
  id: string;
  title: string;
  category: 'Courses' | 'Certifications' | 'Projects' | 'Practice' | 'Career Preparation';
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  focus: string;
  provider: string;
  rating: number;
  enrolledStudents: string;
  skillsTaught: string[];
  saved?: boolean;
}

export interface AIChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

export type AppView = 
  | 'landing' 
  | 'onboarding' 
  | 'dashboard' 
  | 'career-explorer' 
  | 'career-detail' 
  | 'skill-gap' 
  | 'roadmap' 
  | 'market-trends' 
  | 'learning' 
  | 'profile';
