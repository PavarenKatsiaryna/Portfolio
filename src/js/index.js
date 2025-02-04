document.addEventListener("DOMContentLoaded", () => {
  // Burger-menu
  const refs = {
    openModalBtn: document.querySelector(".header-burger"),
    menu: document.querySelector(".burger-menu"),
    menuItems: document.querySelectorAll(".burger-menu li"),
    body: document.querySelector("body"),
  };

  function toggleModal() {
    refs.openModalBtn.classList.toggle("active");
    refs.menu.classList.toggle("active");
    refs.body.classList.toggle("lock");
  }

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.menuItems.forEach((el) => {
    el.addEventListener("click", toggleModal);
  });

  // Illumination of the activeBtn - en/ru
  const allButtons = document.querySelectorAll(".button");
let lang; 
const translations = {
  en: {
    skills: "Skills",
    portfolio: "Portfolio",
    video: "Video",
    price: "Price",
    contacts: "Contacts",
    "hero-title": "Alexa Rise",
    "hero-text":
      "Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise",
    hire: "Hire me",
  },
  ru: {
    skills: "Навыки",
    portfolio: "Портфолио",
    video: "Видео",
    price: "Цены",
    contacts: "Контакты",
    "hero-title": "Алекса Райс",
    "hero-text":
      "Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом",
    hire: "Пригласить",
  },
};

// Функция для изменения активного класса
function changeClassActive(event) {
  let current = event.target;

  allButtons.forEach((el) => {
    if (el.classList.contains("activeBtn")) {
      el.classList.remove("activeBtn");
    }
  });

  current.classList.add("activeBtn");
}

// Получение языка из localStorage 
function initializeLanguage() {
  lang = localStorage.getItem("lang") || "en";
  const languageButton = document.querySelector(`[data-language="${lang}"]`);
  if (languageButton) {
    languageButton.classList.add("activeBtn");
  }
  translatePage(lang);
}

// Функция перевода страницы
function translatePage(language) {
  const allElements = document.querySelectorAll("[data-translate]");
  allElements.forEach((element) => {
    element.textContent = translations[language][element.dataset.translate];
  });
}

// Обработчик событий для кнопок выбора языка
function getTranslate(event) {
  let language = event.target.dataset.language;
  lang = language;
  localStorage.setItem("lang", lang);
  
  changeClassActive(event); // Обновить активный класс
  translatePage(language); // Перевести страницу
}

// Установка обработчиков событий на кнопки выбора языка
const languageButtons = document.querySelectorAll("[data-language]");
languageButtons.forEach((el) => {
  el.addEventListener("click", getTranslate);
});

// Инициализация языка при загрузке страницы
initializeLanguage();

});

