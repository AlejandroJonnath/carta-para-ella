const envelope = document.getElementById('envelope');
const letter = document.getElementById('letter');
const music = document.getElementById('bg-music');
const volumeSlider = document.getElementById('volume-slider');

// Set initial volume to 40%
music.volume = 0.4;

envelope.addEventListener('click', () => {
  envelope.src = 'assets/open-envelope.png';
  envelope.style.transform = 'scale(0.9)';
  letter.classList.remove('hidden');
  letter.style.display = 'block';
  music.play();
});

// Update volume when slider is moved
volumeSlider.addEventListener('input', (event) => {
  music.volume = event.target.value;
});
