'use client';

import { useState, useEffect, useCallback } from 'react';
import { Shield, LogOut, Save, Megaphone } from 'lucide-react';

// Base64 encoded password: "A3212832015d"
const ADMIN_SECRET = 'QTMyMTI4MzIwMTVk';

function getAdminPassword(): string {
  return atob(ADMIN_SECRET);
}

export default function AdminPanel() {
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [tip, setTip] = useState('');
  const [tipType, setTipType] = useState<'success' | 'error' | ''>('');
  const [noticeText, setNoticeText] = useState('');
  const [noticeTip, setNoticeTip] = useState('');
  const [noticeTipType, setNoticeTipType] = useState<'success' | 'error' | ''>('');

  useEffect(() => {
    // Clear admin state on mount
    localStorage.removeItem('isAdmin');
    const stored = localStorage.getItem('siteNotice') || '';
    setNoticeText(stored);
  }, []);

  const handleAdminCheck = useCallback(() => {
    const inputVal = password.trim();
    if (inputVal === getAdminPassword()) {
      setTip('密码正确，已登录管理员');
      setTipType('success');
      localStorage.setItem('isAdmin', 'true');
      setIsAdmin(true);
      const stored = localStorage.getItem('siteNotice') || '';
      setNoticeText(stored);
    } else {
      setTip('密码错误');
      setTipType('error');
    }
  }, [password]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAdminCheck();
    }
  }, [handleAdminCheck]);

  const handleSaveNotice = useCallback(() => {
    if (localStorage.getItem('isAdmin') !== 'true') {
      alert('你不是管理员，禁止修改公告！');
      return;
    }
    const text = noticeText.trim();
    localStorage.setItem('siteNotice', text);
    // Dispatch custom event for marquee to pick up
    window.dispatchEvent(new Event('notice-updated'));
    if (text === '') {
      setNoticeTip('公告已清空');
    } else {
      setNoticeTip('公告保存成功！');
    }
    setNoticeTipType('success');
  }, [noticeText]);

  const handleNoticeKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSaveNotice();
    }
  }, [handleSaveNotice]);

  const handleLogout = useCallback(() => {
    localStorage.removeItem('isAdmin');
    setIsAdmin(false);
    setPassword('');
    setTip('已退出管理员');
    setTipType('success');
  }, []);

  return (
    <div className="space-y-6">
      {/* Admin Login Card */}
      <div className="bg-[#141414] border border-[#2a2a2a] rounded-sm overflow-hidden">
        <div className="flex items-center gap-3 px-6 py-4 border-b border-[#2a2a2a] bg-[#1a1a1a]">
          <Shield size={18} className="text-[#ffe500]" />
          <h3 className="font-display font-bold text-sm tracking-wider">管理员入口</h3>
        </div>
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-mono text-[#888] mb-2 tracking-wider">
              管理员密码
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="请输入管理员密码"
              className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-sm text-[#f5f5f5] placeholder-[#555] text-sm focus:outline-none focus:border-[#ffe500] transition-colors"
            />
          </div>
          <button
            onClick={handleAdminCheck}
            className="w-full py-3 bg-[#ffe500] text-[#0a0a0a] font-display font-bold text-sm tracking-wider rounded-sm transition-all duration-200 hover:shadow-[4px_4px_0px_0px_#ff2d6f] hover:translate-x-[-2px] hover:translate-y-[-2px]"
          >
            登录管理后台
          </button>
          {tip && (
            <p className={`text-center text-sm ${tipType === 'success' ? 'text-[#00f5a0]' : 'text-[#ff4444]'}`}>
              {tip}
            </p>
          )}
        </div>
      </div>

      {/* Notice Edit Panel - only visible when admin is logged in */}
      {isAdmin && (
        <div className="bg-[#141414] border border-[#ffe500]/30 rounded-sm overflow-hidden">
          <div className="flex items-center gap-3 px-6 py-4 border-b border-[#2a2a2a] bg-[#ffe500]/5">
            <Megaphone size={18} className="text-[#ffe500]" />
            <h3 className="font-display font-bold text-sm tracking-wider">修改滚动公告</h3>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <label className="block text-xs font-mono text-[#888] mb-2 tracking-wider">
                公告内容
              </label>
              <textarea
                value={noticeText}
                onChange={(e) => setNoticeText(e.target.value)}
                onKeyDown={handleNoticeKeyDown}
                placeholder="输入公告文字"
                rows={3}
                className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-sm text-[#f5f5f5] placeholder-[#555] text-sm focus:outline-none focus:border-[#ffe500] transition-colors resize-none"
              />
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleSaveNotice}
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#ffe500] text-[#0a0a0a] font-display font-bold text-sm tracking-wider rounded-sm transition-all duration-200 hover:shadow-[4px_4px_0px_0px_#ff2d6f] hover:translate-x-[-2px] hover:translate-y-[-2px]"
              >
                <Save size={14} />
                保存公告
              </button>
              <button
                onClick={handleLogout}
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#2a2a2a] text-[#888] font-display font-bold text-sm tracking-wider rounded-sm transition-all duration-200 hover:bg-[#333] hover:text-[#f5f5f5]"
              >
                <LogOut size={14} />
                退出管理员
              </button>
            </div>
            {noticeTip && (
              <p className={`text-center text-sm ${noticeTipType === 'success' ? 'text-[#00f5a0]' : 'text-[#ff4444]'}`}>
                {noticeTip}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
