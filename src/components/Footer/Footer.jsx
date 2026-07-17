import { useLanguage } from "../context/LanguageContext";

// Вынесено за пределы компонента для предотвращения лишних пересозданий объекта при рендере
const SOCIAL_LINKS = [
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
      </>
    ),
  },
  {
    name: "Telegram",
    href: "https://t.me",
    icon: (
      <path
        d="M21 4.5 3 11.3l5.4 1.9L11 19l2.6-4.1 4.8 3.5L21 4.5Z M8.4 13.2l9.5-6.8-8 7.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: (
      <path
        d="M14 8.5h2V5.6h-2c-2 0-3.4 1.4-3.4 3.4v1.7H9v2.9h1.6V19h2.9v-5.4h2l.5-2.9h-2.5V9c0-.4.3-.5.5-.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function Footer() {
  const { t } = useLanguage();
  const f = t?.footer;
  const year = new Date().getFullYear();

  // Безопасное форматирование телефона: оставляет только цифры и знак "+"
  const formattedPhone = f?.phone ? f.phone.replace(/[^\d+]/g, "") : "";

  return (
    <footer className="bg-[#1F3D2E] text-[#F4F1E8]">
      <div className="mx-auto max-w-md px-6 pt-12 pb-8">
        
        {/* Название */}
        <h2 className="text-center font-serif text-[24px] text-[#F4F1E8] tracking-tight">
          {t?.restaurantName}
        </h2>

        {/* Микро-разделитель в едином стиле с Hero */}
        <div className="flex items-center justify-center gap-1.5 mt-3">
          <div className="h-px w-6 bg-[#C9A227]/40" />
          <span className="text-[#C9A227] text-[8px]">◆</span>
          <div className="h-px w-6 bg-[#C9A227]/40" />
        </div>

        {/* Адрес и контакты (Использование семантического тега address) */}
        <address className="mt-8 space-y-5 not-italic">
          
          {/* Адрес */}
          <div className="flex items-start gap-3.5 group">
            <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-[#C9A227]">
              <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" aria-hidden="true" focusable="false">
                <path
                  d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                />
                <circle cx="12" cy="9.5" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            </div>
            <div>
              <p className="text-[13px] uppercase tracking-[0.15em] text-[#d8ded9] font-semibold">
                Ёва 
              </p>
              <p className="mt-0.5 text-[14px] leading-relaxed text-[#F4F1E8]/90">
                
              </p>
            </div>
          </div>

          {/* Телефон */}
          <div className="flex items-start gap-3.5 group">
            <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-[#C9A227]">
              <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" aria-hidden="true" focusable="false">
                <path
                  d="M6.5 3.5c-1.7 0-3 1.3-3 3 0 8.3 6.7 15 15 15 1.7 0 3-1.3 3-3v-2.2l-4.4-1.5-1.4 1.9a12 12 0 0 1-6.4-6.4l1.9-1.4L9.7 4.5 6.5 3.5Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <p className="text-[15px] uppercase tracking-[0.15em] text-[#d8ded9] font-semibold">
                92 999999999
              </p>
              {f?.phone ? (
                <a
                  href={`tel:${formattedPhone}`}
                  className="mt-0.5 inline-block text-[14px] font-medium text-[#F4F1E8]/90 transition-colors duration-200 hover:text-[#C9A227]"
                >
                  {f.phone}
                </a>
              ) : null}
            </div>
          </div>

          {/* Часы работы */}
          <div className="flex items-start gap-3.5">
            <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-[#C9A227]">
              <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" aria-hidden="true" focusable="false">
                <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
                <path d="M12 7.5V12l3 2" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-[#9FC2A8] font-semibold">
                {f?.hoursLabel}
              </p>
              <p className="mt-0.5 text-[14px] text-[#F4F1E8]/90">
                {t?.hours}
              </p>
            </div>
          </div>

        </address>

        {/* Соцсети */}
        <div className="mt-9 text-center">
          <p className="text-[10px] uppercase tracking-[0.15em] text-[#9FC2A8] font-semibold">
            {f?.socialLabel}
          </p>
          <div className="mt-4 flex justify-center gap-4">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C9A227]/30 text-[#C9A227] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C9A227] hover:bg-[#C9A227]/10 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#C9A227]/40"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" focusable="false">
                  {s.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Копирайт */}
        <div className="mt-10 border-t border-[#F4F1E8]/10 pt-6 text-center">
          <p className="text-[11px] tracking-wide text-[#F4F1E8]/40">
            © {year} {t?.restaurantName} · {f?.copyright}
          </p>
        </div>

      </div>
    </footer>
  );
}