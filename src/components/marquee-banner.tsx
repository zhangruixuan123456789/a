'use client';

import { useState, useEffect } from 'react';

export default function MarqueeBanner() {
  const [notice, setNotice] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem('siteNotice');
    if (stored) {
      setNotice(stored);
    }

    // Listen for storage changes (from admin panel)
    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'siteNotice') {
        setNotice(e.newValue || '');
      }
    };
    window.addEventListener('storage', handleStorage);

    // Also poll for changes within same tab
    const interval = setInterval(() => {
      const current = localStorage.getItem('siteNotice') || '';
      if (current !== notice) {
        setNotice(current);
      }
    }, 500);

    return () => {
      window.removeEventListener('storage', handleStorage);
      clearInterval(interval);
    };
  }, [notice]);

  if (!notice) return null;

  return (
    <div className="w-full bg-[#ffe500] text-[#0a0a0a] overflow-hidden h-9 flex items-center">
      <div className="marquee-content whitespace-nowrap inline-block animate-marquee">
        <span className="font-mono text-sm font-medium px-4">
          {notice}
        </span>
      </div>
    </div>
  );
}
