import { CONTACT } from '@/data/site';
import { useLang, usePick } from '@/i18n';

export default function Contact() {
  const { lang } = useLang();
  const pick = usePick();

  const CARDS = [
    {
      label: pick('微信', 'WeChat'),
      value: CONTACT.wechat,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
          <path d="M8.7 4C4.9 4 2 6.6 2 9.8c0 1.8 1 3.4 2.5 4.5l-.6 2 2.2-1.1c.6.2 1.2.3 1.9.3.2 0 .4 0 .6 0-.2-.6-.3-1.2-.3-1.8 0-3.2 3-5.7 6.6-5.7h.5C14.8 5.7 12 4 8.7 4zM6.5 8.5a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6zm4.5 0a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6zM22 13.8c0-2.7-2.6-4.9-5.7-4.9s-5.7 2.2-5.7 4.9 2.6 4.9 5.7 4.9c.6 0 1.2-.1 1.7-.2l1.9 1-.5-1.8c1-.9 1.6-2.2 1.6-3.9zm-7.7-.9a.7.7 0 1 1 0-1.4.7.7 0 0 1 0 1.4zm4 0a.7.7 0 1 1 0-1.4.7.7 0 0 1 0 1.4z" />
        </svg>
      ),
    },
    {
      label: pick('WhatsApp / 电话', 'WhatsApp / Phone'),
      value: CONTACT.whatsapp,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.5 2.8.7a2 2 0 0 1 1.7 2z" />
        </svg>
      ),
    },
    {
      label: pick('邮箱', 'Email'),
      value: CONTACT.email,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-10 6L2 7" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
      <div className="mb-12 text-center">
        <p className="mb-3 text-xs tracking-[0.4em] text-amber-200/70">CONTACT</p>
        <h2 className="font-display text-3xl text-white sm:text-4xl">{pick('联系我们', 'Contact Us')}</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/50">{CONTACT.note[lang]}</p>
      </div>
      <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-3">
        {CARDS.map((c) => (
          <div
            key={c.label}
            className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center transition hover:border-amber-200/40"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-amber-200/30 text-amber-200">
              {c.icon}
            </div>
            <p className="text-xs text-white/50">{c.label}</p>
            <p className="mt-2 break-all text-sm text-white">{c.value}</p>
          </div>
        ))}
      </div>
      <p className="mt-10 text-center text-xs text-white/30">
        {pick('朋友圈 / 社群每日更新现货视频，欢迎同行交流合作。', 'New in-stock videos shared daily — trade inquiries and partnerships welcome.')}
      </p>
    </section>
  );
}
