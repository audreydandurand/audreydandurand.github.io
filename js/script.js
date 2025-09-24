
var swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

var swiper3 = new Swiper(".mySwiper3", {
  loop: true,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper4 = new Swiper(".mySwiper4", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

var swiper5= new Swiper(".mySwiper5", {
  loop: true,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper6 = new Swiper(".mySwiper6", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
  zoom: {
    maxRatio: 3, // zoom maximum 3x
    minRatio: 1, // zoom minimum 1x
  },
});

var swiper7 = new Swiper(".mySwiper7", {
  loop: true,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper8 = new Swiper(".mySwiper8", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

var swiper9 = new Swiper(".mySwiper9", {
  loop: true,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper10 = new Swiper(".mySwiper10", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
    zoom: {
    maxRatio: 3, // zoom maximum 3x
    minRatio: 1, // zoom minimum 1x
  },
});

//Onglet de sélection de style de vidéos et application des couleurs aux sections

const buttons = document.querySelectorAll("[data-filter]");
const items = document.querySelectorAll(".video-item");

const colors = ["white", "var(--bs-secondary)", "white", "var(--bs-secondary)"]; // alternance définie

function applyFilter(filter) {
  const visibleItems = [];
  
  items.forEach(item => {
    if (filter === "all" || item.getAttribute("data-category") === filter) {
      item.style.display = "block";
      visibleItems.push(item);
    } else {
      item.style.display = "none";
    }
  });

  visibleItems.forEach((item, index) => {
    item.style.backgroundColor = colors[index % colors.length];
  });
}

// Au clic sur un bouton
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    // Gestion active
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");
    applyFilter(filter);
  });
});

// Appliquer au chargement de la page pour l'onglet actif par défaut
document.addEventListener("DOMContentLoaded", () => {
  const activeBtn = document.querySelector("[data-filter].active") || buttons[0];
  const filter = activeBtn.getAttribute("data-filter");
  applyFilter(filter);
});
