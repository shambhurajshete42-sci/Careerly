import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Compass, 
  Target, 
  SplitSquareVertical, 
  Milestone, 
  TrendingUp, 
  CheckCircle2, 
  User, 
  Cpu, 
  Award, 
  Layers,
  GraduationCap
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { HACKATHON_METADATA } from '../../data/sampleData';

export const LandingPage: React.FC = () => {
  const { navigateTo } = useApp();

  const benefits = [
    {
      icon: Target,
      title: 'Personalized Career Recommendations',
      description: 'High-confidence AI role matching evaluated on your unique skills, academic strengths, and passions.'
    },
    {
      icon: SplitSquareVertical,
      title: 'Skill Gap Analysis',
      description: 'Visual benchmark of where your proficiency is today versus what top industry employers actually require.'
    },
    {
      icon: TrendingUp,
      title: 'Market-Aware Insights',
      description: 'Real-time alignment with emerging tech trends, compensation ranges, and live job growth trajectories.'
    },
    {
      icon: Milestone,
      title: 'Step-by-Step Roadmaps',
      description: 'Actionable 5-phase career pathways with curated projects, certifications, and portfolio checkpoints.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#faf9fd] flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
        {/* Subtle background glow circles */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-purple-100/60 to-transparent pointer-events-none -z-10 rounded-full blur-3xl opacity-70" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Pill badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lavender-100/90 border border-brand-200/80 text-brand-900 text-xs font-semibold tracking-wide shadow-subtle">
                <Sparkles className="w-3.5 h-3.5 text-brand-600 animate-pulse" />
                <span>Next-Gen Career Intelligence for Students</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                Your Skills. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-800 via-brand-600 to-purple-600">
                  Your Interests.
                </span> <br />
                Your Future.
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                AI-powered career guidance that connects what you're good at with where the market is heading. Stop guessing career paths and start building with personalized intelligence.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => navigateTo('onboarding')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl bg-brand-800 hover:bg-brand-900 text-white font-bold text-sm sm:text-base shadow-lg shadow-brand-900/20 hover:shadow-brand-900/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Discover My Career</span>
                  <ArrowRight className="w-5 h-5 text-purple-200" />
                </button>

                <button
                  onClick={() => {
                    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-lavender-50 text-slate-700 hover:text-brand-800 font-semibold text-sm sm:text-base border border-purple-100 shadow-sm transition-all"
                >
                  <span>See How It Works</span>
                </button>
              </div>

              {/* Quick Trust / Hackathon Metadata */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Problem Statement: <strong>{HACKATHON_METADATA.problemStatementId}</strong>
                </span>
                <span className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-brand-600" />
                  Team: <strong>{HACKATHON_METADATA.teamName}</strong>
                </span>
              </div>
            </div>

            {/* Right Hero Visual: Career Intelligence Flow */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-7 shadow-card border border-purple-100/90 relative">
                {/* Header tag */}
                <div className="flex items-center justify-between pb-4 border-b border-purple-50">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">AI Guidance Pipeline</span>
                  </div>
                  <span className="text-[11px] font-semibold text-brand-700 bg-brand-50 px-2 py-0.5 rounded-md">
                    Live Evaluation
                  </span>
                </div>

                {/* Interactive Flow Nodes */}
                <div className="mt-5 space-y-3 relative">
                  {/* Step 1: Student Profile */}
                  <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-lavender-50/70 border border-purple-100/60 hover:bg-lavender-100/60 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-800 flex items-center justify-center font-bold text-sm shrink-0">
                      <User className="w-5 h-5 text-brand-700" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <p className="text-xs font-bold text-slate-900">Student Profile</p>
                        <span className="text-[10px] text-slate-500">Aarav • 2nd Yr B.Tech</span>
                      </div>
                      <p className="text-[11px] text-slate-500">Skills, interests, academic strengths</p>
                    </div>
                  </div>

                  {/* Flow Arrow 1 */}
                  <div className="flex justify-center -my-1">
                    <div className="w-0.5 h-4 bg-purple-200"></div>
                  </div>

                  {/* Step 2: AI Analysis */}
                  <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-brand-50 border border-brand-200/80 shadow-subtle">
                    <div className="w-10 h-10 rounded-xl bg-brand-800 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-sm">
                      <Cpu className="w-5 h-5 text-purple-200" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <p className="text-xs font-bold text-brand-900">AI Analysis Engine</p>
                        <span className="text-[10px] bg-brand-200/60 text-brand-900 font-bold px-1.5 py-0.2 rounded">
                          Pattern Match
                        </span>
                      </div>
                      <p className="text-[11px] text-brand-700">Cross-referencing real-time job market data</p>
                    </div>
                  </div>

                  {/* Flow Arrow 2 */}
                  <div className="flex justify-center -my-1">
                    <div className="w-0.5 h-4 bg-purple-200"></div>
                  </div>

                  {/* Step 3: Career Match */}
                  <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white border border-purple-100 shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm shrink-0">
                      <Compass className="w-5 h-5 text-emerald-700" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <p className="text-xs font-bold text-slate-900">Career Match</p>
                        <span className="text-xs font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                          92% Fit
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 font-medium">AI / Machine Learning Engineer</p>
                    </div>
                  </div>

                  {/* Flow Arrow 3 */}
                  <div className="flex justify-center -my-1">
                    <div className="w-0.5 h-4 bg-purple-200"></div>
                  </div>

                  {/* Step 4: Skill Gap */}
                  <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-lavender-50/70 border border-purple-100/60">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-sm shrink-0">
                      <SplitSquareVertical className="w-5 h-5 text-amber-700" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <p className="text-xs font-bold text-slate-900">Skill Gap Diagnosis</p>
                        <span className="text-[10px] text-amber-700 font-semibold">Priority: ML + MLOps</span>
                      </div>
                      <p className="text-[11px] text-slate-500">Pinpoints high-ROI learning focus</p>
                    </div>
                  </div>

                  {/* Flow Arrow 4 */}
                  <div className="flex justify-center -my-1">
                    <div className="w-0.5 h-4 bg-purple-200"></div>
                  </div>

                  {/* Step 5: Personalized Roadmap */}
                  <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white border border-brand-300 shadow-card">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-700 to-brand-900 text-white flex items-center justify-center font-bold text-sm shrink-0">
                      <Milestone className="w-5 h-5 text-purple-200" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <p className="text-xs font-bold text-slate-900">Personalized Roadmap</p>
                        <span className="text-[10px] text-brand-700 font-bold">5 Phases</span>
                      </div>
                      <p className="text-[11px] text-slate-600">Curated weekly milestones &amp; projects</p>
                    </div>
                  </div>
                </div>

                {/* Instant Launch Button */}
                <button
                  onClick={() => navigateTo('onboarding')}
                  className="mt-6 w-full py-2.5 bg-brand-50 hover:bg-brand-100 border border-brand-200 text-brand-900 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5 text-brand-700" />
                  <span>Test with Demo Student Profile</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="how-it-works" className="py-16 bg-white border-y border-purple-100/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-brand-700 uppercase tracking-wider bg-brand-50 px-3 py-1 rounded-full border border-brand-200/60">
              Core Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3">
              Engineered to Demystify Student Career Pathways
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              Careerly translates academic and self-taught skills into high-demand industry opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-lavender-50/40 border border-purple-100/80 hover:bg-white hover:border-brand-300 hover:shadow-card-hover transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-100 text-brand-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-brand-700" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-brand-900 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Teaser Banner */}
      <section className="py-16 bg-gradient-to-br from-brand-950 via-brand-900 to-purple-950 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-brand-500/20 text-purple-200 border border-purple-400/30">
            Hackathon Showcase • ED-02
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to explore your personalized career intelligence?
          </h2>
          <p className="text-sm sm:text-base text-purple-200 max-w-xl mx-auto font-light">
            Take the 2-minute student assessment or jump straight into the live interactive dashboard preloaded with demo data.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={() => navigateTo('onboarding')}
              className="px-7 py-3 rounded-xl bg-white text-brand-950 font-bold text-sm shadow-md hover:bg-purple-50 transition-all hover:scale-105"
            >
              Start 5-Step Assessment
            </button>
            <button
              onClick={() => navigateTo('dashboard')}
              className="px-7 py-3 rounded-xl bg-brand-800/80 hover:bg-brand-800 text-purple-100 font-semibold text-sm border border-purple-400/40 transition-all"
            >
              Enter Live Dashboard Directly
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-8 bg-white border-t border-purple-100 text-slate-500 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-brand-800 flex items-center justify-center text-white font-bold text-xs">
              C
            </div>
            <span className="font-bold text-slate-800">Careerly</span>
            <span className="text-slate-400">— AI-Powered Career Guidance System</span>
          </div>

          <div className="text-center sm:text-right text-[11px] text-slate-400">
            <p className="font-semibold text-slate-600">Team {HACKATHON_METADATA.teamName}</p>
            <p className="text-slate-500 font-medium">Developed by Abhijeet Raut &amp; Shambhuraj Shete</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
