import React, { useState } from 'react';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  MessageSquare, 
  Compass, 
  User,
  ArrowRight
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { AI_ASSISTANT_QA } from '../../data/sampleData';
import { AIChatMessage } from '../../types';

export const AIAssistantModal: React.FC = () => {
  const { isAssistantOpen, setAssistantOpen, student, activeTargetCareer } = useApp();
  const [messages, setMessages] = useState<AIChatMessage[]>([
    {
      id: 'm-1',
      sender: 'assistant',
      text: `Hello ${student.name.split(' ')[0]}! I'm your Careerly AI advisor. I've analyzed your ${student.degreeCourse} background, your proficiency in Python and Problem Solving, and current market trends.\n\nWhat career or learning questions can I help clarify for you today?`,
      timestamp: 'Just now'
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const suggestedQuestions = [
    "What career suits my skills?",
    "What should I learn next?",
    "Why was AI Engineer recommended?",
    "How can I improve my skill match?",
    "What projects should I build?"
  ];

  const handleSend = (questionText: string) => {
    if (!questionText.trim()) return;

    const userMsg: AIChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: questionText,
      timestamp: 'Just now'
    };

    setMessages(prev => [...prev, userMsg]);
    setInputVal('');
    setIsTyping(true);

    // Simulate AI thinking and context generation
    setTimeout(() => {
      const normalizedKey = questionText.toLowerCase().replace(/[^a-z0-9 ]/g, '').trim();
      let matchedResponse = AI_ASSISTANT_QA[normalizedKey];

      // Fallback response generator using student context
      if (!matchedResponse) {
        if (normalizedKey.includes('salary') || normalizedKey.includes('pay') || normalizedKey.includes('package')) {
          matchedResponse = `For your target trajectory (${activeTargetCareer.title}), current market estimates range from **₹14 - 32 LPA** for early-to-mid career roles in India. Top tier product companies and AI startups reward strong problem-solving and deployment abilities significantly!`;
        } else if (normalizedKey.includes('roadmap') || normalizedKey.includes('step')) {
          matchedResponse = `Your recommended path is structured across **5 progressive phases**: Foundation → Core ML & Data → Advanced Deep Learning → Portfolio Building → Placement Preparation. Check out the Roadmap tab to view each milestone!`;
        } else {
          matchedResponse = `Based on your student profile (${student.name}, ${student.degreeCourse}, ${student.yearOfStudy}):\n\nYour primary strength lies in mathematical problem solving and foundational Python. To maximize placement confidence for **${activeTargetCareer.title}**, prioritize hands-on Scikit-Learn pipelines and build at least two fullstack ML projects.\n\nFeel free to select one of the suggested prompts below for deep-dive recommendations!`;
        }
      }

      const aiMsg: AIChatMessage = {
        id: `assistant-${Date.now()}`,
        sender: 'assistant',
        text: matchedResponse,
        timestamp: 'Just now'
      };

      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 650);
  };

  if (!isAssistantOpen) {
    return (
      /* Floating "Ask Careerly" Button */
      <button
        onClick={() => setAssistantOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-brand-800 hover:bg-brand-900 text-white px-5 py-3 rounded-full shadow-lg shadow-brand-900/25 flex items-center gap-2.5 font-bold text-xs sm:text-sm hover:scale-105 active:scale-95 transition-all group"
      >
        <div className="relative">
          <Bot className="w-5 h-5 text-purple-200" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
        </div>
        <span>Ask Careerly</span>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end bg-slate-900/30 backdrop-blur-xs transition-opacity">
      {/* Slide-over panel */}
      <div 
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between border-l border-purple-100 animate-slideLeft relative z-10"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-purple-100 flex items-center justify-between bg-lavender-50/70">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-brand-800 text-white flex items-center justify-center shadow-sm">
              <Bot className="w-5 h-5 text-purple-200" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-bold text-slate-900 text-sm">Careerly AI Assistant</h3>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <p className="text-[11px] text-slate-500 font-medium">Grounding with {student.name.split(' ')[0]}'s Profile</p>
            </div>
          </div>
          <button
            onClick={() => setAssistantOpen(false)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Message Stream */}
        <div className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-4">
          {messages.map(m => {
            const isAI = m.sender === 'assistant';
            return (
              <div key={m.id} className={`flex gap-3 ${isAI ? 'items-start' : 'items-start flex-row-reverse'}`}>
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold ${
                  isAI ? 'bg-brand-800 text-white' : 'bg-slate-200 text-slate-700'
                }`}>
                  {isAI ? <Bot className="w-4 h-4 text-purple-200" /> : <User className="w-4 h-4" />}
                </div>
                <div className={`rounded-2xl p-3.5 max-w-[85%] text-xs leading-relaxed ${
                  isAI
                    ? 'bg-lavender-50/90 text-slate-800 border border-purple-100/80 whitespace-pre-line'
                    : 'bg-brand-800 text-white font-medium'
                }`}>
                  {m.text}
                </div>
              </div>
            );
          })}

          {isTyping && (
            <div className="flex gap-3 items-center text-xs text-slate-400 italic">
              <Bot className="w-4 h-4 text-brand-700 animate-spin" />
              <span>Careerly AI is analyzing your questions...</span>
            </div>
          )}
        </div>

        {/* Suggested Prompts & Input Area */}
        <div className="p-4 border-t border-purple-100 bg-slate-50/50 space-y-3">
          {/* Quick Suggestions */}
          <div className="space-y-1.5">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
              Suggested Questions:
            </span>
            <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto">
              {suggestedQuestions.map(q => (
                <button
                  key={q}
                  onClick={() => handleSend(q)}
                  className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-white hover:bg-brand-50 text-slate-700 hover:text-brand-800 border border-purple-100 shadow-subtle transition-all text-left"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Input Form */}
          <form
            onSubmit={e => {
              e.preventDefault();
              handleSend(inputVal);
            }}
            className="flex items-center gap-2 pt-1"
          >
            <input
              type="text"
              value={inputVal}
              onChange={e => setInputVal(e.target.value)}
              placeholder="Ask anything about careers or skills..."
              className="flex-1 px-3.5 py-2.5 rounded-xl border border-purple-100 bg-white text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-600 focus:ring-2 focus:ring-purple-100"
            />
            <button
              type="submit"
              disabled={!inputVal.trim()}
              className="p-2.5 rounded-xl bg-brand-800 hover:bg-brand-900 disabled:opacity-40 text-white transition-colors shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
