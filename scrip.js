const images = document.querySelector('.carousel-images');
let currentIndex = 0;
const totalImages = images.children.length;

function startCarousel() {
    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarouselPosition();
    }, 3000); // Change d'image toutes les 3 secondes
}

function updateCarouselPosition() {
    const offset = -currentIndex * 100; // Déplace de 100% à chaque image
    images.style.transform = `translateX(${offset}vw)`; // Applique le déplacement
}

// Initialisation du carousel au chargement
startCarousel();
