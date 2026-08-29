import { createContext, useContext, useState, type ReactNode } from 'react';

export type Lang = 'zh' | 'en';

const LangCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: 'zh',
  setLang: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('zh');
  return <LangCtx.Provider value={{ lang, setLang }}>{children}</LangCtx.Provider>;
}

export const useLang = () => useContext(LangCtx);

/** 按当前语言二选一：pick('中文', 'English') */
export function usePick() {
  const { lang } = useLang();
  return (zh: string, en: string) => (lang === 'zh' ? zh : en);
}
