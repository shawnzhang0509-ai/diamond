import { VIDEOS } from '@/data/site';
import { useLang, usePick } from '@/i18n';

function VideoCard({ v }: { v: (typeof VIDEOS)[number] }) {
  const { lang } = useLang();
  return (
    <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-black">
      <video
        className="aspect-[3/4] w-full object-cover"
        src={v.src}
        poster={v.poster}
        controls
        playsInline
        preload="metadata"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-10">
        <p className="text-sm text-white/90">{v.label[lang]}</p>
      </div>
    </div>
  );
}

export default function Videos() {
  const pick = usePick();
  return (
    <section id="videos" className="scroll-mt-20 border-y border-white/10 bg-white/[0.02] py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs tracking-[0.4em] text-amber-200/70">VIDEOS</p>
          <h2 className="font-display text-3xl text-white sm:text-4xl">{pick('现货实拍视频', 'Real-Stone Videos')}</h2>
          <p className="mt-4 text-sm text-white/50">
            {pick('全部自然光 / 灯光下实物拍摄，所见即所得', 'All shot in natural / studio light — what you see is what you get')}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {VIDEOS.map((v) => (
            <VideoCard key={v.src} v={v} />
          ))}
        </div>
      </div>
    </section>
  );
}
