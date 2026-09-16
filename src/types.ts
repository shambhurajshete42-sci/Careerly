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
  | 'career-goal-planner'
  | 'career-explorer' 
  | 'career-detail' 
  | 'skill-gap' 
  | 'roadmap' 
  | 'market-trends' 
  | 'learning' 
  | 'profile';

export interface PortfolioProject {
  title: string;
  description: string;
  skillsPracticed: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface OptionalCertification {
  title: string;
  provider: string;
  type: string;
  note: string;
}

export interface CareerGoalRequirementSkill {
  name: string;
  targetPercentage: number;
  category: 'Core' | 'Technical' | 'Tools' | 'Soft Skills';
  importance: 'Critical' | 'High' | 'Recommended';
  recommendedLearning: string;
}

export interface NextActionStep {
  stepNumber: string;
  title: string;
  description: string;
  actionLabel?: string;
  actionView?: AppView;
}

export interface CareerGoalItem {
  id: string;
  title: string;
  shortDescription: string;
  category: 'Engineering & AI' | 'Data & Analytics' | 'Design & Product' | 'Cloud & Security' | 'Business & Leadership';
  iconName: string;
  overview: string;
  marketOutlook: string;
  salaryRange: string;
  coreSkills: string[];
  technicalSkills: string[];
  toolsAndTechnologies: string[];
  softSkills: string[];
  educationAndKnowledge: string[];
  experience: string[];
  portfolioProjects: PortfolioProject[];
  optionalCertifications: OptionalCertification[];
  requiredSkills: CareerGoalRequirementSkill[];
  nextSteps: NextActionStep[];
}

export interface SkillReadinessComparison {
  name: string;
  currentPercentage: number;
  targetPercentage: number;
  status: 'Strong' | 'Developing' | 'Priority';
  feedbackBadge: 'Strong foundation' | 'Skill to develop' | 'Priority area';
  category: string;
  importance: 'Critical' | 'High' | 'Recommended';
}

