import { 
  StudentProfile, 
  CareerPath, 
  RoadmapPhase, 
  MarketTrendSkill, 
  MarketTrendRole, 
  LearningResource,
  SkillComparison
} from '../types';

export const HACKATHON_METADATA = {
  appName: 'Careerly',
  tagline: 'Your Skills. Your Interests. Your Future.',
  subheading: "AI-powered career guidance that connects what you're good at with where the market is heading.",
  problemStatementId: 'ED-02',
  problemStatementTitle: 'AI-Powered Career Guidance System',
  teamName: 'Careerly Core Team',
  institution: 'GH Raisoni International Skill Tech University, Pune',
  teamMembers: [
    { name: 'Abhijeet Raut', role: 'AI/Logic/Research Developer & Product Lead' },
    { name: 'Shambhuraj Shete', role: 'Full-Stack & AI developer' }
  ]
};

export const DEFAULT_STUDENT: StudentProfile = {
  name: 'Aarav Sharma',
  educationLevel: 'Undergraduate',
  degreeCourse: 'B.Tech Computer Science',
  yearOfStudy: '2nd Year',
  institution: 'GH Raisoni International Skill Tech University, Pune',
  interests: [
    'Artificial Intelligence',
    'Data Science',
    'Web Development',
    'Problem Solving',
    'Research'
  ],
  skills: [
    { name: 'Python', level: 'Intermediate', percentage: 70 },
    { name: 'JavaScript', level: 'Beginner', percentage: 40 },
    { name: 'Problem Solving', level: 'Advanced', percentage: 85 },
    { name: 'Communication', level: 'Intermediate', percentage: 65 },
    { name: 'Data Analysis', level: 'Beginner', percentage: 45 },
    { name: 'Mathematics & Linear Algebra', level: 'Intermediate', percentage: 60 }
  ],
  goals: [
    'High-growth career',
    'High-paying career',
    'Remote-friendly career',
    'Research-oriented career'
  ],
  vision3to5Years: 'Design, build, and deploy production AI/ML architectures and deep learning models solving real-world challenges in a premier tech company.',
  targetCareerId: 'ai-ml-engineer',
  profileCompleteness: 88
};

export const AVAILABLE_INTERESTS: string[] = [
  'Artificial Intelligence',
  'Web Development',
  'Data Science',
  'Cybersecurity',
  'UI/UX Design',
  'Business',
  'Finance',
  'Robotics',
  'Research',
  'Entrepreneurship',
  'Cloud Computing',
  'Mobile Apps'
];

export const AVAILABLE_SKILLS_LIST = [
  { name: 'Python', defaultLevel: 'Intermediate' as const, defaultPct: 70 },
  { name: 'JavaScript', defaultLevel: 'Beginner' as const, defaultPct: 40 },
  { name: 'Problem Solving', defaultLevel: 'Advanced' as const, defaultPct: 85 },
  { name: 'Communication', defaultLevel: 'Intermediate' as const, defaultPct: 65 },
  { name: 'Data Analysis', defaultLevel: 'Beginner' as const, defaultPct: 45 },
  { name: 'Machine Learning', defaultLevel: 'Beginner' as const, defaultPct: 35 },
  { name: 'Deep Learning', defaultLevel: 'Beginner' as const, defaultPct: 20 },
  { name: 'SQL & Databases', defaultLevel: 'Intermediate' as const, defaultPct: 60 },
  { name: 'Statistics & Math', defaultLevel: 'Intermediate' as const, defaultPct: 55 },
  { name: 'Cloud & Docker', defaultLevel: 'Beginner' as const, defaultPct: 25 },
];

export const AVAILABLE_GOALS: string[] = [
  'High-growth career',
  'High-paying career',
  'Creative career',
  'Stable career',
  'Research-oriented career',
  'Entrepreneurship',
  'Remote-friendly career'
];

export const CAREER_PATHS: CareerPath[] = [
  {
    id: 'ai-ml-engineer',
    title: 'AI / Machine Learning Engineer',
    matchPercentage: 92,
    description: 'Build intelligent systems using machine learning, neural networks, data pipelines, and cutting-edge AI technologies.',
    marketDemand: 'Very High',
    salaryRange: '₹14 - 32 LPA (India) / $120k - $190k (Global demo estimate)',
    growthRate: '+34% YoY Growth',
    overview: 'As an AI/Machine Learning Engineer, you bridge raw algorithms and production software. You will design neural network architectures, train predictive models on scalable data pipelines, and deploy LLM applications with low latency and high reliability.',
    marketOutlook: 'Surging enterprise demand for generative AI, specialized agentic workflows, and automated intelligence is creating unprecedented opportunities for qualified ML practitioners.',
    possibleRoles: [
      'Machine Learning Engineer',
      'Applied AI Scientist',
      'LLM Applications Developer',
      'Computer Vision Specialist',
      'MLOps Engineer'
    ],
    whyMatch: {
      strengths: [
        'Strong foundational Python programming skills (70% coverage)',
        'Demonstrated advanced problem-solving aptitude & algorithmic logic',
        'Demonstrated strong passion & selected interest in Artificial Intelligence and Data Science'
      ],
      gaps: [
        'Requires deeper mastery of neural network frameworks (PyTorch/TensorFlow)',
        'Needs hands-on experience in MLOps, model deployment, and Docker containerization',
        'Should expand statistical hypothesis testing and feature engineering workflows'
      ]
    },
    skills: [
      {
        name: 'Python',
        currentPercentage: 70,
        targetPercentage: 95,
        currentLevel: 'Intermediate',
        targetLevel: 'Advanced',
        category: 'Strong Skills',
        gap: 'Low',
        recommendedResource: 'Advanced Python for Production Systems & Concurrency'
      },
      {
        name: 'Machine Learning',
        currentPercentage: 40,
        targetPercentage: 90,
        currentLevel: 'Beginner',
        targetLevel: 'Advanced',
        category: 'Priority Skills',
        gap: 'High',
        recommendedResource: 'Machine Learning Fundamentals & Scikit-Learn Mastery'
      },
      {
        name: 'Statistics & Math',
        currentPercentage: 55,
        targetPercentage: 80,
        currentLevel: 'Intermediate',
        targetLevel: 'Advanced',
        category: 'Developing',
        gap: 'Moderate',
        recommendedResource: 'Applied Linear Algebra & Probability for Machine Learning'
      },
      {
        name: 'Deep Learning',
        currentPercentage: 25,
        targetPercentage: 85,
        currentLevel: 'Beginner',
        targetLevel: 'Advanced',
        category: 'Priority Skills',
        gap: 'High',
        recommendedResource: 'Deep Learning with PyTorch: CNNs, Transformers & LLMs'
      },
      {
        name: 'Model Deployment (MLOps)',
        currentPercentage: 20,
        targetPercentage: 80,
        currentLevel: 'Beginner',
        targetLevel: 'Intermediate',
        category: 'Priority Skills',
        gap: 'High',
        recommendedResource: 'FastAPI, Docker & Cloud Serving for ML Models'
      },
      {
        name: 'Problem Solving',
        currentPercentage: 85,
        targetPercentage: 90,
        currentLevel: 'Advanced',
        targetLevel: 'Advanced',
        category: 'Strong Skills',
        gap: 'Low',
        recommendedResource: 'LeetCode & Algorithmic Design Patterns'
      },
      {
        name: 'Communication',
        currentPercentage: 65,
        targetPercentage: 85,
        currentLevel: 'Intermediate',
        targetLevel: 'Advanced',
        category: 'Strong Skills',
        gap: 'Low',
        recommendedResource: 'Technical Storytelling & AI Product Presentation'
      }
    ]
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    matchPercentage: 87,
    description: 'Transform complex business data into actionable statistical insights, predictive analytics, and algorithmic strategies.',
    marketDemand: 'High',
    salaryRange: '₹12 - 28 LPA (India) / $110k - $175k (Global demo estimate)',
    growthRate: '+28% YoY Growth',
    overview: 'Data Scientists explore patterns in high-dimensional data, build regression and classification algorithms, and craft predictive stories that guide executive leadership.',
    marketOutlook: 'Robust steady demand across finance, healthcare, e-commerce, and SaaS platforms adopting data-first cultures.',
    possibleRoles: [
      'Data Scientist',
      'Quantitative Analyst',
      'Research Data Specialist',
      'Decision Intelligence Engineer'
    ],
    whyMatch: {
      strengths: [
        'Solid quantitative aptitude and interest in exploratory analysis',
        'Strong programming foundation in Python and data manipulation',
        'High logical reasoning and structured problem solving'
      ],
      gaps: [
        'Need deeper SQL query optimization and warehouse modeling',
        'Further development in A/B testing methodologies and causal inference'
      ]
    },
    skills: [
      {
        name: 'Python & Pandas',
        currentPercentage: 70,
        targetPercentage: 90,
        currentLevel: 'Intermediate',
        targetLevel: 'Advanced',
        category: 'Strong Skills',
        gap: 'Low',
        recommendedResource: 'Mastering Pandas for Large-Scale Data Manipulation'
      },
      {
        name: 'Data Analysis',
        currentPercentage: 45,
        targetPercentage: 85,
        currentLevel: 'Beginner',
        targetLevel: 'Advanced',
        category: 'Developing',
        gap: 'Moderate',
        recommendedResource: 'Exploratory Data Analysis & Visual Analytics'
      },
      {
        name: 'SQL & Relational DBs',
        currentPercentage: 55,
        targetPercentage: 85,
        currentLevel: 'Intermediate',
        targetLevel: 'Advanced',
        category: 'Developing',
        gap: 'Moderate',
        recommendedResource: 'Advanced SQL Window Functions & Aggregations'
      }
    ]
  },
  {
    id: 'software-engineer',
    title: 'Full Stack / Software Engineer',
    matchPercentage: 82,
    description: 'Architect scalable web applications, robust backend microservices, and reactive user interfaces with modern frameworks.',
    marketDemand: 'High',
    salaryRange: '₹10 - 25 LPA (India) / $95k - $160k (Global demo estimate)',
    growthRate: '+22% YoY Growth',
    overview: 'Software Engineers build the digital backbone of consumer and enterprise products, writing clean testable code, crafting APIs, and managing databases.',
    marketOutlook: 'Enduring high demand across all industries transitioning to cloud-native platforms.',
    possibleRoles: [
      'Software Development Engineer (SDE I/II)',
      'Backend Engineer',
      'Full Stack Developer',
      'API Engineer'
    ],
    whyMatch: {
      strengths: [
        'Advanced problem solving and algorithmic reasoning',
        'Familiarity with both Python backend and JavaScript frontend'
      ],
      gaps: [
        'Need more depth in React/Next.js ecosystem and state management',
        'System design and distributed caching patterns require practice'
      ]
    },
    skills: [
      {
        name: 'Problem Solving',
        currentPercentage: 85,
        targetPercentage: 90,
        currentLevel: 'Advanced',
        targetLevel: 'Advanced',
        category: 'Strong Skills',
        gap: 'Low',
        recommendedResource: 'System Design Interview & Data Structures'
      },
      {
        name: 'JavaScript & TypeScript',
        currentPercentage: 40,
        targetPercentage: 85,
        currentLevel: 'Beginner',
        targetLevel: 'Advanced',
        category: 'Developing',
        gap: 'Moderate',
        recommendedResource: 'Modern Fullstack React & Node.js'
      }
    ]
  },
  {
    id: 'data-analyst',
    title: 'Business & Data Analyst',
    matchPercentage: 78,
    description: 'Bridge business strategy and raw data through dashboards, KPI tracking, and statistical storytelling.',
    marketDemand: 'Moderate',
    salaryRange: '₹7 - 16 LPA (India) / $75k - $115k (Global demo estimate)',
    growthRate: '+19% YoY Growth',
    overview: 'Data Analysts translate complex operational data into clear visualizations, executive reporting dashboards, and actionable business recommendations.',
    marketOutlook: 'Reliable entry point into analytics with strong corporate demand in consulting, banking, and retail.',
    possibleRoles: [
      'Product Analyst',
      'BI Developer',
      'Analytics Consultant'
    ],
    whyMatch: {
      strengths: [
        'Strong communication skills and analytical mindset',
        'Good grasp of foundational scripting and structured logic'
      ],
      gaps: [
        'Needs mastery of PowerBI / Tableau dashboard design',
        'Executive presentation and metric formulation'
      ]
    },
    skills: [
      {
        name: 'Data Analysis',
        currentPercentage: 45,
        targetPercentage: 85,
        currentLevel: 'Beginner',
        targetLevel: 'Advanced',
        category: 'Developing',
        gap: 'Moderate',
        recommendedResource: 'Business Analytics & PowerBI Dashboards'
      },
      {
        name: 'Communication',
        currentPercentage: 65,
        targetPercentage: 90,
        currentLevel: 'Intermediate',
        targetLevel: 'Advanced',
        category: 'Strong Skills',
        gap: 'Low',
        recommendedResource: 'Executive Data Presentation & Storytelling'
      }
    ]
  }
];

export const INITIAL_ROADMAP_PHASES: RoadmapPhase[] = [
  {
    id: 1,
    phaseNumber: 'PHASE 1',
    title: 'Foundation & Core Aptitude',
    status: 'completed',
    progressPercentage: 100,
    duration: 'Weeks 1 – 6',
    skills: ['Python Fundamentals', 'Linear Algebra & Calculus', 'Algorithmic Problem Solving'],
    milestones: [
      { id: 'm1-1', title: 'Master Python OOP, Generators & Decorators', completed: true },
      { id: 'm1-2', title: 'Calculus, Matrices & Vector Operations for ML', completed: true },
      { id: 'm1-3', title: 'Solve 50+ DSA Problems on LeetCode / HackerRank', completed: true }
    ],
    recommendedResources: [
      { title: 'Python for Engineers & Computer Scientists', type: 'Course' },
      { title: 'Mathematics for Machine Learning Specialization', type: 'Course' }
    ]
  },
  {
    id: 2,
    phaseNumber: 'PHASE 2',
    title: 'Core Machine Learning & Data',
    status: 'in-progress',
    progressPercentage: 55,
    duration: 'Weeks 7 – 14',
    skills: ['Statistics & Probability', 'Scikit-Learn Algorithms', 'Exploratory Data Analysis'],
    milestones: [
      { id: 'm2-1', title: 'Numpy, Pandas & Matplotlib Exploratory Data Pipeline', completed: true },
      { id: 'm2-2', title: 'Regression, Classification & Clustering with Scikit-Learn', completed: true },
      { id: 'm2-3', title: 'Hypothesis Testing, Cross-Validation & Metric Evaluation', completed: false }
    ],
    recommendedResources: [
      { title: 'Applied Machine Learning in Python (Coursera/Michigan)', type: 'Course' },
      { title: 'Customer Churn & Fraud Prediction Case Studies', type: 'Project' }
    ]
  },
  {
    id: 3,
    phaseNumber: 'PHASE 3',
    title: 'Advanced AI & Deep Learning',
    status: 'upcoming',
    progressPercentage: 15,
    duration: 'Weeks 15 – 24',
    skills: ['PyTorch Deep Learning', 'NLP & Transformer Architectures', 'LLM Agent Engineering'],
    milestones: [
      { id: 'm3-1', title: 'Build Neural Networks from Scratch using PyTorch', completed: true },
      { id: 'm3-2', title: 'Fine-tune HuggingFace Transformers for Text Classification', completed: false },
      { id: 'm3-3', title: 'Implement RAG (Retrieval-Augmented Generation) with Vector DBs', completed: false }
    ],
    recommendedResources: [
      { title: 'DeepLearning.AI: Deep Learning Specialization', type: 'Course' },
      { title: 'Generative AI with Large Language Models', type: 'Certification' }
    ]
  },
  {
    id: 4,
    phaseNumber: 'PHASE 4',
    title: 'Portfolio & Applied Systems',
    status: 'upcoming',
    progressPercentage: 0,
    duration: 'Weeks 25 – 32',
    skills: ['Build 3 AI Projects', 'Create GitHub Portfolio', 'Participate in Hackathons'],
    milestones: [
      { id: 'm4-1', title: 'Develop End-to-End Multimodal AI Diagnostic Web App', completed: false },
      { id: 'm4-2', title: 'Document Clean GitHub Repos with CI/CD & Live Demos', completed: false },
      { id: 'm4-3', title: 'Compete in GH Raisoni / Smart India Hackathon Competitions', completed: false }
    ],
    recommendedResources: [
      { title: 'Production ML Deployment on AWS/GCP with Docker', type: 'Course' },
      { title: 'Open Source AI Contribution Guide', type: 'Practice' }
    ]
  },
  {
    id: 5,
    phaseNumber: 'PHASE 5',
    title: 'Career Ready & Industry Placement',
    status: 'upcoming',
    progressPercentage: 0,
    duration: 'Weeks 33 – 38',
    skills: ['Resume Optimization', 'AI Technical Interviews', 'Internship Applications'],
    milestones: [
      { id: 'm5-1', title: 'ATS-Friendly AI Engineer Resume with Impact Metrics', completed: false },
      { id: 'm5-2', title: 'Complete 10 Mock Technical & System Design Interviews', completed: false },
      { id: 'm5-3', title: 'Apply to 30 Targeted AI/ML Summer Internships', completed: false }
    ],
    recommendedResources: [
      { title: 'Cracking the Machine Learning Interview Guide', type: 'Career Preparation' },
      { title: 'Campus Placement & Startup Outreach Toolkit', type: 'Career Preparation' }
    ]
  }
];

export const MARKET_TREND_SKILLS: MarketTrendSkill[] = [
  { name: 'Artificial Intelligence & Generative AI', demandPercentage: 98, growth: '+46%', category: 'AI/ML' },
  { name: 'Machine Learning & Neural Nets', demandPercentage: 92, growth: '+38%', category: 'AI/ML' },
  { name: 'Data Analytics & Big Data', demandPercentage: 84, growth: '+29%', category: 'Data' },
  { name: 'Cloud Computing (AWS / GCP)', demandPercentage: 79, growth: '+25%', category: 'Infrastructure' },
  { name: 'Cybersecurity & Zero Trust', demandPercentage: 74, growth: '+22%', category: 'Security' },
  { name: 'Full-Stack Web (React / Next.js)', demandPercentage: 72, growth: '+18%', category: 'Software' }
];

export const MARKET_TREND_ROLES: MarketTrendRole[] = [
  {
    title: 'AI / Machine Learning Engineer',
    growthPercentage: '+34%',
    openings: '38,500+ active roles',
    topSkills: ['PyTorch', 'Python', 'Transformers', 'FastAPI', 'MLOps'],
    salaryAvg: '₹14 - 32 LPA'
  },
  {
    title: 'Data Scientist',
    growthPercentage: '+28%',
    openings: '29,200+ active roles',
    topSkills: ['Python', 'SQL', 'Statistical Modeling', 'Tableau', 'Scikit-Learn'],
    salaryAvg: '₹12 - 28 LPA'
  },
  {
    title: 'MLOps / AI Platform Engineer',
    growthPercentage: '+42%',
    openings: '16,800+ active roles',
    topSkills: ['Kubernetes', 'Docker', 'Kubeflow', 'MLflow', 'Cloud APIs'],
    salaryAvg: '₹16 - 36 LPA'
  },
  {
    title: 'Cloud Solutions Architect',
    growthPercentage: '+24%',
    openings: '24,000+ active roles',
    topSkills: ['AWS', 'Terraform', 'Microservices', 'Linux', 'Networking'],
    salaryAvg: '₹18 - 38 LPA'
  },
  {
    title: 'Cybersecurity Analyst',
    growthPercentage: '+27%',
    openings: '19,500+ active roles',
    topSkills: ['SIEM', 'Network Security', 'Penetration Testing', 'Python'],
    salaryAvg: '₹11 - 24 LPA'
  }
];

export const LEARNING_RESOURCES: LearningResource[] = [
  {
    id: 'res-1',
    title: 'Machine Learning Fundamentals',
    category: 'Courses',
    level: 'Beginner',
    duration: '6 weeks',
    focus: 'Supervised & unsupervised ML, cost functions, gradient descent & scikit-learn models with hands-on projects.',
    provider: 'Stanford Online / DeepLearning.AI',
    rating: 4.9,
    enrolledStudents: '280k+ students',
    skillsTaught: ['Machine Learning', 'Python', 'Scikit-Learn', 'Feature Engineering']
  },
  {
    id: 'res-2',
    title: 'Python for Data Science & ML Bootcamp',
    category: 'Courses',
    level: 'Intermediate',
    duration: '4 weeks',
    focus: 'In-depth mastery of NumPy, Pandas, Seaborn, Matplotlib, and SQL data transformations for predictive systems.',
    provider: 'Udemy / Jose Portilla',
    rating: 4.8,
    enrolledStudents: '190k+ students',
    skillsTaught: ['Python', 'Data Analysis', 'Pandas', 'Statistics']
  },
  {
    id: 'res-3',
    title: 'End-to-End ML Portfolio Project: Real-time Credit Risk Prediction',
    category: 'Projects',
    level: 'Intermediate',
    duration: '3 weeks',
    focus: 'Architecting an end-to-end predictive pipeline from raw CSV to deployed FastAPI microservice with Docker container.',
    provider: 'Careerly Curated Guided Projects',
    rating: 4.9,
    enrolledStudents: '45k+ students',
    skillsTaught: ['Machine Learning', 'FastAPI', 'Docker', 'Model Deployment']
  },
  {
    id: 'res-4',
    title: 'Deep Learning with PyTorch: From Tensors to Transformers',
    category: 'Courses',
    level: 'Advanced',
    duration: '8 weeks',
    focus: 'Convolutional networks, RNNs, Attention Mechanisms, BERT/GPT architecture fine-tuning and evaluation.',
    provider: 'DeepLearning.AI',
    rating: 4.9,
    enrolledStudents: '110k+ students',
    skillsTaught: ['Deep Learning', 'PyTorch', 'Transformers', 'NLP']
  },
  {
    id: 'res-5',
    title: 'AWS Certified Machine Learning - Specialty Prep',
    category: 'Certifications',
    level: 'Advanced',
    duration: '5 weeks',
    focus: 'Cloud ML infrastructure, SageMaker pipelines, model monitoring, security compliance and distributed training.',
    provider: 'Amazon Web Services',
    rating: 4.7,
    enrolledStudents: '64k+ students',
    skillsTaught: ['Model Deployment', 'Cloud & Docker', 'SageMaker', 'MLOps']
  },
  {
    id: 'res-6',
    title: 'Daily Data Structures & Algorithmic Problem Solving',
    category: 'Practice',
    level: 'Intermediate',
    duration: 'Self-paced',
    focus: 'High-frequency LeetCode algorithmic patterns: binary trees, graphs, dynamic programming, and complexity optimization.',
    provider: 'LeetCode & NeetCode',
    rating: 4.9,
    enrolledStudents: '500k+ learners',
    skillsTaught: ['Problem Solving', 'Python', 'Algorithms']
  },
  {
    id: 'res-7',
    title: 'AI Engineer Technical Resume & Portfolio Review Workshop',
    category: 'Career Preparation',
    level: 'Intermediate',
    duration: '1 week',
    focus: 'Formulating high-impact STAR bullet points, GitHub portfolio presentation, and interview simulation walkthroughs.',
    provider: 'Careerly Mentorship Network',
    rating: 4.9,
    enrolledStudents: '28k+ graduates',
    skillsTaught: ['Communication', 'Interview Preparation', 'Portfolio Building']
  }
];

export const AI_ASSISTANT_QA: Record<string, string> = {
  'what career suits my skills': `Based on your profile, your primary potential fit is **AI / Machine Learning Engineer** with a **92% match score**.

Here is why:
• You already hold solid Python fundamentals (70%) and advanced problem-solving ability (85%).
• Your expressed interests in Artificial Intelligence, Data Science, and Research directly align with algorithmic and ML roles.
• Alternative strong fits include **Data Scientist (87%)** and **Software Engineer (82%)**.`,

  'what should i learn next': `Based on your current profile, **Machine Learning fundamentals** and **Applied Statistics** are your highest-priority skills.

You already have a good Python foundation, so strengthening core ML concepts (Scikit-Learn, regression, classification, cross-validation) will boost your AI Engineer match and close your biggest readiness gap.

Recommended immediate next step:
Start with *"Machine Learning Fundamentals & Scikit-Learn"* (estimated 6 weeks).`,

  'why was ai engineer recommended': `AI / Machine Learning Engineer was recommended because:
1. **High Skill Overlap:** Your strong Python base and mathematical logic match 70%+ of baseline prerequisites.
2. **Expressed Aspirations:** You selected High-Growth Careers, AI/Technology, and building scalable systems.
3. **Market Alignment:** The current tech market has a +34% YoY surge in demand for AI & ML engineers with 38,000+ active openings in India and globally.

*Note: This is an AI match and guidance projection, not an absolute prescription. You can explore adjacent paths anytime!*`,

  'how can i improve my skill match': `To boost your career readiness score from **72% towards 90%+**:
1. **Bridge Priority Gaps:** Level up Machine Learning from Beginner to Intermediate.
2. **Build Proof-of-Work:** Complete at least 2 real-world deployed projects (e.g. an API serving an ML model using FastAPI + Docker).
3. **Solidify Statistics:** Reinforce hypothesis testing and probability concepts.
4. **Follow the Roadmap:** Complete Phase 2 milestones in your personalized roadmap!`,

  'what projects should i build': `Top 3 recommended projects for your current level:
1. **End-to-End Churn or Fraud Detection API:** Train a model in Scikit-Learn and deploy an interactive prediction endpoint with FastAPI.
2. **RAG Knowledge Assistant:** Build a document question-answering tool using LangChain / LlamaIndex with a lightweight vector database.
3. **Computer Vision Defect or Object Classifier:** Train a PyTorch CNN or fine-tune a YOLO model on custom imagery.

These demonstrate both machine learning understanding and full-stack software integration!`
};
