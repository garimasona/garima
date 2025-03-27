const gallery = document.getElementById('gallery');

// Function to generate image cards
function createImageCard(imageSrc, altText) {
  const card = document.createElement('div');
  card.classList.add('card');

  const img = document.createElement('img');
  img.src = imageSrc;
  img.alt = altText;

  card.appendChild(img);
  gallery.appendChild(card);
}

// Generate 100 images dynamically
for (let i = 1; i <= 100; i++) {
  createImageCard(`images/image${i}.jpg`, `Image ${i}`);
}
