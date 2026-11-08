'use client';

import { motion } from 'framer-motion';
import PageTransition from '@/components/page-transition';
import { personalInfo, aboutMe } from '@/data/content';
import { Code, Palette, Lightbulb, Users } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const skillCategories = [
  { key: 'design', label: '设计', color: '#ff2d6f', icon: Palette },
  { key: 'dev', label: '开发', color: '#2d4bff', icon: Code },
];

const traits = [
  { icon: Palette, label: '设计驱动', desc: '以用户体验为核心的设计思维', color: '#ff2d6f' },
  { icon: Code, label: '技术扎实', desc: '全栈开发能力，从原型到上线', color: '#2d4bff' },
  { icon: Lightbulb, label: '创新思维', desc: '跨领域灵感碰撞，打破常规', color: '#ffe500' },
  { icon: Users, label: '协作共赢', desc: '善于沟通，团队导向的工作方式', color: '#00f5a0' },
];

export default function AboutPage() {
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
            ABOUT ME
          </motion.span>
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.1] mb-8"
          >
            关于<span className="gradient-text">我</span>
          </motion.h1>
        </div>
      </section>

      {/* Intro */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left - Avatar & Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Avatar placeholder */}
              <div className="aspect-square max-w-sm bg-[#141414] border-2 border-[#2a2a2a] rounded-sm overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-[#ffe500] to-[#ff2d6f] opacity-20" />
                    <p className="mt-4 font-mono text-xs text-[#555]">AVATAR</p>
                  </div>
                </div>
                {/* Decorative corner */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#ffe500]" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#ff2d6f]" />
              </div>

              {/* Info cards */}
              <div className="absolute -bottom-6 -right-6 bg-[#141414] border border-[#2a2a2a] p-4 rounded-sm">
                <div className="font-mono text-xs text-[#888] mb-1">LOCATION</div>
                <div className="font-display font-bold">{personalInfo.location}</div>
              </div>
            </div>
          </motion.div>

          {/* Right - Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-6">
              {personalInfo.nameZh}
              <span className="text-[#888] font-normal text-lg ml-3">{personalInfo.title}</span>
            </h2>
            <p className="text-lg text-[#ccc] leading-relaxed mb-4">
              {aboutMe.intro}
            </p>
            <p className="text-[#888] leading-relaxed">
              {aboutMe.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {aboutMe.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-[#141414] border border-[#2a2a2a] p-4 rounded-sm"
                >
                  <div className="font-display text-2xl font-bold text-[#ffe500]">{stat.value}</div>
                  <div className="text-xs text-[#888] font-mono mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Traits */}
      <section className="py-20 px-6 border-t border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="font-mono text-xs text-[#ff2d6f] tracking-widest mb-2 block">
              WHAT I DO
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold">我的特质</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {traits.map((trait, index) => (
              <motion.div
                key={trait.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-[#141414] border border-[#2a2a2a] p-6 rounded-sm hover:border-[#2a2a2a] transition-all duration-300 hover:shadow-[4px_4px_0px_0px_var(--trait-color)]"
                style={{ '--trait-color': trait.color } as React.CSSProperties}
              >
                <trait.icon
                  size={28}
                  className="mb-4 transition-colors"
                  style={{ color: trait.color }}
                />
                <h3 className="font-display text-lg font-bold mb-2">{trait.label}</h3>
                <p className="text-sm text-[#888] leading-relaxed">{trait.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 px-6 border-t border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="font-mono text-xs text-[#2d4bff] tracking-widest mb-2 block">
              SKILLS & TOOLS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold">专业技能</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {skillCategories.map((cat) => (
              <div key={cat.key}>
                <div className="flex items-center gap-3 mb-6">
                  <cat.icon size={20} style={{ color: cat.color }} />
                  <h3 className="font-display text-xl font-bold">{cat.label}</h3>
                </div>
                <div className="space-y-4">
                  {aboutMe.skills
                    .filter((s) => s.category === cat.key)
                    .map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-xs font-mono text-[#888]">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-[#1a1a1a] rounded-full overflow-hidden">
                          <motion.div
                            className="h-full rounded-full"
                            style={{ backgroundColor: cat.color }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                          />
                        </div>
                      </motion.div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
