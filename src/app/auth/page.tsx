'use client';

import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '@/components/page-transition';
import AdminPanel from '@/components/admin-panel';
import { User, Lock, Mail, Phone, Send } from 'lucide-react';

type TabType = 'login' | 'register';
type RegType = 'phone' | 'email';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState<TabType>('login');
  const [regType, setRegType] = useState<RegType>('phone');
  const [countdown, setCountdown] = useState(0);

  // Login form
  const [loginAccount, setLoginAccount] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Register form
  const [regPhone, setRegPhone] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regCode, setRegCode] = useState('');
  const [regPassword, setRegPassword] = useState('');

  const handleSendCode = useCallback(() => {
    if (countdown > 0) return;
    setCountdown(60);
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }, [countdown]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert('登录功能演示 - 实际项目请接入后端认证服务');
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    alert('注册功能演示 - 实际项目请接入后端认证服务');
  };

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
            ACCOUNT
          </motion.span>
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.1]"
          >
            登录<span className="gradient-text"> / </span>注册
          </motion.h1>
        </div>
      </section>

      {/* Auth Card + Admin Panel */}
      <section className="pb-32 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left - Auth Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-[#141414] border border-[#2a2a2a] rounded-sm overflow-hidden"
          >
            {/* Tabs */}
            <div className="flex border-b border-[#2a2a2a]">
              <button
                onClick={() => setActiveTab('login')}
                className={`flex-1 py-4 text-center font-display font-bold text-sm tracking-wider transition-colors relative ${
                  activeTab === 'login' ? 'text-[#ffe500]' : 'text-[#888] hover:text-[#ccc]'
                }`}
              >
                登录
                {activeTab === 'login' && (
                  <motion.div
                    layoutId="auth-tab-indicator"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-[#ffe500]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
              <button
                onClick={() => setActiveTab('register')}
                className={`flex-1 py-4 text-center font-display font-bold text-sm tracking-wider transition-colors relative ${
                  activeTab === 'register' ? 'text-[#ffe500]' : 'text-[#888] hover:text-[#ccc]'
                }`}
              >
                注册
                {activeTab === 'register' && (
                  <motion.div
                    layoutId="auth-tab-indicator"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-[#ffe500]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            </div>

            <div className="p-8">
              {/* Login Panel */}
              {activeTab === 'login' && (
                <motion.form
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleLogin}
                  className="space-y-5"
                >
                  <div>
                    <label className="block text-xs font-mono text-[#888] mb-2 tracking-wider">
                      账号
                    </label>
                    <div className="relative">
                      <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#555]" />
                      <input
                        type="text"
                        value={loginAccount}
                        onChange={(e) => setLoginAccount(e.target.value)}
                        placeholder="手机号 / 邮箱"
                        className="w-full pl-10 pr-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-sm text-[#f5f5f5] placeholder-[#555] text-sm focus:outline-none focus:border-[#ffe500] transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-[#888] mb-2 tracking-wider">
                      密码
                    </label>
                    <div className="relative">
                      <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#555]" />
                      <input
                        type="password"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        placeholder="输入密码"
                        className="w-full pl-10 pr-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-sm text-[#f5f5f5] placeholder-[#555] text-sm focus:outline-none focus:border-[#ffe500] transition-colors"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#ffe500] text-[#0a0a0a] font-display font-bold text-sm tracking-wider rounded-sm transition-all duration-200 hover:shadow-[4px_4px_0px_0px_#ff2d6f] hover:translate-x-[-2px] hover:translate-y-[-2px]"
                  >
                    登录
                  </button>
                  <p className="text-center text-sm text-[#888]">
                    还没有账号？
                    <button
                      type="button"
                      onClick={() => setActiveTab('register')}
                      className="text-[#ffe500] font-bold ml-1 hover:underline"
                    >
                      立即注册
                    </button>
                  </p>
                </motion.form>
              )}

              {/* Register Panel */}
              {activeTab === 'register' && (
                <motion.form
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleRegister}
                  className="space-y-5"
                >
                  {/* Registration type toggle */}
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setRegType('phone')}
                      className={`flex items-center gap-2 px-4 py-2 text-sm border rounded-sm transition-all ${
                        regType === 'phone'
                          ? 'bg-[#ffe500] text-[#0a0a0a] border-[#ffe500] font-bold'
                          : 'border-[#2a2a2a] text-[#888] hover:border-[#ffe500] hover:text-[#ffe500]'
                      }`}
                    >
                      <Phone size={14} />
                      手机注册
                    </button>
                    <button
                      type="button"
                      onClick={() => setRegType('email')}
                      className={`flex items-center gap-2 px-4 py-2 text-sm border rounded-sm transition-all ${
                        regType === 'email'
                          ? 'bg-[#ffe500] text-[#0a0a0a] border-[#ffe500] font-bold'
                          : 'border-[#2a2a2a] text-[#888] hover:border-[#ffe500] hover:text-[#ffe500]'
                      }`}
                    >
                      <Mail size={14} />
                      邮箱注册
                    </button>
                  </div>

                  {/* Phone input */}
                  {regType === 'phone' && (
                    <div>
                      <label className="block text-xs font-mono text-[#888] mb-2 tracking-wider">
                        手机号码
                      </label>
                      <div className="relative">
                        <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#555]" />
                        <input
                          type="tel"
                          value={regPhone}
                          onChange={(e) => setRegPhone(e.target.value)}
                          placeholder="请输入手机号"
                          className="w-full pl-10 pr-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-sm text-[#f5f5f5] placeholder-[#555] text-sm focus:outline-none focus:border-[#ffe500] transition-colors"
                        />
                      </div>
                    </div>
                  )}

                  {/* Email input */}
                  {regType === 'email' && (
                    <div>
                      <label className="block text-xs font-mono text-[#888] mb-2 tracking-wider">
                        邮箱地址
                      </label>
                      <div className="relative">
                        <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#555]" />
                        <input
                          type="email"
                          value={regEmail}
                          onChange={(e) => setRegEmail(e.target.value)}
                          placeholder="请输入邮箱"
                          className="w-full pl-10 pr-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-sm text-[#f5f5f5] placeholder-[#555] text-sm focus:outline-none focus:border-[#ffe500] transition-colors"
                        />
                      </div>
                    </div>
                  )}

                  {/* Verification code */}
                  <div>
                    <label className="block text-xs font-mono text-[#888] mb-2 tracking-wider">
                      验证码
                    </label>
                    <div className="flex gap-3">
                      <div className="relative flex-1">
                        <Send size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#555]" />
                        <input
                          type="text"
                          value={regCode}
                          onChange={(e) => setRegCode(e.target.value)}
                          placeholder="验证码"
                          className="w-full pl-10 pr-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-sm text-[#f5f5f5] placeholder-[#555] text-sm focus:outline-none focus:border-[#ffe500] transition-colors"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={handleSendCode}
                        disabled={countdown > 0}
                        className={`whitespace-nowrap px-4 py-3 text-sm font-bold rounded-sm border transition-all ${
                          countdown > 0
                            ? 'bg-[#1a1a1a] border-[#2a2a2a] text-[#555] cursor-not-allowed'
                            : 'bg-[#ffe500] border-[#ffe500] text-[#0a0a0a] hover:shadow-[2px_2px_0px_0px_#ff2d6f]'
                        }`}
                      >
                        {countdown > 0 ? `${countdown}s` : '发送验证码'}
                      </button>
                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block text-xs font-mono text-[#888] mb-2 tracking-wider">
                      设置密码
                    </label>
                    <div className="relative">
                      <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#555]" />
                      <input
                        type="password"
                        value={regPassword}
                        onChange={(e) => setRegPassword(e.target.value)}
                        placeholder="设置登录密码"
                        className="w-full pl-10 pr-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-sm text-[#f5f5f5] placeholder-[#555] text-sm focus:outline-none focus:border-[#ffe500] transition-colors"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#ffe500] text-[#0a0a0a] font-display font-bold text-sm tracking-wider rounded-sm transition-all duration-200 hover:shadow-[4px_4px_0px_0px_#ff2d6f] hover:translate-x-[-2px] hover:translate-y-[-2px]"
                  >
                    注册
                  </button>
                  <p className="text-center text-sm text-[#888]">
                    已有账号？
                    <button
                      type="button"
                      onClick={() => setActiveTab('login')}
                      className="text-[#ffe500] font-bold ml-1 hover:underline"
                    >
                      去登录
                    </button>
                  </p>
                </motion.form>
              )}
            </div>
          </motion.div>

          {/* Right - Admin Panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <AdminPanel />
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
