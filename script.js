// Lightbox functionality
const images = document.querySelectorAll('.movie-image');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');

images.forEach(image => {
    image.addEventListener('click', () => {
        const src = image.getAttribute('src');
        lightbox.style.display = 'flex';
        lightboxImage.src = src;
    });
});

function closeLightbox() {
    lightbox.style.display = 'none';
}
