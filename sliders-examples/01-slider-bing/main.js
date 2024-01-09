const images = document.querySelectorAll('.slider img');
const imageTexts = document.querySelectorAll('.slide-content');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let currentImageIndex = 0;
let currentImageTextsIndex = 0;
let interval;

console.log(imageTexts)
function startSlider() {
  interval = setInterval(() => {
    images[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.add('active');

    imageTexts[currentImageTextsIndex].classList.remove('active-text');
    currentImageTextsIndex = (currentImageTextsIndex + 1) % imageTexts.length;
    imageTexts[currentImageTextsIndex].classList.add('active-text');
  }, 3000);
}

function stopSlider() {
  clearInterval(interval);
}

function prevImage() {
  images[currentImageIndex].classList.remove('active');
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  images[currentImageIndex].classList.add('active');

  imageTexts[currentImageTextsIndex].classList.remove('active-text');
  currentImageTextsIndex = (currentImageTextsIndex - 1 + imageTexts.length) % imageTexts.length;
  imageTexts[currentImageTextsIndex].classList.add('active-text');
}

function nextImage() {
  images[currentImageIndex].classList.remove('active');
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].classList.add('active');

  imageTexts[currentImageTextsIndex].classList.remove('active-text');
  currentImageTextsIndex = (currentImageTextsIndex + 1) % imageTexts.length;
  imageTexts[currentImageTextsIndex].classList.add('active-text');
}

prevButton.addEventListener('click', () => {
  stopSlider();
  prevImage();
});

nextButton.addEventListener('click', () => {
  stopSlider();
  nextImage();
});

startSlider();
