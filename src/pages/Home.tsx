import Navbar from '@/sections/Navbar';
import Hero from '@/sections/Hero';
import Pricing from '@/sections/Pricing';
import Videos from '@/sections/Videos';
import Gallery from '@/sections/Gallery';
import About from '@/sections/About';
import Contact from '@/sections/Contact';
import { BRAND } from '@/data/site';
import { LangProvider, useLang, usePick } from '@/i18n';

function Stats() {
  const pick = usePick();
  const items: [string, string][] = [
    ['D–E', pick('颜色等级', 'Color Grade')],
    ['VVS', pick('净度等级', 'Clarity Grade')],
    ['EX', pick('切工等级', 'Cut Grade')],
    ['IGI / NGTC', pick('权威证书', 'Certification')],
  ];
  return (
    <div className="border-y border-white/10 bg-white/[0.02]">
      <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-white/10 sm:grid-cols-4">
        {items.map(([v, l]) => (
          <div key={l} className="px-4 py-8 text-center">
            <p className="font-display text-2xl text-amber-200 sm:text-3xl">{v}</p>
            <p className="mt-1 text-xs tracking-widest text-white/50">{l}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Footer() {
  const { lang } = useLang();
  const pick = usePick();
  return (
    <footer className="border-t border-white/10 py-10 text-center">
      <p className="font-display tracking-[0.3em] text-amber-200/80">{BRAND.en}</p>
      <p className="mt-2 text-xs text-white/40">{BRAND.tagline[lang]}</p>
      <p className="mt-4 text-xs text-white/25">
        © {new Date().getFullYear()} {BRAND.en}. {pick('版权所有', 'All rights reserved.')}
      </p>
    </footer>
  );
}

function Page() {
  return (
    <div className="min-h-screen bg-[#0b0b0d] text-white antialiased">
      <Navbar />
      <Hero />
      <Stats />
      <Pricing />
      <Videos />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default function Home() {
  return (
    <LangProvider>
      <Page />
    </LangProvider>
  );
}
