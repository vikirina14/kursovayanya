// ================== CHARACTERS ==================

// список всех персонажей для левой панели
const characters = [
  { id: 'dean',      img: 'assets/images/dean-small.jpg',      alt: 'Дин Винчестер' },
  { id: 'sam',       img: 'assets/images/sam-small.jpg',       alt: 'Сэм Винчестер' },
  { id: 'castiel',   img: 'assets/images/castiel-small.jpg',   alt: 'Кастиэль' },
  { id: 'john',      img: 'assets/images/john-small.jpg',      alt: 'Джон Винчестер' },
  { id: 'bobby',     img: 'assets/images/bobby-small.jpg',     alt: 'Бобби Сингер' },
  { id: 'crowley',   img: 'assets/images/crowley-small.jpg',   alt: 'Кроули' },
  { id: 'lucifer',   img: 'assets/images/lucifer-small.jpg',   alt: 'Люцифер' },
  { id: 'ruby',      img: 'assets/images/ruby-small.jpg',      alt: 'Руби' },
  { id: 'jo',        img: 'assets/images/jo-small.jpg',        alt: 'Джо Харвелл' },
  { id: 'rufus',     img: 'assets/images/rufus-small.jpg',     alt: 'Руфус' },
  { id: 'lilith',    img: 'assets/images/lilith-small.jpg',    alt: 'Лилит' },
  { id: 'meg',       img: 'assets/images/meg-small.jpg',       alt: 'Мэг' },
  { id: 'garr',      img: 'assets/images/garr-small.jpg',      alt: 'Гарт' },
  { id: 'balthazar', img: 'assets/images/balthazar-small.jpg', alt: 'Бальтазар' },
  { id: 'gabriel',   img: 'assets/images/gabriel-small.jpg',   alt: 'Архангел Гавриил' },
  { id: 'bela',      img: 'assets/images/bela-small.jpg',      alt: 'Белла' }
];

const VISIBLE_CHARACTERS = 4;
let startIndex = 0; // с какого персонажа показываем окно из 4

const listEl  = document.getElementById('characterList');
const prevBtn = document.getElementById('prev-character');
const nextBtn = document.getElementById('next-character');

// отрисовать 4 персонажа, начиная с startIndex
function renderCharacters() {
  if (!listEl) return;

  listEl.innerHTML = '';

  for (let i = 0; i < VISIBLE_CHARACTERS; i++) {
    const idx  = (startIndex + i) % characters.length;
    const char = characters[idx];

    const item = document.createElement('div');
    item.className = 'character-item';
    item.dataset.character = char.id;

    const img = document.createElement('img');
    img.src = char.img;
    img.alt = char.alt;

    item.appendChild(img);
    listEl.appendChild(item);
  }

  setActiveCharacter(characters[startIndex].id);
}

// подсветка выбранного персонажа и показ блока справа
function setActiveCharacter(id) {
  const items  = document.querySelectorAll('.character-item');
  const blocks = document.querySelectorAll('.character-detail');

  items.forEach(item => {
    item.classList.toggle('active', item.dataset.character === id);
  });

  blocks.forEach(block => {
    block.style.display = block.id === id ? 'block' : 'none';
  });
}

// клик по кружку
if (listEl) {
  listEl.addEventListener('click', (e) => {
    const item = e.target.closest('.character-item');
    if (!item) return;
    const id = item.dataset.character;
    setActiveCharacter(id);
  });
}

// стрелка вверх
if (prevBtn) {
  prevBtn.addEventListener('click', () => {
    startIndex = (startIndex - 1 + characters.length) % characters.length;
    renderCharacters();
  });
}

// стрелка вниз
if (nextBtn) {
  nextBtn.addEventListener('click', () => {
    startIndex = (startIndex + 1) % characters.length;
    renderCharacters();
  });
}

// первый запуск для персонажей
renderCharacters();


// ================== SEASONS ==================

// данные сезонов
const seasonsData = [
  {
    num: 1,
    title: "SEASON 1",
    subtitle: "«Начало пути»",
    text: "Первый сезон раскрывает трагическую историю семьи Винчестеров. После смерти матери Дин и Сэм отправляются в путешествие по США, чтобы найти отца и разгадать тайну жёлтоглазого демона.",
    keys: [
      "Первая охота братьев",
      "Поиски Джона Винчестера",
      "Знакомство с Импалой",
      "Столкновение с демоном"
    ],
    img: "img/seasons/season1.jfif"
  },
  {
    num: 2,
    title: "SEASON 2",
    subtitle: "«Месть и жертва»",
    text: "Сэм и Дин продолжают охоту, но их преследует новая угроза: Азазель собирает армию одарённых детей. Сэм оказывается в центре пророчества, а Дин — в отчаянии, когда его брат погибает.",
    keys: [
      "Воскрешение Сэма",
      "Раскрытие плана Азазеля",
      "Смерть Джона Винчестера",
      "Дин продаёт душу за брата"
    ],
    img: "img/seasons/season2.webp"
  },
  {
    num: 3,
    title: "SEASON 3",
    subtitle: "«Цена спасения»",
    text: "У Дина остался год до того, как его душа отправится в Ад. Братья ищут способ разорвать сделку, но Тьма уже близко. Тем временем Сэм чувствует странные силы внутри себя.",
    keys: [
      "Договор с демоном",
      "Появление Руби",
      "Борьба за душу Дина",
      "Побег из Ада"
    ],
    img: "img/seasons/season3.webp"
  },
  {
    num: 4,
    title: "SEASON 4",
    subtitle: "«Падение архангелов»",
    text: "Дин возвращается из Ада, но мир изменился. Бог и Люцифер втягивают братьев в Апокалипсис. Кастиэль впервые появляется, чтобы помочь, но ангелы не так добры, как кажутся.",
    keys: [
      "Появление Кастиэля",
      "Распечатывание 66 Адских печатей",
      "Сэм пьёт кровь демонов",
      "Освобождение Люцифера"
    ],
    img: "img/seasons/season4.jpg"
  },
    {
    num: 5,
    title: "SEASON 5",
    subtitle: "«Финал Апокалипсиса»",
    text: "Люцифер и Михаил сражаются за тела братьев. Сэм и Дин должны остановить войну небес и Ада, даже если это потребует самой великой жертвы.",
    keys: [
      "Люцифер в теле Сэма",
      "Михаил в теле Дина",
      "Жертва Сэма ради запечатывания Ада",
      "Финальная поездка на Импале"
    ],
    img: "img/seasons/season5.jfif"
  },
  {
    num: 6,
    title: "SEASON 6",
    subtitle: "«Возвращение из тьмы»",
    text: "Сэм вернулся… но не весь. Его душа всё ещё в Аду. Тем временем Дин пытается жить мирной жизнью, но новая угроза вынуждает их снова вступить в бой — против Смерти и её Всадников.",
    keys: [
      "Возвращение Сэма без души",
      "Охота на Всадников Апокалипсиса",
      "Появление Амары — Тьмы",
      "Восстановление души Сэма"
    ],
    img: "img/seasons/season6.jpg"
  },
  {
    num: 7,
    title: "SEASON 7",
    subtitle: "«Тень прошлого»",
    text: "Новые монстры, старые демоны. Сэм страдает от галлюцинаций после Ада, а Дин пытается его спасти. Появляется загадочная Левиафан — древняя сила, старше ангелов.",
    keys: [
      "Галлюцинации Сэма",
      "Появление Левиафан",
      "Смерть Бобби Сингера",
      "Борьба с технологическим злом"
    ],
    img: "img/seasons/season7.jfif"
  },
  {
    num: 8,
    title: "SEASON 8",
    subtitle: "«Испытание огнём»",
    text: "Бобби мёртв, но его дух остаётся. Братья узнают о «Трёх испытаниях» — древнем ритуале, способном навсегда уничтожить Ад. Но цена — слишком высока.",
    keys: [
      "Три испытания для закрытия Ада",
      "Смерть и воскрешение Дина",
      "Появление нового охотника — Гарта",
      "Первые намёки на Метатрона"
    ],
    img: "img/seasons/season8.webp"
  },
  {
    num: 9,
    title: "SEASON 9",
    subtitle: "«Бунт против Небес»",
    text: "Метатрон, бывший писатель, становится «Богом» и изгоняет всех ангелов с Небес. Кастиэль теряет силы, а Дин заражается демонической кровью.",
    keys: [
      "Падение ангелов",
      "Демонический Дин",
      "Смерть Кевина Трана",
      "Потеря Кроули"
    ],
    img: "img/seasons/season9.jpg"
  },
  {
    num: 10,
    title: "SEASON 10",
    subtitle: "«Кровь и семья»",
    text: "Демонический Дин теряет контроль. Сэм ищет способ вернуть брата, но появляется новая угроза — Амара, сестра Бога, которая хочет уничтожить всё сущее.",
    keys: [
      "Борьба с демонической сущностью Дина",
      "Возвращение Кастиэля",
      "Появление Амары — Тьмы",
      "Жертва Роуэн"
    ],
    img: "img/seasons/season10.jpg"
  },
  {
    num: 11,
    title: "SEASON 11",
    subtitle: "«Сын Тьмы»",
    text: "Рождается Джек — сын Люцифера и гуманной души. Но сам Люцифер вновь обретает силу. А братья сталкиваются с новой организацией охотников — «Меняющимися».",
    keys: [
      "Рождение Джека",
      "Возвращение Люцифера",
      "Появление «Меняющихся»",
      "Конфликт с новым поколением охотников"
    ],
    img: "img/seasons/season11.jpg"
  },
  {
    num: 12,
    title: "SEASON 12",
    subtitle: "«Война миров»",
    text: "Люцифер захватывает тело президента. Джек скрывается, а братья пытаются остановить апокалипсис на Земле. Бог наблюдает, но молчит.",
    keys: [
      "Люцифер — президент США",
      "Появление Мэри Винчестер",
      "Поиск Джека",
      "Разделение братьев"
    ],
    img: "img/seasons/season12.jfif"
  },
  {
    num: 13,
    title: "SEASON 13",
    subtitle: "«Потерянные души»",
    text: "Мэри, Дин и Сэм наконец вместе — но ненадолго. Люцифер похищает Джека, а Амара возвращается. Ангелы пытаются восстановить порядок, но цена — жизнь Кастиэля.",
    keys: [
      "Похищение Джека",
      "Жертва Кастиэля",
      "Возвращение Амары",
      "Разрыв связи между мирами"
    ],
    img: "img/seasons/season13.jfif"
  },
    {
    num: 14,
    title: "SEASON 14",
    subtitle: "«Новое поколение»",
    text: "Джек — ключ ко всему. Но его сила выходит из-под контроля. Бог наконец вмешивается, а братья сталкиваются с выбором: спасти мир или семью.",
    keys: [
      "Возрождение Кастиэля",
      "Раскрытие природы Джека",
      "Конфликт с Богом",
      "Смерть Мэри"
    ],
    img: "img/seasons/season14.jpg"
  },
  {
    num: 15,
    title: "SEASON 15",
    subtitle: "«Финал легенды»",
    text: "Последняя битва. Бог и Амара ведут игру, а Дин и Сэм должны остановить её — даже если это будет их последнее задание. Но в мире охотников всегда остаётся надежда.",
    keys: [
      "Последняя миссия братьев",
      "Смерть Дина",
      "Жизнь Сэма с семьёй",
      "Импала в музее",
      "Финальный тост в баре"
    ],
    img: "img/seasons/season15.jpg"
  }
];

// сколько сезонов показываем одновременно слева
const VISIBLE_SEASONS = 3;

const seasonListEl   = document.getElementById('seasonList');
const seasonPrevBtn  = document.getElementById('prev-season');
const seasonNextBtn  = document.getElementById('next-season');
const seasonTitleEl  = document.getElementById('season-title');
const seasonSubEl    = document.getElementById('season-subtitle');
const seasonTextEl   = document.getElementById('season-text');
const seasonKeysList = document.getElementById('season-keys-list');

let currentSeasonIndex = 0; // какой сезон активен (по данным)
let seasonStartIndex   = 0; // с какого сезона начинается окно из 3-х

// рисуем 3 превью, начиная с seasonStartIndex
function renderSeasonList() {
  if (!seasonListEl) return;

  seasonListEl.innerHTML = '';

  for (let i = 0; i < VISIBLE_SEASONS; i++) {
    const idx    = (seasonStartIndex + i) % seasonsData.length;
    const season = seasonsData[idx];

    const item = document.createElement('div');
    item.className = 'season-item';
    item.dataset.index = idx;

    const img = document.createElement('img');
    img.src = season.img;
    img.alt = season.title;

    const label = document.createElement('span');
    label.textContent = season.title;

    item.appendChild(img);
    item.appendChild(label);
    seasonListEl.appendChild(item);
  }

  // если активный сезон вышел из окна, двигаем активный к первому в окне
  const windowIndexes = [];
  for (let i = 0; i < VISIBLE_SEASONS; i++) {
    windowIndexes.push((seasonStartIndex + i) % seasonsData.length);
  }
  if (!windowIndexes.includes(currentSeasonIndex)) {
    currentSeasonIndex = windowIndexes[0];
  }

  highlightActiveSeason();
  renderSeasonContent(currentSeasonIndex);
}

// подсветка активного превью
function highlightActiveSeason() {
  const items = document.querySelectorAll('.season-item');
  items.forEach(item => {
    const idx = Number(item.dataset.index);
    item.classList.toggle('active', idx === currentSeasonIndex);
  });
}

// заполнение правого описания
function renderSeasonContent(index) {
  const s = seasonsData[index];
  if (!seasonTitleEl) return;

  seasonTitleEl.textContent = s.title;
  seasonSubEl.textContent   = s.subtitle;
  seasonTextEl.textContent  = s.text;

  seasonKeysList.innerHTML = '';
  s.keys.forEach(k => {
    const li = document.createElement('li');
    li.textContent = k;
    seasonKeysList.appendChild(li);
  });
}

// клик по превью
if (seasonListEl) {
  seasonListEl.addEventListener('click', (e) => {
    const item = e.target.closest('.season-item');
    if (!item) return;

    currentSeasonIndex = Number(item.dataset.index);
    highlightActiveSeason();
    renderSeasonContent(currentSeasonIndex);
  });
}

// стрелка вверх (прошлые сезоны)
if (seasonPrevBtn) {
  seasonPrevBtn.addEventListener('click', () => {
    seasonStartIndex =
      (seasonStartIndex - 1 + seasonsData.length) % seasonsData.length;
    renderSeasonList();
  });
}

// стрелка вниз (следующие сезоны)
if (seasonNextBtn) {
  seasonNextBtn.addEventListener('click', () => {
    seasonStartIndex = (seasonStartIndex + 1) % seasonsData.length;
    renderSeasonList();
  });
}

// первый запуск: показываем сезоны 1–3, активен 1
if (seasonListEl && seasonTitleEl) {
  currentSeasonIndex = 0;
  seasonStartIndex   = 0;
  renderSeasonList();
}


// ============ LOCATIONS ============

const locationOrder = [
  'winchester-house',
  'lucifer-prison',
  'bobby-house',
  'purgatory',
  'impala',
  'bobby-bunker',
  'hell-gates',
  'harvelles-diner'
];

let currentIndex = 0;

function updateGlowForBlock(block, isActive) {
  const mainImg = block.querySelector('.location-img');
  const nextImg = block.querySelector('.next-img');

  if (!mainImg || !nextImg) return;

  if (isActive) {
    mainImg.classList.add('active-glow');
    nextImg.classList.remove('active-glow');
  } else {
    mainImg.classList.remove('active-glow');
    nextImg.classList.remove('active-glow');
  }
}

function updateNextImage(block, index) {
  const nextImg = block.querySelector('.next-img');
  if (!nextImg) return;

  const nextIndex = (index + 1) % locationOrder.length;
  const nextId    = locationOrder[nextIndex];
  const nextBlock = document.getElementById(nextId);
  if (!nextBlock) return;

  const nextMainImg = nextBlock.querySelector('.location-img');
  if (!nextMainImg) return;

  nextImg.src = nextMainImg.src;
  nextImg.alt = nextMainImg.alt;
}

function showLocation(index) {
  currentIndex = (index + locationOrder.length) % locationOrder.length;

  locationOrder.forEach((id, i) => {
    const block = document.getElementById(id);
    if (!block) return;

    if (i === currentIndex) {
      block.classList.add('active');
    } else {
      block.classList.remove('active');
    }

    updateGlowForBlock(block, i === currentIndex);
    updateNextImage(block, i);
  });
}

function initLocations() {
  locationOrder.forEach((id, idx) => {
    const block = document.getElementById(id);
    if (!block) return;

    if (idx === currentIndex) {
      block.classList.add('active');
    } else {
      block.classList.remove('active');
    }

    updateGlowForBlock(block, idx === currentIndex);
    updateNextImage(block, idx);
  });
}

function nextLocation() {
  const next = (currentIndex + 1) % locationOrder.length;
  showLocation(next);
}

function prevLocation() {
  const prev = (currentIndex - 1 + locationOrder.length) % locationOrder.length;
  showLocation(prev);
}


document.addEventListener('DOMContentLoaded', () => {
  // QUOTES
  const quoteItems = Array.from(document.querySelectorAll('.quote-item'));
  const quotesBtn  = document.querySelector('.next-quotes-btn');

  if (quoteItems.length && quotesBtn) {
    let currentQuoteIndex = 0;
    const totalQuotes = quoteItems.length;

    function showCurrentQuotes() {
      quoteItems.forEach(item => {
        item.style.display = 'none';
        item.classList.remove('position-left', 'position-center', 'position-right');
      });

      const indices = [
        currentQuoteIndex,
        (currentQuoteIndex + 1) % totalQuotes,
        (currentQuoteIndex + 2) % totalQuotes
      ];

      quoteItems[indices[0]].style.display = 'block';
      quoteItems[indices[0]].classList.add('position-left');

      quoteItems[indices[1]].style.display = 'block';
      quoteItems[indices[1]].classList.add('position-center');

      quoteItems[indices[2]].style.display = 'block';
      quoteItems[indices[2]].classList.add('position-right');
    }

    showCurrentQuotes();

    quotesBtn.addEventListener('click', () => {
      currentQuoteIndex = (currentQuoteIndex + 3) % totalQuotes;
      showCurrentQuotes();
    });
  }

  // CREATURES
  const cards   = Array.from(document.querySelectorAll('.creature-card'));
  const nextBtn = document.getElementById('creatures-next-btn');

  if (cards.length && nextBtn) {
    const PAGE_SIZE  = 6;
    const totalPages = Math.ceil(cards.length / PAGE_SIZE);
    let currentPage  = 0;

    function showPage(page) {
      const start = page * PAGE_SIZE;
      const end   = start + PAGE_SIZE;
      cards.forEach((card, index) => {
        card.style.display = (index >= start && index < end) ? 'block' : 'none';
      });
    }

    showPage(currentPage);

    cards.forEach(card => {
      card.addEventListener('click', () => {
        card.classList.toggle('flipped');
      });
    });

    nextBtn.addEventListener('click', () => {
      currentPage = (currentPage + 1) % totalPages;
      showPage(currentPage);
    });
  }

  // START TOUR BUTTON
  const startBtn = document.getElementById('start-tour');
  if (startBtn) {
    startBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById('characters');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // LOCATIONS INIT
  initLocations();
  const allArrows = document.querySelectorAll('.location-detail .arrows');
  allArrows.forEach(wrapper => {
    const prev = wrapper.querySelector('.arrow:nth-child(1)');
    const next = wrapper.querySelector('.arrow:nth-child(2)');
    if (prev) prev.addEventListener('click', prevLocation);
    if (next) next.addEventListener('click', nextLocation);
  });
});

// КНОПКА "ВВЕРХ"
const scrollToTopBtn = document.getElementById('scroll-to-top');
if (scrollToTopBtn) {
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Показывать/скрывать кнопку при прокрутке
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.style.opacity = '1';
      scrollToTopBtn.style.pointerEvents = 'auto';
    } else {
      scrollToTopBtn.style.opacity = '0';
      scrollToTopBtn.style.pointerEvents = 'none';
    }
  });
}