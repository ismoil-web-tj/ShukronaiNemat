import { createContext, useContext, useState } from "react";

export const LANGUAGES = [
  { code: "TJ", label: "Тоҷикӣ" },
  { code: "RU", label: "Русский" },
  { code: "EN", label: "English" },
];

export const translations = {
  TJ: {
    restaurantName: "Шукронаи неъмат",
    badge: "Таомҳои миллӣ",
    title: "Шукронаи неъмат",
    subtitle: "Таъми ҳақиқии таоми хонагӣ",
    openMenu: "Кушодани меню",
    hours: "10:00–23:00",
    dishesCount: "100+",
    statLabels: {
      rating: "баҳо",
      hours: "соатҳои корӣ",
      dishes: "таом",
    },
  },
  RU: {
    restaurantName: "Шукронаи неъмат",
    badge: "Традиционная кухня",
    title: "Шукронаи неъмат",
    subtitle: "Вкус настоящей домашней кухни",
    openMenu: "Открыть меню",
    hours: "10:00–23:00",
    dishesCount: "100+",
    statLabels: {
      rating: "рейтинг",
      hours: "часы работы",
      dishes: "блюд",
    },
  },
  EN: {
    restaurantName: "Shukronai Nemat",
    badge: "Traditional cuisine",
    title: "Shukronai Nemat",
    subtitle: "The true taste of home cooking",
    openMenu: "Open menu",
    hours: "10:00 AM–11:00 PM",
    dishesCount: "100+",
    statLabels: {
      rating: "rating",
      hours: "opening hours",
      dishes: "dishes",
    },
    
  },
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children, defaultLang = "TJ" }) {
  const [lang, setLang] = useState(defaultLang);

  const value = {
    lang,
    setLang,
    t: translations[lang],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage должен использоваться внутри <LanguageProvider>");
  }
  return ctx;
}