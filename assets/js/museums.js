// assets/js/museums.js
document.addEventListener("DOMContentLoaded", () => {
  const places = [
    {
      name: "Нижегородский художественный музей",
      area: "Кремль, корпус на Кремлёвском бульваре",
      type: "Классическое и современное искусство",
      desc: "Главный музей региона с постоянной коллекцией и крупными выставками российских художников.",
      link: "https://artmuseum-nn.ru/"
    },
    {
      name: "Арсенал",
      area: "Нижегородский кремль",
      type: "Центр современного искусства",
      desc: "Филиал художественного музея, специализирующийся на современном искусстве и междисциплинарных проектах.",
      link: "https://arsenal-museum.art/"
    },
    {
      name: "Галерея современного искусства",
      area: "ул. Белинского",
      type: "Галерея и выставочное пространство",
      desc: "Площадка для выставок молодых художников, кураторских проектов и образовательных программ.",
      link: ""
    },
    {
      name: "Домик Каширина",
      area: "ул. Почаинская",
      type: "Литературно-мемориальный музей",
      desc: "Историческое пространство, где проходят камерные выставки графики, иллюстрации и плаката.",
      link: ""
    },
    {
      name: "Выставочный зал на Ильинке",
      area: "Ильинская слобода",
      type: "Выставочный зал",
      desc: "Место локальных выставок художников, работающих с темой города и повседневности.",
      link: ""
    },
    {
      name: "Нижегородский центр фотографии",
      area: "Центр города",
      type: "Фотография",
      desc: "Специализированная площадка, где регулярно показывают документальные и художественные фотопроекты.",
      link: ""
    }
  ];

  const container = document.getElementById("places-grid");
  if (!container) return;

  places.forEach(place => {
    const card = document.createElement("article");
    card.className = "place-card";

    card.innerHTML = `
      <h3>${place.name}</h3>
      <div class="place-meta">${place.type}${place.area ? " · " + place.area : ""}</div>
      <p class="place-desc">${place.desc}</p>
      ${
        place.link
          ? `<div class="place-link">
               <a href="${place.link}" target="_blank" rel="noopener">Перейти на сайт ↗</a>
             </div>`
          : ""
      }
    `;

    container.appendChild(card);
  });
});
