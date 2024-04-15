// Obtener el contenedor del carrusel
const container = document.querySelector('.containerCards');

// Obtener las tarjetas de producto
const cards = document.querySelectorAll('.cardProduct');

// Obtener los botones de navegación
const prevButton = document.querySelector('.prevButton');
const nextButton = document.querySelector('.nextButton');

// Ancho de las tarjetas
const cardWidth = cards[0].offsetWidth; // Suponiendo que todas las tarjetas tienen el mismo ancho

// Cantidad de tarjetas visibles en el contenedor
const visibleCards = Math.floor(container.offsetWidth / cardWidth);

// Cantidad de tarjetas que se desplazan con cada clic
const cardsToScroll = visibleCards;

// Configurar el desplazamiento del carrusel al hacer clic en el botón "Anterior"
prevButton.addEventListener('click', () => {
  container.scrollBy({
    left: -cardWidth * cardsToScroll,
    behavior: 'smooth'
  });
});

// Configurar el desplazamiento del carrusel al hacer clic en el botón "Siguiente"
nextButton.addEventListener('click', () => {
  container.scrollBy({
    left: cardWidth * cardsToScroll,
    behavior: 'smooth'
  });
});