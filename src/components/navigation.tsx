'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { personalInfo } from '@/data/content';
import MarqueeBanner from '@/components/marquee-banner';

const navItems = [
  { href: '/', label: '首页', en: 'HOME' },
  { href: '/about', label: '关于', en: 'ABOUT' },
  { href: '/experience', label: '经历', en: 'EXPERIENCE' },
  { href: '/portfolio', label: '作品', en: 'PORTFOLIO' },
  { href: '/contact', label: '联系', en: 'CONTACT' },
  { href: '/auth', label: '登录', en: 'LOGIN' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#2a2a2a]'
            : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center bg-[#ffe500] text-[#0a0a0a] font-display font-bold text-lg rounded-sm transition-transform duration-200 group-hover:scale-110">
              {personalInfo.name.charAt(0)}
            </div>
            <span className="font-display font-bold text-lg tracking-tight hidden sm:block">
              {personalInfo.name}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-[#ffe500]'
                      : 'text-[#888] hover:text-[#f5f5f5]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-0 bg-[#ffe500]/10 rounded-sm border border-[#ffe500]/30"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 font-mono text-xs tracking-wider">
                    {item.en}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden flex h-10 w-10 items-center justify-center border border-[#2a2a2a] rounded-sm hover:border-[#ffe500] hover:text-[#ffe500] transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
        <MarqueeBanner />
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a] pt-20 px-6 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className={`block px-4 py-4 text-2xl font-display font-bold border-b border-[#2a2a2a] transition-colors ${
                        isActive ? 'text-[#ffe500]' : 'text-[#f5f5f5] hover:text-[#ffe500]'
                      }`}
                    >
                      <span className="font-mono text-xs text-[#888] mr-3">{item.en}</span>
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
