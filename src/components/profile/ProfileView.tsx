import React, { useState } from 'react';
import { 
  UserCircle, 
  Edit3, 
  GraduationCap, 
  Heart, 
  Code2, 
  Target, 
  Compass, 
  Check, 
  Sparkles,
  Save,
  RotateCcw
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { ProgressBar } from '../common/ProgressBar';
import { Badge } from '../common/Badge';
import { Modal } from '../common/Modal';
import { AVAILABLE_INTERESTS, AVAILABLE_GOALS } from '../../data/sampleData';

export const ProfileView: React.FC = () => {
  const { 
    student, 
    updateStudentProfile, 
    activeTargetCareer, 
    careers, 
    resetToDefaultDemo,
    navigateTo 
  } = useApp();

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(student);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateStudentProfile(formData);
    setIsEditing(false);
  };

  return (
    <div className="space-y-8 pb-14">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-purple-100/60">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Student Profile
            </h1>
            <Badge variant="purple" size="sm">Academic Record</Badge>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Manage your personal background, domain interests, and career objectives.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setFormData(student);
              setIsEditing(true);
            }}
            className="px-4 py-2 rounded-xl bg-brand-800 hover:bg-brand-900 text-white text-xs font-bold shadow-subtle flex items-center gap-2 transition-all"
          >
            <Edit3 className="w-4 h-4" />
            <span>Edit Profile</span>
          </button>
        </div>
      </div>

      {/* Main Student Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-card border border-purple-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-800 to-purple-900 text-white text-2xl font-black flex items-center justify-center shadow-md">
            {student.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-black text-slate-900">{student.name}</h2>
              <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                Active Student
              </span>
            </div>
            <p className="text-sm font-semibold text-brand-900 mt-0.5">
              {student.degreeCourse} • {student.yearOfStudy}
            </p>
            <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
              <GraduationCap className="w-3.5 h-3.5 text-slate-400" />
              {student.institution}
            </p>
          </div>
        </div>

        {/* Profile Completeness Gauge */}
        <div className="w-full md:w-64 p-4 rounded-2xl bg-lavender-50/70 border border-purple-100 space-y-1.5">
          <div className="flex justify-between text-xs font-bold">
            <span className="text-slate-700">Profile Completeness</span>
            <span className="text-brand-900">{student.profileCompleteness}%</span>
          </div>
          <ProgressBar value={student.profileCompleteness} height="sm" color="purple" showValueLabel={false} />
          <span className="text-[10px] text-slate-400 block text-right">High Data Quality</span>
        </div>
      </div>

      {/* Profile Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card: Active Target Career */}
        <div className="bg-white rounded-3xl p-6 shadow-card border border-purple-100 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Compass className="w-5 h-5 text-brand-700" />
              <h3 className="font-bold text-slate-900">Current Target Career</h3>
            </div>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              {activeTargetCareer.matchPercentage}% Match
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-lavender-50/50 border border-purple-100 space-y-2">
            <p className="font-bold text-slate-900 text-base">{activeTargetCareer.title}</p>
            <p className="text-xs text-slate-500 leading-relaxed">{activeTargetCareer.description}</p>
          </div>

          <button
            onClick={() => navigateTo('career-explorer')}
            className="w-full py-2 bg-slate-50 hover:bg-lavender-50 border border-purple-100 text-brand-800 text-xs font-bold rounded-xl transition-colors"
          >
            Change or Explore Target Roles →
          </button>
        </div>

        {/* Card: Career Goals & 3-5 Year Vision */}
        <div className="bg-white rounded-3xl p-6 shadow-card border border-purple-100 space-y-4">
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-brand-700" />
            <h3 className="font-bold text-slate-900">Career Aspirations</h3>
          </div>

          <div className="space-y-3">
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Selected Goals:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {student.goals.map(g => (
                  <span key={g} className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-lavender-50 text-brand-900 border border-purple-100">
                    {g}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                3–5 Year Horizon:
              </span>
              <p className="text-xs text-slate-600 bg-slate-50/80 p-3 rounded-xl border border-purple-50 italic leading-relaxed">
                "{student.vision3to5Years}"
              </p>
            </div>
          </div>
        </div>

        {/* Card: Interests */}
        <div className="bg-white rounded-3xl p-6 shadow-card border border-purple-100 space-y-4">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-brand-700" />
            <h3 className="font-bold text-slate-900">Domains of Interest</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {student.interests.map(i => (
              <span key={i} className="text-xs font-bold px-3 py-1.5 rounded-xl bg-purple-50 text-brand-800 border border-purple-200">
                {i}
              </span>
            ))}
          </div>
        </div>

        {/* Card: Current Skills Overview */}
        <div className="bg-white rounded-3xl p-6 shadow-card border border-purple-100 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Code2 className="w-5 h-5 text-brand-700" />
              <h3 className="font-bold text-slate-900">Profile Skills ({student.skills.length})</h3>
            </div>
            <button
              onClick={() => navigateTo('skill-gap')}
              className="text-xs font-bold text-brand-700 hover:underline"
            >
              Analyze Gap
            </button>
          </div>

          <div className="space-y-2.5">
            {student.skills.map(s => (
              <div key={s.name} className="flex justify-between items-center text-xs p-2.5 rounded-xl bg-slate-50 border border-purple-50">
                <span className="font-bold text-slate-800">{s.name}</span>
                <span className="font-semibold text-brand-800 bg-brand-50 px-2 py-0.5 rounded border border-brand-100">
                  {s.level} ({s.percentage}%)
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      <Modal
        isOpen={isEditing}
        onClose={() => setIsEditing(false)}
        title="Edit Student Profile"
        subtitle="Make real-time adjustments to your academic background and aspirations"
        maxWidth="2xl"
      >
        <form onSubmit={handleSave} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2 text-xs rounded-xl border border-purple-200 focus:outline-none focus:border-brand-600"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Degree / Course</label>
              <input
                type="text"
                value={formData.degreeCourse}
                onChange={e => setFormData({ ...formData, degreeCourse: e.target.value })}
                className="w-full px-3.5 py-2 text-xs rounded-xl border border-purple-200 focus:outline-none focus:border-brand-600"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Year of Study</label>
              <select
                value={formData.yearOfStudy}
                onChange={e => setFormData({ ...formData, yearOfStudy: e.target.value })}
                className="w-full px-3.5 py-2 text-xs rounded-xl border border-purple-200 focus:outline-none focus:border-brand-600 bg-white"
              >
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="Final Year">Final Year</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Institution</label>
              <input
                type="text"
                value={formData.institution}
                onChange={e => setFormData({ ...formData, institution: e.target.value })}
                className="w-full px-3.5 py-2 text-xs rounded-xl border border-purple-200 focus:outline-none focus:border-brand-600"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">3–5 Year Career Vision</label>
            <textarea
              value={formData.vision3to5Years}
              onChange={e => setFormData({ ...formData, vision3to5Years: e.target.value })}
              rows={2}
              className="w-full px-3.5 py-2 text-xs rounded-xl border border-purple-200 focus:outline-none focus:border-brand-600"
            />
          </div>

          <div className="flex justify-end gap-3 pt-3 border-t border-slate-100">
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-brand-800 hover:bg-brand-900 text-white text-xs font-bold rounded-xl shadow-subtle flex items-center gap-1.5"
            >
              <Save className="w-4 h-4" />
              <span>Save Changes</span>
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
