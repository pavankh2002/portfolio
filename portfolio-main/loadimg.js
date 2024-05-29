const photoGallery = document.querySelector('.gallery');
const photo = document.querySelector('.photo');
const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');
const photos = ['css/pcb.jpg','css/matlab.jpg', 'css/html.jpg', 'css/ip.jpg', 'css/css.jpg', 'css/pcb2.jpg', 'css/yam.jpg']; // Add your photo URLs here

let currentIndex = 0;

function showPhoto(index) {
  if (index < 0 || index >= photos.length) {
    return;
  }

  currentIndex = index;
  photo.src = photos[currentIndex];
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + photos.length) % photos.length;
  showPhoto(currentIndex);
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % photos.length;
  showPhoto(currentIndex);
});

// Show the initial photo
showPhoto(currentIndex);