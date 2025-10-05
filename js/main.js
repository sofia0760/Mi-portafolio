// Cambiar color de navbar al hacer scroll
documents.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Activar el link actual en el menú
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// Generar estrellas dinámicamente según el nivel
document.querySelectorAll(".stars").forEach((starContainer) => {
  const level = parseInt(starContainer.getAttribute("data-level"));
  for (let i = 1; i <= 5; i++) {
    const star = document.createElement("i");
    star.classList.add("bi", "bi-star-fill");
    if (i <= level) star.classList.add("active");
    starContainer.appendChild(star);
  }
});

// Efecto de halo en el proyecto activo del carrusel
const carousel = document.getElementById("carouselProyectos");

carousel.addEventListener("slide.bs.carousel", (event) => {
  const cards = document.querySelectorAll(".proyecto-card");
  cards.forEach((card) => card.classList.remove("active-card"));

  const activeItem = carousel.querySelectorAll(".carousel-item")[event.to];
  const activeCard = activeItem.querySelector(".proyecto-card");
  if (activeCard) activeCard.classList.add("active-card");
});
