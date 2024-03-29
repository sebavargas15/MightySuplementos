document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const inner = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
  
    let index = 0;
    let isAnimating = false; // Bandera para indicar si la animación está en curso
    const totalItems = items.length;
    const itemWidth = items[0].offsetWidth;
  
    function slide(direction) {
        if (!isAnimating) { // Verifica si no hay animación en curso
          isAnimating = true; // Marca que la animación está en curso
          if (direction === 'next' && index < totalItems - 1) {
            index++;
          } else if (direction === 'next' && index === totalItems - 1) {
            index = 0; // Si estamos en la última imagen, vuelve a la primera
          } else if (direction === 'prev' && index > 0) {
            index--;
          } else if (direction === 'prev' && index === 0) {
            index = totalItems - 1; // Si estamos en la primera imagen, ve a la última
          } else if (direction === 'auto') {
            index = (index + 1) % totalItems;
          }
      
          inner.style.transform = `translateX(-${index * itemWidth}px)`;
          
          // Después de la animación, restablece la bandera de animación
          setTimeout(function() {
            isAnimating = false;
          }, 500); // Ajusta este valor al tiempo de duración de tu animación en milisegundos
        }
      }
    prevBtn.addEventListener('click', function() {
      slide('prev');
    });
  
    nextBtn.addEventListener('click', function() {
      slide('next');
    });

    // Establece un intervalo para llamar a slide() automáticamente cada 3 segundos
    setInterval(function() {
      slide('auto');
    }, 3000);
});