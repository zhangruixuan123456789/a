'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDownRight } from 'lucide-react';
import PageTransition from '@/components/page-transition';
import { personalInfo, portfolioItems } from '@/data/content';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function HomePage() {
  const featuredWorks = portfolioItems.slice(0, 3);

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 grid-bg" />
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-[#ffe500]/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-[#ff2d6f]/5 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        {/* Geometric decorations */}
        <motion.div
          className="absolute top-32 left-[15%] w-4 h-4 bg-[#ffe500] rotate-45"
          animate={{ rotate: [45, 225, 45] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-40 right-[20%] w-3 h-3 rounded-full bg-[#ff2d6f]"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-[40%] right-[10%] w-6 h-6 border-2 border-[#2d4bff] rotate-12"
          animate={{ rotate: [12, 372] }}
          transition={{ duration: 15, repeat: Infinity }}
        />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Status badge */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-[#2a2a2a] rounded-full bg-[#141414]"
          >
            <span className="w-2 h-2 rounded-full bg-[#00f5a0] animate-pulse" />
            <span className="text-sm font-mono text-[#888]">AVAILABLE FOR WORK</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tight mb-6"
          >
            <span className="block text-[#f5f5f5]">CREATIVE</span>
            <span className="block gradient-text">DESIGNER</span>
            <span className="block text-[#f5f5f5]">&amp; DEVELOPER</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-xl mx-auto text-lg sm:text-xl text-[#888] mb-10 leading-relaxed"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/portfolio"
              className="group flex items-center gap-2 px-8 py-4 bg-[#ffe500] text-[#0a0a0a] font-display font-bold text-sm tracking-wider rounded-sm transition-all duration-200 hover:shadow-[4px_4px_0px_0px_#ff2d6f] hover:translate-x-[-2px] hover:translate-y-[-2px]"
            >
              查看作品
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="group flex items-center gap-2 px-8 py-4 border border-[#2a2a2a] text-[#f5f5f5] font-display font-bold text-sm tracking-wider rounded-sm transition-all duration-200 hover:border-[#ffe500] hover:text-[#ffe500]"
            >
              联系我
              <ArrowDownRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-[#2a2a2a] rounded-full flex items-start justify-center p-1.5">
            <div className="w-1.5 h-1.5 bg-[#ffe500] rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Featured Works */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-end justify-between mb-16"
          >
            <div>
              <span className="font-mono text-xs text-[#ffe500] tracking-widest mb-2 block">
                FEATURED WORKS
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold">
                精选作品
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="hidden sm:flex items-center gap-2 text-sm text-[#888] hover:text-[#ffe500] transition-colors font-mono"
            >
              查看全部 <ArrowRight size={14} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredWorks.map((work, index) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="group"
              >
                <div
                  className="relative aspect-[4/3] bg-[#141414] border border-[#2a2a2a] rounded-sm overflow-hidden mb-4 transition-all duration-300 group-hover:border-[#2a2a2a] group-hover:shadow-[6px_6px_0px_0px_var(--hover-color)]"
                  style={{ '--hover-color': work.color } as React.CSSProperties}
                >
                  {/* Placeholder visual */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-20 h-20 rounded-sm opacity-20 group-hover:opacity-40 transition-opacity"
                      style={{ backgroundColor: work.color }}
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#0a0a0a] to-transparent">
                    <span className="font-mono text-xs text-[#888]">{work.year}</span>
                  </div>
                </div>
                <h3 className="font-display text-xl font-bold mb-1 group-hover:text-[#ffe500] transition-colors">
                  {work.title}
                </h3>
                <p className="text-sm text-[#888]">{work.category}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm text-[#888] hover:text-[#ffe500] transition-colors font-mono"
            >
              查看全部作品 <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 px-6 border-t border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '6+', label: '年从业经验', color: '#ffe500' },
            { value: '50+', label: '完成项目', color: '#ff2d6f' },
            { value: '30+', label: '合作客户', color: '#2d4bff' },
            { value: '8', label: '获得奖项', color: '#00f5a0' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div
                className="font-display text-4xl sm:text-5xl font-bold mb-2"
                style={{ color: stat.color }}
              >
                {stat.value}
              </div>
              <div className="text-sm text-[#888] font-mono">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
