'use client';

import { motion } from 'framer-motion';

const teamMembers = [
  { name: 'Dheeraj', role: 'Team Lead / Blockchain Developer', color: '#00D4AA' },
  { name: 'Abhay Padgaonkar', role: 'Backend Lead', color: '#0066FF' },
  { name: 'Sejal Mukane', role: 'UI/UX Design Lead', color: '#FF6B35' },
  { name: 'Karan', role: 'Backend Developer', color: '#00D4AA' },
  { name: 'Rutuja', role: 'Documentation Lead', color: '#0066FF' },
  { name: 'Palak Churi', role: 'UI/UX Designer', color: '#FF6B35' },
  { name: 'Nishtha Chonkar', role: 'Documentation', color: '#00D4AA' },
  { name: 'Ruchi Kinalekar', role: 'Documentation', color: '#0066FF' },
  { name: 'Harsh Gaikwad', role: 'Backend Developer', color: '#FF6B35' },
  { name: 'Shalaka Pawar', role: 'Testing / QA', color: '#00D4AA' },
  { name: 'Madhavi', role: 'Testing / QA', color: '#0066FF' },
  { name: 'Siddhi', role: 'UI/UX Designer', color: '#FF6B35' },
  { name: 'Yash Patkar', role: 'Frontend Developer', color: '#00D4AA' },
  { name: 'Om', role: 'Frontend Developer', color: '#0066FF' },
];

export default function TeamSection() {
  return (
    <section
      id="team"
      className="relative min-h-screen flex items-center justify-center py-32 overflow-hidden bg-black"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#00D4AA]/5 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#00D4AA] font-mono text-sm tracking-widest uppercase mb-4 block">
              Our Team
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Meet the
              <span className="gradient-text block mt-2">Gen2 Team</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              The brilliant minds behind BlocksScan Technologies. 
              14 members, one mission.
            </p>
          </motion.div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group"
            >
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 card-hover relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 w-full h-1"
                  style={{ backgroundColor: member.color }}
                />
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl font-bold text-white">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white text-center mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-white/60 text-center">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
