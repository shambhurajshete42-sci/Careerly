import { CareerGoalItem, UserSkill, SkillReadinessComparison } from '../types';

export const CAREER_GOALS: CareerGoalItem[] = [
  {
    id: 'ai-ml-engineer',
    title: 'AI / Machine Learning Engineer',
    shortDescription: 'Build intelligent systems, neural networks, predictive models, and autonomous AI agents.',
    category: 'Engineering & AI',
    iconName: 'Brain',
    overview: "As an AI / Machine Learning Engineer, you will translate theoretical algorithms and research into production-grade predictive models, LLM agents, and scalable intelligent systems.",
    marketOutlook: '+34% YoY job growth with massive demand across tech, finance, healthcare, and robotics.',
    salaryRange: '₹14 - 35 LPA (India) / $125,000 - $195,000 (Global)',
    coreSkills: [
      'Python Programming',
      'Problem Solving & DSA',
      'Linear Algebra & Calculus',
      'Probability & Statistics',
      'Data Structures & Algorithms'
    ],
    technicalSkills: [
      'Machine Learning Algorithms',
      'Deep Learning & Neural Networks',
      'SQL & Relational Databases',
      'Exploratory Data Analysis',
      'Model Evaluation & Tuning',
      'MLOps & Model Serving'
    ],
    toolsAndTechnologies: [
      'Git & GitHub',
      'Jupyter Notebooks',
      'NumPy & Pandas',
      'Scikit-Learn',
      'PyTorch',
      'TensorFlow',
      'Docker',
      'FastAPI'
    ],
    softSkills: [
      'Analytical Thinking',
      'Communication & Presentation',
      'Structured Problem Solving',
      'Cross-functional Teamwork',
      'Critical Thinking',
      'Continuous Learning'
    ],
    educationAndKnowledge: [
      'Computer Science & Programming Fundamentals',
      'Applied Mathematics & Statistical Inference',
      'Matrix Operations & Vector Calculus',
      'Artificial Intelligence Theory & Heuristics',
      'Note: Hands-on project portfolio & proven competence matter far more than any single specific degree title.'
    ],
    experience: [
      'Internships at AI startups or tech labs',
      'Kaggle and competitive data science hackathons',
      'Building and deploying real-world open-source AI projects',
      'Contributing to open-source ML libraries (Hugging Face, Scikit-Learn)',
      'Undergraduate research papers or technical blogs'
    ],
    portfolioProjects: [
      {
        title: 'Real Estate House Price Prediction Engine',
        description: 'End-to-end regression model with automated feature engineering, outlier detection, and live Streamlit/FastAPI interface.',
        skillsPracticed: ['Python', 'Scikit-Learn', 'Pandas', 'Feature Engineering'],
        difficulty: 'Beginner'
      },
      {
        title: 'Customer Churn Predictor with SHAP Interpretability',
        description: 'Binary classification pipeline using XGBoost to identify at-risk customers and explain feature importance with SHAP values.',
        skillsPracticed: ['Machine Learning', 'XGBoost', 'Data Analysis', 'Model Explainability'],
        difficulty: 'Intermediate'
      },
      {
        title: 'Deep Learning Medical Image Classification System',
        description: 'Transfer learning model using PyTorch ResNet to diagnose chest X-ray conditions with Grad-CAM visualization heatmaps.',
        skillsPracticed: ['Deep Learning', 'PyTorch', 'Computer Vision', 'CNNs'],
        difficulty: 'Intermediate'
      },
      {
        title: 'Autonomous Multi-Agent RAG Research Assistant',
        description: 'Retrieval-Augmented Generation agent leveraging vector embeddings, LangChain, and ChromaDB for semantic research retrieval.',
        skillsPracticed: ['LLMs', 'Vector DBs', 'Python', 'FastAPI'],
        difficulty: 'Advanced'
      },
      {
        title: 'Production MLOps CI/CD Deployment Pipeline',
        description: 'Containerized model deployment using Docker, GitHub Actions, and Prometheus monitoring for real-time drift detection.',
        skillsPracticed: ['MLOps', 'Docker', 'CI/CD', 'API Serving'],
        difficulty: 'Advanced'
      }
    ],
    optionalCertifications: [
      {
        title: 'Deep Learning Specialization (DeepLearning.AI)',
        provider: 'Coursera / Andrew Ng',
        type: 'Optional Foundation Credential',
        note: 'Optional certification to establish deep conceptual mastery of neural nets.'
      },
      {
        title: 'AWS Certified Machine Learning – Specialty',
        provider: 'Amazon Web Services',
        type: 'Optional Cloud ML Credential',
        note: 'Optional credential demonstrating enterprise cloud deployment skills.'
      },
      {
        title: 'TensorFlow Developer Certificate',
        provider: 'Google',
        type: 'Optional Framework Credential',
        note: 'Optional credential verifying hands-on TensorFlow model building.'
      }
    ],
    requiredSkills: [
      { name: 'Python', targetPercentage: 85, category: 'Core', importance: 'Critical', recommendedLearning: 'Advanced Python idioms, OOP, and data pipelines' },
      { name: 'Problem Solving', targetPercentage: 85, category: 'Core', importance: 'Critical', recommendedLearning: 'Data structures, algorithm complexity & logic' },
      { name: 'Machine Learning', targetPercentage: 80, category: 'Technical', importance: 'Critical', recommendedLearning: 'Supervised/unsupervised algorithms with Scikit-Learn' },
      { name: 'Statistics & Math', targetPercentage: 75, category: 'Core', importance: 'High', recommendedLearning: 'Linear algebra, probability density, and hypothesis testing' },
      { name: 'Deep Learning', targetPercentage: 80, category: 'Technical', importance: 'High', recommendedLearning: 'PyTorch neural architectures, CNNs, and Transformers' },
      { name: 'SQL & Databases', targetPercentage: 70, category: 'Technical', importance: 'High', recommendedLearning: 'Joins, aggregations, and feature extraction queries' },
      { name: 'Communication', targetPercentage: 75, category: 'Soft Skills', importance: 'Recommended', recommendedLearning: 'Technical storytelling & business metric presentation' }
    ],
    nextSteps: [
      {
        stepNumber: '01',
        title: 'Strengthen Applied Statistics & Math',
        description: 'Review linear algebra matrices, probability distributions, and hypothesis testing to understand algorithmic foundations.',
        actionLabel: 'Explore Learning Modules',
        actionView: 'learning'
      },
      {
        stepNumber: '02',
        title: 'Master Scikit-Learn & ML Workflows',
        description: 'Practice supervised and unsupervised learning algorithms on real-world datasets with feature selection and cross-validation.',
        actionLabel: 'Analyze Skill Gaps',
        actionView: 'skill-gap'
      },
      {
        stepNumber: '03',
        title: 'Build Your First ML Portfolio Project',
        description: 'Develop a complete predictive model (such as Customer Churn or House Price Prediction) and push clean code to GitHub.',
        actionLabel: 'Check Learning Projects',
        actionView: 'learning'
      },
      {
        stepNumber: '04',
        title: 'Explore Deep Learning with PyTorch',
        description: 'Build neural networks from scratch, fine-tune pre-trained vision/NLP models, and understand gradient descent optimization.',
        actionLabel: 'Open Roadmap',
        actionView: 'roadmap'
      }
    ]
  },
  {
    id: 'software-engineer',
    title: 'Software Engineer',
    shortDescription: 'Architect robust backend systems, scalable APIs, and reactive full-stack web applications.',
    category: 'Engineering & AI',
    iconName: 'Code',
    overview: "Software Engineers design, construct, and maintain the software systems that power modern society. You will build resilient microservices, design low-latency databases, and deliver clean, testable code.",
    marketOutlook: '+22% YoY steady demand across SaaS, fintech, enterprise cloud, and consumer tech.',
    salaryRange: '₹10 - 28 LPA (India) / $105,000 - $170,000 (Global)',
    coreSkills: [
      'Object-Oriented Programming',
      'Data Structures & Algorithms',
      'System Architecture Fundamentals',
      'Algorithmic Complexity (Big-O)',
      'Code Quality & Unit Testing'
    ],
    technicalSkills: [
      'Backend Microservices & APIs',
      'Frontend Frameworks (React/Next.js)',
      'Relational & NoSQL Databases',
      'System Design & Distributed Systems',
      'RESTful & GraphQL Protocols',
      'Authentication & Security'
    ],
    toolsAndTechnologies: [
      'Git & GitHub',
      'TypeScript / JavaScript',
      'Node.js / Express',
      'PostgreSQL / MongoDB',
      'Docker & Containerization',
      'Postman & API Testing',
      'Redis Caching'
    ],
    softSkills: [
      'Debugging Mindset & Persistence',
      'Team Collaboration & Code Reviews',
      'Effective Technical Writing',
      'Time & Sprint Management',
      'Empathy for User Experience'
    ],
    educationAndKnowledge: [
      'Computer Science Principles (Operating Systems, Networking, DBs)',
      'Software Design Patterns (MVC, Factory, Observer)',
      'Concurrency, Threading & Async Execution',
      'Note: Demonstrable coding proficiency, GitHub commits, and shipped apps take precedence over formal degree requirements.'
    ],
    experience: [
      'Software engineering internships or co-ops',
      'Hackathon project development in teams',
      'Building live deployed web applications with actual users',
      'Active open-source contributions to public repositories',
      'Freelance client projects or campus tech club leadership'
    ],
    portfolioProjects: [
      {
        title: 'Real-time Collaborative Task & Kanban Board',
        description: 'Full-stack application featuring WebSockets for instant live multi-user updates, drag-and-drop UI, and role-based permissions.',
        skillsPracticed: ['React', 'Node.js', 'WebSockets', 'PostgreSQL'],
        difficulty: 'Intermediate'
      },
      {
        title: 'High-Throughput URL Shortener & Analytics Service',
        description: 'Scalable REST API with Redis caching, rate limiting, Base62 encoding, and click analytics tracking.',
        skillsPracticed: ['System Design', 'Redis', 'Node.js', 'Docker'],
        difficulty: 'Intermediate'
      },
      {
        title: 'Multi-Tenant E-Commerce API with Stripe Payments',
        description: 'Microservice backend with JWT auth, idempotency keys, payment webhooks, and transactional database integrity.',
        skillsPracticed: ['TypeScript', 'Stripe API', 'PostgreSQL', 'Jest'],
        difficulty: 'Advanced'
      },
      {
        title: 'Distributed File Storage & Sharing Engine',
        description: 'Cloud-native storage service with chunked file uploads, pre-signed S3 URLs, and asynchronous thumbnail workers.',
        skillsPracticed: ['Cloud Storage', 'Microservices', 'Docker', 'Async Workers'],
        difficulty: 'Advanced'
      }
    ],
    optionalCertifications: [
      {
        title: 'AWS Certified Developer – Associate',
        provider: 'Amazon Web Services',
        type: 'Optional Cloud Developer Credential',
        note: 'Optional certification demonstrating serverless and cloud engineering skills.'
      },
      {
        title: 'Meta Back-End Developer Professional Certificate',
        provider: 'Coursera / Meta',
        type: 'Optional Industry Certificate',
        note: 'Optional credential verifying API development and database design.'
      }
    ],
    requiredSkills: [
      { name: 'Problem Solving', targetPercentage: 85, category: 'Core', importance: 'Critical', recommendedLearning: 'Data structures, algorithm complexity & system design' },
      { name: 'JavaScript', targetPercentage: 80, category: 'Technical', importance: 'Critical', recommendedLearning: 'Modern ES6+, TypeScript, and async runtime mechanics' },
      { name: 'Python', targetPercentage: 75, category: 'Core', importance: 'High', recommendedLearning: 'Scripting, backend frameworks (FastAPI/Django), and automation' },
      { name: 'SQL & Databases', targetPercentage: 75, category: 'Technical', importance: 'High', recommendedLearning: 'Relational schemas, indexes, and ACID transactions' },
      { name: 'Cloud & Docker', targetPercentage: 70, category: 'Tools', importance: 'High', recommendedLearning: 'Containerizing services and basic cloud deployment' },
      { name: 'Communication', targetPercentage: 75, category: 'Soft Skills', importance: 'Recommended', recommendedLearning: 'Clear pull request descriptions and architectural documentation' }
    ],
    nextSteps: [
      {
        stepNumber: '01',
        title: 'Deepen TypeScript & Full-Stack Fundamentals',
        description: 'Strengthen TypeScript types, React state management, and modern component lifecycle design.',
        actionLabel: 'View Skill Gap',
        actionView: 'skill-gap'
      },
      {
        stepNumber: '02',
        title: 'Build a Full-Stack CRUD Application',
        description: 'Create an end-to-end web service with authentication, database persistence, and API validation.',
        actionLabel: 'Check Projects',
        actionView: 'learning'
      },
      {
        stepNumber: '03',
        title: 'Practice Algorithmic Problem Solving',
        description: 'Solve LeetCode medium questions focusing on hash maps, two pointers, trees, and dynamic programming.',
        actionLabel: 'View Roadmap',
        actionView: 'roadmap'
      },
      {
        stepNumber: '04',
        title: 'Deploy to Cloud with Docker',
        description: 'Containerize your backend services and deploy them with automated CI/CD pipelines.',
        actionLabel: 'Learning Resources',
        actionView: 'learning'
      }
    ]
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    shortDescription: 'Uncover hidden patterns, build predictive statistical models, and drive data-informed decisions.',
    category: 'Data & Analytics',
    iconName: 'Database',
    overview: "Data Scientists combine statistical rigor, algorithmic expertise, and business intuition to transform massive unstructured datasets into actionable predictive intelligence and executive strategic insights.",
    marketOutlook: '+28% YoY growth across fintech, e-commerce, healthcare, and SaaS product teams.',
    salaryRange: '₹12 - 30 LPA (India) / $115,000 - $180,000 (Global)',
    coreSkills: [
      'Statistical Modeling & Probability',
      'Exploratory Data Analysis (EDA)',
      'Hypothesis Testing & A/B Testing',
      'Machine Learning Modeling',
      'Data Wrangling & Cleaning'
    ],
    technicalSkills: [
      'Advanced SQL & Query Optimization',
      'Python (Pandas, NumPy, SciPy)',
      'Data Visualization & Dashboards',
      'Feature Engineering & Transformation',
      'Time Series Forecasting',
      'Natural Language Processing Basics'
    ],
    toolsAndTechnologies: [
      'Jupyter Notebooks',
      'Pandas & Polars',
      'Matplotlib, Seaborn, Plotly',
      'Scikit-Learn',
      'SQL / BigQuery / Snowflake',
      'Git & GitHub'
    ],
    softSkills: [
      'Business Acumen & Curiosity',
      'Data Storytelling & Executive Reporting',
      'Critical Questioning',
      'Collaborative Problem Solving',
      'Stakeholder Communication'
    ],
    educationAndKnowledge: [
      'Applied Statistics, Experimental Design & Sampling',
      'Linear Regression, Logistics, & Non-parametric Tests',
      'Data Governance, Privacy, & Ethical AI Practices',
      'Note: Real-world analytical project case studies weigh heavily in hiring.'
    ],
    experience: [
      'Data science internships or analytics apprenticeships',
      'Kaggle competition participation & public notebooks',
      'End-to-end data analysis on messy open datasets',
      'Publishing data stories or interactive dashboard case studies',
      'Research collaborations or academic lab data analysis'
    ],
    portfolioProjects: [
      {
        title: 'Customer Lifetime Value (LTV) & Churn Forecast',
        description: 'Predictive survival analysis and cohort modeling to estimate multi-year customer spending trajectories.',
        skillsPracticed: ['Python', 'Survival Analysis', 'Pandas', 'Business Analytics'],
        difficulty: 'Intermediate'
      },
      {
        title: 'Automated A/B Testing & Causal Inference Framework',
        description: 'Statistical engine that computes statistical power, minimum detectable effect, and Bayesian vs Frequentist significance.',
        skillsPracticed: ['Statistics', 'Hypothesis Testing', 'Python', 'Plotly'],
        difficulty: 'Intermediate'
      },
      {
        title: 'E-Commerce Product Recommendation Engine',
        description: 'Collaborative filtering and matrix factorization system deployed as a live REST service with evaluation metrics (NDCG, MAP).',
        skillsPracticed: ['Machine Learning', 'Recommendation Systems', 'FastAPI'],
        difficulty: 'Advanced'
      },
      {
        title: 'Financial Market Sentiment & News Trend Analyzer',
        description: 'NLP sentiment extraction model analyzing earnings calls transcripts and headlines to predict volatility spikes.',
        skillsPracticed: ['NLP', 'Sentiment Analysis', 'Time Series', 'Python'],
        difficulty: 'Advanced'
      }
    ],
    optionalCertifications: [
      {
        title: 'IBM Data Science Professional Certificate',
        provider: 'Coursera / IBM',
        type: 'Optional Comprehensive Certificate',
        note: 'Optional certification covering end-to-end data science methodology.'
      },
      {
        title: 'Google Advanced Data Analytics Certificate',
        provider: 'Google Career Certificates',
        type: 'Optional Analytics Credential',
        note: 'Optional credential focusing on predictive modeling and statistical workflows.'
      }
    ],
    requiredSkills: [
      { name: 'Python', targetPercentage: 85, category: 'Core', importance: 'Critical', recommendedLearning: 'Pandas, NumPy, and scientific computing workflows' },
      { name: 'Data Analysis', targetPercentage: 85, category: 'Technical', importance: 'Critical', recommendedLearning: 'Exploratory data visualization and statistical summaries' },
      { name: 'Statistics & Math', targetPercentage: 80, category: 'Core', importance: 'Critical', recommendedLearning: 'Probability density, regression diagnostics, and A/B test design' },
      { name: 'Machine Learning', targetPercentage: 75, category: 'Technical', importance: 'High', recommendedLearning: 'Supervised regression, classification, and ensemble trees' },
      { name: 'SQL & Databases', targetPercentage: 80, category: 'Technical', importance: 'High', recommendedLearning: 'Complex joins, window functions, and CTEs' },
      { name: 'Communication', targetPercentage: 80, category: 'Soft Skills', importance: 'High', recommendedLearning: 'Synthesizing data insights into business recommendations' }
    ],
    nextSteps: [
      {
        stepNumber: '01',
        title: 'Master Advanced SQL Window Functions',
        description: 'Level up your database querying skills with CTEs, rolling aggregations, and cohort segmentation.',
        actionLabel: 'View Skill Gap',
        actionView: 'skill-gap'
      },
      {
        stepNumber: '02',
        title: 'Execute an End-to-End EDA Case Study',
        description: 'Take a messy raw dataset, perform cleaning, uncover non-obvious correlations, and publish visualizations.',
        actionLabel: 'Browse Learning Resources',
        actionView: 'learning'
      },
      {
        stepNumber: '03',
        title: 'Learn A/B Testing & Statistical Experimentation',
        description: 'Understand p-values, sample size sizing, type I/II errors, and causal inference techniques.',
        actionLabel: 'View Roadmap',
        actionView: 'roadmap'
      },
      {
        stepNumber: '04',
        title: 'Deploy an Interactive Data Dashboard',
        description: 'Combine model predictions into an interactive Streamlit or Plotly dashboard with clean storytelling.',
        actionLabel: 'View Projects',
        actionView: 'learning'
      }
    ]
  },
  {
    id: 'data-analyst',
    title: 'Data Analyst',
    shortDescription: 'Translate business data into intuitive dashboards, KPI reports, and growth strategies.',
    category: 'Data & Analytics',
    iconName: 'BarChart3',
    overview: "Data Analysts bridge corporate decision makers and technical data infrastructure. You will model business metrics, track KPIs, and create impactful visual dashboards that drive revenue and operational efficiency.",
    marketOutlook: '+19% steady corporate demand in retail, banking, consulting, logistics, and tech.',
    salaryRange: '₹7 - 18 LPA (India) / $75,000 - $120,000 (Global)',
    coreSkills: [
      'Business Acumen & Metric Formulation',
      'Data Cleaning & Validation',
      'Descriptive & Diagnostic Analytics',
      'Visual Dashboard Design',
      'Structured Problem Solving'
    ],
    technicalSkills: [
      'SQL Querying & Data Warehousing',
      'Excel & Advanced Spreadsheet Modeling',
      'Business Intelligence (PowerBI / Tableau)',
      'Python / R for Data Transformation',
      'KPI Benchmarking & Reporting'
    ],
    toolsAndTechnologies: [
      'PowerBI / Tableau',
      'Advanced Excel (VLOOKUP, Pivot, PowerQuery)',
      'PostgreSQL / BigQuery',
      'Python (Pandas, Seaborn)',
      'Git & Google Looker Studio'
    ],
    softSkills: [
      'Stakeholder Communication',
      'Visual Storytelling',
      'Attention to Detail',
      'Curiosity & Inquisitiveness',
      'Time Management'
    ],
    educationAndKnowledge: [
      'Fundamentals of Business Economics & Finance',
      'Relational Schema Concepts (Star & Snowflake schemas)',
      'Data Quality Standards and Metric Auditing',
      'Note: A portfolio of published dashboards demonstrates capability far better than traditional credentials.'
    ],
    experience: [
      'Business or data analyst internships',
      'Freelance dashboard development for small businesses or student clubs',
      'Participating in data visualization challenges (e.g. MakeoverMonday)',
      'Building public Tableau Public or PowerBI portfolios',
      'Conducting market research case competitions'
    ],
    portfolioProjects: [
      {
        title: 'Executive SaaS Revenue & Retention Dashboard',
        description: 'Interactive PowerBI dashboard tracking MRR, ARR, churn rate, and CAC payback period across customer cohorts.',
        skillsPracticed: ['PowerBI', 'DAX', 'SQL', 'Financial Metrics'],
        difficulty: 'Beginner'
      },
      {
        title: 'Supply Chain Logistics & Delivery Performance Tracker',
        description: 'SQL-powered analytical report analyzing shipping bottlenecks, vendor SLA compliance, and route delivery delays.',
        skillsPracticed: ['SQL', 'Tableau', 'Data Modeling', 'KPI Tracking'],
        difficulty: 'Intermediate'
      },
      {
        title: 'Omnichannel Marketing Campaign Attribution Model',
        description: 'Attribution analysis modeling customer touchpoints across social, search, and email to optimize marketing spend.',
        skillsPracticed: ['Python', 'Pandas', 'Excel', 'Marketing Analytics'],
        difficulty: 'Intermediate'
      }
    ],
    optionalCertifications: [
      {
        title: 'Google Data Analytics Professional Certificate',
        provider: 'Coursera / Google',
        type: 'Optional Foundation Credential',
        note: 'Optional widely recognized introductory credential for data analysts.'
      },
      {
        title: 'Microsoft Certified: Power BI Data Analyst Associate (PL-300)',
        provider: 'Microsoft',
        type: 'Optional BI Credential',
        note: 'Optional credential validating enterprise dashboard and DAX data modeling expertise.'
      }
    ],
    requiredSkills: [
      { name: 'Data Analysis', targetPercentage: 85, category: 'Technical', importance: 'Critical', recommendedLearning: 'KPI tracking, trend analysis, and exploratory summaries' },
      { name: 'SQL & Databases', targetPercentage: 80, category: 'Technical', importance: 'Critical', recommendedLearning: 'Aggregations, group by filters, and joining warehouse tables' },
      { name: 'Communication', targetPercentage: 85, category: 'Soft Skills', importance: 'Critical', recommendedLearning: 'Presenting insights concisely to non-technical stakeholders' },
      { name: 'Problem Solving', targetPercentage: 75, category: 'Core', importance: 'High', recommendedLearning: 'Deconstructing ambiguous business problems into quantifiable metrics' },
      { name: 'Python', targetPercentage: 60, category: 'Core', importance: 'Recommended', recommendedLearning: 'Data wrangling with Pandas and automated reporting scripts' }
    ],
    nextSteps: [
      {
        stepNumber: '01',
        title: 'Master SQL for Analytics & Aggregations',
        description: 'Practice writing complex queries, subqueries, and window functions to summarize business transactions.',
        actionLabel: 'Analyze Skill Gaps',
        actionView: 'skill-gap'
      },
      {
        stepNumber: '02',
        title: 'Build a Live PowerBI or Tableau Dashboard',
        description: 'Connect to an open business dataset and create an executive dashboard with drill-down filters.',
        actionLabel: 'Browse Projects',
        actionView: 'learning'
      },
      {
        stepNumber: '03',
        title: 'Learn Financial & Growth Metric Formulations',
        description: 'Study how tech and retail businesses measure CAC, LTV, churn, gross margin, and conversion rates.',
        actionLabel: 'Open Roadmap',
        actionView: 'roadmap'
      }
    ]
  },
  {
    id: 'cybersecurity-analyst',
    title: 'Cybersecurity Analyst',
    shortDescription: 'Protect digital assets, defend against cyber threats, and secure enterprise infrastructure.',
    category: 'Cloud & Security',
    iconName: 'Shield',
    overview: "Cybersecurity Analysts safeguard networks, sensitive user data, and cloud infrastructure from threats. You will monitor security incident telemetry, conduct vulnerability assessments, and implement defensive countermeasures.",
    marketOutlook: '+31% YoY surge fueled by escalating cloud migration and global compliance standards.',
    salaryRange: '₹9 - 24 LPA (India) / $95,000 - $160,000 (Global)',
    coreSkills: [
      'Network Protocols & Topologies (TCP/IP, DNS, VPN)',
      'Operating Systems Internals (Linux & Windows)',
      'Security Incident & Event Management (SIEM)',
      'Threat Modeling & Vulnerability Assessment',
      'Analytical Investigation & Forensics'
    ],
    technicalSkills: [
      'Network Packet Analysis (Wireshark)',
      'Log Analysis & Threat Hunting',
      'Identity & Access Management (IAM)',
      'Penetration Testing Fundamentals',
      'Scripting for Security Automation (Python / Bash)',
      'Firewalls, IDS/IPS & Endpoint Detection'
    ],
    toolsAndTechnologies: [
      'Wireshark & Nmap',
      'Splunk / ELK Stack',
      'Linux CLI & Bash Scripting',
      'Metasploit / Burp Suite',
      'Kali Linux',
      'Git & Docker'
    ],
    softSkills: [
      'Crisis Composure & Decision Making',
      'Ethical Responsibility & Integrity',
      'Inquisitive Investigative Mindset',
      'Clear Incident Documentation',
      'Cross-departmental Communication'
    ],
    educationAndKnowledge: [
      'Cyber Law, Compliance Frameworks (NIST, ISO 27001, SOC 2)',
      'Cryptographic Principles (Public/Private Keys, Hashing, TLS)',
      'Web Application Vulnerabilities (OWASP Top 10)',
      'Note: Hands-on labs (TryHackMe, HackTheBox) are highly recognized proof of skill.'
    ],
    experience: [
      'Security Operations Center (SOC) internships',
      'Participating in Capture The Flag (CTF) security competitions',
      'Active practice on platforms like TryHackMe and HackTheBox',
      'College IT infrastructure or network administration volunteering',
      'Writing security research advisories or CVE teardowns'
    ],
    portfolioProjects: [
      {
        title: 'Home Lab SOC & SIEM Log Monitoring System',
        description: 'Configured a virtualized Linux/Windows network with Splunk to detect and alert on brute force and port scan attacks.',
        skillsPracticed: ['Splunk', 'SIEM', 'Linux', 'Network Security'],
        difficulty: 'Intermediate'
      },
      {
        title: 'Automated Vulnerability Scanner & Report Generator',
        description: 'Python script utilizing Nmap libraries to scan local subnets, catalog open ports, and highlight outdated service versions.',
        skillsPracticed: ['Python', 'Nmap', 'Bash', 'Vulnerability Assessment'],
        difficulty: 'Intermediate'
      },
      {
        title: 'OWASP Top 10 Web Vulnerability Assessment Lab',
        description: 'Comprehensive audit of intentionally vulnerable web applications detailing SQL injection, XSS, and CSRF mitigation steps.',
        skillsPracticed: ['OWASP Top 10', 'Burp Suite', 'Web Security', 'Technical Writing'],
        difficulty: 'Advanced'
      }
    ],
    optionalCertifications: [
      {
        title: 'CompTIA Security+',
        provider: 'CompTIA',
        type: 'Optional Industry Standard Credential',
        note: 'Optional foundational credential widely recognized by government and corporate recruiters.'
      },
      {
        title: 'Certified Ethical Hacker (CEH) / eJPT',
        provider: 'eLearnSecurity / EC-Council',
        type: 'Optional Practical Pen-Testing Credential',
        note: 'Optional credential to demonstrate practical offensive and defensive skills.'
      }
    ],
    requiredSkills: [
      { name: 'Problem Solving', targetPercentage: 80, category: 'Core', importance: 'Critical', recommendedLearning: 'Systematic diagnosis of abnormal system behavior and exploit vectors' },
      { name: 'Python', targetPercentage: 70, category: 'Core', importance: 'High', recommendedLearning: 'Security automation, socket programming, and log parsing' },
      { name: 'Cloud & Docker', targetPercentage: 70, category: 'Tools', importance: 'High', recommendedLearning: 'Securing cloud VPCs, IAM policies, and container environments' },
      { name: 'Communication', targetPercentage: 75, category: 'Soft Skills', importance: 'High', recommendedLearning: 'Writing concise Incident Response reports for leadership' },
      { name: 'JavaScript', targetPercentage: 55, category: 'Technical', importance: 'Recommended', recommendedLearning: 'Understanding client-side DOM injection and XSS exploits' }
    ],
    nextSteps: [
      {
        stepNumber: '01',
        title: 'Build a Virtual Home Security Lab',
        description: 'Set up VirtualBox or VMware with Kali Linux and an intentionally vulnerable VM to practice network inspection.',
        actionLabel: 'Analyze Skill Gaps',
        actionView: 'skill-gap'
      },
      {
        stepNumber: '02',
        title: 'Complete 20+ CTF Rooms on TryHackMe',
        description: 'Practice network fundamentals, web exploits, and privilege escalation through guided exercises.',
        actionLabel: 'Browse Learning Resources',
        actionView: 'learning'
      },
      {
        stepNumber: '03',
        title: 'Learn Log Analysis with Splunk / ELK',
        description: 'Ingest firewall and auth logs to build custom search queries and automated alert triggers.',
        actionLabel: 'View Roadmap',
        actionView: 'roadmap'
      }
    ]
  },
  {
    id: 'cloud-engineer',
    title: 'Cloud Engineer',
    shortDescription: 'Design, deploy, and scale resilient cloud-native infrastructure and automated CI/CD environments.',
    category: 'Cloud & Security',
    iconName: 'Cloud',
    overview: "Cloud Engineers build and manage the robust cloud platforms that modern applications depend upon. You will provision infrastructure through code, configure auto-scaling systems, and guarantee reliability, security, and cost efficiency.",
    marketOutlook: '+26% YoY growth driven by enterprise digital transformation and cloud-first migrations.',
    salaryRange: '₹11 - 28 LPA (India) / $110,000 - $175,000 (Global)',
    coreSkills: [
      'Cloud Architecture Fundamentals',
      'Linux Operating System Mastery',
      'Networking in Cloud (VPCs, Subnets, DNS, CDNs)',
      'Infrastructure as Code (IaC)',
      'Systems Reliability & High Availability'
    ],
    technicalSkills: [
      'Containerization & Orchestration (Docker & Kubernetes)',
      'Cloud Provider Services (AWS / GCP / Azure)',
      'CI/CD Pipeline Automation',
      'Monitoring & Observability (Prometheus, Grafana)',
      'Scripting & Automation (Bash, Python, Go)',
      'Serverless Architecture (AWS Lambda, Cloud Functions)'
    ],
    toolsAndTechnologies: [
      'Terraform & CloudFormation',
      'Docker & Kubernetes (K8s)',
      'AWS / GCP / Azure Console & CLI',
      'GitHub Actions & GitLab CI',
      'Linux / Bash',
      'Ansible & Helm'
    ],
    softSkills: [
      'Systems-Level Thinking',
      'Incident Triage & Root Cause Analysis',
      'Cross-Team Collaboration',
      'Cost Consciousness & Optimization',
      'Clear Technical Architecture Documentation'
    ],
    educationAndKnowledge: [
      'Distributed Systems Principles & Fault Tolerance',
      'Cloud Security Models & Shared Responsibility',
      'Storage Tiers, Latency Optimization, & Disaster Recovery',
      'Note: Public GitHub repositories with reproducible Terraform blueprints stand out immediately to recruiters.'
    ],
    experience: [
      'DevOps or Cloud Engineering internships',
      'Deploying personal or team projects onto cloud platforms',
      'Contributing to open-source Terraform modules or Helm charts',
      'Managing infrastructure for student organizations or hackathons',
      'Creating technical walkthrough blogs on cloud automation'
    ],
    portfolioProjects: [
      {
        title: 'Multi-Tier Web App on AWS with Automated Terraform',
        description: 'Declarative Terraform code provisioning VPC, public/private subnets, Application Load Balancer, and RDS instance.',
        skillsPracticed: ['Terraform', 'AWS', 'IaC', 'Networking'],
        difficulty: 'Intermediate'
      },
      {
        title: 'Production Kubernetes Cluster with Auto-Scaling & Ingress',
        description: 'Deployed a microservices app on Kubernetes with Horizontal Pod Autoscaler (HPA), Cert-Manager SSL, and Helm charts.',
        skillsPracticed: ['Kubernetes', 'Docker', 'Helm', 'Microservices'],
        difficulty: 'Advanced'
      },
      {
        title: 'Full GitOps CI/CD Pipeline with Automated Canary Releases',
        description: 'GitHub Actions workflow that builds Docker images, runs automated tests, and syncs deployments using ArgoCD.',
        skillsPracticed: ['CI/CD', 'GitHub Actions', 'GitOps', 'Docker'],
        difficulty: 'Advanced'
      }
    ],
    optionalCertifications: [
      {
        title: 'AWS Certified Solutions Architect – Associate',
        provider: 'Amazon Web Services',
        type: 'Optional Premier Cloud Credential',
        note: 'Optional gold standard certification for cloud architecture and deployment.'
      },
      {
        title: 'Certified Kubernetes Administrator (CKA)',
        provider: 'Cloud Native Computing Foundation (CNCF)',
        type: 'Optional Hands-On Performance Credential',
        note: 'Optional performance-based exam verifying live container orchestration skills.'
      }
    ],
    requiredSkills: [
      { name: 'Cloud & Docker', targetPercentage: 85, category: 'Tools', importance: 'Critical', recommendedLearning: 'Multi-stage Docker builds, container networking, and Kubernetes primitives' },
      { name: 'Problem Solving', targetPercentage: 80, category: 'Core', importance: 'Critical', recommendedLearning: 'Diagnosing distributed latency, networking disconnects, and container crashes' },
      { name: 'Python', targetPercentage: 75, category: 'Core', importance: 'High', recommendedLearning: 'Cloud SDK scripting, Lambda automation, and telemetry scripts' },
      { name: 'SQL & Databases', targetPercentage: 65, category: 'Technical', importance: 'Recommended', recommendedLearning: 'Managing managed DB backups, read replicas, and connection pools' },
      { name: 'Communication', targetPercentage: 75, category: 'Soft Skills', importance: 'Recommended', recommendedLearning: 'Collaborating with software teams on deployment requirements' }
    ],
    nextSteps: [
      {
        stepNumber: '01',
        title: 'Master Docker & Multi-Stage Builds',
        description: 'Learn to write production Dockerfiles with minimal image size, security best practices, and caching.',
        actionLabel: 'Analyze Skill Gaps',
        actionView: 'skill-gap'
      },
      {
        stepNumber: '02',
        title: 'Provision Cloud Resources with Terraform',
        description: 'Write reproducible IaC code to deploy secure cloud resources instead of using manual web consoles.',
        actionLabel: 'Browse Learning Resources',
        actionView: 'learning'
      },
      {
        stepNumber: '03',
        title: 'Set up a Kubernetes Cluster Locally',
        description: 'Use Minikube or Kind to learn Deployments, Services, ConfigMaps, and Ingress routing hands-on.',
        actionLabel: 'Open Roadmap',
        actionView: 'roadmap'
      }
    ]
  },
  {
    id: 'ui-ux-designer',
    title: 'UI/UX Designer',
    shortDescription: 'Craft intuitive user experiences, beautiful visual interfaces, and research-backed digital products.',
    category: 'Design & Product',
    iconName: 'Palette',
    overview: "UI/UX Designers merge empathy, psychology, typography, and visual aesthetics to craft seamless digital products. You will conduct user interviews, design wireframes and interactive prototypes, and build scalable design systems.",
    marketOutlook: '+18% growth as software companies prioritize design-led competitive differentiation.',
    salaryRange: '₹8 - 22 LPA (India) / $85,000 - $145,000 (Global)',
    coreSkills: [
      'User-Centered Design (UCD)',
      'Wireframing & Interactive Prototyping',
      'Visual Hierarchy & Typography',
      'Design Systems & Component Libraries',
      'User Research & Usability Testing'
    ],
    technicalSkills: [
      'Figma & FigJam Mastery',
      'Information Architecture & User Flows',
      'Micro-Interactions & Motion Design',
      'Responsive Web & Mobile Guidelines (iOS HIG / Material 3)',
      'Basic HTML / CSS Understanding',
      'Accessibility Standards (WCAG 2.1)'
    ],
    toolsAndTechnologies: [
      'Figma & Plugins',
      'FigJam / Miro',
      'Framer / Webflow',
      'Notion for UX Research',
      'Lottie & Principle',
      'Google Analytics / Hotjar'
    ],
    softSkills: [
      'Empathy & Active Listening',
      'Constructive Feedback Reception',
      'Design Presentation & Advocacy',
      'Cross-functional Collaboration with Developers',
      'Iterative Problem Solving'
    ],
    educationAndKnowledge: [
      'Human-Computer Interaction (HCI) Principles',
      'Color Theory, Contrast Ratios, and Spatial Grids',
      'Cognitive Psychology & Mental Models (Gestalt principles, Fitts’s Law)',
      'Note: A rich, reflective case-study portfolio is the single most critical asset for hiring.'
    ],
    experience: [
      'Design internships or apprentice roles',
      'Redesigning real-world applications with published case studies',
      'Participating in designathons or hackathon product design',
      'Freelance UI/UX work for local businesses or student ventures',
      'Contributing to open-source UI design libraries'
    ],
    portfolioProjects: [
      {
        title: 'Healthcare Patient Appointment & Triage App Case Study',
        description: 'Complete end-to-end mobile UX case study with user personas, journey maps, wireframes, and tested high-fidelity prototype.',
        skillsPracticed: ['Figma', 'User Research', 'Prototyping', 'Accessibility'],
        difficulty: 'Beginner'
      },
      {
        title: 'Scalable Design System with Tokens & Components',
        description: 'Comprehensive design system in Figma with typography scales, color tokens, responsive variants, and auto-layout.',
        skillsPracticed: ['Design Systems', 'Auto-Layout', 'UI Components', 'Figma'],
        difficulty: 'Intermediate'
      },
      {
        title: 'Fintech Micro-Investing App with Interactive Micro-interactions',
        description: 'Interactive prototype featuring smooth onboarding animations, transaction feedback, and gamified saving milestones.',
        skillsPracticed: ['Motion Design', 'Interactive Prototyping', 'Framer', 'Fintech UX'],
        difficulty: 'Advanced'
      }
    ],
    optionalCertifications: [
      {
        title: 'Google UX Design Professional Certificate',
        provider: 'Coursera / Google',
        type: 'Optional Foundation UX Credential',
        note: 'Optional comprehensive program guiding students through 3 portfolio projects.'
      },
      {
        title: 'Interaction Design Foundation (IxDF) Certification',
        provider: 'IxDF',
        type: 'Optional Specialist Credential',
        note: 'Optional respected credential in interaction design and human-computer psychology.'
      }
    ],
    requiredSkills: [
      { name: 'Communication', targetPercentage: 85, category: 'Soft Skills', importance: 'Critical', recommendedLearning: 'Articulating design decisions and advocating for user needs' },
      { name: 'Problem Solving', targetPercentage: 80, category: 'Core', importance: 'Critical', recommendedLearning: 'Identifying usability friction and reframing problems into design solutions' },
      { name: 'JavaScript', targetPercentage: 45, category: 'Technical', importance: 'Recommended', recommendedLearning: 'Basic HTML/CSS/JS concepts to effectively collaborate with developers' },
      { name: 'Data Analysis', targetPercentage: 60, category: 'Technical', importance: 'Recommended', recommendedLearning: 'Interpreting user funnel drop-offs, click heatmaps, and retention data' }
    ],
    nextSteps: [
      {
        stepNumber: '01',
        title: 'Master Figma Auto-Layout & Variables',
        description: 'Learn modern Figma features: auto-layout, component variants, and design token variables.',
        actionLabel: 'Analyze Skill Gaps',
        actionView: 'skill-gap'
      },
      {
        stepNumber: '02',
        title: 'Publish Your First In-Depth UX Case Study',
        description: 'Document the entire design process: problem statement, research findings, sketches, wireframes, and final prototype.',
        actionLabel: 'Browse Learning Resources',
        actionView: 'learning'
      },
      {
        stepNumber: '03',
        title: 'Learn Usability Testing & Heuristic Evaluation',
        description: 'Conduct live user testing sessions with real users to identify design flaws before writing final mockups.',
        actionLabel: 'Open Roadmap',
        actionView: 'roadmap'
      }
    ]
  },
  {
    id: 'product-manager',
    title: 'Product Manager',
    shortDescription: 'Lead product strategy, define feature roadmaps, and align engineering, design, and business teams.',
    category: 'Design & Product',
    iconName: 'Briefcase',
    overview: "Product Managers steer the vision, strategy, and execution of digital products. Sitting at the intersection of business, technology, and user experience, you will discover customer problems, write product specs, and drive cross-functional alignment.",
    marketOutlook: '+17% steady demand for tech-literate PMs who understand AI, cloud, and growth metrics.',
    salaryRange: '₹14 - 32 LPA (India) / $115,000 - $185,000 (Global)',
    coreSkills: [
      'Product Strategy & Vision',
      'Market & Competitor Analysis',
      'User Problem Identification',
      'Prioritization Frameworks (RICE, MoSCoW)',
      'Metrics & OKRs (Objectives and Key Results)'
    ],
    technicalSkills: [
      'Product Requirement Documents (PRDs)',
      'Agile / Scrum Sprint Leadership',
      'Data Analytics & Funnel Analysis',
      'A/B Testing & Feature Experimentation',
      'Basic Technical Literacy (APIs, Architecture)',
      'Go-To-Market (GTM) Strategy'
    ],
    toolsAndTechnologies: [
      'Jira & Confluence',
      'Notion & Linear',
      'Mixpanel / Amplitude',
      'Figma (for review)',
      'SQL for Product Analytics',
      'Google Analytics & Postman'
    ],
    softSkills: [
      'Influence Without Authority',
      'Executive Stakeholder Communication',
      'Strategic Empathy',
      'Conflict Resolution & Decisiveness',
      'Public Presentation & Storytelling'
    ],
    educationAndKnowledge: [
      'Business Models & Unit Economics (SaaS, Marketplaces, Consumer)',
      'Software Development Lifecycle (SDLC)',
      'Customer Discovery & Interview Methodologies',
      'Note: Demonstrated leadership of real projects or campus initiatives showcases PM potential best.'
    ],
    experience: [
      'Associate Product Manager (APM) internships',
      'Founding a startup or managing a student venture',
      'Leading hackathon teams from concept to pitch presentation',
      'Writing teardowns of existing products and strategic whitepapers',
      'Transitioning from engineering or design with high product intuition'
    ],
    portfolioProjects: [
      {
        title: 'Comprehensive PRD for an AI Study Companion Feature',
        description: 'Full Product Requirements Document including user problem statement, user stories, success metrics, and edge cases.',
        skillsPracticed: ['PRD Writing', 'Feature Scoping', 'User Stories', 'KPIs'],
        difficulty: 'Intermediate'
      },
      {
        title: 'Product Teardown & Growth Strategy for a Top FinTech App',
        description: 'Analytical teardown dissecting onboarding friction, user funnels, competitive moats, and a proposed growth experiment.',
        skillsPracticed: ['Product Strategy', 'Growth Metrics', 'Competitor Analysis'],
        difficulty: 'Intermediate'
      },
      {
        title: 'Hypothesis-Driven Feature Experimentation Plan',
        description: 'Design of an A/B test with sample sizing, metric guardrails, primary/secondary KPIs, and rollout decision tree.',
        skillsPracticed: ['A/B Testing', 'Data Analysis', 'Experimentation'],
        difficulty: 'Advanced'
      }
    ],
    optionalCertifications: [
      {
        title: 'Product Management Certificate (Pragmatic Institute / Reforge)',
        provider: 'Reforge / Product School',
        type: 'Optional Industry Executive Credential',
        note: 'Optional certification recognized across product leadership communities.'
      },
      {
        title: 'Professional Scrum Product Owner (PSPO I)',
        provider: 'Scrum.org',
        type: 'Optional Agile Credential',
        note: 'Optional credential demonstrating mastery of Agile backlog prioritization.'
      }
    ],
    requiredSkills: [
      { name: 'Communication', targetPercentage: 90, category: 'Soft Skills', importance: 'Critical', recommendedLearning: 'Presenting product vision clearly and aligning cross-functional teams' },
      { name: 'Problem Solving', targetPercentage: 85, category: 'Core', importance: 'Critical', recommendedLearning: 'Root-cause problem analysis and trade-off evaluation' },
      { name: 'Data Analysis', targetPercentage: 75, category: 'Technical', importance: 'High', recommendedLearning: 'Cohort retention, user funnel metrics, and experiment telemetry' },
      { name: 'SQL & Databases', targetPercentage: 65, category: 'Technical', importance: 'High', recommendedLearning: 'Querying event logs to inspect feature adoption metrics' },
      { name: 'Python', targetPercentage: 50, category: 'Core', importance: 'Recommended', recommendedLearning: 'Basic scripting to understand technical constraints' }
    ],
    nextSteps: [
      {
        stepNumber: '01',
        title: 'Write a Detailed Product Requirements Document (PRD)',
        description: 'Choose a popular application feature you feel is missing and draft a complete PRD with edge cases and metrics.',
        actionLabel: 'Analyze Skill Gaps',
        actionView: 'skill-gap'
      },
      {
        stepNumber: '02',
        title: 'Conduct 5 User Discovery Interviews',
        description: 'Interview peers about common friction points in campus life and synthesize findings into actionable user problems.',
        actionLabel: 'Browse Learning Resources',
        actionView: 'learning'
      },
      {
        stepNumber: '03',
        title: 'Study Product Analytics & North Star Metrics',
        description: 'Learn how to define leading vs lagging indicators, retention curves, and monetization funnels.',
        actionLabel: 'Open Roadmap',
        actionView: 'roadmap'
      }
    ]
  },
  {
    id: 'robotics-engineer',
    title: 'Robotics Engineer',
    shortDescription: 'Design, program, and build autonomous physical systems, robotic arms, and sensor-driven hardware.',
    category: 'Engineering & AI',
    iconName: 'Bot',
    overview: "Robotics Engineers unite mechanical engineering, electronics, and computer science to build intelligent physical robots. You will write control systems, integrate sensors like LiDAR and cameras, and implement autonomous navigation algorithms.",
    marketOutlook: '+24% growth driven by manufacturing automation, logistics, self-driving vehicles, and defense.',
    salaryRange: '₹10 - 26 LPA (India) / $100,000 - $165,000 (Global)',
    coreSkills: [
      'Control Systems & Kinematics',
      'C++ & Python Programming',
      'Embedded Systems & Microcontrollers',
      'Sensor Integration (LiDAR, IMU, Vision)',
      'Mathematical Mechanics & Physics'
    ],
    technicalSkills: [
      'Robot Operating System (ROS / ROS2)',
      'Path Planning & SLAM Algorithms',
      'Computer Vision for Robotics (OpenCV)',
      'Simulation in Gazebo / Isaac Sim',
      'Serial Protocols (I2C, SPI, UART, CAN bus)',
      'Motor Control & Feedback Loops (PID)'
    ],
    toolsAndTechnologies: [
      'ROS2 & Gazebo',
      'C++ (Modern C++17/20)',
      'Python & OpenCV',
      'Linux (Ubuntu)',
      'Git & CMake',
      'Arduino, Raspberry Pi, NVIDIA Jetson'
    ],
    softSkills: [
      'Multidisciplinary Team Collaboration',
      'Hands-on Debugging in Hardware & Software',
      'Patience with Physical Constraints',
      'Safety-First Engineering Ethics',
      'Creative Mechanical Problem Solving'
    ],
    educationAndKnowledge: [
      'Linear Algebra, Coordinate Transformations (Rotations & Quaternions)',
      'Feedback Control Theory & State Estimation (Kalman Filters)',
      'Embedded Firmware Design and Low-Level Memory Management',
      'Note: Physical robotics competitions (Robocon, Formula Student) provide unparalleled real-world proof.'
    ],
    experience: [
      'College robotics club or Formula Student team leadership',
      'Internships at robotics, drone, or industrial automation companies',
      'Participating in national or international robotics hackathons',
      'Publishing open-source ROS2 packages with simulated demos',
      'Building custom drones, 3D printed robotic arms, or rovers'
    ],
    portfolioProjects: [
      {
        title: 'Autonomous Mobile Robot (AMR) Navigation with ROS2 & SLAM',
        description: 'Simulated 2-wheel differential drive rover in Gazebo using Nav2 and LiDAR to map unfamiliar rooms and avoid dynamic obstacles.',
        skillsPracticed: ['ROS2', 'SLAM', 'C++', 'Gazebo', 'Path Planning'],
        difficulty: 'Intermediate'
      },
      {
        title: 'Computer Vision-Guided 4-DOF Robotic Arm Sorting System',
        description: 'Robotic manipulator that identifies colored objects via OpenCV camera feed and calculates inverse kinematics to sort parts.',
        skillsPracticed: ['Computer Vision', 'Inverse Kinematics', 'Python', 'Serial Control'],
        difficulty: 'Intermediate'
      },
      {
        title: 'Real-time Sensor Fusion with Extended Kalman Filter',
        description: 'Implemented EKF in C++ combining noisy IMU accelerometer and GPS data to estimate robot orientation and position accurately.',
        skillsPracticed: ['C++', 'State Estimation', 'Kalman Filter', 'Mathematics'],
        difficulty: 'Advanced'
      }
    ],
    optionalCertifications: [
      {
        title: 'ROS for Beginners (ConstructSim / Open Robotics)',
        provider: 'ConstructSim',
        type: 'Optional Robotics Framework Credential',
        note: 'Optional certification demonstrating mastery of ROS2 nodes, topics, and services.'
      },
      {
        title: 'NVIDIA Jetson AI Specialist',
        provider: 'NVIDIA Deep Learning Institute',
        type: 'Optional Edge AI Credential',
        note: 'Optional credential verifying embedded edge AI model acceleration.'
      }
    ],
    requiredSkills: [
      { name: 'Problem Solving', targetPercentage: 85, category: 'Core', importance: 'Critical', recommendedLearning: 'Algorithmic pathfinding (A*, Dijkstra) and coordinate geometry' },
      { name: 'Python', targetPercentage: 80, category: 'Core', importance: 'Critical', recommendedLearning: 'Rapid prototyping, computer vision scripts, and ROS bindings' },
      { name: 'Statistics & Math', targetPercentage: 80, category: 'Core', importance: 'Critical', recommendedLearning: 'Transformation matrices, calculus, and probability filters' },
      { name: 'Cloud & Docker', targetPercentage: 65, category: 'Tools', importance: 'High', recommendedLearning: 'Containerizing ROS2 workspaces for reproducible simulation' },
      { name: 'Communication', targetPercentage: 70, category: 'Soft Skills', importance: 'Recommended', recommendedLearning: 'Explaining technical trade-offs between hardware and software' }
    ],
    nextSteps: [
      {
        stepNumber: '01',
        title: 'Set Up ROS2 & Gazebo Environment on Linux',
        description: 'Install Ubuntu and ROS2 Humble to understand publishers, subscribers, services, and simulation.',
        actionLabel: 'Analyze Skill Gaps',
        actionView: 'skill-gap'
      },
      {
        stepNumber: '02',
        title: 'Implement 2D Obstacle Avoidance Simulation',
        description: 'Write a Python ROS2 node that reads simulated laser scanner data and maneuvers a rover around walls.',
        actionLabel: 'Browse Learning Resources',
        actionView: 'learning'
      },
      {
        stepNumber: '03',
        title: 'Study Kinematics & Coordinate Transformations',
        description: 'Learn forward and inverse kinematics using Denavit-Hartenberg (DH) parameters for robotic arms.',
        actionLabel: 'Open Roadmap',
        actionView: 'roadmap'
      }
    ]
  },
  {
    id: 'entrepreneur',
    title: 'Entrepreneur / Tech Founder',
    shortDescription: 'Build high-impact startups, launch novel products, secure capital, and scale innovative ventures.',
    category: 'Business & Leadership',
    iconName: 'Rocket',
    overview: "Entrepreneurs and Tech Founders identify unmet market opportunities, build minimum viable products (MVPs), raise funding or bootstrap, and assemble top talent to build transformative, scalable enterprises.",
    marketOutlook: 'Unprecedented venture opportunities in generative AI, climate tech, B2B SaaS, and local digital services.',
    salaryRange: 'Equity upside / ₹10 LPA - ₹1 Cr+ / High variance based on enterprise valuation',
    coreSkills: [
      'Opportunity Identification & Vision',
      'Rapid Prototyping & MVP Building',
      'Sales, Marketing & Customer Acquisition',
      'Fundraising & Financial Modeling',
      'Resilience & Uncertainty Management'
    ],
    technicalSkills: [
      'Full-Stack Rapid Prototyping (No-Code or Code)',
      'Product Analytics & Conversion Funnels',
      'Unit Economics & Cash Flow Management',
      'Pitch Deck & Investor Presentation Creation',
      'Team Hiring & Cultural Leadership',
      'Go-to-Market Strategy & SEO'
    ],
    toolsAndTechnologies: [
      'Next.js / Supabase / Stripe (for fast MVPs)',
      'Webflow / Framer (for landing pages)',
      'Google Sheets (Financial Runway Projections)',
      'Notion & Slack',
      'LinkedIn & Twitter/X for Founder Branding',
      'HubSpot / Mailchimp'
    ],
    softSkills: [
      'Grit, Persistence & Emotional Resilience',
      'Persuasive Pitching & Storytelling',
      'High Agency & Decisiveness',
      'Talent Magnetism & Motivation',
      'Extreme Resourcefulness'
    ],
    educationAndKnowledge: [
      'Lean Startup Methodology (Build-Measure-Learn loops)',
      'Venture Capital Basics (Term Sheets, Cap Tables, SAFE agreements)',
      'Legal Incorporation, IP Protection, & Regulatory Compliance',
      'Note: The ultimate proof is real traction: paying customers, revenue, and active monthly users.'
    ],
    experience: [
      'Launching an MVP and getting real users to test it',
      'Organizing student startup pitch competitions or incubators',
      'Running a campus micro-business or freelance digital agency',
      'Participating in accelerator programs (Y Combinator, Techstars, local incubators)',
      'Cold outreach to prospective customers and conducting validation interviews'
    ],
    portfolioProjects: [
      {
        title: 'Validated SaaS Landing Page with Pre-Orders & Stripe Checkout',
        description: 'Built and launched a conversion-optimized landing page with real customer testimonials and Stripe waitlist pre-orders.',
        skillsPracticed: ['Rapid Prototyping', 'Stripe', 'Copywriting', 'Customer Validation'],
        difficulty: 'Beginner'
      },
      {
        title: 'Working MVP for a Micro-SaaS AI Tool with Paid Subscriptions',
        description: 'Developed and launched a lightweight AI tool that generates content for niche businesses with paying monthly subscribers.',
        skillsPracticed: ['Full-Stack', 'APIs', 'SaaS Architecture', 'Pricing Strategy'],
        difficulty: 'Intermediate'
      },
      {
        title: 'Comprehensive 15-Slide Investor Pitch Deck & 3-Year Financial Model',
        description: 'Crafted a compelling seed-stage pitch deck addressing market size (TAM/SAM/SOM), problem, traction, and 3-year unit economics.',
        skillsPracticed: ['Pitch Deck', 'Financial Modeling', 'TAM Sizing', 'Storytelling'],
        difficulty: 'Intermediate'
      }
    ],
    optionalCertifications: [
      {
        title: 'Y Combinator Startup School',
        provider: 'Y Combinator',
        type: 'Optional Founder Curriculum Credential',
        note: 'Optional free curriculum with direct insights from world-class founders.'
      },
      {
        title: 'Entrepreneurship Specialization (Wharton / Stanford Online)',
        provider: 'Coursera / Stanford Online',
        type: 'Optional Venture Credential',
        note: 'Optional academic certification exploring venture capitalization and startup finance.'
      }
    ],
    requiredSkills: [
      { name: 'Communication', targetPercentage: 90, category: 'Soft Skills', importance: 'Critical', recommendedLearning: 'Storytelling to convince early customers, investors, and talent to join you' },
      { name: 'Problem Solving', targetPercentage: 90, category: 'Core', importance: 'Critical', recommendedLearning: 'Overcoming roadblocks with high agency and zero excuses' },
      { name: 'Data Analysis', targetPercentage: 70, category: 'Technical', importance: 'High', recommendedLearning: 'Understanding customer churn, customer acquisition cost (CAC), and payback period' },
      { name: 'JavaScript', targetPercentage: 65, category: 'Technical', importance: 'High', recommendedLearning: 'Building rapid web prototypes and shipping features without waiting' },
      { name: 'Python', targetPercentage: 60, category: 'Core', importance: 'Recommended', recommendedLearning: 'Automating repetitive data tasks and exploring AI APIs' }
    ],
    nextSteps: [
      {
        stepNumber: '01',
        title: 'Interview 10 Potential Customers About a Real Pain Point',
        description: 'Talk to real people facing daily frustrations. Do not pitch yet; just listen and understand their workflow.',
        actionLabel: 'Analyze Skill Gaps',
        actionView: 'skill-gap'
      },
      {
        stepNumber: '02',
        title: 'Build and Launch a 1-Page MVP in 48 Hours',
        description: 'Create a simple landing page or prototype to test if people will sign up or pay before building full software.',
        actionLabel: 'Browse Learning Resources',
        actionView: 'learning'
      },
      {
        stepNumber: '03',
        title: 'Watch Y Combinator Startup School Modules',
        description: 'Learn how great founders evaluate startup ideas, talk to users, and avoid common early-stage pitfalls.',
        actionLabel: 'Open Roadmap',
        actionView: 'roadmap'
      }
    ]
  }
];

/**
 * Helper to calculate personalized skill readiness between the student's profile skills
 * and the specific career benchmark requirements.
 */
export function calculateCareerReadiness(
  career: CareerGoalItem,
  studentSkills: UserSkill[]
): {
  overallScore: number;
  skillComparisons: SkillReadinessComparison[];
  strongCount: number;
  developingCount: number;
  priorityCount: number;
} {
  const comparisons: SkillReadinessComparison[] = career.requiredSkills.map(req => {
    // Attempt exact match or substring match against student skills
    const matched = studentSkills.find(
      s => s.name.toLowerCase().includes(req.name.toLowerCase()) || 
           req.name.toLowerCase().includes(s.name.toLowerCase())
    );

    // If student already has the skill, use their actual percentage.
    // Otherwise calculate a realistic baseline depending on general profile or 25%
    const currentPercentage = matched 
      ? matched.percentage 
      : 25;

    const gap = req.targetPercentage - currentPercentage;

    let status: 'Strong' | 'Developing' | 'Priority';
    let feedbackBadge: 'Strong foundation' | 'Skill to develop' | 'Priority area';

    if (gap <= 5) {
      status = 'Strong';
      feedbackBadge = 'Strong foundation';
    } else if (gap <= 25) {
      status = 'Developing';
      feedbackBadge = 'Skill to develop';
    } else {
      status = 'Priority';
      feedbackBadge = 'Priority area';
    }

    return {
      name: req.name,
      currentPercentage,
      targetPercentage: req.targetPercentage,
      status,
      feedbackBadge,
      category: req.category,
      importance: req.importance
    };
  });

  const strongCount = comparisons.filter(c => c.status === 'Strong').length;
  const developingCount = comparisons.filter(c => c.status === 'Developing').length;
  const priorityCount = comparisons.filter(c => c.status === 'Priority').length;

  // Weighted overall readiness calculation
  const totalRatio = comparisons.reduce((acc, c) => {
    const ratio = Math.min(1.0, c.currentPercentage / c.targetPercentage);
    return acc + ratio;
  }, 0);

  const averageRatio = comparisons.length > 0 ? (totalRatio / comparisons.length) : 0.7;
  const overallScore = Math.min(96, Math.max(35, Math.round(averageRatio * 100)));

  return {
    overallScore,
    skillComparisons: comparisons,
    strongCount,
    developingCount,
    priorityCount
  };
}
