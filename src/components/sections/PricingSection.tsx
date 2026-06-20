'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Developer',
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: 'Perfect for sandbox testing and dApp prototypes.',
    features: [
      '10,000 API requests / day',
      '1 Custom private PoS testnet',
      'Shared node bandwidth',
      'Standard blocks explorer queries',
      'Community Discord support',
    ],
    cta: 'Start Sandbox',
    highlighted: false,
    color: '#ffffff',
  },
  {
    name: 'Pro Builder',
    monthlyPrice: 99,
    yearlyPrice: 79,
    description: 'Designed for production dApps and scaling workloads.',
    features: [
      '1,000,000 API requests / day',
      '5 Custom private PoS chains',
      'Dedicated RPC endpoints',
      'Advanced trace & decode APIs',
      '1-Hour SLA email support',
      'Custom webhook notifications',
    ],
    cta: 'Upgrade to Pro',
    highlighted: true,
    color: '#00FF66',
  },
  {
    name: 'Validator Node',
    monthlyPrice: 499,
    yearlyPrice: 399,
    description: 'Enterprise level throughput and consensus nodes.',
    features: [
      'Unlimited API requests',
      'Dedicated validator nodes',
      'Co-location peering systems',
      '99.999% Uptime guarantee SLA',
      '24/7 Phone & Slack support',
      'Custom chain configurations',
    ],
    cta: 'Deploy Validator',
    highlighted: false,
    color: '#7C3AED',
  },
];

export default function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section id="pricing" className="relative py-28 bg-[#020205] noise-overlay border-b border-white/5">
      {/* Background Glowing highlights */}
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-[#7C3AED]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-[#00FF66]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#00FF66] font-mono text-xs tracking-widest uppercase mb-4 block font-bold">
            Subscription Options
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-none mb-6">
            Developer <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-base md:text-lg text-white/50 mb-10">
            Scale seamlessly from local development models to global validator node deployments. 
            Choose the throughput tier that fits your dApp operations.
          </p>

          {/* Toggle Button */}
          <div className="inline-flex items-center gap-2 p-1.5 bg-[#09090F] border border-white/5 rounded-full">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                billingPeriod === 'monthly'
                  ? 'bg-white text-black shadow-md'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                billingPeriod === 'yearly'
                  ? 'bg-white text-black shadow-md'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Yearly <span className="text-[#00FF66] font-extrabold ml-1">-20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan, idx) => {
            const price = billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
            
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`rounded-3xl p-8 flex flex-col justify-between relative transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-[#0A0A14] border-2 border-[#00FF66] shadow-[0_20px_50px_rgba(0,255,102,0.15)] scale-102 lg:-translate-y-2'
                    : 'bg-[#09090F]/80 border border-white/5 card-hover'
                }`}
              >
                {/* Highlight Tag */}
                {plan.highlighted && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#00FF66] text-black font-extrabold text-[10px] uppercase tracking-widest shadow-md">
                    Most Popular
                  </span>
                )}

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-xs text-white/50 mb-6 min-h-[32px]">{plan.description}</p>
                  
                  {/* Price display */}
                  <div className="flex items-baseline gap-1.5 mb-8">
                    <span className="text-4xl font-black font-mono text-white">
                      ${price}
                    </span>
                    <span className="text-xs text-white/40 font-semibold uppercase tracking-wider">
                      / month
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-white/10 mb-8" />

                  {/* Features List */}
                  <ul className="flex flex-col gap-4 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-xs text-white/70">
                        <svg 
                          className="w-4 h-4 mt-0.5 shrink-0" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          style={{ color: plan.color }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Call To Action Button */}
                <button
                  className={`w-full py-4 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 active:scale-95 ${
                    plan.highlighted
                      ? 'bg-[#00FF66] text-black hover:bg-[#00FF66]/90 shadow-[0_0_20px_rgba(0,255,102,0.2)]'
                      : 'bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20'
                  }`}
                >
                  {plan.cta}
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
