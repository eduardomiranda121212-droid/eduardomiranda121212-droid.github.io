document.addEventListener("DOMContentLoaded", () => {
    const imgs = document.querySelectorAll(".imagenes img");
    imgs.forEach(img => {
      img.addEventListener("click", () => {
        alert("¡Qué linda foto! ❤️");
      });
    });
  });
  