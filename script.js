 
const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox.querySelector('img');
const closeBtn = lightbox.querySelector('.close');
const prevBtn = lightbox.querySelector('.prev');
const nextBtn = lightbox.querySelector('.next');
let currentIndex = 0;

galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImage.src = img.src;
        currentIndex = index;
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : galleryImages.length - 1;
    lightboxImage.src = galleryImages[currentIndex].src;
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < galleryImages.length - 1) ? currentIndex + 1 : 0;
    lightboxImage.src = galleryImages[currentIndex].src;
});

function toggleSidebar() {
            document.getElementById('sidebar').classList.toggle('active');
        }
