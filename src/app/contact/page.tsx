'use client';

import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Mail, MapPin, Phone, Send, Linkedin, Twitter } from 'lucide-react';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';

/* ─── DATA ─── */

interface ContactInfoData {
  email: string;
  phone: string;
  address: string;
  twitter?: string;
  linkedin?: string;
  officeHours?: string;
}

/* ─── COMPONENTS ─── */

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: `Subject: ${formData.subject}\n\n${formData.message}`,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setErrorMsg(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please check your connection and try again.');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="card p-6 md:p-8 lg:p-10"
    >
      <h3 className="heading-2 mb-2">Send us a Message</h3>
      <p className="text-[#A1A1AA] body-sm mb-8">
        Fill out the form below and we&apos;ll get back to you within 24 hours.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name + Email row */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm text-[#A1A1AA] mb-2">
              Full Name <span className="text-accent-300">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-[#0A0A0A] border border-[#1E1E1E] rounded-xl px-4 py-3 text-white placeholder:text-[#71717A] focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/30 transition-all"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm text-[#A1A1AA] mb-2">
              Email Address <span className="text-accent-300">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-[#0A0A0A] border border-[#1E1E1E] rounded-xl px-4 py-3 text-white placeholder:text-[#71717A] focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/30 transition-all"
              placeholder="john@example.com"
            />
          </div>
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-sm text-[#A1A1AA] mb-2">
            Subject <span className="text-accent-300">*</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full bg-[#0A0A0A] border border-[#1E1E1E] rounded-xl px-4 py-3 text-white placeholder:text-[#71717A] focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/30 transition-all"
            placeholder="How can we help?"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm text-[#A1A1AA] mb-2">
            Message <span className="text-accent-300">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-[#0A0A0A] border border-[#1E1E1E] rounded-xl px-4 py-3 text-white placeholder:text-[#71717A] focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/30 transition-all resize-none"
            placeholder="Tell us about your project, requirements, or questions..."
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === 'submitting' || status === 'success'}
          className="btn btn-primary w-full md:w-auto flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'submitting' ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending...
            </>
          ) : status === 'success' ? (
            <>
              Message Sent!
            </>
          ) : (
            <>
              <Send className="h-4 w-4" strokeWidth={1.5} />
              Send Message
            </>
          )}
        </button>

        {/* Status messages */}
        {status === 'success' && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-green-400 bg-green-400/10 border border-green-400/20 rounded-xl px-4 py-3"
          >
            Thank you! Your message has been sent successfully. We&apos;ll be in touch soon.
          </motion.p>
        )}
        {status === 'error' && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3"
          >
            {errorMsg}
          </motion.p>
        )}
      </form>
    </motion.div>
  );
}

/* ─── PAGE ─── */

export default function ContactPage() {
  const [contactInfo, setContactInfo] = useState<ContactInfoData | null>(null);

  useEffect(() => {
    fetch('/api/contact-info')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setContactInfo(data.data);
        }
      })
      .catch(() => {
        // Use defaults
      });
  }, []);

  const info = contactInfo || {
    email: 'contact@blocksscan.io',
    phone: '+91 (XXX) XXX-XXXX',
    address: 'Mumbai, Maharashtra, India',
    twitter: 'https://x.com/blocksscan',
    linkedin: 'https://linkedin.com/company/blocksscan',
    officeHours: 'Monday – Friday: 9:00 AM – 6:00 PM IST',
  };

  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: info.email,
      href: `mailto:${info.email}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: info.phone,
      href: `tel:${info.phone.replace(/\D/g, '')}`,
    },
    {
      icon: MapPin,
      label: 'Address',
      value: info.address,
      href: '#',
    },
  ];

  const socialLinks = [
    { icon: Twitter, label: 'X (Twitter)', href: info.twitter || 'https://x.com/blocksscan', color: '#1DA1F2' },
    { icon: Linkedin, label: 'LinkedIn', href: info.linkedin || 'https://linkedin.com/company/blocksscan', color: '#0A66C2' },
  ];

  return (
    <main className="relative min-h-screen bg-[#0A0A0A]">
      <Navbar />

      {/* ─── HERO ─── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute inset-0 grid-pattern opacity-50" />

        <div className="container relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="label mb-4 inline-block text-accent-300"
          >
            Contact Us
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="display-xl mb-6 max-w-4xl"
          >
            Let&apos;s Start a{' '}
            <span className="gradient-text">Conversation</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#A1A1AA] body-lg max-w-2xl"
          >
            Have a project in mind or want to learn more about our services? 
            We&apos;d love to hear from you. Reach out and let&apos;s explore how we can work together.
          </motion.p>
        </div>
      </section>

      {/* ─── CONTACT SECTION ─── */}
      <section className="section bg-[#0A0A0A]">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Left: Form (takes 3 cols) */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Right: Contact Info (takes 2 cols) */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Cards */}
              {contactItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="card p-6 flex items-start gap-4 group hover:border-accent-500/30 transition-colors"
                  >
                    <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-accent-500/10 border border-accent-500/20">
                      <Icon className="h-5 w-5 text-accent-300" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="label text-accent-300 mb-1">{item.label}</div>
                      <div className="text-white group-hover:text-accent-300 transition-colors">
                        {item.value}
                      </div>
                    </div>
                  </motion.a>
                );
              })}

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="card p-6"
              >
                <div className="label text-accent-300 mb-4">Follow Us</div>
                <div className="flex gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-300 hover:bg-accent-500/20 hover:text-white transition-all"
                      >
                        <Icon className="h-5 w-5" strokeWidth={1.5} />
                      </a>
                    );
                  })}
                </div>
              </motion.div>

              {/* Office Hours */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="card p-6"
              >
                <div className="label text-accent-300 mb-3">Office Hours</div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#A1A1AA]">Monday – Friday</span>
                    <span className="text-white">9:00 AM – 6:00 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#A1A1AA]">Saturday</span>
                    <span className="text-white">10:00 AM – 2:00 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#A1A1AA]">Sunday</span>
                    <span className="text-[#71717A]">Closed</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
