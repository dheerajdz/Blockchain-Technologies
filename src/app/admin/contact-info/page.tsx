'use client';

import { useState, useEffect } from 'react';
import { ArrowLeft, Mail, Phone, MapPin, Globe, Clock, Save } from 'lucide-react';

interface ContactInfoData {
  email: string;
  phone: string;
  address: string;
  twitter: string;
  linkedin: string;
  officeHours: string;
}

export default function ContactInfoPage() {
  const [info, setInfo] = useState<ContactInfoData>({
    email: 'contact@blocksscan.io',
    phone: '+91 (XXX) XXX-XXXX',
    address: 'Mumbai, Maharashtra, India',
    twitter: 'https://x.com/blocksscan',
    linkedin: 'https://linkedin.com/company/blocksscan',
    officeHours: 'Monday – Friday: 9:00 AM – 6:00 PM IST',
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/contact-info')
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data) {
          setInfo(data.data);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInfo(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage('');

    try {
      const res = await fetch('/api/contact-info', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(info),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage('Contact info updated successfully!');
      } else {
        setMessage(data.message || 'Failed to update');
      }
    } catch {
      setMessage('Network error');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 border-2 border-[#2A468B]/30 border-t-[#2A468B] rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-2xl">
      <div className="flex items-center gap-3 mb-6">
        <a href="/admin" className="p-2 rounded-lg hover:bg-white/5 transition-colors">
          <ArrowLeft className="h-5 w-5 text-[#A1A1AA]" strokeWidth={1.5} />
        </a>
        <div>
          <h1 className="text-2xl font-bold text-white">Contact Information</h1>
          <p className="text-[#71717A] text-sm">Edit contact details shown on the website</p>
        </div>
      </div>

      {message && (
        <div className={`mb-6 p-4 rounded-xl text-sm ${message.includes('success') ? 'bg-green-500/10 border border-green-500/20 text-green-400' : 'bg-red-500/10 border border-red-500/20 text-red-400'}`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="card p-6 md:p-8 space-y-6">
        {/* Email */}
        <div>
          <label className="flex items-center gap-2 text-sm text-[#A1A1AA] mb-2">
            <Mail className="h-4 w-4" strokeWidth={1.5} />
            Email <span className="text-accent-300">*</span>
          </label>
          <input
            name="email"
            type="email"
            required
            value={info.email}
            onChange={handleChange}
            className="w-full bg-[#0A0A0A] border border-[#1E1E1E] rounded-xl px-4 py-3 text-white placeholder:text-[#71717A] focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/30 transition-all"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="flex items-center gap-2 text-sm text-[#A1A1AA] mb-2">
            <Phone className="h-4 w-4" strokeWidth={1.5} />
            Phone <span className="text-accent-300">*</span>
          </label>
          <input
            name="phone"
            type="text"
            required
            value={info.phone}
            onChange={handleChange}
            className="w-full bg-[#0A0A0A] border border-[#1E1E1E] rounded-xl px-4 py-3 text-white placeholder:text-[#71717A] focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/30 transition-all"
          />
        </div>

        {/* Address */}
        <div>
          <label className="flex items-center gap-2 text-sm text-[#A1A1AA] mb-2">
            <MapPin className="h-4 w-4" strokeWidth={1.5} />
            Address <span className="text-accent-300">*</span>
          </label>
          <input
            name="address"
            type="text"
            required
            value={info.address}
            onChange={handleChange}
            className="w-full bg-[#0A0A0A] border border-[#1E1E1E] rounded-xl px-4 py-3 text-white placeholder:text-[#71717A] focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/30 transition-all"
          />
        </div>

        {/* Social Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="flex items-center gap-2 text-sm text-[#A1A1AA] mb-2">
              <Globe className="h-4 w-4" strokeWidth={1.5} />
              Twitter/X URL
            </label>
            <input
              name="twitter"
              type="url"
              value={info.twitter}
              onChange={handleChange}
              className="w-full bg-[#0A0A0A] border border-[#1E1E1E] rounded-xl px-4 py-3 text-white placeholder:text-[#71717A] focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/30 transition-all"
            />
          </div>
          <div>
            <label className="flex items-center gap-2 text-sm text-[#A1A1AA] mb-2">
              <Globe className="h-4 w-4" strokeWidth={1.5} />
              LinkedIn URL
            </label>
            <input
              name="linkedin"
              type="url"
              value={info.linkedin}
              onChange={handleChange}
              className="w-full bg-[#0A0A0A] border border-[#1E1E1E] rounded-xl px-4 py-3 text-white placeholder:text-[#71717A] focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/30 transition-all"
            />
          </div>
        </div>

        {/* Office Hours */}
        <div>
          <label className="flex items-center gap-2 text-sm text-[#A1A1AA] mb-2">
            <Clock className="h-4 w-4" strokeWidth={1.5} />
            Office Hours
          </label>
          <textarea
            name="officeHours"
            rows={3}
            value={info.officeHours}
            onChange={handleChange}
            className="w-full bg-[#0A0A0A] border border-[#1E1E1E] rounded-xl px-4 py-3 text-white placeholder:text-[#71717A] focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/30 transition-all resize-none"
          />
        </div>

        {/* Submit */}
        <div className="flex gap-3 pt-4">
          <button
            type="submit"
            disabled={saving}
            className="btn btn-primary flex items-center gap-2 disabled:opacity-50"
          >
            {saving ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Save className="h-4 w-4" strokeWidth={1.5} />
                Save Changes
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
