import { useEffect, useState, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

// 1. Локализованный словарь меню для TJ, RU, EN (структура полностью сохранена)
const MENU_TRANSLATIONS = {
  TJ: {
    backToCategories: "← Бозгашт ба категорияҳо",
    emptyCategory: "Ин бахш ҳоло холӣ аст...",
    compositionLabel: "Таркиби таом:",
    closeLabel: "Пӯшидан",
    ingredientsArrow: "Таркиб",
    menuHeaderTitle: "Менюи мо",
    categories: [
      { id: "soups", name: "Таоми якум", icon: "🍲" },
      { id: "mains", name: "Таоми дуюм", icon: "🍛" },
      { id: "shashlik", name: "Шашлик", icon: "🍢" },
      { id: "desserts", name: "Шириниҳо", icon: "🍰" },
      { id: "drinks", name: "Нӯшокиҳо", icon: "🍹" },
    ],
    dishes: [
      {
        id: 1,
        category: "soups",
        name: "Шӯрбои гӯсфандӣ",
        price: "450 ₽",
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=600&auto=format&fit=crop",
        description: "Шӯрбои серғизои шарқӣ бо сабзавот ва гӯшти ҳалими барра.",
        composition: "Гӯшти гӯсфанд бо устухон, картошка, сабзӣ, қаламфури булғорӣ, пиёз, ҳавои хушбӯй, кашнич ва шибит."
      },
      {
        id: 2,
        category: "soups",
        name: "Лағмони хонагӣ",
        price: "420 ₽",
        image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?q=80&w=600&auto=format&fit=crop",
        description: "Лапшаи дастӣ бо қайлаи ғафси гӯшт ва сабзавоти майда резашуда.",
        composition: "Лапшаи дастӣ, гӯшти гов, турб, қаламфури булғорӣ, лӯбиё, карафс, сирпиёз, зираворӣ."
      },
      {
        id: 3,
        category: "mains",
        name: "Оши Чойхонагӣ",
        price: "490 ₽",
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=600&auto=format&fit=crop",
        description: "Оши ҳақиқии ҷашнӣ аз биринҷи лазер бо гӯшти сершира.",
        composition: "Биринҷи лазер, гӯшти гов, сабзии зард ва сурх, равғани дунба, сирпиёз, қаламфури тез, зира, сиёҳдона."
      },
      {
        id: 4,
        category: "shashlik",
        name: "Шашлики гӯсфандӣ",
        price: "550 ₽",
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=600&auto=format&fit=crop",
        description: "Шашлики классикӣ, ки дар болои ангишти саксавул пухта шудааст.",
        composition: "Гӯшти лаҳми барра, маринади пиёз, мурчи сиёҳ, гашнич, бо пиёзи маринованшуда пешкаш мешавад."
      },
      {
        id: 5,
        category: "desserts",
        name: "Пахлавои асалӣ",
        price: "280 ₽",
        image: "https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=600&auto=format&fit=crop",
        description: "Ширинии бисёрқабата бо мағзи чормағз.",
        composition: "Хамири варақӣ, асали табиӣ, мағзи чормағз, маска, шарбати шакар."
      },
      {
        id: 6,
        category: "drinks",
        name: "Шарбати меваҳои хушк (Компот)",
        price: "150 ₽",
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=600&auto=format&fit=crop",
        description: "Шарбати хонагии тароватбахш, ки аз рӯи ретсепти анъанавӣ пухта шудааст.",
        composition: "Афлоту, олучаи хушк, мавиз, себи хушк, об, шакар."
      }
    ]
  },
  RU: {
    backToCategories: "← Назад к категориям",
    emptyCategory: "Раздел наполняется новыми блюдами...",
    compositionLabel: "Состав блюда:",
    closeLabel: "Закрыть",
    ingredientsArrow: "Состав",
    menuHeaderTitle: "Наше Меню",
    categories: [
      { id: "soups", name: "Первое", icon: "🍲" },
      { id: "mains", name: "Второе", icon: "🍛" },
      { id: "shashlik", name: "Шашлык", icon: "🍢" },
      { id: "desserts", name: "Десерты", icon: "🍰" },
      { id: "drinks", name: "Напитки", icon: "🍹" },
    ],
    dishes: [
      {
        id: 1,
        category: "soups",
        name: "Шурпа из баранины",
        price: "450 ₽",
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=600&auto=format&fit=crop",
        description: "Наваристый восточный суп с овощами и нежным мясом молодого барашка.",
        composition: "Баранина на кости, картофель, морковь, болгарский перец, репчатый лук, специи, свежая кинза и укроп."
      },
      {
        id: 2,
        category: "soups",
        name: "Лагман домашний",
        price: "420 ₽",
        image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?q=80&w=600&auto=format&fit=crop",
        description: "Тянутая вручную лапша с густой подливой из мяса и мелко нарезанных овощей.",
        composition: "Ручная лапша, говядина, редька, болгарский перец, фасоль жандо, сельдерей, чеснок, специи."
      },
      {
        id: 3,
        category: "mains",
        name: "Плов Чайханский",
        price: "490 ₽",
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=600&auto=format&fit=crop",
        description: "Настоящий праздничный плов из риса сорта лазер с сочным мясом.",
        composition: "Рис лазер, говядина, желтая и красная морковь, курдючный жир, чеснок, острый перец, зира, барбарис."
      },
      {
        id: 4,
        category: "shashlik",
        name: "Шашлык из мякоти барашка",
        price: "550 ₽",
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=600&auto=format&fit=crop",
        description: "Классический шашлык, приготовленный на углях из саксаула.",
        composition: "Мякоть молодого барашка, луковый маринад, черный перец, кориандр, подается с маринованным луком."
      },
      {
        id: 5,
        category: "desserts",
        name: "Пахлава медовая",
        price: "280 ₽",
        image: "https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=600&auto=format&fit=crop",
        description: "Многослойное десертное лакомство с начинкой из грецких орехов.",
        composition: "Слоеное тесто, натуральный мед, грецкий орех, сливочное масло, сахарный сироп."
      },
      {
        id: 6,
        category: "drinks",
        name: "Компот из сухофруктов",
        price: "150 ₽",
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=600&auto=format&fit=crop",
        description: "Освежающий домашний компот, сваренный по традиционному рецепту.",
        composition: "Курага, чернослив, изюм, сушеные яблоки, урюк, чистая вода, сахар."
      }
    ]
  },
  EN: {
    backToCategories: "← Back to categories",
    emptyCategory: "This section is being updated with new dishes...",
    compositionLabel: "Ingredients:",
    closeLabel: "Close",
    ingredientsArrow: "Ingredients",
    menuHeaderTitle: "Our Menu",
    categories: [
      { id: "soups", name: "First Course", icon: "🍲" },
      { id: "mains", name: "Second Course", icon: "🍛" },
      { id: "shashlik", name: "Shashlik", icon: "🍢" },
      { id: "desserts", name: "Desserts", icon: "🍰" },
      { id: "drinks", name: "Drinks", icon: "🍹" },
    ],
    dishes: [
      {
        id: 1,
        category: "soups",
        name: "Mutton Shurpa",
        price: "450 ₽",
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=600&auto=format&fit=crop",
        description: "Rich oriental soup with vegetables and tender mutton meat.",
        composition: "Mutton on the bone, potatoes, carrots, bell peppers, onions, spices, fresh cilantro and dill."
      },
      {
        id: 2,
        category: "soups",
        name: "Homemade Lagman",
        price: "420 ₽",
        image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?q=80&w=600&auto=format&fit=crop",
        description: "Hand-pulled noodles with thick meat and finely chopped vegetable sauce.",
        composition: "Handmade noodles, beef, radish, bell pepper, green beans, celery, garlic, spices."
      },
      {
        id: 3,
        category: "mains",
        name: "Chaykhana Plov",
        price: "490 ₽",
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=600&auto=format&fit=crop",
        description: "An authentic festive pilaf made of laser rice with juicy meat.",
        composition: "Laser rice, beef, yellow and red carrots, tail fat, garlic, hot pepper, cumin, barberry."
      },
      {
        id: 4,
        category: "shashlik",
        name: "Mutton Shashlik",
        price: "550 ₽",
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=600&auto=format&fit=crop",
        description: "Classic shashlik grilled over saxaul coals.",
        composition: "Tender mutton meat, onion marinade, black pepper, coriander, served with pickled onions."
      },
      {
        id: 5,
        category: "desserts",
        name: "Honey Baklava",
        price: "280 ₽",
        image: "https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=600&auto=format&fit=crop",
        description: "Multi-layered pastry dessert filled with walnuts.",
        composition: "Puff pastry, natural honey, walnuts, butter, sugar syrup."
      },
      {
        id: 6,
        category: "drinks",
        name: "Dried Fruit Compote",
        price: "150 ₽",
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=600&auto=format&fit=crop",
        description: "Refreshing homemade compote brewed according to a traditional recipe.",
        composition: "Dried apricots, prunes, raisins, dried apples, pure water, sugar."
      }
    ]
  }
};

export default function Hero({
  backgroundImage = "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
  onOpenMenu,
}) {
  const { lang, t } = useLanguage();
  const [mounted, setMounted] = useState(false);
  
  const [showMenu, setShowMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeDish, setActiveDish] = useState(null);

  const menuRef = useRef(null);
  const menuData = MENU_TRANSLATIONS[lang] || MENU_TRANSLATIONS["TJ"];

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const fade = mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4";
  const fadeCls = (delay) => `transition-all duration-700 ease-out ${fade}`;
  const delayStyle = (ms) => ({ transitionDelay: `${ms}ms` });

  const handleOpenMenuClick = () => {
    setShowMenu(true);
    if (onOpenMenu) onOpenMenu();
    
    setTimeout(() => {
      menuRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
  };

  const stats = [
    {
      icon: (
        <path
          d="M12 2.5l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 16.9l-5.4 2.5 1-6.1L3.2 9l6.1-.9L12 2.5z"
          fill="currentColor"
        />
      ),
      value: "4.9",
      label: t?.statLabels?.rating || "Рейтинг",
    },
    {
      icon: (
        <>
          <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
          <path d="M12 7.5V12l3 2" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </>
      ),
      value: t?.hours || "10:00 - 23:00",
      label: t?.statLabels?.hours || "Часы",
    },
    {
      icon: (
        <>
          <ellipse cx="12" cy="17" rx="7.5" ry="2.2" fill="none" stroke="currentColor" strokeWidth="1.4" />
          <path d="M6 17V9.5a6 6 0 0 1 12 0V17" fill="none" stroke="currentColor" strokeWidth="1.4" />
        </>
      ),
      value: t?.dishesCount || "100+",
      label: t?.statLabels?.dishes || "Блюд",
    },
  ];

  const filteredDishes = menuData.dishes.filter(
    (dish) => dish.category === selectedCategory
  );

  return (
    <section className="mx-auto max-w-md pb-16">
      {/* Главный блок Hero */}
      <div
        className="relative h-[510px] overflow-hidden rounded-b-[40px] shadow-[0_24px_50px_rgba(15,26,20,0.35)]"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(31,61,46,0.1) 0%, rgba(31,61,46,0.4) 50%, rgba(15,26,20,0.96) 100%), url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex h-full flex-col justify-end px-6 pb-12">
          <div className={fadeCls()} style={delayStyle(80)}>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#C9A227]/40 bg-[#1F3D2E]/20 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-[#F4F1E8] backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C9A227] animate-pulse" />
              {t?.badge}
            </span>
          </div>

          <h1
            className={`mt-4 font-serif text-[40px] font-bold leading-[1.1] text-[#F4F1E8] tracking-tight ${fadeCls()}`}
            style={delayStyle(180)}
          >
            {t?.title}
          </h1>

          <div className={`mt-4 h-[2px] w-16 bg-[#C9A227] rounded-full ${fadeCls()}`} style={delayStyle(260)} />

          <p className={`mt-4 text-[15px] font-medium leading-relaxed text-[#F4F1E8]/80 ${fadeCls()}`} style={delayStyle(320)}>
            {t?.subtitle}
          </p>

          <button
            type="button"
            onClick={handleOpenMenuClick}
            className={`mt-8 w-full rounded-full border border-[#C9A227]/80 bg-[#F4F1E8] py-4 text-[15px] font-semibold tracking-wider uppercase text-[#1F3D2E] shadow-[0_12px_30px_rgba(15,26,20,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(15,26,20,0.5)] active:scale-[0.97] ${fadeCls()}`}
            style={delayStyle(400)}
          >
            {t?.openMenu}
          </button>
        </div>
      </div>

      {/* Информационные плашки */}
      <div
        className={`relative z-10 -mt-10 grid grid-cols-3 gap-3 px-5 ${fadeCls()}`}
        style={delayStyle(500)}
      >
        {stats.map((s) => (
          <div
            key={s.label}
            className="flex flex-col items-center gap-1.5 rounded-2xl border border-[#C9A227]/20 bg-[#F4F1E8] py-4 shadow-[0_10px_25px_rgba(15,26,20,0.12)] transition-transform duration-300 hover:scale-[1.03]"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1F3D2E]/5 text-[#C9A227]">
              <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" aria-hidden="true">
                {s.icon}
              </svg>
            </div>
            <span className="text-[14px] font-bold text-[#1F3D2E] tracking-tight">{s.value}</span>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-[#1F3D2E]/50 text-center px-1">
              {s.label}
            </span>
          </div>
        ))}
      </div>

      {/* Блок меню */}
      {showMenu && (
        <div ref={menuRef} className="mt-16 px-5 scroll-mt-6 animate-fade-in">
          {/* Премиальный декоративный заголовок */}
          <div className="text-center mb-8">
            <h2 className="font-serif text-[28px] text-[#1F3D2E] font-semibold tracking-tight">
              {menuData.menuHeaderTitle}
            </h2>
            <div className="flex items-center justify-center gap-2 mt-2">
              <div className="h-px w-8 bg-[#C9A227]/60" />
              <span className="text-[#C9A227] text-[10px]">◆</span>
              <div className="h-px w-8 bg-[#C9A227]/60" />
            </div>
          </div>

          {/* Сетка категорий */}
          {!selectedCategory ? (
            <div className="grid grid-cols-2 gap-4">
              {menuData.categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className="flex flex-col items-center justify-center p-6 rounded-3xl border border-[#C9A227]/15 bg-[#F4F1E8]/50 hover:bg-[#F4F1E8] transition-all duration-300 hover:border-[#C9A227]/40 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(31,61,46,0.06)] group"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1F3D2E]/5 text-3xl mb-3 group-hover:bg-[#C9A227]/10 transition-colors duration-300">
                    {cat.icon}
                  </span>
                  <span className="text-[14px] font-semibold text-[#1F3D2E]">
                    {cat.name}
                  </span>
                </button>
              ))}
            </div>
          ) : (
            /* Список блюд выбранной категории */
            <div className="animate-fade-in">
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#1F3D2E]/70 hover:text-[#1F3D2E] transition-colors"
                >
                  {menuData.backToCategories}
                </button>
                <span className="text-[12px] font-bold text-[#C9A227] uppercase tracking-widest bg-[#1F3D2E]/5 px-3 py-1.5 rounded-full">
                  {menuData.categories.find((c) => c.id === selectedCategory)?.name}
                </span>
              </div>

              {filteredDishes.length === 0 ? (
                <p className="text-center py-12 text-[14px] text-gray-500 font-medium">
                  {menuData.emptyCategory}
                </p>
              ) : (
                <div className="grid grid-cols-2 gap-4">
                  {filteredDishes.map((dish) => (
                    <div
                      key={dish.id}
                      onClick={() => {
                        const translatedDish = menuData.dishes.find(d => d.id === dish.id);
                        setActiveDish(translatedDish);
                      }}
                      className="group flex flex-col overflow-hidden rounded-3xl border border-[#C9A227]/20 bg-[#F4F1E8]/20 shadow-sm cursor-pointer hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="relative h-28 w-full overflow-hidden">
                        <img
                          src={dish.image}
                          alt={dish.name}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-3.5 bg-white">
                        <h3 className="text-[13px] font-bold leading-tight text-[#1F3D2E] line-clamp-2">
                          {dish.name}
                        </h3>
                        <p className="mt-1.5 text-[11px] leading-relaxed text-gray-500 line-clamp-2">
                          {dish.description}
                        </p>
                        <div className="mt-auto pt-3.5 flex items-center justify-between">
                          <span className="text-[14px] font-extrabold text-[#1F3D2E]">
                            {dish.price}
                          </span>
                          <span className="inline-flex items-center rounded-lg bg-[#1F3D2E]/5 px-2 py-1 text-[10px] font-bold text-[#C9A227] transition-colors group-hover:bg-[#C9A227]/10">
                            {menuData.ingredientsArrow}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Модальное окно */}
      {activeDish && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-sm overflow-hidden rounded-[32px] bg-[#F4F1E8] shadow-[0_24px_60px_rgba(0,0,0,0.3)] border border-[#C9A227]/20 max-h-[90vh] flex flex-col">
            
            {/* Изображение модалки */}
            <div className="relative h-52 w-full shrink-0">
              <img
                src={activeDish.image}
                alt={activeDish.name}
                className="h-full w-full object-cover"
              />
              <button
                onClick={() => setActiveDish(null)}
                className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-all hover:bg-black/60 hover:scale-105"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* Контент модалки с прокруткой для безопасности контента */}
            <div className="p-6 overflow-y-auto">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-serif text-[22px] font-bold text-[#1F3D2E] leading-snug">
                  {(menuData.dishes.find(d => d.id === activeDish.id) || activeDish).name}
                </h3>
                <span className="shrink-0 rounded-full bg-[#1F3D2E] px-4 py-1.5 text-[14px] font-bold text-[#F4F1E8] shadow-[0_4px_10px_rgba(31,61,46,0.2)]">
                  {activeDish.price}
                </span>
              </div>

              <div className="my-4 h-px bg-[#C9A227]/30" />

              <div className="space-y-1.5">
                <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#C9A227]">
                  {menuData.compositionLabel}
                </h4>
                <p className="text-[14px] leading-relaxed text-[#1F3D2E]/85 font-medium">
                  {(menuData.dishes.find(d => d.id === activeDish.id) || activeDish).composition}
                </p>
              </div>

              <button
                onClick={() => setActiveDish(null)}
                className="mt-6 w-full rounded-full bg-[#1F3D2E] py-3.5 text-[14px] font-semibold tracking-wider uppercase text-[#F4F1E8] shadow-[0_8px_20px_rgba(31,61,46,0.25)] transition-all duration-300 hover:bg-[#152a20] hover:-translate-y-0.5 active:scale-[0.98]"
              >
                {menuData.closeLabel}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}