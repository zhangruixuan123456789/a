'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, Send, Github, Twitter, Linkedin } from 'lucide-react';
import PageTransition from '@/components/page-transition';
import { personalInfo, contactInfo } from '@/data/content';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 占位：实际项目中接入邮件服务或后端 API
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

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
            CONTACT
          </motion.span>
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.1] mb-6"
          >
            联系<span className="gradient-text">我</span>
          </motion.h1>
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-lg text-[#888] max-w-2xl"
          >
            {contactInfo.subheading}
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left - Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8">
                {contactInfo.heading}
              </h2>

              {/* Contact methods */}
              <div className="space-y-4 mb-12">
                {contactInfo.methods.map((method, index) => {
                  const Icon = iconMap[method.icon] || Mail;
                  return (
                    <motion.div
                      key={method.type}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group flex items-center gap-4 p-4 bg-[#141414] border border-[#2a2a2a] rounded-sm hover:border-[#ffe500]/50 transition-all duration-200"
                    >
                      <div className="flex items-center justify-center w-10 h-10 bg-[#1a1a1a] rounded-sm group-hover:bg-[#ffe500]/10 transition-colors">
                        <Icon size={18} className="text-[#ffe500]" />
                      </div>
                      <div>
                        <div className="text-xs font-mono text-[#888]">{method.label}</div>
                        <div className="font-medium">{method.value}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Social links */}
              <div>
                <h3 className="font-mono text-xs text-[#888] tracking-widest mb-4">
                  SOCIAL LINKS
                </h3>
                <div className="flex gap-3">
                  {[
                    { icon: Github, href: personalInfo.socialLinks.github, label: 'GitHub' },
                    { icon: Twitter, href: personalInfo.socialLinks.twitter, label: 'Twitter' },
                    { icon: Linkedin, href: personalInfo.socialLinks.linkedin, label: 'LinkedIn' },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 bg-[#141414] border border-[#2a2a2a] rounded-sm hover:border-[#ffe500] hover:text-[#ffe500] hover:shadow-[2px_2px_0px_0px_#ffe500] transition-all duration-200"
                      aria-label={social.label}
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono text-[#888] mb-2 tracking-wider">
                    姓名 *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-[#141414] border border-[#2a2a2a] rounded-sm text-[#f5f5f5] placeholder-[#555] focus:outline-none focus:border-[#ffe500] transition-colors"
                    placeholder="你的名字"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-[#888] mb-2 tracking-wider">
                    邮箱 *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-[#141414] border border-[#2a2a2a] rounded-sm text-[#f5f5f5] placeholder-[#555] focus:outline-none focus:border-[#ffe500] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-[#888] mb-2 tracking-wider">
                  主题
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-[#141414] border border-[#2a2a2a] rounded-sm text-[#f5f5f5] placeholder-[#555] focus:outline-none focus:border-[#ffe500] transition-colors"
                  placeholder="关于什么？"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#888] mb-2 tracking-wider">
                  消息 *
                </label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-[#141414] border border-[#2a2a2a] rounded-sm text-[#f5f5f5] placeholder-[#555] focus:outline-none focus:border-[#ffe500] transition-colors resize-none"
                  placeholder="说点什么吧..."
                />
              </div>

              <button
                type="submit"
                className="group flex items-center gap-3 px-8 py-4 bg-[#ffe500] text-[#0a0a0a] font-display font-bold text-sm tracking-wider rounded-sm transition-all duration-200 hover:shadow-[4px_4px_0px_0px_#ff2d6f] hover:translate-x-[-2px] hover:translate-y-[-2px] disabled:opacity-50"
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <>已发送 ✓</>
                ) : (
                  <>
                    发送消息
                    <Send size={16} className="transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Big CTA */}
      <section className="py-20 px-6 border-t border-[#2a2a2a]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              有想法？<span className="gradient-text">聊聊吧</span>
            </h2>
            <p className="text-[#888] text-lg mb-8">
              无论是项目合作、技术咨询还是单纯想打个招呼
            </p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#ffe500] text-[#ffe500] font-display font-bold text-sm tracking-wider rounded-sm hover:bg-[#ffe500] hover:text-[#0a0a0a] transition-all duration-200"
            >
              <Mail size={18} />
              {personalInfo.email}
            </a>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
