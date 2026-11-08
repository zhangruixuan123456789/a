'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Filter } from 'lucide-react';
import PageTransition from '@/components/page-transition';
import { portfolioItems } from '@/data/content';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const categories = ['全部', ...Array.from(new Set(portfolioItems.map((p) => p.category)))];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('全部');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filtered =
    activeFilter === '全部'
      ? portfolioItems
      : portfolioItems.filter((p) => p.category === activeFilter);

  return (
    <PageTransition>
      {/* Hero */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.span
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-mono text-xs text-[#ffe500] tracking-widest mb-4 block"
          >
            PORTFOLIO
          </motion.span>
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.1] mb-6"
          >
            我的<span className="gradient-text">作品</span>
          </motion.h1>
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-lg text-[#888] max-w-2xl"
          >
            每个项目都是一次探索，从概念到落地，追求极致的用户体验与视觉表达
          </motion.p>
        </div>
      </section>

      {/* Filter */}
      <section className="pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4 flex-wrap"
          >
            <Filter size={16} className="text-[#888]" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 text-sm font-mono rounded-sm border transition-all duration-200 ${
                  activeFilter === cat
                    ? 'bg-[#ffe500] text-[#0a0a0a] border-[#ffe500] font-bold'
                    : 'border-[#2a2a2a] text-[#888] hover:border-[#ffe500] hover:text-[#ffe500]'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="group cursor-pointer"
                >
                  {/* Image area */}
                  <div
                    className="relative aspect-[4/3] bg-[#141414] border border-[#2a2a2a] rounded-sm overflow-hidden mb-4 transition-all duration-300"
                    style={{
                      boxShadow:
                        hoveredId === item.id
                          ? `6px 6px 0px 0px ${item.color}`
                          : 'none',
                    }}
                  >
                    {/* Abstract placeholder visual */}
                    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                      <motion.div
                        className="w-32 h-32 rounded-sm opacity-10 group-hover:opacity-25 transition-opacity duration-500"
                        style={{ backgroundColor: item.color }}
                        animate={
                          hoveredId === item.id
                            ? { rotate: [0, 5, -5, 0], scale: [1, 1.1, 1] }
                            : {}
                        }
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                    </div>

                    {/* Overlay on hover */}
                    <div
                      className={`absolute inset-0 bg-[#0a0a0a]/80 flex items-center justify-center transition-opacity duration-300 ${
                        hoveredId === item.id ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <div
                        className="w-12 h-12 flex items-center justify-center border-2 rounded-sm"
                        style={{ borderColor: item.color, color: item.color }}
                      >
                        <ExternalLink size={20} />
                      </div>
                    </div>

                    {/* Year badge */}
                    <div className="absolute top-4 right-4">
                      <span className="font-mono text-xs px-2 py-1 bg-[#0a0a0a]/80 text-[#888] rounded-sm">
                        {item.year}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-lg font-bold group-hover:text-[#ffe500] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#888] mt-1">{item.category}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[#666] mt-2 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2 py-0.5 bg-[#1a1a1a] text-[#888] rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
