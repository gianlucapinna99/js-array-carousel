const images = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"];
let currentImage = 0;

const imageEl = document.getElementById('image');
const prevArrowEl = document.getElementById('prev-arrow');
const nextArrowEl = document.getElementById('next-arrow');

function updateImage() {
  imageEl.setAttribute('src', images[currentImage]);
}

prevArrowEl.addEventListener('click', function() {
  currentImage--;
  if (currentImage < 0) {
    currentImage = images.length - 1;
  }
  updateImage();
});

nextArrowEl.addEventListener('click', function() {
  currentImage++;
  if (currentImage >= images.length) {
    currentImage = 0;
  }
  updateImage();
});

