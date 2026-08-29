import { useState } from 'react';
import { GALLERY, GALLERY_FILTERS } from '@/data/site';
import { useLang, usePick } from '@/i18n';

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const { lang } = useLang();
  const pick = usePick();
  const items = GALLERY.filter((g) => filter === 'all' || g.shape === filter);

  return (
    <section id="gallery" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
      <div className="mb-10 text-center">
        <p className="mb-3 text-xs tracking-[0.4em] text-amber-200/70">GALLERY</p>
        <h2 className="font-display text-3xl text-white sm:text-4xl">{pick('裸石图库', 'Loose Stone Gallery')}</h2>
      </div>

      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {GALLERY_FILTERS.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`rounded-full px-4 py-1.5 text-sm transition ${
              filter === f.id ? 'bg-white text-black' : 'text-white/60 hover:text-white'
            }`}
          >
            {lang === 'zh' ? f.cn : f.en}
          </button>
        ))}
      </div>

      <div className="columns-2 gap-4 sm:columns-3 lg:columns-4 [&>div]:mb-4">
        {items.map((g) => (
          <div key={g.src} className="group relative break-inside-avoid overflow-hidden rounded-xl border border-white/10">
            <img
              src={g.src}
              alt={g.label[lang]}
              loading="lazy"
              className="w-full transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 pt-8 opacity-0 transition group-hover:opacity-100">
              <p className="text-xs text-white/90">{g.label[lang]}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
