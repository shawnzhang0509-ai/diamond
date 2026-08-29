import { useEffect, useState } from 'react';
import { BRAND } from '@/data/site';
import { useLang, usePick } from '@/i18n';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, setLang } = useLang();
  const pick = usePick();

  const LINKS = [
    { href: '#pricing', label: pick('现货价格', 'Pricing') },
    { href: '#videos', label: pick('实拍视频', 'Videos') },
    { href: '#gallery', label: pick('裸石图库', 'Gallery') },
    { href: '#about', label: pick('关于培育钻', 'About') },
    { href: '#contact', label: pick('联系我们', 'Contact') },
  ];

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    fn();
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const LangSwitch = (
    <button
      onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
      className="rounded-full border border-white/25 px-3 py-1 text-xs tracking-wider text-white/80 transition hover:border-amber-200 hover:text-amber-200"
      aria-label="Switch language"
    >
      {lang === 'zh' ? 'EN' : '中文'}
    </button>
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0b0b0d]/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-lg tracking-[0.25em] text-amber-200/90">LUMINA</span>
          <span className="text-sm text-white/70">{pick(BRAND.cn, 'Lab Diamonds')}</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-white/70 transition hover:text-amber-200">
              {l.label}
            </a>
          ))}
          {LangSwitch}
          <a
            href="#pricing"
            className="rounded-full border border-amber-200/50 px-4 py-1.5 text-sm text-amber-200 transition hover:bg-amber-200 hover:text-black"
          >
            {pick('查看价格', 'View Prices')}
          </a>
        </nav>
        <div className="flex items-center gap-3 md:hidden">
          {LangSwitch}
          <button
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span className={`h-px w-6 bg-white transition ${open ? 'translate-y-[3.5px] rotate-45' : ''}`} />
            <span className={`h-px w-6 bg-white transition ${open ? '-translate-y-[3.5px] -rotate-45' : ''}`} />
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-white/10 bg-[#0b0b0d]/95 px-5 py-4 backdrop-blur-md md:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm text-white/80"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
