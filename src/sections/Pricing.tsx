import { useState } from 'react';
import { SHAPES, PRICE_NOTE } from '@/data/site';
import { useLang, usePick } from '@/i18n';

export default function Pricing() {
  const [active, setActive] = useState('round');
  const { lang } = useLang();
  const pick = usePick();
  const shape = SHAPES.find((s) => s.id === active)!;

  return (
    <section id="pricing" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
      <div className="mb-12 text-center">
        <p className="mb-3 text-xs tracking-[0.4em] text-amber-200/70">PRICE LIST</p>
        <h2 className="font-display text-3xl text-white sm:text-4xl">{pick('现货裸石价格', 'In-Stock Loose Stones')}</h2>
        <p className="mt-4 text-sm text-white/50">
          {pick('五种切工 · 现货秒发 · 量大从优', '5 cuts · ready to ship · volume discounts')}
        </p>
      </div>

      {/* 切工选择 */}
      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {SHAPES.map((s) => (
          <button
            key={s.id}
            onClick={() => setActive(s.id)}
            className={`rounded-full border px-5 py-2 text-sm transition ${
              active === s.id
                ? 'border-amber-200 bg-amber-200 text-black'
                : 'border-white/15 text-white/70 hover:border-amber-200/50 hover:text-amber-200'
            }`}
          >
            {pick(s.cn, s.en)} <span className="ml-1 text-xs opacity-70">{pick(s.en, s.cn)}</span>
          </button>
        ))}
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
        <div className="border-b border-white/10 p-6 sm:p-8">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <h3 className="font-display text-2xl text-white">
              {pick(shape.cn, shape.en)} <span className="text-lg text-white/50">{pick(shape.en, shape.cn)}</span>
            </h3>
            <span className="rounded-full bg-amber-200/10 px-3 py-1 text-xs text-amber-200">{shape.spec[lang]}</span>
          </div>
          <p className="mt-2 text-sm text-white/50">{shape.desc[lang]}</p>
        </div>

        <div className="grid grid-cols-2 divide-white/10 sm:grid-cols-3 lg:grid-cols-4 [&>*]:border-white/10">
          {shape.rows.map((r, i) => {
            const ask = r.price === '暂无';
            return (
              <div
                key={i}
                className="relative border-b border-r p-5 transition hover:bg-white/[0.04] [&:nth-child(2n)]:border-r-0 sm:[&:nth-child(2n)]:border-r sm:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(3n)]:border-r lg:[&:nth-child(4n)]:border-r-0"
              >
                {r.badge && (
                  <span className="absolute right-3 top-3 rounded-full bg-amber-200 px-2 py-0.5 text-[10px] font-medium text-black">
                    {r.badge[lang]}
                  </span>
                )}
                <p className="font-display text-xl text-white">
                  {r.carat}
                  {r.spec && <span className="ml-2 text-xs text-white/40">{r.spec[lang]}</span>}
                </p>
                <p className={`mt-2 text-sm ${ask ? 'text-white/40' : 'text-amber-200'}`}>
                  {ask ? pick('需询价', 'Ask') : r.price}
                </p>
              </div>
            );
          })}
        </div>

        {shape.note && (
          <p className="border-t border-white/10 bg-amber-200/5 px-6 py-3 text-xs text-amber-100/70 sm:px-8">
            ✦ {shape.note[lang]}
          </p>
        )}
      </div>

      <p className="mt-6 text-center text-xs leading-6 text-white/40">{PRICE_NOTE[lang]}</p>
    </section>
  );
}
