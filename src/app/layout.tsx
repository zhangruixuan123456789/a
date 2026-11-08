import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/navigation';

export const metadata: Metadata = {
  title: {
    default: 'RUIXUAN ZHANG - IMAGINATION, PERSEVERANCE, GROW',
    template: '%s | RUIXUAN ZHANG',
  },
  description:
    '创意设计师与全栈开发者的个人作品集，展示设计作品、项目经历与专业技能。',
  keywords: ['设计师', '全栈开发', '作品集', 'UI/UX', '个人网站'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased bg-[#0a0a0a] text-[#f5f5f5] min-h-screen">
        <div className="noise-overlay" />
        <Navigation />
        <main className="relative">{children}</main>
        {/* Footer */}
        <footer className="border-t border-[#2a2a2a] py-8 px-6">
          <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[#888] font-mono">
              &copy; 2024 RUIXUAN ZHANG. ALL RIGHTS RESERVED.
            </p>
            <p className="text-sm text-[#555] font-mono">
              DESIGNED & BUILT WITH PASSION
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
