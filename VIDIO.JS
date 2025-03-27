
function createCard(videoSrc, altText) {
    const card = document.createElement('div');
    card.classList.add('card');

    const video = document.createElement('video');
    video.src = videoSrc;
    video.alt = altText;
    video.controls = true;
    
    const button = document.createElement('button');
    button.classList.add('download');
    button.textContent = 'Download';

    card.appendChild(video);
    card.appendChild(button);
    
    gallery.appendChild(card);
  }

  for (let i = 1; i <= 400; i++) {
    createCard(`https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_${i % 10}.mp4`, `Video ${i}`);
  }