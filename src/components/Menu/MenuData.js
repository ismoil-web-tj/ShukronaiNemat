export const menuData = {
  TJ: {
    currency: "смн",
    categories: [
      {
        id: "starters",
        name: "Хӯрокҳои пешакӣ",
        items: [
          {
            id: "samsa",
            name: "Самбӯсаи гӯшти гов",
            desc: "Хамираи варақа, гӯшти гов, пиёз, ҳанут",
            price: 18,
            tags: ["тунд"],
            image: "assets/vite.svg",
          },
          {
            id: "salad",
            name: "Сабзавоти буридашуда",
            desc: "Сабзавоти мавсимӣ, сабзӣ, равғани зайтун",
            price: 15,
            tags: ["вегетарианӣ"],
            image: "/images/dishes/salad.jpg",
          },
          {
            id: "shashlik",
            name: "шашлик",
            desc: "гушти гов",
            price: 15,
            tags: ["вегетарианӣ"],
            image: "/images/dishes/salad.jpg",
          }
        ],
      },
      {
        id: "soups",
        name: "Хӯрокҳои якум",
        items: [
          {
            id: "shurpa",
            name: "Шӯрбо",
            desc: "Гӯшти гӯсфанд, картошка, сабзӣ, помидор",
            price: 25,
            tags: [],
            image: "/images/dishes/shurpa.jpg",
          },
          {
            id: "lagman",
            name: "Лагмани шӯрбо",
            desc: "Ресмонҳои дасти, гӯшт, сабзавот",
            price: 24,
            tags: ["тунд"],
            image: "/images/dishes/lagman.jpg",
          },
        ],
      },
      {
        id: "mains",
        name: "Хӯрокҳои дуюм",
        items: [
          {
            id: "osh",
            name: "Оши тоҷикӣ",
            desc: "Гӯшти гӯсфанд, биринҷ, сабзӣ, нахуд, мавиз",
            price: 32,
            tags: [],
            image: "/images/dishes/osh.jpg",
          },
          {
            id: "kabob",
            name: "Кабоби мурғ",
            desc: "Филеи мурғ дар ангишт, пиёз, нон",
            price: 28,
            tags: ["тунд"],
            image: "/images/dishes/kabob.jpg",
          },
        ],
      },
      {
        id: "desserts",
        name: "Ширинӣ",
        items: [
          {
            id: "halva",
            name: "Ҳалвои хонагӣ",
            desc: "Орд, чормағз, асал",
            price: 12,
            tags: ["вегетарианӣ"],
            image: "/images/dishes/halva.jpg",
          },
          {
            id: "baklava",
            name: "Баклава",
            desc: "Хамираи варақа, чормағз, шарбат",
            price: 14,
            tags: ["вегетарианӣ"],
            image: "/images/dishes/baklava.jpg",
          },
        ],
      },
      {
        id: "drinks",
        name: "Нӯшокиҳо",
        items: [
          {
            id: "tea",
            name: "Чойи сабз",
            desc: "Чойник 0.5л",
            price: 8,
            tags: [],
            image: "/images/dishes/tea.jpg",
          },
          {
            id: "compote",
            name: "Ширшарбати хонагӣ",
            desc: "Меваҳои мавсимӣ",
            price: 10,
            tags: ["вегетарианӣ"],
            image: "/images/dishes/compote.jpg",
          },
        ],
      },
    ],
  },

  RU: {
    currency: "сом.",
    categories: [
      {
        id: "starters",
        name: "Закуски",
        items: [
          {
            id: "samsa",
            name: "Самса с говядиной",
            desc: "Слоёное тесто, рубленая говядина, лук, специи",
            price: 18,
            tags: ["острое"],
            image: "/images/dishes/samsa.jpg",
          },
          {
            id: "salad",
            name: "Овощная нарезка",
            desc: "Сезонные овощи, зелень, оливковое масло",
            price: 15,
            tags: ["вег"],
            image: "/images/dishes/salad.jpg",
          },
        ],
      },
      {
        id: "soups",
        name: "Первые блюда",
        items: [
          {
            id: "shurpa",
            name: "Шурпа",
            desc: "Баранина, картофель, морковь, томаты",
            price: 25,
            tags: [],
            image: "/images/dishes/shurpa.jpg",
          },
          {
            id: "lagman",
            name: "Лагман суповой",
            desc: "Тянутая лапша, мясо, овощи",
            price: 24,
            tags: ["острое"],
            image: "/images/dishes/lagman.jpg",
          },
        ],
      },
      {
        id: "mains",
        name: "Вторые блюда",
        items: [
          {
            id: "osh",
            name: "Плов узбекский",
            desc: "Баранина, рис, морковь, нут, изюм",
            price: 32,
            tags: [],
            image: "/images/dishes/osh.jpg",
          },
          {
            id: "kabob",
            name: "Кабоб из курицы",
            desc: "Куриное филе на углях, лук, лаваш",
            price: 28,
            tags: ["острое"],
            image: "/images/dishes/kabob.jpg",
          },
        ],
      },
      {
        id: "desserts",
        name: "Десерты",
        items: [
          {
            id: "halva",
            name: "Халва домашняя",
            desc: "Мука, орехи, мёд",
            price: 12,
            tags: ["вег"],
            image: "/images/dishes/halva.jpg",
          },
          {
            id: "baklava",
            name: "Пахлава",
            desc: "Слоёное тесто, орехи, сахарный сироп",
            price: 14,
            tags: ["вег"],
            image: "/images/dishes/baklava.jpg",
          },
        ],
      },
      {
        id: "drinks",
        name: "Напитки",
        items: [
          {
            id: "tea",
            name: "Зелёный чай",
            desc: "Чайник 0.5л",
            price: 8,
            tags: [],
            image: "/images/dishes/tea.jpg",
          },
          {
            id: "compote",
            name: "Компот домашний",
            desc: "Сезонные фрукты",
            price: 10,
            tags: ["вег"],
            image: "/images/dishes/compote.jpg",
          },
        ],
      },
    ],
  },

  EN: {
    currency: "TJS",
    categories: [
      {
        id: "starters",
        name: "Starters",
        items: [
          {
            id: "samsa",
            name: "Beef samsa",
            desc: "Flaky pastry, minced beef, onion, spices",
            price: 18,
            tags: ["spicy"],
            image: "/images/dishes/samsa.jpg",
          },
          {
            id: "salad",
            name: "Vegetable platter",
            desc: "Seasonal vegetables, herbs, olive oil",
            price: 15,
            tags: ["veg"],
            image: "/images/dishes/salad.jpg",
          },
        ],
      },
      {
        id: "soups",
        name: "First course",
        items: [
          {
            id: "shurpa",
            name: "Shurpa",
            desc: "Lamb, potato, carrot, tomato",
            price: 25,
            tags: [],
            image: "/images/dishes/shurpa.jpg",
          },
          {
            id: "lagman",
            name: "Lagman soup",
            desc: "Hand-pulled noodles, meat, vegetables",
            price: 24,
            tags: ["spicy"],
            image: "/images/dishes/lagman.jpg",
          },
        ],
      },
      {
        id: "mains",
        name: "Main course",
        items: [
          {
            id: "osh",
            name: "Tajik plov",
            desc: "Lamb, rice, carrot, chickpeas, raisins",
            price: 32,
            tags: [],
            image: "/images/dishes/osh.jpg",
          },
          {
            id: "kabob",
            name: "Chicken kabob",
            desc: "Grilled chicken fillet, onion, flatbread",
            price: 28,
            tags: ["spicy"],
            image: "/images/dishes/kabob.jpg",
          },
        ],
      },
      {
        id: "desserts",
        name: "Desserts",
        items: [
          {
            id: "halva",
            name: "Homemade halva",
            desc: "Flour, walnuts, honey",
            price: 12,
            tags: ["veg"],
            image: "/images/dishes/halva.jpg",
          },
          {
            id: "baklava",
            name: "Baklava",
            desc: "Flaky pastry, walnuts, syrup",
            price: 14,
            tags: ["veg"],
            image: "/images/dishes/baklava.jpg",
          },
        ],
      },
      {
        id: "drinks",
        name: "Drinks",
        items: [
          {
            id: "tea",
            name: "Green tea",
            desc: "0.5L pot",
            price: 8,
            tags: [],
            image: "/images/dishes/tea.jpg",
          },
          {
            id: "compote",
            name: "Homemade compote",
            desc: "Seasonal fruit",
            price: 10,
            tags: ["veg"],
            image: "/images/dishes/compote.jpg",
          },
        ],
      },
    ],
  },
};