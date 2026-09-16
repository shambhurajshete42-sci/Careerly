# Careerly — AI-Powered Career Guidance System

> 🚀 **Live Web Application (Deployed & Publicly Accessible):**  
> ### **[https://shambhurajshete42-sci.github.io/Careerly/](https://shambhurajshete42-sci.github.io/Careerly/)**

**Problem Statement:** ED-02 (AI-Powered Career Guidance System)  
**Team:** Careerly Core Team  
**Team Members:**  
- **Abhijeet Raut** — Full Stack & AI Architect  
- **Shambhuraj Shete** — UI/UX & Product Engineer  

---

## 🎯 Core Idea
An AI-powered career guidance system for students based on:
- **Skills & Proficiency Levels** (Beginner, Intermediate, Advanced)
- **Interests & Academic Strengths**
- **Career Aspirations & 3–5 Year Horizon**
- **Current Real-Time Tech Market & Hiring Trends**
- **Student-Driven Career Goal Planning** ("I want to become a Data Scientist")
- **"Future Purple + Growth" Visual Design System** (Warm beige, deep purple, sage green, and soft lavender)

Careerly helps students discover suitable career paths, choose dream career goals, diagnose skill gaps, and follow a personalized step-by-step 5-phase learning roadmap towards placement.

---

## 🌟 Key Features & Prototype Journey
1. **Career Goal Planner (New Feature)**:
   - Student-driven career goal selection ("Choose Your Career Goal").
   - 10+ career blueprints: AI/ML Engineer, Software Engineer, Data Scientist, Data Analyst, Cybersecurity Analyst, Cloud Engineer, UI/UX Designer, Product Manager, Robotics Engineer, Entrepreneur.
   - Comprehensive breakdowns: Core Skills, Technical Skills, Tools & Technologies, Soft Skills, Education & Knowledge, Experience, Portfolio Projects with difficulty levels, and Optional Certifications.
   - Personalized Skill Readiness: Compares student's live profile skills against role benchmarks (Strong foundation ✓, Skill to develop ⚠, Priority area 🔴).
   - "Your Next Steps": Top 3-5 prioritized recommendations linking directly to learning and roadmaps.
2. **"Future Purple + Growth" Visual Design Direction**:
   - Palette: Primary Purple (`#5B3FD6`), Soft Lavender (`#F0ECFF`), Warm Beige (`#F7F3EA`), Sage Green (`#6FAF8B`), Soft Mint (`#E4F3EA`), and Charcoal Text (`#292631`).
   - Replaced dark navy styling with an optimistic, student-friendly warm aesthetic with purple guidance CTAs and sage growth milestones.
   - Interactive flow visual: `Student Profile → AI Analysis → Career Match → Skill Gap → Personalized Roadmap`.
3. **5-Step Onboarding Assessment**:
   - `01 Profile` (Name, Degree, Year of study)
   - `02 Interests` (Selectable domain chips)
   - `03 Skills & Proficiency` (Interactive level indicators & sliders)
   - `04 Goals` (Aspirations & 3-5 year vision)
   - `05 AI Analysis Screen` (Animated neural pattern match & market check)
4. **AI Career Intelligence Dashboard**:
   - Circular Career Readiness Gauge (`72%` base with dynamic recalculation).
   - Primary Recommendation: **AI / Machine Learning Engineer (92% Fit)**.
   - Alternative fits: Data Scientist (87%), Full Stack Engineer (82%), Data Analyst (78%).
   - Direct link into the Career Goal Planner.
5. **Career Explorer & Career Detail View**:
   - Side-by-side visual skill comparison: **Your Level vs Target Industry Level**.
   - Demand indicators, demo salary ranges, and *"Why this matches you"* insights.
6. **Skill Gap Analysis**:
   - Organized into **Strong Skills**, **Developing**, and **Priority Skills**.
   - Current vs Target benchmark with immediate recommended learning resources.
   - Interactive *"Practice & Level Up"* simulation button.
7. **5-Phase Personalized Roadmap**:
   - Phase 1: Foundation & Core Aptitude
   - Phase 2: Core Machine Learning & Data
   - Phase 3: Advanced AI & Deep Learning
   - Phase 4: Portfolio & Applied Systems
   - Phase 5: Career Ready & Industry Placement
   - Interactive milestone checkboxes that update completion percentage and readiness score in real-time.
8. **Market Intelligence**:
   - Real-time technical skill demand indexes & emerging roles growth rates.
9. **Connected Learning Library**:
   - Curated courses, portfolio projects, and interview preparation workshops.
   - One-click *"Add to Roadmap"* bookmarking.
10. **Careerly AI Assistant**:
    - Floating context-aware assistant panel answering questions grounded in the student's profile.
11. **Student Profile Management**:
    - Profile completeness indicator (88%) and real-time profile editor.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### Installation & Running Locally
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```
Test the live prototype directly at [https://shambhurajshete42-sci.github.io/Careerly/](https://shambhurajshete42-sci.github.io/Careerly/).

### Production Build
```bash
npm run build
```

---

## 🛠️ Tech Stack
- **Frontend:** React 18, TypeScript, Tailwind CSS, Lucide Icons
- **Architecture:** Component-driven design, React Context state persistence
- **Backend Readiness:** Structured for seamless integration with Python FastAPI / LangChain backends.
