# Careerly — AI-Powered Career Guidance System

**Problem Statement:** ED-02 (AI-Powered Career Guidance System)  
**Team:** Vidhata X  
**Team Members:**  
- **Abhijeet Raut** — Full Stack & AI Architect  
- **Shambhuraj Shete** — UI/UX & Product Engineer  

🌐 **Live Network Link:** [http://192.168.1.51:5173/](http://192.168.1.51:5173/)

---

## 🎯 Core Idea
An AI-powered career guidance system for students based on:
- **Skills & Proficiency Levels** (Beginner, Intermediate, Advanced)
- **Interests & Academic Strengths**
- **Career Aspirations & 3–5 Year Horizon**
- **Current Real-Time Tech Market & Hiring Trends**

Careerly helps students discover suitable career paths, clearly diagnose their skill gaps, and follow a personalized step-by-step 5-phase learning roadmap towards placement.

---

## 🌟 Key Features & Prototype Journey
1. **Landing Page & Guidance Visualization**:
   - Modern EdTech visual identity in deep purple & lavender with minimal aesthetics.
   - Interactive flow visual: `Student Profile → AI Analysis → Career Match → Skill Gap → Personalized Roadmap`.
2. **5-Step Onboarding Assessment**:
   - `01 Profile` (Name, Degree, Year of study)
   - `02 Interests` (Selectable domain chips)
   - `03 Skills & Proficiency` (Interactive level indicators & sliders)
   - `04 Goals` (Aspirations & 3-5 year vision)
   - `05 AI Analysis Screen` (Animated neural pattern match & market check)
3. **AI Career Intelligence Dashboard**:
   - Circular Career Readiness Gauge (`72%` base with dynamic recalculation).
   - Primary Recommendation: **AI / Machine Learning Engineer (92% Fit)**.
   - Alternative fits: Data Scientist (87%), Full Stack Engineer (82%), Data Analyst (78%).
4. **Career Explorer & Career Detail View**:
   - Side-by-side visual skill comparison: **Your Level vs Target Industry Level**.
   - Demand indicators, demo salary ranges, and *"Why this matches you"* insights.
5. **Skill Gap Analysis**:
   - Organized into **Strong Skills**, **Developing**, and **Priority Skills**.
   - Current vs Target benchmark with immediate recommended learning resources.
   - Interactive *"Practice & Level Up"* simulation button.
6. **5-Phase Personalized Roadmap**:
   - Phase 1: Foundation & Core Aptitude
   - Phase 2: Core Machine Learning & Data
   - Phase 3: Advanced AI & Deep Learning
   - Phase 4: Portfolio & Applied Systems
   - Phase 5: Career Ready & Industry Placement
   - Interactive milestone checkboxes that update completion percentage and readiness score in real-time.
7. **Market Intelligence**:
   - Real-time technical skill demand indexes & emerging roles growth rates.
8. **Connected Learning Library**:
   - Curated courses, portfolio projects, and interview preparation workshops.
   - One-click *"Add to Roadmap"* bookmarking.
9. **Careerly AI Assistant**:
   - Floating context-aware assistant panel answering questions grounded in the student's profile.
10. **Student Profile Management**:
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
Open [http://192.168.1.51:5173/](http://192.168.1.51:5173/) in your browser to test the live prototype across your local network.

### Production Build
```bash
npm run build
```

---

## 🛠️ Tech Stack
- **Frontend:** React 18, TypeScript, Tailwind CSS, Lucide Icons
- **Architecture:** Component-driven design, React Context state persistence
- **Backend Readiness:** Structured for seamless integration with Python FastAPI / LangChain backends.
