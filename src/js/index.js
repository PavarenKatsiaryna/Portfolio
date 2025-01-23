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
  function changeClassActive(event) {
    let current = event.target;
    allButtons.forEach((el) => {
      if (el.classList.contains("activeBtn")) {
        el.classList.remove("activeBtn");
      }
    });
    current.classList.add("activeBtn");
  }
  allButtons.forEach((el) => {
    el.addEventListener("click", changeClassActive);
  });

  // Translate page - en/ru
  let lang;
  let translations = {
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
  // Выборка всех элементов на странице, которые имеют атрибут data-language
  const languageButtons = document.querySelectorAll("[data-language]");
  function getTranslate(event) {
    // Получает выбранный язык из нажатой кнопки
    let language = event.target.dataset.language;
    // Устанавливает текущий язык
    lang = language;
    // Сохраняет текущий язык в localStorage для дальнейшего использования
    localStorage.setItem("lang", lang);
    // Получает все элементы для перевода
    const allElements = document.querySelectorAll("[data-translate]");
    // Обновляет текст элементов на странице
    allElements.forEach((element) => {
      element.textContent = translations[language][element.dataset.translate];
    });
  }
  // На каждую кнопку добавляется обработчик события click
  languageButtons.forEach((el) => {
    el.addEventListener("click", getTranslate);
  });

  // icons-footer
  // Объект для хранения новых изображений
  const newImages = {
    "inst-link": "./images/newImage-instagram.png",
    "fb-link": "./images/newImage-facebook.png",
    "tw-link": "./images/newImage-twitter.png",
    "pinterest-link": "./images/newImage-pinterest.png",
  };
  // Получаем все элементы иконок
  const socLinks = document.querySelectorAll(".soc-link");
  // Добавляем обработчики событий для смены изображений
  socLinks.forEach((link) => {
    const image = link.querySelector("img");
    // Сохранение оригинального src
    const originalSrc = image.getAttribute("src");
    // Смена изображения на новое при наведении
    link.addEventListener("mouseover", () => {
      const id = link.id;
      if (newImages[id]) {
        image.src = newImages[id];
      }
      // Возврат к исходному изображению при уходе мыши
      link.addEventListener("mouseleave", () => {
        image.src = originalSrc;
      });
    });
  });
});

