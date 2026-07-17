import { useState, useRef, useEffect } from "react";
import { LANGUAGES, useLanguage } from "../context/LanguageContext";

export default function RestaurantHeader() {
  const { lang, setLang, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="relative bg-[#1F3D2E]">
      <div className="mx-auto flex max-w-md items-center justify-between gap-3 px-5 pt-6 pb-5">
        {/* Логотип + название */}
        <div className="flex min-w-0 items-center gap-3">
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F4F1E8] shadow-[0_2px_10px_rgba(0,0,0,0.25)] ring-1 ring-[#C9A227]/40"
            aria-hidden="true"
          >
            <svg viewBox="0 0 40 40" className="h-7 w-7">
              <path
                d="M20 8c-1.6 3-2.6 5.6-2.6 8a4.6 4.6 0 0 0 9.2 0c0-2.4-1-5-2.6-8"
                fill="none"
                stroke="#1F3D2E"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
              <path
                d="M12 24c1.5-1.2 4-2 8-2s6.5.8 8 2v1.2c0 2.8-3.6 5-8 5s-8-2.2-8-5V24Z"
                fill="none"
                stroke="#1F3D2E"
                strokeWidth="1.4"
                strokeLinejoin="round"
              />
              <path
                d="M28 25c2 .2 3.4-.6 3.4-2s-1.6-2.2-3.4-1.6"
                fill="none"
                stroke="#1F3D2E"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <h1 className="truncate font-serif text-[19px] font-medium leading-tight tracking-wide text-[#F4F1E8]">
            {t.restaurantName}
          </h1>
        </div>

        {/* Переключатель языков */}
        <div className="relative shrink-0" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            aria-haspopup="listbox"
            aria-expanded={isOpen}
            aria-label="Выбрать язык"
            className="flex items-center gap-1.5 rounded-full border border-[#C9A227]/50 bg-white/5 px-3.5 py-1.5 text-[13px] tracking-wide text-[#F4F1E8] backdrop-blur-sm transition-all duration-200 hover:border-[#C9A227] hover:bg-white/10 active:scale-95"
          >
            <span className="font-medium text-[#C9A227]">{lang}</span>
            <svg
              viewBox="0 0 24 24"
              className={`h-3.5 w-3.5 text-[#C9A227] transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div
            role="listbox"
            className={`absolute right-0 z-20 mt-2 w-36 origin-top-right overflow-hidden rounded-2xl border border-[#C9A227]/30 bg-[#1F3D2E]/90 shadow-[0_12px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-200 ease-out ${
              isOpen
                ? "scale-100 opacity-100"
                : "pointer-events-none scale-95 opacity-0"
            }`}
          >
            {LANGUAGES.map((l) => (
              <button
                key={l.code}
                role="option"
                aria-selected={lang === l.code}
                onClick={() => {
                  setLang(l.code);
                  setIsOpen(false);
                }}
                className={`flex w-full items-center justify-between px-4 py-2.5 text-[13px] transition-colors duration-150 ${
                  lang === l.code
                    ? "bg-[#C9A227]/15 text-[#C9A227]"
                    : "text-[#F4F1E8]/80 hover:bg-white/5 hover:text-[#F4F1E8]"
                }`}
              >
                <span>{l.label}</span>
                <span className="text-[11px] tracking-widest opacity-70">
                  {l.code}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Декоративная волна-переход */}
      <svg
        viewBox="0 0 400 28"
        preserveAspectRatio="none"
        className="block h-7 w-full"
        aria-hidden="true"
      >
        <path
          d="M0,0 L400,0 L400,14 C320,26 260,8 200,16 C140,24 80,6 0,18 Z"
          fill="#F4F1E8"
        />
      </svg>
    </header>
  );
}