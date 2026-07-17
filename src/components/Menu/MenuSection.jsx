import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { menuData } from "./menuData";

const TAG_STYLES = {
  вег: "border-[#4F7A5C]/40 bg-[#EAF3E4] text-[#2f5a3d]",
  вегетарианӣ: "border-[#4F7A5C]/40 bg-[#EAF3E4] text-[#2f5a3d]",
  veg: "border-[#4F7A5C]/40 bg-[#EAF3E4] text-[#2f5a3d]",
  острое: "border-[#C9A227]/40 bg-[#FBF1DC] text-[#8a6410]",
  тунд: "border-[#C9A227]/40 bg-[#FBF1DC] text-[#8a6410]",
  spicy: "border-[#C9A227]/40 bg-[#FBF1DC] text-[#8a6410]",
};

export default function MenuSection() {
  const { lang } = useLanguage();
  const { categories, currency } = menuData[lang];
  const [activeId, setActiveId] = useState(categories[0].id);

  const active = categories.find((c) => c.id === activeId) ?? categories[0];

  return (
    <section id="menu" className="bg-[#FBF7F0] pb-14 pt-8">
      <div className="mx-auto max-w-md px-5">
        {/* Табы категорий */}
        <nav
          className="scrollbar-hide -mx-1 mb-7 flex gap-2 overflow-x-auto px-1 pb-1"
          role="tablist"
        >
          {categories.map((c) => (
            <button
              key={c.id}
              role="tab"
              aria-selected={activeId === c.id}
              onClick={() => setActiveId(c.id)}
              className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-[13px] transition-all duration-200 ${
                activeId === c.id
                  ? "border-[#1F3D2E] bg-[#1F3D2E] text-[#F4F1E8] shadow-[0_4px_12px_rgba(31,61,46,0.25)]"
                  : "border-[#D9CDB4] bg-transparent text-[#5c5142] hover:border-[#C9A227]/60"
              }`}
            >
              {c.name}
            </button>
          ))}
        </nav>

        {/* Список блюд */}
        <div className="space-y-7">
          {active.items.map((item) => (
            <div key={item.id}>
              <div className="flex items-baseline gap-2">
                <span className="whitespace-nowrap font-serif text-[18px] text-[#241d14]">
                  {item.name}
                </span>
                <span className="mb-[3px] flex-1 border-b border-dotted border-[#C9BDA0]" />
                <span className="whitespace-nowrap text-[15px] font-medium text-[#8a6b3f]">
                  {item.price} {currency}
                </span>
              </div>

              <p className="mt-1.5 text-[13.5px] leading-relaxed text-[#7a7060]">
                {item.desc}
              </p>

              {item.tags.length > 0 && (
                <div className="mt-2 flex gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-full border px-2.5 py-0.5 text-[11px] ${
                        TAG_STYLES[tag] ?? "border-gray-200 bg-gray-50 text-gray-600"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}   