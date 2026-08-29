import { BRAND } from '@/data/site';
import { usePick } from '@/i18n';

export default function Hero() {
  const pick = usePick();
  return (
    <section id="top" className="relative flex min-h-[92vh] items-center justify-center overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/media/video/round-pile.mp4"
        poster="/media/video/round-pile.jpg"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-[#0b0b0d]" />
      <div className="relative z-10 mx-auto max-w-3xl px-5 pt-16 text-center">
        <p className="mb-5 text-xs tracking-[0.5em] text-amber-200/80">{BRAND.en}</p>
        <h1 className="font-display text-5xl leading-tight text-white sm:text-6xl">
          {pick('实验室培育钻石', 'Lab-Grown Diamonds')}
          <span className="mt-3 block bg-gradient-to-r from-amber-100 via-amber-200 to-amber-100 bg-clip-text text-transparent [text-wrap:balance]">
            {pick('十分之一的价钱，同样的璀璨', 'A tenth of the price, the same brilliance')}
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
          {pick(
            '与天然钻石完全相同的物理、化学与光学性质，D–E 色、VVS 净度、EX 切工现货供应，IGI / NGTC 权威证书，工厂直供，支持零售与批发。',
            'Physically, chemically and optically identical to mined diamonds. In-stock D–E color, VVS clarity, EX cut stones with IGI / NGTC certification — factory direct, retail & wholesale.'
          )}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#pricing"
            className="w-full rounded-full bg-amber-200 px-8 py-3 text-sm font-medium text-black transition hover:bg-amber-100 sm:w-auto"
          >
            {pick('查看现货价格', 'View In-Stock Prices')}
          </a>
          <a
            href="#contact"
            className="w-full rounded-full border border-white/30 px-8 py-3 text-sm text-white transition hover:border-amber-200 hover:text-amber-200 sm:w-auto"
          >
            {pick('咨询 / 定制', 'Inquire / Custom')}
          </a>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-white/40">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}
