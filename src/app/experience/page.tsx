'use client';

import { motion } from 'framer-motion';
import PageTransition from '@/components/page-transition';
import { experiences } from '@/data/content';
import { Briefcase, GraduationCap } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function ExperiencePage() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.span
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-mono text-xs text-[#ffe500] tracking-widest mb-4 block"
          >
            EXPERIENCE
          </motion.span>
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.1]"
          >
            我的<span className="gradient-text">经历</span>
          </motion.h1>
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-6 text-lg text-[#888] max-w-2xl"
          >
            从设计学院到科技公司，每一步都在探索创意与技术的交汇点
          </motion.p>
        </div>
      </section>

      {/* Work Experience */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-12"
          >
            <div className="flex items-center justify-center w-10 h-10 bg-[#ff2d6f]/10 border border-[#ff2d6f]/30 rounded-sm">
              <Briefcase size={18} className="text-[#ff2d6f]" />
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold">学习经历</h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-[#2a2a2a]" />

            <div className="space-y-12">
              {experiences.work.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="relative pl-8 md:pl-20"
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute left-[-4px] md:left-[28px] top-2 w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: index === 0 ? '#ffe500' : '#2a2a2a',
                      boxShadow: index === 0 ? '0 0 10px rgba(255,229,0,0.5)' : 'none',
                    }}
                  />

                  <div className="bg-[#141414] border border-[#2a2a2a] p-6 sm:p-8 rounded-sm hover:border-[#333] transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <div>
                        <h3 className="font-display text-xl font-bold">{exp.role}</h3>
                        <p className="text-[#ffe500] font-medium">{exp.company}</p>
                      </div>
                      <span className="font-mono text-xs text-[#888] bg-[#1a1a1a] px-3 py-1 rounded-sm self-start">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-[#888] leading-relaxed mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((h) => (
                        <span
                          key={h}
                          className="text-xs font-mono px-3 py-1 bg-[#1a1a1a] border border-[#2a2a2a] text-[#ccc] rounded-sm"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 px-6 border-t border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-12"
          >
            <div className="flex items-center justify-center w-10 h-10 bg-[#2d4bff]/10 border border-[#2d4bff]/30 rounded-sm">
              <GraduationCap size={18} className="text-[#2d4bff]" />
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold">教育背景</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group bg-[#141414] border border-[#2a2a2a] p-6 sm:p-8 rounded-sm hover:shadow-[4px_4px_0px_0px_#2d4bff] transition-all duration-300"
              >
                <span className="font-mono text-xs text-[#888] mb-3 block">{edu.period}</span>
                <h3 className="font-display text-xl font-bold mb-1 group-hover:text-[#2d4bff] transition-colors">
                  {edu.school}
                </h3>
                <p className="text-[#ffe500] text-sm mb-4">{edu.degree}</p>
                <p className="text-[#888] text-sm leading-relaxed">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 px-6 border-t border-[#2a2a2a]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.blockquote
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-6xl text-[#ffe500]/20 font-display">
              &ldquo;
            </div>
            <p className="text-xl sm:text-2xl font-display font-medium leading-relaxed text-[#ccc]">
              设计不是装饰，而是沟通。<br />
              代码不是工具，而是表达的媒介。
            </p>
            <footer className="mt-6 text-sm text-[#888] font-mono">
              — MY DESIGN PHILOSOPHY
            </footer>
          </motion.blockquote>
        </div>
      </section>
    </PageTransition>
  );
}
