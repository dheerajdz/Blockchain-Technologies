'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Briefcase, ArrowLeft, Plus, Minus } from 'lucide-react';

export default function NewCareerPage() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [requirements, setRequirements] = useState<string[]>(['']);

  const [formData, setFormData] = useState({
    title: '',
    department: 'Engineering',
    location: '',
    type: 'Full-time',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const addRequirement = () => setRequirements(prev => [...prev, '']);
  const removeRequirement = (index: number) => setRequirements(prev => prev.filter((_, i) => i !== index));
  const updateRequirement = (index: number, value: string) => {
    setRequirements(prev => prev.map((req, i) => i === index ? value : req));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    const validRequirements = requirements.filter(r => r.trim() !== '');

    try {
      const res = await fetch('/api/careers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          requirements: validRequirements,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        router.push('/admin/careers');
      } else {
        setError(data.message || 'Failed to create vacancy');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl">
      <div className="flex items-center gap-3 mb-6">
        <a href="/admin/careers" className="p-2 rounded-lg hover:bg-white/5 transition-colors">
          <ArrowLeft className="h-5 w-5 text-[#A1A1AA]" strokeWidth={1.5} />
        </a>
        <div>
          <h1 className="text-2xl font-bold text-white">Add Vacancy</h1>
          <p className="text-[#71717A] text-sm">Create a new job opening</p>
        </div>
      </div>

      {error && (
        <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="card p-6 md:p-8 space-y-6">
        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-sm text-[#A1A1AA] mb-2">
            Job Title <span className="text-accent-300">*</span>
          </label>
          <input
            id="title"
            name="title"
            type="text"
            required
            value={formData.title}
            onChange={handleChange}
            className="w-full bg-[#0A0A0A] border border-[#1E1E1E] rounded-xl px-4 py-3 text-white placeholder:text-[#71717A] focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/30 transition-all"
            placeholder="e.g. Senior Blockchain Developer"
          />
        </div>

        {/* Department + Type */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="department" className="block text-sm text-[#A1A1AA] mb-2">
              Department <span className="text-accent-300">*</span>
            </label>
            <select
              id="department"
              name="department"
              required
              value={formData.department}
              onChange={handleChange}
              className="w-full bg-[#0A0A0A] border border-[#1E1E1E] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/30 transition-all"
            >
              <option value="Engineering">Engineering</option>
              <option value="Design">Design</option>
              <option value="Infrastructure">Infrastructure</option>
              <option value="Growth">Growth</option>
              <option value="Marketing">Marketing</option>
              <option value="Operations">Operations</option>
            </select>
          </div>
          <div>
            <label htmlFor="type" className="block text-sm text-[#A1A1AA] mb-2">
              Job Type <span className="text-accent-300">*</span>
            </label>
            <select
              id="type"
              name="type"
              required
              value={formData.type}
              onChange={handleChange}
              className="w-full bg-[#0A0A0A] border border-[#1E1E1E] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/30 transition-all"
            >
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
            </select>
          </div>
        </div>

        {/* Location */}
        <div>
          <label htmlFor="location" className="block text-sm text-[#A1A1AA] mb-2">
            Location <span className="text-accent-300">*</span>
          </label>
          <input
            id="location"
            name="location"
            type="text"
            required
            value={formData.location}
            onChange={handleChange}
            className="w-full bg-[#0A0A0A] border border-[#1E1E1E] rounded-xl px-4 py-3 text-white placeholder:text-[#71717A] focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/30 transition-all"
            placeholder="e.g. Mumbai, India (Hybrid)"
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm text-[#A1A1AA] mb-2">
            Description <span className="text-accent-300">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            required
            rows={4}
            value={formData.description}
            onChange={handleChange}
            className="w-full bg-[#0A0A0A] border border-[#1E1E1E] rounded-xl px-4 py-3 text-white placeholder:text-[#71717A] focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/30 transition-all resize-none"
            placeholder="Describe the role, responsibilities, and what the candidate will do..."
          />
        </div>

        {/* Requirements */}
        <div>
          <label className="block text-sm text-[#A1A1AA] mb-2">
            Requirements
          </label>
          <div className="space-y-3">
            {requirements.map((req, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  value={req}
                  onChange={(e) => updateRequirement(index, e.target.value)}
                  className="flex-1 bg-[#0A0A0A] border border-[#1E1E1E] rounded-xl px-4 py-3 text-white placeholder:text-[#71717A] focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/30 transition-all"
                  placeholder={`Requirement ${index + 1}`}
                />
                {requirements.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeRequirement(index)}
                    className="p-3 rounded-xl text-[#71717A] hover:text-red-400 hover:bg-red-500/5 transition-all"
                  >
                    <Minus className="h-4 w-4" strokeWidth={1.5} />
                  </button>
                )}
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={addRequirement}
            className="mt-3 flex items-center gap-2 text-sm text-[#5B7FC4] hover:text-accent-300 transition-colors"
          >
            <Plus className="h-4 w-4" strokeWidth={1.5} />
            Add Requirement
          </button>
        </div>

        {/* Submit */}
        <div className="flex gap-3 pt-4">
          <button
            type="submit"
            disabled={submitting}
            className="btn btn-primary flex items-center gap-2 disabled:opacity-50"
          >
            {submitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Creating...
              </>
            ) : (
              <>
                <Briefcase className="h-4 w-4" strokeWidth={1.5} />
                Create Vacancy
              </>
            )}
          </button>
          <a href="/admin/careers" className="btn btn-secondary">
            Cancel
          </a>
        </div>
      </form>
    </div>
  );
}
