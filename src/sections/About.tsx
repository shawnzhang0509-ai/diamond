import { useLang, usePick } from '@/i18n';

const POINTS = [
  {
    title: { zh: '真钻同源', en: 'Identical' },
    en: 'Identical',
    desc: {
      zh: '与天然钻石同为纯碳晶体，物理、化学、光学性质完全一致，肉眼与常规仪器无法区分。',
      en: 'Pure-carbon crystals, physically, chemically and optically identical to mined diamonds — indistinguishable to the eye and standard instruments.',
    },
  },
  {
    title: { zh: '权威证书', en: 'Certified' },
    en: 'Certified',
    desc: {
      zh: '每颗裸石均可配 IGI / NGTC 证书，4C 参数透明可查，支持复检。',
      en: 'Every stone available with IGI / NGTC certification; transparent 4C grading, re-inspection welcome.',
    },
  },
  {
    title: { zh: '十分之一的价格', en: 'Accessible' },
    en: 'Accessible',
    desc: {
      zh: '同样的预算，可以拥有更大的克拉数与更高的参数等级。',
      en: 'The same budget buys a bigger carat weight and higher grades.',
    },
  },
  {
    title: { zh: '可持续之选', en: 'Sustainable' },
    en: 'Sustainable',
    desc: {
      zh: '实验室培育，无矿采、无冲突，对环境更友好的新一代钻石。',
      en: 'Lab-grown, mining-free and conflict-free — a more sustainable new generation of diamonds.',
    },
  },
];

export default function About() {
  const { lang } = useLang();
  const pick = usePick();
  return (
    <section id="about" className="scroll-mt-20 border-y border-white/10 bg-white/[0.02] py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-xs tracking-[0.4em] text-amber-200/70">WHY LAB-GROWN</p>
            <h2 className="font-display text-3xl leading-snug text-white sm:text-4xl">
              {pick('什么是培育钻石？', 'What Are Lab-Grown Diamonds?')}
            </h2>
            <p className="mt-6 text-sm leading-7 text-white/60">
              {pick(
                '培育钻石（Lab-Grown Diamond）在实验室中以 HPHT 高温高压法或 CVD 化学气相沉积法生长，其碳原子晶体结构与天然钻石完全相同——它是真钻石，而非锆石、莫桑石等仿制品。国际权威宝石实验室 IGI、GIA 均为其出具正式分级证书。',
                'Lab-grown diamonds are created by HPHT (High Pressure High Temperature) or CVD (Chemical Vapor Deposition). Their carbon crystal structure is identical to mined diamonds — they are real diamonds, not simulants like cubic zirconia or moissanite. Leading labs such as IGI and GIA issue full grading reports for them.'
              )}
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {POINTS.map((p) => (
                <div key={p.en} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-[10px] tracking-[0.3em] text-amber-200/60">{p.en.toUpperCase()}</p>
                  <h3 className="mt-1 font-display text-lg text-white">{p.title[lang]}</h3>
                  <p className="mt-2 text-xs leading-6 text-white/50">{p.desc[lang]}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="/media/img/round-cert.jpg"
              alt={pick('IGI 证书与裸石', 'IGI certificate with loose stone')}
              className="w-full rounded-2xl border border-white/10 object-cover"
              loading="lazy"
            />
            <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-amber-200/30 bg-[#0b0b0d] px-5 py-4 sm:block">
              <p className="font-display text-2xl text-amber-200">IGI · NGTC</p>
              <p className="mt-1 text-xs text-white/50">{pick('国际 / 国检双证书可选', 'International & national certification')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
